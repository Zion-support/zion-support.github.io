<<<<<<< HEAD
export const performanceOptimizations = { debounce: <T extends (...args: unknown[]) => unknown>(func: T, wait: number): T => {
=======
export const performanceOptimizations = { 
  debounce: <T extends (...args: unknown[]) => unknown>(func: T, wait: number): T => {
>>>>>>> cursor/fix-errors-and-merge-to-main-1a1e
    let timeout: NodeJS.Timeout;
    return ((...args: unknown[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
<<<<<<< HEAD
    }) as T},
  throttle: <T extends (...args: unknown[]) => unknown>(func: T, limit: number): T => { let inThrottle: boolean;
=======
    }) as T;
  },
  throttle: <T extends (...args: unknown[]) => unknown>(func: T, limit: number): T => { 
    let inThrottle: boolean;
>>>>>>> cursor/fix-errors-and-merge-to-main-1a1e
    return ((...args: unknown[]) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }) as T;
  },
  memoize: <T extends (...args: unknown[]) => unknown>(func: T): T => { 
    const cache = new Map();
    return ((...args: unknown[]) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = func.apply(this, args);
      cache.set(key, result);
      return result;
<<<<<<< HEAD
    }) as T}
};

export default NotFoundPage;
=======
    }) as T;
  }
};
>>>>>>> cursor/fix-errors-and-merge-to-main-1a1e
