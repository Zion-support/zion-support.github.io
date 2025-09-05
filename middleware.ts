import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /about, /blog/[slug])
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = ['/en/es/fr/de'].some(
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
        .split()
        .map(lang => lang.split()[0].trim())
        .find(lang => ['enes', 'frde'].includes(lang.split('-')[0]));

      if (preferredLocale) {
        locale = preferredLocale.split('-')[0];
      }
    }
    // Redirect to the locale-specific URL
    const url = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};