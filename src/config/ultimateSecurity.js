module.exports = {
  "securityHeaders": {
    "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https: wss:; media-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload"
  },
  "inputValidation": {
    "html": {
      "allowedTags": [
        "p",
        "br",
        "strong",
        "em",
        "u",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
      ],
      "allowedAttributes": {}
    },
    "sql": {
      "parameterized": true,
      "escapeSpecialChars": true
    },
    "xss": {
      "escapeHtml": true,
      "sanitizeAttributes": true,
      "removeScriptTags": true
    },
    "csrf": {
      "tokenValidation": true,
      "sameSite": "strict",
      "secure": true
    }
  },
  "rateLimiting": {
    "api": {
      "windowMs": 900000,
      "max": 100
    },
    "auth": {
      "windowMs": 900000,
      "max": 5
    },
    "upload": {
      "windowMs": 3600000,
      "max": 10
    }
  },
  "timestamp": "2025-10-08T14:53:56.012Z"
};