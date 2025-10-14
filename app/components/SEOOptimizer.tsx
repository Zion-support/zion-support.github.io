import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SEOOptimizer: React.FC = () => {
  useEffect(() => {
    // SEO optimization strategies
    const optimizeSEO = () => {
      // Add structured data
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "description": "Leading provider of advanced AI and IT solutions",
        "url": "https://ziontech.com",
        "logo": "https://ziontech.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://twitter.com/ziontech",
          "https://linkedin.com/company/ziontech"
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Add meta tags for social sharing
      const metaTags = [
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Zion Tech Group' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Zion Tech Group' },
        { property: 'twitter:card', content: 'summary_large_image' }
      ];

      metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        Object.entries(tag).forEach(([key, value]) => {
          meta.setAttribute(key, value);
        });
        document.head.appendChild(meta);
      });
    };

    // Run SEO optimization
    optimizeSEO();
  }, []);

  return (
    <Helmet>
      <title>Zion Tech Group - Advanced AI & IT Solutions</title>
      <meta name="description" content="Transform your business with cutting-edge artificial intelligence, 5G technology, and comprehensive IT services. Leading provider of AI and IT solutions." />
      <meta name="keywords" content="AI solutions, IT services, 5G technology, artificial intelligence, machine learning, cybersecurity, cloud computing" />
      <link rel="canonical" href="https://ziontech.com" />
    </Helmet>
  );
};

export default SEOOptimizer;