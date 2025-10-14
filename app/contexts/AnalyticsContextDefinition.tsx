export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp: number;
}

export interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
  events: AnalyticsEvent[];
}

export interface AnalyticsProviderProps {
  children: React.ReactNode;
  apiKey?: string;
  debug?: boolean;
}