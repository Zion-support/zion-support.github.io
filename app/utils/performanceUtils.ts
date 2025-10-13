// performanceUtils - Performance utilities

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

export function measurePerformance(): PerformanceMetrics {
  const startTime = performance.now();
  const endTime = performance.now();
  
  return {
    loadTime: endTime - startTime,
    renderTime: endTime - startTime,
    memoryUsage: (performance as any).memory?.usedJSHeapSize || 0
  };
}

export function optimizePerformance(): void {
  console.log('Optimizing performance...');
}
