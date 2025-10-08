import React, { useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

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
      description: seoData.description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/Zion-Holdings',
      ],
      ...seoData.structuredData,
    };

    return baseStructuredData;
  }, [seoData, enableStructuredData]);

  const generateBreadcrumbStructuredData = useCallback(() => {
    if (!enableSchemaMarkup) return null;

    return {
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
  }, [seoData, enableSchemaMarkup]);

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
            text: 'Zion Tech Group offers comprehensive AI-powered enterprise solutions, digital transformation services, automation, cloud services, AI consulting, business intelligence, and machine learning solutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact us at kleber@ziontechgroup.com or call +1 302 464 0950. Our office is located at 364 E Main St STE 1008, Middletown DE 19709.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes Zion Tech Group different?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We specialize in cutting-edge AI micro SaaS services, cloud automation, and provide comprehensive digital transformation solutions with a focus on enterprise-grade security and performance.',
          },
        },
      ],
    };

    return faqData;
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
      canonicalLink.setAttribute('href', seoData.canonicalUrl);
    }
  }, [seoData]);

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
  // };

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
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    document.head.appendChild(script);
    _structuredDataRef.current = script;
  };

  const _trackPageView = (config: SEOData) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown as { gtag: (command: string, targetId: string, config: Record<string, unknown>) => void }).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: config.title,
        page_location: config.canonicalUrl,
      });
    }
  };

  const _trackPerformanceMetrics = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData && typeof window !== 'undefined' && 'gtag' in window) {
          (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'page_load_performance', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
          });
        }
      });
    }
  };

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
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#4F46E5" />

      {/* Structured Data */}
      {enableSchemaMarkup && structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {enableSchemaMarkup && breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}

      {enableSchemaMarkup && faqData && (
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
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