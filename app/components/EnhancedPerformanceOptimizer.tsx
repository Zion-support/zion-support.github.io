'use client'
import React, { useEffect } from 'react'

const EnhancedPerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Performance optimization code
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = '/fonts/inter.woff2';
      preloadLink.as = 'font';
      preloadLink.type = 'font/woff2';
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });

      // Add performance monitoring
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (perfData) {
            console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
          }
        });
      }
    }
  }, []);

  return null; // This component doesn't render anything visible
}

export default EnhancedPerformanceOptimizer