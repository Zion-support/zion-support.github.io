import React, { useEffect, useState } from 'react';
import { performanceMonitor } from '../utils/performance';
import { bundleAnalyzer } from '../utils/bundleAnalyzer';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  performanceScore: number;
  bundleScore: number;
  recommendations: string[];
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    performanceScore: 0,
    bundleScore: 0,
    recommendations: [],
  });

  useEffect(() => {
    // Only run in production and if PerformanceObserver is available
    if (process.env.NODE_ENV !== 'production' || !('PerformanceObserver' in window)) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
            break;
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input':
            const fidEntry = entry as any;
            setMetrics(prev => ({ ...prev, fid: (fidEntry.processingStart || 0) - entry.startTime }));
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
            }
            break;
          case 'navigation':
            const navEntry = entry as any;
            setMetrics(prev => ({ ...prev, ttfb: (navEntry.responseStart || 0) - (navEntry.requestStart || 0) }));
            break;
        }
      }
    });

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['paint', 'navigation'] });
    }

    return () => observer.disconnect();
  }, []);

  // Update performance scores and recommendations
  useEffect(() => {
    const updateScores = () => {
      const performanceScore = performanceMonitor.getPerformanceScore();
      const bundleScore = bundleAnalyzer.getPerformanceScore();
      const recommendations = bundleAnalyzer.getRecommendations();

      setMetrics(prev => ({
        ...prev,
        performanceScore,
        bundleScore,
        recommendations,
      }));
    };

    // Update scores after a delay to allow for initial load
    const timeoutId = setTimeout(updateScores, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Send metrics to analytics (placeholder)
  useEffect(() => {
    if (metrics.fcp && metrics.lcp && metrics.fid && metrics.cls && metrics.ttfb) {
      // In a real app, you would send this to your analytics service
      console.log('Performance Metrics:', metrics);
      console.log('Performance Score:', metrics.performanceScore);
      console.log('Bundle Score:', metrics.bundleScore);
      console.log('Recommendations:', metrics.recommendations);
    }
  }, [metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;