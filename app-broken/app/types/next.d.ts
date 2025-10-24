// Type definitions for Next.js compatibility
export interface Metadata {
  title?: string
  description?: string
  keywords?: string[]
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
    languages?: Record<string, string>
  }
  openGraph?: {
    title?: string
    description?: string
    url?: string
    siteName?: string
    images?: Array<{
      url: string,
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
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
    site?: string
    creator?: string
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
      'max-video-preview'?: number
      'max-image-preview'?: 'none' | 'standard' | 'large'
      'max-snippet'?: number
    }
  }
  verification?: {
    google?: string
    yandex?: string
    yahoo?: string
    other?: Record<string, string>
  }
}

export interface MetadataRoute {
  url: string,
  lastModified?: string | Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export interface NextPageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export interface ApiRouteHandler {
  (req: Request): Promise<Response>
}

export interface RouteHandler {
  GET?: (req: Request) => Promise<Response>
  POST?: (req: Request) => Promise<Response>
  PUT?: (req: Request) => Promise<Response>
  DELETE?: (req: Request) => Promise<Response>
  PATCH?: (req: Request) => Promise<Response>
}

declare module 'next' {
  interface NextApiRequest {
    user?: {
      id: string
      email: string
      name?: string
    }
  }
}

export {}