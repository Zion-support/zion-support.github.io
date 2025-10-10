'use client';
import React, { useEffect } from 'react';

const PerformanceOptimizations: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png',
        '/images/ai-solutions.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
              }
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          loadAnalytics();
        });
      } else {
        loadAnalytics();
      }
    };

    const loadAnalytics = () => {
      // Load analytics only when needed
      if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
        // Load Google Analytics or other analytics here
        console.log('Analytics loaded');
      }
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeThirdPartyScripts();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizations;