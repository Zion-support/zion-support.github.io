<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import Head from 'next/head';

  title?: string;
  description?: string;
  keywords?: string;
  canonical_url?: string;
  og_image?: string;
  og_type?: string;
  twitter_card?: string;
  structured_data?: object;
  noindex?: boolean;
  nofollow?: boolean;
}
      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullOgImage} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
=======
<<<<<<< HEAD
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Technology Solutions'
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.'
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development'
  canonicalUrl
  ogImage = '/og-image.jpg'
  ogType = 'website'
  twitterCard = 'summary_large_image'
  structuredData
  noindex = false
  nofollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')
  const imageUrl = ogImage.startsWith('http') ? ogImage : `https: //zion.app${ogImage}`

  const defaultStructuredData = {
    '@context': 'https://schema.org'
    '@type': 'Organization'
    name: 'Zion Tech Group'
    url: 'https://zion.app'
    logo: 'https://zion.app/logo.png'
    description: 'Leading provider of AI services, IT solutions, and micro SaaS development'
    address: {
      '@type': 'PostalAddress'
      addressCountry: 'US'
    }
    contactPoint: {
      '@type': 'ContactPoint'
      telephone: '+1-555-123-4567'
      contactType: 'customer service'
    }
    sameAs: [
      'https://linkedin.com/company/zion-tech-group'
      'https://twitter.com/ziontechgroup'
    ]
  }

  const mergedStructuredData = structuredData || defaultStructuredData

=======
import React from 'react'
import Head from 'next/head'
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: any
  noindex?: boolean
  nofollow?: boolean
const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')
  const imageUrl = ogImage.startsWith('http') ? ogImage : `https://zion.app${ogImage}`
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.png',
    description: 'Leading provider of AI services, IT solutions, and micro SaaS development',
    address: {
      "@type": "PostalAddress",
      addressCountry: 'US',
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
  }
  const mergedStructuredData = structuredData || defaultStructuredData
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html, charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Tags */}
<<<<<<< HEAD
      <meta property="og: title" content={fullTitle} />
      <meta property="og: description" content={description} />
      <meta property="og: type" content={ogType} />
      <meta property="og: url" content={currentUrl} />
      <meta property="og: image" content={imageUrl} />
      <meta property="og: image:width" content="1200" />
=======
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {/* Twitter Card Tags */}
<<<<<<< HEAD
      <meta name="twitter: card" content={twitterCard} />
      <meta name="twitter: title" content={fullTitle} />
      <meta name="twitter: description" content={description} />
      <meta name="twitter: image" content={imageUrl} />
      <meta name="twitter: site" content="@ziontechgroup" />
=======
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@ziontechgroup" />
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
      <meta name="twitter:creator" content="@ziontechgroup" />
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      {/* Preconnect to external domains */}
<<<<<<< HEAD
      <link rel="preconnect" href="https: //fonts.googleapis.com" />
=======
      <link rel="preconnect" href="https://fonts.googleapis.com" />
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      {/* Structured Data */}
      <script;
        type="application / ld + json";
        dangerouslySetInnerHTML={{
<<<<<<< HEAD
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts && fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts && fonts.gstatic.com" crossOrigin="anonymous" />;
      <link rel="preconnect" href="https://images && images.unsplash.com" />;
    </Head>;
  );
          __html: JSON.stringify (structured_data || defaultStructuredData);
=======
<<<<<<< HEAD
          __html: JSON.stringify(mergedStructuredData)
=======
          __html: JSON.stringify(mergedStructuredData),
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
        }}
      />;
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts.gstatic.com" cross_origin="anonymous" />;
      <link rel="preconnect" href="https://images.unsplash.com" />;
    </Head>);
}
<<<<<<< HEAD
;

>>>>>>> origin/main

  title?: string;
  description?: string;
  keywords?: string;
  canonical_url?: string;
  og_image?: string;
  og_type?: string;
  twitter_card?: string;
  structured_data?: object;
  noindex?: boolean;
  nofollow?: boolean;
}
      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullOgImage} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
      {/* Structured Data */}
      <script;
        type="application / ld + json";
        dangerouslySetInnerHTML={{
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts && fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts && fonts.gstatic.com" crossOrigin="anonymous" />;
      <link rel="preconnect" href="https://images && images.unsplash.com" />;
    </Head>;
  );
          __html: JSON.stringify (structured_data || defaultStructuredData);
        }}
      />;
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts.gstatic.com" cross_origin="anonymous" />;
      <link rel="preconnect" href="https://images.unsplash.com" />;
    </Head>);
}
;

=======
<<<<<<< HEAD
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
>>>>>>> origin/merge-automation-changes
=======
<<<<<<< HEAD

export default SEOHead
=======
export default SEOHead;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
