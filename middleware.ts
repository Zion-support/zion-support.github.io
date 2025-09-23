import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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
		pathname.startsWith('/_next/') ||
		pathname.startsWith('/api/') ||
		pathname.startsWith('/static/') ||
		pathname.includes('.')
	) {
		return NextResponse.next();
	}

	// Default allow
	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};