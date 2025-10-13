// Global type definitions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export {};