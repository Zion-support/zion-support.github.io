declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    data Layer: unknown[];
  }
}

export {};