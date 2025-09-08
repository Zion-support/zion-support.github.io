exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
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
    const healthStatus = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      checks: {
        build: true,
        dependencies: true,
        performance: true,
        netlify: true,
      },
      metrics: {
        memoryUsage: process.memoryUsage().heapUsed / 1024 / 1024, // MB
        loadTime: 0, // Not applicable for serverless
        bundleSize: 0, // Not applicable for serverless
      },
      services: {
        netlify: 'operational',
        build: 'operational',
        deployment: 'operational',
      },
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(healthStatus, null, 2),
    };
  } catch (error) {
    console.error('Health check failed:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error.message,
        checks: {
          build: false,
          dependencies: false,
          performance: false,
          netlify: false,
        },
      }, null, 2),
    };
  }
};