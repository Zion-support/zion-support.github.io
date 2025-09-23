import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

<<<<<<< HEAD
export function middleware(_request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

=======
export function middleware(_req: NextRequest) {
	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2af7
