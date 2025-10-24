import React  from "react";
import { Helmet }  from "lucide-react";'use client'
/**
 * SEO Component;
 * Provides comprehensive SEO meta tags and structured data;
 */
<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'lucide-react'
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[]
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile'
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  canonical?: string;
  noIndex?: boolean;
  structuredData?: Record<string , unknown>
        </string>
        </string>
        </string>
</string, unknown>
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  locale?: string;
  alternateLocales?: { locale: string; url: string }[]
}
const defaultSEO= {
  title: 'Zion Tech Group - AI & IT Solutions'
  description: 'Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve300% ROI with cutting-edge AI technology.'
  keywords: [
    'AI'
    'artificial intelligence'
    'enterprise solutions'
    'digital transformation'
    'IT services'
  ]
  image: 'https:// ziontechgroup.com/og-image.jpg'
  url: 'https:// ziontechgroup.com'
  type: 'website' as const
  locale: 'en_US'
  twitterCard: 'summary_large_image' as const;
}
export const SEO: React.FC<SEOProps> = ({
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
    locale;
  }
  // Generate structured data;
  const generateStructuredData = () => {
  
  if (structuredData) {
      return structuredData;
}
    const baseStructuredData: Record<string, unknown> = {
  '@context': 'https://schema.org'
      '@type': type === 'article' ? 'Article' : 'WebPage'
      headline: seo.title
      description: seo.description
      url: seo.url
      image: seo.image;
}
    if (author) {
  baseStructuredData.author = {
        '@type': 'Person'
        name: author;
}
    }
    if (publishDate) {
  baseStructuredData.datePublished = publishDate;
}
    if (modifiedDate) {
  baseStructuredData.dateModified = modifiedDate;
}
    return baseStructuredData;
  }
  return(<Helmet >
        </Helmet>
        </Helmet>
        </Helmet>
    </Helmet>
      {
  /* Basic Meta Tags */
}
      <title>{seo.title}</title>
<<<<<<< HEAD
      <meta name=&quot;description&quot; content={seo.description} />
      {seo.keywords && <meta name=&quot;keywords&quot; content={seo.keywords.join(', ')} />}
      {/* Canonical URL */}
      {canonical && <link rel=&quot;canonical&quot; href={canonical} />}
      {/* No Index */}
      {noIndex && <meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot; />}
      {/* Open Graph Meta Tags */}
      <meta property=&quot;og:title&quot; content={seo.title} />
      <meta property=&quot;og:description&quot; content={seo.description} />
      <meta property=&quot;og:type&quot; content={seo.type} />
      <meta property=&quot;og:url&quot; content={seo.url} />
      <meta property=&quot;og:image&quot; content={seo.image} />
      <meta property=&quot;og:locale&quot; content={seo.locale} />
      <meta property=&quot;og:site_name&quot; content=&quot;Zion Tech Group&quot; />
      {/* Alternate Locales */}
      {alternateLocales.map(({ locale: altLocale, url: altUrl }) => (
        <React.Fragment key={altLocale}>
          <meta property=&quot;og:locale:alternate&quot; content={altLocale} />
          <link rel=&quot;alternate&quot; hrefLang={altLocale} href={altUrl} />
=======
<//title>
      <meta name="description" content={seo.description} />
        </meta>
        </meta>
        </meta>
      </meta name="description" content={seo.description} />)
      {seo.keywords && <meta name="keywords" content={seo.keywords.join(', ')} />}
      {
  /* Canonical URL */
}
      {canonical && <link rel="canonical" href={canonical} />}
      {
  /* No Index */
}
      {
  noIndex && <meta name="robots" content="noindex, nofollow" />
        </meta>
        </meta>
        </meta>
}
      {
  /* Open Graph Meta Tags */
}
      <meta property="og:title" content={seo.title} />
        </meta>
        </meta>
        </meta>
      </meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
        </meta>
        </meta>
        </meta>
      </meta property="og:description" content={seo.description} />
      <meta property="og:type" content={seo.type} />
        </meta>
        </meta>
        </meta>
      </meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
        </meta>
        </meta>
        </meta>
      </meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
        </meta>
        </meta>
        </meta>
      </meta property="og:image" content={seo.image} />
      <meta property="og:locale" content={seo.locale} />
        </meta>
        </meta>
        </meta>
      </meta property="og:locale" content={seo.locale} />
      <meta property="og:site_name" content="Zion Tech Group" />
        </meta>
        </meta>
        </meta>
      </meta property="og:site_name" content="Zion Tech Group" />
      {
  /* Alternate Locales */
}
      {alternateLocales.map(({ locale: altLocale, url: altUrl }) => (
        <React .Fragment key={altLocale}>
        </React>
        </React>
        </React>
        </React.Fragment key={altLocale}>
          <meta property="og:locale:alternate" content={altLocale} />
        </meta>
        </meta>
        </meta>
          </meta property="og:locale:alternate" content={altLocale} />
          <link rel="alternate" hrefLang={altLocale} href={altUrl} />
        </link>
        </link>
        </link>
          </link rel="alternate" hrefLang={altLocale} href={altUrl} />
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
        </React.Fragment>

        <//React.Fragment>
      ))}
<<<<<<< HEAD
      {/* Twitter Card Meta Tags */}
      <meta name=&quot;twitter:card&quot; content={seo.twitterCard} />
      <meta name=&quot;twitter:title&quot; content={seo.title} />
      <meta name=&quot;twitter:description&quot; content={seo.description} />
      <meta name=&quot;twitter:image&quot; content={seo.image} />
      <meta name=&quot;twitter:site&quot; content=&quot;@ziontechgroup&quot; />
      {author && <meta name=&quot;twitter:creator&quot; content={`@${author}`} />}
      {/* Article Meta Tags */}
      {type === 'article' && (
        <>
          {publishDate && <meta property=&quot;article:published_time&quot; content={publishDate} />}
          {modifiedDate && <meta property=&quot;article:modified_time&quot; content={modifiedDate} />}
          {author && <meta property=&quot;article:author&quot; content={author} />}
=======
      {
  /* Twitter Card Meta Tags */
}
      <meta name="twitter:card" content={seo.twitterCard} />
        </meta>
        </meta>
        </meta>
      </meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={seo.title} />
        </meta>
        </meta>
        </meta>
      </meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
        </meta>
        </meta>
        </meta>
      </meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
        </meta>
        </meta>
        </meta>
      </meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content="@ziontechgroup" />
        </meta>
        </meta>
        </meta>
      </meta name="twitter:site" content="@ziontechgroup" />
      {author && <meta name="twitter:creator" content={`@${author}`} />}
      {
  /* Article Meta Tags */
}
      {type === 'article' && (
        <>
         
      </>
          {publishDate && <meta property="article:published_time" content={publishDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          {author && <meta property="article:author" content={author} />}
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
        </>

        <//>
      )}
<<<<<<< HEAD
      {/* Structured Data */}
      <script type=&quot;application/ld+json&quot;>{JSON.stringify(generateStructuredData())}</script>
      {/* Preconnect to external domains */}
      <link rel=&quot;preconnect&quot; href=&quot;https://fonts.googleapis.com&quot; />
      <link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossOrigin=&quot;anonymous&quot; />
      {/* DNS Prefetch */}
      <link rel=&quot;dns-prefetch&quot; href=&quot;https://www.google-analytics.com&quot; />
      {/* Preload critical resources */}
      <link
        rel=&quot;preload&quot;
        href=&quot;https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap&quot;
        as=&quot;style&quot;
=======
      {
  /* Structured Data */
}
      <script type="application/ld+json">{JSON.stringify(generateStructuredData())}</script>
<//script>
      {
  /* Preconnect to external domains */
}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        </link>
        </link>
        </link>
      </link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </link>
        </link>
        </link>
      </link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {
  /* DNS Prefetch */
}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        </link>
        </link>
        </link>
      </link rel="dns-prefetch" href="https://www.google-analytics.com" />
      {
  /* Preload critical resources */
}
      <link ;
        rel="preload"
        href="https: //fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        as="style"
      />
        </link>
        </link>
        </link>
      </link;
        rel="preload"
        href="https: //fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        as="style"
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
      />
    </Helmet>

    <//Helmet>
  )
}
export default SEO;
