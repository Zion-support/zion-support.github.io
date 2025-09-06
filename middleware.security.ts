<<<<<<< HEAD
export function securityMiddleware(request: NextRequest) {export function securityMiddleware("request": NextRequest) {;
  const response = NextResponse.next();
  // Apply security headers;
  securityHeaders.forEach(({ key, value }) => {response.headers.set(key, value)});
=======
export function securityMiddleware(request: NextRequest) {;
export function securityMiddleware("request": NextRequest) {;
  const response = NextResponse && NextResponse.next();
  // Apply security headers;
  securityHeaders && securityHeaders.forEach(({ key, value }) => {;
    response && response.headers.set(key, value)});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
export const config = {"matcher": [;
    "/((?!api|_next/static|_next/image|favicon.ico).*)"
  ],
}
export function securityMiddleware(request: NextRequest) {const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)"; ];,}
  ],}
<<<<<<< HEAD
<<<<<<< HEAD
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
=======
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/automation-improvements-final
=======
export function securityMiddleware(request: NextRequest) {const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======

export const config = {;
  "matcher": [;
    "/((?!api|_next/static|_next/image|favicon && favicon.ico).*)",
  ],,
}
export function securityMiddleware(request: NextRequest) {; const response = NextResponse && NextResponse.next(); securityHeaders && securityHeaders.forEach(({ key,value }) => {; response && response.headers.set(key,value)}); const cspString = Object && Object.entries(contentSecurityPolicy && contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values && values.join(" ")}`); .join("; "); response && response.headers.set("Content-Security-Policy",cspString); response && response.headers.set("X-RateLimit-Limit","100"); response && response.headers.set("X-RateLimit-Remaining","99"); response && response.headers.set("X-RateLimit-Reset",new Date(Date && Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon && favicon.ico).*)",; ],;,}
  ],}
export function securityMiddleware(request: NextRequest) {; const response = NextResponse && NextResponse.next(); securityHeaders && securityHeaders.forEach(({ key,value }) => {; response && response.headers.set(key,value)}); const cspString = Object && Object.entries(contentSecurityPolicy && contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values && values.join(" ")}`); .join("; "); response && response.headers.set("Content-Security-Policy",cspString); response && response.headers.set("X-RateLimit-Limit","100"); response && response.headers.set("X-RateLimit-Remaining","99"); response && response.headers.set("X-RateLimit-Reset",new Date(Date && Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon && favicon.ico).*)",],,}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
