// import { MetadataRoute } from 'next'

// Extend Next.js types
declare module 'next' {
  interface NextConfig {
    experimental?: {
      appDir?: boolean
      serverComponentsExternalPackages?: string[]
    }
    images?: {
      domains?: string[]
      remotePatterns?: Array<{
        protocol: 'http' | 'https'
        hostname: string
        port?: string
        pathname?: string
      }>
    }
  }
}

// Extend Next.js metadata types
declare module 'next/metadata' {
  interface Metadata {
    title?: string
    description?: string
    keywords?: string[]
    authors?: Array<{ name: string; url?: string }>
    creator?: string
    publisher?: string
    robots?: string
    openGraph?: {
      title?: string
      description?: string
      url?: string
      siteName?: string
      images?: Array<{
        url: string
        width?: number
        height?: number
        alt?: string
      }>
      locale?: string
      type?: string
    }
    twitter?: {
      card?: 'summary' | 'summary_large_image' | 'app' | 'player'
      title?: string
      description?: string
      images?: string[]
      creator?: string
      site?: string
    }
    verification?: {
      google?: string
      yandex?: string
      yahoo?: string
      other?: Record<string, string>
    }
  }
}

// Custom page props
export interface CustomPageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// API route types
export interface ApiRouteHandler {
  GET?: (request: Request) => Promise<Response>
  POST?: (request: Request) => Promise<Response>
  PUT?: (request: Request) => Promise<Response>
  DELETE?: (request: Request) => Promise<Response>
  PATCH?: (request: Request) => Promise<Response>
}

// Middleware types
export interface MiddlewareRequest extends Request {
  nextUrl: URL
  geo?: {
    country?: string
    region?: string
    city?: string
    latitude?: string
    longitude?: string
  }
  ip?: string
  ua?: string
}

export interface MiddlewareResponse extends Response {
  cookies: {
    get: (name: string) => { name: string; value: string } | undefined
    set: (name: string, value: string, options?: any) => void
    delete: (name: string) => void
  }
}