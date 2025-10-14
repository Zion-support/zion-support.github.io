export const performance Optimizations = {
  debounce: <Textends (...args: unknown[]) => unknown>(func: T, wait: number): T => {
    let timeout: Node JS.Timeout;
    return ((...args: unknown[]) => {
      clear Timeout(timeout);
      timeout = set Timeout(() => func.apply(this, args), wait);
    }) as T;
  },
  throttle: <Textends (...args: unknown[]) => unknown>(func: T, limit: number): T => {
    let in Throttle: boolean;
    return ((...args: unknown[]) => {
      if (!in Throttle) {
        func.apply(this, args);
        in Throttle = true;
        set Timeout(() => in Throttle = false, limit);
      }
    }) as T;
  },
  memoize: <Textends (...args: unknown[]) => unknown>(func: T): T => {
    const cache = new Map();
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