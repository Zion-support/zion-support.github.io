'use client';

import React, { useEffect } from 'react';

const AdvancedSEOOptimizerNew: React.FC = () => {
  useEffect(() => {
    // Add additional SEO optimizations
    const addCanonicalLink = () => {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = window.location.href;
        document.head.appendChild(link);
      }
    };

    const addOpenGraphTags = () => {
      const ogTags = [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Zion Tech Group' }
      ];

      ogTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      });
    };

    addCanonicalLink();
    addOpenGraphTags();
  }, []);

  return null;
};

export default AdvancedSEOOptimizerNew;