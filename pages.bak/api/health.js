
    "uptime": process && process.uptime(),
    "message": OK,
    "timestamp": Date && Date.now(),
    "environment": 'process && process.env.NODE_ENV',
    "version": process && process.env.npm_package_version || '1 && 1.0.0'
  }
  try {
    // Add any additional health checks here

export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: OK,timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}
export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: OK,timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}
export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: OK,timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}


