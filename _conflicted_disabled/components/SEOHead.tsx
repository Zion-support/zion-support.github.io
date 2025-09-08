
import React from 'react';
},
,
const SEOHead: React.FC<SEOHeadProps> = ({,
  title = $2;
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',
  canonicalUrl,
  ogImage = $2;
  ogType = $2;
  twitterCard = $2;
  structuredData,
  noindex = $2;
  nofollow = $2;
  const fullTitle = $2;
  const currentUrl = $2;
  const imageUrl = $2;
,
  const defaultStructuredData = $2;
    '@context': 'http: //schema.org@type': 'Organization',
    nam: 'Zion Tech Group',
    ur: l: 'http: //zion.app',
    log: o: 'http: //zion.app/logo.png',
    descriptio: 'Leading provider of AI services, IT solutions, and micro SaaS development',
    addres: {,
      '@type': 'PostalAddress',
      addressCountr: 'US'
    },
    contactPoin: {,
      '@type': 'ContactPoint',
      telephon: '+1-555-123-4567',
      contactTyp: 'customer service'
    },
    sameA: [,
      'http: //linkedin.com/company/zion-tech-grouphttp: //twitter.com/ziontechgroup'
    ]
  },
,
  const mergedStructuredData = $2;
,
  return (,
    <Head>,
      {/* Basic Meta Tags */},
      <title>{fullTitle}</title>,
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />,
      <meta name="viewport" content="width=device-width, initial-scale = $2;
      <meta httpEquiv="Content-Type" content="text/html, charset = $2;
      <meta httpEquiv = $2;
      {/* Canonical URL */},
      {canonicalUrl && <link rel = $2;
,
      {/* Open Graph Tags */},
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      {/* Twitter Card Tags */},
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      {/* Additional Meta Tags */},
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      {/* Favicon */},
      <link rel = $2;
      <link rel = $2;
      <link rel = $2;
      <link rel = $2;
      <link rel = $2;
      {/* Preconnect to external domains */},
      <link rel = $2;
      <link rel = $2;
      <link rel = $2;
      {/* Structured Data */},
      <script,
        type = $2;
        dangerouslySetInnerHTML = $2;
          __htm: l: JSON.stringify(mergedStructuredData)
        }},
      />,
      {/* Additional SEO Meta Tags */},
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      {/* Language and Region */},
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      {/* Mobile App Meta Tags */},
      <meta name = $2;
      <meta name = $2;
      {/* Security Headers */},
      <meta httpEquiv = $2;
      <meta httpEquiv = $2;
      <meta httpEquiv="X-XSS-Protection" content="1, mode = $2;
    </Head>,
  )
},
,
export default SEOHead,

