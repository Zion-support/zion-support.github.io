export const securityHeaders = {
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", "data:", "https:"],
    'font-src': ["'self'", "https:"],
    'connect-src': ["'self'", "https:"]
  },
  
  getCSPHeader: () => {
    return Object.entries(securityHeaders.csp)
      .map(([key, values]) => `${key} ${values.join(' ')}`)
      .join('; ')
  }
}