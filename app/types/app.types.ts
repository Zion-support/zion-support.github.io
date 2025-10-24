export interface User {
  id: string;
  name: string;
  email: string;
}
<<<<<<< HEAD
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
=======

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
}
