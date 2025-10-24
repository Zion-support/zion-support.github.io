
//Type definitions for Next.js compatibility()
export interface Metadata {

title?: string()
description?: string()
keywords?: string[]
}
}
  authors?: Array<{ "name": string; url?: string }> | string[]
creator?: string()
publisher?: string()
formatDetection?: {
email?: boolean()
address?: boolean()
telephone?: boolean()
}
url?: string();
siteName?: string()</>;"
images?: Array<{"
      "url": string,;
width?: number();
height?: number();
alt?: string();
}>;
locale?: string();"
type?: string()"
authors?: Array<{ "name": string; url?: string }> | string[];
publishedTime?: string();"
  }"
  twitter?: {;"
card?: 'summary' | 'summary_large_image' | 'app' | 'player''
      'max-video-preview''
      'max-image-preview'?: 'none' | 'standard' | 'large''
      'max-snippet''
changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'';'"
changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never''";'"
  "runtime": 'edge'',";'"
  "runtime": 'nodejs'',;'"
declare module 'next''";'"
  metadataBase?: URL()
alternates?: {
canonical?: string()
languages?: Record<string, string>
}
  openGraph?: {
title?: string()
description?: string()
url?: string()
siteName?: string()</string>
images?: Array<{
      "url": string
width?: number()
height?: number()
alt?: string()
}>
locale?: string()
type?: string()
authors?: Array<{ "name": string; url?: string }> | string[]
publishedTime?: string()
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
<<<<<<< HEAD:app-backup/types/next.d.ts
  url: string
  lastModified?: string | Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export interface MetadataRouteSitemap extends MetadataRoute {
  url: string
  lastModified?: string | Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

// Custom Next.js types
export interface NextPageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// API route types
export interface ApiRouteHandler {
  (req: Request): Promise<Response>
}

// Server components types
export interface ServerComponentProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Client components types
export interface ClientComponentProps {
  children?: React.ReactNode
  className?: string
}

// Route handlers
export interface RouteHandler {
  GET?: (req: Request) => Promise<Response>
  POST?: (req: Request) => Promise<Response>
  PUT?: (req: Request) => Promise<Response>
  DELETE?: (req: Request) => Promise<Response>
  PATCH?: (req: Request) => Promise<Response>
}

// Dynamic route types
export interface DynamicRoute {
  params: { [key: string]: string }
}

// Static generation types
export interface StaticProps {
  props: { [key: string]: any }
  revalidate?: number
  notFound?: boolean
}

// ISR types
export interface ISRConfig {
  revalidate: number
  tags?: string[]
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
  interface NextApiRequest {
    user?: {
      id: string
      email: string
      name?: string
    }
  }
}

export {}
=======
card?: "summary" | "summary_large_image" | "app" | "player""
      "max-video-preview""
      "max-image-preview"?: "none" | "standard" | "large""
      "max-snippet""
changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never""
changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never""
  "runtime": "edge""
  "runtime": "nodejs""
declare module "next"'
>>>>>>> d05312d5d680673ba2e628470e93a08bc6917172
