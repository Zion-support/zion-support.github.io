'use client';

import React, { useEffect, memo } from 'react';

interface PerformanceOptimizationsProps {
  className?: string;
}

// Type definitions for Performance API entries



const PerformanceOptimizations: React.FC<PerformanceOptimizationsProps> = memo(({ className = '' }) => {
  useEffect(() => {
    // Implement performance optimizations
    
    // 1. Preload critical resources
    const preloadCriticalResources = () => {
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
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // 2. Implement lazy loading for images
    const implementLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
              }
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // 3. Optimize scroll performance
    const optimizeScrollPerformance = () => {
      let ticking = false;
      
      const updateScrollPosition = () => {
        // Throttle scroll events
        if (!ticking) {
          requestAnimationFrame(() => {
            // Update scroll position
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', updateScrollPosition, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', updateScrollPosition);
      };
    };

    // 4. Implement resource hints
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        Object.assign(link, hint);
        document.head.appendChild(link);
      });
    };

    // 5. Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if ('web-vital' in window) {
        // This would require the web-vitals library
        // For now, we'll implement a basic version
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
            if (entry.entryType === 'first-input') {
              console.log('CLS:', (entry as any).value);
            }
          });
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      }
    };

    // Initialize optimizations
    preloadCriticalResources();
    implementLazyLoading();
    addResourceHints();
    monitorCoreWebVitals();
    
    const cleanup = optimizeScrollPerformance();

    return cleanup;
  }, []);

  return (
    <div className={`performance-optimizations ${className}`}>
      {/* This component doesn't render anything visible */}
    </div>
  );
});

PerformanceOptimizations.displayName = 'PerformanceOptimizations';

export default PerformanceOptimizations;