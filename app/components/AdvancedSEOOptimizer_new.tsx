'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  structuredData: any;
}

interface SEOOptimizerProps {
  enableMetaOptimization?: boolean;
  enableStructuredData?: boolean;
  enableSitemapGeneration?: boolean;
  enableRobotsTxt?: boolean;
  enableSchemaMarkup?: boolean;
  onSEOUpdate?: (seoData: SEOData) => void;
}

const AdvancedSEOOptimizerNew: React.FC<SEOOptimizerProps> = ({
  enableMetaOptimization = true,
  enableStructuredData = true,
  enableSitemapGeneration = true,
  enableRobotsTxt = true,
  enableSchemaMarkup = true,
  onSEOUpdate,
}) => {
  const [seoData, setSeoData] = useState<SEOData>({
    title: '',
    description: '',
    keywords: [],
    canonicalUrl: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    twitterCard: 'summary_large_image',
    twitterTitle: '',
    twitterDescription: '',
    twitterImage: '',
    structuredData: null,
  });

  const optimizeMetaTags = useCallback(() => {
    if (!enableMetaOptimization || typeof window === 'undefined') return;

    const title = document.title || 'Zion Tech Group - AI and IT Solutions';
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || 
                      'Professional AI and IT solutions by Zion Tech Group. Advanced technology services for your business.';
    const keywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content')?.split(',') || 
                    ['AI solutions', 'IT services', 'technology', 'Zion Tech Group'];
    const canonicalUrl = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || 
                        window.location.href;

    setSeoData(prev => ({
      ...prev,
      title,
      description,
      keywords,
      canonicalUrl,
      ogTitle: title,
      ogDescription: description,
      twitterTitle: title,
      twitterDescription: description,
    }));
  }, [enableMetaOptimization]);

  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || typeof window === 'undefined') return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Professional AI and IT solutions provider",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
      ]
    };

    setSeoData(prev => ({
      ...prev,
      structuredData,
    }));
  }, [enableStructuredData]);

  const generateSitemap = useCallback(() => {
    if (!enableSitemapGeneration || typeof window === 'undefined') return;

    // This would typically be done server-side
    console.log('Sitemap generation would be implemented here');
  }, [enableSitemapGeneration]);

  const generateRobotsTxt = useCallback(() => {
    if (!enableRobotsTxt || typeof window === 'undefined') return;

    // This would typically be done server-side
    console.log('Robots.txt generation would be implemented here');
  }, [enableRobotsTxt]);

  const addSchemaMarkup = useCallback(() => {
    if (!enableSchemaMarkup || typeof window === 'undefined') return;

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    if (seoData.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(seoData.structuredData);
      document.head.appendChild(script);
    }
  }, [enableSchemaMarkup, seoData.structuredData]);

  useEffect(() => {
    optimizeMetaTags();
    generateStructuredData();
    generateSitemap();
    generateRobotsTxt();
  }, [optimizeMetaTags, generateStructuredData, generateSitemap, generateRobotsTxt]);

  useEffect(() => {
    addSchemaMarkup();
  }, [addSchemaMarkup]);

  useEffect(() => {
    if (onSEOUpdate) {
      onSEOUpdate(seoData);
    }
  }, [seoData, onSEOUpdate]);

  return (
    <div className="seo-optimizer">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content={seoData.twitterCard} />
        <meta name="twitter:title" content={seoData.twitterTitle} />
        <meta name="twitter:description" content={seoData.twitterDescription} />
        <meta name="twitter:image" content={seoData.twitterImage} />
      </Helmet>
      
      <div className="seo-status">
        <h3>SEO Optimization Status</h3>
        <div className="seo-metrics">
          <div className="metric">
            <span className="metric-label">Title:</span>
            <span className="metric-value">{seoData.title ? '✓' : '✗'}</span>
          </div>
          <div className="metric">
            <span className="metric-label">Description:</span>
            <span className="metric-value">{seoData.description ? '✓' : '✗'}</span>
          </div>
          <div className="metric">
            <span className="metric-label">Keywords:</span>
            <span className="metric-value">{seoData.keywords.length > 0 ? '✓' : '✗'}</span>
          </div>
          <div className="metric">
            <span className="metric-label">Canonical URL:</span>
            <span className="metric-value">{seoData.canonicalUrl ? '✓' : '✗'}</span>
          </div>
          <div className="metric">
            <span className="metric-label">Structured Data:</span>
            <span className="metric-value">{seoData.structuredData ? '✓' : '✗'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSEOOptimizerNew;