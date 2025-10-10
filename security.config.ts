/**
 * Security Configuration;
 * Comprehensive security settings and best practices;
 */
export const securityConfig = {
};
  // Content Security Policy;
  csp: {,
    directives: {,
      'default-src': ["'self'"],
      'script-src': [,
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'https: //www.googletagmanager.com'],
      'style-src': ["'self'", "'unsafe-inline'", 'https: //fonts.googleapis.com'],
      'img-src': ["'self'", 'data:', 'https:', 'blob: '],
      'font-src': ["'self'", 'https: //fonts.gstatic.com'],
      'connect-src': ["'self'", 'https: //www.google-analytics.com'],
      'frame-ancestors': ["'none'"],
      'base-uri': ["'self'"],
      'form-action': ["'self'"]},
<<<<<<< HEAD
    reportOnly: false,
  },

=======
    reportOnly: false},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Security Headers;
  headers: {,
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'},
  // Input validation;
  validation: {
    ,
    maxInputLength: 10000,
    allowedFileTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf'],
<<<<<<< HEAD
    maxFileSize: 10 * 1024 * 1024, // 10MB
  },

=======
    maxFileSize: 10 * 1024 * 1024, // 10MB},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Rate limiting;
  rateLimit: {
    ,
    windowMs: 15 * 60 * 1000, // 15 minutes;
<<<<<<< HEAD
    maxRequests: 100
    skipSuccessfulRequests: false,
    skipFailedRequests: false
  },

=======
    maxRequests: 100;
    skipSuccessfulRequests: false;
    skipFailedRequests: false},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // CORS configuration;
  cors: {
    ,
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http: //localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
<<<<<<< HEAD
    credentials: true,
    maxAge: 86400, // 24 hours
  },

=======
    credentials: true;
    maxAge: 86400, // 24 hours},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Authentication;
  auth: {
    ,
    sessionTimeout: 3600000, // 1 hour;
    maxLoginAttempts: 5,
    lockoutDuration: 900000, // 15 minutes;
<<<<<<< HEAD
    passwordMinLength: 12
    requireSpecialChars: true
    requireNumbers: true,
    requireUppercase: true
  },

  // Data sanitization;
  sanitization: {
    stripHtml: true;
    encodeSpecialChars: true
    trimWhitespace: true
    removeNullBytes: true,
export const securityConfig = {/* TODO: Fix JSX expression */}
=======
    passwordMinLength: 12;
    requireSpecialChars: true;
    requireNumbers: true;
    requireUppercase: true},
  // Data sanitization;
  sanitization: {
    stripHtml: true;
    encodeSpecialChars: true;
    trimWhitespace: true;
    removeNullBytes: true;
export const securityConfig = {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    },
    reportOnl,
  y: false},
  // Security Headers,
  headers: {/* TODO: Fix JSX expression */};
  },
  // Input validation,
  validation: {/* TODO: Fix JSX expression */};
  },
  // Rate limiting,
  rateLimit: {/* TODO: Fix JSX expression */};
  },
  // CORS configuration,
  cors: {/* TODO: Fix JSX expression */};
  },
  // Authentication,
  auth: {/* TODO: Fix JSX expression */};
  },
  // Data sanitization,
<<<<<<< HEAD
  sanitization: {/* TODO: Fix JSX expression */}
  }}

=======
  sanitization: {/* TODO: Fix JSX expression */};
  }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default securityConfig;
