import React from 'react';

const SEOOptimizer: React.FC = () => {
  return null; // This component doesn't render anything visible
<<<<<<< HEAD
import React,{ useEffect } from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage: _ogImage,
  ogType: _ogType ='website',
  twitterCard: _twitterCard ='summary_large_image'
}) => {
  useEffect(() => {
    // SEO optimization code
    const optimizeSEO = () => {
      // Set meta description if not already set
      if (!document.querySelector('meta[name="description"]')) {
        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Advanced AI & IT Solutions - Transform your business with cutting-edge artificial intelligence, 5G technology, and comprehensive IT services.';
        document.head.appendChild(metaDescription);
      }

      // Set viewport meta tag if not already set
      if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0';
        document.head.appendChild(viewport);
      }

      // Add structured data for organization
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "description": "Advanced AI & IT Solutions",
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
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    optimizeSEO();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6be4
};

export default SEOOptimizer;
