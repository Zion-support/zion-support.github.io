import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Security middleware for Zion Tech Group
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https: wss:",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests"
    ].join('; ')
  );

  // Rate limiting (basic implementation)
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const rateLimitKey = `rate_limit:${ip}`;
  
  // Add rate limiting headers
  response.headers.set('X-RateLimit-Limit', '100');
  response.headers.set('X-RateLimit-Remaining', '99'); // Placeholder

  // Performance monitoring
  const startTime = Date.now();
  
  // Log request for monitoring
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.url} - IP: ${ip}`);

  // Handle specific routes
  const { pathname } = request.nextUrl;
  
  // Redirect old routes to new ones
  if (pathname.startsWith('/old-')) {
    return NextResponse.redirect(new URL(pathname.replace('/old-', '/'), request.url));
  }

  // Block suspicious requests
  if (pathname.includes('..') || pathname.includes('//')) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // Add response time header
  response.headers.set('X-Response-Time', `${Date.now() - startTime}ms`);

  return response;
}

export const config = {
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
};