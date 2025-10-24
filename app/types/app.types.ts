export interface User {
  id: string;
  name: string;
  email: string;
}
export interface AnalyticsEvent {
;
name: string;
  timestamp: number;
  properties?: Record<string,string | number | boolean | null>
}
export interface PerformanceMetrics {
;
loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
,
}
export interface ErrorContext {
;
url?: string;
userAgent?: string;
timestamp?: string;
userId?: string;
sessionId?: string;
component?: string;
action?: string
}
