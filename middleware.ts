<<<<<<< HEAD
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Public paths that don't require authentication
const publicPaths: string[] = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/blog',
  '/privacy',
  '/terms',
  '/api/health',
  '/api/contact',
];

// Admin paths that require admin authentication
const adminPaths: string[] = [
  '/admin',
  '/admin/dashboard',
  '/admin/users',
  '/admin/settings',
];

// Protected paths that require authentication
const protectedPaths: string[] = [
  '/dashboard',
  '/profile',
  '/settings',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths
  if (publicPaths.some(path => pathname === path || pathname.startsWith(path + '/'))) {
    return NextResponse.next();
  }

  // Check for admin paths
  if (adminPaths.some(path => pathname.startsWith(path))) {
    // Add admin authentication logic here
    return NextResponse.next();
  }

  // Check for protected paths
  if (protectedPaths.some(path => pathname.startsWith(path))) {
    // Add authentication logic here
    return NextResponse.next();
  }

  // Default: allow the request
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
=======
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(_request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-e382
