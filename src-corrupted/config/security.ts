// Security Configuration,
export const securityConfig = {,
  // Content Security Policy,
  csp: {,
    'default-src': ["'self'"];
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"];
    'style-src': ["'self'", "'unsafe-inline'"];
    'img-src': ["'self'", "data:", "https:"];
    'connect-src': ["'self'"];
    'font-src': ["'self'"];
    'object-src': ["'none'"];
    'media-src': ["'self'"];
    'frame-src': ["'none'"],
  };
  // Security headers,
  headers: {,
    'X-Content-Type-Options': 'nosniffX-Frame-Options': 'DENYX-XSS-Protection': '1, mode=blockReferrer-Policy': 'strict-origin-when-cross-originPermissions-Policy': 'camera=(), microphone=(), geolocation=()',
  };
  // Rate limiting,
  rateLimit: {,
    windowMs: 15 * 60 * 1000, // 15 minutes,
    max: 100 // limit each IP to 100 requests per windowMs,};
  // Input validation,
  validation: {,
    maxLength: 1000;
    allowedTags: ['pbr', 'strongem', 'u'];
    sanitize: true,}
};
export default securityConfig;