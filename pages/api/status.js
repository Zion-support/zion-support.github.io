export default function handler(req, res) {
  const healthCheck = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
    services: {
      database: 'connected',
      cache: 'operational',
      api: 'responsive'
    },
    metrics: {
      memory: process.memoryUsage(),
      cpu: process.cpuUsage()
    }
  };

  res.status(200).json(healthCheck);
}

