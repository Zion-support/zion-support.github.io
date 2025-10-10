// Security configuration
export const securityConfig = {
  // Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://www.googletagmanager.com"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", "data:", "https:", "blob:"],
    'font-src': ["'self'", "data:"],
    'connect-src': ["'self'", "https://www.google-analytics.com"],
    'frame-ancestors': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
  },
  
  // Security headers
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-XSS-Protection': '1, mode=block',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains, preload',
  },
  
  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  },
  
  // CORS configuration
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://ziontechgroup.com', 'https://www.ziontechgroup.com']
      : ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  },
  
  // Input validation
  validation: {
    maxStringLength: 1000,
    allowedFileTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
    maxFileSize: 5 * 1024 * 1024, // 5MB
  },
  
  // Authentication
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    jwtExpiresIn: '24h',
    refreshTokenExpiresIn: '7d',
  },
  
  // Encryption
  encryption: {
    algorithm: 'aes-256-gcm',
    keyLength: 32,
    ivLength: 16,
  },
};

export default securityConfig;