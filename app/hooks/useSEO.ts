import { useEffect, useCallback } from 'react;'
import { usePathname } from 'next/navigation;'

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
  const location = usePathname();

  const updateMetaTag = useCallback((name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`);"`"`
    if (!meta) {
      meta = document.createElement('meta');'
      meta.setAttribute('name', name);'
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);'
  }, []);

  const updateCanonicalUrl = useCallback((url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');"'"'
    if (!canonical) {
      canonical = document.createElement('link');'
      canonical.setAttribute('rel', 'canonical');'
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);'
  }, []);

  const addStructuredData = useCallback((data: object) => {
    // Remove existing structured data,
const existingScript = document.querySelector('script[type="application/ld+json"]');"'"'
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data,
const script = document.createElement('script');'
    script.type = 'application/ld+json';'
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }, []);

  const updateOpenGraphTags = useCallback((config: SEOConfig) => {
    const ogTags = [
      { property: 'og:title', content: config.title },'
      { property: 'og:description', content: config.description },'
      { property: 'og:type', content: config.ogType || 'website' },'
      { property: 'og:url', content: config.canonicalUrl || window.location.href },'
      { property: 'og:image', content: config.ogImage },'
      { property: 'og:site_name', content: 'Zion Tech Group' }'
    ];

    ogTags.forEach(({ property, content }) => {
      if (content) {
        updateMetaTag(property, content);
      }
    });
  }, [updateMetaTag]);

  const updateTwitterTags = useCallback((config: SEOConfig) => {
    const twitterTags = [
      { name: 'twitter:card', content: config.twitterCard || 'summary_large_image' },'
      { name: 'twitter:title', content: config.title },'
      { name: 'twitter:description', content: config.description },'
      { name: 'twitter:image', content: config.ogImage }'
    ];

    twitterTags.forEach(({ name, content }) => {
      if (content) {
        updateMetaTag(name, content);
      }
    });
  }, [updateMetaTag]);

  const addPageStructuredData = useCallback((pathname: string) => {
    const baseStructuredData = {
      '@context': 'https://schema.org','
      '@type': 'Organization','
      'name': 'Zion Tech Group','
      'url': 'https://ziontechgroup.com','
      'logo': 'https://ziontechgroup.com/logo.png','
      'description': 'Advanced AI and IT Solutions for modern businesses','
      'contactPoint': {'
        '@type': 'ContactPoint','
        'telephone': '+1-302-464-0950','
        'contactType': 'customer service','
        'email': 'kleber@ziontechgroup.com''
      },
      'address': {'
        '@type': 'PostalAddress','
        'streetAddress': '364 E Main St STE 1008','
        'addressLocality': 'Middletown','
        'addressRegion': 'DE','
        'postalCode': '19709','
        'addressCountry': 'US''
      }
    };

    // Add page-specific structured data,
let pageStructuredData: any = baseStructuredData;

    if (pathname === '/contact') {'
      pageStructuredData = {
        ...baseStructuredData,
        '@type': 'ContactPage''
      };
    } else if (pathname.startsWith('/ai-') || pathname.startsWith('/zion-ai-')) {'
      pageStructuredData = {
        ...baseStructuredData,
        '@type': 'Service','
        'serviceType': 'AI Solutions','
        'provider': baseStructuredData'
      };
    } else if (pathname.startsWith('/it-') || pathname === '/services') {'
      pageStructuredData = {
        ...baseStructuredData,
        '@type': 'Service','
        'serviceType': 'IT Services','
        'provider': baseStructuredData'
      };
    }

    addStructuredData(pageStructuredData);
  }, [addStructuredData]);

  useEffect(() => {
    // Update document title,
if (config.title) {
      const fullTitle = config.title.includes('Zion Tech Group') '
        ? config.title 
        : `${config.title} - Zion Tech Group`;``
      document.title = fullTitle;
    }

    // Update meta description,
if (config.description) {
      updateMetaTag('description', config.description);'
    }

    // Update meta keywords,
if (config.keywords) {
      updateMetaTag('keywords', config.keywords);'
    }

    // Update canonical URL,
if (config.canonicalUrl) {
      updateCanonicalUrl(config.canonicalUrl);
    } else {
      updateCanonicalUrl(window.location.href);
    }

    // Update Open Graph tags,
updateOpenGraphTags(config);

    // Update Twitter tags,
updateTwitterTags(config);

    // Update robots meta,
if (config.noIndex !== undefined) {
      updateMetaTag('robots', config.noIndex ? 'noindex,nofollow' : 'index,follow');'
    }

    // Add structured data,
if (config.structuredData) {
      addStructuredData(config.structuredData);
    }

    // Add page-specific structured data,
addPageStructuredData(location.pathname);

  }, [config, location.pathname, addPageStructuredData, updateOpenGraphTags, updateTwitterTags, updateMetaTag, updateCanonicalUrl, addStructuredData]);

  return {
    updateMetaTag,
    updateCanonicalUrl,
    addStructuredData
  };
};