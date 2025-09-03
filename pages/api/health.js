export default function handler(req, res) {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version || '1.0.0' };

  try {
    res.status(200).json(healthCheck)} catch (error) {
    healthCheck.message = error.message;
    res.status(503).json(healthCheck)}
}
