import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = [
	"/",
	"/about",
	"/contact",
	"/blog",
	"/services",
	"/solutions",
	"/ai-services",
	"/it-services",
	"/micro-saas",
	"/resources",
	"/talent",
	"/team",
	"/partners",
	"/news",
	"/cloud-solutions",
	"/cybersecurity",
	"/database-solutions",
	"/enterprise-solutions",
	"/startup-solutions",
	"/industries",
	"/guides",
	"/custom-development",
	"/digital-transformation",
	"/consulting",
	"/careers",
	"/case-studies",
	"/pricing",
	"/privacy",
	"/terms",
	"/cookies",
	"/sitemap",
	"/accessibility",
	"/compliance",
	"/security",
	"/api",
	"/docs",
	"/products",
	"/industries/education",
	"/industries/finance",
	"/industries/healthcare",
	"/industries/government",
];

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Skip static, API, and asset routes
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

	// Default allow (no auth gating configured)
	return NextResponse.next();
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};