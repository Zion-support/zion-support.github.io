import React, { useEffect, useCallback, useRef } from 'react';
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

interface SEOConfig {
  title: string;
  description: string;
  url: string;
  canonicalUrl: string;
}

interface AdvancedSEOOptimizerProps {
  seoData: SEOData;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
  enableSchemaMarkup?: boolean;
}

interface AdvancedSEOOptimizerProps {
  config: SEOConfig;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  config,
  enableStructuredData = true,
  enableOpenGraph = true,
  enableTwitterCards = true,
}) => {
  const structuredDataRef = useRef<HTMLScriptElement | null>(null);

  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData || !seoData.structuredData) return null;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = config.description;
      document.head.appendChild(meta);
    }

    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', config.keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = config.keywords.join(', ');
      document.head.appendChild(meta);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', config.canonicalUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = config.canonicalUrl;
      document.head.appendChild(link);
    }
  }, [config]);

  const generateStructuredData = () => {
    if (!enableStructuredData) return null;

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: config.description,
      url: config.canonicalUrl,
      logo: config.ogImage,
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://github.com/ziontechgroup',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Tech Street',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        postalCode: '94105',
        addressCountry: 'US',
      },
      offers: {
        '@type': 'Offer',
        description: 'AI and IT Solutions',
        category: 'Technology Services',
      },
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

  const addCanonicalLink = useCallback(() => {
    // Remove existing canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = seoData.canonicalUrl;
    document.head.appendChild(canonicalLink);
  }, [seoData.canonicalUrl]);

  const generateAdditionalMetaTags = () => {
    return (
      <>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </>
    );
  };

  const trackPageView = (config: SEOConfig) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown as { gtag: (command: string, targetId: string, config: Record<string, unknown>) => void }).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: config.title,
        page_location: config.canonicalUrl,
      });
    }
  };

  useEffect(() => {
    // Add canonical link
    addCanonicalLink();

    // Add structured data
    const structuredData = generateStructuredData();
    if (structuredData) {
      addStructuredData(structuredData);
    }

    // Add breadcrumb structured data
    const breadcrumbData = generateBreadcrumbStructuredData();
    if (breadcrumbData) {
      addStructuredData(breadcrumbData);
    }

    // Track page view
    trackPageView({
      title: seoData.title,
      description: seoData.description,
      url: seoData.canonicalUrl,
      canonicalUrl: seoData.canonicalUrl,
    });

    // Cleanup on unmount
    return () => {
      if (structuredDataRef.current) {
        structuredDataRef.current.remove();
      }
    };
  }, [seoData, addCanonicalLink, generateStructuredData, generateBreadcrumbStructuredData]);

  return (
    <Helmet>
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords.join(', ')} />
      <link rel="canonical" href={config.canonicalUrl} />
      
      {/* Open Graph Tags */}
      {enableOpenGraph && (
        <>
          <meta property="og:title" content={seoData.ogTitle || seoData.title} />
          <meta property="og:description" content={seoData.ogDescription || seoData.description} />
          <meta property="og:image" content={seoData.ogImage || 'https://ziontechgroup.com/og-image.jpg'} />
          <meta property="og:url" content={seoData.canonicalUrl} />
          <meta property="og:type" content={seoData.ogType || 'website'} />
          <meta property="og:site_name" content="Zion Tech Group" />
        </>
      )}

      {/* Twitter Card Tags */}
      {enableTwitterCards && (
        <>
          <meta name="twitter:card" content={seoData.twitterCard || 'summary_large_image'} />
          <meta name="twitter:title" content={seoData.twitterTitle || seoData.title} />
          <meta name="twitter:description" content={seoData.twitterDescription || seoData.description} />
          <meta name="twitter:image" content={seoData.twitterImage || 'https://ziontechgroup.com/twitter-image.jpg'} />
        </>
      )}

      {/* Additional Meta Tags */}
      {seoData.robots && <meta name="robots" content={seoData.robots} />}
      {seoData.author && <meta name="author" content={seoData.author} />}
      {seoData.publishedTime && <meta property="article:published_time" content={seoData.publishedTime} />}
      {seoData.modifiedTime && <meta property="article:modified_time" content={seoData.modifiedTime} />}
      {seoData.section && <meta property="article:section" content={seoData.section} />}
      {seoData.tags && seoData.tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;