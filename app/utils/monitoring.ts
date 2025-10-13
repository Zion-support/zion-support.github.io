// Monitoring utility functions

export const Monitoring = {
  init: () => {
    console.log('Monitoring initialized');
  },
  
  trackEvent: (eventName: string, properties?: Record<string, any>) => {
    console.log('Event tracked:', eventName, properties);
  },
  
  trackError: (error: Error, context?: string) => {
    console.error('Error tracked:', error, context);
  },
  
  trackPerformance: (metricName: string, value: number) => {
    console.log('Performance metric:', metricName, value);
  }
};

export function monitoring() {
  return Monitoring;
}

export default monitoring;