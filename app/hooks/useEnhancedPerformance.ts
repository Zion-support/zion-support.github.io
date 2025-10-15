import { useState, useRef, useCallback } from 'react';

interface UseEnhancedPerformanceOptions {
  enablePreloading?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enableImageOptimization?: boolean;
}

interface UseEnhancedPerformanceState {
  isPreloading: boolean;
  isLazyLoading: boolean;
  loadedResources: Set<string>;
}

export const useEnhancedPerformance = (options: UseEnhancedPerformanceOptions = {}) => {
  const {
    enablePreloading = true,
    enableLazyLoading = true
  } = options;

  const [state, setState] = useState<UseEnhancedPerformanceState>({
    isPreloading: false,
    isLazyLoading: false,
    loadedResources: new Set()
  });

  const stateRef = useRef<UseEnhancedPerformanceState>(state);

  const preloadResource = useCallback((url: string, type: 'script' | 'style' | 'image' | 'font' = 'script') => {
    if (!enablePreloading || stateRef.current.loadedResources.has(url)) {
      return;
    }

    setState(prev => ({
      ...prev,
      isPreloading: true,
      loadedResources: new Set([...prev.loadedResources, url])
    }));

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = type;
    document.head.appendChild(link);

    link.onload = () => {
      setState(prev => ({
        ...prev,
        isPreloading: false
      }));
    };
  }, [enablePreloading]);

  const lazyLoadImage = useCallback((img: HTMLImageElement, src: string) => {
    if (!enableLazyLoading) {
      img.src = src;
      return;
    }

    setState(prev => ({
      ...prev,
      isLazyLoading: true
    }));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.src = src;
          observer.unobserve(img);
          setState(prev => ({
            ...prev,
            isLazyLoading: false
          }));
        }
      });
    });

    observer.observe(img);
  }, [enableLazyLoading]);

  return {
    ...state,
    preloadResource,
    lazyLoadImage
  };
};

export default useEnhancedPerformance;