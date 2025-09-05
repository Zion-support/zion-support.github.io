import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

<<<<<<< HEAD
const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/services",
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
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
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
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
  ],
};
