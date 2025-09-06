
// Security middleware
import { NextResponse } from 'next/server';
import { getSecurityHeaders } from '../utils/security-headers';
<<<<<<< HEAD
export function securityMiddleware(request) {
  const response = NextResponse.next();
=======
}

export function securityMiddleware(request) {
  const response = NextResponse.next();

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  // Add security headers
  const headers = getSecurityHeaders();
  headers.forEach(({ key, value }) => {
    response.headers.set(key, value);
  });
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  // Add HSTS header for HTTPS
  if (request.nextUrl.protocol === 'https:') {
    response.headers.set(
      'Strict-Transport-Security'
      'max-age=31536000; includeSubDomains; preload'
    );
  }
<<<<<<< HEAD
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
    'X-Content-Type-Options': 'nosniff'
    'X-Frame-Options': 'DENY'
    'X-XSS-Protection': '1; mode=block'
    'Referrer-Policy': 'strict-origin-when-cross-origin'
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  next();
}
=======

  return response;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
