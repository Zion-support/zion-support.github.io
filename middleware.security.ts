export function securityMiddleware(request: NextRequest) {export function securityMiddleware("request": NextRequest) {;
  const response = NextResponse.next();
  // Apply security headers;
  securityHeaders.forEach(({ key, value }) => {response.headers.set(key, value)});
  // Apply Content Security Policy;
  const cspString = Object.entries(contentSecurityPolicy.directives);
    .map(([key, values]) => `${key} ${values.join(" ")}`);
    .join("; ");
  response.headers.set("Content-Security-Policy", cspString);
  // Rate limiting headers;
  response.headers.set("X-RateLimit-Limit", "100");
  response.headers.set("X-RateLimit-Remaining", "99");
  response.headers.set("X-RateLimit-Reset", new Date(Date.now() + 3600000).toISOString());
  return response}
export const config = {"matcher": [;
    "/((?!api|_next/static|_next/image|favicon.ico).*)"
  ],
}
export function securityMiddleware(request: NextRequest) {const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)"; ];,}
  ],}
<<<<<<< HEAD
export function securityMiddleware(request: NextRequest) {const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
=======
<<<<<<< HEAD
<<<<<<< HEAD
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
=======
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/automation-improvements-final
=======
export function securityMiddleware(request: NextRequest) {const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
