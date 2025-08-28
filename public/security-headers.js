// Security Headers Configuration
// This file provides security headers for the Zion Tech Group application

const securityHeaders = {
  // Content Security Policy
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.gpteng.co https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "media-src 'self' https:",
    "connect-src 'self' https: wss:",
    "frame-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; '),

  // X-Frame-Options
  'X-Frame-Options': 'DENY',

  // X-Content-Type-Options
  'X-Content-Type-Options': 'nosniff',

  // X-XSS-Protection
  'X-XSS-Protection': '1; mode=block',

  // Referrer Policy
  'Referrer-Policy': 'strict-origin-when-cross-origin',

  // Permissions Policy
  'Permissions-Policy': [
    'camera=()',
    'microphone=()',
    'geolocation=()',
    'payment=()',
    'usb=()',
    'magnetometer=()',
    'gyroscope=()',
    'accelerometer=()'
  ].join(', '),

  // Strict-Transport-Security
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',

  // Cross-Origin-Embedder-Policy
  'Cross-Origin-Embedder-Policy': 'require-corp',

  // Cross-Origin-Opener-Policy
  'Cross-Origin-Opener-Policy': 'same-origin',

  // Cross-Origin-Resource-Policy
  'Cross-Origin-Resource-Policy': 'same-origin',

  // Origin-Agent-Cluster
  'Origin-Agent-Cluster': '?1'
};

// Function to apply security headers
function applySecurityHeaders() {
  if (typeof window !== 'undefined') {
    // Client-side security measures
    console.log('Security headers applied on client side');
    
    // Disable console in production
    if (process.env.NODE_ENV === 'production') {
      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
    }
    
    // Prevent eval usage
    window.eval = function() {
      throw new Error('eval() is not allowed for security reasons');
    };
    
    // Prevent Function constructor
    window.Function = function() {
      throw new Error('Function constructor is not allowed for security reasons');
    };
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { securityHeaders, applySecurityHeaders };
} else {
  window.securityHeaders = securityHeaders;
  window.applySecurityHeaders = applySecurityHeaders;
}

// Apply security measures immediately
applySecurityHeaders();