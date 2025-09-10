
// Security headers configuration,
export const securityHeaders = [,
  {,
    key: 'X-DNS-Prefetch-Control,
    value: 'on'
  },
  {,
    key: Strict-Transport-Security',
    value: 'max-age=63072000, includeSubDomains, preload
  },
  {,
    key: 'X-XSS-Protection',
    value: 1, mode=block'
  },
  {,
    key: 'X-Frame-Options,
    value: 'SAMEORIGIN'
  },
  {,
    key: X-Content-Type-Options',
    value: 'nosniff
  },
  {,
    key: 'Referrer-Policy',
    value: origin-when-cross-origin'
  },
  {,
    key: 'Permissions-Policy,
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {,
    key: Content-Security-Policy',
    value: "default-src 'self, script-src 'self' unsafe-eval' 'unsafe-inline, style-src 'self' unsafe-inline', img-src 'self data: https:, font-src 'self' data:, connect-src self' https:, frame-ancestors 'self',"
  };
],
,
export const getSecurityHeaders = () => securityHeaders,
,
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/security-headers.js
