import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
  language?: string;
  themeColor?: string;
  viewport?: string;
  robots?: string;
  additionalMeta?: Array<{ name: string; content: string }>;
  additionalLinks?: Array<{ rel: string; href: string }>;
  additionalScripts?: Array<{ type: string; content: string }>;
}

const defaultSEO = {
  title: 'Zion Tech Group - Leading Technology Solutions',
  description: 'Zion Tech Group provides cutting-edge technology solutions including AI, machine learning, cloud computing, cybersecurity, and digital transformation services.',
  keywords: 'technology, AI, machine learning, cloud computing, cybersecurity, digital transformation, software development',
  author: 'Zion Tech Group',
  ogType: 'website' as const,
  twitterCard: 'summary_large_image' as const,
  language: 'en',
  themeColor: '#0ea5e9',
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  robots: 'index, follow'
};

export function SEO({
  title,
  description,
  keywords,
  author,
  canonical,
  ogImage,
  ogType,
  twitterCard,
  structuredData,
  noIndex = false,
  noFollow = false,
  language,
  themeColor,
  viewport,
  robots,
  additionalMeta = [],
  additionalLinks = [],
  additionalScripts = []
}: SEOProps) {
  const seoTitle = title ? `${title} | Zion Tech Group` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoAuthor = author || defaultSEO.author;
  const seoOgType = ogType || defaultSEO.ogType;
  const seoTwitterCard = twitterCard || defaultSEO.twitterCard;
  const seoLanguage = language || defaultSEO.language;
  const seoThemeColor = themeColor || defaultSEO.themeColor;
  const seoViewport = viewport || defaultSEO.viewport;
  const seoRobots = noIndex || noFollow ? 
    `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}` : 
    defaultSEO.robots;

  // Default OG image
  const defaultOgImage = ogImage || '/images/zion-tech-group-og.jpg';
  
  // Canonical URL
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  // Default structured data
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: seoDescription,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'San Francisco',
      addressRegion: 'CA'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://www.facebook.com/ziontechgroup'
    ],
    ...structuredData
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={seoAuthor} />
      <meta name="robots" content={seoRobots} />
      <meta name="viewport" content={seoViewport} />
      <meta name="theme-color" content={seoThemeColor} />
      <meta name="language" content={seoLanguage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={seoOgType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={seoLanguage} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={seoTwitterCard} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={defaultOgImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}
      
      {/* Additional Links */}
      {additionalLinks.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
      
      {/* Additional Scripts */}
      {additionalScripts.map((script, index) => (
        <script key={index} type={script.type}>
          {script.content}
        </script>
      ))}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
    </Helmet>
  );
}