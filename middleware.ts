import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/",
  "/about",
  "/contact",
<<<<<<< HEAD
  "/services",
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
  "/terms",
  "/login",
  "/register"
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
  "/accessibility",
  "/compliance",
  "/gdpr",
  "/security",
  "/support",
  "/help",
  "/faq",
  "/guides",
  "/tutorials",
  "/webinars",
  "/white-papers",
  "/case-studies",
  "/press",
  "/events",
  "/newsletter",
  "/sitemap",
  "/api-docs",
  "/docs",
  "/api",
  "/login",
  "/register",
  "/forgot-password",
  "/pricing",
  "/company",
  "/community",
  "/status",
  "/search",
  "/micro-saas",
  "/it-services",
  "/ai-services",
  "/services-overview",
  "/solutions/cloud-migration",
  "/solutions/custom",
  "/solutions/digital-transformation",
  "/solutions/education",
  "/solutions/enterprise",
  "/solutions/finance",
  "/solutions/government",
  "/solutions/healthcare",
  "/solutions/industry",
  "/solutions/retail",
  "/solutions/smb",
  "/solutions/startup",
  "/services/cloud",
  "/services/cloud-devops",
  "/services/cybersecurity",
  "/services/data-analytics",
  "/services/quantum-computing",
  "/industries/education",
  "/industries/finance",
  "/industries/government",
  "/industries/healthcare",
  "/industries/manufacturing",
  "/industries/retail"
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
<<<<<<< HEAD
  // Allow public routes
=======
  // Check if the route is public
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
<<<<<<< HEAD
  // Add security headers
  const response = NextResponse.next();
  
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  return response;
=======
  // For protected routes, you can add authentication logic here
  // For now, we'll just allow all requests
  return NextResponse.next();
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
}

export const config = {
  matcher: [
<<<<<<< HEAD
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
=======
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
  ],
};