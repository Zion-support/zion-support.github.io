'use client';
import React, { useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>;
  breadcrumbData?: Record<string, unknown>;
  faqData?: Record<string, unknown>;
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
  enableSchemaMarkup = true
}) => {
  const structuredDataRef = useRef<HTMLScriptElement | null>(null);
  
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || !seoData.structuredData) return null;
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
      description: 'Advanced AI and IT Solutions',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4927:app/components/AdvancedSEOOptimizer.tsx
      sameAs: [
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/zion-tech-group',
      ],
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
      ...seoData.structuredData
    };
    return baseStructuredData;
  }, [enableStructuredData, seoData.structuredData]);
  const generateBreadcrumbStructuredData = useCallback(() => {
    if (!enableSchemaMarkup) return null;
    const breadcrumbData = {
=======
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-ZION-TECH',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Tech Innovation Drive',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        postalCode: '94105',
        addressCountry: 'US',
      },
    };

    return {
      ...baseStructuredData,
      ...seoData.structuredData,
    };
  }, [seoData, enableStructuredData]);

  const generateBreadcrumbStructuredData = useCallback(() => {
    if (!enableSchemaMarkup || !seoData.breadcrumbData) return null;

    return {
>>>>>>> cursor/fix-errors-and-merge-to-main-4927:app/components/AdvancedSEOOptimizer.tsx
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgroup.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: seoData.title,
          item: seoData.canonicalUrl
        },
      ]
    };
    return breadcrumbData;
  }, [enableSchemaMarkup, seoData.title, seoData.canonicalUrl]);
  const generateFAQStructuredData = useCallback(() => {
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
    if (!enableSchemaMarkup) return null;
    const faqData = {
=======
    if (!enableSchemaMarkup || !seoData.faqData) return null;

    return {
>>>>>>> cursor/fix-errors-and-merge-to-main-4927:app/components/AdvancedSEOOptimizer.tsx
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
            text: 'Zion Tech Group offers advanced AI and IT solutions including custom software development, AI integration, cloud solutions, and digital transformation services.'
          }
=======
            text: 'Zion Tech Group offers advanced AI solutions, quantum computing, and autonomous systems for enterprise clients.',
          },
>>>>>>> cursor/fix-errors-and-merge-to-main-4927:app/components/AdvancedSEOOptimizer.tsx
        },
        {
          '@type': 'Question',
          name: 'How can I contact Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
            text: 'You can contact us through our website contact form, email, or phone. Visit our contact page for more information.'
          }
        },
      ]
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
=======
            text: 'You can contact us through our website, email, or phone for consultation and support.',
          },
        },
      ],
    };
  }, [enableSchemaMarkup]);

  const structuredData = generateStructuredData();
  const breadcrumbData = generateBreadcrumbStructuredData();
  const faqData = generateFAQStructuredData();

  useEffect(() => {
    // Update page title and meta description for better SEO
    if (typeof document !== 'undefined') {
      document.title = seoData.title;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', seoData.description);

      // Update canonical URL
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
>>>>>>> cursor/fix-errors-and-merge-to-main-4927:app/components/AdvancedSEOOptimizer.tsx
      canonicalLink.setAttribute('href', seoData.canonicalUrl);
    } else {
      const newCanonicalLink = document.createElement('link');
      newCanonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(newCanonicalLink);
      newCanonicalLink.setAttribute('href', seoData.canonicalUrl);
    }
  }, [seoData]);
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
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
=======

  const trackPageView = (config: SEOData) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
>>>>>>> cursor/fix-errors-and-merge-to-main-4927:app/components/AdvancedSEOOptimizer.tsx
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: config.title,
        page_location: config.canonicalUrl
      });
    }
  };
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
  const _trackPerformanceMetrics = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      window.addEventListener('load', () => {
        const _perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (_perfData) {
          (window as any).gtag('event', 'page_load_performance', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(_perfData.loadEventEnd - _perfData.fetchStart)
          });
        }
      });
    }
  };
=======

  const trackPerformanceMetrics = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData && typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'timing_complete', {
          name: 'load',
          value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
          event_category: 'Performance',
          event_label: 'Page Load',
          value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
        });
      }
    }
  };

>>>>>>> cursor/fix-errors-and-merge-to-main-4927:app/components/AdvancedSEOOptimizer.tsx
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <link rel="canonical" href={seoData.canonicalUrl} />
      {/* Open Graph Tags */}
      {enableOpenGraph && (
        <>
          <meta property="og:title" content={seoData.title} />
          <meta property="og:description" content={seoData.description} />
          <meta property="og:image" content={seoData.ogImage || 'https://ziontechgroup.com/og-image.jpg'} />
          <meta property="og:url" content={seoData.canonicalUrl} />
          <meta property="og:type" content={seoData.ogType || 'website'} />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Zion Tech Group" />
          <meta property="og:locale" content="en_US" />
        </>
      )}
      {/* Twitter Card Tags */}
      {enableTwitterCards && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoData.title} />
          <meta name="twitter:description" content={seoData.description} />
          <meta name="twitter:image" content={seoData.ogImage} />
          <meta name="twitter:site" content="@ziontechgroup" />
          <meta name="twitter:creator" content="@ziontechgroup" />
        </>
      )}
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
      <meta name="theme-color" content="#4F46E5" />
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-4927:app/components/AdvancedSEOOptimizer.tsx
      {/* Structured Data */}
      {enableSchemaMarkup && _structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(_structuredData)}
        </script>
      )}
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
      {enableSchemaMarkup && _breadcrumbData && (
=======
      {enableSchemaMarkup && breadcrumbData && (
>>>>>>> cursor/fix-errors-and-merge-to-main-4927:app/components/AdvancedSEOOptimizer.tsx
        <script type="application/ld+json">
          {JSON.stringify(_breadcrumbData)}
        </script>
      )}
<<<<<<< HEAD:src/components/AdvancedSEOOptimizer.tsx
      {enableSchemaMarkup && _faqData && (
=======
      {enableSchemaMarkup && faqData && (
>>>>>>> cursor/fix-errors-and-merge-to-main-4927:app/components/AdvancedSEOOptimizer.tsx
        <script type="application/ld+json">
          {JSON.stringify(_faqData)}
        </script>
      )}
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};
export default AdvancedSEOOptimizer;