// Final security configuration
export const finalSecurityConfig = {
  // Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://www.google-analytics.com", "https://www.googletagmanager.com"],
    'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    'font-src': ["'self'", "data:", "https://fonts.gstatic.com"],
    'img-src': ["'self'", "data:", "https:", "blob:"],
    'connect-src': ["'self'", "https://www.google-analytics.com", "https://www.googletagmanager.com"],
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': [],
    'block-all-mixed-content': []
  },
  
  // Security headers
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin',
    'Content-Security-Policy-Report-Only': 'default-src 'self'; report-uri /api/csp-report'
  },
  
  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true
  },
  
  // Input validation
  validation: {
    maxLength: {
      name: 100,
      email: 254,
      message: 1000,
      phone: 20,
      url: 2048
    },
    patterns: {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^\+?[1-9]\d{1,14}$/,
      name: /^[a-zA-Z\s'-]+$/,
      url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
      alphanumeric: /^[a-zA-Z0-9]+$/
    },
    sanitization: {
      html: true,
      sql: true,
      xss: true,
      script: true,
      style: true
    }
  },
  
  // Authentication
  auth: {
    sessionTimeout: 30 * 60 * 1000, // 30 minutes
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60 * 1000, // 15 minutes
    passwordPolicy: {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true,
      maxAge: 90 * 24 * 60 * 60 * 1000 // 90 days
    },
    mfa: {
      enabled: true,
      methods: ['totp', 'sms', 'email']
    }
  },
  
  // API Security
  api: {
    cors: {
      origin: ['https://ziontechgroup.com'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 1000
    },
    validation: {
      requestSize: '10mb',
      fileUpload: {
        maxSize: '5mb',
        allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf']
      }
    }
  },
  
  // Monitoring
  monitoring: {
    errorReporting: true,
    performanceMonitoring: true,
    securityEvents: true,
    auditLogging: true
  }
};

export default finalSecurityConfig;