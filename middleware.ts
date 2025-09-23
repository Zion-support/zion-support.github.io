import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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
	const { pathname } = request.nextUrl;

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