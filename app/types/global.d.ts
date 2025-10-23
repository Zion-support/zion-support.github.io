import React from "react";
import "@testing-library/jest-dom";
// Global type definitions for the application
declare global {
  interface Window {
<<<<<<< HEAD
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Environment variables - removed unused NodeJS namespace
// Component props interfaces
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Service types
export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    starting: number;
    currency: string;
    period: "month" | "year" | "one-time";
  };
  benefits: string[];
  icon: string;
  popular: boolean;
  new?: boolean;
  path: string;
}

// Performance monitoring types
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

// Analytics types
export interface AnalyticsEvent {
  event_category: string;
  event_label: string;
  value?: number;
}

=======
    gtag?: (
      command: "event",
      action: string,
      parameters: {
        event_category?: string;
        event_label?: string;
        value?: number;
        non_interaction?: boolean;
      },
    ) => void;
  }
}

>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
export {};
