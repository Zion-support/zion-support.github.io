<<<<<<< HEAD
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
=======
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
>>>>>>> origin/main

<<<<<<< HEAD
const publicRoutes = [
  "/",
  "/about",
  "/contact",
<<<<<<< HEAD
  "/services",


  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/api-docs",
  "/api",
  "/careers",
  "/case-studies",
  "/micro-saas",
  "/it-services",
  "/ai-services",
  "/pricing",
  "/team",
=======
  "/blog",
  "/services",
  "/solutions",
  "/industries",
  "/resources",
  "/talent",
  "/team",
  "/partners",
  "/news",
>>>>>>> origin/main
  "/careers",
  "/blog",
  "/news",
  "/support",
  "/faq",
  "/privacy",
  "/terms",
<<<<<<< HEAD
  "/login",
  "/register"
=======
  "/cookies",
  "/sitemap",
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/verify",
=======
const publicPaths = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/api-docs',
  '/api',
  '/careers',
  '/case-studies',
  '/blog',
  '/docs',
  '/privacy',
  '/terms',
  '/login',
  '/register',
  '/auth/login',
  '/auth/register',
  '/auth/forgot-password',
  '/auth/reset-password',
  '/auth/verify'
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
>>>>>>> origin/main
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
<<<<<<< HEAD
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
  const authCookie = request.cookies.get("auth-token");
  if (!authCookie) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  
  return NextResponse.next();
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
}

export const config = {
  matcher: [
<<<<<<< HEAD
    '/((?!_next/static|_next/image|favicon.ico).*)',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
=======
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
>>>>>>> origin/main
  ],
};
