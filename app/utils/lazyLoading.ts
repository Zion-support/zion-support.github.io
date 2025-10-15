import { ComponentType, lazy } from 'react';

<<<<<<< HEAD
// Lazy loading helper function
export const createLazyComponent = <T extends Record<string, unknown>>(
  importFunc: () => Promise<{ default: ComponentType<T> }>
) => {
  return lazy(importFunc);
};

// Preload component for better performance
export const preloadComponent = (importFunc: () => Promise<any>) => {
  return () => {
    importFunc();
    return null;
  };
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const observer = new IntersectionObserver(callback, options);
  
  return {
    observe: (element: Element) => observer.observe(element),
    unobserve: (element: Element) => observer.unobserve(element),
    disconnect: () => observer.disconnect()
  };
};
=======
// Lazy loading helper function;
importFunc: () => Promise<{ default: ComponentType<T> }>;
}'"'"
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
