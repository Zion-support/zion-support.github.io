import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname === '/dashboard' || pathname === '/dashboard/') {
    const role = request.cookies.get('userRole')?.value || 'talent'
    const target = role === 'client' ? '/dashboard/client' : '/dashboard/talent'
    return NextResponse.redirect(new URL(target, request.url))
  }
  return NextResponse.next()
}

export const config = {
<<<<<<< HEAD
  matcher: ['/dashboard/dashboard/']},
=======
  matcher: ['/dashboard/dashboard/']},;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
