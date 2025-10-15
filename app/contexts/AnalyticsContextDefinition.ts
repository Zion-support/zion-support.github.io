// import { createContext } from 'react';
export interface AnalyticsContextType { trackEvent: (eventName: string, properties?: Record<string, unknown></string></string>) => void;
  trackPageView: (page: string) => void;}
  setUser: (userId: string, properties?: Record<string, unknown></string></string>) => void; }
export interface AnalyticsProviderProps { children: React.ReactNode; }
export interface AnalyticsEvent { name: string;
  properties?: Record<string, unknown></string></string>;}
  timestamp: number; }