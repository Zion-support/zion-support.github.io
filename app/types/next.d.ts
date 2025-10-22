import { NextRequest, NextResponse } from 'next/server'

// Next.js specific type definitions
declare module 'next' {
  interface NextRequest {
    nextUrl?: URL
  }
}

// API route types
export interface ApiRouteHandler {
  (req: NextRequest): Promise<NextResponse>
}

// Middleware types
export interface MiddlewareConfig {
  matcher: string[]
}

// Page component types
export interface PageComponent {
  (props: any): JSX.Element
}

// Layout component types
export interface LayoutComponent {
  (props: { children: React.ReactNode }): JSX.Element
}

// Metadata types
export interface Metadata {
  title?: string
  description?: string
  keywords?: string[]
  openGraph?: {
    title?: string
    description?: string
    images?: string[]
  }
}

export {}
