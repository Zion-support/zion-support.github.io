<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
interface SeoheadProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Seohead({ className = '', children, ...props }: SeoheadProps) {
  return (
    <div className={`seohead-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.',
  keywords = 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation',
  canonicalUrl,
  ogImage = '/og-image.jpg',
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
<<<<<<< HEAD
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
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        availableLanguage: 'English',
        email: 'kleber@ziontechgroup.com'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
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

=======
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '')
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Advanced AI and IT Solutions company providing cutting-edge technology services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ]
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
  return (
    <Helmet>
      <title>{fullTitle}</title>
<<<<<<< HEAD
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Language and locale */}
      <html lang={locale.split('_')[0]} />
      <meta property="og:locale" content={locale} />
      
<<<<<<< HEAD
      {/* Author and publishing info */}
      {author && <meta name="author" content={author} />}
      {publishedTime && <meta name="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta name="article:modified_time" content={modifiedTime} />}
      {section && <meta name="article:section" content={section} />}
      {tags.length > 0 && <meta name="article:tag" content={tags.join(', ')} />}
      
      {/* Open Graph */}
=======
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
=======
      {/* Open Graph Meta Tags */}
      <meta property="og: title" content={fullTitle,} />
      <meta property="og: description" content={description,} />
      <meta property="og: type" content={ogType,} />
      <meta property="og: url" content={canonicalUrl,} />
      <meta property="og: image" content={ogImage,} />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <meta property="og:site_name" content="Zion Tech Group" />
<<<<<<< HEAD
      
<<<<<<< HEAD
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={defaultOgImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
=======
      {/* Twitter Card Meta Tags */}
      <meta name="twitter: card" content={twitterCard,} />
      <meta name="twitter: title" content={fullTitle,} />
      <meta name="twitter: description" content={description,} />
      <meta name="twitter: image" content={ogImage,} />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      
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
=======
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
<<<<<<< HEAD
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbStructuredData())}
=======
  title: string;
  description: string;
  structuredData?: any;
=======
    </Helmet>
  )
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, structuredData }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        </script>
      )}
    </Helmet>
  )
}

export default SEOHead
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======

  return (
    <title>5G Data Analytics - Zion Tech Group</title>
      <title>Zion Tech Group - Advanced AI and IT Solutions</title>

      {/* Open Graph Meta Tags */}

      {/* Twitter Card Meta Tags */}

      {/* Additional SEO Meta Tags */}

      {/* Structured Data */}
      <script type="application/ld+json"    />{JSON.stringify({
          "@context": "https: // schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
          "url": "https: // ziontechgroup.com",
          "logo": "https: // ziontechgroup.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"},
          "address": {"@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"},
          "sameAs": ["https: // github.com/ziontechgroup",
            "https: // linkedin.com/company/ziontechgroup",
            "https:// twitter.com/ziontechgroup"]
        })}

  );
};
export default SEOHead;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======

const SEOHead: React.FC<SEOHeadProps> = () => {
  return (
    <div className="seohead">
      <h2>SEOHead</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default SEOHead;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
