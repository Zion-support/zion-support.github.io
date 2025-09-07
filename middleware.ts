import { NextResponse } from "next/server;
<<<<<<< HEAD

export function middleware(request: NextRequest) {
export function middleware() {
  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Frame-Options, DENY');
  response.headers.set('X-Content-Type-Options, nosniff');
  response.headers.set('Referrer-Policy, origin-when-cross-origin');
  response.headers.set('X-XSS-Protection, 1; mode=block');

  // Content Security Policy
  const csp = [
    default-src 'self",
    "script-src self' 'unsafe-eval unsafe-inline',
    style-src 'self unsafe-inline'",
    "img-src 'self data: https:,
    font-src self'",
    "connect-src 'self,
    frame-ancestors none'"
  ].join('; );

  response.headers.set(Content-Security-Policy', csp);

  return response;
}

export const config = {
  matcher: [
<<<<<<< HEAD
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
<<<<<<< HEAD
  ],
=======
  ]
>>>>>>> ecc7d9f9794e0ded6a8fec40c9673b04874eb1ff
};
=======
    '/((?!api|_next/static|_next/image|favicon.ico).*)']}
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
