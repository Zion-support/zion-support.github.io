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
  matcher: ['/dashboard/dashboard/']},
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
