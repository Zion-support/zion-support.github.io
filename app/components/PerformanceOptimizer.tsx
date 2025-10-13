import React, { useEffect } from 'react';
interface PerformanceOptimizerProps {
  children: React.ReactNode;
}
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Performance optimization logic
    const optimizePerformance = () => {
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
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
      // Add performance monitoring
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          // Send performance data to analytics instead of console logging
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'page_load_time', {
              value: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
              custom_parameter: 'performance_optimizer'
            });
          }
        });
      }
    };
    optimizePerformance();
    return () => {
      // Cleanup if needed
    };
  }, []);
  return <>{children}</>;
};
export default PerformanceOptimizer;