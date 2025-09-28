import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!node) return;

    const frozen = freezeOnceVisible && entry?.isIntersecting;

    if (frozen) return;

    const observerInstance = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      {
        threshold,
        root,
        rootMargin
      }
    );

    observer.current = observerInstance;
    observerInstance.observe(node);

    return () => {
      observerInstance.disconnect();
    };
  }, [node, threshold, root, rootMargin, freezeOnceVisible, entry?.isIntersecting]);

  return [setNode, entry] as const;
};

export default useIntersectionObserver;