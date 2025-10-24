// Performance metrics utility

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

export const performanceMetrics = {
  record: (name: string, value: number) => {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now()
    };
    console.log('Performance metric recorded:', metric);
  },
  
  getMetrics: (): PerformanceMetric[] => {
    return [];
  },
  
  clear: () => {
    console.log('Performance metrics cleared');
  }
};

export default performanceMetrics;