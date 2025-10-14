declare global {
  interfaceWindow {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export {};