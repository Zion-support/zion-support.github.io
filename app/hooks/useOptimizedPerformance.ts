import { useEffect, useCallback, useRef } from 'react';

interface PerformanceConfig {
  enableIntersectionObserver?: boolean;
  enableResizeObserver?: boolean;
  enableVisibilityChange?: boolean;
  throttleDelay?: number;
}

export const useOptimizedPerformance = (config: PerformanceConfig = {}) => {
  const {
    enableIntersectionObserver = true,
    enableResizeObserver = true,
    enableVisibilityChange = true,
    throttleDelay = 100
  } = config;

  const throttleRef = useRef<NodeJS.Timeout | null>(null);

  const throttledCallback = useCallback((callback: () => void) => {
    if (throttleRef.current) {
      clearTimeout(throttleRef.current);
    }
    
    throttleRef.current = setTimeout(() => {
      callback();
      throttleRef.current = null;
    }, throttleDelay);
  }, [throttleDelay]);

  useEffect(() => {
    if (!enableVisibilityChange) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause non-critical operations when tab is not visible
        document.body.classList.add('tab-hidden');
      } else {
        // Resume operations when tab becomes visible
        document.body.classList.remove('tab-hidden');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enableVisibilityChange]);

  useEffect(() => {
    if (!enableResizeObserver) return;

    const resizeObserver = new ResizeObserver(
      throttledCallback(() => {
        // Handle resize optimizations
        const viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        };
        
        // Update CSS custom properties for responsive design
        document.documentElement.style.setProperty('--viewport-width', `${viewport.width}px`);
        document.documentElement.style.setProperty('--viewport-height', `${viewport.height}px`);
      })
    );

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, [enableResizeObserver, throttledCallback]);

  const observeElement = useCallback((element: Element, callback: IntersectionObserverCallback) => {
    if (!enableIntersectionObserver) return () => {};

    const observer = new IntersectionObserver(
      throttledCallback(callback),
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [enableIntersectionObserver, throttledCallback]);

  const preloadResource = useCallback((href: string, as: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, []);

  const prefetchPage = useCallback((href: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }, []);

  return {
    observeElement,
    preloadResource,
    prefetchPage,
    throttledCallback
  };
};