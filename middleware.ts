import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

<<<<<<< HEAD
<<<<<<< HEAD
export function middleware(_request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

=======
export function middleware(_req: NextRequest) {
=======
export function middleware(_request: NextRequest) {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-0efa
	return NextResponse.next()
}

export const config = {
<<<<<<< HEAD
	matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2af7
=======
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-0efa
