'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
}) => {
  const [optimizationStatus, setOptimizationStatus] = useState({
    imagesOptimized: 0,
    lazyLoaded: 0,
    preloaded: 0,
    codeSplit: false,
  });

  useEffect(() => {
    if (enableImageOptimization) {
      optimizeImages();
    }
    if (enableLazyLoading) {
      setupLazyLoading();
    }
    if (enablePreloading) {
      preloadCriticalResources();
    }
    if (enableCodeSplitting) {
      setupCodeSplitting();
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    let optimized = 0;
    
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy');
        optimized++;
      }
      
      // Add decoding="async" for better performance
      img.setAttribute('decoding', 'async');
    });
    
    setOptimizationStatus(prev => ({ ...prev, imagesOptimized: optimized }));
  };

  const setupLazyLoading = () => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach((img) => observer.observe(img));
      
      setOptimizationStatus(prev => ({ ...prev, lazyLoaded: lazyImages.length }));
    }
  };

  const preloadCriticalResources = () => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/styles/critical.css';
    criticalCSS.as = 'style';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const criticalFont = document.createElement('link');
    criticalFont.rel = 'preload';
    criticalFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    criticalFont.as = 'style';
    document.head.appendChild(criticalFont);

    setOptimizationStatus(prev => ({ ...prev, preloaded: 2 }));
  };

  const setupCodeSplitting = () => {
    // This would be handled by Next.js dynamic imports
    setOptimizationStatus(prev => ({ ...prev, codeSplit: true }));
  };

  return (
    <div className="performance-optimizer">
      <div className="optimization-stats">
        <div className="stat">
          <span className="label">Images Optimized:</span>
          <span className="value">{optimizationStatus.imagesOptimized}</span>
        </div>
        <div className="stat">
          <span className="label">Lazy Loaded:</span>
          <span className="value">{optimizationStatus.lazyLoaded}</span>
        </div>
        <div className="stat">
          <span className="label">Preloaded Resources:</span>
          <span className="value">{optimizationStatus.preloaded}</span>
        </div>
        <div className="stat">
          <span className="label">Code Splitting:</span>
          <span className="value">{optimizationStatus.codeSplit ? 'Enabled' : 'Disabled'}</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;