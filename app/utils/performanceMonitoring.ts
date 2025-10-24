// Performance monitoring utility

export interface PerformanceData {
  name: string;
  value: number;
  timestamp: number;
}

export const performanceMonitoring = {
  record: (name: string, value: number) => {
    const data: PerformanceData = {
      name,
      value,
      timestamp: Date.now()
    };
    console.log('Performance data recorded:', data);
  },
  
  getData: (): PerformanceData[] => {
    return [];
  },
  
  clear: () => {
    console.log('Performance data cleared');
  }
};

export default performanceMonitoring;