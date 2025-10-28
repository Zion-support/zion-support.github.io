'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
}

interface SEOEnhancerProps {
  seoData: SEOData;
  enableSocialMeta?: boolean;
  enableStructuredData?: boolean;
  enableAnalytics?: boolean;
}

const AdvancedSEOEnhancer: React.FC<SEOEnhancerProps> = ({
  seoData,
  enableSocialMeta = true,
  enableStructuredData = true,
  enableAnalytics = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate structured data
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || !seoData.structuredData) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: seoData.title,
      description: seoData.description,
      url: seoData.canonicalUrl,
      ...seoData.structuredData,
    };
  }, [enableStructuredData, seoData]);

  // Initialize analytics
  const initializeAnalytics = useCallback(() => {
    if (!enableAnalytics || typeof window === 'undefined') return;

    // Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: seoData.title,
        page_location: seoData.canonicalUrl,
      });
    }
  }, [enableAnalytics, seoData]);

  // Effect to initialize on mount
  useEffect(() => {
    setIsLoaded(true);
    initializeAnalytics();
  }, [initializeAnalytics]);

  const structuredData = generateStructuredData();

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <link rel="canonical" href={seoData.canonicalUrl} />

      {/* Open Graph Meta Tags */}
      {enableSocialMeta && (
        <>
          <meta property="og:title" content={seoData.ogTitle || seoData.title} />
          <meta property="og:description" content={seoData.ogDescription || seoData.description} />
          <meta property="og:image" content={seoData.ogImage || '/default-og-image.jpg'} />
          <meta property="og:url" content={seoData.ogUrl || seoData.canonicalUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Zion Tech Group" />
        </>
      )}

      {/* Twitter Card Meta Tags */}
      {enableSocialMeta && (
        <>
          <meta name="twitter:card" content={seoData.twitterCard || 'summary_large_image'} />
          <meta name="twitter:title" content={seoData.twitterTitle || seoData.title} />
          <meta name="twitter:description" content={seoData.twitterDescription || seoData.description} />
          <meta name="twitter:image" content={seoData.twitterImage || seoData.ogImage || '/default-twitter-image.jpg'} />
        </>
      )}

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
    </Head>
  );
};

export default AdvancedSEOEnhancer;