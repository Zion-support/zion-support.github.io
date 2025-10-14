export const performanceOptimizations = {
  debounce: <Textends (...args: unknown[]) => unknown>(func: T, wait: number): T => {
    let timeout: Node JS.Timeout;
    return ((...args: unknown[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    }) as T;
  },
  throttle: <Textends (...args: unknown[]) => unknown>(func: T, limit: number): T => {
    let inThrottle: boolean;
    return ((...args: unknown[]) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }) as T;
  },
  memoize: <Textends (...args: unknown[]) => unknown>(func: T): T => {
    const cache = newMap();
    return ((...args: unknown[]) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = func.apply(this, args);
      cache.set(key, result);
      return result;
    }) as T;
  }
};