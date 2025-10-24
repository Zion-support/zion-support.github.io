interface PerformanceMetrics {
  loadTime: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  firstInputDelay: number | null;
  cumulativeLayoutShift: number | null;
  timeToInteractive: number | null;
  totalBlockingTime: number | null;
}

// Global performance monitoring utilities
export const getPerformanceMetrics = (): PerformanceMetrics => {
  if (typeof window === 'undefined') {
    return {
      loadTime: null,
      firstContentfulPaint: null,
      largestContentfulPaint: null,
      firstInputDelay: null,
      cumulativeLayoutShift: null,
      timeToInteractive: null,
      totalBlockingTime: null
    };
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paintEntries = performance.getEntriesByType('paint');
  
  return {
    loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : null,
    firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || null,
    largestContentfulPaint: null, // Would need to be measured with observer
    firstInputDelay: null, // Would need to be measured with observer
    cumulativeLayoutShift: null, // Would need to be measured with observer
    timeToInteractive: null, // Would need to be calculated
    totalBlockingTime: null // Would need to be calculated
  };
};

export default getPerformanceMetrics;