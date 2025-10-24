// Global performance monitoring utilities
export const performanceUtils = {
  // Measure custom performance marks
  mark: (_name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(_name);
    }
  },

  // Measure time between marks
  measure: (name: string, startMark: string, endMark?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      if (endMark) {
        performance.measure(name, startMark, endMark);
      } else {
        performance.measure(name, startMark);
      }
    }
  },

  // Get performance entries
  getEntries: (type?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      return type ? performance.getEntriesByType(type) : performance.getEntries();
    }
    return [];
  },

  // Clear performance entries
  clearEntries: (type?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      if (type) {
        performance.clearMarks(type);
        performance.clearMeasures(type);
      } else {
        performance.clearMarks();
        performance.clearMeasures();
      }
    }
  },

  // Get navigation timing
  getNavigationTiming: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return navigation;
    }
    return null;
  },

  // Get resource timing
  getResourceTiming: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      return performance.getEntriesByType('resource');
    }
    return [];
  }
};

interface _LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface _PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}