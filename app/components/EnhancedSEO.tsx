'use client',
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string,
  description?: string,
  keywords?: string[],
  canonicalUrl?: string,
  ogImage?: string,
  ogType?: string,
  twitterCard?: string,
  structuredData?: any,
  noIndex?: boolean,
  noFollow?: boolean,
  author?: string,
  publishedTime?: string,
  modifiedTime?: string,
  section?: string,
  tags?: string[],
  locale?: string,
  alternateLocales?: string[],
  robots?: string,
  viewport?: string,
  themeColor?: string,
  colorScheme?: string,
  preload?: Array<{
    href: string;,
    as: string,
    type?: string;,
  }>,
  prefetch?: Array<{
    href: string;,
    as: string,
  }>,
  dnsPrefetch?: string[],
  preconnect?: string[],
}

  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'artificial intelligence', 'business intelligence', 'data analytics', 'cybersecurity', 'cloud migration', 'DevOps', 'IT consulting'],
  canonicalUrl = 'https: //ziontechgroup.com',
  ogImage = 'https: //ziontechgroup.com/og-image.webp',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = 'en_US',
  alternateLocales = [],
  robots,
  viewport = 'width=device-width, initial-scale=1, viewport-fit=cover',
  themeColor = '#0 f172 a',
  colorScheme = 'dark light',
  preload = [],
  prefetch = [],
  dnsPrefetch = [],
  preconnect = []
}) => {
const robotsContent = robots || `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`,

const defaultStructuredData = {
    '@context': 'https: //schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group'
    description: 'Advanced AI and IT Solutions'
    url: 'https://ziontechgroup.com'
    logo: 'https://ziontechgroup.com/logo.webp'
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
    },
    address: {
      '@type': 'PostalAddress'
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group'
      'https: //twitter.com/ziontechgroup'
      'https: //facebook.com/ziontechgroup'
      'https: //instagram.com/ziontechgroup'
      'https: //github.com/ziontechgroup'
      'https: //youtube.com/@ziontechgroup',
    ],
    offers: {
      '@type': 'Offer',
      name: 'AI Enterprise Transformation Services',
      description: 'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
      price: '50000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },

const finalStructuredData = structuredData || defaultStructuredData,
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content={viewport} />
      <meta name="theme-color" content={themeColor} />
      <meta name="color-scheme" content={colorScheme} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og: image:width" content="1200" />,
      <meta property="og:image:height" content="630" />,
      <meta property="og:image:alt" content={title} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
          key={index}
          rel="preload"
          href={resource.href}
          as={resource.as}
          type={resource.type}
        >))}</link>

          key={index}
          rel="prefetch"
          href={resource.href}
          as={resource.as}
        >))}</link>
</link>
      {/* Structured Data */}<script type="application/ld+json">{JSON.stringify(finalStructuredData)}</scrip>
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <link rel="apple-touch-icon" href="/logo192.webp" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  ),
},

export default EnhancedSEO,