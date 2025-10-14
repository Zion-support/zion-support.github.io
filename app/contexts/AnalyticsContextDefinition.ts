import React from 'react';

// Analytics Context Definition
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

export interface AnalyticsContextType {
  trackEvent: (event: AnalyticsEvent) => void;
  trackPageView: (page: string) => void;
  setUserProperties: (properties: Record<string, any>) => void;
}

export const defaultAnalyticsContext: AnalyticsContextType = {
  trackEvent: () => {},
  trackPageView: () => {},
  setUserProperties: () => {},
};