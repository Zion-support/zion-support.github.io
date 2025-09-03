import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();
<<<<<<< HEAD

  // Security headers'
=======
  
  // Security headers
<<<<<<< HEAD
  response.headers.set('X-Content-Type-Options', 'nosniff');
>>>>>>> main
  response.headers.set('X-Frame-Options', 'DENY');
<<<<<<< HEAD
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
=======
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('
    'Permissions-Policy',
<<<<<<< HEAD
    'camera=(), microphone=(), geolocation=()
=======
    'camera=(), microphone=(), geolocation=()'
=======
  response.headers.set('X-Frame-Options,DENY');
  response.headers.set('X-XSS-Protection,1; mode=block');
  response.headers.set('Referrer-Policy,strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy,camera=(), microphone=(), geolocation=()'
>>>>>>> main
>>>>>>> main
  );

>>>>>>> main
  // Content Security Policy
<<<<<<< HEAD
  const csp = ['
    "default-src 'self'","
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'","
    "style-src 'self' 'unsafe-inline'","
    "img-src 'self' data: http,
    s:","
    "font-src 'self'","
    "connect-src 'self'","
    "frame-ancestors 'none'""
  ].join('; ');
'
=======
  const csp = [
<<<<<<< HEAD
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self'",
    "connect-src 'self'",
    "frame-ancestors 'none'",
  ].join('; ');
<<<<<<< HEAD
  
=======
=======
    "default-src 'self',script-src 'self' 'unsafe-eval' 'unsafe-inline',style-src 'self' 'unsafe-inline',img-src 'self' data: https:,font-src 'self',connect-src 'self',frame-ancestors 'none'"
  ].join();
>>>>>>> main

>>>>>>> main
>>>>>>> main
  response.headers.set('Content-Security-Policy', csp);
  
  return response}

<<<<<<< HEAD
export const config = {'
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)],
};
'
=======
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
>>>>>>> main
