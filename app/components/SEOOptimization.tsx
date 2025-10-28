'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface SEOOptimizationProps {
  enableImageOptimization?: boolean;
  enableMetaOptimization?: boolean;
}

const SEOOptimization: React.FC<SEOOptimizationProps> = memo(({ 
  enableImageOptimization = true,
  enableMetaOptimization = true
}) => {
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined' || !enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.alt) {
        img.alt = img.src.split('/').pop()?.split('.')[0] || 'Image';
      }
    });
  }, [enableImageOptimization]);

  const optimizeMetaTags = useCallback(() => {
    if (typeof window === 'undefined' || !enableMetaOptimization) return;

    // Add meta description if missing
    if (!document.querySelector('meta[name="description"]')) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional technology services by Zion Tech Group';
      document.head.appendChild(meta);
    }
  }, [enableMetaOptimization]);

  useEffect(() => {
    optimizeImages();
    optimizeMetaTags();
  }, [optimizeImages, optimizeMetaTags]);

  return null;
});

SEOOptimization.displayName = 'SEOOptimization';

export default SEOOptimization;