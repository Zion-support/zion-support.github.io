import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/services",
  "/solutions",
  "/ai-services",
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
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/verify"
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
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};