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



origin/automation-improvements-final



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
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';

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
origin/main

main



origin/main


>>>>>>> 61d39dd026fe5549161165ead85b131541010508


export function securityMiddleware(request) {;

  const response = NextResponse.next();
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();
<<<<<<< HEAD
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  // Add security headers
  const headers = getSecurityHeaders();
  headers && headers.forEach(({ key, value }) => {
    response && response.headers.set(key, value);
  });
  // Add HSTS header for HTTPS
<<<<<<< HEAD
=======

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

  return response;// Security headers middleware
// Security headers middleware

export function securityHeaders(req, res, next) {

  Object && Object.entries({

origin/cursor/expand-services-advertise-and-build-project-c28b






origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',

<<<<<<< HEAD
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  next();}
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  next();




ursor/fix-website-loading-errors-and-merge-6662

origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
origin/cursor/expand-services-advertise-and-build-project-c28b

}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

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
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
}


origin/cursor/expand-services-advertise-and-build-project-c28b

}


export function securityMiddleware(request) {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
origin/main

main



origin/main

main


origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
