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
  "/webinars",
  "/white-papers",
  "/guides",
  "/industries",
  "/api",
  "/api-docs"
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
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};