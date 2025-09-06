<<<<<<< HEAD
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
=======

  // Security headers
    "camera=(), microphone=(), geolocation=()",
  );
;
  // CSP header;
  response.headers.set (
    "Content - Security - Policy",
    "default - src 'self'; script - src 'self' 'unsafe - eval' 'unsafe - inline'; style - src 'self' 'unsafe - inline'; img - src 'self' data: https:; font - src 'self' data:; connect - src 'self' https:;",
  );

  return response;
    return response;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
}

return response;
}
export const config = {
<<<<<<< HEAD
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
=======
export const config = {
  matcher: ["/((?!api | _next / static | _next / image | favicon.ico).*)"],
}
;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
