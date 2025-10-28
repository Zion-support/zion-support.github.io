'use client';
import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  structuredData: Record<string, unknown>;
}
interface AdvancedSEOEnhancerProps {
  seoData: SEOData;
  enableAutoOptimization?: boolean;
  enableStructuredData?: boolean;
  enableSocialMeta?: boolean;
}
export const AdvancedSEOEnhancer: React.FC<AdvancedSEOEnhancerProps> = ({
  seoData,
  enableAutoOptimization = true,
  enableStructuredData = true,
  enableSocialMeta = true,
}) => {
  const [optimizedData, setOptimizedData] = useState<SEOData>(seoData);
  // Auto-optimize SEO data
  const optimizeSEOData = useCallback(() => {
    if (!enableAutoOptimization) return;
    try {
      const optimized = { ...seoData };
      // Optimize title length (50-60 characters)
      if (optimized.title.length > 60) {
        optimized.title = optimized.title.substring(0, 57) + '...';
      }
      // Optimize description length (150-160 characters)
      if (optimized.description.length > 160) {
        optimized.description = optimized.description.substring(0, 157) + '...';
      }
      // Ensure keywords are unique and relevant
      optimized.keywords = [...new Set(optimized.keywords)].slice(0, 10);
      // Generate canonical URL if not provided
      if (!optimized.canonicalUrl && typeof window !== 'undefined') {
        optimized.canonicalUrl = window.location.href;
      }
      // Generate OG image if not provided
      if (!optimized.ogImage) {
        optimized.ogImage = '/images/og-default.jpg';
      }
      setOptimizedData(optimized);
    } catch (error) {
      console.warn('SEO optimization error:', error);
    }
  }, [seoData, enableAutoOptimization]);
  // Generate structured data
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData) return null;
    try {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Zion Tech Group',
        description: optimizedData.description,
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
        sameAs: [
          'https://twitter.com/ziontechgroup',
          'https://linkedin.com/company/ziontechgroup',
          'https://github.com/ziontechgroup',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-0123',
          contactType: 'customer service',
          availableLanguage: 'English',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Tech Street',
          addressLocality: 'San Francisco',
          addressRegion: 'CA',
          postalCode: '94105',
          addressCountry: 'US',
        },
        ...optimizedData.structuredData,
      };
      return structuredData;
    } catch (error) {
      console.warn('Structured data generation error:', error);
      return null;
    }
  }, [optimizedData, enableStructuredData]);
  // Initialize SEO optimization
  useEffect(() => {
    optimizeSEOData();
  }, [optimizeSEOData]);
  const structuredData = generateStructuredData();
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{optimizedData.title}</title>
      <meta name="description" content={optimizedData.description} />
      <meta name="keywords" content={optimizedData.keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Canonical URL */}
      <link rel="canonical" href={optimizedData.canonicalUrl} />
      {/* Open Graph Meta Tags */}
      {enableSocialMeta && (
        <>
          <meta property="og:title" content={optimizedData.title} />
          <meta property="og:description" content={optimizedData.description} />
          <meta property="og:image" content={optimizedData.ogImage} />
          <meta property="og:url" content={optimizedData.canonicalUrl} />
          <meta property="og:type" content={optimizedData.ogType || 'website'} />
          <meta property="og:site_name" content="Zion Tech Group" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content={optimizedData.twitterCard || 'summary_large_image'} />
          <meta name="twitter:title" content={optimizedData.title} />
          <meta name="twitter:description" content={optimizedData.description} />
          <meta name="twitter:image" content={optimizedData.ogImage} />
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
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Head>
  );
};
export default AdvancedSEOEnhancer;