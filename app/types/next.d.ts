// Type definitions for Next.js compatibility in Vite;
// Focus management utility;
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus()
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
// Skip to main content functionality;
const skipToMain = () => {
  const main = document.querySelector('main')
  if (main) {
    focusElement(main)
  }
}
export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string[]
  authors?: Array<{ name: string, url?: string }> | string[]
  creator?: string;
  publisher?: string;
  formatDetection?: {
    email?: boolean;
    address?: boolean;
    telephone?: boolean;
  }
  metadataBase?: URL;
  alternates?: {
    canonical?: string;
  }
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: Array<{
      url: string,
      width?: number;
      height?: number;
      alt?: string;
    }>
    locale?: string;
    type?: string;
    authors?: Array<{ name: string, url?: string }> | string[]
    publishedTime?: string;
  }
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[]
    site?: string;
    creator?: string;
  }
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
      'max-video-preview'?: number;
      'max-image-preview'?: string;
      'max-snippet'?: number;
    }
  }
  verification?: {
    google?: string;
  }
}
export interface MetadataRoute {
  sitemap?: string;
  robots?: string;
  manifest?: string;
}
export type MetadataRouteType = 'sitemap' | 'robots' | 'manifest',
export interface MetadataRouteSitemap {
  url: string,
  lastModified?: Date | string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
  priority?: number;
}