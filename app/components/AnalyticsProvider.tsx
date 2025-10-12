
'use client';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any />) => void;
  trackPageView: (pageName: string) => void;
}
