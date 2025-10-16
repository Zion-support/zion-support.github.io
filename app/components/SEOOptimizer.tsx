import React, { useEffect } from 'react';

const SEOOptimizer: React.FC = () => {
  useEffect(() => {
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup",
        "https://github.com/ziontechgroup"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add meta tags for better SEO (only if they don't exist)
    const metaTags = [
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'author', content: 'Zion Tech Group' },
      { name: 'theme-color', content: '#1e293b' },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:site', content: '@ziontechgroup' },
      { name: 'twitter:creator', content: '@ziontechgroup' }
    ];

    metaTags.forEach(tag => {
      const selector = Object.keys(tag).map(key => `[${key}="${tag[key]}"]`).join('');
      const existingMeta = document.querySelector(`meta${selector}`);
      
      if (!existingMeta) {
        const meta = document.createElement('meta');
        Object.entries(tag).forEach(([key, value]) => {
          meta.setAttribute(key, value);
        });
        document.head.appendChild(meta);
      }
    });

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
};

export default SEOOptimizer;
