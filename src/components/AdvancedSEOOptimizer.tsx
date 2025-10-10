'use client';
import React, { useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>;
  breadcrumbData?: Record<string, unknown>;
  faqData?: Record<string, unknown>;
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
  enableSchemaMarkup = true
}) => {
  const structuredDataRef = useRef<HTMLScriptElement | null>(null);
  
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || !seoData.structuredData) return null;
    
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Advanced AI and IT Solutions',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
      sameAs: [
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/zion-tech-group',
      ],
      ...seoData.structuredData
    };

    return baseStructuredData;
  }, [seoData.structuredData, enableStructuredData]);

  const generateBreadcrumbData = useCallback(() => {
    if (!seoData.breadcrumbData) return null;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: seoData.breadcrumbData
    };
  }, [seoData.breadcrumbData]);

  const generateFAQData = useCallback(() => {
    if (!seoData.faqData) return null;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: seoData.faqData
    };
  }, [seoData.faqData]);

  useEffect(() => {
    if (!enableSchemaMarkup) return;

    // Remove existing structured data script
    if (structuredDataRef.current) {
      structuredDataRef.current.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    const structuredData = generateStructuredData();
    const breadcrumbData = generateBreadcrumbData();
    const faqData = generateFAQData();
    
    const allStructuredData = [structuredData, breadcrumbData, faqData].filter(Boolean);
    
    if (allStructuredData.length > 0) {
      script.textContent = JSON.stringify(allStructuredData.length === 1 ? allStructuredData[0] : allStructuredData);
      document.head.appendChild(script);
      structuredDataRef.current = script;
    }

    return () => {
      if (structuredDataRef.current) {
        structuredDataRef.current.remove();
      }
    };
  }, [generateStructuredData, generateBreadcrumbData, generateFAQData, enableSchemaMarkup]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <link rel="canonical" href={seoData.canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      {enableOpenGraph && (
        <>
          <meta property="og:title" content={seoData.title} />
          <meta property="og:description" content={seoData.description} />
          <meta property="og:url" content={seoData.canonicalUrl} />
          <meta property="og:type" content={seoData.ogType || 'website'} />
          {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
          <meta property="og:site_name" content="Zion Tech Group" />
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      {enableTwitterCards && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoData.title} />
          <meta name="twitter:description" content={seoData.description} />
          {seoData.ogImage && <meta name="twitter:image" content={seoData.ogImage} />}
        </>
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Performance and Security Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;