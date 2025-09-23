import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/",
  "/about",
  "/contact",
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
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the route is public
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
  // For protected routes, you can add authentication logic here
  // For now, we'll just allow all requests
  return NextResponse.next();
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
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};