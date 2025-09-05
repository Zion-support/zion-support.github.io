import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/api-docs",
  "/api",
  "/careers",
  "/case-studies"
  "/terms",
  "/login",
  "/register"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public paths
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }
  
  // Add security headers
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  
  return response;
}

export const config = {
  matcher: [
  ],
};
