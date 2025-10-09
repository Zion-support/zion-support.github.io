'use client';
import React, { memo, useEffect } from 'react';

interface SEOOptimizerProps {
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = memo(({ children }) => {
  useEffect(() => {
    // SEO optimization logic
    if (typeof window !== 'undefined') {
      // Add structured data
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services."
      };
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, []);

  return <>{children}</>;
});

SEOOptimizer.displayName = 'SEOOptimizer';

export default SEOOptimizer;