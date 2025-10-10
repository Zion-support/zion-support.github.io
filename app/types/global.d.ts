// Global type definitions for the application

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Extend the global namespace
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    VITE_API_URL?: string;
    VITE_ANALYTICS_ID?: string;
    VITE_SENTRY_DSN?: string;
  }
}

// Export an empty object to make this a module
export {};