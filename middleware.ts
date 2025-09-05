import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

<<<<<<< HEAD
const publicRoutes = [
  "/",
  "/about",
  "/contact",
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
>>>>>>> 22585ea456adf6ad6cf7b3256318e997f8ac668b
export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /about, /blog/[slug])
  const { pathname } = request.nextUrl;
<<<<<<< HEAD
  
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
  const authCookie = request.cookies.get("auth-token");
  if (!authCookie) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  
=======

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = ['/en', '/es', '/fr', '/de'].some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect if there is no locale
  if (!pathnameHasLocale) {
    // Get locale from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    let locale = 'en'; // default locale

    if (acceptLanguage) {
      // Parse Accept-Language header and extract preferred locale
      const preferredLocale = acceptLanguage
        .split(',')
        .map(lang => lang.split(';')[0].trim())
        .find(lang => ['en', 'es', 'fr', 'de'].includes(lang.split('-')[0]));

      if (preferredLocale) {
        locale = preferredLocale.split('-')[0];
      }
    }

    // Redirect to the locale-specific URL
    const url = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(url);
  }

>>>>>>> 22585ea456adf6ad6cf7b3256318e997f8ac668b
  return NextResponse.next();
}

export const config = {
<<<<<<< HEAD
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
=======
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
>>>>>>> 22585ea456adf6ad6cf7b3256318e997f8ac668b
};