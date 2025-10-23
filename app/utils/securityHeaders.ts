/**
* Security Headers Configuration
* Comprehensive security headers for production applications
*/

export interface SecurityHeadersConfig {
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xFrameOptions?: string;
  xContentTypeOptions?: string;
  referrerPolicy?: string;
  permissionsPolicy?: string;
}

export const defaultSecurityHeaders: SecurityHeadersConfig = {
  // Content Security Policy
  contentSecurityPolicy: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    'upgrade-insecure-requests'
  ].join('; '),
  
  // HTTP Strict Transport Security (HSTS)
  strictTransportSecurity: 'max-age=63072000; includeSubDomains; preload',
  
  // Prevent clickjacking
  xFrameOptions: 'DENY',
  
  // Prevent MIME type sniffing
  xContentTypeOptions: 'nosniff',
  
  // Referrer Policy
  referrerPolicy: 'strict-origin-when-cross-origin',
  
  // Permissions Policy (formerly Feature Policy)
  permissionsPolicy: [
    'camera=()',
    'microphone=()',
    'geolocation=()',
    'payment=()',
    'usb=()',
    'interest-cohort=()',
    'accelerometer=()',
    'gyroscope=()',
    'magnetometer=()',
    'ambient-light-sensor=()',
    'autoplay=()',
    'battery=()',
    'bluetooth=()',
    'display-capture=()',
    'encrypted-media=()',
    'fullscreen=()',
    'midi=()',
    'notifications=()',
    'persistent-storage=()',
    'picture-in-picture=()',
    'publickey-credentials-get=()',
    'screen-wake-lock=()',
    'sync-xhr=()',
    'web-share=()',
    'xr-spatial-tracking=()'
  ].join(', ')
};

export const generateSecurityHeaders = (config: Partial<SecurityHeadersConfig> = {}): SecurityHeadersConfig => {
  return {
    ...defaultSecurityHeaders,
    ...config
  };
};

export const getSecurityHeadersAsObject = (config: Partial<SecurityHeadersConfig> = {}): Record<string, string> => {
  const headers = generateSecurityHeaders(config);
  const result: Record<string, string> = {};
  
  if (headers.contentSecurityPolicy) {
    result['Content-Security-Policy'] = headers.contentSecurityPolicy;
  }
  
  if (headers.strictTransportSecurity) {
    result['Strict-Transport-Security'] = headers.strictTransportSecurity;
  }
  
  if (headers.xFrameOptions) {
    result['X-Frame-Options'] = headers.xFrameOptions;
  }
  
  if (headers.xContentTypeOptions) {
    result['X-Content-Type-Options'] = headers.xContentTypeOptions;
  }
  
  if (headers.referrerPolicy) {
    result['Referrer-Policy'] = headers.referrerPolicy;
  }
  
  if (headers.permissionsPolicy) {
    result['Permissions-Policy'] = headers.permissionsPolicy;
  }
  
  return result;
};

export const getSecurityHeadersAsArray = (config: Partial<SecurityHeadersConfig> = {}): Array<{ key: string; value: string }> => {
  const headers = getSecurityHeadersAsObject(config);
  return Object.entries(headers).map(([key, value]) => ({ key, value }));
};

// Next.js specific security headers
export const getNextJSSecurityHeaders = () => {
  return {
    'X-DNS-Prefetch-Control': 'on',
    'X-XSS-Protection': '1; mode=block',
    'X-Permitted-Cross-Domain-Policies': 'none',
    'Referrer-Policy': 'origin-when-cross-origin',
    'X-Download-Options': 'noopen',
    'X-Content-Type-Options': 'nosniff',
    'Origin-Agent-Cluster': '?1',
    'X-DNS-Prefetch-Control': 'off',
    'Cross-Origin-Embedder-Policy': 'unsafe-none',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
  };
};

export default defaultSecurityHeaders;