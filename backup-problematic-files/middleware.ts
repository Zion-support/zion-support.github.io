<<<<<<< HEAD
const response = NextResponse && NextResponse.next();
=======
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
<<<<<<< HEAD
export function middleware(request: NextRequest) {
=======

export function middleware(request: NextRequest) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const response = NextResponse.next();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
>>>>>>> origin/main
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  // Security headers
  response && response.headers.set("X-Frame-Options", "DENY");
  response && response.headers.set("X-Content-Type-Options", "nosniff");
  response && response.headers.set("Referrer-Policy", "origin-when-cross-origin");
  response && response.headers.set(
    "Permissions-Policy",
import { NextResponse  } from './next / server';
import type { NextRequest } from './next / server';
;
export /**
 * middleware - Function description
 */
function middleware() {
  const response = NextResponse.next ();
;
  // Security headers;
  response.headers.set ("X - Frame - Options", "DENY");
  response.headers.set ("X - Content - Type - Options", "nosniff");
  response.headers.set ("Referrer - Policy", "origin - when - cross - origin");
  response.headers.set (
    "Permissions - Policy",
    "camera=(), microphone=(), geolocation=()",
  );
  response && response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;",
;
  // CSP header;
  response.headers.set (
    "Content - Security - Policy",
    "default - src 'self'; script - src 'self' 'unsafe - eval' 'unsafe - inline'; style - src 'self' 'unsafe - inline'; img - src 'self' data: https:; font - src 'self' data:; connect - src 'self' https:;",
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
  
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

<<<<<<< HEAD
  // Security Headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  
  // Strict Transport Security
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );
  
  // Permissions Policy
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  
  // Cache Control for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // Cache Control for images
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|ico|svg|webp)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=86400');
  }
  
  // Rate limiting headers (basic implementation)
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  response.headers.set('X-RateLimit-Limit', '100');
  response.headers.set('X-RateLimit-Remaining', '99');
  response.headers.set('X-RateLimit-Reset', new Date(Date.now() + 3600000).toISOString());
  
  // CORS headers
  response.headers.set('Access-Control-Allow-Origin', request.nextUrl.origin);
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Remove server information
  response.headers.delete('X-Powered-By');
  response.headers.delete('Server');
  
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
  return response;
}
<<<<<<< HEAD
=======
=======
  
=======
=======
  
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
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
<<<<<<< HEAD
  
  return response;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return response;
    return response;
}
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
<<<<<<< HEAD
return response;
}
  matcher: ["/((?!api|_next/static|_next/image|favicon && favicon.ico).*)"],
};
export const config = {
  matcher: ["/((?!api | _next / static | _next / image | favicon.ico).*)"],
}
;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

=======
return response;
}
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export const config = {
<<<<<<< HEAD
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
=======
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
