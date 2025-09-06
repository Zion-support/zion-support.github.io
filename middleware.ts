<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
=======
<<<<<<< HEAD
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // CSP header
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
  );
  
  return response;

>>>>>>> origin/automation-improvements-final

=======
return response;
}

  matcher: ["/((?!api|_next/static|_next/image|favicon && favicon.ico).*)"],
};

=======
=======
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
>>>>>>> main
}

return response;
}
export const config = {
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const config = {
  matcher: ["/((?!api | _next / static | _next / image | favicon.ico).*)"],
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
