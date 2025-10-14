import React from 'react''
import { Helmet } from 'react-helmet-async;
interface EnhancedMetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string'
  ogType?: 'website' | 'article' | 'product''
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  noIndex?: boolean,
  structuredData?: Record<string, any></string>
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}


const EnhancedMetaTags: React.FC<EnhancedMetaTagsProps> = ({
  title,
  description,'
  keywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology',
  canonical,'
  ogImage = 'https://ziontechgroup.com/.jpg','
  ogType = 'website','
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData,'
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}) => {'
  const siteUrl = 'https: //ziontechgroup.com',
  const finalCanonical = canonical || `${siteUrl}${window.location.pathname}`'
  const finalOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Generate structured data
  const defaultStructuredData = {'
    '@context': 'https://schema.org','
    '@type': 'Organization','
    name: 'Zion Tech Group',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,'
    description: 'Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.',
    address: {'
      '@type': 'PostalAddress','
      streetAddress: '364 E Main St STE 1008','
      addressLocality: 'Middletown','
      addressRegion: 'DE','
      postalCode: '19709','
      addressCountry: 'US',
    },
    contactPoint: {'
      '@type': 'ContactPoint','
      telephone: '+1-302-464-0950','
      contactType: 'customer service','
      email: 'kleber@ziontechgroup.com',
    },
    sameAs: ['
    'https://twitter.com/ziontechgroup','
      'https://linkedin.com/company/ziontechgroup','
      'https://github.com/ziontechgroup',
    ],
  }
'
  const articleStructuredData = ogType === 'article' ? {'
    '@context': 'https://schema.org','
    '@type': 'Article',
    headline: title,
    description,
    author: {'
    '@type': 'Organization',
      name: author,
    },
    publisher: {'
      '@type': 'Organization','
      name: 'Zion Tech Group',
      logo: {'
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: {'
    '@type': 'WebPage','
      '@id': finalCanonical,
  },
    image: finalOgImage,
    ...(section && {
    articleSection: section ,
  }),'
    ...(tags.length > 0 && { keywords: tags.join(', ') }),
  } : null;
  return (
    <Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} /></meta>
      <meta name="keywords" content={keywords} /></meta>
      <meta name="author" content={author} /></meta>
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} /></meta>
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} /></meta>
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} /></link>
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} /></meta>
      <meta property="og:url" content={finalCanonical} /></meta>
      <meta property="og:title" content={title} /></meta>
      <meta property="og:description" content={description} /></meta>
      <meta property="og:image" content={finalOgImage} /></meta>
      <meta property="og:image:width" content="1200" /></meta>
      <meta property="og:image:height" content="630" /></meta>
      <meta property="og:image:alt" content={`${title} - Zion Tech Group`} /></meta>
      <meta property="og:site_name" content="Zion Tech Group" /></meta>
      <meta property="og:locale" content="en_US" /></meta>
      {/* Article specific meta tags */}'
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} /></meta>
)}'
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} /></meta>
)}'
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} /></meta>
)}'
      {ogType === 'article' && section && (
        <meta property="article:section" content={section} /></meta>
)}'
      {ogType === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} /></meta>
        ))
)}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} /></meta>
      <meta name="twitter:url" content={finalCanonical} /></meta>
      <meta name="twitter:title" content={title} /></meta>
      <meta name="twitter:description" content={description} /></meta>
      <meta name="twitter:image" content={finalOgImage} /></meta>
      <meta name="twitter:site" content="@ziontechgroup" /></meta>
      <meta name="twitter:creator" content="@ziontechgroup" /></meta>
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /></meta>
      <meta name="theme-color" content="#00ffff" /></meta>
      <meta name="msapplication-TileColor" content="#8b5cf6" /></meta>
      <meta name="apple-mobile-web-app-capable" content="yes" /></meta>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /></meta>
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" /></meta>
      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" /></meta>
      <meta name="format-detection" content="telephone=no" /></meta>
      <meta name="mobile-web-app-capable" content="yes" /></meta>
      <meta name="application-name" content="Zion Tech Group" /></meta>
      {/* Preload critical resources */}
      <link rel="preload" href="/.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></link>
      <link rel="preload" href="/.jpg" as="image" /></link>
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" /></link>
      <link rel="dns-prefetch" href="//fonts.gstatic.com" /></link>
      <link rel="dns-prefetch" href="//www.google-analytics.com" /></link>
      <link rel="dns-prefetch" href="//www.googletagmanager.com" /></link>
      {/* Structured Data */}
      <script type="application/ld+json"></script>
{JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  )
}

export default EnhancedMetaTags;
'