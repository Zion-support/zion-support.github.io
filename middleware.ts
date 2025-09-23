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
	'/blog',
	'/privacy',
	'/terms',
	'/sitemap',
	'/_next',
	'/favicon.ico',
];

// Protected routes that may require authentication (placeholder)
const protectedRoutes: string[] = [
	'/dashboard',
	'/profile',
	'/settings',
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

	// Example checks for protected; implement real auth as needed
	const isProtected = protectedRoutes.some((route) => pathname === route || pathname.startsWith(route + '/'));
	if (isProtected) {
		return NextResponse.next();
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
