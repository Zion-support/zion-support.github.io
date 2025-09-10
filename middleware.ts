import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
<<<<<<< HEAD

const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/services",
  "/ai-services",
  "/blog",
  "/docs",
  "/careers",
  "/privacy",
  "/terms"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
  // Add security headers
  const response = NextResponse.next();
  
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
=======
// Define public routes that don't require authentication;
const publicRoutes = [ "/",
  "/about",
  "/contact",
  "/blog",
  "/services",
  "/products",
  "/talent",
  "/test",
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/verify",
];
export function middleware(request: NextRequest) {;
  const { pathname } = request.nextUrl;
  // Allow public routes;
  if (publicRoutes.includes(pathname)) {;
    return NextResponse.next();
}

  // Check for authentication cookie;
  const authCookie = request.cookies.get("auth-token");
  if (!authCookie) {;
    // Redirect to login if not authenticated;
    return NextResponse.redirect(new URL("/auth/login", request.url));
}

  return NextResponse.next();
}

export const config = {;
  matcher: [;
    /*;
     * Match all request paths except for the ones starting with:;
     * - api (API routes);
     * - _next/static (static files);
     * - _next/image (image optimization files);
     * - favicon.ico (favicon file);
     */;
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],,
};
>>>>>>> origin/automation-fixes
