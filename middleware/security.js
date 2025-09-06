ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';

<<<<<<< HEAD
export function securityMiddleware(request) {
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

export function securityMiddleware(request) {;

  const response = NextResponse.next();
<<<<<<< HEAD
=======
=======
  const response = NextResponse && NextResponse.next();
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  const response = NextResponse.next();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  // Add security headers
  const headers = getSecurityHeaders();
  headers && headers.forEach(({ key, value }) => {
    response && response.headers.set(key, value);
  });
  // Add HSTS header for HTTPS

  if (request && request.nextUrl.protocol === 'https:') {
    response && response.headers.set(
      'Strict-Transport-Security',

      'max-age=31536000; includeSubDomains; preload'
    );
  }




>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

export function securityHeaders(req, res, next) {

  Object && Object.entries({

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
=======
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res && res.setHeader(key, value);
  });
  next();
<<<<<<< HEAD

}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD


=======
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
// Security middleware;
import { NextResponse } from 'next / server';
import { getSecurityHeaders } from '../utils / security - headers';
;
export /**
 * security_middleware - Function description
 */
function security_middleware() {
  const response = NextResponse.next ();
;
  // Add security headers;
  const headers = getSecurityHeaders ();
  headers.for_each (({ key, value }) => {
    response.headers.set (key, value);
  });
;
  // Add HSTS header for HTTPS;
  // Check condition
if ( {) {
  $2
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

<<<<<<< HEAD


=======
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
