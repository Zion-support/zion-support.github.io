import React from 'react';
import { X } from 'lucide-react';
<<<<<<< HEAD
/**
* Security Headers Configuration
* Comprehensive security headers for production applications
*/;
export interface SecurityHeadersConfig {
;
contentSecurityPolicy?: string;
strictTransportSecurity?: string;
xFrameOptions?: string;
xContentTypeOptions?: string;
referrerPolicy?: string;
permissionsPolicy?: string
}
};
export const defaultSecurityHeaders: SecurityHeadersConfig = {
// Content Security Policy;
contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' http,s: ; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';",}
// Content Security Policy;
contentSecurityPolicy: [,"default-src 'self'"
"script-src 'self' 'unsafe-inline' 'unsafe-eval' https: //www.googletagmanager.com https://www.google-analytics.com","style-src 'self' 'unsafe-inline'"
"img-src 'self' data: https: blob:","font-src 'self' data: ","connect-src 'self' https: //www.google-analytics.com https://analytics.google.com","frame-ancestors 'none'"
"base-uri 'self'"
"form-action 'self'"
'upgrade-insecure-requests'].join('; ')
// HTTP Strict Transport Security (HSTS);
strictTransportSecurit,;
y: 'max-age=63072000; includeSubDomains; preload',// Prevent clickjacking;
xFrameOptions: 'DENY',// Prevent MIME type sniffing;
xContentTypeOptions: 'nosniff',// Referrer Policy;
referrerPolicy: 'strict-origin-when-cross-origin',// Permissions Policy (formerly Feature Policy);
permissionsPolicy: [,'camera=()',
'microphone=()',
'geolocation=()',
'payment=()',
'usb=()',
'interest-cohort=()',
'accelerometer=()',
'gyroscope=()',
'magnetometer=()'].join(', ')}
}
/**
* Get security headers as key-value pairs
*/;
export function getSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>);
export function getSecurityHeaders()</SecurityHeadersConfig>;
customConfig?: Partial<SecurityHeadersConfig />
): Record<string, string> {}
const config = { ...defaultSecurityHeaders, ...customConfig }</string>;
const headers: Record<string,string> = {};
'X-XSS-Protection': '1; mode=block'
'X-DNS-Prefetch-Control': 'on'}
=======
export function getSecurityHeaders(customConfig?: Partial<SecurityConfig>): Record<string, string> {
  const config = {
    ...defaultSecurityConfig,
    ...customConfig,
  };

  const headers: Record<string, string> = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  };

  if (config.strictTransportSecurity) {
    headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload';
  }

  if (config.contentSecurityPolicy) {
    headers['Content-Security-Policy'] = config.contentSecurityPolicy;
  }

  return headers;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
}

export function getNextSecurityHeaders(customConfig?: Partial<SecurityConfig>): Array<{ key: string; value: string }> {
  const headers = getSecurityHeaders(customConfig);
  return Object.entries(headers).map(([key, value]) => ({ key, value }));
}

interface SecurityConfig {
  strictTransportSecurity: boolean;
  contentSecurityPolicy?: string;
}
<<<<<<< HEAD
if(config.xFrameOptions) {}
headers['X-Frame-Options'] = config.xFrameOptions;}
}
if(config.xContentTypeOptions) {}
headers['X-Content-Type-Options'] = config.xContentTypeOptions;}
}
if(config.referrerPolicy) {}
headers['Referrer-Policy'] = config.referrerPolicy;}
}
if(config.permissionsPolicy) {}
headers['Permissions-Policy'] = config.permissionsPolicy;}
export interface SecurityHeadersConfig {
/* TODO: Fix JSX expression */,
};
}
export const;
defaultSecurityHeaders: SecurityHeadersConfig = {/* TOD,O: Fix JSX expression */,}
}
/**
* Get security headers as key-value pairs
*/</string>;
export function getSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig />)
): Record<string, string> {/* TODO: Fix JSX expression */,}
;
const config = { ...defaultSecurityHeaders, ...customConfig};
const</string>;
headers: Record<string,string> = {/* TODO: Fix JSX expression */,}
}
if(config.contentSecurityPolicy) {/* TODO: Fix JSX expression */,}
}
if(config.strictTransportSecurity) {/* TODO: Fix JSX expression */,}
}
if(config.xFrameOptions) {/* TODO: Fix JSX expression */,}
}
if(config.xContentTypeOptions) {/* TODO: Fix JSX expression */,}
}
if(config.referrerPolicy) {/* TODO: Fix JSX expression */,}
}
if(config.permissionsPolicy) {/* TODO: Fix JSX expression */,}
}
return headers
}
/**
* Get security headers in Next.js format
*/</string>;
export function getNextSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>)</SecurityHeadersConfig>;
): Array<{ key: string; valu,e: string ,}> {;
export function getNextSecurityHeaders();
customConfig?: Partial<SecurityHeadersConfig>
}</SecurityHeadersConfig>
): Array<{ key: string; valu,e: string ,}> {}
;
const headers = getSecurityHeaders(customConfig);
return Object.entries(headers).map(([key, value]) => ({}
key;
value}
}));
export function getNextSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig />);
): Array<{/* TODO: Fix JSX expression */,}
;
e: string ,}> {/* TODO: Fix JSX expression */,}
}))
}
export default defaultSecurityHeaders;
}
=======

const defaultSecurityConfig: SecurityConfig = {
  strictTransportSecurity: true,
  contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
};
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
