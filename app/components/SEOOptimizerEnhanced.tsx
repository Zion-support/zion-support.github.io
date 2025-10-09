'use client';
import React from 'react';
import Head from 'next/head';

interface SEOOptimizerEnhancedProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  structuredData?: any;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLocales?: Array<{ href: string; hreflang: string }>;
  robots?: string;
  viewport?: string;
  themeColor?: string;
  colorScheme?: string;
  appleWebApp?: {
    capable?: boolean;
    statusBarStyle?: string;
    title?: string;
  };
  msApplication?: {
    tileColor?: string;
    config?: string;
  };
  preconnect?: string[];
  dnsPrefetch?: string[];
  preload?: Array<{
    href: string;
    as: string;
    type?: string;
    crossOrigin?: boolean;
  }>;
}

const SEOOptimizerEnhanced: React.FC<SEOOptimizerEnhancedProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  structuredData,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = 'en_US',
  alternateLocales = [],
  robots,
  viewport = 'width=device-width, initial-scale=1.0, viewport-fit=cover',
  themeColor = '#4f46e5',
  colorScheme = 'dark light',
  appleWebApp = {
    capable: true,
    statusBarStyle: 'default',
    title: 'Zion Tech Group'
  },
  msApplication = {
    tileColor: '#4f46e5',
    config: '/browserconfig.xml'
  },
  preconnect = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com'
  ],
  dnsPrefetch = [
    'https://images.unsplash.com',
    'https://via.placeholder.com'
  ],
  preload = []
}) => {
  const robotsContent = robots || `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
  
  const enhancedStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://ziontechgroup.com/#organization',
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ziontechgroup.com/logo.png',
          width: 200,
          height: 200
        },
        description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
        foundingDate: '2020',
        numberOfEmployees: '50-100',
        industry: 'Technology',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '364 E Main St STE 1008',
          addressLocality: 'Middletown',
          addressRegion: 'DE',
          postalCode: '19709',
          addressCountry: 'US'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-302-464-0950',
          contactType: 'Customer Service',
          areaServed: 'US',
          availableLanguage: 'en'
        },
        sameAs: [
          'https://twitter.com/ziontechgroup',
          'https://linkedin.com/company/ziontechgroup',
          'https://github.com/ziontechgroup'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://ziontechgroup.com/#website',
        url: 'https://ziontechgroup.com',
        name: 'Zion Tech Group',
        description: description,
        publisher: {
          '@id': 'https://ziontechgroup.com/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://ziontechgroup.com/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description: description,
        isPartOf: {
          '@id': 'https://ziontechgroup.com/#website'
        },
        about: {
          '@id': 'https://ziontechgroup.com/#organization'
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: {
          '@id': 'https://ziontechgroup.com/#organization'
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://ziontechgroup.com'
            }
          ]
        }
      },
      ...(structuredData ? [structuredData] : [])
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content={viewport} />
      <meta name="theme-color" content={themeColor} />
      <meta name="color-scheme" content={colorScheme} />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="3 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate Languages */}
      {alternateLocales.map((locale, index) => (
        <link key={index} rel="alternate" hrefLang={locale.hreflang} href={locale.href} />
      ))}
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Apple Web App */}
      <meta name="apple-mobile-web-app-capable" content={appleWebApp.capable ? 'yes' : 'no'} />
      <meta name="apple-mobile-web-app-status-bar-style" content={appleWebApp.statusBarStyle || 'default'} />
      <meta name="apple-mobile-web-app-title" content={appleWebApp.title || 'Zion Tech Group'} />
      <meta name="application-name" content="Zion Tech Group" />
      
      {/* Microsoft Application */}
      <meta name="msapplication-TileColor" content={msApplication.tileColor || '#4f46e5'} />
      <meta name="msapplication-config" content={msApplication.config || '/browserconfig.xml'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={locale} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Resource Hints */}
      {preconnect.map((url, index) => (
        <link key={`preconnect-${index}`} rel="preconnect" href={url} />
      ))}
      {dnsPrefetch.map((url, index) => (
        <link key={`dns-prefetch-${index}`} rel="dns-prefetch" href={url} />
      ))}
      {preload.map((resource, index) => (
        <link
          key={`preload-${index}`}
          rel="preload"
          href={resource.href}
          as={resource.as}
          type={resource.type}
          crossOrigin={resource.crossOrigin ? 'anonymous' : undefined}
        />
      ))}
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedStructuredData) }}
      />
    </Head>
  );
};

export default SEOOptimizerEnhanced;