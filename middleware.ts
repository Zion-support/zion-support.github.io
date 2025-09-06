<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

<<<<<<< HEAD
export function middleware(_request: NextRequest) {

  return NextResponse.next();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

  // Security headers
    "camera=(), microphone=(), geolocation=()",
  );
;
  // CSP header;
  response.headers.set (
    "Content - Security - Policy",
    "default - src 'self'; script - src 'self' 'unsafe - eval' 'unsafe - inline'; style - src 'self' 'unsafe - inline'; img - src 'self' data: https:; font - src 'self' data:; connect - src 'self' https:;",
  );

  return response;
    return response;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
<<<<<<< HEAD
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // CSP header
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
  );
  
  return response;

>>>>>>> origin/automation-improvements-final

=======
return response;
}

  matcher: ["/((?!api|_next/static|_next/image|favicon && favicon.ico).*)"],
};

=======
=======
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
>>>>>>> main
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export function middleware(_request: NextRequest) {
=======
export function middleware(request: NextRequest) {
>>>>>>> c554ecc8e69d10c1910127259eb72d6f61ca1955
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
    "frame-ancestors 'none'",
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);

  return response;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> c554ecc8e69d10c1910127259eb72d6f61ca1955
}

export const config = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
}

export const config = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
<<<<<<< HEAD
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
export const config = {
  matcher: ["/((?!api | _next / static | _next / image | favicon.ico).*)"],
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
