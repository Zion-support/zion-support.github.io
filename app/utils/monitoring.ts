// Monitoring utilities

export function monitoring() {
  return {
    trackEvent: (eventName: string, properties: any = {}) => {
      console.log(`Event tracked: ${eventName}`, properties);
    },
    trackError: (error: Error, context: any = {}) => {
      console.error('Error tracked:', error, context);
    },
    trackPerformance: (metricName: string, value: number) => {
      console.log(`Performance metric: ${metricName} = ${value}ms`);
    }
  };
}
