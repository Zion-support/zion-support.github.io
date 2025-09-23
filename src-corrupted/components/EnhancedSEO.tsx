import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  type: 'website' | 'article' | 'product' | 'service' | 'organization';
  url: string;
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
  language?: string;
  alternateLanguages?: Record<string, string>;
  twitterHandle?: string;
  facebookAppId?: string;
  structuredData?: Record<string, any>;
}

interface EnhancedSEOProps {
  config: SEOConfig;
  enableStructuredData?: boolean;
  enableSocialMedia?: boolean;
  enablePerformanceOptimization?: boolean;
  enableAnalytics?: boolean;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  config,
  enableStructuredData = true,
  enableSocialMedia = true,
  enablePerformanceOptimization = true,
  enableAnalytics = true
}) => {
  const location = useLocation();

  // Generate full URL
  const fullUrl = useMemo(() => {
    const baseUrl = 'https://ziontechgroup.com';
    return `${baseUrl}${location.pathname}`;
  }, [location.pathname]);

  // Generate structured data
  const structuredData = useMemo(() => {
    if (!enableStructuredData) return null;

    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': config.type === 'organization' ? 'Organization' : 'WebPage',
      name: config.title,
      description: config.description,
      url: fullUrl,
      ...(config.image && { image: config.image }),
      ...(config.author && { author: { '@type': 'Person', name: config.author } }),
      ...(config.publishedTime && { datePublished: config.publishedTime }),
      ...(config.modifiedTime && { dateModified: config.modifiedTime }),
      ...(config.section && { articleSection: config.section }),
      ...(config.tags && { keywords: config.tags.join(', ') }),
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
          width: 512,
          height: 512
        },
        sameAs: [
          'https://www.linkedin.com/company/ziontechgroup',
          'https://twitter.com/ziontechgroup',
          'https://github.com/ziontechgroup',
          'https://www.youtube.com/@ziontechgroup'
        ]
      },
      mainEntity: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        description: 'Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.',
        url: 'https://ziontechgroup.com',
        logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US',
          addressLocality: 'San Francisco',
          addressRegion: 'CA'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-0123',
          contactType: 'customer service',
          email: 'info@ziontechgroup.com'
        },
        sameAs: [
          'https://www.linkedin.com/company/ziontechgroup',
          'https://twitter.com/ziontechgroup',
          'https://github.com/ziontechgroup'
        ]
      }
    };

    // Add specific structured data based on page type
    if (config.type === 'service') {
      return {
        ...baseStructuredData,
        '@type': 'Service',
        serviceType: config.title,
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group'
        },
        areaServed: 'Worldwide',
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: fullUrl
        }
      };
    }

    if (config.type === 'article') {
      return {
        ...baseStructuredData,
        '@type': 'Article',
        headline: config.title,
        articleBody: config.description,
        ...(config.author && { author: { '@type': 'Person', name: config.author } }),
        ...(config.publishedTime && { datePublished: config.publishedTime }),
        ...(config.modifiedTime && { dateModified: config.modifiedTime }),
        ...(config.section && { articleSection: config.section }),
        ...(config.tags && { keywords: config.tags.join(', ') })
      };
    }

    return baseStructuredData;
  }, [config, fullUrl, enableStructuredData]);

  // Performance optimization
  useEffect(() => {
    if (!enablePerformanceOptimization) return;

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.as = 'style';
      criticalCSS.href = '/src/index.css';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.as = 'font';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);

      // Preload critical images
      if (config.image) {
        const imagePreload = document.createElement('link');
        imagePreload.rel = 'preload';
        imagePreload.as = 'image';
        imagePreload.href = config.image;
        document.head.appendChild(imagePreload);
      }
    };

    // DNS prefetch and preconnect
    const addResourceHints = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ];

      domains.forEach(domain => {
        // DNS prefetch
        const dnsPrefetch = document.createElement('link');
        dnsPrefetch.rel = 'dns-prefetch';
        dnsPrefetch.href = domain;
        document.head.appendChild(dnsPrefetch);

        // Preconnect
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = domain;
        preconnect.crossOrigin = 'anonymous';
        document.head.appendChild(preconnect);
      });
    };

    preloadCriticalResources();
    addResourceHints();
  }, [config.image, enablePerformanceOptimization]);

  // Analytics tracking
  useEffect(() => {
    if (!enableAnalytics) return;

    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: config.title,
        page_location: fullUrl,
        page_path: location.pathname
      });
    }

    // Track page performance
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
            
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'timing_complete', {
                name: 'load',
                value: Math.round(loadTime),
                event_category: 'Performance'
              });
            }
          }
        });
      });
      
      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
  }, [config.title, fullUrl, location.pathname, enableAnalytics]);

  // Generate meta tags
  const metaTags = useMemo(() => {
    const tags = [
      // Basic meta tags
      { name: 'description', content: config.description },
      { name: 'keywords', content: config.keywords.join(', ') },
      { name: 'author', content: config.author || 'Zion Tech Group' },
      { name: 'robots', content: config.robots || 'index, follow' },
      { name: 'language', content: config.language || 'en' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#000000' },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: config.title },

      // Open Graph tags
      ...(enableSocialMedia ? [
        { property: 'og:title', content: config.title },
        { property: 'og:description', content: config.description },
        { property: 'og:type', content: config.type },
        { property: 'og:url', content: fullUrl },
        { property: 'og:image', content: config.image || 'https://ziontechgroup.com/images/zion-tech-group-og.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Zion Tech Group' },
        { property: 'og:locale', content: 'en_US' },
        ...(config.author && [{ property: 'og:author', content: config.author }]),
        ...(config.publishedTime && [{ property: 'article:published_time', content: config.publishedTime }]),
        ...(config.modifiedTime && [{ property: 'article:modified_time', content: config.modifiedTime }]),
        ...(config.section && [{ property: 'article:section', content: config.section }]),
        ...(config.tags && config.tags.map(tag => ({ property: 'article:tag', content: tag })))
      ] : []),

      // Twitter Card tags
      ...(enableSocialMedia ? [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: config.twitterHandle || '@ziontechgroup' },
        { name: 'twitter:creator', content: config.twitterHandle || '@ziontechgroup' },
        { name: 'twitter:title', content: config.title },
        { name: 'twitter:description', content: config.description },
        { name: 'twitter:image', content: config.image || 'https://ziontechgroup.com/images/zion-tech-group-og.jpg' },
        { name: 'twitter:image:alt', content: `${config.title} - Zion Tech Group` }
      ] : []),

      // Additional meta tags
      { name: 'canonical', content: config.canonicalUrl || fullUrl },
      { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Zion Tech Group' }
    ];

    return tags;
  }, [config, fullUrl, enableSocialMedia]);

  // Generate alternate language links
  const alternateLanguageLinks = useMemo(() => {
    if (!config.alternateLanguages) return [];

    return Object.entries(config.alternateLanguages).map(([lang, url]) => ({
      rel: 'alternate',
      hreflang: lang,
      href: url
    }));
  }, [config.alternateLanguages]);

  // Generate resource hints
  const resourceHints = useMemo(() => {
    if (!enablePerformanceOptimization) return [];

    return [
      // DNS prefetch
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
      
      // Preconnect
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: 'anonymous' as const },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' as const },
      
      // Preload critical resources
      { rel: 'preload', href: '/src/index.css', as: 'style' },
      ...(config.image ? [{ rel: 'preload', href: config.image, as: 'image' }] : [])
    ];
  }, [config.image, enablePerformanceOptimization]);

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{config.title}</title>
      <meta charSet="utf-8" />
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}

      {/* Canonical URL */}
      <link rel="canonical" href={config.canonicalUrl || fullUrl} />

      {/* Alternate language links */}
      {alternateLanguageLinks.map((link, index) => (
        <link key={index} {...link} />
      ))}

      {/* Resource hints */}
      {resourceHints.map((hint, index) => (
        <link key={index} {...hint} />
      ))}

      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Facebook App ID */}
      {enableSocialMedia && config.facebookAppId && (
        <meta property="fb:app_id" content={config.facebookAppId} />
      )}

      {/* Additional performance optimizations */}
      {enablePerformanceOptimization && (
        <>
          <meta httpEquiv="x-dns-prefetch-control" content="on" />
          <meta name="format-detection" content="telephone=no" />
        </>
      )}

      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

// Default SEO configuration for Zion Tech Group
export const defaultSEOConfig: SEOConfig = {
  title: 'Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services',
  description: 'Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology.',
  keywords: [
    'AI solutions',
    'quantum computing',
    'cybersecurity',
    'digital transformation',
    'enterprise technology',
    'machine learning',
    'cloud services',
    'IT infrastructure',
    'Zion Tech Group',
    'technology consulting',
    'software development',
    'data analytics',
    'business intelligence',
    'automation',
    'blockchain',
    'IoT',
    '5G',
    'edge computing'
  ],
  type: 'website',
  url: 'https://ziontechgroup.com',
  image: 'https://ziontechgroup.com/images/zion-tech-group-og.jpg',
  author: 'Zion Tech Group',
  language: 'en',
  twitterHandle: '@ziontechgroup',
  facebookAppId: '123456789012345',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered technology solutions and enterprise services',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    sameAs: [
      'https://www.linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup'
    ]
  }
};