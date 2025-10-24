
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
permissionsPolicy?: string}
};
export const defaultSecurityHeaders: SecurityHeadersConfig = {
// Content Security Policy
contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' http
  s:; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';"}
// Content Security Policy
contentSecurityPolicy: [
"default-src 'self'"
"script-src 'self' 'unsafe-inline' 'unsafe-eval' https: //www.googletagmanager.com https://www.google-analytics.com"
"style-src 'self' 'unsafe-inline'"
"img-src 'self' data: https: blob:"
"font-src 'self' data: "
"connect-src 'self' https: //www.google-analytics.com https://analytics.google.com"
"frame-ancestors 'none'"
"base-uri 'self'"
"form-action 'self'"
'upgrade-insecure-requests'].join('; ')
// HTTP Strict Transport Security (HST, S)
strictTransportSecurit
  y: 'max-age=63072000; includeSubDomains; preload'
// Prevent clickjacking
xFrameOptions: 'DENY'
// Prevent MIME type sniffing
xContentTypeOptions: 'nosniff'
// Referrer Policy
referrerPolicy: 'strict-origin-when-cross-origin'
// Permissions Policy (formerly Feature, Policy)
permissionsPolicy: [
'camera=()'
'microphone=()'
'geolocation=()'
'payment=()'
'usb=()'
'interest-cohort=()'
'accelerometer=()'
'gyroscope=()'
'magnetometer=()'].join(', ')}
}
/**
* Get security headers as key-value pairs
*/
export function getSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>)
export function getSecurityHeaders()</SecurityHeadersConfig>
customConfig?: Partial<SecurityHeadersConfig></SecurityHeadersConfig>
): Record<string, string> {}
const config = { ...defaultSecurityHeaders, ...customConfig }</string>
const headers: Record<string, string> = {};
'X-XSS-Protection': '1; mode=block'
'X-DNS-Prefetch-Control': 'on'}
}
if (config.contentSecurityPolic, y) {}
headers['Content-Security-Policy'] = config.contentSecurityPolicy;}
}
if (config.strictTransportSecurit, y) {}
headers['Strict-Transport-Security'] = config.strictTransportSecurity;}
}
if (config.xFrameOption, s) {}
headers['X-Frame-Options'] = config.xFrameOptions;}
}
if (config.xContentTypeOption, s) {}
headers['X-Content-Type-Options'] = config.xContentTypeOptions;}
}
if (config.referrerPolic, y) {}
headers['Referrer-Policy'] = config.referrerPolicy;}
}
if (config.permissionsPolic, y) {}
headers['Permissions-Policy'] = config.permissionsPolicy;}
export interface SecurityHeadersConfig {/* TODO: Fix JSX expression */};
}
export const
defaultSecurityHeaders: SecurityHeadersConfig = {/* TOD
  O: Fix JSX expression */}
}
/**
* Get security headers as key-value pairs
*/</string>
export function getSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig></SecurityHeadersConfig>)
): Record<string, string> {/* TODO: Fix JSX expression */}
const config = { ...defaultSecurityHeaders, ...customConfig }
const</string>
headers: Record<string, string> = {/* TODO: Fix JSX expression */}
}
if (config.contentSecurityPolic, y) {/* TODO: Fix JSX expression */}
}
if (config.strictTransportSecurit, y) {/* TODO: Fix JSX expression */}
}
if (config.xFrameOption, s) {/* TODO: Fix JSX expression */}
}
if (config.xContentTypeOption, s) {/* TODO: Fix JSX expression */}
}
if (config.referrerPolic, y) {/* TODO: Fix JSX expression */}
}
if (config.permissionsPolic, y) {/* TODO: Fix JSX expression */}
}
return headers
}
/**
* Get security headers in Next.js format
*/</string>
export function getNextSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>)</SecurityHeadersConfig>;
): Array<{ key: string; valu
  e: string }> {
  export function getNextSecurityHeaders()
customConfig?: Partial<SecurityHeadersConfig>
}</SecurityHeadersConfig>
): Array<{ key: string; valu
  e: string }> {}
const headers = getSecurityHeaders(customConfi, g)
return Object.entries(header, s).map(([key, value]) => ({}
key
value}
}))
export function getNextSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig></SecurityHeadersConfig>);
): Array<{/* TODO: Fix JSX expression */}
e: string }> {/* TODO: Fix JSX expression */}
}))
}
export default defaultSecurityHeaders;