import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(_request: NextRequest) {
  return NextResponse.next();
ursor/automate-test-improve-and-merge-code-646c


  return response;
    return response;
ursor/automate-test-improve-and-merge-code-646c
}

export const config = {

  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
export const config = {
  matcher: ["/((?!api | _next / static | _next / image | favicon.ico).*)"]
}
;
ursor/automate-test-improve-and-merge-code-646c
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};

ursor/automate-test-improve-and-merge-code-646c
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
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
