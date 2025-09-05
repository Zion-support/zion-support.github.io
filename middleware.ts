import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/",
  "/about",
  "/contact",
<<<<<<< HEAD
  "/blog",
  "/services",
  "/solutions",
  "/industries",
  "/resources",
  "/talent",
  "/team",
  "/partners",
  "/news",
  "/careers",
  "/privacy",
  "/terms",
  "/cookies",
  "/sitemap",
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/verify",
=======
  "/services",
  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/api-docs",
  "/api",
  "/careers",
  "/case-studies"
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
<<<<<<< HEAD
  const authCookie = request.cookies.get("auth-token");
  if (!authCookie) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
=======
  // Add security headers
  const response = NextResponse.next();
  
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
  
  return response;
}

export const config = {
  matcher: [
<<<<<<< HEAD
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
=======
    '/((?!_next/static|_next/image|favicon.ico).*)',
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
  ],
};