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
<<<<<<< HEAD
  "/careers",
  "/help",
  "/faq",
  "/privacy",
  "/terms",
  "/login",
  "/register",
  "/forgot-password",
  "/api-docs",
  "/api",
  "/micro-saas",
  "/it-services",
  "/ai-services",
  "/pricing",
  "/news",
  "/newsletter",
  "/webinars",
  "/tutorials",
  "/white-papers",
  "/whitepapers",
  "/case-studies",
  "/community",
  "/company",
  "/compliance",
  "/cookies",
  "/docs",
  "/guides",
  "/support",
  "/security",
  "/partners",
  "/sitemap",
  "/search",
  "/services-overview",
  "/services-2024",
  "/revolutionary-2025-pricing",
  "/products",
  "/solutions/enterprise"
=======
  "/partners",
  "/news",
  "/careers",
  "/privacy",
  "/terms",
  "/cookies",
  "/sitemap",
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/verify",
>>>>>>> main
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
<<<<<<< HEAD
  // Add any authentication logic here
  // For now, just allow all requests
=======
  const authCookie = request.cookies.get("auth-token");
  if (!authCookie) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  
>>>>>>> main
  return NextResponse.next();
}

export const config = {
  matcher: [
<<<<<<< HEAD
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
=======
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
>>>>>>> main
  ],
};