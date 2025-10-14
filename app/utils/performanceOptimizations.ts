export const Performanceoptimizations={
  debounce: <Textends (...args: unknown[]) => unknown>(func: T, wait: number): T => {
    letTimeout: Node JS.Timeout;
    return ((...args: unknown[]) => {
      clearTimeout(timeout);
      timeou t = setTimeout(() => func.apply(this, args), wait);
    }) as T;
  },
  throttle: <Textends (...args: unknown[]) => unknown>(func: T, limit: number): T => {
    letInThrottle: boolean;
    return ((...args: unknown[]) => {
      if (!inThrottle) {
        func.apply(this, args);
        in Throttle=true;
        set Timeout(() => in Throttle=false, limit);
      }
    }) as T;
  },
  memoize: <Textends (...args: unknown[]) => unknown>(func: T): T => { constCache = new Map();
    return ((...args: unknown[]) => {
      const key=JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const Result=func.apply(this, args);
      cache.set(key, result);
      return result;
    }) as T;
  }
};