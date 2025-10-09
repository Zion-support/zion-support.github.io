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
      '@type': 'Organization',
      name: seoData.title,
      description: seoData.description,
      url: seoData.canonicalUrl,
      logo: seoData.ogImage || '/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/ziontechgroup'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        availableLanguage: 'English'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Tech Street',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        postalCode: '94105',
        addressCountry: 'US'
      },
    };

    if (seoData.author) {
      baseStructuredData.author = {
        '@type': 'Person',
        name: seoData.author
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

  const generateOpenGraphData = useCallback(() => {
    if (!enableOpenGraph) return {};

    return {
      'og:title': seoData.ogTitle || seoData.title,
      'og:description': seoData.ogDescription || seoData.description,
      'og:image': seoData.ogImage || '/og-image.jpg',
      'og:url': seoData.canonicalUrl,
      'og:type': seoData.ogType || 'website',
      'og:site_name': 'Zion Tech Group',
      'og:locale': 'en_US'
    };
  }, [seoData, enableOpenGraph]);

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
            text: 'We offer comprehensive AI and IT solutions including custom software development, AI integration, cloud services, and digital transformation consulting.'
          },
        },
        {
          '@type': 'Question',
          name: 'How can I get started with your services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact us through our website or call us directly. We offer free consultations to discuss your specific needs and provide tailored solutions.'
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide ongoing support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide comprehensive ongoing support and maintenance for all our solutions to ensure optimal performance and reliability.'
          },
        },
      ]
    };

    return {
      'twitter:card': seoData.twitterCard || 'summary_large_image',
      'twitter:title': seoData.twitterTitle || seoData.title,
      'twitter:description': seoData.twitterDescription || seoData.description,
      'twitter:image': seoData.twitterImage || seoData.ogImage || '/twitter-image.jpg',
      'twitter:site': '@ziontechgroup',
      'twitter:creator': '@ziontechgroup'
    };
  }, [seoData, enableTwitterCards]);

  const generateMetaTags = useCallback(() => {
    return [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords.join(', ') },
      { name: 'author', content: seoData.author || 'Zion Tech Group' },
      { name: 'robots', content: seoData.robots || 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#3B82F6' },
      { name: 'msapplication-TileColor', content: '#3B82F6' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
    ];
  }, [seoData]);

  // Update document title and meta description
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = seoData.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = seoData.description;
        document.head.appendChild(meta);
      } else {
        metaDescription.setAttribute('content', seoData.description);
      }

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = seoData.canonicalUrl;
        document.head.appendChild(link);
      } else {
        canonicalLink.setAttribute('href', seoData.canonicalUrl);
      }
    }
  }, [seoData]);

  const addStructuredData = (data: Record<string, unknown>) => {
    if (structuredDataRef.current) {
      structuredDataRef.current.remove();
    }
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    structuredDataRef.current = script;
    document.head.appendChild(script);
  };

  const structuredData = generateStructuredData();
  const openGraphData = generateOpenGraphData();
  const twitterCardData = generateTwitterCardData();
  const metaTags = generateMetaTags();

  useEffect(() => {
    if (structuredData) {
      addStructuredData(structuredData);
    }
  }, [structuredData]);

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData) {
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'page_load_performance', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(perfData.loadEventEnd - perfData.fetchStart)
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
      <meta name="apple-touch-fullscreen" content="yes" />
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