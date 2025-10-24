
/**;
* Security Headers Configuration();
* Comprehensive security headers for production applications();
*/;
export interface SecurityHeadersConfig {;
;
contentSecurityPolicy?: string();
strictTransportSecurity?: string();
xFrameOptions?: string();
xContentTypeOptions?: string();
referrerPolicy?: string();
permissionsPolicy?: string();
}
}
<<<<<<< HEAD
};
export const "defaultSecurityHeaders": SecurityHeadersConfig = {,;"
// Content Security Policy();"
"contentSecurityPolicy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: "https:; font-src 'self' data:; connect-src 'self' http",s: "; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self''","default-src 'self''"
"script-src 'self' 'unsafe-inline' 'unsafe-eval''"
"style-src 'self' 'unsafe-inline''"
"img-src 'self''"
"font-src 'self''"
"connect-src 'self''"
"frame-ancestors 'none''"
"base-uri 'self''"
"form-action 'self''"
=======
}
export const "defaultSecurityHeaders": SecurityHeadersConfig = {,;"
// Content Security Policy()"contentSecurityPolicy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: "https:; font-src 'self' data:; connect-src 'self' http",s: "; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self''","default-src 'self''";'"
"script-src 'self' 'unsafe-inline' 'unsafe-eval''";'"
"style-src 'self' 'unsafe-inline''";'"
"img-src 'self''";'"
"font-src 'self''";'"
"connect-src 'self''";'"
"frame-ancestors 'none''";'"
"base-uri 'self''";'"
"form-action 'self''";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
