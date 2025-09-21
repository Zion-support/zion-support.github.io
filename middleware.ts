import { NextRequest, NextResponse } from 'next/server';
import { securityHeaders } from './src/utils/security';

export function middleware(request: NextRequest) {
  // Create response
  const response = NextResponse.next();
  
  // Add security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  // Rate limiting check (basic implementation)
  const clientIP = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const rateLimitKey = `rate_limit_${clientIP}`;
  
  // Add CSRF token for form submissions
  if (request.method === 'POST') {
    const csrfToken = request.headers.get('x-csrf-token');
    if (!csrfToken) {
      return NextResponse.json(
        { error: 'CSRF token required' },
        { status: 403 }
      );
    }
  }
  
  // Block suspicious user agents
  const userAgent = request.headers.get('user-agent') || '';
  const suspiciousPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /curl/i,
    /wget/i
  ];
  
  // Allow legitimate bots but block malicious ones
  const legitimateBots = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
    /duckduckbot/i,
    /baiduspider/i,
    /yandexbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /linkedinbot/i
  ];
  
  const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(userAgent));
  const isLegitimate = legitimateBots.some(pattern => pattern.test(userAgent));
  
  if (isSuspicious && !isLegitimate) {
    // Log suspicious activity
    console.warn(`Suspicious user agent blocked: ${userAgent} from IP: ${clientIP}`);
    
    // Return 403 for suspicious requests
    return NextResponse.json(
      { error: 'Access denied' },
      { status: 403 }
    );
  }
  
  // Block requests with suspicious patterns in URL
  const url = request.nextUrl.pathname;
  const suspiciousUrlPatterns = [
    /\.php$/,
    /\.asp$/,
    /\.jsp$/,
    /wp-admin/,
    /wp-login/,
    /admin/,
    /phpmyadmin/,
    /\.env$/,
    /\.git/,
    /\.svn/,
    /backup/,
    /config/,
    /database/,
    /sql/,
    /shell/,
    /cmd/,
    /eval/
  ];
  
  if (suspiciousUrlPatterns.some(pattern => pattern.test(url))) {
    console.warn(`Suspicious URL blocked: ${url} from IP: ${clientIP}`);
    return NextResponse.json(
      { error: 'Not found' },
      { status: 404 }
    );
  }
  
  // Add cache headers for static assets
  if (url.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$/)) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }
  
  // Add no-cache headers for sensitive pages
  if (url.includes('/admin') || url.includes('/dashboard') || url.includes('/profile')) {
    response.headers.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    );
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }
  
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