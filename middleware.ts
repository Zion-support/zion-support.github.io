import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = [
	'/',
	'/about',
	'/contact',
	'/services',
	'/blog',
	'/resources',
	'/privacy',
	'/terms',
	'/sitemap',
	'/api',
];

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Allow public routes and static assets
	if (
		publicRoutes.includes(pathname) ||
		pathname.startsWith('/_next/') ||
		pathname.startsWith('/api/') ||
		pathname.includes('.')
	) {
		return NextResponse.next();
	}

	// Default: allow
	const response = NextResponse.next();
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
	return response;
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};