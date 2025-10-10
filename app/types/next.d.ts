// Type definitions for Next.js compatibility in Vite

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
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
    title?: string
    description?: string
    images?: string[]
    creator?: string
    site?: string
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
  category?: string
  classification?: string
  referrer?: 'no-referrer' | 'origin' | 'no-referrer-when-downgrade' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
  colorScheme?: 'normal' | 'light' | 'dark' | 'light dark'
  themeColor?: string | Array<{ media: string; color: string }>
  viewport?: {
    width?: number | 'device-width'
    initialScale?: number
    maximumScale?: number
    userScalable?: boolean
    viewportFit?: 'auto' | 'contain' | 'cover'
  }
  icons?: {
    icon?: string | Array<{ url: string; sizes?: string; type?: string }>
    shortcut?: string | Array<{ url: string; sizes?: string }>
    apple?: string | Array<{ url: string; sizes?: string }>
    other?: Array<{ rel: string; url: string }>
  }
  manifest?: string
  other?: Record<string, string | number | boolean | null | undefined>
}

export interface Viewport {
  width?: number | 'device-width'
  initialScale?: number
  maximumScale?: number
  userScalable?: boolean
  viewportFit?: 'auto' | 'contain' | 'cover'
}

// Re-export common types
export type { Metadata as MetadataExport }
export type { Viewport as ViewportExport }