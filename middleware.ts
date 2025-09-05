import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/services",
<<<<<<< HEAD
  "/solutions",
  "/industries",
  "/resources",
  "/talent",
  "/team",
  "/partners",
  "/news",
=======
  "/ai-services",
  "/it-services",
  "/micro-saas",
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
  "/careers",
  "/privacy",
  "/terms",
  "/cookies",
  "/sitemap",
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
<<<<<<< HEAD
  "/auth/verify",
=======
  "/auth/verify"
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
  const authCookie = request.cookies.get("auth-token");
  if (!authCookie) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  
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
=======
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};