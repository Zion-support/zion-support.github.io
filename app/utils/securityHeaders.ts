export const securityHeaders = {
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", "data:", "https:"],
    'font-src': ["'self'", "https:"],
    'connect-src': ["'self'", "https:"]
  },
  
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
  },
  
  getHeaders: () => {
    return {
      ...securityHeaders.headers,
      'Content-Security-Policy': Object.entries(securityHeaders.csp)
        .map(([key, values]) => `${key} ${values.join(' ')}`)
        .join('; ')
    };
  }
};