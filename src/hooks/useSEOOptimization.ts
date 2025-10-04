import { useEffect, useCallback } from 'react';

interface SEOOptions {
  enableStructuredData?: boolean;
  enableMetaTags?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
  enableCanonical?: boolean;
  enableSitemap?: boolean;
}

interface PageSEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: Record<string, unknown>;
}

export const useSEOOptimization = (options: SEOOptions = {}) => {
  const {
    enableStructuredData = true,
    enableMetaTags = true,
    enableOpenGraph = true,
    enableTwitterCards = true,
    enableCanonical = true
  } = options;

  // Update meta tags
  const updateMetaTag = useCallback((name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  }, []);

  // Update page title
  const updateTitle = useCallback((title: string) => {
    if (!enableMetaTags) return;
    
    document.title = title;
    
    // Update Open Graph title
    if (enableOpenGraph) {
      updateMetaTag('og:title', title);
    }
    
    // Update Twitter title
    if (enableTwitterCards) {
      updateMetaTag('twitter:title', title);
    }
  }, [enableMetaTags, enableOpenGraph, enableTwitterCards, updateMetaTag]);

  // Update meta description
  const updateDescription = useCallback((description: string) => {
    if (!enableMetaTags) return;
    
    updateMetaTag('description', description);
    
    // Update Open Graph description
    if (enableOpenGraph) {
      updateMetaTag('og:description', description);
    }
    
    // Update Twitter description
    if (enableTwitterCards) {
      updateMetaTag('twitter:description', description);
    }
  }, [enableMetaTags, enableOpenGraph, enableTwitterCards, updateMetaTag]);

  // Update Open Graph tags
  const updateOpenGraphTag = useCallback((property: string, content: string) => {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  }, []);

  // Update Twitter Card tags
  const updateTwitterTag = useCallback((name: string, content: string) => {
    let meta = document.querySelector(`meta[name="twitter:${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = `twitter:${name}`;
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  }, []);

  // Set canonical URL
  const setCanonical = useCallback((url: string) => {
    if (!enableCanonical) return;
    
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    
    canonical.href = url;
  }, [enableCanonical]);

  // Add structured data
  const addStructuredData = useCallback((data: Record<string, unknown>) => {
    if (!enableStructuredData) return;
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }, [enableStructuredData]);

  // Comprehensive SEO setup
  const setupSEO = useCallback((seoData: PageSEOData) => {
    const {
      title,
      description,
      keywords,
      canonical,
      ogTitle,
      ogDescription,
      ogImage,
      twitterCard,
      structuredData
    } = seoData;

    // Update title
    if (title) {
      updateTitle(title);
    }

    // Update description
    if (description) {
      updateDescription(description);
    }

    // Update keywords
    if (keywords && keywords.length > 0) {
      updateMetaTag('keywords', keywords.join(', '));
    }

    // Set canonical URL
    if (canonical) {
      setCanonical(canonical);
    }

    // Update Open Graph tags
    if (enableOpenGraph) {
      if (ogTitle) updateOpenGraphTag('og:title', ogTitle);
      if (ogDescription) updateOpenGraphTag('og:description', ogDescription);
      if (ogImage) updateOpenGraphTag('og:image', ogImage);
      updateOpenGraphTag('og:type', 'website');
      updateOpenGraphTag('og:url', window.location.href);
    }

    // Update Twitter Card tags
    if (enableTwitterCards) {
      if (twitterCard) updateTwitterTag('card', twitterCard);
      if (ogTitle) updateTwitterTag('title', ogTitle);
      if (ogDescription) updateTwitterTag('description', ogDescription);
      if (ogImage) updateTwitterTag('image', ogImage);
    }

    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }
  }, [
    updateTitle,
    updateDescription,
    updateMetaTag,
    setCanonical,
    enableOpenGraph,
    updateOpenGraphTag,
    enableTwitterCards,
    updateTwitterTag,
    addStructuredData
  ]);

  // Initialize default SEO tags
  useEffect(() => {
    if (!enableMetaTags) return;

    // Set default viewport
    let viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }

    // Set default charset
    let charset = document.querySelector('meta[charset]') as HTMLMetaElement;
    if (!charset) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'utf-8');
      document.head.appendChild(charset);
    }
  }, [enableMetaTags]);

  return {
    updateTitle,
    updateDescription,
    updateMetaTag,
    updateOpenGraphTag,
    updateTwitterTag,
    setCanonical,
    addStructuredData,
    setupSEO
  };
};