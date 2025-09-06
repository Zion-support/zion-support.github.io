<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
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
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20

<<<<<<< HEAD
=======

>>>>>>> origin/main
// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';
<<<<<<< HEAD
export function securityMiddleware(request) {
=======

export function securityMiddleware(request) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const response = NextResponse.next();
=======
  const response = NextResponse && NextResponse.next();
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
  
<<<<<<< HEAD
  return response;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

// Security headers middleware

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export function securityHeaders(req, res, next) {

  Object && Object.entries({
=======

=======





=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD
  return response;
=======
// Security headers middleware
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======
  return response;// Security headers middleware
>>>>>>> origin/main
export function securityHeaders(req, res, next) {
  Object.entries({
<<<<<<< HEAD
    'X-Content-Type-Options': 'nosniff'
    'X-Frame-Options': 'DENY'
    'X-XSS-Protection': '1; mode=block'
    'Referrer-Policy': 'strict-origin-when-cross-origin'
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
=======
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',;
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res && res.setHeader(key, value);
  });
  next();
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/main
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
