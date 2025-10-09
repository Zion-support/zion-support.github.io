'use client';

import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/inter-var.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    const optimizeImages = () => {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
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
      }
    };

    const optimizeAnimations = () => {
      // Reduce motion for users who prefer it
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--animation-iteration-count', '1');
      }
    };

    const optimizeScrolling = () => {
      // Smooth scrolling polyfill for older browsers
      if (!('scrollBehavior' in document.documentElement.style)) {
        // Add smooth scrolling CSS
        const style = document.createElement('style');
        style.textContent = 'html { scroll-behavior: smooth; }';
        document.head.appendChild(style);
      }
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeAnimations();
    optimizeScrolling();

    // Cleanup function
    return () => {
      // Remove any added event listeners or observers
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        img.removeAttribute('data-src');
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
