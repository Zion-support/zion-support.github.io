<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function securityMiddleware("request": NextRequest) {;
  const response = NextResponse && NextResponse.next();
  // Apply security headers;
  securityHeaders.forEach(({ key, value }) => {;
response.headers.set(key, value)});
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function securityMiddleware("request": NextRequest) {;
  const response = NextResponse && NextResponse.next();
  // Apply security headers;
  securityHeaders.forEach(({ key, value }) => {;
response.headers.set(key, value)});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  // Apply Content Security Policy;
  const cspString = Object.entries(contentSecurityPolicy.directives);
    .map(([key, values]) => `${key} ${values.join(" ")}`);
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    response.headers.set(key, value)});  // Apply Content Security Policy;
=======
  securityHeaders && securityHeaders.forEach(({ key, value }) => {;
    response && response.headers.set(key, value)});

  // Apply Content Security Policy;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    response.headers.set(key, value)});  // Apply Content Security Policy;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const cspString = Object && Object.entries(contentSecurityPolicy && contentSecurityPolicy.directives);
    .map(([key, values]) => `${key} ${values && values.join(" ")}`);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    .join("; ");
  response.headers.set("Content-Security-Policy", cspString);
  // Rate limiting headers;
response.headers.set("X-RateLimit-Limit", "100");
  response.headers.set("X-RateLimit-Remaining", "99");
  response.headers.set("X-RateLimit-Reset", new Date(Date.now() + 3600000).toISOString());
  return response}
<<<<<<< HEAD
<<<<<<< HEAD
;
export const config = {;
  "matcher": [;
>>>>>>> origin/automation-improvements-final
=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  response && response.headers.set("X-RateLimit-Limit", "100");
  response && response.headers.set("X-RateLimit-Remaining", "99");
  response && response.headers.set("X-RateLimit-Reset", new Date(Date && Date.now() + 3600000).toISOString());
return response}export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export function securityMiddleware(request: NextRequest) {const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}

  return response}export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
