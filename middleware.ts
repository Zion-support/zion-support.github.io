import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
<<<<<<< HEAD
  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self'",
    "connect-src 'self'",
    "frame-ancestors 'none'"
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);

  return response;
=======
  // Placeholder for middleware logic
  return NextResponse.next();
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
}

export const config = {
  matcher: [
<<<<<<< HEAD
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
=======
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
};