import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/services",
  "/ai-services",
<<<<<<< HEAD
  "/it-services",
  "/micro-saas",
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
  "/blog",
  "/docs",
  "/careers",
  "/privacy",
  "/terms"
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
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
<<<<<<< HEAD
    '/((?!_next/static|_next/image|favicon.ico).*)',
=======
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  ],
};