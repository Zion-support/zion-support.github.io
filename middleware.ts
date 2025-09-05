import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/api",
  "/api-docs",
  "/careers",
  "/guides",
  "/case-studies",
  "/cookies",
  "/industries"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
  // For all other routes, continue normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};