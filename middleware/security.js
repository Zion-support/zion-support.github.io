<<<<<<< HEAD
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



>>>>>>> origin/merge-pr-12271

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
