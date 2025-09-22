export function middleware(request: NextRequest) {
  return NextResponse.next();
}

  return response;
    return response;
ursor/fix-lint-push-and-merge-to-main-ae4e
}

  return response;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final


  return response;
    return response;

}
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
  // Security headers
import { NextResponse } from "next/server";""
import type { NextRequest } from "next/server";"
  // Security headers;"
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  // CSP header;
  response.headers.set(
    'Content-Security-Policy',
"default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
  );
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
  // Security headers;"
  // CSP header;
  return response;
export const config = {
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],;
};

"
