// Analytics Context Type Definitions
export interface AnalyticsEvent {
  name: string
  timestamp: number
  properties?: Record<string, string | number | boolean>
}
export interface AnalyticsUser {
  id?: string
  sessionId: string
}
export interface AnalyticsState {
  pageViews: number
  events: AnalyticsEvent[]
  user: AnalyticsUser | null
}
export interface AnalyticsContextType {
  state: AnalyticsState
  trackEvent: (name: string, properties?: Record<string, string | number | boolean>) => void
  trackPageView: (path: string) => void
  setUser: (user: AnalyticsUser) => void
}
export type AnalyticsAction =
  | { type: 'TRACK_EVENT'; payload: { name: string; properties?: Record<string, string | number | boolean> } }
  | { type: 'TRACK_PAGE_VIEW'; payload: { path: string } }
  | { type: 'SET_USER'; payload: AnalyticsUser }