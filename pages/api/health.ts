import type { NextApiRequest, NextApiResponse } from 'next';

interface HealthResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
  services: {
    database: boolean;
    cache: boolean;
    external: boolean;
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HealthResponse>) {
  if (req.method !== "GET") {
    return res.status(405).json({ 
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      uptime: 0,
      version: "1.0.0",
      environment: process.env.NODE_ENV || "development",
      services: {
        database: false,
        cache: false,
        external: false
      }
    });
  }

  try {
    const startTime = Date.now();
    
    // Simulate health checks
    const healthData: HealthResponse = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: "1.0.0",
      environment: process.env.NODE_ENV || "development",
      services: {
        database: true, // Simulate database check
        cache: true,    // Simulate cache check
        external: true  // Simulate external service check
      }
    };

    // Add a small delay to simulate real health checks
    setTimeout(() => {
      res.status(200).json(healthData);
    }, 100);

  } catch (error) {
    res.status(500).json({
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: "1.0.0",
      environment: process.env.NODE_ENV || "development",
      services: {
        database: false,
        cache: false,
        external: false
      }
    });
  }
}