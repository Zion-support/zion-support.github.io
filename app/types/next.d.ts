// Type definitions for app/types/next.d.ts
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export {};
