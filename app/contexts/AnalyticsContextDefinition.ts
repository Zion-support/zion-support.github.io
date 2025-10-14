// Analytics context type definitions

export interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (page: string) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
}

export interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp: number;
}