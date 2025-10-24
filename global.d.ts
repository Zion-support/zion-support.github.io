// Global type definitions for browser APIs

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }

  interface Performance {
    getEntriesByType(type: string): PerformanceEntry[];
    mark(name: string): void;
    measure(name: string, startMark?: string, endMark?: string): void;
    now(): number;
  }

  interface PerformanceEntry {
    name: string;
    entryType: string;
    startTime: number;
    duration: number;
  }

  interface PerformanceNavigationTiming extends PerformanceEntry {
    type: string;
    redirectCount: number;
    loadEventEnd: number;
    loadEventStart: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    responseEnd: number;
    responseStart: number;
    requestStart: number;
    navigationStart: number;
  }

  interface PerformanceResourceTiming extends PerformanceEntry {
    initiatorType: string;
    transferSize: number;
    encodedBodySize: number;
    decodedBodySize: number;
  }

  interface PerformanceObserver {
    observe(options?: PerformanceObserverInit): void;
    disconnect(): void;
    takeRecords(): PerformanceEntry[];
  }

  interface PerformanceObserverInit {
    entryTypes: string[];
    buffered?: boolean;
  }

  interface IntersectionObserver {
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
    takeRecords(): IntersectionObserverEntry[];
  }

  interface IntersectionObserverEntry {
    target: Element;
    intersectionRatio: number;
    isIntersecting: boolean;
    boundingClientRect: DOMRectReadOnly;
    intersectionRect: DOMRectReadOnly;
    rootBounds: DOMRectReadOnly | null;
    time: number;
  }

  interface IntersectionObserverInit {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
  }

  interface Navigator {
    connection?: {
      effectiveType: string;
      downlink: number;
      rtt: number;
    };
    deviceMemory?: number;
    hardwareConcurrency?: number;
  }

  interface HTMLImageElement {
    complete: boolean;
    naturalWidth: number;
    naturalHeight: number;
  }

  interface HTMLInputElement extends Element {
    value: string;
  }

  interface HTMLTextAreaElement extends Element {
    value: string;
  }

  // Node.js types for server-side code
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      NEXT_PUBLIC_GA_ID?: string;
      SENTRY_DSN?: string;
    }
  }

  // URL and URLSearchParams are available in modern browsers
  const URL: {
    new (url: string, base?: string): URL;
    createObjectURL(object: Blob): string;
    revokeObjectURL(url: string): void;
  };

  const URLSearchParams: {
    new (init?: string | string[][] | Record<string, string>): URLSearchParams;
  };

  // btoa and atob are available in browsers
  function btoa(str: string): string;
  function atob(str: string): string;
}

export {};