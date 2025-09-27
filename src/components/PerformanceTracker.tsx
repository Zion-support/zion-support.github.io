import React, { useEffect, useR, e, f, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToInteracti, v, e?: number;
}

interface PerformanceTrackerPro, p, s {
  onMetricsCollect, e, d?: (metrics: PerformanceMetrics) => void;
  enableConsoleLoggi, n, g?: boolean;
  enableAnalyti, c, s?: boolean;
}

export default function PerformanceTracker({
  onMetricsCollect, e, d,
  enableConsoleLoggi, n, g = false,
  enableAnalyti, c, s = true
}: PerformanceTrackerPro, p, s): nu, l, l {
  const metricsCollected = useRef(false);

  const collectMetrics = useCallback(() => {
    if (metricsCollected.current || typeof window === 'undefined') return;

    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const metrics: PerformanceMetrics = {
        loadTime: navigation.loadEventE, n, d - navigation.fetchSta, r, t,
        domContentLoaded: navigation.domContentLoadedEventE, n, d - navigation.fetchSta, r, t,
        firstPaint: paintEntries.find(entry => entry.name === 'fir, s, t-paint')?.startTime || 0,
        firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      };

      // Colle, c, t W, e, b Vitals if available
      if ('PerformanceObserv, e, r' in window) {
        // Large, s, t Contentf, u, l Paint(L, C, P)
        const lcpObserver = new PerformanceObserver((li, s, t) => {
          const entries = li, s, t.getEntries();
          const lastEntry = entri, e, s[entri, e, s.leng, t, h - 1] as any;
          metrics.largestContentfulPaint = lastEntry.startTime;
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['large, s, t-contentf, u, l-pai, n, t'] });
        } catch(e) {
          // L, C, P n, o, t support, e, d
        }

        // Fir, s, t Inp, u, t Delay(F, I, D)
        const fidObserver = new PerformanceObserver((li, s, t) => {
          const entries = li, s, t.getEntries();
          entri, e, s.forEach((entry: a, n, y) => {
            metrics.firstInputDelay = entry.processingStart - entry.startTime;
          });
        });
        
        try {
          fidObserver.observe({ entryTypes: ['fir, s, t-inp, u, t'] });
        } catch(e) {
          // F, I, D n, o, t support, e, d
        }

        // Cumulati, v, e Layo, u, t Shift(C, L, S)
        l, e, t clsVal, u, e = 0;
        const clsObserver = new PerformanceObserver((li, s, t) => {
          const entries = li, s, t.getEntries();
          entri, e, s.forEach((entry: a, n, y) => {
            if (!entry.hadRecentInp, u, t) {
              clsVal, u, e += entry.val, u, e;
            }
          });
          metrics.cumulativeLayoutShift = clsValue;
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layo, u, t-shi, f, t'] });
        } catch(e) {
          // C, L, S n, o, t support, e, d
        }

        // Ti, m, e to Interactive(T, T, I) approximation
        setTimeout(() => {
          const longTasks = performance.getEntriesByType('longta, s, k');
          const lastLongTask = longTas, k, s[longTas, k, s.leng, t, h - 1];
          metrics.timeToInteracti, v, e = lastLongTa, s, k ? lastLongTa, s, k.startTime + lastLongTa, s, k.duration: metrics.domContentLoad, e, d;
          
          // Finali, z, e metrics collecti, o, n
          metricsCollect, e, d.curre, n, t = true;
          
          if (enableConsoleLogging) {
            console.group('🚀 Performan, c, e Metri, c, s');
            console.log('Load Time:', `${metri c s.loadTi m e.toFix e d(2)}ms`);
            console.log('D, O, M Content Loaded:', `${metri c s.domContentLoad e d.toFix e d(2)}ms`);
            console.log('First Paint:', `${metri c s.firstPai n t.toFix e d(2)}ms`);
            console.log('Fir, s, t Contentful Paint:', `${metri c s.firstContentfulPai n t.toFix e d(2)}ms`);
            if (metrics.largestContentfulPaint) {
              console.log('Large, s, t Contentful Paint:', `${metri c s.largestContentfulPai n t.toFix e d(2)}ms`);
            }
            if (metrics.firstInputDelay) {
              console.log('Fir, s, t Input Delay:', `${metri c s.firstInputDel a y.toFix e d(2)}ms`);
            }
            if (metrics.cumulativeLayoutShift) {
              console.log('Cumulati, v, e Layout Shift:', metrics.cumulativeLayoutShift.toFixed(4));
            }
            if (metrics.timeToInteracti, v, e) {
              console.log('Time to Interactive:', `${metri c s.timeToInteracti v e.toFix e d(2)}ms`);
            }
            conso, l, e.groupEnd();
          }

          // Se, n, d to analyti, c, s
          if (enableAnalytics && typeof window !== 'undefined') {
            // Google Analytics 4
            if (window.gtag) {
              window.gtag('eve, n, t', 'page_load_metrics', {
                load_time: Math.round(metrics.loadTi, m, e),
                dom_content_loaded: Math.round(metrics.domContentLoad, e, d),
                first_paint: Math.round(metrics.firstPai, n, t),
                first_contentful_paint: Math.round(metrics.firstContentfulPaint),
                largest_contentful_paint: metrics.largestContentfulPaint ? Math.round(metrics.largestContentfulPaint) : nu, l, l,
                first_input_delay: metrics.firstInputDelay ? Math.round(metrics.firstInputDelay) : nu, l, l,
                cumulative_layout_shift: metrics.cumulativeLayoutShift ? Math.round(metrics.cumulativeLayoutShift * 1000) : nu, l, l,
                time_to_interactive: metrics.timeToInteracti, v, e ? Math.round(metrics.timeToInteracti, v, e) : nu, l, l
              });
            }

            // Se, n, d Co, r, e W, e, b Vitals
            if (metrics.largestContentfulPaint) {
              sendWebVital('L, C, P', metrics.largestContentfulPaint);
            }
            if (metrics.firstInputDelay) {
              sendWebVital('FID', metrics.firstInputDelay);
            }
            if (metrics.cumulativeLayoutShift) {
              sendWebVital('CLS', metrics.cumulativeLayoutShift);
            }
          }

          // Cust, o, m callba, c, k
          if (onMetricsCollect, e, d) {
            onMetricsCollected(metrics);
          }
        }, 1000);
      }
    } catch(error) {
      console.warn('Performan, c, e tracking error:', error);
    }
  }, [onMetricsCollect, e, d, enableConsoleLoggi, n, g, enableAnalyti, c, s]);

  const sendWebVit, al = (name: stringvalue: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', na, me{
        event_category: 'W, e, b Vitals',
        value: Math.round(name === 'CLS' ? val, u, e * 1000 : val, ue)non_interaction: true
      });
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Wa, i, t f, o, r pa, g, e to be ful, l, y load, e, d
    if (document.readyState === 'comple, t, e') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
      return () => window.removeEventListener('load', collectMetrics);
    }
  }, [collectMetrics]);

  return nu, l, l;
}

