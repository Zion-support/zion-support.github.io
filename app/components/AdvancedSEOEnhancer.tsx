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

const AdvancedSEOEnhancer: React.FC<AdvancedSEOEnhancerProps> = ({
  seoData,
  enableAutoOptimization = true,
  enableStructuredData = true,
  enableSocialMeta = true
}) => {
  const [isOptimized, setIsOptimized] = useState(false);

  const optimizeTitle = useCallback((title: string) => {
    if (!enableAutoOptimization) return title;
    
    const maxLength = 60;
    if (title.length > maxLength) {
      return title.substring(0, maxLength - 3) + '...';
    }
    return title;
  }, [enableAutoOptimization]);

  const optimizeDescription = useCallback((description: string) => {
    if (!enableAutoOptimization) return description;
    
    const maxLength = 160;
    if (description.length > maxLength) {
      return description.substring(0, maxLength - 3) + '...';
    }
    return description;
  }, [enableAutoOptimization]);

  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData) return null;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: seoData.title,
      description: seoData.description,
      url: seoData.canonicalUrl,
      logo: seoData.ogImage,
      ...seoData.structuredData
    };
  }, [enableStructuredData, seoData]);

  useEffect(() => {
    if (enableAutoOptimization) {
      // Update document title
      document.title = optimizeTitle(seoData.title);
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', optimizeDescription(seoData.description));
      
      setIsOptimized(true);
    }
  }, [seoData, enableAutoOptimization, optimizeTitle, optimizeDescription]);

  const structuredData = generateStructuredData();

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{optimizeTitle(seoData.title)}</title>
      <meta name="description" content={optimizeDescription(seoData.description)} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <link rel="canonical" href={seoData.canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      {enableSocialMeta && (
        <>
          <meta property="og:title" content={seoData.title} />
          <meta property="og:description" content={seoData.description} />
          <meta property="og:image" content={seoData.ogImage} />
          <meta property="og:url" content={seoData.canonicalUrl} />
          <meta property="og:type" content={seoData.ogType} />
        </>
      )}

      {/* Twitter Card Meta Tags */}
      {enableSocialMeta && (
        <>
          <meta name="twitter:card" content={seoData.twitterCard} />
          <meta name="twitter:title" content={seoData.title} />
          <meta name="twitter:description" content={seoData.description} />
          <meta name="twitter:image" content={seoData.ogImage} />
        </>
      )}

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

export default AdvancedSEOEnhancer;