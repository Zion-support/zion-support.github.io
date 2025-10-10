'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description
    const updateMetaTag = (name: string, content: string, attribute = 'name') => {
      const meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.setAttribute(attribute, name);
        newMeta.setAttribute('content', content);
        document.head.appendChild(newMeta);
      }
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    
    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonical);
    }

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      script.id = 'structured-data';
      
      // Remove existing structured data
      const existing = document.getElementById('structured-data');
      if (existing) {
        existing.remove();
      }
      document.head.appendChild(script);
    }

    // Add breadcrumb structured data
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ziontechgroup.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title,
          "item": canonicalUrl
        }
      ]
    });
    breadcrumbScript.id = 'breadcrumb-structured-data';
    
    // Remove existing breadcrumb structured data
    const existingBreadcrumb = document.getElementById('breadcrumb-structured-data');
    if (existingBreadcrumb) {
      existingBreadcrumb.remove();
    }
    document.head.appendChild(breadcrumbScript);
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description || 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
          "foundingDate": "2020",
          "numberOfEmployees": "50-100",
          "industry": "Technology",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "Customer Service",
            "areaServed": "US",
            "availableLanguage": "en"
          },
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOOptimizer;