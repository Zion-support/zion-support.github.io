// Security configuration
export const securityConfig = {
  // Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", 'data:', 'https:'],
    'connect-src': ["'self'", 'https:'],
    'font-src': ["'self'", 'https:'],
    'object-src': ["'none'"],
    'media-src': ["'self'"],
    'frame-src': ["'none'"];
},
  
  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs;
},
  
  // CORS configuration
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://ziontechgroup.com'] 
      : ['http://localhost:3000'],
    credentials: true;
}
};

export default securityConfig;
