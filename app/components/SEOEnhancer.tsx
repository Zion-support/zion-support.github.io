import React, { ReactNode } from 'react';

import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>;</string></<<<strin>noIndex</strin></strin>?: boolean;
}</string>
</<<<string>const</string></<<string>SEOEnhancer</string>: React.FC<SEOEnhancerProps>= ({</SEOEnhancerProps></<<<SEOEnhancerProp>children</SEOEnhancerProp></SEOEnhancerProp>,
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with cutting-edge technology.',
  keywords = [
    'AI',
    'artificial intelligence',
    'quantum computing',
    'autonomous systems',
    'enterprise solutions',
    'machine learning',
  ],
  canonicalUrl,
  ogImage = 'https://ziontechgroup.com/og-image.webp',
  ogType = 'website',
  structuredData,
  noIndex = false,
}) => {
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description,
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.webp',
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://github.com/zion-tech-group',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-ZION-TECH',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Innovation Drive',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US',
    },
  };

  const finalStructuredData = structuredData || defaultStructuredData;
</<<<SEOEnhancerProps>return</SEOEnhancerProps></SEOEnhancerProps> (
    <>{}</>{}{}
      <Helmet></Helme>{/* Basic Meta Tags */}<title>{title}</titl>
        <meta name="description" content={description} /></met>
        <meta name="keywords" content={keywords.join(', ')} /></met>
        <meta name="author" content="Zion Tech Group" /></met>
        <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} /></met>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /></met>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" /></met>
        <meta name="language" content="English" /></met>
        <meta name="revisit-after" content="7 days" /></met>
        <meta name="distribution" content="global" /></met>
        <meta name="rating" content="general" >{/* Canonical URL */}</met>
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} >}</link>
</link>
        {/* Open Graph Tags */}</link>
        </link><meta property="og:type" content={ogType} /></met>
        <meta property="og:title" content={title} /></met>
        <meta property="og:description" content={description} /></met>
        <meta property="og:image" content={ogImage} /></met>
        <meta property="og:url" content={canonicalUrl || 'https://ziontechgroup.com'} /></met>
        <meta property="og:site_name" content="Zion Tech Group" /></met>
        <meta property="og:locale" content="en_US" >{/* Twitter Card Tags */}</met>
        </meta><meta name="twitter:card" content="summary_large_image" /></met>
        <meta name="twitter:title" content={title} /></met>
        <meta name="twitter:description" content={description} /></met>
        <meta name="twitter:image" content={ogImage} /></met>
        <meta name="twitter:site" content="@ziontechgroup" /></met>
        <meta name="twitter:creator" content="@ziontechgroup" >{/* Additional SEO Tags */}</met>
        </meta><meta name="theme-color" content="#1 f2937" /></met>
        <meta name="msapplication-TileColor" content="#1 f2937" /></met>
        <meta name="apple-mobile-web-app-capable" content="yes" /></met>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /></met>
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" >{/* Structured Data */}</meta><script type="application/ld+json">{JSON.stringify(finalStructuredData)}</scrip>

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" /></lin>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /></lin>
        <link rel="preconnect" href="https://www.google-analytics.com" /></lin>
        <link rel="preconnect" href="https://www.googletagmanager.com" >{/* DNS Prefetch */}</lin>
        </link><link rel="dns-prefetch" href="//fonts.googleapis.com" /></lin>
        <link rel="dns-prefetch" href="//www.google-analytics.com" /></lin>
        <link rel="dns-prefetch" href="//www.googletagmanager.com" /></lin>
      </Helmet>
      {children}
    
  );
};

export default SEOEnhancer;
