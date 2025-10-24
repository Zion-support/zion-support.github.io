<<<<<<< HEAD:all-pages-backup/utils/performanceMonitoring.ts
      const lcpObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
<<<<<<< HEAD:all-pages-backup/utils/performanceMonitoring.ts
    const rating = this.getRating(name, value);
    const metric: PerformanceMetric = {;
      name
      value
      rating,
  timestamp: Date.now()
<<<<<<< HEAD:all-pages-backup/utils/performanceMonitoring.ts
    const thresholds: Record<keyof WebVitals, { good: number; poor: number }> = {;
<<<<<<< HEAD:all-pages-backup/utils/performanceMonitoring.ts
    const metric: CustomMetric = {;
      name
      value
      unit,
  rating: this.getCustomRating(value, unit)
<<<<<<< HEAD:all-pages-backup/utils/performanceMonitoring.ts
          method: method,
  headers: { 'Content-Type': 'application/json' }
<<<<<<< HEAD:all-pages-backup/utils/performanceMonitoring.ts
      score,
  webVitals: this.webVitals,
  customMetrics: this.customMetrics
<<<<<<< HEAD:all-pages-backup/utils/performanceMonitoring.ts
export enum MetricUnit {;
<<<<<<< HEAD:all-pages-backup/utils/performanceMonitoring.ts
      values: values,
  count: 1,
  average: value,
  min: value,
  max: value
      unit,
  rating: getRating(name, value)
<<<<<<< HEAD:all-pages-backup/utils/performanceMonitoring.ts
;
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {;
  const thresholds: Record<string, { good: number; poor: number }> = {;
