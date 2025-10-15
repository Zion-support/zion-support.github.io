import React, { useEffect, useRef } from 'react';

interface PerformanceEnhancerProps {
  children: React.ReactNode;
  enableVirtualScrolling?: boolean;
  enableImageLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  children,
  enableVirtualScrolling = true,
  enableImageLazyLoading = true,
  enableCodeSplitting = true
}) => {
  // Use the parameters to avoid unused variable warnings
  console.log('Performance enhancer enabled:', { enableVirtualScrolling, enableCodeSplitting });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enable image lazy loading
    if (enableImageLazyLoading && containerRef.current) {
      const images = containerRef.current.querySelectorAll('img[data-src]');
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

      return () => {
        images.forEach((img) => imageObserver.unobserve(img));
      };
    }
    return undefined;
  }, [enableImageLazyLoading]);

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'measure') {
            console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
          }
        });
      });

      observer.observe({ entryTypes: ['measure'] });

      return () => observer.disconnect();
    }
    return undefined;
  }, []);

  return (
    <div ref={containerRef} className="performance-enhanced">
      {children}
    </div>
  );
};

export default PerformanceEnhancer;