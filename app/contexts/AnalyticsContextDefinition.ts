export interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
  identifyUser: (userId: string, properties?: Record<string, unknown>) => void;
}

export interface AnalyticsProviderProps {
  children: React.React Node;
}

export interface Analytics Event {
  name: string;
  properties?: Record<string, unknown>;
  timestamp: number;
}