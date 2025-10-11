'use client';
import React, { useEffect } from 'react';

const EnhancedPerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Performance optimization logic
    const optimizePerformance = () => {
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg',
        '/icons/sprite.svg'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        document.head.appendChild(link);
      });

      // Optimize images
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));

      // Optimize third-party scripts
      const thirdPartyScripts = document.querySelectorAll('script[data-defer]');
      thirdPartyScripts.forEach(script => {
        script.setAttribute('defer', '');
      });
    };

    // Run optimization after component mounts
    const timer = setTimeout(optimizePerformance, 100);
    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything visible
};

export default EnhancedPerformanceOptimizer;