

origin/automation-improvements-final

ursor/fix-website-loading-errors-and-merge-6662

origin/cursor/expand-services-advertise-and-build-project-c28b
main

main

// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';

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
origin/main

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

export function securityMiddleware(request) {;

  const response = NextResponse.next();
origin/cursor/expand-services-advertise-and-build-project-c28b

// Security middleware;
import { NextResponse } from 'next/server';'
import { getSecurityHeaders } from '../utils/security-headers';

  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();
origin/cursor/expand-services-advertise-and-build-project-c28b
  // Add security headers

  // Add security headers;
  const headers = getSecurityHeaders();
  headers && headers.forEach(({ key, value }) => {}
    response && response.headers.set(key, value);
  });
// Add HSTS header for HTTPS

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

origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',

  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  next();}

origin/cursor/expand-services-advertise-and-build-project-c28b
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({

  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({

origin/cursor/expand-services-advertise-and-build-project-c28b
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {}
    res.setHeader(key, value);
  });
  next();
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
origin/cursor/expand-services-advertise-and-build-project-c28b
}

}
    response.headers.set ('
      'Strict - Transport - Security','
      'max - age = 31536000; includeSubDomains; preload');
  }
  return response;// Security headers middleware;
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
    'Strict - Transport - Security': 'max - age = 31536000; includeSubDomains';
  }).for_each (([key, value]) => {}
    res.set_header (key, value);
  });
;
  next ();
}
}

// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';
}
}}

}
}
}
}

}

origin/main
}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
}
origin/cursor/expand-services-advertise-and-build-project-c28b

}

}

export function securityMiddleware(request) {

export function securityMiddleware(request) {};
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
;
  next ();

  // Add security headers;

  // Add HSTS header for HTTPS;

pr-12325
