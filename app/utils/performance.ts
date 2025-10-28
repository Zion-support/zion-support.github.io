import React from 'react';

export const performance = {
  measure: (name: string, fn: () => void) => {
    const start = Date.now();
    fn();
    const end = Date.now();
    console.log(`${name}: ${end - start}ms`);
  },

  endTiming(label: string): number {
    if (typeof window !== "undefined" && "performance" in window) {
      performance.mark(`${label}-end`);
      performance.measure(label, `${label}-start`, `${label}-end`);
      const measure = performance.getEntriesByName(label)[0];
      const duration = measure ? measure.duration : 0;
      return duration;
    }
    return 0;
  },

  getMetric(label: string): number | undefined {
    return undefined;
  },

  getAllMetrics(): Record<string, number> {
    return {};
  },

  clearMetrics(): void {
    // Clear metrics
  },

  // Web Vitals monitoring
  measureWebVitals(): void {
    if (typeof window === "undefined") return;

    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log("LCP:", lastEntry.startTime);
    }).observe({ entryTypes: ["largest-contentful-paint"] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const processingStart = (entry as { processingStart?: number }).processingStart || entry.startTime;
        console.log("FID:", processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ["first-input"] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (!(entry as { hadRecentInput?: boolean }).hadRecentInput) {
          clsValue += (entry as { value?: number }).value || 0;
        }
      });
      console.log("CLS:", clsValue);
    }).observe({ entryTypes: ["layout-shift"] });
  }
};

// Hook for React components
export function usePerformanceMonitor() {
  return {
    startTiming: (label: string) => {
      if (typeof window !== "undefined" && "performance" in window) {
        performance.mark(`${label}-start`);
      }
    },
    endTiming: (label: string) => {
      if (typeof window !== "undefined" && "performance" in window) {
        performance.mark(`${label}-end`);
        performance.measure(label, `${label}-start`, `${label}-end`);
        const measure = performance.getEntriesByName(label)[0];
        return measure ? measure.duration : 0;
      }
      return 0;
    },
    getMetric: (label: string) => undefined,
    getAllMetrics: () => ({})
  };
}

// Utility function to measure component render time
export function measureComponentRender(componentName: string) {
  return function <T extends React.ComponentType<unknown>>(PageComponent: T): T {
    return ((props: unknown) => {
      React.useEffect(() => {
        const start = Date.now();
        return () => {
          const end = Date.now();
          console.log(`${componentName}-render: ${end - start}ms`);
        };
      });
      return React.createElement(PageComponent, props);
    }) as T;
  };
}