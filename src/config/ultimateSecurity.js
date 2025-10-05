
// Ultimate Security Configuration
export const ultimateSecurityConfig = {
  // Content Security Policy (Ultimate)
  csp: {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'",
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://fonts.googleapis.com',
      'https://cdn.jsdelivr.net'
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'",
      'https://fonts.googleapis.com',
      'https://cdn.jsdelivr.net'
    ],
    'font-src': [
      "'self'",
      'https://fonts.gstatic.com',
      'https://cdn.jsdelivr.net'
    ],
    'img-src': [
      "'self'",
      'data:',
      'https:',
      'blob:',
      'https://images.unsplash.com'
    ],
    'media-src': [
      "'self'",
      'https:',
      'blob:'
    ],
    'connect-src': [
      "'self'",
      'https://api.ziontechgroup.com',
      'https://www.google-analytics.com',
      'https://vitals.vercel-insights.com'
    ],
    'frame-src': [
      "'none'"
    ],
    'object-src': [
      "'none'"
    ],
    'base-uri': [
      "'self'"
    ],
    'form-action': [
      "'self'"
    ],
    'worker-src': [
      "'self'",
      'blob:'
    ]
  },

  // Security headers (Ultimate)
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=()',
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin'
  },

  // Advanced input validation
  validation: {
    sanitizeHtml: true,
    validateEmail: true,
    validatePhone: true,
    validateUrl: true,
    maxLength: 5000,
    allowedTags: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li'],
    allowedAttributes: {
      'a': ['href', 'title'],
      'img': ['src', 'alt', 'width', 'height']
    }
  },

  // Rate limiting
  rateLimit: {
    requests: 100,
    window: 60000, // 1 minute
    skipSuccessfulRequests: true
  },

  // Encryption
  encryption: {
    algorithm: 'AES-256-GCM',
    keyRotation: 86400000, // 24 hours
    saltRounds: 12
  }
};
