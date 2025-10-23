'use client'
/**
 * SEO Component
 * Provides comprehensive SEO meta tags and structured data
 */
<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'lucide-react'
=======
import React from 'react';
import { Helmet } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-280f

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product' | 'profile'
  author?: string
  publishDate?: string
  modifiedDate?: string
  canonical?: string
  noIndex?: boolean
  structuredData?: Record<string, unknown>
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  locale?: string
  alternateLocales?: { locale: string; url: string }[]
}
const defaultSEO= {title: 'Zion Tech Group - AI & IT Solutions',
  description:
    'Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve300% ROI with cutting-edge AI technology.',
  keywords: [
    'AI',
    'artificial intelligence',
    'enterprise solutions',
    'digital transformation',
    'IT services',
  ],
  image: 'https:// ziontechgroup.com/og-image.jpg',
  url: 'https:// ziontechgroup.com',
  type: 'website' as const,
  locale: 'en_US',
  twitterCard: 'summary_large_image' as const
}
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type= default SEO.type,
  author,
  publishDate,
  modifiedDate,
  canonical,
  noIndex= false,
  structuredData,
  twitterCard= default SEO.twitterCard,
  locale= default SEO.locale,
  alternateLocales= []}) => {constseo= {
    title: title ?`${title} | Zion TechGroup` : default SEO.title,
    description: description || default SEO.description,
    keywords: keywords || default SEO.keywords,
    image: image || default SEO.image,
    url: url || default SEO.url,
    type,
    twitterCard,
    locale
  }
  // Generate structured data
  const generateStructuredData = () => {
    if (structuredData) {
      return structuredData
    }
    const baseStructuredData: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      headline: seo.title,
      description: seo.description,
      url: seo.url,
      image: seo.image
    }
    if (author) {
      baseStructuredData.author = {
        '@type': 'Person',
        name: author
      }
    }
    if (publishDate) {
      baseStructuredData.datePublished = publishDate
    }
    if (modifiedDate) {
      baseStructuredData.dateModified = modifiedDate
    }
    return baseStructuredData
  }
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title><meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords.join(', ')} />}
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      {/* No Index */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content={seo.locale} />
      <meta property="og:site_name" content="Zion Tech Group" />
      {/* Alternate Locales */}
      {alternateLocales.map(({ locale: altLocale, url: altUrl }) => (
        <React.Fragment key={altLocale}>
          <meta property="og:locale:alternate" content={altLocale} />
          <link rel="alternate" hrefLang={altLocale} href={altUrl} />
        </React.Fragment><meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      {author && <meta name="twitter:creator" content={`@${author}`} />}
      {/* Article Meta Tags */}
      {type === 'article' && (
        <>
          {publishDate && <meta property="article:published_time" content={publishDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          {author && <meta property="article:author" content={author} />}
        </>
      )}
      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(generateStructuredData())}</script><link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      {/* Preload critical resources */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        as="style"
      />
    </Helmet>
  )
}
export default SEO
