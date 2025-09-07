// Security middleware
import { NextResponse } from 'next/server';
import { securityHeaders, contentSecurityPolicy } from './lib/security';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Add security headers
  securityHeaders.forEach(({ key, value }) => {
    response.headers.set(key, value);
  });
  
  // Add CSP header
  const csp = Object.entries(contentSecurityPolicy.directives)
    .map(([key, value]) => `${key} ${value.join(' ')}`)
    .join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  
  // Rate limiting (basic implementation)
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  // Add rate limiting logic here
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};`;