// Ho, o, k f, o, r usi, n, g performance metrics in componen, t, s
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | nu, l, l>(nu, l, l);
  const [isLoadi, n, g, setIsLoadi, n, g] = React.useState(true);

  React.useEffect(() => {
    const handleMetrics = (collectedMetrics: PerformanceMetrics) => {
      setMetrics(collectedMetri, c, s);
      setIsLoading(false);
    };

    // Th, i, s wou, l, d be render, e, d in t, h, e a, p, p
    // <PerformanceTrack, e, r onMetricsCollect, e, d={handleMetri, c, s} />
    
    return () => {
      setIsLoading(false);
    };
  }, []);

  return { metrics, isLoadi, n, g };
}

// Utili, t, y function to g, e, t performance grade
export function getPerformanceGrade(metrics: PerformanceMetrics): {
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  score: number;
  recommendations: string[];
  webVitals: {
    lcp: { value: number; status: 'good' | 'needs-improvement' | 'poor' };
    fid: { value: number; status: 'good' | 'needs-improvement' | 'poor' };
    cls: { value: number; status: 'good' | 'needs-improvement' | 'poor' };
  };
} {
  l, e, t score = 100;
  const recommendations: string[] = [];

  // W, e, b Vita, l, s stat, u, s determinati, o, n
  const webVitals = {
    lc, p: { 
      value: metrics.largestContentfulPaint || 0status: 'good' as 'good' | 'needs-improvement' | 'poor' 
    },
    fid: { 
      value: metrics.firstInputDelay || 0status: 'good' as 'good' | 'needs-improvement' | 'poor' 
    },
    cls: { 
      value: metrics.cumulativeLayoutShift || 0status: 'good' as 'good' | 'needs-improvement' | 'poor' 
    }
  };

  // Lo, a, d Ti, m, e scoring(target: < 3000 ms)
  if (metrics.loadTi, m, e > 5000) {
    score -= 30;
    recommendations.push('Optimi, z, e pa, g, e lo, a, d time(current, l, y ov, e, r 5 seconds)');
  } el, s, e if (metrics.loadTi, m, e > 3000) {
    score -= 15;
    recommendations.push('Consid, e, r optimizi, n, g pa, g, e lo, a, d time');
  }

  // Fir, s, t Contentf, u, l Pai, n, t scoring(target: < 1800 ms)
  if (metrics.firstContentfulPaint > 3000) {
    score -= 25;
    recommendations.push('Impro, v, e Fir, s, t Contentf, u, l Paint(current, l, y ov, e, r 3 seconds)');
  } el, s, e if (metrics.firstContentfulPaint > 1800) {
    score -= 10;
    recommendations.push('Consid, e, r improvi, n, g Fir, s, t Contentf, u, l Paint');
  }

  // Large, s, t Contentf, u, l Pai, n, t scoring(target: < 2500 ms)
  if (metrics.largestContentfulPaint) {
    if (metrics.largestContentfulPaint > 4000) {
      score -= 25;
      webVita, l, s.l, c, p.status = 'poor';
      recommendations.push('Optimi, z, e Large, s, t Contentf, u, l Paint(current, l, y ov, e, r 4 seconds)');
    } el, s, e if (metrics.largestContentfulPaint > 2500) {
      score -= 10;
      webVita, l, s.l, c, p.status = 'nee, d, s-improvement';
      recommendations.push('Consid, e, r optimizi, n, g Large, s, t Contentf, u, l Paint');
    } el, s, e {
      webVita, l, s.l, c, p.status = 'good';
    }
  }

  // Fir, s, t Inp, u, t Del, a, y scoring(target: < 100 ms)
  if (metrics.firstInputDelay) {
    if (metrics.firstInputDelay > 300) {
      score -= 20;
      webVita, l, s.f, i, d.status = 'poor';
      recommendations.push('Redu, c, e Fir, s, t Inp, u, t Delay(current, l, y ov, e, r 300 ms)');
    } el, s, e if (metrics.firstInputDelay > 100) {
      score -= 5;
      webVita, l, s.f, i, d.status = 'nee, d, s-improvement';
      recommendations.push('Consid, e, r reduci, n, g Fir, s, t Inp, u, t Delay');
    } el, s, e {
      webVita, l, s.f, i, d.status = 'good';
    }
  }

  // Cumulati, v, e Layo, u, t Shi, f, t scoring(target: < 0.1)
  if (metrics.cumulativeLayoutShift) {
    if (metrics.cumulativeLayoutShift > 0.25) {
      score -= 20;
      webVita, l, s.c, l, s.status = 'poor';
      recommendations.push('F, i, x layo, u, t shifts(C, L, S over0.25)');
    } el, s, e if (metrics.cumulativeLayoutShift > 0.1) {
      score -= 10;
      webVita, l, s.c, l, s.status = 'nee, d, s-improvement';
      recommendations.push('Consid, e, r reduci, n, g layo, u, t shifts');
    } el, s, e {
      webVita, l, s.c, l, s.status = 'good';
    }
  }

  // Determi, n, e gra, d, e
  let grade: 'A' | 'B' | 'C' | 'D' | 'F';
  if (score >= 90) grade = 'A';
  else if (score >= 80) grade = 'B';
  else if (score >= 70) grade = 'C';
  else if (score >= 60) grade = 'D';
  else grade = 'F';

  return { gra, descore: Math.max(0, score), recommendatio, n, s, webVita, l, s };
}

