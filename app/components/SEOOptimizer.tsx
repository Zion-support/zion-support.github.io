'use client';
import React, { memo, useEffect } from 'react';

interface SEOOptimizerProps {
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = memo(({ children }) => {
  useEffect(() => {
    // SEO optimization logic
    const optimizeSEO = () => {
      // Add structured data
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "description": "Advanced AI and IT Solutions"
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Optimize meta tags
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && metaDescription.getAttribute('content')?.length < 160) {
        console.warn('Meta description is too short for optimal SEO');
      }
    };

    optimizeSEO();
  }, []);

  return <>{children}</>;
});

SEOOptimizer.displayName = 'SEOOptimizer';

export default SEOOptimizer;