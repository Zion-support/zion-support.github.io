import { useState, useEffect, useCallback } from 'react';

interface SEOState {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  structuredData: any;
}

interface SEOOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
}

export function useSEO(options: SEOOptions = {}) {
  const [state, setState] = useState<SEOState>({
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI solutions, micro SaaS applications, and comprehensive IT services.',
    keywords: ['AI solutions', 'artificial intelligence', 'IT services', 'cloud computing'],
    canonicalUrl: 'https://ziontechgroup.com',
    ogImage: 'https://ziontechgroup.com/og-image.jpg',
    structuredData: null
  });

  const updateSEO = useCallback((newOptions: SEOOptions) => {
    setState(prev => ({
      ...prev,
      ...newOptions,
      canonicalUrl: newOptions.canonicalUrl || window.location.href
    }));
  }, []);

  const generateStructuredData = useCallback((type: string, data: any) => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };

    setState(prev => ({
      ...prev,
      structuredData: baseStructuredData
    }));

    return baseStructuredData;
  }, []);

  const generateBreadcrumbStructuredData = useCallback((breadcrumbs: Array<{name: string, url: string}>) => {
    return generateStructuredData('BreadcrumbList', {
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    });
  }, [generateStructuredData]);

  const generateOrganizationStructuredData = useCallback(() => {
    return generateStructuredData('Organization', {
      name: 'Zion Tech Group',
      description: 'Advanced AI and IT Solutions',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      contactPoint: {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      address: {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "Innovation City",
        "addressRegion": "IC",
        "postalCode": "12345",
        "addressCountry": "US"
      }
    });
  }, [generateStructuredData]);

  useEffect(() => {
    if (Object.keys(options).length > 0) {
      updateSEO(options);
    }
  }, [options, updateSEO]);

  return {
    state,
    updateSEO,
    generateStructuredData,
    generateBreadcrumbStructuredData,
    generateOrganizationStructuredData
  };
}
