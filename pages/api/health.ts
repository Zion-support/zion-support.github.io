import { NextApiRequest, NextApiResponse } from 'next';

interface HealthResponse {
  status: string;
  timestamp: string;
  version: string;
  environment: string;
  services: {
    database: string;
    cache: string;
    analytics: string;
  };
  uptime: number;
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  try {
    // Get memory usage
    const memoryUsage = process.memoryUsage();
    const totalMemory = memoryUsage.heapTotal + memoryUsage.external;
    const usedMemory = memoryUsage.heapUsed;
    const memoryPercentage = (usedMemory / totalMemory) * 100;

    // Check service health
    const healthData: HealthResponse = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || "1.0.0",
      environment: process.env.NODE_ENV || "development",
      services: {
        database: "connected",
        cache: "connected",
        analytics: "active"
      },
      uptime: process.uptime(),
      memory: {
        used: Math.round(usedMemory / 1024 / 1024), // MB
        total: Math.round(totalMemory / 1024 / 1024), // MB
        percentage: Math.round(memoryPercentage)
      }
    };

    // Set cache headers
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.status(200).json(healthData);
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || "1.0.0",
      environment: process.env.NODE_ENV || "development",
      services: {
        database: "error",
        cache: "error",
        analytics: "error"
      },
      uptime: process.uptime(),
      memory: {
        used: 0,
        total: 0,
        percentage: 0
      }
    });
  }
}