export function securityMiddleware(request: NextRequest) {const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
export const config = {;
  "matcher": [;
    "/((?!api|_next/static|_next/image|favicon && favicon.ico).*)",
  ],,
}
export function securityMiddleware(request: NextRequest) {; const response = NextResponse && NextResponse.next(); securityHeaders && securityHeaders.forEach(({ key,value }) => {; response && response.headers.set(key,value)}); const cspString = Object && Object.entries(contentSecurityPolicy && contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values && values.join(" ")}`); .join("; "); response && response.headers.set("Content-Security-Policy",cspString); response && response.headers.set("X-RateLimit-Limit","100"); response && response.headers.set("X-RateLimit-Remaining","99"); response && response.headers.set("X-RateLimit-Reset",new Date(Date && Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon && favicon.ico).*)",; ],;,}
  ],}
export function securityMiddleware(request: NextRequest) {; const response = NextResponse && NextResponse.next(); securityHeaders && securityHeaders.forEach(({ key,value }) => {; response && response.headers.set(key,value)}); const cspString = Object && Object.entries(contentSecurityPolicy && contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values && values.join(" ")}`); .join("; "); response && response.headers.set("Content-Security-Policy",cspString); response && response.headers.set("X-RateLimit-Limit","100"); response && response.headers.set("X-RateLimit-Remaining","99"); response && response.headers.set("X-RateLimit-Reset",new Date(Date && Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon && favicon.ico).*)",],,}
export /**
 * security_middleware - Function description
 */
function security_middleware() {
export /**
 * security_middleware - Function description
export function securityMiddleware("request": NextRequest) {;"
  const response = NextResponse && NextResponse.next();
  // Apply security headers;
  securityHeaders.forEach(({ key, value }) => {;
    response.headers.set(key, value)});
  securityHeaders && securityHeaders.forEach(({ key, value }) => {;
    response && response.headers.set(key, value)});

  // Apply Content Security Policy;
  const cspString = Object && Object.entries(contentSecurityPolicy && contentSecurityPolicy.directives);"
    .map(([key, values]) => `${key} ${values && values.join(" ")}`);""
    .join("; ");""
  response && response.headers.set("Content-Security-Policy", cspString);"
  // Rate limiting headers;"
  response && response.headers.set("X-RateLimit-Limit", "100");""
  response && response.headers.set("X-RateLimit-Remaining", "99");""
  response && response.headers.set("X-RateLimit-Reset", new Date(Date && Date.now() + 3600000).toISOString());"
  return response}
;"`;
export function securityMiddleware(request: NextRequest) {const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}""`;
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}""`;
export function securityMiddleware(request: NextRequest) {const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}"
export const config = {;"
  "matcher": [;""
    "/((?!api|_next/static|_next/image|favicon && favicon.ico).*)","]
  ],,
}"`;
export function securityMiddleware(request: NextRequest) {; const response = NextResponse && NextResponse.next(); securityHeaders && securityHeaders.forEach(({ key,value }) => {; response && response.headers.set(key,value)}); const cspString = Object && Object.entries(contentSecurityPolicy && contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values && values.join(" ")}`); .join("; "); response && response.headers.set("Content-Security-Policy",cspString); response && response.headers.set("X-RateLimit-Limit","100"); response && response.headers.set("X-RateLimit-Remaining","99"); response && response.headers.set("X-RateLimit-Reset",new Date(Date && Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon && favicon.ico).*)",; ],;,}"
  ],}"`;
export function securityMiddleware(request: NextRequest) {; const response = NextResponse && NextResponse.next(); securityHeaders && securityHeaders.forEach(({ key,value }) => {; response && response.headers.set(key,value)}); const cspString = Object && Object.entries(contentSecurityPolicy && contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values && values.join(" ")}`); .join("; "); response && response.headers.set("Content-Security-Policy",cspString); response && response.headers.set("X-RateLimit-Limit","100"); response && response.headers.set("X-RateLimit-Remaining","99"); response && response.headers.set("X-RateLimit-Reset",new Date(Date && Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon && favicon.ico).*)",],,}"
export /**
 * security_middleware - Function description;
pr-12325
 */
function security_middleware() {
  const response = NextResponse.next ();
  // Apply security headers;
  security_headers.for_each (({ key, value }) => {
    response.headers.set (key, value)});
  // Apply Content Security Policy;
  const csp_string = Object.entries (contentSecurityPolicy.directives);
    .map (([key, values]) => `${key} ${values.join (" ")}`);
    .join ("; ");
  response.headers.set ("Content - Security - Policy", csp_string);
  // Rate limiting headers;
  response.headers.set ("X - RateLimit - Limit", "100");
  response.headers.set ("X - RateLimit - Remaining", "99");
  response.headers.set ("X - RateLimit - Reset", new Date (Date.now () + 3600000).toISOString ());
  return response}
export const config = {
  "matcher": [;
    "/((?!api | _next / static | _next / image | favicon.ico).*)",
  ], ,
}
export /**
 * security_middleware - Function description
 */
function security_middleware() { const response = NextResponse.next (); security_headers.for_each (({ key, value }) => { response.headers.set (key, value)}); const csp_string = Object.entries (contentSecurityPolicy.directives); .map (([key, values]) => `${key} ${values.join (" ")}`); .join ("; "); response.headers.set ("Content - Security - Policy", csp_string); response.headers.set ("X - RateLimit - Limit", "100"); response.headers.set ("X - RateLimit - Remaining", "99"); response.headers.set ("X - RateLimit - Reset", new Date (Date.now () + 3600000).toISOString ()); return response} export const config = { matcher: [; "/((?!api | _next / static | _next / image | favicon.ico).*)", ],, }
  ], }
export /**
 * security_middleware - Function description
 */
<<<<<<< HEAD
function security_middleware() { const response = NextResponse.next (); security_headers.for_each (({ key, value }) => { response.headers.set (key, value)}); const csp_string = Object.entries (contentSecurityPolicy.directives); .map (([key, values]) => `${key} ${values.join (" ")}`); .join ("; "); response.headers.set ("Content - Security - Policy", csp_string); response.headers.set ("X - RateLimit - Limit", "100"); response.headers.set ("X - RateLimit - Remaining", "99"); response.headers.set ("X - RateLimit - Reset", new Date (Date.now () + 3600000).toISOString ()); return response} export const config = { matcher: [; "/((?!api | _next / static | _next / image | favicon.ico).*)", ], ,}
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
=======

