'use client';
import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - AI & Technology Solutions',
  description = 'Leading provider of AI solutions, IT services, and technology consulting. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, IT services, technology consulting, artificial intelligence, machine learning, cloud computing',
  canonical,
  ogTitle,
  ogDescription,
  ogImage = '/og-image.jpg',
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData
}) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com';
  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl);
  const fullOgUrl = ogUrl || fullCanonical;
  
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Leading provider of AI solutions, IT services, and technology consulting',
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      availableLanguage: 'English'
    }
  };

  const mergedStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#0ea5e9" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mergedStructuredData)
        }}
      />
    </Head>
  );
};

export default EnhancedSEOHead;