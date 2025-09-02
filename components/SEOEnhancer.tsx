import React, { useEffect } from 'react';

interface SEOEnhancerProps {
  children: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add structured data
    const addStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "description": "Leading provider of cutting-edge technology solutions, AI services, and digital transformation services.",
        "sameAs": [
          "https://linkedin.com/company/zion-tech-group",
          "https://twitter.com/ziontechgroup"
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    // Add meta tags for better SEO
    const addMetaTags = () => {
      const metaTags = [
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'bingbot', content: 'index, follow' }
      ];

      metaTags.forEach(tag => {
        if (!document.querySelector(`meta[name="${tag.name}"]`)) {
          const meta = document.createElement('meta');
          meta.name = tag.name;
          meta.content = tag.content;
          document.head.appendChild(meta);
        }
      });
    };

    addStructuredData();
    addMetaTags();
  }, []);

  return <>{children}</>;
};

export default SEOEnhancer;