import React, { useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

interface AdvancedSEOOptimizerProps {
  seoData: SEOData;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
  enableSchemaMarkup?: boolean;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  seoData,
  enableStructuredData = true,
  enableOpenGraph = true,
  enableTwitterCards = true,
  enableSchemaMarkup = true,
}) => {
  const _structuredDataRef = useRef<HTMLScriptElement | null>(null);
  const _perfData = typeof performance !== 'undefined' && performance.getEntriesByType 
    ? performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    : null;

  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || !seoData.structuredData) return null;

    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: seoData.description,
      ...seoData.structuredData,
    };

    return baseStructuredData;
  }, [enableStructuredData, seoData.structuredData, seoData.description]);

  const addStructuredData = useCallback((data: Record<string, unknown>) => {
    // Remove existing structured data
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    document.head.appendChild(script);
    _structuredDataRef.current = script;
  }, []);

  const trackPerformanceMetrics = useCallback(() => {
    if (_perfData) {
      (window as any).gtag('event', 'page_load_performance', {
        event_category: 'Performance',
        event_label: 'Page Load',
        value: Math.round(_perfData.loadEventEnd - _perfData.fetchStart),
      });
    }
  }, [_perfData]);

  useEffect(() => {
    // Add structured data
    const structuredData = generateStructuredData();
    if (structuredData) {
      addStructuredData(structuredData);
    }

    // Track performance metrics
    trackPerformanceMetrics();
  }, [generateStructuredData, addStructuredData, trackPerformanceMetrics]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <link rel="canonical" href={seoData.canonicalUrl} />
      
      {/* Robots */}
      {seoData.robots && <meta name="robots" content={seoData.robots} />}
      
      {/* Author */}
      {seoData.author && <meta name="author" content={seoData.author} />}
      
      {/* Open Graph */}
      {enableOpenGraph && (
        <>
          <meta property="og:title" content={seoData.ogTitle || seoData.title} />
          <meta property="og:description" content={seoData.ogDescription || seoData.description} />
          <meta property="og:url" content={seoData.canonicalUrl} />
          <meta property="og:type" content={seoData.ogType || 'website'} />
          {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
        </>
      )}
      
      {/* Twitter Cards */}
      {enableTwitterCards && (
        <>
          <meta name="twitter:card" content={seoData.twitterCard || 'summary_large_image'} />
          <meta name="twitter:title" content={seoData.twitterTitle || seoData.title} />
          <meta name="twitter:description" content={seoData.twitterDescription || seoData.description} />
          {seoData.twitterImage && <meta name="twitter:image" content={seoData.twitterImage} />}
        </>
      )}
      
      {/* Article specific meta tags */}
      {seoData.publishedTime && <meta property="article:published_time" content={seoData.publishedTime} />}
      {seoData.modifiedTime && <meta property="article:modified_time" content={seoData.modifiedTime} />}
      {seoData.section && <meta property="article:section" content={seoData.section} />}
      {seoData.tags && seoData.tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;