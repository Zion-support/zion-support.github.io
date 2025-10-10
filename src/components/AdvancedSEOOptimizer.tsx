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
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US',
      },
      sameAs: [
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/zion-tech-group',
      ],
    };

    return {
      ...baseStructuredData,
      ...seoData.structuredData,
    };
  }, [seoData, enableStructuredData]);

  const generateBreadcrumbStructuredData = useCallback(() => {
    if (!enableSchemaMarkup || !seoData.breadcrumbData) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgroup.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: seoData.title,
          item: seoData.canonicalUrl
        }
      ]
    };
  }, [seoData, enableSchemaMarkup]);

  const generateFAQStructuredData = useCallback(() => {
    if (!enableSchemaMarkup || !seoData.faqData) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: seoData.faqData
    };
  }, [seoData, enableSchemaMarkup]);

  const updateStructuredData = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Remove existing structured data
    if (structuredDataRef.current) {
      structuredDataRef.current.remove();
    }

    const structuredData = generateStructuredData();
    const breadcrumbData = generateBreadcrumbStructuredData();
    const faqData = generateFAQStructuredData();

    const allStructuredData = [structuredData, breadcrumbData, faqData].filter(Boolean);

    if (allStructuredData.length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(allStructuredData.length === 1 ? allStructuredData[0] : allStructuredData);
      script.id = 'advanced-seo-structured-data';
      document.head.appendChild(script);
      structuredDataRef.current = script;
    }
  }, [generateStructuredData, generateBreadcrumbStructuredData, generateFAQStructuredData]);

  useEffect(() => {
    updateStructuredData();
    return () => {
      if (structuredDataRef.current) {
        structuredDataRef.current.remove();
      }
    };
  }, [updateStructuredData]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <link rel="canonical" href={seoData.canonicalUrl} />
      
      {/* Open Graph Tags */}
      {enableOpenGraph && (
        <>
          <meta property="og:title" content={seoData.title} />
          <meta property="og:description" content={seoData.description} />
          <meta property="og:url" content={seoData.canonicalUrl} />
          <meta property="og:type" content={seoData.ogType || 'website'} />
          {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
        </>
      )}
      
      {/* Twitter Card Tags */}
      {enableTwitterCards && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoData.title} />
          <meta name="twitter:description" content={seoData.description} />
          {seoData.ogImage && <meta name="twitter:image" content={seoData.ogImage} />}
        </>
      )}
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;