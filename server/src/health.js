const os = require('os');

const getHealthStatus = () => {
  const healthStatus = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    platform: process.platform,
    nodeVersion: process.version,
    memory: {
      used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
      total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
      external: Math.round(process.memoryUsage().external / 1024 / 1024),
    },
    system: {
      platform: os.platform(),
      arch: os.arch(),
      cpus: os.cpus().length,
      totalMemory: Math.round(os.totalmem() / 1024 / 1024 / 1024),
      freeMemory: Math.round(os.freemem() / 1024 / 1024 / 1024),
      loadAverage: os.loadavg(),
    },
  };

  // Check if memory usage is high
  const memoryUsagePercent =
    (healthStatus.memory.used / healthStatus.memory.total) * 100;
  if (memoryUsagePercent > 80) {
    healthStatus.status = 'warning';
    healthStatus.warnings = ['High memory usage detected'];
  }

  // Check if uptime is very low (recent restart)
  if (healthStatus.uptime < 60) {
    healthStatus.status = 'starting';
    healthStatus.info = 'Application recently started';
  }

  return healthStatus;
};

const healthMiddleware = (req, res) => {
  const health = getHealthStatus();

  // Set appropriate status code
  const statusCode =
    health.status === 'healthy' ? 200 : health.status === 'warning' ? 200 : 503;

  res.status(statusCode).json(health);
};

module.exports = {
  getHealthStatus,
  healthMiddleware,
};
