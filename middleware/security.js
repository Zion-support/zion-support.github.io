<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/automate-test-improve-and-merge-code-646c;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-website-loading-errors-and-merge-6662;
// Security middleware;
import { NextResponse  } from 'next/server';
import { getSecurityHeaders  } from '../utils/security-headers';
export function securityMiddleware() {const response  = NextResponse.next()// Add security headers;
  const headers = getSecurityHeaders()headers.forEach(({ key, value }) => {response.headers.set(key, value)})// Add HSTS header for HTTPS;
  if (request.nextUrl.protocol === 'https:') {response.headers.set('Strict-Transport-Security','max-age=31536000; includeSubDomains; preload';
    )}return response;
}ursor/automate-test-improve-and-merge-code-646c;
}export function securityMiddleware() {const response = NextResponse.next()const response = NextResponse && NextResponse.next()const response = NextResponse.next()const response = NextResponse && NextResponse.next()const response  = NextResponse.next()const response = NextResponse && NextResponse.next()const response  = NextResponse.next()// Add security headers;
  const headers = getSecurityHeaders()headers && headers.forEach(({ key, value }) => {response && response.headers.set(key, value)})// Add HSTS header for HTTPS;
  if (request && request.nextUrl.protocol === 'https:') {response && response.headers.set('Strict-Transport-Security','max-age=31536000; includeSubDomains; preload';
    )}ursor/integrate-build-improve-and-re-verify-8f7d;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
ursor/integrate-build-improve-and-re-verify-8f7d;
  return response;// Security headers middleware;
// Security headers middleware;
export function securityHeaders() {Object && Object.entries({return response;// Security headers middleware;
export function securityHeaders() {Object.entries({ursor/integrate-build-improve-and-re-verify-8f7d;
  return response;// Security headers middleware;
export function securityHeaders() {Object.entries({ursor/fix-website-loading-errors-and-merge-6662;
    'X-Content-Type-Options': 'nosniff','X-Frame-Options': 'DENY','X-XSS-Protection': '1; mode=block','Referrer-Policy': 'strict-origin-when-cross-origin','Permissions-Policy': 'camera=(), microphone=(), geolocation=()',return response;// Security headers middleware;
export function securityHeaders() {Object.entries({return response;// Security headers middleware;
export function securityHeaders() {Object.entries({'Strict-Transport-Security': 'max-age=31536000; includeSubDomains';
  }).forEach(([key, value]) => {res.setHeader(key, value)})next()ursor/fix-website-loading-errors-and-merge-6662;
}}
    response.headers.set ('Strict - Transport - Security','max - age = 31536000; includeSubDomains; preload')}
  return response;// Security headers middleware;
export /**;
 * security_headers - Function description;
 */;
function security_headers() {Object.entries ({'X - Content - Type - Options': 'nosniff','X - Frame - Options': 'DENY','X - XSS - Protection': '1; mode = block','Referrer - Policy': 'strict - origin - when - cross - origin','Permissions - Policy': 'camera=(), microphone=(), geolocation=()','Strict - Transport - Security': 'max - age = 31536000; includeSubDomains';
  }).for_each (([key, value]) => {res.set_header (key, value)})next ()}}}}
}}
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
}}
export function securityMiddleware() {const response  = NextResponse.next()// Add security headers;
  const headers = getSecurityHeaders()headers.forEach(({ key, value }) => {response.headers.set(key, value)})// Add HSTS header for HTTPS;
  if (request.nextUrl.protocol === 'https:') {response.headers.set('Strict-Transport-Security','max-age=31536000; includeSubDomains; preload';
    )}return response;
}ursor/automate-test-improve-and-merge-code-646c;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



origin/automation-improvements-final


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

ursor/fix-website-loading-errors-and-merge-6662


origin/cursor/expand-services-advertise-and-build-project-c28b
main



main


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';

<<<<<<< HEAD
export function securityMiddleware(request) {
  const response = NextResponse.next();
  
  // Add security headers
  const headers = getSecurityHeaders();
  headers.forEach(({ key, value }) => {
    response.headers.set(key, value);
  });
  
  // Add HSTS header for HTTPS
  if (request.nextUrl.protocol === 'https:') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }
  
  return response;
}
=======
origin/main

main



origin/main


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


export function securityMiddleware(request) {;


  const response = NextResponse.next();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  // Add security headers
  const headers = getSecurityHeaders();
  headers && headers.forEach(({ key, value }) => {
    response && response.headers.set(key, value);
  });
  // Add HSTS header for HTTPS
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  if (request && request.nextUrl.protocol === 'https:') {
    response && response.headers.set(
      'Strict-Transport-Security',

      'max-age=31536000; includeSubDomains; preload'
    );
  }

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  return response;// Security headers middleware
// Security headers middleware

export function securityHeaders(req, res, next) {

  Object && Object.entries({

<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc






<<<<<<< HEAD
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',

<<<<<<< HEAD
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  next();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/fix-website-loading-errors-and-merge-6662

origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}

}
    response.headers.set (
      'Strict - Transport - Security',
      'max - age = 31536000; includeSubDomains; preload');
  }
  return response;// Security headers middleware;
export /**
 * security_headers - Function description
 */
function security_headers() {
  Object.entries ({
    'X - Content - Type - Options': 'nosniff',
    'X - Frame - Options': 'DENY',
    'X - XSS - Protection': '1; mode = block',
    'Referrer - Policy': 'strict - origin - when - cross - origin',
    'Permissions - Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict - Transport - Security': 'max - age = 31536000; includeSubDomains';
  }).for_each (([key, value]) => {
    res.set_header (key, value);
  });
;
  next ();
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}
}
}

}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
}


origin/cursor/expand-services-advertise-and-build-project-c28b

}


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
export function securityMiddleware(request) {
  const response = NextResponse.next();
  
  // Add security headers
  const headers = getSecurityHeaders();
  headers.forEach(({ key, value }) => {
    response.headers.set(key, value);
  });
  
  // Add HSTS header for HTTPS
  if (request.nextUrl.protocol === 'https:') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }
  
  return response;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/main

main



origin/main

main


origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
