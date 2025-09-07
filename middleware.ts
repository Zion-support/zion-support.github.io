import { NextResponse } from "next/server";
<<<<<<< HEAD

export function middleware(request: NextRequest) {
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
  
  return response;
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
};
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
=======
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  // Security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  // CSP header
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
  );
return response;
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
