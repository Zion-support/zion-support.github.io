import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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
const publicPaths = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/api-docs',
  '/api',
  '/careers',
  '/case-studies',
  '/blog',
  '/docs',
  '/privacy',
  '/terms',
  '/login',
  '/register',
  '/auth/login',
  '/auth/register',
  '/auth/forgot-password',
  '/auth/reset-password',
  '/auth/verify'
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
];

export function middleware(request: NextRequest) {
<<<<<<< HEAD
	const { pathname } = request.nextUrl;
=======
  const { pathname } = request.nextUrl;
  
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
  
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/static/') ||
    pathname.includes('.') ||
    publicRoutes.includes(pathname)
  ) {
    return NextResponse.next();
  }
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-bd83

	// Skip for static assets and API routes
	if (
		pathname.startsWith('/_next/') ||
		pathname.startsWith('/api/') ||
		pathname.startsWith('/static/') ||
		pathname.includes('.')
	) {
		return NextResponse.next();
	}

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
};