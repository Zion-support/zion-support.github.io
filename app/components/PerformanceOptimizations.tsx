'use client';
import React, { useEffect } from 'react';
const PerformanceOptimizations: React.FC = () => {
  useEffect(() => {
    // Preload critical resources;
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/ai-services-bg.jpg',
        '/images/it-services-bg.jpg'
      ];
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };
    // Optimize images;
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };
    // Preconnect to external domains;
    const preconnectDomains = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com'
      ];
      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        document.head.appendChild(link);
      });
    };
    // Initialize optimizations;
    preloadCriticalResources();
    optimizeImages();
    preconnectDomains();
    // Intersection Observer for lazy loading;
    const setupIntersectionObserver = () => {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              if (element.dataset['src']) {
                element.style.backgroundImage = `url(${element.dataset['src']})`;
                element.removeAttribute('data-src');
                observer.unobserve(element);
              }
            }
          });
        });
        document.querySelectorAll('[data-src]').forEach(el => {
          observer.observe(el);
        });
      }
    };
    setupIntersectionObserver();
    // Service Worker registration;
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);
  return null;
};
export default PerformanceOptimizations;