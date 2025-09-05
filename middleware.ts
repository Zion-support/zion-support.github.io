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
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/api-docs",
  "/api",
  "/careers",
  "/case-studies"
<<<<<<< HEAD
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
=======
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
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
<<<<<<< HEAD
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
=======
    '/((?!_next/static|_next/image|favicon.ico).*)',
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
=======
    '/((?!_next/static|_next/image|favicon.ico).*)',
=======
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  ],
};