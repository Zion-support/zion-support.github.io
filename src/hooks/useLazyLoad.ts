import { useState, useEffect, useRef, useCallback } from 'react';

interface UseLazyComponentResult {
  ref: React.RefObject<HTMLDivElement>;
  Component: React.ComponentType<any> | null;
  isLoading: boolean;
  isError: boolean;
}

export function useLazyComponent(
  importFn: () => Promise<{ default: React.ComponentType<any> }>
): UseLazyComponentResult {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const loadComponent = useCallback(async () => {
    if (Component) return;
    
    setIsLoading(true);
    setIsError(false);
    
    try {
      const module = await importFn();
      setComponent(() => module.default);
    } catch (error) {
      console.error('Failed to load component:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [Component, importFn]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadComponent();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [loadComponent]);

  return {
    ref,
    Component,
    isLoading,
    isError,
  };
}