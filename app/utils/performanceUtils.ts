// Performance monitoring utilities
export interface PerformanceMetric {
}
}
class PerformanceMonitor{"
private metrics: "PerformanceMetric[] = []"
  private isEnable",d: "boolean"
"
constructor() {  ",this.isEnabled = typeof window !== "undefined" && "performance" in window;,
}
  }
  // Measure page load time
    // Send to analytics in production"
if(process.env.NODE_ENV = == "production") {
this.sendToAnalytics(metric)
    ,}
  }
  // Get all recorded metrics
getMetrics(): PerformanceMetric[] {