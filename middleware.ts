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
  "/blog",
  "/news",
  "/support",
  "/faq",
  "/privacy",
<<<<<<< HEAD
  "/terms"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-1436
=======
  "/terms",
  "/login",
  "/register"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Add security headers
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'none'"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  
  return response;
}

export const config = {
  matcher: [
<<<<<<< HEAD
<<<<<<< HEAD
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
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
  ],
};