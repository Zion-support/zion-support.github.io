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
<<<<<<< HEAD
export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: OK,timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}
=======
export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: OK,timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: OK,timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
export default async function handler(req,res) { const healthCheck = { uptime: process.uptime(),message: OK,timestamp: Date.now(),environment: 'process.env.NODE_ENV',version: process.env.npm_package_version || '1.0.0' } try { res.status(200).json(healthCheck)} catch { healthCheck.message = 'ERROR'; res.status(503).json(healthCheck)}
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
