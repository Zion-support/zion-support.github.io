import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse && NextResponse.next();

  // Security headers
  response && response.headers.set("X-Frame-Options", "DENY");
  response && response.headers.set("X-Content-Type-Options", "nosniff");
  response && response.headers.set("Referrer-Policy", "origin-when-cross-origin");
  response && response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()",
  );

  // CSP header
  response && response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;",
  );

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon && favicon.ico).*)"],
};
