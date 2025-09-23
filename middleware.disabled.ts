<<<<<<< HEAD
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

<<<<<<< HEAD
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
=======
const PUBLIC_ROUTES: string[] = [
  '/', '/about', '/services', '/contact', '/ai-services', '/it-services', '/micro-saas',
  '/api', '/api-docs', '/careers', '/guides', '/case-studies', '/cookies', '/industries',
  '/blog', '/solutions', '/resources', '/talent', '/team', '/partners', '/news',
  '/privacy', '/terms', '/sitemap', '/login', '/register', '/auth/login', '/auth/register',
  '/auth/forgot-password', '/auth/reset-password', '/auth/verify'
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-c0e1
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
<<<<<<< HEAD

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
=======

  if (
    PUBLIC_ROUTES.includes(pathname) ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/static/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-c0e1
  return NextResponse.next();
}

export const config = {
<<<<<<< HEAD
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
=======
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-c0e1
