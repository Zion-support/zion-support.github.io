import { useCallback, useMemo } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: any;
}

interface SEOConfig {
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  twitterHandle: string;
}

const defaultConfig: SEOConfig = {
  siteName: 'Zion Tech Group',
  defaultTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  defaultDescription: 'Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.',
  defaultImage: 'https://ziontechgroup.com/og-image.jpg',
  twitterHandle: '@ziontechgroup'
};

export function useSEO(config: Partial<SEOConfig> = {}) {
  const finalConfig = useMemo(() => ({ ...defaultConfig, ...config }), [config]);

  const updateSEO = useCallback((data: SEOData) => {
    const {
      title,
      description,
      keywords,
      canonical,
      ogImage = finalConfig.defaultImage,
      structuredData
    } = data;

    // Update title
    const fullTitle = title.includes(finalConfig.siteName) ? title : `${title} | ${finalConfig.siteName}`;
    document.title = fullTitle;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);
    if (canonical) updateMetaTag('og:url', canonical, true);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:site', finalConfig.twitterHandle);

    // Structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [finalConfig]);

  const generateStructuredData = useCallback((type: 'organization' | 'service' | 'article', data: any) => {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'organization' ? 'Organization' : 
               type === 'service' ? 'Service' : 'Article',
      ...data
    };

    return baseStructuredData;
  }, []);

  const updatePageTitle = useCallback((title: string) => {
    updateSEO({ title, description: finalConfig.defaultDescription });
  }, [updateSEO, finalConfig]);

  return {
    updateSEO,
    generateStructuredData,
    updatePageTitle,
    config: finalConfig
  };
}
