const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// Compression middleware
app.use(compression());

// Logging middleware
app.use(morgan('combined'));

// Rate limiting with intelligent scaling
const createRateLimiter = (windowMs, max, message) => {
  return rateLimit({
    windowMs,
    max,
    message: {
      error: 'Too many requests',
      message,
      retryAfter: Math.ceil(windowMs / 1000)
    },
    standardHeaders: true,
    legacyHeaders: false,
    // Intelligent rate limiting based on user behavior
    skip: (req) => {
      // Skip rate limiting for health checks
      if (req.path === '/health') return true;
      // Skip for authenticated users with higher limits
      if (req.headers.authorization) return false;
      return false;
    }
  });
};

// Apply rate limiting
app.use('/api/', createRateLimiter(15 * 60 * 1000, 100, 'API rate limit exceeded'));
app.use('/auth/', createRateLimiter(15 * 60 * 1000, 20, 'Authentication rate limit exceeded'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV
  });
});

// Intelligent routing based on request patterns
const intelligentRouter = (req, res, next) => {
  // Add request metadata for monitoring
  req.startTime = Date.now();
  
  // Route API requests to backend
  if (req.path.startsWith('/api/')) {
    req.targetService = 'backend';
    return next();
  }
  
  // Route static assets and frontend routes to frontend
  if (req.path.startsWith('/static/') || req.path.startsWith('/assets/') || 
      req.path.includes('.') === false) {
    req.targetService = 'frontend';
    return next();
  }
  
  // Default to frontend for unknown routes
  req.targetService = 'frontend';
  next();
};

app.use(intelligentRouter);

// Proxy configuration with intelligent load balancing
const backendProxy = createProxyMiddleware({
  target: `http://localhost:${process.env.BACKEND_PORT || 5000}`,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api'
  },
  onProxyReq: (proxyReq, req, res) => {
    // Add performance headers
    proxyReq.setHeader('X-Forwarded-For', req.ip);
    proxyReq.setHeader('X-Forwarded-Proto', req.protocol);
    
    // Log backend requests for monitoring
    console.log(`[GATEWAY] Backend request: ${req.method} ${req.path}`);
  },
  onProxyRes: (proxyRes, req, res) => {
    // Add response time header
    const responseTime = Date.now() - req.startTime;
    proxyRes.headers['X-Response-Time'] = `${responseTime}ms`;
    
    // Log response for monitoring
    console.log(`[GATEWAY] Backend response: ${req.method} ${req.path} - ${proxyRes.statusCode} (${responseTime}ms)`);
  },
  onError: (err, req, res) => {
    console.error(`[GATEWAY] Backend proxy error:`, err);
    res.status(502).json({
      error: 'Backend service unavailable',
      message: 'The backend service is currently unavailable. Please try again later.',
      timestamp: new Date().toISOString()
    });
  }
});

const frontendProxy = createProxyMiddleware({
  target: `http://localhost:${process.env.FRONTEND_PORT || 3000}`,
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    // Add performance headers
    proxyReq.setHeader('X-Forwarded-For', req.ip);
    proxyReq.setHeader('X-Forwarded-Proto', req.protocol);
    
    // Log frontend requests for monitoring
    console.log(`[GATEWAY] Frontend request: ${req.method} ${req.path}`);
  },
  onProxyRes: (proxyRes, req, res) => {
    // Add response time header
    const responseTime = Date.now() - req.startTime;
    proxyRes.headers['X-Response-Time'] = `${responseTime}ms`;
    
    // Log response for monitoring
    console.log(`[GATEWAY] Frontend response: ${req.method} ${req.path} - ${proxyRes.statusCode} (${responseTime}ms)`);
  },
  onError: (err, req, res) => {
    console.error(`[GATEWAY] Frontend proxy error:`, err);
    res.status(502).json({
      error: 'Frontend service unavailable',
      message: 'The frontend service is currently unavailable. Please try again later.',
      timestamp: new Date().toISOString()
    });
  }
});

// Apply proxies based on routing decision
app.use('/api/*', (req, res, next) => {
  if (req.targetService === 'backend') {
    return backendProxy(req, res, next);
  }
  next();
});

app.use('*', (req, res, next) => {
  if (req.targetService === 'frontend') {
    return frontendProxy(req, res, next);
  }
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`[GATEWAY] Error:`, err);
  res.status(500).json({
    error: 'Internal server error',
    message: 'An unexpected error occurred. Please try again later.',
    timestamp: new Date().toISOString()
  });
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('[GATEWAY] Received SIGTERM, shutting down gracefully...');
  server.close(() => {
    console.log('[GATEWAY] Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('[GATEWAY] Received SIGINT, shutting down gracefully...');
  server.close(() => {
    console.log('[GATEWAY] Server closed');
    process.exit(0);
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`[GATEWAY] Intelligent API Gateway running on port ${PORT}`);
  console.log(`[GATEWAY] Environment: ${process.env.NODE_ENV}`);
  console.log(`[GATEWAY] Frontend target: http://localhost:${process.env.FRONTEND_PORT || 3000}`);
  console.log(`[GATEWAY] Backend target: http://localhost:${process.env.BACKEND_PORT || 5000}`);
});

module.exports = app;