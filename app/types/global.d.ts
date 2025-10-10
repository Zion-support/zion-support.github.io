/**
 * Global type definitions
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GA_TRACKING_ID?: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

export {};