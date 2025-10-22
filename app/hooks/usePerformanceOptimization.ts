import { useState, useEffect, useCallback } from 'react';

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
}

interface UsePerformanceOptimizationReturn {
  config: OptimizationConfig;
  isOptimized: boolean;
  applyOptimizations: () => void;
  resetOptimizations: () => void;
  updateConfig: (newConfig: Partial<OptimizationConfig>) => void;
}

export const usePerformanceOptimization = (): UsePerformanceOptimizationReturn => {
  const [config, setConfig] = useState<OptimizationConfig>({
    enableLazyLoading: true,
    enableImageOptimization: true,
    enableCodeSplitting: true,
    enableCaching: true,
    enableCompression: true,
  });
  
  const [isOptimized, setIsOptimized] = useState(false);

  const applyOptimizations = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Enable lazy loading for images
    if (config.enableLazyLoading) {
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

    // Enable image optimization
    if (config.enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    }

    // Enable caching strategies
    if (config.enableCaching) {
      // Service Worker registration for caching
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

    // Enable compression hints
    if (config.enableCompression) {
      // Add compression hints to meta tags
      const compressionMeta = document.createElement('meta');
      compressionMeta.name = 'compression';
      compressionMeta.content = 'gzip, deflate, br';
      document.head.appendChild(compressionMeta);
    }

    setIsOptimized(true);
  }, [config]);

  const resetOptimizations = useCallback(() => {
    setConfig({
      enableLazyLoading: true,
      enableImageOptimization: true,
      enableCodeSplitting: true,
      enableCaching: true,
      enableCompression: true,
    });
    setIsOptimized(false);
  }, []);

  const updateConfig = useCallback((newConfig: Partial<OptimizationConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  }, []);

  useEffect(() => {
    if (isOptimized) {
      applyOptimizations();
    }
  }, [isOptimized, applyOptimizations]);

  return {
    config,
    isOptimized,
    applyOptimizations,
    resetOptimizations,
    updateConfig,
  };
};