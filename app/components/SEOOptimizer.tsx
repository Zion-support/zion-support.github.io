'use client';
import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Optimize SEO elements
    const optimizeSEO = () => {
      // Add structured data
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "description": "Leading provider of AI and IT solutions for modern businesses",
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
          "contactType": "customer service",
          "email": "kleber@ziontechgroup.com"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt) {
          img.alt = 'Zion Tech Group - AI and IT Solutions';
        }
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });

      // Add meta tags if not present
      if (!document.querySelector('meta[name="robots"]')) {
        const robots = document.createElement('meta');
        robots.name = 'robots';
        robots.content = 'index, follow';
        document.head.appendChild(robots);
      }
    };

    optimizeSEO();
  }, []);

  return <>{children}</>;
};

export default SEOOptimizer;
