import { useEffect, useState, useRef } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export const useIntersectionObserver = (options: UseIntersectionObserverOptions = {}) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!node) return;

    observer.current = new IntersectionObserver(
      ([entry]) => setEntry(entry),
      options
    );

    observer.current.observe(node);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
<<<<<<< HEAD
    }
=======
    };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc
  }, [node, options]);

  return [setNode, entry] as const;
}