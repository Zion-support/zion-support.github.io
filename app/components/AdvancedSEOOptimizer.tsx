'use client';
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
  const structuredDataRef = useRef<HTMLScriptElement | null>(null);
  
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || !seoData.structuredData) {
      return null;
    }

    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'TechCompany',
      name: 'Zion Tech Group',
      description: seoData.description,
      url: seoData.canonicalUrl,
      logo: 'https://ziontechgroup.com/logo.png',
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/zion-tech-group',
      ],
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
      ...seoData.structuredData,
    };

    if (seoData.author) {
      baseStructuredData.author = {
        '@type': 'Person',
        name: seoData.author,
      };
    }

    if (seoData.publishedTime) {
      baseStructuredData.datePublished = seoData.publishedTime;
    }

    if (seoData.modifiedTime) {
      baseStructuredData.dateModified = seoData.modifiedTime;
    }

    if (seoData.section) {
      baseStructuredData.articleSection = seoData.section;
    }

    if (seoData.tags && seoData.tags.length > 0) {
      baseStructuredData.keywords = seoData.tags.join(', ');
    }

    return baseStructuredData;
  }, [seoData, enableStructuredData]);

  // Generate Open Graph data
  const generateOpenGraphData = useCallback(() => {
    if (!enableOpenGraph) return {};

    return {
      'og:title': seoData.ogTitle || seoData.title,
      'og:description': seoData.ogDescription || seoData.description,
      'og:url': seoData.canonicalUrl,
      'og:type': seoData.ogType || 'website',
      'og:image': seoData.ogImage || '/og-image.jpg',
      'og:site_name': 'Zion Tech Group',
      'og:locale': 'en_US',
    };
  }, [seoData, enableOpenGraph]);

  // Generate Twitter Card data
  const generateTwitterCardData = useCallback(() => {
    if (!enableTwitterCards) return {};

    const faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer comprehensive AI solutions, digital transformation services, cloud computing, automation, and business intelligence services.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact us through our website, email, or phone. Visit our contact page for more information.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes Zion Tech Group different?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We combine cutting-edge AI technology with deep industry expertise to deliver transformative solutions that drive real business value.',
          },
        },
      ],
    };
  }, [seoData, enableTwitterCards]);

  // Generate meta tags
  const generateMetaTags = useCallback(() => {
    const metaTags = [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords.join(', ') },
      { name: 'author', content: seoData.author || 'Zion Tech Group' },
      { name: 'robots', content: seoData.robots || 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#3B82F6' },
      { name: 'msapplication-TileColor', content: '#3B82F6' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
    ];
    return metaTags;
  }, [seoData]);

  const structuredData = generateStructuredData();
  const openGraphData = generateOpenGraphData();
  const twitterCardData = generateTwitterCardData();
  const metaTags = generateMetaTags();

  // Generate breadcrumb structured data
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
          item: seoData.canonicalUrl.split('/').slice(0, 3).join('/'),
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

  // Generate FAQ structured data
  const generateFAQStructuredData = useCallback(() => {
    if (!enableSchemaMarkup) return null;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer comprehensive AI solutions, digital transformation services, cloud computing, automation, and business intelligence services.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact us through our website, email, or phone. Visit our contact page for more information.',
          },
        },
      ],
    };
  }, [enableSchemaMarkup]);

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

  const addStructuredData = (data: Record<string, unknown>) => {
    // Remove existing structured data
    if (structuredDataRef.current) {
      structuredDataRef.current.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    structuredDataRef.current = script;
  };

  useEffect(() => {
    if (structuredData) {
      addStructuredData(structuredData);
    }
  }, [structuredData]);

  useEffect(() => {
    if (breadcrumbData) {
      addStructuredData(breadcrumbData);
    }
  }, [breadcrumbData]);

  useEffect(() => {
    if (faqData) {
      addStructuredData(faqData);
    }
  }, [faqData]);

  useEffect(() => {
    // Track page performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData) {
        // Track performance metrics
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'page_load_performance', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
          });
        }
      }
    }
  }, []);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      {metaTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}

      {/* Canonical URL */}
      {seoData.canonicalUrl && (
        <link rel="canonical" href={seoData.canonicalUrl} />
      )}

      {/* Open Graph Tags */}
      {Object.entries(openGraphData).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}

      {/* Twitter Card Tags */}
      {Object.entries(twitterCardData).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}

      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;
