import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {

  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage?: number;
  networkRequests: number;
  errors: number;
  warnings: number;
}

interface PerformanceThresholds {

  loadTime: { good: number; poor: number };
  firstContentfulPaint: { good: number; poor: number };
  largestContentfulPaint: { good: number; poor: number };
  cumulativeLayoutShift: { good: number; poor: number };
  firstInputDelay: { good: number; poor: number };
}

export function PerformanceMonitor() {

  const [metrics, setMetrics] = useState<PerformanceMetrics>({

    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    networkRequests: 0,
    errors: 0,
    warnings: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const thresholds: PerformanceThresholds = {

    loadTime: { good: 2000, poor: 4000 },
    firstContentfulPaint: { good: 1800, poor: 3000 },
    largestContentfulPaint: { good: 2500, poor: 4000 },
    cumulativeLayoutShift: { good: 0.1, poor: 0.25 },
    firstInputDelay: { good: 100, poor: 300 }
  };

  const getPerformanceScore = useCallback((metrics: PerformanceMetrics): number => {

    let score = 100;
    
    // Load time scoring (25% weight)
    if (metrics.loadTime > thresholds.loadTime.poor) score -= 25;
    else if (metrics.loadTime > thresholds.loadTime.good) score -= 12.5;
    
    // First Contentful Paint scoring (20% weight)
    if (metrics.firstContentfulPaint > thresholds.firstContentfulPaint.poor) score -= 20;
    else if (metrics.firstContentfulPaint > thresholds.firstContentfulPaint.good) score -= 10;
    
    // Largest Contentful Paint scoring (20% weight)
    if (metrics.largestContentfulPaint > thresholds.largestContentfulPaint.poor) score -= 20;
    else if (metrics.largestContentfulPaint > thresholds.largestContentfulPaint.good) score -= 10;
    
    // Cumulative Layout Shift scoring (15% weight)
    if (metrics.cumulativeLayoutShift > thresholds.cumulativeLayoutShift.poor) score -= 15;
    else if (metrics.cumulativeLayoutShift > thresholds.cumulativeLayoutShift.good) score -= 7.5;
    
    // First Input Delay scoring (20% weight)
    if (metrics.firstInputDelay > thresholds.firstInputDelay.poor) score -= 20;
    else if (metrics.firstInputDelay > thresholds.firstInputDelay.good) score -= 10;
    
    return Math.max(0, Math.round(score));
  }, [thresholds]);

  const getScoreColor = (score: number): string => {

    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBgColor = (score: number): string => {

    if (score >= 90) return 'bg-green-500/20';
    if (score >= 70) return 'bg-yellow-500/20';
    return 'bg-red-500/20';
  };

  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number): 'good' | 'warning' | 'poor' => {

    const threshold = thresholds[metric];
    if (!threshold) return 'good';
    
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'warning';
    return 'poor';
  };

  const getStatusIcon = (status: 'good' | 'warning' | 'poor') => {

    switch (status) {

      case 'good': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'poor': return <AlertTriangle className="w-4 h-4 text-red-500" />;
    }
  };

  const getStatusColor = (status: 'good' | 'warning' | 'poor') => {

    switch (status) {

      case 'good': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
    }
  };

  const measurePerformance = useCallback(() => {

    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    const layoutShiftEntries = performance.getEntriesByType('layout-shift');
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
    
    const newMetrics: PerformanceMetrics = {

      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.startTime : 0,
      cumulativeLayoutShift: layoutShiftEntries.reduce((sum, entry) => sum + (entry as any).value, 0),
      firstInputDelay: 0, // Would need to be measured with real user interaction
      timeToInteractive: navigation.domInteractive - navigation.fetchStart,
      networkRequests: performance.getEntriesByType('resource').length,
      errors: 0, // Would need to be tracked from error logging
      warnings: 0 // Would need to be tracked from console warnings
    };

    setMetrics(newMetrics);
  }, []);

  useEffect(() => {

    // Measure initial performance after page load
    const timer = setTimeout(measurePerformance, 1000);
    
    // Set up performance observer for LCP
    if ('PerformanceObserver' in window) {

      try {

        const lcpObserver = new PerformanceObserver((entryList) => {

          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {

            setMetrics(prev => ({

              ...prev,
              largestContentfulPaint: lastEntry.startTime
            }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        
        return () => lcpObserver.disconnect();
      } catch (e) {

        // // console.warn('PerformanceObserver not supported');
      }
    }
    
    return () => clearTimeout(timer);
  }, [measurePerformance]);

  useEffect(() => {

    // Show performance monitor after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const performanceScore = getPerformanceScore(metrics);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200 p-4 max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-zion-500" />
            <h3 className="font-semibold text-gray-900">Performance</h3>
          </div>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            {showDetails ? '−' : '+'}
          </button>
        </div>

        {/* Performance Score */}
        <div className="text-center mb-4">
          <div className={`text-3xl font-bold ${getScoreColor(performanceScore)}`}>
            {performanceScore}
          </div>
          <div className="text-sm text-gray-600">Performance Score</div>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getScoreBgColor(performanceScore)} ${getScoreColor(performanceScore)}`}>
            {performanceScore >= 90 ? 'Excellent' : performanceScore >= 70 ? 'Good' : 'Needs Improvement'}
          </div>
        </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">
              {Math.round(metrics.loadTime)}ms
            </div>
            <div className="text-xs text-gray-500">Load Time</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">
              {Math.round(metrics.firstContentfulPaint)}ms
            </div>
            <div className="text-xs text-gray-500">FCP</div>
          </div>
        </div>

        {/* Detailed Metrics */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3 border-t pt-4"
          >
            {Object.entries(metrics).map(([key, value]) => {

              if (key === 'loadTime' || key === 'firstContentfulPaint') return null;
              
              const status = getMetricStatus(key as keyof PerformanceMetrics, value);
              const displayValue = key === 'cumulativeLayoutShift' ? value.toFixed(3) : Math.round(value);
              const unit = key.includes('Time') || key.includes('Paint') || key.includes('Delay') ? 'ms' : '';
              
              return (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(status)}
                    <span className="text-sm text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>
                  <span className={`text-sm font-medium ${getStatusColor(status)}`}>
                    {displayValue}{unit}
                  </span>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2 mt-4">
          <button
            onClick={measurePerformance}
            className="flex-1 bg-zion-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-zion-600 transition-colors"
          >
            <Zap className="w-4 h-4 inline mr-1" />
            Refresh
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            ×
          </button>
        </div>
      </div>
    </motion.div>
  );
}