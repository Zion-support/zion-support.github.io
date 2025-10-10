'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  structuredData?: Record<string, unknown>;
  noIndex?: boolean;
  noFollow?: boolean;
  locale?: string;
  alternateLanguages?: Array<{ href: string; hreflang: string }>;
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = [
    'AI solutions',
    'artificial intelligence',
    'machine learning',
    'quantum computing',
    'autonomous systems',
    'digital transformation',
    'enterprise AI',
    'IT consulting',
    'cloud solutions',
    'cybersecurity',
    'data analytics',
    'business automation',
    'Zion Tech Group'
  ],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  structuredData,
  noIndex = false,
  noFollow = false,
  locale = 'en_US',
  alternateLanguages = []
}) => {
  // Default structured data for organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: 'Leading provider of AI-powered enterprise solutions and digital transformation services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Technology Drive',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup'
    ],
    services: [
      'AI Solutions',
      'Machine Learning',
      'Cloud Computing',
      'Cybersecurity',
      'Data Analytics',
      'Digital Transformation',
      'IT Consulting',
      'Software Development'
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  useEffect(() => {
    // Update page title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords.join(', '));
      document.head.appendChild(metaKeywords);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonical);
    }

    // Add robots meta
    let robots = document.querySelector('meta[name="robots"]');
    const robotsContent = `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`;
    if (robots) {
      robots.setAttribute('content', robotsContent);
    } else {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      robots.setAttribute('content', robotsContent);
      document.head.appendChild(robots);
    }

    // Add language meta
    let lang = document.querySelector('html');
    if (lang) {
      lang.setAttribute('lang', locale.split('_')[0]);
    }

    // Add structured data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(finalStructuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      structuredDataScript.textContent = JSON.stringify(finalStructuredData);
      document.head.appendChild(structuredDataScript);
    }

    // Add alternate language links
    alternateLanguages.forEach(({ href, hreflang }) => {
      let alternateLink = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (alternateLink) {
        alternateLink.setAttribute('href', href);
      } else {
        alternateLink = document.createElement('link');
        alternateLink.setAttribute('rel', 'alternate');
        alternateLink.setAttribute('hreflang', hreflang);
        alternateLink.setAttribute('href', href);
        document.head.appendChild(alternateLink);
      }
    });

  }, [title, description, keywords, canonicalUrl, noIndex, noFollow, locale, alternateLanguages, finalStructuredData]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
      <meta name="language" content={locale} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterSite} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Alternate Language Links */}
      {alternateLanguages.map(({ href, hreflang }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}
    </Helmet>
  );
};

export default EnhancedSEOHead;