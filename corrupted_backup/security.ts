>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440

>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/security.ts
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/security.ts
// Security headers configuration;
export const securityHeaders = [;
  {;
    "key": "X-DNS-Prefetch-Control",
    "value": "on",},
  {;
    "key": "Strict-Transport-Security",
    "value": "max-age=63072000; includeSubDomains; preload",},
  {;
    "key": "X-XSS-Protection",
    "value": "1; mode=block",},
  {;
    "key": "X-Frame-Options",
    "value": "SAMEORIGIN",},
  {;
    "key": "X-Content-Type-Options",
    "value": "nosniff",},
  {;
    "key": "Referrer-Policy",
    "value": "origin-when-cross-origin",},
  {;
    "key": "Permissions-Policy",
    "value": "camera=(), microphone=(), geolocation=(), interest-cohort=()",}
];
export const contentSecurityPolicy = {;
  "directives": {;
    defaultSrc: [""self""],
    "styleSrc": [""self", ""unsafe-inline""],
    "scriptSrc": [""self""],
    "imgSrc": [""self", ""data": ", ""https": "],
    "fontSrc": [""self""],
    "connectSrc": [""self""],
    "frameAncestors": [""none""],
    "baseUri": [""self""],
    "formAction": [""self""],}
}
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",; value: "on";,;,},; {; key: "Strict-Transport-Security",; value: "max-age=63072000; includeSubDomains; preload";,;,},; {; key: "X-XSS-Protection",; value: "1; mode=block";,;,},; {; key: "X-Frame-Options",; value: "SAMEORIGIN";,;,},; {; key: "X-Content-Type-Options",; value: "nosniff";,;,},; {; key: "Referrer-Policy",; value: "origin-when-cross-origin";,;,},; {; key: "Permissions-Policy",; value: "camera=(),microphone=(),geolocation=(),interest-cohort=()";,;,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [self""],; styleSrc: [self",""unsafe-inline],; scriptSrc: [""self],; imgSrc: [""self","data:","https:"],; fontSrc: [self""],; connectSrc: [self""],; frameAncestors: [none""],; baseUri: [self""],; formAction: [self""];,;,} }
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/security.ts
