'use client';

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: Record<string, any>;
  noindex?: boolean;
  nofollow?: boolean;
}

interface AdvancedSEOComponentProps {
  config: SEOConfig;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
  enableSchemaMarkup?: boolean;
  enableBreadcrumbs?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const AdvancedSEOComponent: React.FC<AdvancedSEOComponentProps> = ({
  config,
  enableStructuredData = true,
  enableOpenGraph = true,
  enableTwitterCards = true,
  enableSchemaMarkup = true,
  enableBreadcrumbs = false,
  breadcrumbs = [],
}) => {
  useEffect(() => {
    // Update page title for better UX
    document.title = config.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.description);
    }

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', config.canonicalUrl);

    // Add structured data
    if (enableStructuredData && config.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(config.structuredData);
      document.head.appendChild(script);
    }
  }, [config, enableStructuredData]);

  const generateBreadcrumbSchema = () => {
    if (!enableBreadcrumbs || breadcrumbs.length === 0) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  };

  const generateOrganizationSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
      foundingDate: '2020',
      numberOfEmployees: '50-100',
      industry: 'Technology',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'en',
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    };
  };

  const generateWebSiteSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      description: config.description,
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ziontechgroup.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    };
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords.join(', ')} />
      <link rel="canonical" href={config.canonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={`${config.noindex ? 'noindex' : 'index'}, ${config.nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="googlebot" content={`${config.noindex ? 'noindex' : 'index'}, ${config.nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph */}
      {enableOpenGraph && (
        <>
          <meta property="og:type" content={config.ogType || 'website'} />
          <meta property="og:url" content={config.canonicalUrl} />
          <meta property="og:title" content={config.title} />
          <meta property="og:description" content={config.description} />
          <meta property="og:image" content={config.ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Zion Tech Group" />
          <meta property="og:locale" content="en_US" />
        </>
      )}

      {/* Twitter Cards */}
      {enableTwitterCards && (
        <>
          <meta name="twitter:card" content={config.twitterCard || 'summary_large_image'} />
          <meta name="twitter:url" content={config.canonicalUrl} />
          <meta name="twitter:title" content={config.title} />
          <meta name="twitter:description" content={config.description} />
          <meta name="twitter:image" content={config.ogImage} />
          {config.twitterSite && <meta name="twitter:site" content={config.twitterSite} />}
          {config.twitterCreator && <meta name="twitter:creator" content={config.twitterCreator} />}
        </>
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="3 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-TileColor" content="#4f46e5" />
      <meta name="theme-color" content="#4f46e5" />

      {/* Structured Data */}
      {enableSchemaMarkup && (
        <>
          {config.structuredData && (
            <script type="application/ld+json">
              {JSON.stringify(config.structuredData)}
            </script>
          )}
          
          <script type="application/ld+json">
            {JSON.stringify(generateOrganizationSchema())}
          </script>
          
          <script type="application/ld+json">
            {JSON.stringify(generateWebSiteSchema())}
          </script>
          
          {generateBreadcrumbSchema() && (
            <script type="application/ld+json">
              {JSON.stringify(generateBreadcrumbSchema())}
            </script>
          )}
        </>
      )}
    </Helmet>
  );
};

export default AdvancedSEOComponent;