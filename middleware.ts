import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/services",
  "/solutions",
  "/careers",
  "/privacy",
  "/terms",
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
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
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
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://vitals.vercel-insights.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  
  // Cache control for static assets
  if (pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // Cache control for images
  if (pathname.match(/\.(jpg|jpeg|png|gif|ico|svg|webp)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000');
  }

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