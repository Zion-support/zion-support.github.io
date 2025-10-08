import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
        
        const metrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
          largestContentfulPaint: lcp ? lcp.startTime : 0,
          cumulativeLayoutShift: 0, // Would need to be measured with observer
          firstInputDelay: 0 // Would need to be measured with observer
        };
        
        setMetrics(metrics);
        
        // Check if performance is optimized
        const isGoodPerformance = 
          metrics.firstContentfulPaint < 1500 && 
          metrics.largestContentfulPaint < 2500;
        
        setIsOptimized(isGoodPerformance);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

=======
import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
>>>>>>> cursor/analyze-improve-and-deploy-application-3d67
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/og-image.jpg',
        '/logo.png',
        '/favicon.ico'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" to non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Intersection Observer for animations
    const setupIntersectionObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.1 }
      );

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    };

    // Initialize optimizations
    preloadCriticalResources();
  return null;
};

export default PerformanceOptimizer;