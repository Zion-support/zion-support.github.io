import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined') return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;

      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay: 0, // Would need to measure this separately
        cumulativeLayoutShift: 0, // Would need to measure this separately
        timeToInteractive: navigation.domInteractive - navigation.navigationStart,
      };

      setMetrics(performanceMetrics);
      
      if (onMetricsUpdate) {
        onMetricsUpdate(performanceMetrics);
      }

      // Report to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'performance_metrics', {
          event_category: 'performance',
          event_label: 'page_load',
          value: Math.round(performanceMetrics.loadTime),
          custom_parameters: performanceMetrics,
        });
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Set up performance observer for continuous monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => prev ? {
              ...prev,
              largestContentfulPaint: entry.startTime
            } : null);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [onMetricsUpdate]);

  const getPerformanceScore = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  if (!showMetrics || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-sm border border-white/20 z-50">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Activity className="w-4 h-4 mr-2 text-cyan-400" />
          <span className="font-semibold">Performance</span>
        </div>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>

      {isVisible && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Load Time</span>
            <span className={getScoreColor(getPerformanceScore(metrics.loadTime, { good: 1000, needsImprovement: 3000 }))}>
              {Math.round(metrics.loadTime)}ms
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-300">FCP</span>
            <span className={getScoreColor(getPerformanceScore(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 }))}>
              {Math.round(metrics.firstContentfulPaint)}ms
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-300">LCP</span>
            <span className={getScoreColor(getPerformanceScore(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 }))}>
              {Math.round(metrics.largestContentfulPaint)}ms
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-300">TTI</span>
            <span className={getScoreColor(getPerformanceScore(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 }))}>
              {Math.round(metrics.timeToInteractive)}ms
            </span>
          </div>

          <div className="pt-2 border-t border-white/20">
            <div className="flex items-center text-xs text-gray-400">
              <Zap className="w-3 h-3 mr-1" />
              Core Web Vitals
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;