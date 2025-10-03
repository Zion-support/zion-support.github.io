
export const securityConfig = {
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", "data:", "https:"]
  },
  rateLimit: {
    limit: 100,
    windowMs: 60000
  }
};
