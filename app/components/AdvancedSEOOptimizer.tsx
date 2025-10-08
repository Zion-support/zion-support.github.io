import React, { useEffect, useRef } from 'react';

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
  structuredData?: Record<string, unknown>;
}

interface AdvancedSEOOptimizerProps {
  config: SEOData;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
  enableCanonicalUrl?: boolean;
  enableMetaTags?: boolean;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  config,
  enableStructuredData = true,
  enableOpenGraph = true,
  enableTwitterCards = true,
  enableCanonicalUrl = true,
  enableMetaTags = true,
}) => {
  const structuredDataRef = useRef<HTMLScriptElement | null>(null);

  // Update document title
  useEffect(() => {
    if (config.title) {
      document.title = config.title;
    }
  }, [config.title]);

<<<<<<< HEAD
  // const _addMetaTag = (name: string, content: string, attribute: string = 'name') => {
  //   const metaTag = document.createElement('meta');
  //   metaTag.setAttribute(attribute, name);
  //   metaTag.content = content;
  //   document.head.appendChild(metaTag);
  // };

  // const _updateCanonicalUrl = (url: string) => {
  //   let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  //   
  //   if (canonicalLink) {
  //     canonicalLink.href = url;
  //   } else {
  //     canonicalLink = document.createElement('link');
  //     canonicalLink.rel = 'canonical';
  //     canonicalLink.href = url;
  //     document.head.appendChild(canonicalLink);
  //   }
  // };origin/cursor/fix-errors-and-merge-to-main-6395

  // const _addStructuredData = (data: Record<string, unknown>) => {
  //   // Remove existing structured data
  //   // if (structuredDataRef.current) {
  //   //   structuredDataRef.current.remove();
  //   // }
  //   
  //   const script = document.createElement('script');
  //   script.type = 'application/ld+json';
  //   script.textContent = JSON.stringify(data);
  //   document.head.appendChild(script);
  // };

    // Add new structured data
    const _script = document.createElement('script');
=======
  // Update meta tags
  useEffect(() => {
    if (!enableMetaTags) return;

    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let metaTag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (metaTag) {
        metaTag.content = content;
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(attribute, name);
        metaTag.content = content;
        document.head.appendChild(metaTag);
      }
    };

    // Basic meta tags
    updateMetaTag('description', config.description);
    updateMetaTag('keywords', config.keywords.join(', '));
    updateMetaTag('author', 'Zion Tech Group');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    if (enableOpenGraph) {
      updateMetaTag('og:title', config.ogTitle || config.title, 'property');
      updateMetaTag('og:description', config.ogDescription || config.description, 'property');
      updateMetaTag('og:image', config.ogImage || '/og-image.jpg', 'property');
      updateMetaTag('og:url', config.ogUrl || config.canonicalUrl, 'property');
      updateMetaTag('og:type', 'website', 'property');
      updateMetaTag('og:site_name', 'Zion Tech Group', 'property');
    }

    // Twitter Card tags
    if (enableTwitterCards) {
      updateMetaTag('twitter:card', config.twitterCard || 'summary_large_image');
      updateMetaTag('twitter:title', config.twitterTitle || config.title);
      updateMetaTag('twitter:description', config.twitterDescription || config.description);
      updateMetaTag('twitter:image', config.twitterImage || config.ogImage || '/og-image.jpg');
    }
  }, [config, enableMetaTags, enableOpenGraph, enableTwitterCards]);

  // Update canonical URL
  useEffect(() => {
    if (!enableCanonicalUrl || !config.canonicalUrl) return;

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = config.canonicalUrl;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = config.canonicalUrl;
      document.head.appendChild(canonicalLink);
    }
  }, [config.canonicalUrl, enableCanonicalUrl]);

  // Add structured data
  useEffect(() => {
    if (!enableStructuredData || !config.structuredData) return;

    // Remove existing structured data
    if (structuredDataRef.current) {
      structuredDataRef.current.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(config.structuredData);
    document.head.appendChild(script);
    structuredDataRef.current = script;

    return () => {
      if (structuredDataRef.current) {
        structuredDataRef.current.remove();
      }
    };
  }, [config.structuredData, enableStructuredData]);

  // Helper functions for meta tag management
  const addMetaTag = (name: string, content: string, attribute: string = 'name') => {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute(attribute, name);
    metaTag.content = content;
    document.head.appendChild(metaTag);
  };

  const updateCanonicalUrl = (url: string) => {
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (canonicalLink) {
      canonicalLink.href = url;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = url;
      document.head.appendChild(canonicalLink);
    }
  };

  const addStructuredData = (data: Record<string, unknown>) => {
    // Remove existing structured data
    if (structuredDataRef.current) {
      structuredDataRef.current.remove();
    }
    
    const script = document.createElement('script');
>>>>>>> cursor/fix-errors-and-merge-to-main-d190
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    structuredDataRef.current = script;
  };

  const trackPageView = (seoConfig: SEOData) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown as { gtag: (command: string, targetId: string, config: Record<string, unknown>) => void }).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: seoConfig.title,
        page_location: seoConfig.canonicalUrl,
      });
    }
  };

  const trackPerformanceMetrics = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      
      if (fcp && 'gtag' in window) {
        (window as unknown as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag('event', 'timing_complete', {
          name: 'first_contentful_paint',
          value: Math.round(fcp.startTime),
        });
      }
    }
<<<<<<< HEAD
  };origin/cursor/fix-errors-and-merge-to-main-6395
=======
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-d190

  // Track page view and performance on mount
  useEffect(() => {
    trackPageView(config);
    trackPerformanceMetrics();
  }, [config]);

  // Expose methods for external use
  useEffect(() => {
    (window as any).seoOptimizer = {
      addMetaTag,
      updateCanonicalUrl,
      addStructuredData,
      trackPageView,
      trackPerformanceMetrics,
    };

    return () => {
      delete (window as any).seoOptimizer;
    };
  }, []);

  return null;
};

export default AdvancedSEOOptimizer;