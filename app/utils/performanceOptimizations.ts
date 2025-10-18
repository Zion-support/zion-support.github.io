// Performance optimizations utilities

export function performanceOptimizations() {
  return {
    debounce: (func: (...args: any[]) => void, wait: number) => {
      let timeout: NodeJS.Timeout;
      return function executedFunction(...args: any[]) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },
    throttle: (func: (...args: any[]) => void, limit: number) => {
      let inThrottle: boolean;
      return function executedFunction(this: any, ...args: any[]) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }
  };
}
