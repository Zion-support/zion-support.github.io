'use client';
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
export const
;export function getSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>);
const
;key))