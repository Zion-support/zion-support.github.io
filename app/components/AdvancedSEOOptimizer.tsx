import React, { useEffect, useCallback, useRef } from 'react';
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
  const _structuredDataRef = useRef<HTMLScriptElement | null>(null);
  
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || !seoData.structuredData) return null;

    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Advanced AI and IT Solutions',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      sameAs: [
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/Zion-Holdings',
      ],
      ...seoData.structuredData,
    };

    return baseStructuredData;
  }, [enableStructuredData, seoData.structuredData]);

  const generateBreadcrumbStructuredData = useCallback(() => {
    if (!enableSchemaMarkup) return null;

    const breadcrumbData = {
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

    return breadcrumbData;
  }, [enableSchemaMarkup, seoData.title, seoData.canonicalUrl]);

  const generateFAQStructuredData = useCallback(() => {
    if (!enableSchemaMarkup) return null;

    const faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zion Tech Group offers advanced AI and IT solutions including custom software development, AI integration, cloud solutions, and digital transformation services.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact us through our website contact form, email, or phone. Visit our contact page for more information.',
          },
        },
      ],
    };

    return faqData;
  }, [enableSchemaMarkup]);

  const _structuredData = generateStructuredData();
  const _breadcrumbData = generateBreadcrumbStructuredData();
  const _faqData = generateFAQStructuredData();

  useEffect(() => {
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.setAttribute('name', 'description');
      document.head.appendChild(newMetaDescription);
      newMetaDescription.setAttribute('content', seoData.description);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', seoData.canonicalUrl);
    } else {
      const newCanonicalLink = document.createElement('link');
      newCanonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(newCanonicalLink);
      newCanonicalLink.setAttribute('href', seoData.canonicalUrl);
    }
  }, [seoData]);

  const _addStructuredData = (data: Record<string, unknown>) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    document.head.appendChild(script);
    _structuredDataRef.current = script;
  };

  const _trackPageView = (config: SEOData) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: config.title,
        page_location: config.canonicalUrl,
      });
    }
  };

  const _trackPerformanceMetrics = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      window.addEventListener('load', () => {
        const _perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (_perfData) {
          (window as any).gtag('event', 'page_load_performance', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(_perfData.loadEventEnd - _perfData.fetchStart),
          });
        }
      });
    }
  };

  return (
    );
};

export default AdvancedSEOOptimizer;