import React, { useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: any;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  facebookAppId?: string;
  ogType?: 'website' | 'article' | 'product' | 'service' | 'profile';
  ogSiteName?: string;
  ogLocale?: string;
  ogLocaleAlternate?: string[];
  robots?: string;
  viewport?: string;
  charset?: string;
  themeColor?: string;
  msapplicationTileColor?: string;
  appleTouchIcon?: string;
  favicon?: string;
  manifest?: string;
  appleMobileWebAppTitle?: string;
  appleMobileWebAppCapable?: boolean;
  appleMobileWebAppStatusBarStyle?: 'default' | 'black' | 'black-translucent';
  formatDetection?: {
    telephone?: boolean;
    date?: boolean;
    address?: boolean;
    email?: boolean;
  };
  additionalMeta?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
  additionalLinks?: Array<{
    rel: string;
    href: string;
    type?: string;
    sizes?: string;
    media?: string;
  }>;
  preload?: Array<{
    href: string;
    as: string;
    type?: string;
    crossorigin?: boolean;
  }>;
  prefetch?: string[];
  dnsPrefetch?: string[];
  preconnect?: string[];
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Business Solutions & Digital Transformation',
  description = 'Transform your business with Zion Tech Group\'s cutting-edge AI solutions, quantum computing, cybersecurity, and digital transformation services. Enterprise-grade technology solutions for the future.',
  keywords = [
    'AI Solutions', 'Artificial Intelligence', 'Machine Learning', 'Quantum Computing',
    'Cybersecurity', 'Digital Transformation', 'Cloud Services', 'DevOps',
    'Blockchain', 'Web3', 'IoT', 'Edge Computing', 'Data Analytics',
    'Business Intelligence', 'Enterprise Solutions', 'Technology Consulting'
  ],
  author = 'Zion Tech Group',
  url = 'https://ziontechgroup.com',
  image = '/images/zion-tech-group-og-image.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  structuredData,
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
  facebookAppId,
  ogType = 'website',
  ogSiteName = 'Zion Tech Group',
  ogLocale = 'en_US',
  ogLocaleAlternate = ['es_ES', 'fr_FR', 'de_DE', 'zh_CN', 'ja_JP'],
  robots = 'index, follow',
  viewport = 'width=device-width, initial-scale=1, shrink-to-fit=no',
  charset = 'utf-8',
  themeColor = '#3b82f6',
  msapplicationTileColor = '#3b82f6',
  appleTouchIcon = '/icons/apple-touch-icon.png',
  favicon = '/favicon.ico',
  manifest = '/manifest.json',
  appleMobileWebAppTitle = 'Zion Tech Group',
  appleMobileWebAppCapable = true,
  appleMobileWebAppStatusBarStyle = 'default',
  formatDetection = {
    telephone: false,
    date: false,
    address: false,
    email: false
  },
  additionalMeta = [],
  additionalLinks = [],
  preload = [],
  prefetch = [],
  dnsPrefetch = ['//fonts.googleapis.com', '//cdn.jsdelivr.net'],
  preconnect = ['//fonts.googleapis.com', '//fonts.gstatic.com', '//cdn.jsdelivr.net']
}) => {
  // Generate structured data for the page
  const generateStructuredData = useCallback(() => {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebSite',
      name: title,
      description: description,
      url: canonical || url,
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
          width: 512,
          height: 512
        },
        sameAs: [
          'https://twitter.com/ziontechgroup',
          'https://linkedin.com/company/ziontechgroup',
          'https://facebook.com/ziontechgroup'
        ]
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonical || url
      }
    };

    // Add article-specific structured data
    if (type === 'article' && publishedTime) {
      Object.assign(baseStructuredData, {
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: {
          '@type': 'Person',
          name: author
        },
        articleSection: section,
        keywords: [...keywords, ...tags].join(', '),
        image: image
      });
    }

    // Add service-specific structured data
    if (type === 'service') {
      Object.assign(baseStructuredData, {
        '@type': 'Service',
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group'
        },
        areaServed: 'Worldwide',
        serviceType: section || 'Technology Services'
      });
    }

    // Merge with custom structured data
    return structuredData ? { ...baseStructuredData, ...structuredData } : baseStructuredData;
  }, [
    type, title, description, canonical, url, publishedTime, modifiedTime, 
    author, section, keywords, tags, image, structuredData
  ]);

  // Generate meta robots content
  const robotsContent = useMemo(() => {
    const parts = [];
    if (noindex) parts.push('noindex');
    if (nofollow) parts.push('nofollow');
    if (!noindex && !nofollow) parts.push('index', 'follow');
    return parts.join(', ');
  }, [noindex, nofollow]);

  // Generate format detection meta
  const formatDetectionContent = useMemo(() => {
    const parts = [];
    if (formatDetection.telephone === false) parts.push('telephone=no');
    if (formatDetection.date === false) parts.push('date=no');
    if (formatDetection.address === false) parts.push('address=no');
    if (formatDetection.email === false) parts.push('email=no');
    return parts.join(', ');
  }, [formatDetection]);

  // Preload critical resources
  useEffect(() => {
    preload.forEach(({ href, as, type, crossorigin }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (crossorigin) link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup preload links
      document.querySelectorAll('link[rel="preload"]').forEach(link => {
        if (preload.some(p => p.href === link.getAttribute('href'))) {
          link.remove();
        }
      });
    };
  }, [preload]);

  // Prefetch resources
  useEffect(() => {
    prefetch.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });
  }, [prefetch]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content={viewport} />
      <meta charSet={charset} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:locale" content={ogLocale} />
      {ogLocaleAlternate.map(locale => (
        <meta key={locale} property="og:locale:alternate" content={locale} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Facebook Meta Tags */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Article-specific Meta Tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Theme and App Meta Tags */}
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={msapplicationTileColor} />
      <meta name="apple-mobile-web-app-title" content={appleMobileWebAppTitle} />
      <meta name="apple-mobile-web-app-capable" content={appleMobileWebAppCapable ? 'yes' : 'no'} />
      <meta name="apple-mobile-web-app-status-bar-style" content={appleMobileWebAppStatusBarStyle} />
      
      {/* Format Detection */}
      {formatDetectionContent && (
        <meta name="format-detection" content={formatDetectionContent} />
      )}
      
      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta
          key={index}
          name={meta.name}
          property={meta.property}
          content={meta.content}
        />
      ))}
      
      {/* Favicon and Icons */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="manifest" href={manifest} />
      
      {/* Additional Links */}
      {additionalLinks.map((link, index) => (
        <link
          key={index}
          rel={link.rel}
          href={link.href}
          type={link.type}
          sizes={link.sizes}
          media={link.media}
        />
      ))}
      
      {/* DNS Prefetch */}
      {dnsPrefetch.map(domain => (
        <link key={domain} rel="dns-prefetch" href={domain} />
      ))}
      
      {/* Preconnect */}
      {preconnect.map(domain => (
        <link key={domain} rel="preconnect" href={domain} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
      
      {/* Performance and Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Content Security Policy */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:; frame-src 'self' https:;" />
      
      {/* Additional Performance Optimizations */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="123 Tech Street" />
      <meta name="business:contact_data:locality" content="San Francisco" />
      <meta name="business:contact_data:region" content="CA" />
      <meta name="business:contact_data:postal_code" content="94105" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-555-ZION-TECH" />
      <meta name="business:contact_data:email" content="contact@ziontechgroup.com" />
      <meta name="business:contact_data:website" content="https://ziontechgroup.com" />
      
      {/* Service Worker */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-167x167.png" />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Helmet>
  );
};

export default SEO;
