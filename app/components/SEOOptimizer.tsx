import React, { useEffect } from 'react';

const SEOOptimizer: React.FC = () => {
  useEffect(() => {
    // SEO optimization code
    const addStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech",
        "description": "Advanced AI & IT Solutions for modern businesses",
        "url": window.location.origin,
        "logo": `${window.location.origin}/logo.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "customer service"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    const optimizeMetaTags = () => {
      // Ensure proper meta tags are set
      if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0';
        document.head.appendChild(viewport);
      }
    };

    addStructuredData();
    optimizeMetaTags();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SEOOptimizer;