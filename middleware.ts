import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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
};