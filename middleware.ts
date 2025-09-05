import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/products",
  "/solutions",
  "/industries",
  "/news",
  "/blog",
  "/careers",
  "/support",
  "/privacy",
  "/terms",
  "/cookies",
  "/sitemap",
  "/api-docs",
  "/guides",
  "/tutorials",
  "/webinars",
  "/white-papers",
  "/case-studies",
  "/partners",
  "/pricing",
  "/security",
  "/compliance",
  "/accessibility",
  "/community",
  "/newsletter",
  "/help",
  "/faq",
  "/talent",
  "/404"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the route is public
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(route + "/")
  );
  
  if (isPublicRoute) {
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
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};