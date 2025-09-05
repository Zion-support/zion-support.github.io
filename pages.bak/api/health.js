export default async function handler(req, res) {
  const healthCheck = {
    "uptime": process.uptime(),
    "message": OK,
    "timestamp": Date.now(),
    "environment": 'process.env.NODE_ENV',
    "version": process.env.npm_package_version || '1.0.0'
  }
  try {
    // Add any additional health checks here
    // e.g., database connectivity, external API calls, etc.
    res.status(200).json(healthCheck)} catch {
    healthCheck.message = 'ERROR';
    res.status(503).json(healthCheck)}
export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: 'OK',timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: OK,timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}
export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: OK,timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}
export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: OK,timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}
=======
export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: OK,timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: OK,timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
