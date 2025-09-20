import { useState, useEffect, useCallback } from 'react';
interface PerformanceMetrics {,
  fcp: number, // First Contentful Paint,
  lcp: number, // Largest Contentful Paint,
  fid: number, // First Input Delay,
  cls: number, // Cumulative Layout Shift,
  ttfb: number, // Time to First Byte,
  domLoadTime: number, // DOM Content Loaded,
  resourceLoadTime: number, // Window Load,
  totalLoadTime: number, // Total page load time,
}
,
interface PerformanceRecommendation {,
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  estimatedImpact: 'low' | 'medium' | 'high';
  category: 'loading' | 'rendering' | 'interaction' | 'optimization',}
,
export const usePerformanceMonitor = () => {,
  const [metrics, setMetrics] = useState<PerformanceMetrics>({,
    fcp: 0;
    lcp: 0;
    fid: 0;
    cls: 0;
    ttfb: 0;
    domLoadTime: 0;
    resourceLoadTime: 0;
    totalLoadTime: 0,});
  const [score, setScore] = useState<number>(0);
  const [grade, setGrade] = useState<string>('A');
  // Calculate performance score based on Core Web Vitals,
  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {,
    let score = 100;
    // FCP scoring (0-1800ms = good, 1800-3000ms = needs improvement, >3000ms = poor),
    if (metrics.fcp > 3000) score -= 30;
    else if (metrics.fcp > 1800) score -= 15;
    // LCP scoring (0-2500ms = good, 2500-4000ms = needs improvement, >4000ms = poor),
    if (metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp > 2500) score -= 15;
    // CLS scoring (0-0.1 = good, 0.1-0.25 = needs improvement, >0.25 = poor),
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;
    // TTFB scoring (0-600ms = good, 600-1200ms = needs improvement, >1200ms = poor),
    if (metrics.ttfb > 1200) score -= 15;
    else if (metrics.ttfb > 600) score -= 7;
    // Total load time scoring,
    if (metrics.totalLoadTime > 8000) score -= 10;
    else if (metrics.totalLoadTime > 5000) score -= 5;
    return Math.max(0, score);
  }, []);
  // Calculate grade based on score,
  const calculateGrade = useCallback((score: number): string => {,
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F',
  }, []);
  // Generate AI-powered recommendations,
  const generateRecommendations = useCallback((metrics: PerformanceMetrics): PerformanceRecommendation[] => {,
    const recommendations: PerformanceRecommendation[] = [];
    // FCP recommendations,
    if (metrics.fcp > 1800) {,
      recommendations.push({,
        title: 'Optimize First Contentful Paint';
        description: 'Reduce server response time, optimize critical rendering path, and minimize render-blocking resources.';
        priority: metrics.fcp > 3000 ? 'high' : 'medium';
        estimatedImpact: 'high';
        category: 'loading',});
    }
,
    // LCP recommendations,
    if (metrics.lcp > 2500) {,
      recommendations.push({,
        title: 'Improve Largest Contentful Paint';
        description: 'Optimize images, implement lazy loading, and reduce the size of the largest content element.';
        priority: metrics.lcp > 4000 ? 'high' : 'medium';
        estimatedImpact: 'high';
        category: 'rendering',});
    }
,
    // CLS recommendations,
    if (metrics.cls > 0.1) {,
      recommendations.push({,
        title: 'Fix Cumulative Layout Shift';
        description: 'Set explicit dimensions for images and videos, avoid inserting content above existing content.';
        priority: metrics.cls > 0.25 ? 'high' : 'medium';
        estimatedImpact: 'medium';
        category: 'rendering',});
    }
,
    // TTFB recommendations,
    if (metrics.ttfb > 600) {,
      recommendations.push({,
        title: 'Reduce Time to First Byte';
        description: 'Optimize server response time, implement caching, and consider using a CDN.';
        priority: metrics.ttfb > 1200 ? 'high' : 'medium';
        estimatedImpact: 'high';
        category: 'loading',});
    }
,
    // General optimization recommendations,
    if (metrics.totalLoadTime > 5000) {,
      recommendations.push({,
        title: 'Optimize Overall Page Load';
        description: 'Implement code splitting, optimize bundle size, and use modern image formats.';
        priority: 'medium';
        estimatedImpact: 'high';
        category: 'optimization',});
    }
,
    // If no specific issues, provide general optimization tips,
    if (recommendations.length === 0) {,
      recommendations.push({,
        title: 'Maintain Performance Excellence';
        description: 'Continue monitoring and consider implementing advanced optimization techniques like service workers and preloading.';
        priority: 'low';
        estimatedImpact: 'low';
        category: 'optimization',});
    }
,
    return recommendations.sort((a, b) => {,
      const priorityOrder = { high: 3, medium: 2, low: 1 ,};
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }, []);
  // Measure Core Web Vitals,
  const measureCoreWebVitals = useCallback(() => {,
    if ('PerformanceObserver' in window) {,
      // Measure FCP,
      try {,
        new PerformanceObserver((entryList) => {,
          const entries = entryList.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {,
            setMetrics(prev => ({ ...prev, fcp: Math.round(fcpEntry.startTime) ,}));
          }
        }).observe({ entryTypes: ['paint'] ,});
      } catch (e) {,
        console.warn('FCP measurement failed:', e);
      }
,
      // Measure LCP,
      try {,
        new PerformanceObserver((entryList) => {,
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {,
            setMetrics(prev => ({ ...prev, lcp: Math.round(lastEntry.startTime) ,}));
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] ,});
      } catch (e) {,
        console.warn('LCP measurement failed:', e);
      }
,
      // Measure CLS,
      try {,
        let clsValue = 0;
        new PerformanceObserver((entryList) => {,
          for (const entry of entryList.getEntries()) {,
            if (!entry.hadRecentInput) {,
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 ,}));
        }).observe({ entryTypes: ['layout-shift'] ,});
      } catch (e) {,
        console.warn('CLS measurement failed:', e);
      }
,
      // Measure FID,
      try {,
        new PerformanceObserver((entryList) => {,
          const entries = entryList.getEntries();
          const fidEntry = entries[entries.length - 1];
          if (fidEntry) {,
            setMetrics(prev => ({ ...prev, fid: Math.round(fidEntry.processingStart - fidEntry.startTime) ,}));
          }
        }).observe({ entryTypes: ['first-input'] ,});
      } catch (e) {,
        console.warn('FID measurement failed:', e);
      }
    }
  }, []);
  // Measure navigation timing,
  const measureNavigationTiming = useCallback(() => {,
    if ('performance' in window) {,
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {,
        setMetrics(prev => ({,
          ...prev;
          ttfb: Math.round(navigation.responseStart - navigation.requestStart);
          domLoadTime: Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart);
          resourceLoadTime: Math.round(navigation.loadEventEnd - navigation.navigationStart);
          totalLoadTime: Math.round(navigation.loadEventEnd - navigation.navigationStart),}));
      }
    }
  }, []);
  // Update score and grade when metrics change,
  useEffect(() => {,
    const newScore = calculateScore(metrics);
    const newGrade = calculateGrade(newScore);
    setScore(newScore);
    setGrade(newGrade);
  }, [metrics, calculateScore, calculateGrade]);
  // Initialize measurements,
  useEffect(() => {,
    measureCoreWebVitals();
    measureNavigationTiming();
    // Measure on page load,
    if (document.readyState === 'complete') {,
      measureNavigationTiming();
    } else {,
      window.addEventListener('load', measureNavigationTiming);
      return () => window.removeEventListener('load', measureNavigationTiming);
    }
  }, [measureCoreWebVitals, measureNavigationTiming]);
  // Generate recommendations,
  const recommendations = generateRecommendations(metrics);
  return {,
    metrics;
    score;
    grade;
    recommendations;
    refreshMetrics: () => {,
      measureCoreWebVitals();
      measureNavigationTiming(),
    }
  };
};