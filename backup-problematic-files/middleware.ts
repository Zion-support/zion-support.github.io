import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
<<<<<<< HEAD
export function middleware(request: NextRequest) {
=======

export function middleware(request: NextRequest) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const response = NextResponse.next();


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
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


}

=======
  
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
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

=======
return response;
}


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export const config = {
<<<<<<< HEAD
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
=======
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
