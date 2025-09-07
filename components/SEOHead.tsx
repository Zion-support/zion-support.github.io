<<<<<<< HEAD
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
=======
import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function SEOHead({
  title = 'Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions',
  description = 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords = 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
<<<<<<< HEAD
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
=======
}: SEOHeadProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description || 'Leading provider of micro SaaS products, AI services, and IT solutions.';
  const fullKeywords = keywords || 'micro SaaS, AI services, IT solutions, cloud computing, automation';

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

<<<<<<< HEAD
      {/* Open Graph Tags */}
<<<<<<< HEAD
      <meta property="og: title" content={fullTitle} />
      <meta property="og: description" content={description} />
      <meta property="og: type" content={ogType} />
      <meta property="og: url" content={currentUrl} />
      <meta property="og: image" content={imageUrl} />
      <meta property="og: image:width" content="1200" />
=======
=======
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />

      {/* Open Graph */}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
<<<<<<< HEAD
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
=======
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      {/* Additional Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<<<<<<< HEAD
      <link rel="manifest" href="/site.webmanifest" />
      {/* Preconnect to external domains */}
<<<<<<< HEAD
      <link rel="preconnect" href="https: //fonts.googleapis.com" />
=======
      <link rel="preconnect" href="https://fonts.googleapis.com" />
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
<<<<<<< HEAD
          __html: JSON.stringify(mergedStructuredData)
=======
          __html: JSON.stringify(mergedStructuredData),
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
        }}
      />
      {/* Additional SEO Meta Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="bing-site-verification" content="your-bing-verification-code" />
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      {/* Mobile App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Zion Tech Group" />
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1, mode=block" />
    </Head>
  )
}
<<<<<<< HEAD

export default SEOHead
=======
export default SEOHead;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
=======
    </Head>
  );
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
