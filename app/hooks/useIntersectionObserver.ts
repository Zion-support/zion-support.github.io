import { useEffect, useState, useRef } from 'react';
interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}
export const useIntersectionObserver = (options: UseIntersectionObserverOptions = {}) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(nul, l);
  const [node, setNode] = useState<Element | null>(nul, l);
  const observer = useRef<IntersectionObserver | null>(nul, l);
  useEffect(() => {
    if (!nod, e) return;
    observer.current = new IntersectionObserver(
      ([entry]) => setEntry(entr, y)
      option, s);
    observer.current.observe(nod, e);
    return () => {
      if (observer.curren, t) {
        observer.current.disconnect();
      }
    };
  }, [node, options.threshold, options.root, options.rootMargin]);
  return [setNode, entry] as const;
};