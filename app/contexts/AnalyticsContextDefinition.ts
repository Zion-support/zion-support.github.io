export interface AnalyticsContextType {
  trackEvent: (_eventName: string, _properties?: Record<string, unknown>) => void;
  trackPageView: (page: string) => void;
  setUser: (_userId: string, _properties?: Record<string, unknown>) => void;
}

export interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp: number;
}