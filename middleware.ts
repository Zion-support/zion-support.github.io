import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

<<<<<<< HEAD
const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/services",
<<<<<<< HEAD
=======
<<<<<<< HEAD
  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/api-docs",
  "/api",
  "/careers",
  "/case-studies"
=======
  "/micro-saas",
  "/it-services",
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
  "/ai-services",
<<<<<<< HEAD
  "/blog",
  "/docs",
  "/careers",
  "/privacy",
<<<<<<< HEAD
  "/terms"
=======
const publicPaths = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/blog',
  '/auth/login',
  '/auth/register',
  '/auth/forgot-password',
  '/auth/reset-password',
  '/auth/verify'
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
  "/it-services",
  "/micro-saas",
  "/api-docs",
  "/api",
  "/careers",
  "/case-studies"
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
  "/terms",
  "/login",
  "/register"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public paths
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }
  
  // Add security headers
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  
  return response;
}

export const config = {
  matcher: [
<<<<<<< HEAD
    '/((?!_next/static|_next/image|favicon.ico).*)',
=======
<<<<<<< HEAD
    '/((?!_next/static|_next/image|favicon.ico).*)',
=======
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
  ],
};
