import React, { useState, useEffect } from 'react';

interface PerformanceEnhancerProps {
  children: React.ReactNode;
  className?: string;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  children,
  className = ''
}) => {

  useEffect(() => {
    // Simulate performance optimization
    const optimize = async () => {
      // Preload critical resources
      const criticalImages = document.querySelectorAll('img[data-critical]');
      criticalImages.forEach((img) => {
        const imageElement = img as HTMLImageElement;
        if (imageElement.src) {
          const preloadLink = document.createElement('link');
          preloadLink.rel = 'preload';
          preloadLink.as = 'image';
          preloadLink.href = imageElement.src;
          document.head.appendChild(preloadLink);
        }
      });

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        const imageElement = img as HTMLImageElement;
        if (!imageElement.loading) {
          imageElement.loading = 'lazy';
        }
      });

      setIsOptimized(true);
    };

    optimize();
  }, []);

  return (
    <div className={`performance-enhanced ${className}`}>
      {children}
    </div>
  );
};

export default PerformanceEnhancer;