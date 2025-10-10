'use client';
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
import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const sendToAnalytics = (metric: any) => {
      // Send to Google Analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Send to custom analytics
      if (typeof window !== 'undefined' && 'dataLayer' in window) {
        (window as any).dataLayer.push({
          event: 'web_vitals',
          metric_name: metric.name,
          metric_value: metric.value,
          metric_delta: metric.delta,
          metric_id: metric.id,
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
    // Measure Core Web Vitals
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);

    // Monitor page load performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          
          // Send performance metrics
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'page_load_time', {
              event_category: 'Performance',
              event_label: 'Page Load',
              value: Math.round(loadTime),
            });
            
            (window as any).gtag('event', 'dom_content_loaded', {
              event_category: 'Performance',
              event_label: 'DOM Content Loaded',
              value: Math.round(domContentLoaded),
            });
          }
        }
      });
    }

    // Monitor resource loading
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            if (resource.duration > 1000) { // Log slow resources
              console.warn('Slow resource detected:', {
                name: resource.name,
                duration: resource.duration,
                size: resource.transferSize,
              });
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['resource'] });
      
      return () => observer.disconnect();
    }
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;