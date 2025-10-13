import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Add SEO optimizations
    const optimizeSEO = () => {
      // Add structured data
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "description": "Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation for modern businesses."
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Add meta tags for better SEO
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

    optimizeSEO();
  }, []);

  return <>{children}</>;
};

export default SEOOptimizer;
