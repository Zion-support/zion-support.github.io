import { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface UsePerformanceOptimizationReturn {
  metrics: PerformanceMetrics | null;
  isOptimized: boolean;
  optimizeImage: (src: string) => string;
  preloadResource: (href: string, as: string) => void;
}

export const usePerformanceOptimization = (): UsePerformanceOptimizationReturn => {
  const metricsRef = useRef<PerformanceMetrics | null>(null);
  const isOptimizedRef = useRef<boolean>(false);

  const optimizeImage = useCallback((src: string): string => {
    // Add WebP format support and quality optimization
    if (src.includes('.')) {
      const [name] = src.split('.');
      return `${name}.webp`;
    }
    return src;
  }, []);

  const preloadResource = useCallback((href: string, as: string): void => {
    if (typeof window === 'undefined') return;

    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (existingLink) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const measurePerformance = (): void => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          
          // Get paint metrics
          const paintEntries = performance.getEntriesByType('paint');
          const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
          const firstContentfulPaint = fcp ? fcp.startTime : 0;

          // Get LCP
          const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
          const largestContentfulPaint = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : 0;

          metricsRef.current = {
            loadTime,
            firstContentfulPaint,
            largestContentfulPaint,
            cumulativeLayoutShift: 0, // Would need to be measured with observer
            firstInputDelay: 0 // Would need to be measured with observer
          };

          // Check if performance is optimized
          isOptimizedRef.current = 
            loadTime < 2000 && 
            firstContentfulPaint < 1500 && 
            largestContentfulPaint < 2500;
        }
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Preload critical resources
    preloadResource('/app/styles/futuristic.css', 'style');
    preloadResource('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', 'style');

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [preloadResource]);

  return {
    metrics: metricsRef.current,
    isOptimized: isOptimizedRef.current,
    optimizeImage,
    preloadResource
  };
};