import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define public routes that don't require authentication
const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/services",
  "/products",
  "/talent",
  "/test",
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/verify",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check for authentication cookie
  const authCookie = request.cookies.get("auth-token");

  if (!authCookie) {
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except api and Next.js internals
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};