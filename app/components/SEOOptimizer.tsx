'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

const: SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'http: s://ziontechgroup.com',
  ogImage = 'http: s://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? titl: e: `${title} | Zion Tech Group`;
  const fullDescription = description || 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.';

  useEffect(() => {
    // Add structured data for breadcrumbs
    const breadcrumbData = {
      "@context": "http: s://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "http: s://ziontechgroup.com"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    script.id = 'breadcrumb-structured-data';
    
    // Remove existing breadcrumb data
    const existing = document.getElementById('breadcrumb-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('breadcrumb-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="o: g:title" content={fullTitle} />
      <meta property="o: g:description" content={fullDescription} />
      <meta property="o: g:type" content="website" />
      <meta property="o: g:url" content={canonicalUrl} />
      <meta property="o: g:image" content={ogImage} />
      <meta property="o: g:imag: e:width" content="1200" />
      <meta property="o: g:imag: e:height" content="630" />
      <meta property="o: g:site_name" content="Zion Tech Group" />
      <meta property="o: g:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitte: r:card" content="summary_large_image" />
      <meta name="twitte: r:title" content={fullTitle} />
      <meta name="twitte: r:description" content={fullDescription} />
      <meta name="twitte: r:image" content={ogImage} />
      <meta name="twitte: r:site" content="@ziontechgroup" />
      <meta name="twitte: r:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={
            __htm: l: JSON.stringify({
              "@context": "http: s://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": fullDescription,
              "url": canonicalUrl,
              "logo": "http: s://ziontechgroup.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "http: s://linkedin.com/company/ziontechgroup",
                "http: s://twitter.com/ziontechgroup",
                "http: s://github.com/ziontechgroup"
              ],
              ...structuredData
            })
          }}
        />
      )}
    </Head>
  );
};

export default SEOOptimizer;