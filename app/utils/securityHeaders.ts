/**
 * Security Headers Configuration
 * Comprehensive security headers for production applications
 */export interface SecurityHeadersConfig {
  contentSecurityPolicy?: string
  strictTransportSecurity?: string
  xFrameOptions?: string
  xContentTypeOptions?: string
  referrerPolicy?: string}
  permissionsPolicy?: string}
}
export const defaultSecurityHeaders: SecurityHeadersConfig;

export const defaultSecurityHeaders: SecurityHeadersConfig = {}
  // Content Security Policy
  contentSecurityPolicy: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: //www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data: ",
    "connect-src 'self' https: //www.google-analytics.com https://analytics.google.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    'upgrade-insecure-requests'].join('; '),
  strictTransportSecurity: 'max-age;

export function getSecurityHeaders()
  customConfig?: Partial<SecurityHeadersConfig>
): Record<string, string> {}
  const config = { ...defaultSecurityHeaders, ...customConfig }
  ;

const headers: Record<string, string> = {}
    'X-XSS-Protection': '1; mode;

export function getNextSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>)
): Array<{ key: string; value: string }> {export function getNextSecurityHeaders()
  customConfig?: Partial<SecurityHeadersConfig>}
): Array<{ key: string; value: string }> {}
  const headers;

export default defaultSecurityHeaders