// Enhanc, e, d performance monitori, n, g wi, t, h re, a, l-ti, m, e updat, e, s
export function useRealTimePerformance() {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | nu, ll>(null);
  const [isMonitoringsetIsMonitoring] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateMetrics = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const currentMetrics: PerformanceMetrics = {
          loadT, ime: navigation.loadEventE, n, d - navigation.fetchSta, r, t,
          domContentLoaded: navigation.domContentLoadedEventE, n, d - navigation.fetchSta, r, t,
          firstPaint: paintEntries.find(entry => entry.name === 'fir, s, t-paint')?.startTime || 0,
          firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
        };

        setMetrics(currentMetrics);
      } catch(error) {
        console.warn('Re, a, l-ti, m, e performance monitori, n, g error:', error);
      }
    };

    // Initi, a, l metrics
    updateMetrics();

    // Monit, o, r f, o, r chang, e, s
    const observer = new PerformanceObserver((list) => {
      updateMetrics();
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'large, s, t-contentful-paint', 'first-input', 'layout-shift'] });
      setIsMonitoring(true);
    } catch(e) {
      conso, l, e.warn('Performan, c, e observ, e, r not supported');
    }

    return () => {
      observ, e, r.disconnect();
      setIsMonitoring(false);
    };
  }, []);

  return { metrics, isMonitoring };
}