<<<<<<< HEAD
=======
import { NextResponse } from "next/server";
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
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
  "/careers",
  "/blog",
  "/news",
  "/support",
  "/faq",
  "/privacy",
  "/terms",
  "/login",
  "/register"
=======
  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/api-docs",
  "/api",
  "/careers",
  "/case-studies"
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
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
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
=======
    '/((?!_next/static|_next/image|favicon.ico).*)',
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
  ],
};