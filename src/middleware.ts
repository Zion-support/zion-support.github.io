import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// DISABLED: This is Next.js middleware and does not work with Vite
// Security headers are configured in netlify.toml instead
//
// This file is kept for reference only. To use middleware in Vite:
// 1. Security headers should be set via netlify.toml (already configured)
// 2. Client-side redirects can be handled via React Router
// 3. Server-side logic should use Netlify Functions or Edge Functions

/*



export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Enhanced Security Headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-this.com; frame-ancestors 'none';"
  );
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );

  // Performance Headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  
  // Cache Control for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
*/

export {}; // Make this a module to avoid TS errors
