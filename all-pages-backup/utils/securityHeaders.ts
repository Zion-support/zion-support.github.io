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
