'use client';
import React, { useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: any;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

interface AdvancedSEOOptimizerProps {
  seoData?: SEOData;
  enableStructuredData?: boolean;
  enableMetaTags?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCard?: boolean;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  seoData = {},
  enableStructuredData = true,
  enableMetaTags = true,
  enableOpenGraph = true,
  enableTwitterCard = true
}) => {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    address: {
      '@type': 'PostalAddress',
      ...seoData.structuredData,
    },
  };

  if (seoData.author) {
    baseStructuredData.author = {
      '@type': 'Person',
      name: seoData.author
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

  // Generate Open Graph data
  const generateOpenGraphData = useCallback(() => {
    if (!enableOpenGraph) return {};

    return {
      'og:title': seoData.title || 'Zion Tech Group',
      'og:description': seoData.description || 'Advanced AI and IT Solutions',
      'og:image': seoData.ogImage || '/images/og-default.jpg',
      'og:url': seoData.canonicalUrl || window.location.href,
      'og:type': 'website'
    };
  }, [seoData, enableOpenGraph]);

  // Generate Twitter Card data
  const generateTwitterCardData = useCallback(() => {
    if (!enableTwitterCard) return {};

    return {
      'twitter:card': seoData.twitterCard || 'summary_large_image',
      'twitter:title': seoData.title || 'Zion Tech Group',
      'twitter:description': seoData.description || 'Advanced AI and IT Solutions',
      'twitter:image': seoData.ogImage || '/images/og-default.jpg'
    };
  }, [seoData, enableTwitterCard]);

  const structuredData = useCallback(() => {
    if (!enableStructuredData) return null;

    return baseStructuredData;
  }, [seoData, enableStructuredData]);

  const openGraphData = generateOpenGraphData();
  const twitterCardData = generateTwitterCardData();
  const structuredDataJson = structuredData();

  return (
    <Helmet>
      {enableMetaTags && (
        <>
          {seoData.title && <title>{seoData.title}</title>}
          {seoData.description && <meta name="description" content={seoData.description} />}
          {seoData.keywords && seoData.keywords.length > 0 && (
            <meta name="keywords" content={seoData.keywords.join(', ')} />
          )}
          {seoData.canonicalUrl && <link rel="canonical" href={seoData.canonicalUrl} />}
        </>
      )}
      
      {Object.entries(openGraphData).map(([key, value]) => (
        <meta key={key} property={key} content={value} />
      ))}
      
      {Object.entries(twitterCardData).map(([key, value]) => (
        <meta key={key} name={key} content={value} />
      ))}
      
      {structuredDataJson && (
        <script type="application/ld+json">
          {JSON.stringify(structuredDataJson)}
        </script>
      )}
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;