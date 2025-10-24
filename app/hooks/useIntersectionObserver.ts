import { useState, useEffect, useRef, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

interface UseIntersectionObserverReturn {
  setNode: (node: Element | null) => void;
  entry: IntersectionObserverEntry | null;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const disconnect = useCallback(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (node) {
      observer.current = new IntersectionObserver(
        ([entry]) => {
          setEntry(entry);
        },
        {
          threshold: options.threshold || 0,
          root: options.root || null,
          rootMargin: options.rootMargin || '0px',
        }
      );

      observer.current.observe(node);
    }

    return disconnect;
  }, [node, options.threshold, options.root, options.rootMargin, disconnect]);

  return { setNode, entry };
};
