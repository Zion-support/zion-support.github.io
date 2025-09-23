import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Minimal middleware: allow all requests. Adjust later if needed.
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
