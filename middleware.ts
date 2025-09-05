import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

<<<<<<< HEAD
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
const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/api-docs",
  "/api",
  "/careers",
  "/case-studies"
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
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
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
=======
    '/((?!_next/static|_next/image|favicon.ico).*)',
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
  ],
};
