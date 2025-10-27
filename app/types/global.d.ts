declare global {
  interface Window {
    gtag: (..._args: any[]) => void;
  }
}

export {};