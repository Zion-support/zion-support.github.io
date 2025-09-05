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
  "/pricing",
  "/security",
  "/compliance",
  "/privacy",
  "/terms",
  "/cookies",
  "/sitemap",
  "/search",
  "/support",
  "/help",
  "/faq",
  "/guides",
  "/tutorials",
  "/webinars",
  "/white-papers",
  "/whitepapers",
  "/news",
  "/newsletter",
  "/partners",
  "/case-studies",
  "/community",
  "/company",
  "/industries",
  "/login",
  "/register",
  "/forgot-password",
  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/products",
  "/solutions/enterprise",
  "/solutions/small-business",
  "/solutions/startup"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the route is public
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
  // For protected routes, you can add authentication logic here
  // For now, we'll just allow access
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
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};