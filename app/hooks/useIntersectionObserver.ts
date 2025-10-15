import { useEffect, useRef } from 'react';

export function useIntersectionObserver() {
  const ref = useRef<HTMLElement>(null);

>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver();

>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
    observer.observe(element);
;
    return () => {
      observer.unobserve(element);
    };
  }, [callback, options]);
;
  return ref;
}

export default useIntersectionObserver;
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
