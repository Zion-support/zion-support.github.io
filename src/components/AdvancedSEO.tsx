import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  robots?: string;
  language?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

interface AdvancedSEOProps {
  data: SEOData;
  enableStructuredData?: boolean;
  enableSocialMeta?: boolean;
  enablePerformanceOptimization?: boolean;
}

export const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  data,
  enableStructuredData = true,
  enableSocialMeta = true,
  enablePerformanceOptimization = true
}) => {
  // Memoized meta tags for performance
  const metaTags = useMemo(() => {
    const tags = [
      { name: 'description', content: data.description },
      { name: 'keywords', content: data.keywords?.join(', ') || '' },
      { name: 'author', content: data.author || 'Zion Tech Group' },
      { name: 'robots', content: data.robots || 'index, follow' },
      { name: 'language', content: data.language || 'en' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#06b6d4' },
      { name: 'msapplication-TileColor', content: '#06b6d4' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: data.title },
      { name: 'application-name', content: 'Zion Tech Group' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'HandheldFriendly', content: 'true' },
      { name: 'MobileOptimized', content: 'width' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { name: 'apple-mobile-web-app-orientations', content: 'portrait' },
    ];

    // Add Open Graph tags
    if (enableSocialMeta) {
      tags.push(
        { property: 'og:title', content: data.title },
        { property: 'og:description', content: data.description },
        { property: 'og:type', content: data.ogType || 'website' },
        { property: 'og:url', content: data.canonical || window.location.href },
        { property: 'og:image', content: data.ogImage || '/images/zion-tech-group-og.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Zion Tech Group' },
        { property: 'og:locale', content: data.language || 'en_US' },
        { property: 'article:published_time', content: data.publishedTime || '' },
        { property: 'article:modified_time', content: data.modifiedTime || '' },
        { property: 'article:section', content: data.section || '' },
        { property: 'article:tag', content: data.tags?.join(', ') || '' }
      );
    }

    // Add Twitter Card tags
    if (enableSocialMeta) {
      tags.push(
        { name: 'twitter:card', content: data.twitterCard || 'summary_large_image' },
        { name: 'twitter:title', content: data.title },
        { name: 'twitter:description', content: data.description },
        { name: 'twitter:image', content: data.ogImage || '/images/zion-tech-group-og.jpg' },
        { name: 'twitter:site', content: '@ziontechgroup' },
        { name: 'twitter:creator', content: '@ziontechgroup' }
      );
    }

    return tags;
  }, [data, enableSocialMeta]);

  // Memoized structured data
  const structuredData = useMemo(() => {
    if (!enableStructuredData) return null;

    const baseData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
      description: 'Leading provider of AI-powered technology solutions, quantum computing, and innovative digital transformation services.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Innovation Drive',
        addressLocality: 'Tech City',
        addressRegion: 'CA',
        postalCode: '90210',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'customer service',
        email: 'info@ziontechgroup.com'
      },
      sameAs: [
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://www.facebook.com/ziontechgroup'
      ],
      founder: {
        '@type': 'Person',
        name: 'Dr. Sarah Johnson',
        jobTitle: 'CEO & Chief Innovation Officer'
      },
      foundingDate: '2020-01-01',
      numberOfEmployees: '500+',
      industry: 'Technology',
      serviceType: [
        'AI Solutions',
        'Quantum Computing',
        'Cybersecurity',
        'Digital Transformation',
        'Cloud Services',
        'Blockchain Solutions'
      ]
    };

    // Add article structured data if available
    if (data.ogType === 'article') {
      return [
        baseData,
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.title,
          description: data.description,
          image: data.ogImage,
          author: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
            logo: {
              '@type': 'ImageObject',
              url: 'https://ziontechgroup.com/images/zion-tech-group-logo.png'
            }
          },
          datePublished: data.publishedTime,
          dateModified: data.modifiedTime,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.canonical || window.location.href
          }
        }
      ];
    }

    return baseData;
  }, [data, enableStructuredData]);

  // Performance optimization effects
  useEffect(() => {
    if (!enablePerformanceOptimization) return;

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/zion-tech-group-logo.png',
        '/images/hero-background.jpg'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('.woff2') ? 'font' : 'image';
        link.crossOrigin = resource.includes('.woff2') ? 'anonymous' : undefined;
        document.head.appendChild(link);
      });
    };

    // DNS prefetch for external domains
    const dnsPrefetch = () => {
      const externalDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://cdn.jsdelivr.net'
      ];

      externalDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    // Resource hints
    const addResourceHints = () => {
      // Preconnect to critical third-party origins
      const preconnectOrigins = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      preconnectOrigins.forEach(origin => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = origin;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
    dnsPrefetch();
    addResourceHints();
  }, [enablePerformanceOptimization]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{data.title}</title>
      <link rel="canonical" href={data.canonical || window.location.href} />
      
      {/* Meta Tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Additional Performance Optimizations */}
      {enablePerformanceOptimization && (
        <>
          {/* Preload critical CSS */}
          <link rel="preload" href="/src/index.css" as="style" />
          
          {/* Preload critical fonts */}
          <link 
            rel="preload" 
            href="/fonts/inter-var.woff2" 
            as="font" 
            type="font/woff2" 
            crossOrigin="anonymous" 
          />
          
          {/* Manifest */}
          <link rel="manifest" href="/manifest.json" />
          
          {/* Apple Touch Icons */}
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
          
          {/* Microsoft Tiles */}
          <meta name="msapplication-TileImage" content="/images/mstile-144x144.png" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
        </>
      )}

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Content Security Policy */}
      <meta 
        httpEquiv="Content-Security-Policy" 
        content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'none'; object-src 'none';" 
      />
    </Helmet>
  );
};