import { NextRequest, NextResponse } from 'next/server';

const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/solutions",
  "/industries",
  "/blog",
  "/news",
  "/careers",
  "/help",
  "/guides",
  "/case-studies",
  "/cookies",
  "/privacy",
  "/terms",
  "/sitemap",
  "/newsletter",
  "/compliance",
  "/security",
  "/api",
  "/docs",
  "/products",
  "/industries/education",
  "/industries/finance",
  "/industries/healthcare",
  "/industries/government",
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
  "/sitemap.xml"
];

const protectedRoutes = [
  "/admin",
  "/admin/dashboard",
  "/admin/users",
  "/admin/settings",
  "/admin/analytics",
  "/admin/content",
  "/admin/security",
  "/case-studies"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the route is public
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
  // Check if the route is protected
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    // Add authentication logic here
    // For now, just allow access
    return NextResponse.next();
  }
  
  // Default: allow access
  return NextResponse.next();
}
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};