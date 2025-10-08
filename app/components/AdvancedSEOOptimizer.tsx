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

interface SEOConfig {
  title: string;
  description: string;
  url: string;
  canonicalUrl: string;
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
  const structuredDataRef = useRef<HTMLScriptElement | null>(null);

  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || !seoData.structuredData) return null;

    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: seoData.description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/Zion-Holdings',
      ],
      ...seoData.structuredData,
    };

    return baseStructuredData;
  }, [seoData, enableStructuredData]);

  const generateBreadcrumbStructuredData = useCallback(() => {
    if (!enableSchemaMarkup) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgroup.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: seoData.title,
          item: seoData.canonicalUrl,
        },
      ],
    };
  }, [seoData, enableSchemaMarkup]);

  const addCanonicalLink = useCallback(() => {
    // Remove existing canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = seoData.canonicalUrl;
    document.head.appendChild(canonicalLink);
  }, [seoData.canonicalUrl]);

  const addStructuredData = (data: Record<string, unknown>) => {
    // Remove existing structured data
    if (structuredDataRef.current) {
      structuredDataRef.current.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    document.head.appendChild(script);
    structuredDataRef.current = script;
  };

  const trackPageView = (config: SEOConfig) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown as { gtag: (command: string, targetId: string, config: Record<string, unknown>) => void }).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: config.title,
        page_location: config.canonicalUrl,
      });
    }
  };

  useEffect(() => {
    // Add canonical link
    addCanonicalLink();

    // Add structured data
    const structuredData = generateStructuredData();
    if (structuredData) {
      addStructuredData(structuredData);
    }

    // Add breadcrumb structured data
    const breadcrumbData = generateBreadcrumbStructuredData();
    if (breadcrumbData) {
      addStructuredData(breadcrumbData);
    }

    // Track page view
    trackPageView({
      title: seoData.title,
      description: seoData.description,
      url: seoData.canonicalUrl,
      canonicalUrl: seoData.canonicalUrl,
    });

    // Cleanup on unmount
    return () => {
      if (structuredDataRef.current) {
        structuredDataRef.current.remove();
      }
    };
  }, [seoData, addCanonicalLink, generateStructuredData, generateBreadcrumbStructuredData]);

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
          <meta property="og:title" content={seoData.ogTitle || seoData.title} />
          <meta property="og:description" content={seoData.ogDescription || seoData.description} />
          <meta property="og:image" content={seoData.ogImage || 'https://ziontechgroup.com/og-image.jpg'} />
          <meta property="og:url" content={seoData.canonicalUrl} />
          <meta property="og:type" content={seoData.ogType || 'website'} />
          <meta property="og:site_name" content="Zion Tech Group" />
        </>
      )}

      {/* Twitter Card Tags */}
      {enableTwitterCards && (
        <>
          <meta name="twitter:card" content={seoData.twitterCard || 'summary_large_image'} />
          <meta name="twitter:title" content={seoData.twitterTitle || seoData.title} />
          <meta name="twitter:description" content={seoData.twitterDescription || seoData.description} />
          <meta name="twitter:image" content={seoData.twitterImage || 'https://ziontechgroup.com/twitter-image.jpg'} />
        </>
      )}

      {/* Additional Meta Tags */}
      {seoData.robots && <meta name="robots" content={seoData.robots} />}
      {seoData.author && <meta name="author" content={seoData.author} />}
      {seoData.publishedTime && <meta property="article:published_time" content={seoData.publishedTime} />}
      {seoData.modifiedTime && <meta property="article:modified_time" content={seoData.modifiedTime} />}
      {seoData.section && <meta property="article:section" content={seoData.section} />}
      {seoData.tags && seoData.tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;