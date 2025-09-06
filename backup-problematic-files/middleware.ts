import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
<<<<<<< HEAD
export function middleware(request: NextRequest) {

export function middleware(request: NextRequest) {;
  const response = NextResponse.next();
  
origin/main
  // Security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy"
    "camera=(), microphone=(), geolocation=()"
  );
  // CSP header
  response.headers.set(
    "Content-Security-Policy"
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
  );
  
ursor/integrate-build-improve-and-re-verify-8f7d

  // Security Headers
=======


export function middleware(request: NextRequest) {;

  const response = NextResponse.next();


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  // Security headers
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
  
  return response;
}
=======


}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  
  
ursor/fix-lint-push-and-merge-to-main-ae4e
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
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return response;
    return response;
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-ae4e
}
  
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

return response;
}
<<<<<<< HEAD
origin/main
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],;
};
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export const config = {

  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],;
};

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
