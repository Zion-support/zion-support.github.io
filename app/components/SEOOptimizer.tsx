'use client';
import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Add structured data
    const addStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "description": "Advanced AI and IT Solutions",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "customer service"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    // Optimize headings
    const optimizeHeadings = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          const text = heading.textContent?.toLowerCase().replace(/\s+/g, '-');
          heading.id = text || `heading-${index}`;
        }
      });
    };

    // Add meta tags
    const addMetaTags = () => {
      if (!document.querySelector('meta[name="robots"]')) {
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'index, follow';
        document.head.appendChild(meta);
      }
    };

    addStructuredData();
    optimizeHeadings();
    addMetaTags();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default SEOOptimizer;