import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Public routes that don't require authentication
const publicRoutes: string[] = [
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
	'/auth/login',
	'/auth/register',
	'/auth/forgot-password',
	'/auth/reset-password',
	'/auth/verify',
	'/api/auth',
	'/api/health',
	'/api/status',
	'/_next',
	'/favicon.ico',
	'/robots.txt',
	'/sitemap.xml',
	'/manifest.json',
];

// Protected routes that require authentication
const protectedRoutes: string[] = [
	'/dashboard',
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

// Admin routes that require admin role
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

	// Skip middleware for static files and API routes
	if (
		pathname.startsWith('/_next/') ||
		pathname.startsWith('/api/') ||
		pathname.startsWith('/static/') ||
		pathname.includes('.')
	) {
		return NextResponse.next();
	}

	// Allow public routes
	if (publicRoutes.includes(pathname)) {
		return NextResponse.next();
	}

	// Check for protected routes
	const isProtected = protectedRoutes.some((route) => 
		pathname === route || pathname.startsWith(route + '/')
	);
	const isAdmin = adminRoutes.some((route) => 
		pathname === route || pathname.startsWith(route + '/')
	);

	// Auth checks
	const token = request.cookies.get('auth-token')?.value;
	const userRole = request.cookies.get('user-role')?.value;

	if ((isProtected || isAdmin) && !token) {
		const loginUrl = new URL('/auth/login', request.url);
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