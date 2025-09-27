import { useMemo, useCallback } from 'react';
import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

interface PerformanceOptimizerProps {
  enableServiceWorker?: boolean;
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
}

export default function PerformanceOptimizer({ 
  enableServiceWorker = true,
  enableLazyLoading = true,
  enableImageOptimization = true
}: PerformanceOptimizerProps) {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    const optimizePerformance = () => {
      // Enable lazy loading for images
      if (enableLazyLoading && typeof window !== 'undefined') {
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
      }
      
      setIsOptimized(true);
    };
    
    optimizePerformance();
  }, [enableLazyLoading]);
  
  return (
    <div className="performance-optimizer">
      {isOptimized && (
        <div className="text-sm text-green-600">
          Performance optimizations enabled
        </div>
      )}
    </div>
  );
}
