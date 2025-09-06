/**
 * Security Configuration
 * Enhanced security settings for the Zion Tech Group application
 */

const securityConfig = {
  // Content Security Policy
  csp: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'", // Required for Vite in development
        "https://vercel.live",
        "https://vitals.vercel-insights.com"
      ],
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://fonts.googleapis.com"
      ],
      imgSrc: [
        "'self'",
        "data:",
        "https:",
        "blob:"
      ],
      fontSrc: [
        "'self'",
        "data:",
        "https://fonts.gstatic.com"
      ],
      connectSrc: [
        "'self'",
        "https:",
        "wss:",
        "https://vitals.vercel-insights.com"
      ],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      upgradeInsecureRequests: []
    }
  },

  // Security Headers
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
  },

  // Rate Limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false
  },

  // CORS Configuration
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://ziontechgroup.com', 'https://www.ziontechgroup.com']
      : ['http://localhost:3000', 'http://localhost:4173'],
    credentials: true,
    optionsSuccessStatus: 200
  },

  // Input Validation
  validation: {
    maxLength: {
      text: 1000,
      email: 254,
      password: 128
    },
    allowedFileTypes: ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'],
    maxFileSize: 5 * 1024 * 1024 // 5MB
  },

  // Environment Security
  environment: {
    required: [
      'NODE_ENV',
      'NEXT_PUBLIC_APP_URL'
    ],
    sensitive: [
      'DATABASE_URL',
      'NEXTAUTH_SECRET',
      'NEXTAUTH_URL',
      'SUPABASE_ANON_KEY',
      'SUPABASE_SERVICE_ROLE_KEY'
    ]
  }
};

module.exports = securityConfig;