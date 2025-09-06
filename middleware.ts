import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
export function middleware(_request: NextRequest) {
  return NextResponse.next();
ursor/automate-test-improve-and-merge-code-646c


  return response;
    return response;
ursor/automate-test-improve-and-merge-code-646c
}

export const config = {

  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
export const config = {
  matcher: ["/((?!api | _next / static | _next / image | favicon.ico).*)"]
}
;
ursor/automate-test-improve-and-merge-code-646c
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};

ursor/automate-test-improve-and-merge-code-646c
export function middleware(_request: NextRequest) {
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
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
