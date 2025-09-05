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
  "/pricing",
  "/careers",
  "/case-studies",
  "/api",
  "/api-docs",
  "/faq",
  "/guides",
  "/webinars",
  "/accessibility",
  "/terms",
  "/privacy",
  "/login",
  "/register"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
  // Add any additional middleware logic here
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};