'use client';

import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOConfig {
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
  config: SEOConfig;
  enableStructuredData?: boolean;
  enableAnalytics?: boolean;
  enablePerformanceTracking?: boolean;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  config,
  enableStructuredData = true,
  enableAnalytics = true,
  enablePerformanceTracking = true,
}) => {
  const structuredDataRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Update document title
    document.title = config.title;

    // Update meta description
    updateMetaTag('description', config.description);
    updateMetaTag('keywords', config.keywords.join(', '));

    // Update Open Graph tags
    updateMetaTag('og:title', config.ogTitle || config.title, 'property');
    updateMetaTag('og:description', config.ogDescription || config.description, 'property');
    updateMetaTag('og:url', config.canonicalUrl, 'property');
    updateMetaTag('og:type', config.ogType || 'website', 'property');
    if (config.ogImage) {
      updateMetaTag('og:image', config.ogImage, 'property');
    }

    // Update Twitter Card tags
    updateMetaTag('twitter:card', config.twitterCard || 'summary_large_image', 'name');
    updateMetaTag('twitter:title', config.twitterTitle || config.title, 'name');
    updateMetaTag('twitter:description', config.twitterDescription || config.description, 'name');
    if (config.twitterImage) {
      updateMetaTag('twitter:image', config.twitterImage, 'name');
    }

    // Update other meta tags
    if (config.author) {
      updateMetaTag('author', config.author);
    }
    if (config.robots) {
      updateMetaTag('robots', config.robots);
    }
    if (config.publishedTime) {
      updateMetaTag('article:published_time', config.publishedTime, 'property');
    }
    if (config.modifiedTime) {
      updateMetaTag('article:modified_time', config.modifiedTime, 'property');
    }
    if (config.section) {
      updateMetaTag('article:section', config.section, 'property');
    }
    if (config.tags && config.tags.length > 0) {
      config.tags.forEach(tag => {
        addMetaTag('article:tag', tag, 'property');
      });
    }

    // Update canonical URL
    updateCanonicalUrl(config.canonicalUrl);

    // Add structured data
    if (enableStructuredData && config.structuredData) {
      addStructuredData(config.structuredData);
    }

    // Track page view
    if (enableAnalytics) {
      trackPageView(config);
    }

    // Performance tracking
    if (enablePerformanceTracking) {
      trackPerformanceMetrics();
    }

    // Cleanup function
    return () => {
      if (structuredDataRef.current) {
        structuredDataRef.current.remove();
      }
    };
  }, [config, enableStructuredData, enableAnalytics, enablePerformanceTracking]);

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (metaTag) {
      metaTag.content = content;
    } else {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      metaTag.content = content;
      document.head.appendChild(metaTag);
    }
  };

  const addMetaTag = (name: string, content: string, attribute: string = 'name') => {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute(attribute, name);
    metaTag.content = content;
    document.head.appendChild(metaTag);
  };

  const updateCanonicalUrl = (url: string) => {
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (canonicalLink) {
      canonicalLink.href = url;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = url;
      document.head.appendChild(canonicalLink);
    }
  };

  const addStructuredData = (data: Record<string, unknown>) => {
    // Remove existing structured data
    if (structuredDataRef.current) {
      structuredDataRef.current.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    document.head.appendChild(script);
    structuredDataRef.current = script;
  };

  const trackPageView = (config: SEOConfig) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown as { gtag: (command: string, targetId: string, config: Record<string, unknown>) => void }).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: config.title,
        page_location: config.canonicalUrl,
      });
    }
  };

  const trackPerformanceMetrics = () => {
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
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords.join(', ')} />
      <link rel="canonical" href={config.canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={config.ogTitle || config.title} />
      <meta property="og:description" content={config.ogDescription || config.description} />
      <meta property="og:url" content={config.canonicalUrl} />
      <meta property="og:type" content={config.ogType || 'website'} />
      {config.ogImage && <meta property="og:image" content={config.ogImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={config.twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={config.twitterTitle || config.title} />
      <meta name="twitter:description" content={config.twitterDescription || config.description} />
      {config.twitterImage && <meta name="twitter:image" content={config.twitterImage} />}
      
      {/* Additional meta tags */}
      {config.author && <meta name="author" content={config.author} />}
      {config.robots && <meta name="robots" content={config.robots} />}
      {config.publishedTime && <meta property="article:published_time" content={config.publishedTime} />}
      {config.modifiedTime && <meta property="article:modified_time" content={config.modifiedTime} />}
      {config.section && <meta property="article:section" content={config.section} />}
      {config.tags && config.tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
    </Helmet>
  );
};

// Default SEO configuration for the homepage
export const defaultSEOConfig: SEOConfig = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. Transform your business with cutting-edge AI micro SaaS services and cloud automation.',
  keywords: [
    'AI solutions',
    'enterprise AI',
    'digital transformation',
    'automation',
    'cloud services',
    'AI consulting',
    'business intelligence',
    'machine learning',
    'artificial intelligence',
    'enterprise software',
    'AI micro SaaS',
    'cloud automation',
    'AI governance',
    'AI safety',
    'autonomous systems',
  ],
  canonicalUrl: 'https://ziontechgroup.com',
  ogTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  ogDescription: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
  ogImage: 'https://ziontechgroup.com/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  twitterDescription: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
  twitterImage: 'https://ziontechgroup.com/og-image.jpg',
  robots: 'index,follow',
  author: 'Zion Tech Group',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      email: 'support@ziontechgroup.com',
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 AI Innovation Drive',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US',
    },
  },
};

export default AdvancedSEOOptimizer;