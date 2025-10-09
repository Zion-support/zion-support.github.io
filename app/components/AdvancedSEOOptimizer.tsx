'use client';
import React, { useEffect } from 'react';

interface AdvancedSEOOptimizerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({ 
  children, 
  title, 
  description, 
  keywords 
}) => {
  useEffect(() => {
    // Advanced SEO optimizations
    const optimizeSEO = () => {
      // Update meta tags
      if (title) {
        document.title = title;
        const metaTitle = document.querySelector('meta[property="og:title"]');
        if (metaTitle) {
          metaTitle.setAttribute('content', title);
        }
      }

      if (description) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', description);
        }
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
          ogDesc.setAttribute('content', description);
        }
      }

      if (keywords) {
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
          metaKeywords.setAttribute('content', keywords);
        }
      }

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
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    optimizeSEO();
  }, [title, description, keywords]);

  return <>{children}</>;
};

export default AdvancedSEOOptimizer;