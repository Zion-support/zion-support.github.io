import { useEffect, useState } from 'react';

interface WebVitals {
  CLS: number | null;
  FID: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
  INP: number | null;
}

interface WebVitalsReport {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

export function useWebVitals() {
  const [vitals, setVitals] = useState<WebVitals>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null,
    INP: null,
  });

  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if PerformanceObserver is supported
    if (!('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    setIsSupported(true);

    const handleWebVitals = (report: WebVitalsReport) => {
      const { name, value } = report;
      
      setVitals(prev => ({
        ...prev,
        [name]: value,
      }));

      // Send to analytics (if available)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', name, {
          event_category: 'Web Vitals',
          value: Math.round(name === 'CLS' ? value * 1000 : value),
          event_label: report.id,
          non_interaction: true,
        });
      }
    };

    // Observe Core Web Vitals
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            handleWebVitals({
              name: 'LCP',
              value: entry.startTime,
              delta: entry.startTime,
              id: (entry as any).id || 'lcp',
              navigationType: 'navigate',
            });
          } else if (entry.entryType === 'first-input') {
            handleWebVitals({
              name: 'FID',
              value: (entry as any).processingStart - entry.startTime,
              delta: (entry as any).processingStart - entry.startTime,
              id: (entry as any).id || 'fid',
              navigationType: 'navigate',
            });
          } else if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            handleWebVitals({
              name: 'CLS',
              value: (entry as any).value,
              delta: (entry as any).value,
              id: (entry as any).id || 'cls',
              navigationType: 'navigate',
            });
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    } catch (error) {
      console.warn('Error setting up Web Vitals observer:', error);
    }
  }, []);

  const getVitalScore = (vital: keyof WebVitals, value: number | null): 'good' | 'needs-improvement' | 'poor' | null => {
    if (value === null) return null;

    const thresholds = {
      CLS: { good: 0.1, poor: 0.25 },
      FID: { good: 100, poor: 300 },
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 },
      INP: { good: 200, poor: 500 },
    };

    const threshold = thresholds[vital];
    if (!threshold) return null;

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  const getVitalColor = (score: 'good' | 'needs-improvement' | 'poor' | null): string => {
    switch (score) {
      case 'good': return 'text-green-600';
      case 'needs-improvement': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-500';
    }
  };

  return {
    vitals,
    isSupported,
    getVitalScore,
    getVitalColor,
  };
}