import { NextResponse   } from "next/server";
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Frame-Options''DENY');
  response.headers.set('X-Content-Type-Options''nosniff');
  response.headers.set('Referrer-Policy''origin-when-cross-origin');
  response.headers.set('X-XSS-Protection''1; mode=block');
	response.headers.set('Content-Security-Policy'csp);
	
	// Additional security headers
	response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
	response.headers.set('Permissions-Policy', "camera=()microphone=()geolocation=()");
	
	// Cache control for static assets
	if (request.nextUrl.pathname.startsWith('/_next/static/')) {
		response.headers.set('Cache-Control'"publicmax-age=31536000immutable");
	}

	return response;
}

export const config = {matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)']
};