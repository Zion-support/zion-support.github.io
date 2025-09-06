<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> main
=======

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
<<<<<<<< HEAD:corrupted_backup/security.ts
<<<<<<< HEAD
<<<<<<< HEAD:lib.disabled/lib/security.ts
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======

=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/security.ts
========

>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:lib.broken/security.ts
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
<<<<<<< HEAD
}
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",; value: "on";,;,},; {; key: "Strict-Transport-Security",; value: "max-age=63072000; includeSubDomains; preload";,;,},; {; key: "X-XSS-Protection",; value: "1; mode=block";,;,},; {; key: "X-Frame-Options",; value: "SAMEORIGIN";,;,},; {; key: "X-Content-Type-Options",; value: "nosniff";,;,},; {; key: "Referrer-Policy",; value: "origin-when-cross-origin";,;,},; {; key: "Permissions-Policy",; value: "camera=(),microphone=(),geolocation=(),interest-cohort=()";,;,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [self""],; styleSrc: [self",""unsafe-inline],; scriptSrc: [""self],; imgSrc: [""self","data:","https:"],; fontSrc: [self""],; connectSrc: [self""],; frameAncestors: [none""],; baseUri: [self""],; formAction: [self""];,;,} }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
=======
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
<<<<<<< HEAD
<<<<<<< HEAD
=======
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
>>>>>>> main
=======
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======

export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",; value: "on";,;,},; {; key: "Strict-Transport-Security",; value: "max-age=63072000; includeSubDomains; preload";,;,},; {; key: "X-XSS-Protection",; value: "1; mode=block";,;,},; {; key: "X-Frame-Options",; value: "SAMEORIGIN";,;,},; {; key: "X-Content-Type-Options",; value: "nosniff";,;,},; {; key: "Referrer-Policy",; value: "origin-when-cross-origin";,;,},; {; key: "Permissions-Policy",; value: "camera=(),microphone=(),geolocation=(),interest-cohort=()";,;,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [self""],; styleSrc: [self",""unsafe-inline],; scriptSrc: [""self],; imgSrc: [""self","data:","https:"],; fontSrc: [self""],; connectSrc: [self""],; frameAncestors: [none""],; baseUri: [self""],; formAction: [self""];,;,} }
<<<<<<<< HEAD:corrupted_backup/security.ts
<<<<<<< HEAD:lib.disabled/lib/security.ts
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
<<<<<<< HEAD
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:lib.broken/security.ts
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/security.ts
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
