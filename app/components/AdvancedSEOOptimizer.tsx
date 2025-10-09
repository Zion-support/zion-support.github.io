'use client';
import React, { useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
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

  // Generate structured data
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || !seoData.structuredData) {
      return null;
    }

    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seoData.title,
      description: seoData.description,
      url: seoData.canonicalUrl,
      ...seoData.structuredData,
    };

    if (seoData.author) {
      baseStructuredData.author = {
        '@type': 'Person',
        name: seoData.author,
      };
    }

    if (seoData.publishedTime) {
      baseStructuredData.datePublished = seoData.publishedTime;
    }

    if (seoData.modifiedTime) {
      baseStructuredData.dateModified = seoData.modifiedTime;
    }

    if (seoData.section) {
      baseStructuredData.articleSection = seoData.section;
    }

    if (seoData.tags && seoData.tags.length > 0) {
      baseStructuredData.keywords = seoData.tags.join(', ');
    }

    return baseStructuredData;
  }, [seoData, enableStructuredData]);

  // Generate Open Graph data
  const generateOpenGraphData = useCallback(() => {
    if (!enableOpenGraph) return {};

    return {
      'og:title': seoData.ogTitle || seoData.title,
      'og:description': seoData.ogDescription || seoData.description,
      'og:url': seoData.canonicalUrl,
      'og:type': seoData.ogType || 'website',
      'og:image': seoData.ogImage || '/og-image.jpg',
      'og:site_name': 'Zion Tech Group',
      'og:locale': 'en_US',
    };
  }, [seoData, enableOpenGraph]);

  // Generate Twitter Card data
  const generateTwitterCardData = useCallback(() => {
    if (!enableTwitterCards) return {};

    return {
      'twitter:card': seoData.twitterCard || 'summary_large_image',
      'twitter:title': seoData.twitterTitle || seoData.title,
      'twitter:description': seoData.twitterDescription || seoData.description,
      'twitter:image': seoData.twitterImage || seoData.ogImage || '/og-image.jpg',
      'twitter:site': '@ziontechgroup',
      'twitter:creator': '@ziontechgroup',
    };
  }, [seoData, enableTwitterCards]);

  // Generate meta tags
  const generateMetaTags = useCallback(() => {
    const metaTags = [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords.join(', ') },
      { name: 'author', content: seoData.author || 'Zion Tech Group' },
      { name: 'robots', content: seoData.robots || 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#3B82F6' },
      { name: 'msapplication-TileColor', content: '#3B82F6' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
    ];

    if (seoData.canonicalUrl) {
      metaTags.push({ name: 'canonical', content: seoData.canonicalUrl });
    }

    return metaTags;
  }, [seoData]);

  // Track page view
  const _trackPageView = useCallback(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: seoData.title,
        page_location: seoData.canonicalUrl,
      });
    }
  }, [seoData.title, seoData.canonicalUrl]);

  // Track performance metrics
  const _trackPerformanceMetrics = useCallback(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: seoData.title,
        page_location: seoData.canonicalUrl,
        custom_parameter_1: 'seo_optimized',
      });
    }
  }, [seoData.title, seoData.canonicalUrl]);

  // Update structured data
  useEffect(() => {
    if (!enableSchemaMarkup) return;

    const structuredData = generateStructuredData();
    if (!structuredData) return;

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    _structuredDataRef.current = script;

    return () => {
      if (_structuredDataRef.current) {
        _structuredDataRef.current.remove();
      }
    };
  }, [generateStructuredData, enableSchemaMarkup]);

  // Track analytics
  useEffect(() => {
    _trackPageView();
    _trackPerformanceMetrics();
  }, [_trackPageView, _trackPerformanceMetrics]);

  const openGraphData = generateOpenGraphData();
  const twitterCardData = generateTwitterCardData();
  const metaTags = generateMetaTags();

  return (
    );
};

export default AdvancedSEOOptimizer;