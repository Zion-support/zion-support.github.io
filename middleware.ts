import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_ROUTES: string[] = [
  '/', '/about', '/services', '/contact', '/ai-services', '/it-services', '/micro-saas',
  '/api', '/api-docs', '/careers', '/guides', '/case-studies', '/cookies', '/industries',
  '/blog', '/solutions', '/resources', '/talent', '/team', '/partners', '/news',
  '/privacy', '/terms', '/sitemap', '/login', '/register', '/auth/login', '/auth/register',
  '/auth/forgot-password', '/auth/reset-password', '/auth/verify'
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    PUBLIC_ROUTES.includes(pathname) ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/static/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
