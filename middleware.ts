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
<<<<<<< HEAD
<<<<<<< HEAD
  "/blog",
  "/docs",
=======
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
=======
  "/it-services",
  "/micro-saas",
  "/api-docs",
  "/api",
  "/careers",
  "/case-studies"
=======
  "/terms",
  "/login",
  "/register"
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
  ],
};
