<<<<<<< HEAD
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
=======
// use Performance Monitor
export const useperformancemonitor = {
  // Utility functions will be implemented here
  init: () => {
    console.log('use Performance Monitor initialized');
  }
};

export default useperformancemonitor;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
