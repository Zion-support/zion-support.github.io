import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceConfig {
  enableMonitoring: boolean;
  sampleRate: number;
  reportUrl?: string;
}

const defaultConfig: PerformanceConfig = {
  enableMonitoring: true,
  sampleRate: 1.0,
};

export class PerformanceUtils {
  private static instance: PerformanceUtils;
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics | null = null;

  constructor(config: PerformanceConfig = defaultConfig) {
    this.config = config;
  }

  static getInstance(config?: PerformanceConfig): PerformanceUtils {
    if (!PerformanceUtils.instance) {
      PerformanceUtils.instance = new PerformanceUtils(config);
    }
    return PerformanceUtils.instance;
  }

  // Measure page load performance
  measurePageLoad(): PerformanceMetrics | null {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    const paintEntries = window.performance.getEntriesByType('paint');
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const lcp = window.performance.getEntriesByType('largest-contentful-paint')[0];

    const metrics: PerformanceMetrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.startTime : 0,
      cumulativeLayoutShift: 0, // Will be set by web-vitals
      firstInputDelay: 0, // Will be set by web-vitals
      timeToInteractive: navigation.domInteractive - navigation.navigationStart,
    };

    this.metrics = metrics;
    return metrics;
  }

  // Get Core Web Vitals
  async getCoreWebVitals(): Promise<PerformanceMetrics | null> {
    if (typeof window === 'undefined') return null;

    try {
      const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');
      
      return new Promise((resolve) => {
        const vitals: Partial<PerformanceMetrics> = {};
        let completed = 0;
        const total = 5;

        const checkComplete = () => {
          completed++;
          if (completed === total) {
            resolve(vitals as PerformanceMetrics);
          }
        };

        onCLS((metric) => {
          vitals.cumulativeLayoutShift = metric.value;
          checkComplete();
        });

        onFCP((metric) => {
          vitals.firstContentfulPaint = metric.value;
          checkComplete();
        });

        onLCP((metric) => {
          vitals.largestContentfulPaint = metric.value;
          checkComplete();
        });

        onTTFB((metric) => {
          vitals.loadTime = metric.value;
          checkComplete();
        });

        onINP((metric) => {
          vitals.firstInputDelay = metric.value;
          checkComplete();
        });
      });
    } catch (error) {
      console.warn('Failed to load web-vitals:', error);
      return this.measurePageLoad();
    }
  }

  // Report performance metrics
  reportMetrics(metrics: PerformanceMetrics): void {
    if (!this.config.enableMonitoring) return;

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        custom_map: {
          load_time: Math.round(metrics.loadTime),
          fcp: Math.round(metrics.firstContentfulPaint),
          lcp: Math.round(metrics.largestContentfulPaint),
          cls: Math.round(metrics.cumulativeLayoutShift * 1000),
          fid: Math.round(metrics.firstInputDelay),
          tti: Math.round(metrics.timeToInteractive),
        },
      });
    }

    // Send to custom endpoint if configured
    if (this.config.reportUrl) {
      fetch(this.config.reportUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metrics),
      }).catch(console.error);
    }
  }

  // Get current metrics
  getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  // Check if performance is good
  isPerformanceGood(metrics: PerformanceMetrics): boolean {
    return (
      metrics.loadTime < 3000 &&
      metrics.firstContentfulPaint < 1800 &&
      metrics.largestContentfulPaint < 2500 &&
      metrics.cumulativeLayoutShift < 0.1 &&
      metrics.firstInputDelay < 100
    );
  }
}

// React hook for performance monitoring
export function usePerformanceMonitoring(config?: PerformanceConfig) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isGood, setIsGood] = useState<boolean | null>(null);

  useEffect(() => {
    const perfUtils = PerformanceUtils.getInstance(config);
    
    const measurePerformance = async () => {
      const vitals = await perfUtils.getCoreWebVitals();
      if (vitals) {
        setMetrics(vitals);
        setIsGood(perfUtils.isPerformanceGood(vitals));
        perfUtils.reportMetrics(vitals);
      }
    };

    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [config]);

  return { metrics, isGood };
}

// Utility functions
export const performanceUtils = {
  measurePageLoad: () => PerformanceUtils.getInstance().measurePageLoad(),
  getCoreWebVitals: () => PerformanceUtils.getInstance().getCoreWebVitals(),
  isPerformanceGood: (metrics: PerformanceMetrics) => 
    PerformanceUtils.getInstance().isPerformanceGood(metrics),
};
