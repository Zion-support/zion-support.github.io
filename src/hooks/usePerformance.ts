import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
<<<<<<< HEAD
  tti: number | null;
  overallScore: number;
  isLoaded: boolean;
}

interface PerformanceObserver {
  observe: (entry: any) => void;
  disconnect: () => void;
}

export const usePerformance = (): PerformanceMetrics => {
=======
  overallScore: number;
}

interface PerformanceEntry {
  name: string;
  entryType: string;
  startTime: number;
  duration: number;
  value?: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

export const usePerformance = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
<<<<<<< HEAD
    tti: null,
    overallScore: 0,
    isLoaded: false,
  });

  // Calculate overall performance score
  const calculateScore = useCallback((currentMetrics: Partial<PerformanceMetrics>): number => {
    let score = 100;
    let factors = 0;

    // FCP scoring (0-25 points)
    if (currentMetrics.fcp !== null && currentMetrics.fcp !== undefined) {
      factors++;
      if (currentMetrics.fcp <= 1800) score -= 0;
      else if (currentMetrics.fcp <= 3000) score -= 10;
      else score -= 25;
    }

    // LCP scoring (0-25 points)
    if (currentMetrics.lcp !== null && currentMetrics.lcp !== undefined) {
      factors++;
      if (currentMetrics.lcp <= 2500) score -= 0;
      else if (currentMetrics.lcp <= 4000) score -= 10;
      else score -= 25;
    }

    // FID scoring (0-25 points)
    if (currentMetrics.fid !== null && currentMetrics.fid !== undefined) {
      factors++;
      if (currentMetrics.fid <= 100) score -= 0;
      else if (currentMetrics.fid <= 300) score -= 10;
      else score -= 25;
    }

    // CLS scoring (0-25 points)
    if (currentMetrics.cls !== null && currentMetrics.cls !== undefined) {
      factors++;
      if (currentMetrics.cls <= 0.1) score -= 0;
      else if (currentMetrics.cls <= 0.25) score -= 10;
      else score -= 25;
    }

    // TTFB scoring (bonus points)
    if (currentMetrics.ttfb !== null && currentMetrics.ttfb !== undefined) {
      if (currentMetrics.ttfb <= 800) score += 5;
      else if (currentMetrics.ttfb <= 1800) score += 2;
    }

    // TTI scoring (bonus points)
    if (currentMetrics.tti !== null && currentMetrics.tti !== undefined) {
      if (currentMetrics.tti <= 3800) score += 5;
      else if (currentMetrics.tti <= 7300) score += 2;
    }

    // Normalize score based on available factors
    return factors > 0 ? Math.max(0, Math.min(100, score)) : 0;
  }, []);

  // Update metrics and recalculate score
  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      const score = calculateScore(updated);
      return { ...updated, overallScore: score };
    });
  }, [calculateScore]);

  // Measure First Contentful Paint (FCP)
  const measureFCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new (window as any).PerformanceObserver((list: any) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find((entry: any) => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            updateMetrics({ fcp: fcpEntry.startTime });
            observer.disconnect();
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('FCP measurement failed:', error);
      }
    }
  }, [updateMetrics]);

  // Measure Largest Contentful Paint (LCP)
  const measureLCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        let lcpValue = 0;
        const observer = new (window as any).PerformanceObserver((list: any) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            lcpValue = lastEntry.startTime;
            updateMetrics({ lcp: lcpValue });
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('LCP measurement failed:', error);
      }
    }
  }, [updateMetrics]);

  // Measure First Input Delay (FID)
  const measureFID = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new (window as any).PerformanceObserver((list: any) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.entryType === 'first-input') {
              updateMetrics({ fid: entry.processingStart - entry.startTime });
              observer.disconnect();
            }
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID measurement failed:', error);
      }
    }
  }, [updateMetrics]);

  // Measure Cumulative Layout Shift (CLS)
  const measureCLS = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const observer = new (window as any).PerformanceObserver((list: any) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
              updateMetrics({ cls: clsValue });
            }
          });
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS measurement failed:', error);
      }
    }
  }, [updateMetrics]);

  // Measure Time to First Byte (TTFB)
  const measureTTFB = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new (window as any).PerformanceObserver((list: any) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.entryType === 'navigation') {
              updateMetrics({ ttfb: entry.responseStart - entry.requestStart });
            }
          });
        });
        observer.observe({ entryTypes: ['navigation'] });
      } catch (error) {
        console.warn('TTFB measurement failed:', error);
      }
    }
  }, [updateMetrics]);

  // Measure Time to Interactive (TTI)
  const measureTTI = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new (window as any).PerformanceObserver((list: any) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.entryType === 'measure' && entry.name === 'tti') {
              updateMetrics({ tti: entry.startTime });
            }
          });
        });
        observer.observe({ entryTypes: ['measure'] });
      } catch (error) {
        console.warn('TTI measurement failed:', error);
      }
    }
  }, [updateMetrics]);

  // Measure TTI using a polyfill approach
  const measureTTIPolyfill = useCallback(() => {
    if (document.readyState === 'complete') {
      // Use a simple heuristic for TTI
      const tti = performance.now();
      updateMetrics({ tti });
    } else {
      window.addEventListener('load', () => {
        const tti = performance.now();
        updateMetrics({ tti });
      });
    }
  }, [updateMetrics]);

  // Initialize performance monitoring
  useEffect(() => {
    // Start measuring when component mounts
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();
    measureTTIPolyfill();

    // Mark as loaded after a reasonable delay
    const timer = setTimeout(() => {
      updateMetrics({ isLoaded: true });
    }, 1000);

    return () => clearTimeout(timer);
  }, [measureFCP, measureLCP, measureFID, measureCLS, measureTTFB, measureTTIPolyfill, updateMetrics]);

  // Add performance marks for custom measurements
  useEffect(() => {
    if ('performance' in window) {
      // Mark key application events
      performance.mark('app-mount');
      
      // Measure time to mount
      setTimeout(() => {
        performance.mark('app-ready');
        performance.measure('app-mount-time', 'app-mount', 'app-ready');
        
        const measure = performance.getEntriesByName('app-mount-time')[0];
        if (measure) {
          updateMetrics({ tti: measure.duration });
        }
      }, 100);
    }
  }, [updateMetrics]);

  return metrics;
};

