import React, { useEffect } from 'react';

const SEOOptimizer: React.FC = () => {
  useEffect(() => {
    // SEO optimization code
    const optimizeMetaTags = () => {
      // Ensure proper meta tags are set
      const metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = 'Zion Tech Group - Advanced AI & IT Solutions. Transform your business with cutting-edge artificial intelligence, 5G technology, and comprehensive IT services.';
        document.head.appendChild(meta);
      }

      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = 'AI solutions, IT services, 5G technology, cybersecurity, cloud computing, business transformation, artificial intelligence';
        document.head.appendChild(meta);
      }

      // Set viewport meta tag if not present
      const viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0';
        document.head.appendChild(meta);
      }
    };

    const optimizeStructuredData = () => {
      // Add structured data for better SEO
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "description": "Advanced AI & IT Solutions provider",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "customer service",
          "email": "info@ziontech.com"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Tech Street",
          "addressLocality": "Innovation City",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://facebook.com/ziontech",
          "https://twitter.com/ziontech",
          "https://linkedin.com/company/ziontech"
        ]
      };

      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    const optimizePageSpeed = () => {
      // Add DNS prefetch for external resources
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'cdnjs.cloudflare.com'
      ];

      dnsPrefetchDomains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });
    };

    // Run SEO optimizations
    optimizeMetaTags();
    optimizeStructuredData();
    optimizePageSpeed();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SEOOptimizer;