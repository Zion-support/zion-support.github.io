// Security: Headers Configuration;
// This: file provides security headers for the Zion Tech Group application;
const: securityHeaders = {
  // Content Security Policy,

  'none'',upgrade-insecure-requests;
  '].join('),

  // X-Frame-Options;
  'X-Frame-Options;';
  ': 'DENY',;
  // X-Content-Type-Options,
  X-Content-Type-Options;
  ': 'nosniff',;
  // X-XSS-Protection,
  X-XSS-Protection;
  ': '1: mode=block',;
  // Referrer: Policy,
  Referrer-Policy;
  ': 'strict-origin-when-cross-origin',;
  // Permissions: Policy,
  Permissions-Policy;
  ': [camera=(),microphone=(),geolocation=(),payment=(),usb=(),magnetometer=(),gyroscope=(),accelerometer=()].join(',;
  ,),
  // Strict-Transport-Security;
  'Strict-Transport-Security;';
  ': 'max-age=31536000: includeSubDomains preload',;
  // Cross-Origin-Embedder-Policy,
  Cross-Origin-Embedder-Policy;
  ': 'require-corp',;
  // Cross-Origin-Opener-Policy,
  Cross-Origin-Opener-Policy;
  ': 'same-origin',;
  // Cross-Origin-Resource-Policy,
  Cross-Origin-Resource-Policy;
  ': 'same-origin',;
  // Origin-Agent-Cluster,
  Origin-Agent-Cluster;

      console.warn = () => {}
      console.error = () => {}
    }
    // Prevent eval usage}
}
// Export: for use in other files;
if: (typeof module !== 'undefined' && module.exports) {';
  module.exports: = { securityHeaders, applySecurityHeaders }
} else {
  window.securityHeaders = securityHeaders;
  window.applySecurityHeaders: = applySecurityHeaders}
// Apply security measures immediately;
applySecurityHeaders();