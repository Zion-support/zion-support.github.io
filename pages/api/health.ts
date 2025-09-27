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
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const healthData: HealthResponse = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    services: {
      database: 'connected',
      cache: 'connected',
      analytics: 'active'
    }
  };

  res.status(200).json(healthData);
}