// Hook for monitoring specific performance metrics
export const usePerformanceMetric = (metricName: string) => {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.name === metricName) {
          setValue(entry.startTime);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['measure'] });
    } catch (error) {
      console.warn('Error setting up performance observer for', metricName, error);
    }

    return () => observer.disconnect();
  }, [metricName]);

  return value;
};

// Hook for measuring custom performance marks
export const usePerformanceMark = () => {
  const mark = useCallback((name: string) => {
    if ('performance' in window) {
      performance.mark(name);
    }
  }, []);

  const measure = useCallback((name: string, startMark: string, endMark: string) => {
    if ('performance' in window) {
      try {
        performance.measure(name, startMark, endMark);
        const measure = performance.getEntriesByName(name)[0];
        return measure ? Math.round(measure.duration) : null;
      } catch (error) {
        console.warn('Error measuring performance:', error);
        return null;
      }
    }
    return null;
  }, []);

  const clearMarks = useCallback((name?: string) => {
    if ('performance' in window) {
      if (name) {
        performance.clearMarks(name);
      } else {
        performance.clearMarks();
      }
    }
  }, []);

  const clearMeasures = useCallback((name?: string) => {
    if ('performance' in window) {
      if (name) {
        performance.clearMeasures(name);
      } else {
        performance.clearMeasures();
      }
    }
  }, []);

  return { mark, measure, clearMarks, clearMeasures };
=======
    overallScore: 0
  });

  const [isSupported, setIsSupported] = useState(false);

  // Calculate overall performance score
  const calculateScore = useCallback((fcp: number, lcp: number, fid: number, cls: number): number => {
    let score = 100;

    // FCP scoring (0-25 points)
    if (fcp <= 1800) score -= 0;
    else if (fcp <= 3000) score -= 10;
    else score -= 25;

    // LCP scoring (0-25 points)
    if (lcp <= 2500) score -= 0;
    else if (lcp <= 4000) score -= 10;
    else score -= 25;

    // FID scoring (0-25 points)
    if (fid <= 100) score -= 0;
    else if (fid <= 300) score -= 10;
    else score -= 25;

    // CLS scoring (0-25 points)
    if (cls <= 0.1) score -= 0;
    else if (cls <= 0.25) score -= 10;
    else score -= 25;

    return Math.max(0, score);
  }, []);

  // Get performance rating
  const getPerformanceRating = useCallback((score: number): string => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 70) return 'Fair';
    if (score >= 60) return 'Poor';
    return 'Very Poor';
  }, []);

  // Get performance color
  const getPerformanceColor = useCallback((score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    if (score >= 60) return 'text-orange-500';
    return 'text-red-500';
  }, []);

  // Measure TTFB
  const measureTTFB = useCallback((): Promise<number> => {
    return new Promise((resolve) => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        resolve(navigation.responseStart - navigation.requestStart);
      } else {
        resolve(0);
      }
    });
  }, []);

  // Initialize performance monitoring
  useEffect(() => {
    const checkSupport = () => {
      const hasPerformanceObserver = 'PerformanceObserver' in window;
      const hasPerformance = 'performance' in window;
      const hasGetEntriesByType = 'getEntriesByType' in performance;
      
      setIsSupported(hasPerformanceObserver && hasPerformance && hasGetEntriesByType);
    };

    checkSupport();
  }, []);

  // Monitor Core Web Vitals
  useEffect(() => {
    if (!isSupported) return;

    let fcpObserver: PerformanceObserver | null = null;
    let lcpObserver: PerformanceObserver | null = null;
    let fidObserver: PerformanceObserver | null = null;
    let clsObserver: PerformanceObserver | null = null;

    // FCP Observer
    try {
      fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries[entries.length - 1];
        if (fcpEntry) {
          setMetrics(prev => {
            const newMetrics = { ...prev, fcp: fcpEntry.startTime };
            const score = calculateScore(
              newMetrics.fcp || 0,
              newMetrics.lcp || 0,
              newMetrics.fid || 0,
              newMetrics.cls || 0
            );
            return { ...newMetrics, overallScore: score };
          });
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (error) {
      console.warn('FCP observer not supported:', error);
    }

    // LCP Observer
    try {
      lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics(prev => {
            const newMetrics = { ...prev, lcp: lcpEntry.startTime };
            const score = calculateScore(
              newMetrics.fcp || 0,
              newMetrics.lcp || 0,
              newMetrics.fid || 0,
              newMetrics.cls || 0
            );
            return { ...newMetrics, overallScore: score };
          });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP observer not supported:', error);
    }

    // FID Observer
    try {
      fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries[entries.length - 1];
        if (fidEntry && 'processingStart' in fidEntry) {
          const firstInputEntry = fidEntry as FirstInputEntry;
          setMetrics(prev => {
            const newMetrics = { ...prev, fid: firstInputEntry.processingStart - firstInputEntry.startTime };
            const score = calculateScore(
              newMetrics.fcp || 0,
              newMetrics.lcp || 0,
              newMetrics.fid || 0,
              newMetrics.cls || 0
            );
            return { ...newMetrics, overallScore: score };
          });
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID observer not supported:', error);
    }

    // CLS Observer
    try {
      let clsValue = 0;
      clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if ('hadRecentInput' in entry && 'value' in entry) {
            const layoutShiftEntry = entry as LayoutShiftEntry;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value || 0;
            }
          }
        }
        setMetrics(prev => {
          const newMetrics = { ...prev, cls: clsValue };
          const score = calculateScore(
            newMetrics.fcp || 0,
            newMetrics.lcp || 0,
            newMetrics.fid || 0,
            newMetrics.cls || 0
          );
          return { ...newMetrics, overallScore: score };
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS observer not supported:', error);
    }

    // Measure TTFB after page load
    const measureTTFBAfterLoad = async () => {
      const ttfb = await measureTTFB();
      setMetrics(prev => {
        const newMetrics = { ...prev, ttfb };
        const score = calculateScore(
          newMetrics.fcp || 0,
          newMetrics.lcp || 0,
          newMetrics.fid || 0,
          newMetrics.cls || 0
        );
        return { ...newMetrics, overallScore: score };
      });
    };

    // Wait for page to be fully loaded
    if (document.readyState === 'complete') {
      measureTTFBAfterLoad();
    } else {
      window.addEventListener('load', measureTTFBAfterLoad);
    }

    // Cleanup
    return () => {
      if (fcpObserver) fcpObserver.disconnect();
      if (lcpObserver) lcpObserver.disconnect();
      if (fidObserver) fidObserver.disconnect();
      if (clsObserver) clsObserver.disconnect();
      window.removeEventListener('load', measureTTFBAfterLoad);
    };
  }, [isSupported, calculateScore, measureTTFB]);

  // Log performance metrics in development
  useEffect(() => {
    if (import.meta.env.DEV && metrics.overallScore > 0) {
      console.group('🚀 Performance Metrics');
      console.log('FCP:', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A');
      console.log('LCP:', metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A');
      console.log('FID:', metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A');
      console.log('CLS:', metrics.cls ? metrics.cls.toFixed(3) : 'N/A');
      console.log('TTFB:', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A');
      console.log('Overall Score:', `${metrics.overallScore}/100 (${getPerformanceRating(metrics.overallScore)})`);
      console.groupEnd();
    }
  }, [metrics, getPerformanceRating]);

  // Get detailed performance report
  const getPerformanceReport = useCallback(() => {
    return {
      metrics,
      rating: getPerformanceRating(metrics.overallScore),
      color: getPerformanceColor(metrics.overallScore),
      recommendations: getRecommendations(metrics),
      timestamp: new Date().toISOString()
    };
  }, [metrics, getPerformanceRating, getPerformanceColor]);

  // Get performance recommendations
  const getRecommendations = useCallback((currentMetrics: PerformanceMetrics): string[] => {
    const recommendations: string[] = [];

    if (currentMetrics.fcp && currentMetrics.fcp > 1800) {
      recommendations.push('Optimize First Contentful Paint by reducing server response time and critical resources');
    }

    if (currentMetrics.lcp && currentMetrics.lcp > 2500) {
      recommendations.push('Improve Largest Contentful Paint by optimizing images and critical rendering path');
    }

    if (currentMetrics.fid && currentMetrics.fid > 100) {
      recommendations.push('Reduce First Input Delay by minimizing JavaScript execution time');
    }

    if (currentMetrics.cls && currentMetrics.cls > 0.1) {
      recommendations.push('Minimize Cumulative Layout Shift by setting explicit dimensions for media elements');
    }

    if (currentMetrics.ttfb && currentMetrics.ttfb > 600) {
      recommendations.push('Optimize Time to First Byte by improving server response time');
    }

    if (recommendations.length === 0) {
      recommendations.push('Great performance! Keep up the good work.');
    }

    return recommendations;
  }, []);

  return {
    metrics,
    isSupported,
    getPerformanceRating,
    getPerformanceColor,
    getPerformanceReport,
    getRecommendations
  };
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
};