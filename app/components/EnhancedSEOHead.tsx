'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
  noIndex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  type?: 'website' | 'article' | 'product' | 'service';
  locale?: string;
  alternateLanguages?: Array<{ hreflang: string; href: string }>;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  facebookAppId?: string;
  googleSiteVerification?: string;
  bingSiteVerification?: string;
  yandexVerification?: string;
  robots?: string;
  viewport?: string;
  themeColor?: string;
  manifestUrl?: string;
  appleTouchIcon?: string;
  favicon?: string;
  preconnectUrls?: string[];
  dnsPrefetchUrls?: string[];
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI and IT solutions, transforming businesses through cutting-edge technology and innovative approaches.',
  keywords = ['AI solutions', 'IT services', 'artificial intelligence', 'technology consulting', 'digital transformation'],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  structuredData,
  noIndex = false,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = [],
  type = 'website',
  locale = 'en_US',
  alternateLanguages = [],
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
  facebookAppId,
  googleSiteVerification,
  bingSiteVerification,
  yandexVerification,
  robots = 'index, follow',
  viewport = 'width=device-width, initial-scale=1',
  themeColor = '#2563eb',
  manifestUrl = '/manifest.json',
  appleTouchIcon = '/apple-touch-icon.png',
  favicon = '/favicon.ico',
  preconnectUrls = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
  dnsPrefetchUrls = ['https://www.google-analytics.com']
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${process.env.NEXT_PUBLIC_BASE_URL || 'https://ziontechgroup.com'}${ogImage}`;

  // Default structured data
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading provider of AI and IT solutions',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'Innovation City',
      addressRegion: 'IC',
      postalCode: '12345',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup'
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : robots} />
      <meta name="viewport" content={viewport} />
      <meta name="theme-color" content={themeColor} />
      <meta name="format-detection" content="telephone=no" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={locale} />

      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.length > 0 && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Facebook App ID */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}

      {/* Search Engine Verification */}
      {googleSiteVerification && <meta name="google-site-verification" content={googleSiteVerification} />}
      {bingSiteVerification && <meta name="msvalidate.01" content={bingSiteVerification} />}
      {yandexVerification && <meta name="yandex-verification" content={yandexVerification} />}

      {/* Favicon and Icons */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="manifest" href={manifestUrl} />

      {/* Alternate Languages */}
      {alternateLanguages.map((lang, index) => (
        <link key={index} rel="alternate" hrefLang={lang.hreflang} href={lang.href} />
      ))}

      {/* Preconnect to external domains */}
      {preconnectUrls.map((url, index) => (
        <link key={index} rel="preconnect" href={url} crossOrigin="anonymous" />
      ))}

      {/* DNS Prefetch */}
      {dnsPrefetchUrls.map((url, index) => (
        <link key={index} rel="dns-prefetch" href={url} />
      ))}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="language" content="en" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="Innovation City" />
      <meta name="geo.position" content="39.8283;-98.5795" />
      <meta name="ICBM" content="39.8283, -98.5795" />

      {/* Mobile App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

export default EnhancedSEOHead;