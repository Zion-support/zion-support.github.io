// Type definitions for Next.js compatibility in Vite
export interface Metadata {
  title?: string
  description?: string
  keywords?: string
  authors?: Array<{ name: string; url?: string }> | string[]
  creator?: string
  publisher?: string
  formatDetection?: {
    email?: boolean
    address?: boolean
    telephone?: boolean
  }
  metadataBase?: URL
  alternates?: {
    canonical?: string
    languages?: { [key: string]: string }
  }
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
    authors?: Array<{ name: string; url?: string }> | string[]
    publishedTime?: string
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image'
    title?: string
    description?: string
    images?: string[]
  }
  robots?: {
    index?: boolean
    follow?: boolean
    googleBot?: {
      index?: boolean
      follow?: boolean
    }
  }
  verification?: {
    google?: string
    yandex?: string
    yahoo?: string
  }
}

export interface MetadataRoute {
  url: string
  lastModified?: string
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export interface MetadataRouteSitemap extends MetadataRoute {
  alternates?: {
    languages?: { [key: string]: string }
  }
}

// Custom Next.js types
export interface NextPageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Route handlers
export interface RouteHandler {
  GET?: (request: Request) => Response | Promise<Response>
  POST?: (request: Request) => Response | Promise<Response>
  PUT?: (request: Request) => Response | Promise<Response>
  DELETE?: (request: Request) => Response | Promise<Response>
}

// Dynamic route types
export interface DynamicRoute {
  params: { [key: string]: string }
}

// Static generation types
export interface StaticProps {
  props: { [key: string]: unknown }
}

// ISR types
export interface ISRConfig {
  revalidate?: number | false
}

// Edge runtime types
export interface EdgeRuntime {
  runtime: 'edge'
}

// Node.js runtime types
export interface NodeRuntime {
  runtime: 'nodejs'
}

// Extend Next.js types
declare module 'next' {
  interface NextPageProps {
    params: { [key: string]: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
}