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

export function securityMiddleware(request) {

export function securityMiddleware(request) {;

  const response = NextResponse.next();

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

    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res && res.setHeader(key, value);
  });
  next();

}


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127



