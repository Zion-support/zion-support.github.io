import { useCallback, useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<Element | null>(null);

  const { threshold = 0, root = null, rootMargin = '0px' } = options;

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
    
    if (entry.isIntersecting && !hasIntersected) {
      setHasIntersected(true);
    }
  }, [hasIntersected]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(callback, {
      threshold,
      root,
      rootMargin
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [callback, threshold, root, rootMargin]);

  return {
    elementRef,
    isIntersecting,
    hasIntersected
  };
};
