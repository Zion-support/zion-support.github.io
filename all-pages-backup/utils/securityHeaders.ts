<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/utils/securityHeaders.ts
    "form-action 'self'",
<<<<<<< HEAD:all-pages-backup/utils/securityHeaders.ts
  // Prevent clickjacking,
  xFrameOptions: 'DENY'
  // Prevent MIME type sniffing,
  xContentTypeOptions: 'nosniff'
  // Referrer Policy,
  referrerPolicy: 'strict-origin-when-cross-origin'
  // Permissions Policy (formerly Feature Policy)
  permissionsPolicy: [
    'camera=()'
<<<<<<< HEAD:all-pages-backup/utils/securityHeaders.ts
export function getSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>): Record<string, string> {;
  const config = { ...defaultSecurityHeaders, ...customConfig };
  const headers: Record<string, string> = {;
    'X-XSS-Protection': '1; mode=block'
<<<<<<< HEAD:all-pages-backup/utils/securityHeaders.ts
;
export default defaultSecurityHeaders
=======
/**
 * Security Headers Configuration()
 * Comprehensive security headers for production applications()
 */

export interface SecurityHeadersConfig {;
  contentSecurityPolicy?: string()
  strictTransportSecurity?: string()
  xFrameOptions?: string()
  xContentTypeOptions?: string()
  referrerPolicy?: string()
  permissionsPolicy?: string()
}

export const "defaultSecurityHeaders": SecurityHeadersConfig = {;,
  // Content Security Policy,
  "contentSecurityPolicy": [,
    "default-src 'self'
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'
    "style-src 'self' 'unsafe-inline'
    "img-src 'self'
    "font-src 'self'
    "connect-src 'self'
    "frame-ancestors 'none'
    "base-uri 'self'
    "form-action 'self'
>>>>>>> origin/main
