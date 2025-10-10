// Global type definitions for the application;
declare global {
  interface Window {
    gtag?: (...args: anyService Feature}
  }
}
// Environment variables;
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_GA_ID?: string;
    NEXT_PUBLIC_SITE_URL?: string}
  }
}
// Component props interfaces;
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode}
}
export interface PageProps {}
  params: { Service Feature}
}
// Analytics types;
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number}
}
export {}