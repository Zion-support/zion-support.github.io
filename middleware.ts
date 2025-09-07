
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
<<<<<<< HEAD
export function middleware(_request: NextRequest) {
  return NextResponse.next();

export function middleware(_request: NextRequest) {
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-c074
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
<<<<<<< HEAD
    return response;


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();

}

export const config = {

export const config = {
  matcher: ["/((?!api | _next / static | _next / image | favicon.ico).*)"],
}
;

  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-c074
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
};
