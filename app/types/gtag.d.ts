// Google Analytics gtag types
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export {};