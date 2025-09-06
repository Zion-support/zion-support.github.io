<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/automation-improvements-final
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======



export function securityMiddleware(request) {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const response = NextResponse.next();
=======
=======
<<<<<<< HEAD
export function securityMiddleware(request) {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const response = NextResponse && NextResponse.next();
=======
=======
=======
export function securityMiddleware(request) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export function securityMiddleware(request) {;
  const response = NextResponse.next();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  // Add security headers
  const headers = getSecurityHeaders();
  headers && headers.forEach(({ key, value }) => {
    response && response.headers.set(key, value);
  });
  // Add HSTS header for HTTPS
<<<<<<< HEAD

  if (request && request.nextUrl.protocol === 'https:') {
    response && response.headers.set(
      'Strict-Transport-Security',

      'max-age=31536000; includeSubDomains; preload'
    );
  }

<<<<<<< HEAD
=======
=======
  if (request && request.nextUrl.protocol === 'https:') {
    response && response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }
  
  return response;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return response;// Security headers middleware
// Security headers middleware
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export function securityHeaders(req, res, next) {

=======
export function securityHeaders(req, res, next) {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Object && Object.entries({
=======

=======





=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res && res.setHeader(key, value);
  });
  next();
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
}

}

=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
<<<<<<< HEAD
=======
}
origin/main
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
}

}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
