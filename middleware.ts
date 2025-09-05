<<<<<<< HEAD
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
=======
<<<<<<< HEAD
=======
import { NextResponse } from "next/server";
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
import type { NextRequest } from "next/server";
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada

const protectedRoutes = [
  "/",
  "/about",
  "/contact",
<<<<<<< HEAD
<<<<<<< HEAD
  "/blog",
  "/services",
<<<<<<< HEAD
  "/solutions",
  "/ai-services",
=======
<<<<<<< HEAD
<<<<<<< HEAD
  "/micro-saas",
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  "/it-services",
  "/micro-saas",
  "/cloud-solutions",
  "/cybersecurity",
  "/database-solutions",
  "/enterprise-solutions",
  "/startup-solutions",
  "/industries",
  "/custom-development",
  "/digital-transformation",
  "/consulting",
  "/team",
  "/careers",
  "/case-studies",
  "/news",
  "/partners",
  "/pricing",
  "/privacy",
  "/terms",
  "/cookies",
  "/accessibility",
  "/compliance",
  "/security",
  "/help",
  "/support",
  "/faq",
<<<<<<< HEAD
  "/talent",
  "/quote",
  "/white-papers",
  "/webinars",
  "/tutorials",
  "/training",
  "/docs",
  "/api-docs",
  "/sitemap",
  "/status",
=======
  "/privacy",
  "/terms",
  "/login",
  "/register"
=======
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
  "/services",
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  "/ai-services",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
  "/it-services",
  "/micro-saas",
  "/careers",
<<<<<<< HEAD
  "/privacy",
  "/terms",
  "/cookies",
  "/sitemap",
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
<<<<<<< HEAD
  "/auth/verify"
=======
  "/auth/verify",
=======
  "/blog",
  "/docs",
=======
  "/case-studies"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
=======
=======
  "/micro-saas",
  "/it-services",
  "/ai-services",
  "/pricing",
  "/team",
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
  "/careers",
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  "/blog",
  "/services",
  "/solutions",
  "/careers",
  "/privacy",
<<<<<<< HEAD
  "/terms"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-1436
=======
  "/terms",
<<<<<<< HEAD
  "/login",
  "/register"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
  "/cookies",
  "/security",
  "/sitemap",
  "/api-docs",
  "/guides",
  "/help",
  "/newsletter",
  "/webinars",
  "/white-papers",
  "/case-studies",
  "/industries",
  "/products",
  "/api",
  "/docs",
  "/pricing",
  "/demo",
  "/support",
  "/dev-resources",
  "/integration-guides",
  "/sdk-downloads",
  "/news",
  "/partners",
  "/investors",
  "/ai-services",
  "/cloud-solutions",
  "/performance",
  "/digital-transformation",
  "/consulting",
  "/services-overview"
];

const protectedRoutes = [
  "/dashboard",
  "/profile",
  "/settings",
  "/billing",
  "/admin"
];

const apiRoutes = [
  "/api/auth",
  "/api/users",
  "/api/projects",
  "/api/analytics"
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
<<<<<<< HEAD
=======
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/static/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/api/')
  ) {
    return NextResponse.next();
  }

  // Check if route is public
  const isPublicRoute = publicRoutes.includes(pathname) || 
    publicRoutes.some(route => pathname.startsWith(route + '/'));

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.includes(pathname) ||
    protectedRoutes.some(route => pathname.startsWith(route + '/'));

  // Check if route is API route
  const isApiRoute = apiRoutes.includes(pathname) ||
    apiRoutes.some(route => pathname.startsWith(route + '/'));

  // Handle API routes
  if (isApiRoute) {
    // Add CORS headers for API routes
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return response;
  }

  // Handle protected routes
  if (isProtectedRoute) {
    // Check for authentication token
    const token = request.cookies.get('auth-token');
    
    if (!token) {
      // Redirect to login page
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  // Add security headers
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
<<<<<<< HEAD
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self'",
=======
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://vitals.vercel-insights.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
    "frame-ancestors 'none'"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  
<<<<<<< HEAD
=======
  // Cache control for static assets
  if (pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // Cache control for images
  if (pathname.match(/\.(jpg|jpeg|png|gif|ico|svg|webp)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000');
  }

>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  return response;
}

export const config = {
  matcher: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
    '/((?!_next/static|_next/image|favicon.ico).*)',
=======
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-1436
=======
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
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
=======
    '/((?!_next/static|_next/image|favicon.ico).*)',
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  ],
};