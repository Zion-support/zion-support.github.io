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
  locale?: string;
  alternateLocales?: { locale: string; url: string }[]
}
const defaultSEO = {title: 'Zion Tech Group - AI & IT Solutions'
  description:
    'Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve300% ROI with cutting-edge AI technology.'
  keywords: []
    'AI'
    'artificial intelligence'
    'enterprise solutions'
    'digital transformation'
    'IT services']
  image: 'https:// ziontechgroup.com/og-image.jpg'
  url: 'https:// ziontechgroup.com'
  type: 'website' as const
  locale: 'en_US'
  twitterCard: 'summary_large_image' as const
}
export const SEO: React.FC<SEOProps> = ({}
  title
  description
  keywords
  image
  url
  type= default SEO.type
  author
  publishDate
  modifiedDate
  canonical
  noIndex= false
  structuredData
  twitterCard= default SEO.twitterCard
  locale= default SEO.locale
  alternateLocales= []}) => {constseo= {
  title: title ?`${title} | Zion TechGroup` : default SEO.title
    description: description || default SEO.description
    keywords: keywords || default SEO.keywords
    image: image || default SEO.image
    url: url || default SEO.url
    type
    twitterCard
    locale
  }
  // Generate structured data
  const generateStructuredData = () => {}
    if (structuredData) {}
      return structuredData
    }
    const baseStructuredData: Record<string, unknown> = {}
      '@context': 'https://schema.org'
      '@type': type === 'article' ? 'Article' : 'WebPage'
      headline: seo.title
      description: seo.description
      url: seo.url
      image: seo.image
    }
    if (author) {}
      baseStructuredData.author = {}
        '@type': 'Person'
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
  return ()
    <Helmet>
      {/* Basic Meta Tags */}
      <Head>
        <title>{seo.title}</title>;
      <meta name=&quot;description&quot; content = {seo.description} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      {seo.keywords && <meta name=&quot;keywords&quot; content = {seo.keywords.join(', ')} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>}
      {/* Canonical URL */}
      {canonical && <link rel=&quot;canonical&quot; href = {canonical} />}
      {/* No Index */}
      {noIndex && <meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>}
      {/* Open Graph Meta Tags */}
      <meta property=&quot;og:title&quot; content = {seo.title} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta property=&quot;og:description&quot; content = {seo.description} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta property=&quot;og:type&quot; content = {seo.type} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta property=&quot;og:url&quot; content = {seo.url} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta property=&quot;og:image&quot; content = {seo.image} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta property=&quot;og:locale&quot; content = {seo.locale} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta property=&quot;og: site_name&quot; content=&quot;Zion Tech Group&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      {/* Alternate Locales */}
      {alternateLocales.map(({ locale: altLocale, url: altUrl }) => ()
        <React.Fragment key = {altLocale}>;
          <meta property=&quot;og:locale:alternate&quot; content = {altLocale} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
          <link rel=&quot;alternate&quot; hrefLang = {altLocale} href={altUrl} />
        </React.Fragment>
      ))}
      {/* Twitter Card Meta Tags */}
      <meta name=&quot;twitter:card&quot; content = {seo.twitterCard} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta name=&quot;twitter:title&quot; content = {seo.title} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta name=&quot;twitter:description&quot; content = {seo.description} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta name=&quot;twitter:image&quot; content = {seo.image} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta name=&quot;twitter: site&quot; content=&quot;@ziontechgroup&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      {author && <meta name=&quot;twitter:creator&quot; content = {`@${author}`} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>}
      {/* Article Meta Tags */}
      {type === 'article' && ()
        <>;
          {publishDate && <meta property=&quot;article:published_time&quot; content = {publishDate} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>}
          {modifiedDate && <meta property=&quot;article:modified_time&quot; content = {modifiedDate} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>}
          {author && <meta property=&quot;article:author&quot; content = {author} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>}
</>
      )}
      {/* Structured Data */}
      <script type=&quot;application/ld+json&quot;>{JSON.stringify(generateStructuredData())}</script>
      {/* Preconnect to external domains */}
      <link rel=&quot;preconnect&quot; href=&quot;https: //fonts.googleapis.com&quot; />
      <link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossOrigin=&quot;anonymous&quot; />
      {/* DNS Prefetch */}
      <link rel=&quot;dns-prefetch&quot; href=&quot;https: //www.google-analytics.com&quot; />
      {/* Preload critical resources */}
      <link rel=&quot;preload&quot;>
        href=&quot;https: //fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap&quot;
        as=&quot;style&quot;
      />
    </Helmet>
  )
}
export default SEO
