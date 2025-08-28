import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
}

export function SEO({
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Transform your business with Zion Tech Group\'s cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology.',
  keywords = 'AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation, machine learning, cloud computing, cybersecurity, blockchain, IoT, Zion Tech Group',
  author = 'Zion Tech Group',
  canonical = '',
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  lang = 'en'
}: SEOProps) {
  // Build full canonical URL
  const fullCanonical = canonical || window.location.href;
  
  // Default structured data for organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    alternateName: 'Zion Tech',
    url: 'https://ziontechgroup.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ziontechgroup.com/images/logo.png',
      width: 512,
      height: 512
    },
    description: 'Leading AI & Technology Solutions Provider specializing in artificial intelligence, quantum computing, and digital transformation',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@ziontechgroup.com',
      availableLanguage: ['English']
    },
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://facebook.com/ziontechgroup',
      'https://github.com/ziontechgroup'
    ],
    offers: {
      '@type': 'Offer',
      category: 'Technology Services',
      description: 'AI, Quantum Computing, and Digital Transformation Solutions'
    }
  };

  // Merge custom structured data with default
  const finalStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="language" content={lang} />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={lang} />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Performance & Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="Content-Language" content={lang} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      
      {/* Preconnect & DNS Prefetch for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3B82F6" />
      
      {/* Web App Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="subject" content="Technology, AI, Quantum Computing" />
      <meta name="category" content="Technology Services" />
      <meta name="classification" content="Business" />
      <meta name="audience" content="Businesses, Developers, Technology Leaders" />
      <meta name="target" content="Global" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="subject" content="Technology, AI, Quantum Computing" />
      <meta name="category" content="Technology Services" />
      <meta name="classification" content="Business" />
      <meta name="audience" content="Businesses, Developers, Technology Leaders" />
      <meta name="target" content="Global" />
      
      {/* Mobile & App Specific */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/css/critical.css" as="style" />
      <link rel="preload" href="/images/hero-bg.jpg" as="image" />
      
      {/* Alternative Languages */}
      <link rel="alternate" hrefLang="en" href="https://ziontechgroup.com" />
      <link rel="alternate" hrefLang="en-US" href="https://ziontechgroup.com" />
      <link rel="alternate" hrefLang="x-default" href="https://ziontechgroup.com" />
      
      {/* RSS Feed */}
      <link rel="alternate" type="application/rss+xml" title="Zion Tech Group RSS Feed" href="/rss.xml" />
      <link rel="alternate" type="application/atom+xml" title="Zion Tech Group Atom Feed" href="/atom.xml" />
      
      {/* JSON Feed */}
      <link rel="alternate" type="application/feed+json" title="Zion Tech Group JSON Feed" href="/feed.json" />
    </Helmet>
  );
}
