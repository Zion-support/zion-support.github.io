<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Security Configuration
export const securityConfig = {
  // Content Security Policy


<<<<<<< HEAD
>>>>>>> pr-12243
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  csp: {
    directives: {

      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts && fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts && fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
=======
// Security Configuration;
export const security_config = {};
  // Content Security Policy;
  csp: {}
    directives: {}
      defaultSrc: ["'self'"],'"
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts && fonts.googleapis.com"],'"
      fontSrc: ["'self'", "https://fonts && fonts.gstatic.com"],'"
      imgSrc: ["'self'", "data:", "https:"],'"
      scriptSrc: ["'self'"],'"
      connectSrc: ["'self'"],'"
      frameSrc: ["'none'"],'"
      objectSrc: ["'none'"],'"
      baseUri: ["'self'"],'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      formAction: ["'self'"],
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> pr-12243
      upgradeInsecureRequests: [],
    },
  },

  // Security Headers;
  headers: {"
    "X-Frame-Options": "DENY","
    "X-Content-Type-Options": "nosniff","
    "Referrer-Policy": "strict-origin-when-cross-origin","
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  },

  // Rate Limiting;
  rateLimit: {}
    windowMs: 15 * 60 * 1000, // 15 minutes;
    max: 100, // limit each IP to 100 requests per windowMs;
=======
// Security Configuration;
export const security_config = {
  // Content Security Policy;
  csp: {,
    directives: {,
      defaultSrc: ["'self'"],",
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts && fonts.googleapis.com"],",
      fontSrc: ["'self'", "https://fonts && fonts.gstatic.com"],",
      imgSrc: ["'self'", "data:", "https:"],",
      scriptSrc: ["'self'"],",
      connectSrc: ["'self'"],",
      frameSrc: ["'none'"],",
      objectSrc: ["'none'"],",
      baseUri: ["'self'"],",
      formAction: ["'self'"],",

pr-12243
      upgradeInsecureRequests: [],
    },
  },
  // Security Headers
  headers: {
    "X-Frame-Options": "DENY","
    "X-Content-Type-Options": "nosniff","
    "Referrer-Policy": "strict-origin-when-cross-origin","
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()","
  },
  // Rate Limiting
  rateLimit: {,
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  },
};
export default securityConfig;
<<<<<<< HEAD
<<<<<<< HEAD
=======
upgradeInsecureRequests: []
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
};
export default securityConfig;
<<<<<<< HEAD
=======
>>>>>>> pr-12243
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


pr-12243
// Security Configuration;
export const security_config = {
  // Content Security Policy;
// Security Configuration;
  // Content Security Policy;
  csp: {,
  directives: {

      defaultSrc: ["'self'"],""
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts && fonts.googleapis.com"],""
      fontSrc: ["'self'", "https://fonts && fonts.gstatic.com"],""
      imgSrc: ["'self'", "data:", "https:"],""
      scriptSrc: ["'self'"],""
      connectSrc: ["'self'"],""
      frameSrc: ["'none'"],""
      objectSrc: ["'none'"],""
      baseUri: ["'self'"],""
      formAction: ["'self'"],"
      upgradeInsecureRequests: [],
    },

  // Security Headers;
  headers: {"
    "X-Frame-Options": "DENY",""
    "X-Content-Type-Options": "nosniff",""
    "Referrer-Policy": "strict-origin-when-cross-origin",""
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()","

  // Rate Limiting;
  rateLimit: {,
  windowMs: 15 * 60 * 1000, // 15 minutes;
    max: 100, // limit each IP to 100 requests per windowMs;
};

export default securityConfig;
"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
