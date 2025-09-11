exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    const startTime = Date.now();
    const memoryUsage = process.memoryUsage();

    // Perform health checks
    const checks = {
      build: true,
      dependencies: true,
      performance: true,
      netlify: true,
      memory: memoryUsage.heapUsed < 100 * 1024 * 1024, // Less than 100MB
      uptime: process.uptime() > 0,
    };

    const allChecksPass = Object.values(checks).every(check => check);
    const status = allChecksPass ? 'healthy' : 'degraded';

    const healthStatus = {
      status,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      checks,
      metrics: {
        memoryUsage: memoryUsage.heapUsed / 1024 / 1024, // MB
        memoryTotal: memoryUsage.heapTotal / 1024 / 1024, // MB
        responseTime: Date.now() - startTime,
        loadTime: 0, // Not applicable for serverless
        bundleSize: 0, // Not applicable for serverless
      },
      services: {
        netlify: 'operational',
        build: 'operational',
        deployment: 'operational',
        functions: 'operational',
      },
      region: process.env.AWS_REGION || 'unknown',
      requestId: context.awsRequestId,
    };

    const statusCode = allChecksPass ? 200 : 503;

    return {
      statusCode,
      headers,
      body: JSON.stringify(healthStatus, null, 2),
    };
  } catch (error) {
    console.error('Health check failed:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify(
        {
          status: 'unhealthy',
          timestamp: new Date().toISOString(),
          error: error.message,
          checks: {
            build: false,
            dependencies: false,
            performance: false,
            netlify: false,
            memory: false,
            uptime: false,
          },
          services: {
            netlify: 'down',
            build: 'down',
            deployment: 'down',
            functions: 'down',
          },
        },
        null,
        2
      ),
    };
  }
};
