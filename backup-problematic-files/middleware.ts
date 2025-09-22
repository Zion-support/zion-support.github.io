<<<<<<< HEAD
<<<<<<< HEAD

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

  return response;
    return response;
ursor/fix-lint-push-and-merge-to-main-ae4e
}
  
=======
=======
  
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  
  return response;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  return response;
    return response;
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

}
=======
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
  // Security headers
=======
import { NextResponse } from "next/server";""
import type { NextRequest } from "next/server";"
  // Security headers;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  // CSP header;
  response.headers.set(
    'Content-Security-Policy',
<<<<<<< HEAD
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  // CSP header
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
=======
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"")
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  );
  // Security headers;"
  // CSP header;
  return response;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export const config = {
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],;
};
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
