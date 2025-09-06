export default function performanceAnalytics() {
  // Performance analytics functionality would go here
  return {
    trackPerformance: (metric: string, value: number) => {
      console.log('Performance metric:', metric, value);
    }
  };
}