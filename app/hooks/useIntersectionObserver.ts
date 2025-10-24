import { useState, useEffect, useRef, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
}

export const useIntersectionObserver = (options: UseIntersectionObserverOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const elementRef = useRef<Element | null>(null);

  const setNode = useCallback((node: Element | null) => {
    elementRef.current = node;
  }, []);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || '0px',
        root: options.root || null,
      }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin, options.root]);

  return [setNode, entry] as const;
};
