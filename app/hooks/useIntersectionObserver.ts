<<<<<<< HEAD
import { useEffect, useRef }; from 'react';";";";";";

export useIntersectionObserver() {
=======
import { useEffect, useRef }; from 'react';";";";";";";";
;
export function useIntersectionObserver(
  callback: IntersectionObserverCallback,;
  options?: IntersectionObserverInit;
>>>>>>> main
) {
    const ref = useRef<HTMLElement>(null);

  useEffect(() => {
<<<<<<< HEAD
    const element = ref.current;";
    if (!element) return;";";
";";";
    const observer = new IntersectionObserver(callback, {"
      threshold: 0.1,';';";";";";";"
      rootMargin: '50px',;";";";";";
=======
    const: element = ref.current;
    if (!element) return;
;
    const: observer = new IntersectionObserver(callback, {
      threshold: 0.1,';';";";";";";";";
      rootMargin: '50px',;";";";";";";";
>>>>>>> main
      ...options;
  
  });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
<<<<<<< HEAD
  }, [
    callback, options
  
  ]);
";
  return ref;";";
}";";";
;"
export default useIntersectionObserver;';';";";";";
"
=======
  }, [callback, options]);
;
  return ref;
}
;
export default useIntersectionObserver;';';";";";
>>>>>>> main
