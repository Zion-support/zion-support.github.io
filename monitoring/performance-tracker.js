// Performance tracking system
export class PerformanceTracker {
  constructor() {
    this.metrics = new Map();
    this.thresholds = {
      responseTime: 1000,
      memoryUsage: 100 * 1024 * 1024, // 100MB
      cpuUsage: 80
    };
  }

  trackMetric(name, value, timestamp = Date.now()) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name).push({ value, timestamp });
    
    // Keep only last 1000 entries
    const entries = this.metrics.get(name);
    if (entries.length > 1000) {
      entries.splice(0, entries.length - 1000);
    }
  }

  getAverageMetric(name, timeWindow = 300000) { // 5 minutes
    const entries = this.metrics.get(name) || [];
    const cutoff = Date.now() - timeWindow;
    const recentEntries = entries.filter(e => e.timestamp > cutoff);
    
    if (recentEntries.length === 0) return 0;
    
    const sum = recentEntries.reduce((acc, e) => acc + e.value, 0);
    return sum / recentEntries.length;
  }

  checkThresholds() {
    const alerts = [];
    
    for (const [metric, threshold] of Object.entries(this.thresholds)) {
      const avg = this.getAverageMetric(metric);
      if (avg > threshold) {
        alerts.push({
          metric,
          value: avg,
          threshold,
          severity: 'warning'
        });
      }
    }
    
    return alerts;
  }
}

export const performanceTracker = new PerformanceTracker();