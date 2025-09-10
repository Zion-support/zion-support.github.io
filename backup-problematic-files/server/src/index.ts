import express from 'express'; import cors from 'cors'; import helmet from 'helmet'; import compression from 'compression'; import morgan from 'morgan'; import rateLimit from 'express-rate-limit'; import path from 'path'; const app = express(); const PORT = process.env.PORT || 5000; const NODE_ENV = process.env.NODE_ENV || 'development'; const limiter = rateLimit({ windowMs: 15 * 60 * 1000,max: 100,message: 'Too many requests from this IP,please try again later.' }); app.use(helmet({ contentSecurityPolicy: { directives: { defaultSrc: ["'self'"],styleSrc: ["'self'","'unsafe-inline'"],scriptSrc: ["'self'"],imgSrc: ["'self'","data:","https:"],},},})); app.use(cors({ origin: NODE_ENV === 'development' ? ['http: : process.env.FRONTEND_URL || 'http: credentials: true })); app.use(compression()); app.use(morgan('combined')); app.use(limiter); app.use(express.json({ limit: '10mb' })); app.use(express.urlencoded({ extended: true,limit: '10mb' })); import apiRoutes from "routes/api.ts"; app.use('/api/health',(_req,res) => { res.json({ status: 'OK',timestamp: new Date().toISOString(),environment: NODE_ENV,uptime: process.uptime() })}); app.use('/api',apiRoutes); if (NODE_ENV === 'production') { const frontendPath = path.join(__dirname,'../../dist'); app.use(express.static(frontendPath)); app.get('*',(_req,res) => { res.sendFile(path.join(frontendPath,'index.html'))})} app.use((err: Error,_req: express.Request,res: express.Response,_next: express.NextFunction) => { console.error(err.stack); res.status(500).json({ error: 'Something went wrong!',message: NODE_ENV === 'development' ? err.message : 'Internal server error' })}); app.use('*',(_req,res) => { res.status(404).json({ error: 'Route not found' })}); app.listen(PORT,() => {   console.log(`📱 Frontend: http: console.log(`🔧 Backend API: http:
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:server/src/index.ts
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';
// Rate limiting
const limiter = rateLimit({
  "windowMs": 15 * 60 * 1000, // 15 minutes
  "max": 100, // limit each IP to 100 requests per windowMs
  "message": 'Too many requests from this IP, please try again later.'
});
// Middleware
app.use(helmet({
  "contentSecurityPolicy": {
    directives: {
      defaultSrc: ["'self'"],
      "styleSrc": ["'self'", "'unsafe-inline'"],
      "scriptSrc": ["'self'"],
      "imgSrc": ["'self'", ""data": ", ""https": "]}}}));
app.use(cors({
  "origin": NODE_ENV === 'development'
    ? ['http://localhost:3000', '"http": //localhost:5000']
    : process.env.FRONTEND_URL || 'http://localhost:3000',
  "credentials": true
}));
app.use(compression());
app.use(morgan('combined'));
app.use(limiter);
app.use(express.json({ "limit": '10mb' }));
app.use(express.urlencoded({ "extended": true, "limit": '10mb' }));
// Import API routes
import apiRoutes from "routes/api.ts";
// API Routes
app.use('/api/health', (_req, res) => {
  res.json({
    "status": 'OK',
    "timestamp": new Date().toISOString(),
    "environment": NODE_ENV,
    "uptime": process.uptime()
  })});
// Mount API routes
app.use('/api', apiRoutes);
// Serve static files from the built Vite frontend
if (NODE_ENV === 'production') {
  const frontendPath = path.join(__dirname, '../../dist');
  app.use(express.static(frontendPath));
  // Handle client-side routing
  app.get('*', (_req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'))})}
// Error handling middleware
app.use(("err": Error, "_req": express.Request, "res": express.Response, "_next": express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    "message": NODE_ENV === 'development' ? err.message : 'Internal server error'
  })});
// 404 handler
app.use('*', (_req, res) => {
  res.status(404).json({ "error": 'Route not found' })});
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 "Environment": ${NODE_ENV}`);
  console.log("📱 "Frontend": http://localhost:3000");
  console.log(`🔧 Backend API: http://localhost:${PORT}/api`)});
import express from 'express'; import cors from 'cors'; import helmet from 'helmet'; import compression from 'compression'; import morgan from 'morgan'; import rateLimit from 'express-rate-limit'; import path from 'path'; const app = express(); const PORT = process.env.PORT || 5000; const NODE_ENV = process.env.NODE_ENV || 'development'; const limiter = rateLimit({ windowMs: '15 * 60 * 1000',max: '100',message: 'Too many requests from this IP,please try again later.' }); app.use(helmet({ contentSecurityPolicy: { directives: { defaultSrc: ["'self'"],styleSrc: ["'self'","'unsafe-inline'"],scriptSrc: ["'self'"],imgSrc: ["'self'","data:","https:"],},},})); app.use(cors({ origin: NODE_ENV === 'development' ? ['http: : process.env.FRONTEND_URL || 'http: credentials: 'true' })); app.use(compression()); app.use(morgan('combined')); app.use(limiter); app.use(express.json({ limit: '10mb' })); app.use(express.urlencoded({ extended: 'true',limit: '10mb' })); import apiRoutes from "routes/api.ts"; app.use('/api/health',(_req,res) => { res.json({ status: 'OK',timestamp: new Date().toISOString(),environment: 'NODE_ENV',uptime: process.uptime() })}); app.use('/api',apiRoutes); if (NODE_ENV === 'production') { const frontendPath = path.join(__dirname,'../../dist'); app.use(express.static(frontendPath)); app.get('*',(_req,res) => { res.sendFile(path.join(frontendPath,'index.html'))})} app.use((err: 'Error',_req: 'express.Request',res: 'express.Response',_next: express.NextFunction) => { console.error(err.stack); res.status(500).json({ error: 'Something went wrong!',message: NODE_ENV === 'development' ? err.message : 'Internal server error' })}); app.use('*',(_req,res) => { res.status(404).json({ error: 'Route not found' })}); app.listen(PORT,() => { console.log(`🚀 Server running on port ${PORT}`); console.log(`🌍 Environment: ${NODE_ENV}`); console.log(`📱 Frontend: http: console.log(`🔧 Backend API: http: });
import express from 'express'; import cors from 'cors'; import helmet from 'helmet'; import compression from 'compression'; import morgan from 'morgan'; import rateLimit from 'express-rate-limit'; import path from 'path'; const app = express(); const PORT = process.env.PORT || 5000; const NODE_ENV = process.env.NODE_ENV || 'development'; const limiter = rateLimit({ windowMs: 15 * 60 * 1000,max: 100,message: 'Too many requests from this IP,please try again later.' }); app.use(helmet({ contentSecurityPolicy: { directives: { defaultSrc: ["'self'"],styleSrc: ["'self'","'unsafe-inline'"],scriptSrc: ["'self'"],imgSrc: ["'self'","data:","https:"],},},})); app.use(cors({ origin: NODE_ENV === 'development' ? ['http: : process.env.FRONTEND_URL || 'http: credentials: true })); app.use(compression()); app.use(morgan('combined')); app.use(limiter); app.use(express.json({ limit: '10mb' })); app.use(express.urlencoded({ extended: true,limit: '10mb' })); import apiRoutes from "routes/api.ts"; app.use('/api/health',(_req,res) => { res.json({ status: 'OK',timestamp: new Date().toISOString(),environment: NODE_ENV,uptime: process.uptime() })}); app.use('/api',apiRoutes); if (NODE_ENV === 'production') { const frontendPath = path.join(__dirname,'../../dist'); app.use(express.static(frontendPath)); app.get('*',(_req,res) => { res.sendFile(path.join(frontendPath,'index.html'))})} app.use((err: Error,_req: express.Request,res: express.Response,_next: express.NextFunction) => { console.error(err.stack); res.status(500).json({ error: 'Something went wrong!',message: NODE_ENV === 'development' ? err.message : 'Internal server error' })}); app.use('*',(_req,res) => { res.status(404).json({ error: 'Route not found' })}); app.listen(PORT,() => { console.log(`🚀 Server running on port ${PORT}`); console.log(`🌍 Environment: ${NODE_ENV}`); console.log(`📱 Frontend: http: console.log(`🔧 Backend API: http:
>>>>>>> main
import express from 'express'; import cors from 'cors'; import helmet from 'helmet'; import compression from 'compression'; import morgan from 'morgan'; import rateLimit from 'express-rate-limit'; import path from 'path'; const app = express(); const PORT = process.env.PORT || 5000; const NODE_ENV = process.env.NODE_ENV || 'development'; const limiter = rateLimit({ windowMs: 15 * 60 * 1000,max: 100,message: 'Too many requests from this IP,please try again later.' }); app.use(helmet({ contentSecurityPolicy: { directives: { defaultSrc: ["'self'"],styleSrc: ["'self'","'unsafe-inline'"],scriptSrc: ["'self'"],imgSrc: ["'self'","data:","https:"],},},})); app.use(cors({ origin: NODE_ENV === 'development' ? ['http: : process.env.FRONTEND_URL || 'http: credentials: true })); app.use(compression()); app.use(morgan('combined')); app.use(limiter); app.use(express.json({ limit: '10mb' })); app.use(express.urlencoded({ extended: true,limit: '10mb' })); import apiRoutes from "routes/api.ts"; app.use('/api/health',(_req,res) => { res.json({ status: 'OK',timestamp: new Date().toISOString(),environment: NODE_ENV,uptime: process.uptime() })}); app.use('/api',apiRoutes); if (NODE_ENV === 'production') { const frontendPath = path.join(__dirname,'../../dist'); app.use(express.static(frontendPath)); app.get('*',(_req,res) => { res.sendFile(path.join(frontendPath,'index.html'))})} app.use((err: Error,_req: express.Request,res: express.Response,_next: express.NextFunction) => { console.error(err.stack); res.status(500).json({ error: 'Something went wrong!',message: NODE_ENV === 'development' ? err.message : 'Internal server error' })}); app.use('*',(_req,res) => { res.status(404).json({ error: 'Route not found' })}); app.listen(PORT,() => { console.log(`🚀 Server running on port ${PORT}`); console.log(`🌍 Environment: ${NODE_ENV}`); console.log(`📱 Frontend: http: console.log(`🔧 Backend API: http:
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import express from 'express'; import cors from 'cors'; import helmet from 'helmet'; import compression from 'compression'; import morgan from 'morgan'; import rateLimit from 'express-rate-limit'; import path from 'path'; const app = express(); const PORT = process.env.PORT || 5000; const NODE_ENV = process.env.NODE_ENV || 'development'; const limiter = rateLimit({ windowMs: 15 * 60 * 1000,max: 100,message: 'Too many requests from this IP,please try again later.' }); app.use(helmet({ contentSecurityPolicy: { directives: { defaultSrc: ["'self'"],styleSrc: ["'self'","'unsafe-inline'"],scriptSrc: ["'self'"],imgSrc: ["'self'","data:","https:"],},},})); app.use(cors({ origin: NODE_ENV === 'development' ? ['http: : process.env.FRONTEND_URL || 'http: credentials: true })); app.use(compression()); app.use(morgan('combined')); app.use(limiter); app.use(express.json({ limit: '10mb' })); app.use(express.urlencoded({ extended: true,limit: '10mb' })); import apiRoutes from "routes/api.ts"; app.use('/api/health',(_req,res) => { res.json({ status: 'OK',timestamp: new Date().toISOString(),environment: NODE_ENV,uptime: process.uptime() })}); app.use('/api',apiRoutes); if (NODE_ENV === 'production') { const frontendPath = path.join(__dirname,'../../dist'); app.use(express.static(frontendPath)); app.get('*',(_req,res) => { res.sendFile(path.join(frontendPath,'index.html'))})} app.use((err: Error,_req: express.Request,res: express.Response,_next: express.NextFunction) => { console.error(err.stack); res.status(500).json({ error: 'Something went wrong!',message: NODE_ENV === 'development' ? err.message : 'Internal server error' })}); app.use('*',(_req,res) => { res.status(404).json({ error: 'Route not found' })}); app.listen(PORT,() => { console.log(`🚀 Server running on port ${PORT}`); console.log(`🌍 Environment: ${NODE_ENV}`); console.log(`📱 Frontend: http: console.log(`🔧 Backend API: http:
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
import express from 'express'; import cors from 'cors'; import helmet from 'helmet'; import compression from 'compression'; import morgan from 'morgan'; import rateLimit from 'express-rate-limit'; import path from 'path'; const app = express(); const PORT = process.env.PORT || 5000; const NODE_ENV = process.env.NODE_ENV || 'development'; const limiter = rateLimit({ windowMs: 15 * 60 * 1000,max: 100,message: 'Too many requests from this IP,please try again later.' }); app.use(helmet({ contentSecurityPolicy: { directives: { defaultSrc: ["'self'"],styleSrc: ["'self'","'unsafe-inline'"],scriptSrc: ["'self'"],imgSrc: ["'self'","data:","https:"],},},})); app.use(cors({ origin: NODE_ENV === 'development' ? ['http: : process.env.FRONTEND_URL || 'http: credentials: true })); app.use(compression()); app.use(morgan('combined')); app.use(limiter); app.use(express.json({ limit: '10mb' })); app.use(express.urlencoded({ extended: true,limit: '10mb' })); import apiRoutes from "routes/api.ts"; app.use('/api/health',(_req,res) => { res.json({ status: 'OK',timestamp: new Date().toISOString(),environment: NODE_ENV,uptime: process.uptime() })}); app.use('/api',apiRoutes); if (NODE_ENV === 'production') { const frontendPath = path.join(__dirname,'../../dist'); app.use(express.static(frontendPath)); app.get('*',(_req,res) => { res.sendFile(path.join(frontendPath,'index.html'))})} app.use((err: Error,_req: express.Request,res: express.Response,_next: express.NextFunction) => { console.error(err.stack); res.status(500).json({ error: 'Something went wrong!',message: NODE_ENV === 'development' ? err.message : 'Internal server error' })}); app.use('*',(_req,res) => { res.status(404).json({ error: 'Route not found' })}); app.listen(PORT,() => { console.log(`🚀 Server running on port ${PORT}`); console.log(`🌍 Environment: ${NODE_ENV}`); console.log(`📱 Frontend: http: console.log(`🔧 Backend API: http:
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:server/src/index.ts
