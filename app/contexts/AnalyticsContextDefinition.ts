export interface Analyticscontexttype {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
  identifyUser: (userId: string, properties?: Record<string, unknown>) => void;
}

export interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export interface Analyticsevent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp: number;
}