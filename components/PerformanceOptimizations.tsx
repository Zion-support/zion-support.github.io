'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceOptimizationsProps {
  children: React.ReactNode;
}

export default function PerformanceOptimizations({ children }: PerformanceOptimizationsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Performance optimizations
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const preloadCriticalResources = () => {
        const criticalImages = [
          '/images/hero-bg.jpg',
          '/images/logo.png',
          '/images/ai-2025-banner.jpg'
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
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      };

      // Prefetch important pages
      const prefetchPages = () => {
        const importantPages = [
          '/ai-services-2025',
          '/quantum-computing-solutions-2025',
          '/case-studies',
          '/resources'
        ];

        importantPages.forEach(page => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = page;
          document.head.appendChild(link);
        });
      };

      // Run optimizations
      preloadCriticalResources();
      optimizeImages();
      prefetchPages();

      // Service worker registration for caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered:', registration);
          })
          .catch(error => {
            console.log('Service Worker registration failed:', error);
          });
      }
    }
  }, []);

  return (
    <>
      {isClient && (
        <div className="performance-optimizations">
          {/* Performance monitoring */}
          <div className="sr-only" aria-hidden="true">
            Performance optimizations active
          </div>
        </div>
      )}
      {children}
    </>
  );
}