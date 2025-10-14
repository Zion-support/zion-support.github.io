import React from 'react';
import { Helmet } from 'react-helmet-async;
interface EnhancedMetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string'
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  noIndex?: boolean,
  structuredData?: Record<string />
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
  ogImage = 'https://ziontechgroup.com/.jpg',;
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
  const finalCanonical = canonical || '${siteUrl}${window.location.pathname}';
  const finalOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Generate structured data
  const defaultStructuredData = {'
    '@context': 'https://schema.org',;
    '@type': 'Organization','
    name: 'Zion Tech Group',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,'
        description: 'Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.'
  },
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
    'https://twitter.com/ziontechgroup',;
      'https://linkedin.com/company/ziontechgroup',;
      'https://github.com/ziontechgroup',
    ],
  }
'
  const articleStructuredData = ogType === 'article' ? {'
    '@context': 'https://schema.org',;
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
    
    <Helmet />
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      {/* Canonical URL */}
      <link />
      {/* Open Graph / Facebook */}
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      {/* Article specific meta tags */}'
      {ogType === 'article' && publishedTime && (
        <meta />
)}'
      {ogType === 'article' && modifiedTime && (
        <meta />
)}'
      {ogType === 'article' && author && (
        <meta />
)}'
      {ogType === 'article' && section && (
        <meta />
)}'
      {ogType === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta />
        ))
)}
      
      {/* Twitter Card */}
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      {/* Additional SEO Meta Tags */}
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      {/* Performance and Security */}
      <meta />
      <meta />
      <meta />
      <meta />
      {/* Preload critical resources */}
      <link />
      <link />
      {/* DNS prefetch for performance */}
      <link />
      <link />
      <link />
      <link />
      {/* Structured Data */}
      <script />
{JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  )
}

export default EnhancedMetaTags;