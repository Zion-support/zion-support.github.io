import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

<<<<<<< HEAD
export function middleware(_request: NextRequest) {
=======
export function middleware(request: NextRequest) {
<<<<<<< HEAD
  return NextResponse.next();
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  const response = NextResponse.next();
  return response;
<<<<<<< HEAD
=======
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
