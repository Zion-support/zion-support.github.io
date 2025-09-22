<<<<<<< HEAD
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
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


  // Security headers
<<<<<<< HEAD
import { NextResponse } from "next/server";""
import type { NextRequest } from "next/server";"
  // Security headers;"
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
=======

  
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




  return response;
    return response;


>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
export const config = {
=======



return response;
}

origin/main
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],;
};

<<<<<<< HEAD
"
=======
export const config = {

  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],;
};


>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
