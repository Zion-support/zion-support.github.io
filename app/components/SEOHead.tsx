import React from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOHeadProps {
  title: string
  description: string
import React from 'react'
import {Helmet} from 'react-helmet-async'
interface SEOHeadProps {title?: string;}
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object
  noIndex?: boolean
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  locale?: string
  alternateLanguages?: Array<{ href: string; hreflang: string }>
  breadcrumbs?: Array<{ name: string; url: string }>
  faqData?: Array<{ question: string; answer: string }>
  articleData?: {
    author: string
    publishedTime: string
    modifiedTime: string
    section: string
    tags: string[]
  }
}
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = 'en_US',
  alternateLanguages = [],
  breadcrumbs = [],
  faqData = [],
  articleData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} - Zion Tech Group`
  const fullDescription = description || 'Professional AI and IT solutions for modern businesses'
  const fullKeywords = keywords || 'AI solutions, IT services, technology consulting, software development, artificial intelligence'
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')
  const defaultOgImage = ogImage || 'https://ziontechgroup.com/og-image.jpg'
  // Generate structured data
  const generateStructuredData = () => {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: fullDescription,
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/ziontechgroup'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        availableLanguage: 'English'
      }
    }
    // Add article structured data if provided
    if (articleData) {
      return {
        ...baseStructuredData,
        '@type': 'Article',
        headline: fullTitle,
        description: fullDescription,
        author: {
          '@type': 'Person',
          name: articleData.author
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ziontechgroup.com/logo.png'
          }
        },
        datePublished: articleData.publishedTime,
        dateModified: articleData.modifiedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl
        },
        articleSection: articleData.section,
        keywords: articleData.tags.join(', ')
      }
    }
    // Add FAQ structured data if provided
    if (faqData.length > 0) {
      return {
        ...baseStructuredData,
        '@type': 'FAQPage',
        mainEntity: faqData.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    }
    return structuredData || baseStructuredData
  }
  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = () => {
    if (breadcrumbs.length === 0) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    }
  }
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={currentUrl} />
      {/* Language and locale */}
      <html lang={locale.split('_')[0]} />
      <meta property="og:locale" content={locale} />
      {/* Author and publishing info */}
      {author && <meta name="author" content={author} />}
      {publishedTime && <meta name="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta name="article:modified_time" content={modifiedTime} />}
      {section && <meta name="article:section" content={section} />}
      {tags.length > 0 && <meta name="article:tag" content={tags.join(', ')} />}
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={defaultOgImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      {/* Additional SEO */}
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {/* Alternate languages */}
      {alternateLanguages.map((alt, index) => (
        <link key={index} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
      ))}
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
      {/* Breadcrumb Structured Data */}
      {breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbStructuredData())}
        </script>
      )}
      {/* Default Organization Structured Data */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "description": "Advanced AI and IT Solutions for modern businesses",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://ziontechgroup.com"
            ],
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "industry": "Information Technology"
          })}
        </script>
      )}
    </Helmet>
  )
}
export default SEOHead
  structuredData?: object;}}
const SEOHead: React.FC<SEOHeadProps> = ({,
    title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.',
  keywords = 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData;}}) => {}const fullTitle = title.includes('Zion Tech Group') ? title : `${title}| Zion Tech Group`
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '')
const defaultStructuredData = {"@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "description": "Advanced AI and IT Solutions company providing cutting-edge technology services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"},
    "contactPoint": {"@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"},
    "sameAs": [
      "https: //www.linkedin.com/company/zion-tech-group",
      "https: //twitter.com/ziontechgroup",
    ],
  }
return(<Helmet />)
      {/* Basic Meta Tags */} <title>{fullTitle}</title>
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta />
      {/* Canonical URL */}{canonicalUrl && <link rel="canonical" href={canonicalUrl}/>}
{/* Open Graph Meta Tags */} <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta />
      {/* Twitter Card Meta Tags */} <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      {/* Additional SEO Meta Tags */} <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      {/* Structured Data */} <script>
        {JSON.stringify(structuredData || defaultStructuredData)} </script>
    </Helmet>
  )
}
export default SEOHead