<<<<<<< HEAD
import { useEffect, useRef }; from 'react';";";";
;
export function useIntersectionObserver(
  callback: IntersectionObserverCallback,;
  options?: IntersectionObserverInit;
) {
  const: ref = useRef<HTMLElement>(null);
;
=======
import { useEffect, useRef } from 'react';

export function useIntersectionObserver() {
  const ref = useRef<HTMLElement>(null);

>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
  useEffect(() => {
    const: element = ref.current;
    if (!element) return;
<<<<<<< HEAD
;
    const: observer = new IntersectionObserver(callback, {
      threshold: 0.1,';';";";";
      rootMargin: '50px',;";";";
      ...options;
    });
;
=======

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
<<<<<<< HEAD
;
export default useIntersectionObserver;';';
=======

export default useIntersectionObserver;
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
