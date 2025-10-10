import { useEffect, useRef, useState, useCallback } from 'react';

export interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export interface UseIntersectionObserverReturn {
  ref: React.RefObject<Element>;
  entry: IntersectionObserverEntry | undefined;
  isIntersecting: boolean;
  isVisible: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<Element>(null);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = useCallback(
    ([entry]: IntersectionObserverEntry[]): void => {
      setEntry(entry);
      setIsVisible(entry.isIntersecting);
    },
    []
  );

  useEffect(() => {
    const node = ref?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, threshold, root, rootMargin, frozen, updateEntry]);

  return {
    ref,
    entry,
    isIntersecting: !!entry?.isIntersecting,
    isVisible,
  };
}

export default useIntersectionObserver;