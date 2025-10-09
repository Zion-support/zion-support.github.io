import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';


export interface Metric {
  name: string;
  value: number;
  delta: number;
  id: string;
}

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = {
    CLS: [0.1, 0.25],
    FID: [100, 300],
    FCP: [1800, 3000],
    LCP: [2500, 4000],
    TTFB: [800, 1800],
  };

  const [good, poor] = thresholds[name as keyof typeof thresholds] || [0, 0];
  
  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
}

function sendToAnalytics(metric: Metric): void {
  const performanceMetric: PerformanceMetric = {
    name: metric.name,
    value: metric.value,
    rating: getRating(metric.name, metric.value),
    delta: metric.delta,
    id: metric.id
  };

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Performance metric:', performanceMetric);
  }

  // Send to analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value
      ),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Send to custom endpoint
  if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(performanceMetric),
    }).catch(console.error);
  }
}

export function reportWebVitals(): void {

  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}


export function measurePerformance(name: string, fn: () => void): void {
  const start = performance.now();
  fn();
  const end = performance.now();
  
  sendToAnalytics({
    name,
    value: end - start,
    delta: end - start,
    id: `${name}-${Date.now()}`,
  });
}

export function measureAsyncPerformance<T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> {
  const start = performance.now();
  return fn().then((result) => {
    const end = performance.now();
    sendToAnalytics({
      name,
      value: end - start,
      delta: end - start,
      id: `${name}-${Date.now()}`,
    });
    return result;
  });
}


