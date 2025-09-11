>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export function securityMiddleware(request: NextRequest) {;
export function securityMiddleware("request": NextRequest) {;
  const response = NextResponse && NextResponse.next();
  // Apply security headers;
  securityHeaders && securityHeaders.forEach(({ key, value }) => {;
    response && response.headers.set(key, value)});
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  // Apply Content Security Policy;
  const cspString = Object && Object.entries(contentSecurityPolicy && contentSecurityPolicy.directives);
    .map(([key, values]) => `${key} ${values && values.join(" ")}`);
    .join("; ");
  response && response.headers.set("Content-Security-Policy", cspString);
  // Rate limiting headers;
  response && response.headers.set("X-RateLimit-Limit", "100");
  response && response.headers.set("X-RateLimit-Remaining", "99");
  response && response.headers.set("X-RateLimit-Reset", new Date(Date && Date.now() + 3600000).toISOString());
  return response}
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}



export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}

=======

>>>>>>> origin/automation-improvements-final
=======
export function securityMiddleware(request: NextRequest) {const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
