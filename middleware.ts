import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/services",
<<<<<<< HEAD
  "/micro-saas",
  "/it-services",
  "/ai-services",
  "/pricing",
  "/team",
=======
  "/ai-services",
  "/blog",
  "/docs",
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
  "/careers",
  "/blog",
  "/news",
  "/support",
  "/faq",
  "/privacy",
<<<<<<< HEAD
  "/terms",
  "/login",
  "/register"
=======
  "/terms"
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
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