import React, { useEffect } from 'react';

<<<<<<< HEAD
import React from 'react';
// import { usePathname } from 'next/navigation';
=======
const SEOOptimizer: React.FC = () => {
  useEffect(() => {
    // Add structured data for better SEO
    const addStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
        "foundingDate": "2020",
        "numberOfEmployees": "50-100",
        "industry": "Technology",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "Customer Service",
          "areaServed": "US",
          "availableLanguage": "en"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "364 E Main St STE 1008",
          "addressLocality": "Middletown",
          "addressRegion": "DE",
          "postalCode": "19709",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://twitter.com/ziontechgroup",
          "https://linkedin.com/company/ziontechgroup",
          "https://github.com/ziontechgroup"
        ]
      };
>>>>>>> cursor/fix-errors-and-merge-to-main-398f

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    // Optimize meta tags
    const optimizeMetaTags = () => {
      // Add canonical URL
      if (!document.querySelector('link[rel="canonical"]')) {
        const canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = window.location.href;
        document.head.appendChild(canonical);
      }

      // Add Open Graph tags if not present
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:title');
        meta.content = 'Zion Tech Group - Advanced AI and IT Solutions';
        document.head.appendChild(meta);
      }
    };

    // Add breadcrumb navigation
    const addBreadcrumbs = () => {
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
      document.head.appendChild(script);
    };

    // Initialize SEO optimizations
    addStructuredData();
    optimizeMetaTags();
    addBreadcrumbs();
  }, []);

  return null;
};

export default SEOOptimizer;