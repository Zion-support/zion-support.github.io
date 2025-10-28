// Global type definitions

declare global {
  interface Window {
    gtag: (..._args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export {}