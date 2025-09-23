import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  url?: string
}

export default function SEO({ title, description, keywords, canonical, url }: SEOProps) {
  // This component is deprecated in Next.js 13+ app directory
  // Use the metadata API in page.tsx files instead
  console.warn('SEO component is deprecated. Use the metadata API in page.tsx files instead.')
  
  return null
}

// Helper function to generate metadata for pages
export function generateMetadata({ title, description, keywords, canonical, url }: SEOProps): Metadata {
  return {
    title,
    description,
    keywords: keywords ? keywords.split(',').map(k => k.trim()) : undefined,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      type: 'article',
      url},
    twitter: {
      card: 'summary_large_image',
      title,
      description}}
}