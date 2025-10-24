'use client';

import React, { useEffect} from 'react';

const PerformanceOptimizer: React.FC = () => {

  useEffect(() => {
    // Initialize performance optimizations
    const initPerformanceOptimizations = () => {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      images.forEach((img) => imageObserver.observe(img));

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/css/critical.css'
      ];
      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });

      // Optimize scroll performance
      let ticking = false;
      const updateScrollPosition = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        document.documentElement.style.setProperty('--scroll-top', `${scrollTop}px`);
        ticking = false;
      };
      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };
      window.addEventListener('scroll', requestTick, { passive: true});
    };

    initPerformanceOptimizations();
  }, []);

  return null;
};

export default PerformanceOptimizer;