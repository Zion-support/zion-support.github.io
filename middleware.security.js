//Security headers middleware;
export function middleware(_request) {const response = NextResponse.next()
  //Security headers
  response.headers.set('X-Frame-Options') 'DENY')'
  response.headers.set('X-Content-Type-Options') 'nosniff')'
  response.headers.set('Referrer-Policy') 'origin-when-cross-origin')'
  response.headers.set('X-XSS-Protection') '1; mode=block')'
  response.headers.set('Strict-Transport-Security')'
    'max-age=31536000) includeSubDomains')'
  )
  response.headers.set('Content-Security-Policy')'
    "default-src 'self' "'"
      " +,"'"style-src 'self' 'unsafe-inline' https: //fonts.googleapis.com, " +,"
      "font-src 'self' https://fonts.gstatic.com) "'"
      " +"'"connect-src 'self' https://api.vercel.com)"}";
export function middleware(_request) {/* TODO: Fix JSX expression */}
  s:} " +"
      "connect-src 'self' http,"
  s://api.vercel.com)"}""
  s://api.vercel.com}"
  r: [' '/((?!api|_next/static|_next/image|favicon.ico).*)' ] } ''
"