// Analytics Context Type Definitions
export interface AnalyticsEvent {
  name: string;
  timestamp: number;
  properties?: Record<string, unknown>;
}
export interface AnalyticsUser {
  id?: string;
  sessionId: string;
}
export interface AnalyticsState {
  pageViews: number;
  events: AnalyticsEvent[];
  user: AnalyticsUser | null;
}
export interface AnalyticsContextType {
  state: AnalyticsState;
  trackEvent: (name: string, properties?: Record<string, unknown>) => void;
  trackPageView: (path: string) => void;
  setUser: (user: AnalyticsUser) => void;
}
export type AnalyticsAction =
  | {
      type: "TRACK_EVENT";

    }
  | { type: "TRACK_PAGE_VIEW"; payload: { path: string } }
  | { type: "SET_USER"; payload: AnalyticsUser };
