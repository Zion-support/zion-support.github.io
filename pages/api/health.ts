import { NextApiRequest, NextApiResponse } from 'next';

interface HealthResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
  services: {
    database: 'connected' | 'disconnected';
    cache: 'connected' | 'disconnected';
    analytics: 'active' | 'inactive';
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      services: {
        database: 'disconnected',
        cache: 'disconnected',
        analytics: 'inactive'
      }
    });
  }

  const healthResponse: HealthResponse = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    services: {
      database: 'connected',
      cache: 'connected',
      analytics: 'active'
    }
  };

  res.status(200).json(healthResponse);
}