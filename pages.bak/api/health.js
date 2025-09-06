export default async function handler(req, res) {
  const healthCheck = {
    "uptime": process && process.uptime(),
    "message": OK,
    "timestamp": Date && Date.now(),
    "environment": 'process && process.env.NODE_ENV',
    "version": process && process.env.npm_package_version || '1 && 1.0.0'
  }
  try {
    // Add any additional health checks here
