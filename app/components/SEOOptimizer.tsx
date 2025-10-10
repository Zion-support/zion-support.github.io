'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  enableBreadcrumbs?: boolean;
  enableSitemap?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI and IT solutions for businesses worldwide',
  keywords = ['AI solutions', 'IT services', 'cloud computing', 'machine learning'],
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  structuredData,
  enableBreadcrumbs = true,
  enableSitemap = true
}) => {
  useEffect(() => {
    // Set page title
    if (title) {
      document.title = title;
    }

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      script.id = 'structured-data';
      
      // Remove existing structured data
      const existing = document.getElementById('structured-data');
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    }

    // Add breadcrumb structured data
    if (enableBreadcrumbs) {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ziontechgroup.com"
          }
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(breadcrumbData);
      script.id = 'breadcrumb-structured-data';
      
      // Remove existing breadcrumb data
      const existing = document.getElementById('breadcrumb-structured-data');
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    }

    // Add sitemap link
    if (enableSitemap) {
      const sitemapLink = document.createElement('link');
      sitemapLink.rel = 'sitemap';
      sitemapLink.type = 'application/xml';
      sitemapLink.href = '/sitemap.xml';
      
      // Remove existing sitemap link
      const existing = document.querySelector('link[rel="sitemap"]');
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(sitemapLink);
    }
  }, [title, structuredData, enableBreadcrumbs, enableSitemap]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
};

export default SEOOptimizer;