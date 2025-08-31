import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  structuredData?: any;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  facebookAppId?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    siteName?: string;
    locale?: string;
  };
}

export const EnhancedSEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Zion Tech Group delivers cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation services. Transform your business with our innovative technology solutions.',
  keywords = [
    'AI Solutions',
    'Artificial Intelligence',
    'Cloud Services',
    'Cybersecurity',
    'Digital Transformation',
    'Technology Consulting',
    'Machine Learning',
    'Data Analytics',
    'IT Services',
    'Enterprise Solutions'
  ],
  author = 'Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  structuredData,
  twitterCard = 'summary_large_image',
  facebookAppId,
  googleAnalyticsId,
  googleTagManagerId,
  openGraph
}) => {
  // Default structured data for organization
  const defaultStructuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: 'Leading AI & Technology Solutions Provider',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'Silicon Valley',
      addressRegion: 'CA',
      postalCode: '94025',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://www.facebook.com/ziontechgroup'
    ],
    offers: {
      '@type': 'Offer',
      description: 'AI Solutions, Cloud Services, Cybersecurity',
      category: 'Technology Services'
    }
  }), []);

  // Generate meta keywords string
  const keywordsString = useMemo(() => {
    const allKeywords = [...keywords, ...tags];
    return allKeywords.join(', ');
  }, [keywords, tags]);

  // Generate Open Graph data
  const ogData = useMemo(() => ({
    title: openGraph?.title || title,
    description: openGraph?.description || description,
    image: openGraph?.image || image,
    url: openGraph?.url || url,
    type: openGraph?.type || type,
    siteName: openGraph?.siteName || 'Zion Tech Group',
    locale: openGraph?.locale || 'en_US'
  }), [openGraph, title, description, image, url, type]);

  // Generate Twitter Card data
  const twitterData = useMemo(() => ({
    card: twitterCard,
    site: '@ziontechgroup',
    creator: '@ziontechgroup',
    title: title,
    description: description,
    image: image
  }), [twitterCard, title, description, image]);

  // Generate article structured data if applicable
  const articleStructuredData = useMemo(() => {
    if (type === 'article' && publishedTime) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image,
        author: {
          '@type': 'Organization',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ziontechgroup.com/images/logo.png'
          }
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url
        },
        articleSection: section,
        keywords: keywordsString
      };
    }
    return null;
  }, [type, publishedTime, title, description, image, author, modifiedTime, url, section, keywordsString]);

  // Generate service structured data if applicable
  const serviceStructuredData = useMemo(() => {
    if (type === 'service') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        description: description,
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group'
        },
        areaServed: 'Worldwide',
        serviceType: 'Technology Solutions',
        category: 'Technology Services'
      };
    }
    return null;
  }, [type, title, description]);

  // Combine all structured data
  const allStructuredData = useMemo(() => {
    const data = [defaultStructuredData];
    
    if (structuredData) {
      data.push(structuredData);
    }
    
    if (articleStructuredData) {
      data.push(articleStructuredData);
    }
    
    if (serviceStructuredData) {
      data.push(serviceStructuredData);
    }
    
    return data;
  }, [defaultStructuredData, structuredData, articleStructuredData, serviceStructuredData]);

  // Google Analytics tracking
  useEffect(() => {
    if (googleAnalyticsId && typeof window !== 'undefined') {
      // Google Analytics 4
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', googleAnalyticsId, {
          page_title: title,
          page_location: url
        });
      }
    }
  }, [googleAnalyticsId, title, url]);

  // Google Tag Manager
  useEffect(() => {
    if (googleTagManagerId && typeof window !== 'undefined') {
      if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
          event: 'page_view',
          page_title: title,
          page_location: url,
          page_type: type
        });
      }
    }
  }, [googleTagManagerId, title, url, type]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:image" content={ogData.image} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:type" content={ogData.type} />
      <meta property="og:site_name" content={ogData.siteName} />
      <meta property="og:locale" content={ogData.locale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterData.card} />
      <meta name="twitter:site" content={twitterData.site} />
      <meta name="twitter:creator" content={twitterData.creator} />
      <meta name="twitter:title" content={twitterData.title} />
      <meta name="twitter:description" content={twitterData.description} />
      <meta name="twitter:image" content={twitterData.image} />
      
      {/* Facebook App ID */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="Silicon Valley" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="123 Tech Street" />
      <meta name="business:contact_data:locality" content="Silicon Valley" />
      <meta name="business:contact_data:region" content="CA" />
      <meta name="business:contact_data:postal_code" content="94025" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-555-123-4567" />
      <meta name="business:contact_data:email" content="info@ziontechgroup.com" />
      
      {/* Service Information */}
      <meta name="service:name" content="AI Solutions" />
      <meta name="service:type" content="Technology Services" />
      <meta name="service:area" content="Worldwide" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Additional Performance Optimizations */}
      <link rel="preload" href="/fonts/orbitron-v19-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/rajdhani-v15-latin-500.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Manifest for PWA */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Helmet>
  );
};

// Extend Window interface for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}