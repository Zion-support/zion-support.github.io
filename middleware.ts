<<<<<<< HEAD
import { NextResponse } from 'next/server';'
import type { NextRequest } from 'next/server';'

export function middleware() {
  }
  const response = NextResponse.next();

  // Security headers,
response.headers.set('X-Frame-Options', 'DENY');'
  response.headers.set('X-XSS-Protection', '1; mode=block');'
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');'
  response.headers.set(
    'Permissions-Policy','
    'camera=(), microphone=(), geolocation=()''
  );

  // Content Security Policy,
const csp = [;
    "default-src 'self'","
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'","
    "style-src 'self' 'unsafe-inline'","
    "img-src 'self' "data": "https":","
    "font-src 'self'","
    "connect-src 'self'","
    "frame-ancestors 'none'""
  ].join('; ');'

  response.headers.set('Content-Security-Policy', csp);'

=======
import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    "Permissions-Policy"
    "camera=(), microphone=(), geolocation=()"
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
  
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  return response;
}

export const config = {
<<<<<<< HEAD
  }
  "matcher": [
    '/((?!api|_next/static|_next/image|favicon.ico).*)''
=======
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  ]
};