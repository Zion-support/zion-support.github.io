import React from 'react';

const SEOOptimizer: React.FC = () => {
  return null; // This component doesn't render anything visible
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
    // Set up structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of advanced AI and IT solutions, transforming businesses through cutting-edge technology.",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-234-567-890",
        "contactType": "customer service",
        "email": "info@ziontechgroup.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup"
      ]
    };

    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Set up meta tags for better SEO
    const metaTags = [
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Zion Tech Group' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@ziontechgroup' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      document.head.appendChild(meta);
    });

    // Cleanup function
    return () => {
      // Remove the script tag on cleanup
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('Zion Tech Group')) {
          script.remove();
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SEOOptimizer;