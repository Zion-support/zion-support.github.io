// Global type definitions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Web Vitals types
interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

// Performance API extensions
interface PerformanceNavigationTiming extends PerformanceEntry {
  loadEventEnd: number;
  loadEventStart: number;
  domContentLoadedEventEnd: number;
  domContentLoadedEventStart: number;
}

export {};