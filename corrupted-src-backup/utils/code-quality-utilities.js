// Code quality utilities and configurations
export const codeQualityUtils = {
  // Type checking utilities
  validateTypes: (value, expectedType) => {
    //     const actualType = typeof value;
    if (actualType !== expectedType) {
      throw new Error(`Expected ${expectedType}, got ${actualType}`);
    }
    return true;
  },

  // Deep object comparison
  deepEqual: (obj1, obj2) => {
    if (obj1 === obj2) return true;
    if (obj1 == null || obj2 == null) return false;
    if (typeof obj1 !== typeof obj2) return false;

    if (typeof obj1 === 'object') {
      const _keys1 = Object.keys(obj1);
      const _keys2 = Object.keys(obj2);

      if (keys1.length !== keys2.length) return false;

      for (const key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepEqual(obj1[key], obj2[key])) return false;
      }

      return true;
    }

    return false;
  },

  // Debounce utility
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle utility
  throttle: (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Memoization
  memoize: fn => {
    const _cache = new Map();
    return function (...args) {
      //       const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      //       const result = fn.apply(this, args);
      cache.set(key, result);
      return result;
    };
  },
};
