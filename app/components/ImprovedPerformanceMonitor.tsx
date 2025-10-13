import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import { Activity, Zap, Clock, TrendingUp, AlertCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  interactionToNextPaint?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
}

interface PerformanceThresholds {
  good: number;
  poor: number;
}

const ImprovedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const updateMetric = useCallback((metric: any) => {
    setMetrics(prev => {
      const newMetrics = prev || {};
      return {
        ...newMetrics,
        [metric.name === 'CLS' ? 'cumulativeLayoutShift' : 
         metric.name === 'INP' ? 'interactionToNextPaint' :
         metric.name === 'FCP' ? 'firstContentfulPaint' :
         metric.name === 'LCP' ? 'largestContentfulPaint' :
         metric.name === 'TTFB' ? 'timeToFirstByte' : 'loadTime']: metric.value
      };
    });
  }, []);

  const getMetricColor = (value: number | undefined, thresholds: PerformanceThresholds) => {
    if (value === undefined) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getMetricIcon = (value: number | undefined, thresholds: PerformanceThresholds) => {
    if (value === undefined) return <Clock className="w-4 h-4" />;
    if (value <= thresholds.good) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (value <= thresholds.poor) return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    return <AlertCircle className="w-4 h-4 text-red-500" />;
  };

  const getPerformanceScore = () => {
    if (!metrics) return 0;
    
    let score = 0;
    let total = 0;

    // Load Time (25%)
    if (metrics.loadTime !== undefined) {
      total += 25;
      if (metrics.loadTime <= 1000) score += 25;
      else if (metrics.loadTime <= 3000) score += 15;
      else if (metrics.loadTime <= 5000) score += 5;
    }

    // FCP (20%)
    if (metrics.firstContentfulPaint !== undefined) {
      total += 20;
      if (metrics.firstContentfulPaint <= 1800) score += 20;
      else if (metrics.firstContentfulPaint <= 3000) score += 12;
      else if (metrics.firstContentfulPaint <= 5000) score += 4;
    }

    // LCP (25%)
    if (metrics.largestContentfulPaint !== undefined) {
      total += 25;
      if (metrics.largestContentfulPaint <= 2500) score += 25;
      else if (metrics.largestContentfulPaint <= 4000) score += 15;
      else if (metrics.largestContentfulPaint <= 6000) score += 5;
    }

    // INP (15%)
    if (metrics.interactionToNextPaint !== undefined) {
      total += 15;
      if (metrics.interactionToNextPaint <= 200) score += 15;
      else if (metrics.interactionToNextPaint <= 500) score += 9;
      else if (metrics.interactionToNextPaint <= 1000) score += 3;
    }

    // CLS (15%)
    if (metrics.cumulativeLayoutShift !== undefined) {
      total += 15;
      if (metrics.cumulativeLayoutShift <= 0.1) score += 15;
      else if (metrics.cumulativeLayoutShift <= 0.25) score += 9;
      else if (metrics.cumulativeLayoutShift <= 0.5) score += 3;
    }

    return total > 0 ? Math.round((score / total) * 100) : 0;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    setIsMonitoring(true);

    // Measure Core Web Vitals
    onCLS(updateMetric);
    onINP(updateMetric);
    onFCP(updateMetric);
    onLCP(updateMetric);
    onTTFB(updateMetric);

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      setMetrics(prev => {
        const newMetrics = prev || {};
        return {
          ...newMetrics,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart
        };
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Show monitor after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', measurePerformance);
      setIsMonitoring(false);
    };
  }, [updateMetric]);

  if (!isVisible || !metrics) return null;

  const performanceScore = getPerformanceScore();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200 p-4 max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-gray-900">Performance</h3>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
              {performanceScore}
            </div>
            <div className="text-xs text-gray-500">
              {getScoreLabel(performanceScore)}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {getMetricIcon(metrics.loadTime, { good: 1000, poor: 3000 })}
              <span className="text-gray-600">Load Time</span>
            </div>
            <span className={`font-mono ${getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 })}`}>
              {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {getMetricIcon(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}
              <span className="text-gray-600">FCP</span>
            </div>
            <span className={`font-mono ${getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}`}>
              {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {getMetricIcon(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}
              <span className="text-gray-600">LCP</span>
            </div>
            <span className={`font-mono ${getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}`}>
              {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {getMetricIcon(metrics.interactionToNextPaint, { good: 200, poor: 500 })}
              <span className="text-gray-600">INP</span>
            </div>
            <span className={`font-mono ${getMetricColor(metrics.interactionToNextPaint, { good: 200, poor: 500 })}`}>
              {metrics.interactionToNextPaint ? `${metrics.interactionToNextPaint.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {getMetricIcon(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}
              <span className="text-gray-600">CLS</span>
            </div>
            <span className={`font-mono ${getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}`}>
              {metrics.cumulativeLayoutShift !== undefined ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {getMetricIcon(metrics.timeToFirstByte, { good: 800, poor: 1800 })}
              <span className="text-gray-600">TTFB</span>
            </div>
            <span className={`font-mono ${getMetricColor(metrics.timeToFirstByte, { good: 800, poor: 1800 })}`}>
              {metrics.timeToFirstByte ? `${metrics.timeToFirstByte.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>

        {/* Status */}
        <div className="mt-4 pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-gray-500">
                {isMonitoring ? 'Monitoring' : 'Complete'}
              </span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Zap className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedPerformanceMonitor;