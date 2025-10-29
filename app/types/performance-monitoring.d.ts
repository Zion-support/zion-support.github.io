export interface PerformanceMetrics {
    loadTime: number;
    renderTime: number;
    memoryUsage: number;
  }

  export interface PerformanceConfig {
    enabled: boolean;
    threshold: number;
  }