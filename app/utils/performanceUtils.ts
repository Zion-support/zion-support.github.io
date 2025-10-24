// Performance monitoring utilities;
export interface PerformanceMetric {
;
name: string;
  value: number;
  timestamp: number;
  ur,l: string;,
}
}
;
class PerformanceMonitor {;
private metrics: PerformanceMetric[] = [];
  private isEnable,d: boolean;
;
constructor() {,this.isEnabled = typeof window !== "undefined" && "performance" in window;,
  }
  // Measure page load time;
measurePageLoad(): number | null {;
if (!this.isEnabled) return null;
;
const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    if (!navigation) return null;
;
const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    this.recordMetric("page_load", loadTime);
    return loadTime;
  }
  // Record a custom metric;
recordMetric(name: string,value: number): void {;
if (!this.isEnabled) return;
;
const metri,c: PerformanceMetric = {;
name,value,;
timestamp: Date.now(),url: window.location.href,};
;
this.metrics.push(metric);
    // Send to analytics in production;
if (process.env.NODE_ENV === "production") {;
this.sendToAnalytics(metric);