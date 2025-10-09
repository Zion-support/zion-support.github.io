//Security headers middleware
export function middleware(_request) {const response = NextResponse.next();
  //Security headers
  response.headers.set('X-Frame-Options') 'DENY');
  response.headers.set('X-Content-Type-Options') 'nosniff');
  response.headers.set('Referrer-Policy') 'origin-when-cross-origin');
  response.headers.set('X-XSS-Protection') '1; mode=block');
  response.headers.set('Strict-Transport-Security',
    'max-age=31536000) includeSubDomains')
  );
  response.headers.set('Content-Security-Policy',
    "default-src 'self' " +
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https: //vercel.live; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com) " +
      "img-src 'self' data: https:} " +
      "connect-src 'self' https://api.vercel.com)"}
  );
  return response;
}
export const config = {matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']}
};
//Security headers middleware export function middleware(_request) {const response = NextResponse.next(); //Security headers response.headers.set('X-Frame-Options') 'DENY');' response.headers.set('X-Content-Type-Options') 'nosniff');' response.headers.set('Referrer-Policy') 'origin-when-cross-origin');' response.headers.set('X-XSS-Protection') '1; mode=block');' response.headers.set('Strict-Transport-Security') 'max-age=31536000; includeSubDomains');' response.headers.set('Content-Security-Policy') ' "default-src 'self' " +' "script-src 'self' 'unsafe-eval' 'unsafe-inline' https: //vercel.live; " +' "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +' "font-src 'self' https://fonts.gstatic.com; " +' "img-src 'self' data: https:; " +' "connect-src 'self' https://api.vercel.com}" )} return response} export const config = { matcher: [' '/((?!api|_next/static|_next/image|favicon.ico).*)' ] }; '
