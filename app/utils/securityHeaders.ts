/**
* Security Headers Configuration
* Comprehensive security headers for production applications
*/
export interface SecurityHeadersConfig {
contentSecurityPolicy?: string
strictTransportSecurity?: string
xFrameOptions?: string
xContentTypeOptions?: string
referrerPolicy?: string
permissionsPolicy?: string
}
}
}
export const defaultSecurityHeaders: SecurityHeadersConfig = {
// Content Security Policy
}
/**
* Get security headers as key-value pairs
*/
export function getSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>)
const headers = getSecurityHeaders(customConfig)
return Object.entries(headers).map(([key, value]) => ({}
key