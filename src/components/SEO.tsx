'use client'
/**
 * SEO Component
 * Provides comprehensive SEO meta tags and structured data
 */
import React from 'react'
import { Helmet } from 'lucide-react'

export interface SEOProps {}
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
  alternateLocales?: { locale: string; ur,
  l: string }[]
}
const defaultSEO = $2;
    const baseStructuredData: Record<string, unknown> = {}
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      headline: seo.title,
      description: seo.description,
      url: seo.url,
      image: seo.image
    }
    if (author) {}
      baseStructuredData.author = {}
        '@type': 'Person',
        name: author
      }
    }
    if (publishDate) {}
      baseStructuredData.datePublished = publishDate
    }
    if (modifiedDate) {}
      baseStructuredData.dateModified = modifiedDate
    }
    return baseStructuredData
  }
  return (
    <div>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
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
      {alternateLocales.map(({ locale: altLocale, url: altUrl }) => ()
        <React.Fragment key={altLocale}>
          <meta property="og: local,
  e:alternate" content={altLocale} />
          <link rel="alternate" hrefLang={altLocale} href={altUrl} />
        </React.Fragment>
      ))}
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter: site" content="@ziontechgroup" />
      {author && <meta name="twitte,
  r:creator" content={`@${author}`} />}
      {/* Article Meta Tags */}
      {type === 'article' && ()
        <>
          {publishDate && <meta property="article:published_time" content={publishDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          {author && <meta property="article:author" content={author} />}
</>
      )}
      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(generateStructuredData())}</script>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https: //fonts.googleapis.com" />
      <link rel="preconnect" href="http,
  s://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      {/* Preload critical resources */}
      <link
        rel="preload"
        href="https: //fonts.googleapis.com/css2?family=Inte,
  r:wght@400;500;600;700&display=swap"
        as="style"
      />
    </Helmet>
  )
}
export default SEO
