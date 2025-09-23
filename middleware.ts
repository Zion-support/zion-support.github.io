import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Consolidated list of public routes
const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/services",
  "/solutions",
  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/resources",
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
  "/api",
  "/docs",
  "/products",
  "/industries/education",
  "/industries/finance",
  "/industries/healthcare",
  "/industries/government"
];

// Additional always-public endpoints
const alwaysPublic = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/api/auth",
  "/api/health",
  "/api/status",
  "/_next",
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.json"
];

const adminRoutes = [
  "/admin",
  "/admin/dashboard",
  "/admin/users",
  "/admin/settings",
  "/admin/analytics",
  "/admin/content",
  "/admin/security"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static, api, and public paths outright
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.') ||
    alwaysPublic.includes(pathname) ||
    publicRoutes.some(route => pathname === route || pathname.startsWith(route + '/'))
  ) {
    return NextResponse.next();
  }

  // For all other routes, continue normally (no auth gating configured)
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};