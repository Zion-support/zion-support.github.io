import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: object;
}

export const useSEO = (config: SEOConfig = {}) => {
  const location = useLocation();

  const updateMetaTag = useCallback((name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }, []);

  const updateCanonicalUrl = useCallback((url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, []);

  const updateOpenGraphTags = useCallback((config: SEOConfig) => {
    const ogTags = [
      { property: 'og:title', content: config.title },
      { property: 'og:description', content: config.description },
      { property: 'og:type', content: config.ogType || 'website' },
      { property: 'og:url', content: config.canonicalUrl || window.location.href },
      { property: 'og:image', content: config.ogImage },
      { property: 'og:site_name', content: 'Zion Tech Group' }
    ];

    ogTags.forEach(({ property, content }) => {
      if (content) {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      }
    });
  }, []);

  const updateTwitterTags = useCallback((config: SEOConfig) => {
    const twitterTags = [
      { name: 'twitter:card', content: config.twitterCard || 'summary_large_image' },
      { name: 'twitter:title', content: config.title },
      { name: 'twitter:description', content: config.description },
      { name: 'twitter:image', content: config.ogImage }
    ];

    twitterTags.forEach(({ name, content }) => {
      if (content) {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      }
    });
  }, []);

  const addStructuredData = useCallback((data: object) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    
    // Remove existing structured data
    const existing = document.getElementById('structured-data');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
  }, []);

  const addPageStructuredData = useCallback((pathname: string) => {
    const baseUrl = 'https://ziontechgroup.com';
    const fullUrl = `${baseUrl}${pathname}`;
    
    const pageStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: config.title || 'Zion Tech Group',
      description: config.description || 'Advanced AI and IT Solutions',
      url: fullUrl,
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`
        }
      }
    };

    addStructuredData(pageStructuredData);
  }, [config.title, config.description, addStructuredData]);

  useEffect(() => {
    // Update document title
    if (config.title) {
      document.title = `${config.title} | Zion Tech Group`;
    }

    // Update meta description
    if (config.description) {
      updateMetaTag('description', config.description);
    }

    // Update meta keywords
    if (config.keywords) {
      updateMetaTag('keywords', config.keywords);
    }

    // Update canonical URL
    if (config.canonicalUrl) {
      updateCanonicalUrl(config.canonicalUrl);
    } else {
      updateCanonicalUrl(window.location.href);
    }

    // Update Open Graph tags
    updateOpenGraphTags(config);

    // Update Twitter tags
    updateTwitterTags(config);

    // Add structured data
    if (config.structuredData) {
      addStructuredData(config.structuredData);
    }

    // Add page-specific structured data
    addPageStructuredData(location.pathname);

  }, [config, location.pathname, updateMetaTag, updateCanonicalUrl, updateOpenGraphTags, updateTwitterTags, addStructuredData, addPageStructuredData]);

  return {
    updateMetaTag,
    updateCanonicalUrl,
    addStructuredData
  };
};