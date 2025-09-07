origin/automation-improvements-final

ursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
main

main
=======

ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final

<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';

origin/main

<<<<<<< HEAD
main

origin/main

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
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export function securityMiddleware(request) {;

  const response = NextResponse.next();
<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b

  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();

=======
export function securityMiddleware(request) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export function securityMiddleware(request) {;
  const response = NextResponse.next();
<<<<<<< HEAD
=======
=======
  const response = NextResponse && NextResponse.next();
=======
=======

export function securityMiddleware(request) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const response = NextResponse.next();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Add security headers

  const headers = getSecurityHeaders();
  headers && headers.forEach(({ key, value }) => {}
    response && response.headers.set(key, value);
  });
<<<<<<< HEAD
=======
  // Add HSTS header for HTTPS
<<<<<<< HEAD
  if (request && request.nextUrl.protocol === 'https:') {
    response && response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }
  
  return response;
}
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  return response;// Security headers middleware
// Security headers middleware
export function securityHeaders(req, res, next) {

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  if (request && request.nextUrl.protocol === 'https:') {
    response && response.headers.set(
      'Strict-Transport-Security',

      'max-age=31536000; includeSubDomains; preload'
    );
  }

<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36






>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
<<<<<<< HEAD
  Object.entries({
    'X-Content-Type-Options': 'nosniff'
    'X-Frame-Options': 'DENY'
    'X-XSS-Protection': '1; mode=block'
    'Referrer-Policy': 'strict-origin-when-cross-origin'
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',;
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {}
    res.setHeader(key, value);
  });
  next();

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

}
    response.headers.set ('
      'Strict - Transport - Security','
      'max - age = 31536000; includeSubDomains; preload');
  }
  return response;// Security headers middleware;

    'Strict - Transport - Security': 'max - age = 31536000; includeSubDomains';
  }).for_each (([key, value]) => {}
    res.set_header (key, value);
  });
;
  next ();
}
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

}
}
}
origin/main
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
}
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

export function securityMiddleware(request) {

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

origin/main

origin/main
main
origin/main
main
origin/cursor/automate-test-improve-and-merge-code-2533
=======

}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
