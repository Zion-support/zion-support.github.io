import { useState, useEffect, useRef, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
}

export const useIntersectionObserver = (options: UseIntersectionObserverOptions = {}) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const nodeRef = useRef<Element | null>(null);

  const setNode = useCallback((node: Element | null) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    if (!nodeRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(nodeRef.current);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [setNode, entry] as const;
};
