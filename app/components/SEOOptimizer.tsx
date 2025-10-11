'use client'
import React, { useEffect } from 'react'

const SEOOptimizer: React.FC = () => {
  useEffect(() => {
    // SEO optimization code
    const optimizeSEO = () => {
      // Add structured data
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "description": "Leading provider of AI-powered enterprise solutions"
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    optimizeSEO();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default SEOOptimizer;