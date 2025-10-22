// Performance monitor hook

export function usePerformanceMonitor() {
  return {
    measureRender: (componentName: string) => {
      const start = performance.now();
      return () => {
        const end = performance.now();
        console.log(`${componentName} render time: ${end - start}ms`);
      };
    },
    measureAsync: async (name: string, fn: () => Promise<any>) => {
      const start = performance.now();
      const result = await fn();
      const end = performance.now();
      console.log(`${name} execution time: ${end - start}ms`);
      return result;
    }
  };
}
