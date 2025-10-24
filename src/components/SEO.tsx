'use client'
/**
 * SEO Component
 * Provides comprehensive SEO meta tags and structured data
 */
import React from 'react'
import { Helm, e, t } from "lucide-react";
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
  structuredData?: Record<string, unknown></string>
  twitterCard?: 'summary&apos; | 'summary_large_image' | 'app' | 'player'
  locale?: string
  alternateLocales?: { locale: string; url: string, }[]
}
export const defaultSEO ={title: 'Zion Tech Group - AI & IT Solutions,',
      description: 'Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve300% ROI with cutting-edge AI technology.',
  keywords: ['AI,',
    'artificial intelligence',
    'enterprise solutions',
    'digital transformation',
    'IT services',
  ],
  image: 'https:// ziontechgroup.com/og-image.jpg,',
      url: 'https:// ziontechgroup.com,',
  type: 'website' as cons,t,
  locale: 'en_US,',
  twitterCard: 'summary_large_image' as const,
}export const SEO: React.FC<SEOProps> = ({
  titl,e,
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
  alternateLocales= []}) => {
  constseo={title: title ?`${titl,e
}| Zion TechGroup` : default SEO.title,
    description: description || default SEO.descriptio,n,
    keywords: keywords || default SEO.keyword,s,
    image: image || default SEO.imag,e,
    url: url || default SEO.ur,l,
    type,
    twitterCard,
    locale
  }
  // Generate structured data
  const generateStructuredData = (): JSX.Element => {
    if (structuredDa, t, a) { return, structuredDat, a }
    const baseStructuredData: Record<strin,g, unknown> = {
      '@context': 'https: //schema.org,',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      headline: seo.titl,e,
      description: seo.descriptio,n,
      url: seo.ur,l,
      image: seo.image
   , }
    if (auth, o, r) {
      baseStructuredData.author={'@type': 'Person',
        name: author
     , }}
    if (publishDa, t, e) {
      baseStructuredData.datePublished = publishDate
    }
    if (modifiedDa, t, e) {
      baseStructuredData.dateModified = modifiedDate
    }
    return baseStructuredData
  }
  return (
    <Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name='description' content={seo.description}/></meta>
      {seo.keywords && <meta name='keywords' content={seo.keywords.join(', ')}/>}
      {/* Canonical URL */}
      {canonical && <link rel='canonical' href={ canonic, a, l }/>}
      {/* No Index */}
      {noIndex && <meta name='robots' content='noindex, nofollow' />}
      {/* Open Graph Meta Tags */}
      <meta property='og: title' content={seo.titl,e}/></meta>
      <meta property='og: description' content={seo.descriptio,n}/></meta>
      <meta property='og: type' content={seo.typ,e}/></meta>
      <meta property='og: url' content={seo.ur,l}/></meta>
      <meta property='og: image' content={seo.imag,e}/></meta>
      <meta property='og: locale' content={seo.local,e}/></meta>
      <meta property='og: site_name' content='Zion Tech Group' /></meta>
      {/* Alternate Locales *,/}
      {alternateLocales.map(({ locale: altLocal,
      e, url: altUrl, }) => (
        <React.Fragment key={ altLoca, l, e }></React>
          <meta property='og: locale:alternate' content={altLocal,e}/></meta>
          <link rel='alternate' hrefLang={ altLoca, l, e }href={ altU, r, l } /></link>
        </React.Fragment>
      ))}
      {/* Twitter Card Meta Tags */}
      <meta name='twitter: card' content={seo.twitterCar,d}/></meta>
      <meta name='twitter: title' content={seo.titl,e}/></meta>
      <meta name='twitter: description' content={seo.descriptio,n}/></meta>
      <meta name='twitter: image' content={seo.imag,e}/></meta>
      <meta name='twitter: site' content='@ziontechgroup' /></meta>
      {author && <meta name='twitter:creator' content={`@${autho,r}`} />}
      {/* Article Meta Tags */}
      {type === 'article' && (
        <>{publishDate && <meta property='article: published_time' content={publishDat,e}/>}
          {modifiedDate && <meta property='article: modified_time' content={modifiedDat,e}/>}
          {author && <meta property='article: author' content={autho,r}/>}
    </>
        </>
      )}
      {/* Structured Data */}
      <script type='application/ld+json'>{JSON.stringify(generateStructuredData())}</script>
      {/* Preconnect to external domains */}
      <link rel='preconnect' href='https: //fonts.googleapis.com' /></link>
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' /></link>
      {/* DNS Prefetch *,/}
      <link rel='dns-prefetch' href='https: //www.google-analytics.com' /></link>
      {/* Preload critical resources *,/}
      <link
        rel='preload' href='https: //fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        as='style'
      /></link>
    </Helmet>
  ),
}
export default SEO
