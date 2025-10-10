'use client';

import React, { useEffect } from 'react';

const AdvancedSEOOptimizer: React.FC = () => {
  useEffect(() => {
    // Add structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Advanced AI and IT solutions provider',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      sameAs: [
        'https://linkedin.com/company/ziontechgroup',
        'https://twitter.com/ziontechgroup'
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add meta tags
    const metaTags = [
      { name: 'robots', content: 'index,follow' },
      { name: 'author', content: 'Zion Tech Group' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', tag.name);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default AdvancedSEOOptimizer;