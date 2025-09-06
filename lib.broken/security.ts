
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:lib.broken/security.ts




>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
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
>>>>>>> main
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