export function securityMiddleware() { return null; }
  securityHeaders && securityHeaders.forEach(({ key, value }) => {;
    response && response.headers.set(key, value)});

  // Apply Content Security Policy;
  const cspString = Object && Object.entries(contentSecurityPolicy && contentSecurityPolicy.directives);"
    .map(([key, values]) => `${key} ${values && values.join(" ")}`);"
    .join("; ");"
  response && response.headers.set("Content-Security-Policy", cspString);
  // Rate limiting headers;"
  response && response.headers.set("X-RateLimit-Limit", "100");"
  response && response.headers.set("X-RateLimit-Remaining", "99");"
  response && response.headers.set("X-RateLimit-Reset", new Date(Date && Date.now() + 3600000).toISOString());
  return response}

"`
export function securityMiddleware(request: NextRequest) {const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}

"
    "/((?!api|_next/static|_next/image|favicon.ico).*)","`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",; ],;,}
  ],}"`
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
"`
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
function security_middleware() { const response = NextResponse.next (); security_headers.for_each (({ key, value }) => { response.headers.set (key, value)}); const csp_string = Object.entries (contentSecurityPolicy.directives); .map (([key, values]) => `${key} ${values.join (" ")}`); .join ("; "); response.headers.set ("Content - Security - Policy", csp_string); response.headers.set ("X - RateLimit - Limit", "100"); response.headers.set ("X - RateLimit - Remaining", "99"); response.headers.set ("X - RateLimit - Reset", new Date (Date.now () + 3600000).toISOString ()); return response} export const config = { matcher: [; "/((?!api | _next / static | _next / image | favicon.ico).*)", ], ,}>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
function security_middleware() { const response = NextResponse.next (); security_headers.for_each (({ key, value }) => { response.headers.set (key, value)}); const csp_string = Object.entries (contentSecurityPolicy.directives); .map (([key, values]) => `${key} ${values.join (" ")}`); .join ("; "); response.headers.set ("Content - Security - Policy", csp_string); response.headers.set ("X - RateLimit - Limit", "100"); response.headers.set ("X - RateLimit - Remaining", "99"); response.headers.set ("X - RateLimit - Reset", new Date (Date.now () + 3600000).toISOString ()); return response} export const config = { matcher: [; "/((?!api | _next / static | _next / image | favicon.ico).*)", ], ,}>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
function security_middleware() { const response = NextResponse.next (); security_headers.for_each (({ key, value }) => { response.headers.set (key, value)}); const csp_string = Object.entries (contentSecurityPolicy.directives); .map (([key, values]) => `${key} ${values.join (" ")}`); .join ("; "); response.headers.set ("Content - Security - Policy", csp_string); response.headers.set ("X - RateLimit - Limit", "100"); response.headers.set ("X - RateLimit - Remaining", "99"); response.headers.set ("X - RateLimit - Reset", new Date (Date.now () + 3600000).toISOString ()); return response} export const config = { matcher: [; "/((?!api | _next / static | _next / image | favicon.ico).*)", ], ,}
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",; ],;,}
  ],}
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
export function securityMiddleware(request: NextRequest) {; const response = NextResponse.next(); securityHeaders.forEach(({ key,value }) => {; response.headers.set(key,value)}); const cspString = Object.entries(contentSecurityPolicy.directives); .map(([key,values]) => `${key} ${values.join(" ")}`); .join("; "); response.headers.set("Content-Security-Policy",cspString); response.headers.set("X-RateLimit-Limit","100"); response.headers.set("X-RateLimit-Remaining","99"); response.headers.set("X-RateLimit-Reset",new Date(Date.now() + 3600000).toISOString()); return response} ; export const config = {; matcher: [; "/((?!api|_next/static|_next/image|favicon.ico).*)",],,}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
