// Security Configuration;
export const security_config = {
  // Content Security Policy;
  csp: {
    directives: {
<<<<<<< HEAD
<<<<<<< HEAD

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

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      default_src: ["'self'"],
      style_src: ["'self'", "'unsafe - inline'", "https://fonts.googleapis.com"],
      font_src: ["'self'", "https://fonts.gstatic.com"],
      img_src: ["'self'", "data:", "https:"],
      script_src: ["'self'"],
      connect_src: ["'self'"],
      frame_src: ["'none'"],
      object_src: ["'none'"],
      base_uri: ["'self'"],
      form_action: ["'self'"],
      upgradeInsecureRequests: [];
    }
  },
  // Security Headers;
  headers: {
    'X - Frame - Options': 'DENY',
    'X - Content - Type - Options': 'nosniff',
    'Referrer - Policy': 'strict - origin - when - cross - origin',
    'Permissions - Policy': 'camera=(), microphone=(), geolocation=()';
  },
  // Rate Limiting;
  rate_limit: {
    window_ms: 15 * 60 * 1000, // 15 minutes;
    max: 100 // limit each IP to 100 requests per window_ms;
  }
}
<<<<<<< HEAD
export default security_config;
=======
export default security_config;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
