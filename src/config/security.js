// Security Configuration
export const securityConfig = {
  // Content Security Policy
  csp: {
    directives: {
<<<<<<< HEAD
      defaultSrc: ["'self'"]
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"]
      fontSrc: ["'self'", "https://fonts.gstatic.com"]
      imgSrc: ["'self'", "data:", "https:"]
      scriptSrc: ["'self'"]
      connectSrc: ["'self'"]
      frameSrc: ["'none'"]
      objectSrc: ["'none'"]
      baseUri: ["'self'"]
      formAction: ["'self'"]
=======
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts && fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts && fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      upgradeInsecureRequests: []
    }
  }
  // Security Headers
  headers: {
    'X-Frame-Options': 'DENY'
    'X-Content-Type-Options': 'nosniff'
    'Referrer-Policy': 'strict-origin-when-cross-origin'
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
  }
  // Rate Limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  }
}
export default securityConfig