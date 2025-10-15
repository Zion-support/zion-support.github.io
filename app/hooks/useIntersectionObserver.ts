import { useCallback, useEffect, useRef } from 'react';

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
    rootMargin = '0px',
    freezeOnceVisible = false
  } = options;

  const elementRef = useRef<Element | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isIntersectingRef = useRef(false);

  const setElement = useCallback((element: Element | null) => {
    elementRef.current = element;
  }, []);

  const startObserving = useCallback(() => {
    if (!elementRef.current || observerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isIntersectingRef.current = entry.isIntersecting;

        if (freezeOnceVisible && entry.isIntersecting) {
          observerRef.current?.disconnect();
        }
      },
      {
        threshold,
        root,
        rootMargin
      }
    );

    observerRef.current.observe(elementRef.current);
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  const stopObserving = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (elementRef.current) {
      startObserving();
    }

    return () => {
      stopObserving();
    };
  }, [startObserving, stopObserving]);

  return {
    setElement,
    isIntersecting: isIntersectingRef.current,
    startObserving,
    stopObserving
  };
};

export default useIntersectionObserver;