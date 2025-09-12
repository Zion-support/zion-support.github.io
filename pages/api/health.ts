import React from 'react';
import Head from 'next/head';

interface SystemHealth {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: number;
  uptime: number;
  version: string;
  commit: string;
  timestamp: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse | { error: string; status: string }>
) {
  if (req.method === 'GET') {
    try {
      const { publicRuntimeConfig } = getConfig();

      let version = publicRuntimeConfig.NEXT_PUBLIC_APP_VERSION || "unknown";
      if (version === "unknown") {
        console.warn("Application version not set (NEXT_PUBLIC_APP_VERSION). Defaulting to 'unknown'.");
      }
      const commit = process.env.COMMIT_REF || "unknown"; // COMMIT_REF is not a public var
      const timestamp = new Date().toISOString();
      res.status(200).json({ status: 'ok', version, commit, timestamp });
    } catch (error) {
      console.error('Failed to retrieve health information:', error);
      res.status(500).json({ error: 'Failed to retrieve health information.', status: 'error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function performHealthChecks(): Promise<SystemHealth['checks']> {
  const checks: SystemHealth['checks'] = {};

  // Memory check
  try {
    const memoryUsage = process.memoryUsage();
    const totalMemoryMB = memoryUsage.heapTotal / 1024 / 1024;
    const usedMemoryMB = memoryUsage.heapUsed / 1024 / 1024;
    const memoryUsagePercent = (usedMemoryMB / totalMemoryMB) * 100;

    checks.memory = {
      status: memoryUsagePercent > 80 ? 'unhealthy' : memoryUsagePercent > 60 ? 'degraded' : 'healthy',
      usage: Math.round(usedMemoryMB),
      limit: Math.round(totalMemoryMB)
    };
  } catch (error) {
    checks.memory = {
      status: 'unhealthy',
      usage: 0,
      limit: 0
    };
  }

  // Database connectivity check (if applicable)
  try {
    const dbStartTime = Date.now();
    
    // For this app, we can check Supabase connectivity
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const response = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: 'HEAD',
        headers: {
          'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
        },
        signal: AbortSignal.timeout(5000) // 5 second timeout
      });
      
      const responseTime = Date.now() - dbStartTime;
      
      checks.database = {
        status: response.ok ? 'healthy' : 'unhealthy',
        message: response.ok ? 'Database connection successful' : `Database connection failed: ${response.status}`,
        responseTime
      };
    } else {
      checks.database = {
        status: 'healthy',
        message: 'No database configuration found'
      };
    }
  } catch (error) {
    checks.database = {
      status: 'unhealthy',
      message: `Database connection failed: ${error}`,
      responseTime: 5000
    };
  }

  // Disk space check (basic)
  try {
    // In serverless environments like Netlify, disk checks are limited
    // We'll just check if we can write to tmp directory
    const fs = await import('fs');
    const path = await import('path');
    
    const tmpDir = process.env.TMPDIR || '/tmp';
    const testFile = path.join(tmpDir, 'health-check-test');
    
    fs.writeFileSync(testFile, 'test');
    fs.unlinkSync(testFile);
    
    checks.disk = {
      status: 'healthy',
      usage: 0, // Not available in serverless
      available: 0 // Not available in serverless
    };
  } catch (error) {
    checks.disk = {
      status: 'unhealthy',
      usage: 0,
      available: 0
    };
  }

  // Services check (external dependencies)
  try {
    const serviceChecks = await Promise.allSettled([
      // Check if we can reach external services
      fetch('https://api.github.com', { method: 'HEAD', signal: AbortSignal.timeout(3000) }),
      // Add other service checks as needed
    ]);

    const failedServices = serviceChecks.filter(result => result.status === 'rejected').length;
    
    checks.services = {
      status: failedServices === 0 ? 'healthy' : failedServices < serviceChecks.length ? 'degraded' : 'unhealthy',
      message: `${serviceChecks.length - failedServices}/${serviceChecks.length} external services accessible`
    };
  } catch (error) {
    checks.services = {
      status: 'unhealthy',
      message: `Service checks failed: ${error}`
    };
  }

  return checks;
}

async function gatherMetrics(): Promise<SystemHealth['metrics']> {
  const metrics: SystemHealth['metrics'] = {};

  try {
    // Basic process metrics
    const memoryUsage = process.memoryUsage();
    
    // In a real application, these would come from monitoring systems
    // For now, we'll provide basic information
    metrics.requestsPerMinute = 0; // Would be tracked by middleware
    metrics.averageResponseTime = 0; // Would be tracked by middleware
    metrics.errorRate = 0; // Would be tracked by error monitoring
    metrics.activeConnections = 0; // Would be tracked by connection monitoring

    // Note: In production, you would typically use:
    // - Application performance monitoring (APM) tools
    // - Metrics collection systems (Prometheus, DataDog, etc.)
    // - Load balancer metrics
    // - Database connection pool metrics

  } catch (error) {
    console.error('Failed to gather metrics:', error);
  }

  return metrics;
}

function calculateOverallStatus(checks: SystemHealth['checks']): 'healthy' | 'degraded' | 'unhealthy' {
  const checkValues = Object.values(checks).map(check => check?.status).filter(Boolean);
  
  if (checkValues.includes('unhealthy')) {
    return 'unhealthy';
  }
  
  if (checkValues.includes('degraded')) {
    return 'degraded';
  }
  
  return 'healthy';
}

function getHttpStatusCode(status: 'healthy' | 'degraded' | 'unhealthy'): number {
  switch (status) {
    case 'healthy':
      return 200;
    case 'degraded':
      return 200; // Still operational but with issues
    case 'unhealthy':
      return 503; // Service unavailable
    default:
      return 500;
  }
}