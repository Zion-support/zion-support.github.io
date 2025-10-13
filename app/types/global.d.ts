declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set','
      action: string,
      parameters?: {
        [key: string]: string | number | boolean;
      }
    ) => void;
    __PERFORMANCE_METRICS__?: {
      loadTime: number;
      firstContentfulPaint: number;
      largestContentfulPaint: number;
      firstInputDelay: number;
      cumulativeLayoutShift: number;
    };
  }
}

export {};
