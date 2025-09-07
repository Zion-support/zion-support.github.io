import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

  // Security headers
    "camera=(), microphone=(), geolocation=()",
  );
;
  // CSP header;
  response.headers.set (
    "Content - Security - Policy",
    "default - src 'self'; script - src 'self' 'unsafe - eval' 'unsafe - inline'; style - src 'self' 'unsafe - inline'; img - src 'self' data: https:; font - src 'self' data:; connect - src 'self' https:;",
  );

export function middleware(_request: NextRequest) {

  const response = NextResponse.next();
  return response;

}

export const config = {

  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],

export const config = {
  matcher: ["/((?!api | _next / static | _next / image | favicon.ico).*)"],
}
;