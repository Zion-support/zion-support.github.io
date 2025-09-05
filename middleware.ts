import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
const publicRoutes = [
  "/",
  "/about",
  "/contact",
<<<<<<< HEAD
  "/services",
  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/api",
  "/api-docs",
  "/careers",
  "/guides",
  "/case-studies",
  "/cookies",
  "/industries"
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
>>>>>>> main
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
<<<<<<< HEAD
  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
  // For all other routes, continue normally
  return NextResponse.next();
=======
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
>>>>>>> main
}

export const config = {
  matcher: [
<<<<<<< HEAD
=======
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
>>>>>>> main
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};