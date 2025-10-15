// Analytics Context Type Definitions
import { createContext } from 'react';

export interface AnalyticsEvent {
  name: string;
  timestamp: number;
  properties?: Record<string, any>;
  userId?: string;
  sessionId?: string;
}

export interface AnalyticsUser {
  id?: string;
  sessionId: string;
  email?: string;
  name?: string;
  role?: string;
  company?: string;
  [key: string]: any;
}

export interface AnalyticsState {
  pageViews: number;
  events: AnalyticsEvent[];
  user: AnalyticsUser | null;
  isInitialized: boolean;
}

export interface AnalyticsContextType {
  state: AnalyticsState;
  trackEvent: (name: string, properties?: Record<string, any>) => void;
  trackPageView: (path: string) => void;
  trackConversion: (conversionId: string, value?: number, currency?: string) => void;
  setUser: (user: AnalyticsUser) => void;
  setCustomProperties: (properties: Record<string, any>) => void;
  isInitialized: boolean;
}

export type AnalyticsAction =
  | { type: 'TRACK_EVENT'; payload: { name: string; properties?: Record<string, any> } }
  | { type: 'TRACK_PAGE_VIEW'; payload: { path: string } }
  | { type: 'TRACK_CONVERSION'; payload: { conversionId: string; value?: number; currency?: string } }
  | { type: 'SET_USER'; payload: AnalyticsUser }
  | { type: 'SET_CUSTOM_PROPERTIES'; payload: Record<string, any> }
  | { type: 'INITIALIZE'; payload: { sessionId: string } };

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);