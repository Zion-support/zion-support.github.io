<<<<<<< HEAD
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
<<<<<<< HEAD
  response.headers.set('X-XSS-Protection', '1; mode=block');
=======
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
>>>>>>> origin/cursor/delete-old-data-records-6bba
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self'",
<<<<<<< HEAD
    "frame-ancestors 'none'",
=======
    "frame-ancestors 'none'"
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  
  return response;
}

export const config = {
<<<<<<< HEAD
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
=======
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
>>>>>>> origin/cursor/delete-old-data-records-6bba
};
=======
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(_request: NextRequest) {
	return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7a8f
