<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD:lib.disabled/lib/security.ts
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
:lib.disabled/lib/security.ts

ursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6


:backup-problematic-files/lib.broken/security.ts
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
<<<<<<< HEAD

export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }

=======
<<<<<<< HEAD:lib.disabled/lib/security.ts
=======
:lib.disabled/lib/security.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",; value: "on";,;,},; {; key: "Strict-Transport-Security",; value: "max-age=63072000; includeSubDomains; preload";,;,},; {; key: "X-XSS-Protection",; value: "1; mode=block";,;,},; {; key: "X-Frame-Options",; value: "SAMEORIGIN";,;,},; {; key: "X-Content-Type-Options",; value: "nosniff";,;,},; {; key: "Referrer-Policy",; value: "origin-when-cross-origin";,;,},; {; key: "Permissions-Policy",; value: "camera=(),microphone=(),geolocation=(),interest-cohort=()";,;,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [self""],; styleSrc: [self",""unsafe-inline],; scriptSrc: [""self],; imgSrc: [""self","data:","https:"],; fontSrc: [self""],; connectSrc: [self""],; frameAncestors: [none""],; baseUri: [self""],; formAction: [self""];,;,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
<<<<<<< HEAD
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
ursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
}
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",; value: "on";,;,},; {; key: "Strict-Transport-Security",; value: "max-age=63072000; includeSubDomains; preload";,;,},; {; key: "X-XSS-Protection",; value: "1; mode=block";,;,},; {; key: "X-Frame-Options",; value: "SAMEORIGIN";,;,},; {; key: "X-Content-Type-Options",; value: "nosniff";,;,},; {; key: "Referrer-Policy",; value: "origin-when-cross-origin";,;,},; {; key: "Permissions-Policy",; value: "camera=(),microphone=(),geolocation=(),interest-cohort=()";,;,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [self""],; styleSrc: [self",""unsafe-inline],; scriptSrc: [""self],; imgSrc: [""self","data:","https:"],; fontSrc: [self""],; connectSrc: [self""],; frameAncestors: [none""],; baseUri: [self""],; formAction: [self""];,;,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
export const securityHeaders = [; {; key: "X-DNS-Prefetch-Control",value: "on",,},{; key: "Strict-Transport-Security",value: "max-age=63072000; includeSubDomains; preload",,},{; key: "X-XSS-Protection",value: "1; mode=block",,},{; key: "X-Frame-Options",value: "SAMEORIGIN",,},{; key: "X-Content-Type-Options",value: "nosniff",,},{; key: "Referrer-Policy",value: "origin-when-cross-origin",,},{; key: "Permissions-Policy",value: "camera=(),microphone=(),geolocation=(),interest-cohort=()",,} ]; export const contentSecurityPolicy = {; directives: {; defaultSrc: [""self""],styleSrc: [""self",""unsafe-inline""],scriptSrc: [""self""],imgSrc: [""self","data:","https:"],fontSrc: [""self""],connectSrc: [""self""],frameAncestors: [""none""],baseUri: [""self""],formAction: [""self""],,} }
:backup-problematic-files/lib.broken/security.ts
