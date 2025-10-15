// Global type definitions for the application

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Web Vitals types
interface Metric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

type MetricHandler = (metric: Metric) => void;

declare module 'web-vitals' {
  export function onCLS(onPerfEntry: MetricHandler): void;
  export function onFCP(onPerfEntry: MetricHandler): void;
  export function onLCP(onPerfEntry: MetricHandler): void;
  export function onTTFB(onPerfEntry: MetricHandler): void;
  export function onINP(onPerfEntry: MetricHandler): void;
}

export {};