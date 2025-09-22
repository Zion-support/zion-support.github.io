<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(_request: NextRequest) {

  return NextResponse.next();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
export function middleware(request: NextRequest) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const response = NextResponse.next();
  return response;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export const config = {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
export const config = {
  matcher: ["/((?!api | _next / static | _next / image | favicon.ico).*)"],
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

}

return response;
}
export const config = {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
