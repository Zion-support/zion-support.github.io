export interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
  identifyUser: (userId: string, properties?: Record<string, unknown>) => void;
}

export interfaceAnalytics Provider Props {
  children: React.React Node;
}

export interfaceAnalytics Event {
  name: string;
  properties?: Record<string, unknown>;
  timestamp: number;
}