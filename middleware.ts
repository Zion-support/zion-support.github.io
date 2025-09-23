import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_ROUTES: string[] = [
  '/', '/about', '/services', '/contact', '/ai-services', '/it-services', '/micro-saas',
  '/api', '/api-docs', '/careers', '/guides', '/case-studies', '/cookies', '/industries',
  '/blog', '/solutions', '/resources', '/talent', '/team', '/partners', '/news',
  '/privacy', '/terms', '/login', '/signup', '/forgot-password', '/reset-password',
  '/verify-email', '/onboarding', '/pricing', '/faq', '/testimonials', '/integrations',
  '/developers', '/docs', '/support', '/status', '/events', '/webinars', '/whitepapers',
  '/e-books', '/reports', '/press', '/investors', '/affiliates', '/legal', '/security',
  '/accessibility', '/sitemap.xml', '/robots.txt', '/favicon.ico', '/logo.png',
  '/apple-touch-icon.png', '/favicon-32x32.png', '/favicon-16x16.png', '/site.webmanifest'
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow access to public routes
  if (PUBLIC_ROUTES.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Redirect to login for any other route if not authenticated (example logic)
  // This is a placeholder; actual authentication logic would be more complex
  const isAuthenticated = request.cookies.has('auth_token'); // Example check

  if (!isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - any files in the public folder that are not explicitly handled above (e.g., /assets, /images)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js)$).*)',
  ],
};