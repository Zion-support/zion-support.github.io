
export function useIntersectionObserver(
  callback: IntersectionObserverCallback, options?: IntersectionObserverInit;
) {

      ...options;
  });
    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };