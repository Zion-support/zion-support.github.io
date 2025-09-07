<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508


<<<<<<< HEAD
<<<<<<< HEAD
=======




















>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

origin/automation-improvements-final


ursor/fix-website-loading-errors-and-merge-6662

origin/cursor/expand-services-advertise-and-build-project-c28b
main

main
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======


>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
}
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
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/main

main



origin/main


<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function securityMiddleware(request) {
  const response = NextResponse.next();
  
  // Add security headers


















// Security middleware;
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';
export function securityMiddleware(request) {
  const response = NextResponse.next();
  
  // Add security headers;
pr-12325
  const headers = getSecurityHeaders();
  headers.forEach(({ key, value }) => {
    response.headers.set(key, value);
  });
  
  // Add HSTS header for HTTPS
  if (request.nextUrl.protocol === 'https:') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
  // Add HSTS header for HTTPS;
  if (request.nextUrl.protocol === 'https:') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload)
pr-12325
    );
  }
  
  return response;
}
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/main
main
origin/main
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


export function securityMiddleware(request) {;

  const response = NextResponse.next();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======















// Security middleware;
import { NextResponse } from 'next/server';'
import { getSecurityHeaders } from '../utils/security-headers';


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Add security headers
=======


  // Add security headers;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const headers = getSecurityHeaders();
  headers && headers.forEach(({ key, value }) => {}
    response && response.headers.set(key, value);
  });
<<<<<<< HEAD
  // Add HSTS header for HTTPS
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  if (request && request.nextUrl.protocol === 'https:') {
    response && response.headers.set(
      'Strict-Transport-Security',

      'max-age=31536000; includeSubDomains; preload'
    );
  }

ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return response;// Security headers middleware
// Security headers middleware

  const response = NextResponse && NextResponse.next();
  // Add security headers;
  headers && headers.forEach(({ key, value }) => {
    response && response.headers.set(key, value);
  // Add HSTS header for HTTPS;
  return response;// Security headers middleware;
// Security headers middleware;
pr-12325
export function securityHeaders(req, res, next) {

  Object && Object.entries({

<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a






<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  next();}
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


origin/cursor/expand-services-advertise-and-build-project-c28b

=======
<<<<<<< HEAD
  // Add HSTS header for HTTPS;
  return response;// Security headers middleware;
// Security headers middleware;
export function securityHeaders(req, res, next) {}
  Object && Object.entries({};
  return response;// Security headers middleware;
export function securityHeaders(req, res, next) {}
  Object.entries({}
'
    'X-Content-Type-Options': 'nosniff','
    'X-Frame-Options': 'DENY',';
    'X-XSS-Protection': '1; mode=block','
    'Referrer-Policy': 'strict-origin-when-cross-origin','
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({

  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({


origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {}
    res.setHeader(key, value);
  });
  next();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a




<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

}
    response.headers.set ('
      'Strict - Transport - Security','
      'max - age = 31536000; includeSubDomains; preload');
  }
  return response;// Security headers middleware;
<<<<<<< HEAD
export /**;
 * security_headers - Function description;
 */
function security_headers() {}
  Object.entries ({'
    'X - Content - Type - Options': 'nosniff','
    'X - Frame - Options': 'DENY','
    'X - XSS - Protection': '1; mode = block','
    'Referrer - Policy': 'strict - origin - when - cross - origin','
    'Permissions - Policy': 'camera=(), microphone=(), geolocation=()','
=======
export /**
 * security_headers - Function description

  return response;// Security headers middleware;)
  Object.entries({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',')
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains)
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  next();

    response.headers.set (
      'Strict - Transport - Security',')
      'max - age = 31536000; includeSubDomains; preload');
export /**
 * security_headers - Function description;
pr-12325
 */
function security_headers() {
  Object.entries ({
    'X - Content - Type - Options': 'nosniff',
    'X - Frame - Options': 'DENY',
    'X - XSS - Protection': '1; mode = block',
    'Referrer - Policy': 'strict - origin - when - cross - origin',
    'Referrer - Policy': 'strict - origin - when - cross - origin',')
pr-12325
    'Permissions - Policy': 'camera=(), microphone=(), geolocation=()',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    'Strict - Transport - Security': 'max - age = 31536000; includeSubDomains';
  }).for_each (([key, value]) => {}
    res.set_header (key, value);
  });
;
  next ();
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
}
=======
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
<<<<<<< HEAD
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705

// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';
=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

}
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
}
}

}





origin/main
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
}
origin/cursor/expand-services-advertise-and-build-project-c28b
=======









}
<<<<<<< HEAD


<<<<<<< HEAD


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}


<<<<<<< HEAD
=======
=======
}
}
}

}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function securityMiddleware(request) {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

export function securityMiddleware(request) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const response = NextResponse.next();
  
  // Add security headers;
  const headers = getSecurityHeaders();
  headers.forEach(({ key, value }) => {}
    response.headers.set(key, value);
  });
  
  // Add HSTS header for HTTPS'
  if (request.nextUrl.protocol === 'https:') {}
    response.headers.set('
      'Strict-Transport-Security','
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
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

















origin/main
main
origin/main
main
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======














'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
  next ();

  
  // Add security headers;
  
  // Add HSTS header for HTTPS;
  
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
