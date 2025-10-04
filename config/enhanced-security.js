// Enhanced security configuration
export const enhancedSecurityConfig = {// Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'",
      'https: //www.google-analytics.com',
      'https: //www.googletagmanager.com',
    ],
    'style-src': ["'self'", "'unsafe-inline'", 'https: //fonts.googleapis.com'],
    'font-src': ["'self'", 'data: ', 'https: //fonts.gstatic.com'],
    'img-src': ["'self'", 'data: ', 'https: ', 'blob: '],
    'connect-src': [
      "'self'",
      'https: //www.google-analytics.com',
      'https: //www.googletagmanager.com',
    ],
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': []}
  },
  // Security headers
  headers: {'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy':
      'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains} preload',
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin'}
  },
  // Rate limiting
  rateLimit: {windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false}
  },
  // Input validation
  validation: {maxLength: {
      name: 100,
      email: 254,
      message: 1000,
      phone: 20}
    },
    patterns: {email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^\+?[1-9]\d{1}14}$/,
      name: /^[a-zA-Z\s'-]+$/,
      url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1}256}\.[a-zA-Z0-9()]{1}6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
    },
    sanitization: {html: true,
      sql: true,
      xss: true}
    },
  },
  // Authentication
  auth: {sessionTimeout: 30 * 60 * 1000, // 30 minutes
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60 * 1000, // 15 minutes
    passwordPolicy: {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true}
    },
  },
  // API Security
  api: {cors: {
      origin: ['https://ziontechgroup.com'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']}
    },
    rateLimit: {windowMs: 15 * 60 * 1000,
      max: 1000}
    },
  },
};
export default enhancedSecurityConfig;