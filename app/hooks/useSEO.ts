import { useEffect, useCallback } from 'react';

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, any>;
}

export const useSEO = (seoData: SEOData = {}) => {
  const {
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    structuredData
  } = seoData;

  const updateMetaTag = useCallback((name: string, content: string) => {
    if (typeof document === 'undefined') return;

    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }, []);

  const updatePropertyTag = useCallback((property: string, content: string) => {
    if (typeof document === 'undefined') return;

    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.property = property;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }, []);

  const updateStructuredData = useCallback((data: Record<string, any>) => {
    if (typeof document === 'undefined') return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    if (description) {
      updateMetaTag('description', description);
    }

    if (keywords && keywords.length > 0) {
      updateMetaTag('keywords', keywords.join(', '));
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Update Open Graph tags
    if (ogTitle) {
      updatePropertyTag('og:title', ogTitle);
    }

    if (ogDescription) {
      updatePropertyTag('og:description', ogDescription);
    }

    if (ogImage) {
      updatePropertyTag('og:image', ogImage);
    }

    if (ogUrl) {
      updatePropertyTag('og:url', ogUrl);
    }

    // Update Twitter Card tags
    if (twitterCard) {
      updateMetaTag('twitter:card', twitterCard);
    }

    if (twitterTitle) {
      updateMetaTag('twitter:title', twitterTitle);
    }

    if (twitterDescription) {
      updateMetaTag('twitter:description', twitterDescription);
    }

    if (twitterImage) {
      updateMetaTag('twitter:image', twitterImage);
    }

    // Update structured data
    if (structuredData) {
      const cleanup = updateStructuredData(structuredData);
      return cleanup;
    }
  }, [
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    structuredData,
    updateMetaTag,
    updatePropertyTag,
    updateStructuredData
  ]);

  return {
    updateMetaTag,
    updatePropertyTag,
    updateStructuredData
  };
};

export default useSEO;