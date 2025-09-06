<<<<<<< HEAD



ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final

<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export function securityMiddleware(request) {;


  const response = NextResponse.next();
<<<<<<< HEAD
export function securityMiddleware(request) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export function securityMiddleware(request) {;
  const response = NextResponse.next();
<<<<<<< HEAD
=======
  const response = NextResponse && NextResponse.next();
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const response = NextResponse && NextResponse.next();
  const response = NextResponse.next();
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Add security headers
  const headers = getSecurityHeaders();
  headers && headers.forEach(({ key, value }) => {
    response && response.headers.set(key, value);
  });
  // Add HSTS header for HTTPS
<<<<<<< HEAD
<<<<<<< HEAD

  if (request && request.nextUrl.protocol === 'https:') {
    response && response.headers.set(
      'Strict-Transport-Security',

      'max-age=31536000; includeSubDomains; preload'
    );
  }

=======

=======
  return response;// Security headers middleware
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Security headers middleware

export function securityHeaders(req, res, next) {

  Object && Object.entries({

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
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  return response;// Security headers middleware
// Security headers middleware
export function securityHeaders(req, res, next) {

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a






  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
<<<<<<< HEAD
<<<<<<< HEAD



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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  next();
<<<<<<< HEAD


<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

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

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}

}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
