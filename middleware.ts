import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = [
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
	'/_next',
	'/favicon.ico',
	'/robots.txt',
	'/sitemap.xml',
	'/manifest.json'
];

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Skip middleware for static assets and API routes
	if (
		pathname.startsWith('/_next/') ||
		pathname.startsWith('/api/') ||
		pathname.includes('.')
	) {
		return NextResponse.next();
	}

	// Allow public routes
	if (publicRoutes.includes(pathname)) {
		return NextResponse.next();
	}

	// Default allow (no auth enforcement for now)
	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};