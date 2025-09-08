import { useState, useEffect, useRef, useCallback } from 'react';

interface UseLazyComponentOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseLazyComponentReturn<T> {
  ref: React.RefObject<HTMLElement>;
  Component: T | null;
  isLoading: boolean;
  isError: boolean;
  isVisible: boolean;
}

/**
 * Hook for lazy loading components with intersection observer
 */
export function useLazyComponent<T = React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: UseLazyComponentOptions = {}
): UseLazyComponentReturn<T> {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true,
  } = options;

  const [Component, setComponent] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const loadComponent = useCallback(async () => {
    if (isLoading || Component || hasTriggered) return;

    setIsLoading(true);
    setHasTriggered(true);

    try {
      const module = await importFn();
      setComponent(() => module.default);
      setIsError(false);
    } catch (error) {
      console.error('Failed to load component:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [importFn, isLoading, Component, hasTriggered]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isIntersecting = entry.isIntersecting;
        
        setIsVisible(isIntersecting);

        if (isIntersecting && !hasTriggered) {
          loadComponent();
        }

        if (triggerOnce && isIntersecting) {
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [loadComponent, threshold, rootMargin, triggerOnce, hasTriggered]);

  return {
    ref,
    Component,
    isLoading,
    isError,
    isVisible,
  };
}

/**
 * Hook for lazy loading with manual trigger
 */
export function useLazyLoad<T = React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) {
  const [Component, setComponent] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const loadComponent = useCallback(async () => {
    if (isLoading || Component) return;

    setIsLoading(true);

    try {
      const module = await importFn();
      setComponent(() => module.default);
      setIsError(false);
    } catch (error) {
      console.error('Failed to load component:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [importFn, isLoading, Component]);

  return {
    Component,
    isLoading,
    isError,
    loadComponent,
  };
}

/**
 * Hook for lazy loading images
 */
export function useLazyImage(src: string, options: UseLazyComponentOptions = {}) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  const {
    threshold = 0.1,
    rootMargin = '50px',
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isIntersecting = entry.isIntersecting;
        
        setIsVisible(isIntersecting);

        if (isIntersecting && !imageSrc && !isLoading) {
          setIsLoading(true);
          setImageSrc(src);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [src, imageSrc, isLoading, threshold, rootMargin]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setIsError(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setIsError(true);
  }, []);

  return {
    ref,
    src: imageSrc,
    isLoading,
    isError,
    isVisible,
    onLoad: handleLoad,
    onError: handleError,
  };
}