import { useEffect, useRef } from 'react';

export function useIntersectionObserver() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver();

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [callback, options]);

  return ref;
}

export default useIntersectionObserver;
