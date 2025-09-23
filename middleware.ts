import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Public, protected, and admin paths (deduplicated)
const publicPaths: string[] = [
	'/',
	'/about',
	'/services',
	'/contact',
	'/ai-services',
	'/it-services',
	'/micro-saas',
	'/api',
	'/api-docs',
	'/careers',
	'/guides',
	'/case-studies',
	'/cookies',
	'/industries',
	'/blog',
	'/solutions',
	'/resources',
	'/talent',
	'/team',
	'/partners',
	'/news',
	'/privacy',
	'/terms',
	'/sitemap',
	'/login',
	'/register',
	'/auth/login',
	'/auth/register',
	'/auth/forgot-password',
	'/auth/reset-password',
	'/auth/verify',
];

const protectedRoutes: string[] = [
	'/pricing',
	'/accessibility',
	'/compliance',
	'/security',
	'/docs',
	'/products',
	'/industries/education',
	'/industries/finance',
	'/industries/healthcare',
	'/industries/government',
=======
const publicRoutes = [
<<<<<<< HEAD
<<<<<<< HEAD
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
  "/industries",
  "/blog",
  "/services",
  "/solutions",
  "/industries",
  "/resources",
  "/talent",
  "/team",
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
];
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6125
const publicPaths = [
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
  '/',
  '/about',
  '/contact',
  '/services',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/api',
  '/api-docs',
  '/careers',
  '/case-studies',
  '/cookies',
  '/industries',
  '/blog',
  '/solutions',
  '/resources',
  '/talent',
  '/team',
  '/partners',
  '/news',
  '/privacy',
  '/terms',
  '/sitemap',
  '/auth/login',
  '/auth/register',
  '/auth/forgot-password',
  '/auth/reset-password',
<<<<<<< HEAD
  '/auth/verify'
<<<<<<< HEAD
];
const protectedRoutes = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/services",
  "/solutions",
  "/ai-services",
  "/it-services",
  "/micro-saas",
  "/cloud-solutions",
  "/cybersecurity",
  "/database-solutions",
  "/enterprise-solutions",
  "/startup-solutions",
  "/industries",
  "/custom-development",
  "/digital-transformation",
  "/consulting",
  "/team",
  "/careers",
  "/case-studies",
  "/news",
  "/partners",
  "/pricing",
  "/privacy",
  "/terms",
  "/cookies",
  "/accessibility",
  "/compliance",
  "/security",
  "/api",
  "/docs",
  "/products",
  "/industries/education",
  "/industries/finance",
  "/industries/healthcare",
  "/industries/government"
];

const publicRoutes2 = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/api/auth",
  "/api/health",
  "/api/status",
  "/_next",
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.json"
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-bd83
];

const adminRoutes: string[] = [
	'/admin',
	'/admin/dashboard',
	'/admin/users',
	'/admin/settings',
	'/admin/analytics',
	'/admin/content',
	'/admin/security',
=======
const publicPaths = [
  '/', '/about', '/services', '/contact', '/ai-services', '/it-services', '/micro-saas', '/api-docs', '/api', '/careers', '/case-studies', '/blog', '/docs', '/privacy', '/terms', '/login', '/register', '/auth/login', '/auth/register', '/auth/forgot-password', '/auth/reset-password', '/auth/verify'
];

const protectedRoutes = [
  '/dashboard', '/admin'
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
=======
  '/auth/verify',
  '/_next',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/manifest.json',
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6125
];

export function middleware(request: NextRequest) {
<<<<<<< HEAD
	const { pathname } = request.nextUrl;
=======
  const { pathname } = request.nextUrl;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
  // For all other routes, continue normally
  return NextResponse.next();
  
  const authCookie = request.cookies.get("auth-token");
  if (!authCookie) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  
  return NextResponse.next();
  // Allow public paths
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }
  
=======

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
=======

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6125
  // Skip middleware for static files and API routes
=======

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
  if (
    publicRoutes.includes(pathname) ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
<<<<<<< HEAD
    pathname.startsWith('/static/') ||
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6125
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-bd83

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	// Skip for static assets and API routes
	if (
=======
const publicRoutes: string[] = [
	"/",
	"/about",
	"/contact",
	"/services",
	"/blog",
	"/resources",
	"/privacy",
	"/terms",
	"/sitemap",
	"/api",
	"/api/health",
	"/api/status",
	"/_next",
	"/favicon.ico",
	"/robots.txt",
	"/sitemap.xml",
	"/manifest.json"
];

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Allow public routes and static assets
	if (
		publicRoutes.includes(pathname) ||
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-45f8
		pathname.startsWith('/_next/') ||
		pathname.startsWith('/api/') ||
		pathname.startsWith('/static/') ||
		pathname.includes('.')
	) {
		return NextResponse.next();
	}

<<<<<<< HEAD
	// Always allow public paths
	if (publicPaths.includes(pathname)) {
		return NextResponse.next();
	}

	// Determine route category
	const isProtected = protectedRoutes.some((route) => pathname === route || pathname.startsWith(route + '/'));
	const isAdmin = adminRoutes.some((route) => pathname === route || pathname.startsWith(route + '/'));

	// Auth checks
	const token = request.cookies.get('auth-token')?.value;
	const userRole = request.cookies.get('user-role')?.value;

	if ((isProtected || isAdmin) && !token) {
		const loginUrl = new URL('/login', request.url);
		loginUrl.searchParams.set('redirect', pathname);
		return NextResponse.redirect(loginUrl);
	}

	if (isAdmin && userRole !== 'admin') {
		return NextResponse.redirect(new URL('/unauthorized', request.url));
	}

	// Security headers
	const response = NextResponse.next();
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'origin-when-cross-origin');

	return response;
}

export const config = {
	matcher: [
		// Match all except API and Next.js internal assets
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
=======
=======
  // Allow public paths
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6125
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

<<<<<<< HEAD
  const isProtectedRoute = protectedRoutes.some(route => pathname === route || pathname.startsWith(route + '/'));
  if (isProtectedRoute) {
    const token = request.cookies.get('auth-token')?.value;
    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  return response;
=======
  return NextResponse.next();
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6125
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
=======
	// Default allow
	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-45f8
=======
export function middleware(_request: NextRequest) {
	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6ba1
=======
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
	"/industries",
	"/blog",
	"/solutions",
	"/resources",
	"/talent",
	"/team",
	"/partners",
	"/news",
	"/privacy",
	"/terms",
	"/sitemap",
	"/auth/login",
	"/auth/register",
	"/auth/forgot-password",
	"/auth/reset-password",
	"/auth/verify",
	"/api/auth",
	"/api/health",
	"/api/status",
	"/_next",
	"/favicon.ico",
	"/robots.txt",
	"/sitemap.xml",
	"/manifest.json",
];

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	if (publicRoutes.includes(pathname)) {
		return NextResponse.next();
	}
	return NextResponse.next();
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-8d12
=======
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
};