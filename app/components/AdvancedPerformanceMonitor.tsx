import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  interactionToNextPaint?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
  firstInputDelay?: number;
  totalBlockingTime?: number;
}

interface PerformanceReport {
  metrics: PerformanceMetrics;
  score: number;
  recommendations: string[];
  timestamp: string;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [report, setReport] = useState<PerformanceReport | null>(null);

  const updateMetric = useCallback((metric: any) => {
    setMetrics(prev => {
      const baseMetrics = prev || {
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        interactionToNextPaint: 0,
        cumulativeLayoutShift: 0,
        timeToFirstByte: 0,
        firstInputDelay: 0,
        totalBlockingTime: 0
      };
      
      return {
        ...baseMetrics,
        [metric.name === 'CLS' ? 'cumulativeLayoutShift' : 
         metric.name === 'INP' ? 'interactionToNextPaint' :
         metric.name === 'FCP' ? 'firstContentfulPaint' :
         metric.name === 'LCP' ? 'largestContentfulPaint' :
         metric.name === 'TTFB' ? 'timeToFirstByte' :
         metric.name === 'FID' ? 'firstInputDelay' :
         metric.name === 'TBT' ? 'totalBlockingTime' : 'loadTime']: metric.value
      };
    });
  }, []);

  const calculateScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (0-2.5s = 100, 2.5-4s = 50, >4s = 0)
    if (metrics.largestContentfulPaint) {
      if (metrics.largestContentfulPaint > 4000) score -= 30;
      else if (metrics.largestContentfulPaint > 2500) score -= 15;
    }
    
    // FID scoring (0-100ms = 100, 100-300ms = 50, >300ms = 0)
    if (metrics.firstInputDelay) {
      if (metrics.firstInputDelay > 300) score -= 25;
      else if (metrics.firstInputDelay > 100) score -= 10;
    }
    
    // CLS scoring (0-0.1 = 100, 0.1-0.25 = 50, >0.25 = 0)
    if (metrics.cumulativeLayoutShift) {
      if (metrics.cumulativeLayoutShift > 0.25) score -= 25;
      else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    }
    
    // FCP scoring (0-1.8s = 100, 1.8-3s = 50, >3s = 0)
    if (metrics.firstContentfulPaint) {
      if (metrics.firstContentfulPaint > 3000) score -= 20;
      else if (metrics.firstContentfulPaint > 1800) score -= 10;
    }
    
    return Math.max(0, score);
  };

  const generateRecommendations = (metrics: PerformanceMetrics): string[] => {
    const recommendations: string[] = [];
    
    if (metrics.largestContentfulPaint && metrics.largestContentfulPaint > 2500) {
      recommendations.push('Optimize images and use WebP format');
      recommendations.push('Implement lazy loading for below-the-fold content');
    }
    
    if (metrics.firstInputDelay && metrics.firstInputDelay > 100) {
      recommendations.push('Reduce JavaScript execution time');
      recommendations.push('Code split and lazy load non-critical JavaScript');
    }
    
    if (metrics.cumulativeLayoutShift && metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('Add size attributes to images and videos');
      recommendations.push('Reserve space for dynamic content');
    }
    
    if (metrics.firstContentfulPaint && metrics.firstContentfulPaint > 1800) {
      recommendations.push('Minify CSS and JavaScript');
      recommendations.push('Use critical CSS inlining');
    }
    
    if (metrics.timeToFirstByte && metrics.timeToFirstByte > 800) {
      recommendations.push('Optimize server response time');
      recommendations.push('Use a CDN for static assets');
    }
    
    return recommendations;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    onCLS(updateMetric);
    onINP(updateMetric);
    onFCP(updateMetric);
    onLCP(updateMetric);
    onTTFB(updateMetric);

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      setMetrics(prev => {
        const baseMetrics = prev || {
          loadTime: 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          interactionToNextPaint: 0,
          cumulativeLayoutShift: 0,
          timeToFirstByte: 0,
          firstInputDelay: 0,
          totalBlockingTime: 0
        };
        
        return {
          ...baseMetrics,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          timeToFirstByte: navigation.responseStart - navigation.requestStart
        };
      });
    };

    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [updateMetric]);

  useEffect(() => {
    if (metrics) {
      const score = calculateScore(metrics);
      const recommendations = generateRecommendations(metrics);
      
      setReport({
        metrics,
        score,
        recommendations,
        timestamp: new Date().toISOString()
      });
    }
  }, [metrics]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
        aria-label="Toggle performance metrics"
      >
        Performance {report && `(${report.score}/100)`}
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-96 max-h-96 overflow-y-auto">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <span className={`w-2 h-2 rounded-full mr-2 ${
              report && report.score >= 90 ? 'bg-green-500' : 
              report && report.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`}></span>
            Performance Metrics
          </h3>
          
          {report && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Overall Score:</span>
                <span className={`font-mono font-bold ${getScoreColor(report.score)}`}>
                  {report.score}/100
                </span>
              </div>
            </div>
          )}
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
              <span className={`font-mono ${getMetricColor(metrics.loadTime || 0, { good: 1000, poor: 3000 })}`}>
                {metrics.loadTime?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
              <span className={`font-mono ${getMetricColor(metrics.firstContentfulPaint || 0, { good: 1800, poor: 3000 })}`}>
                {metrics.firstContentfulPaint?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              <span className={`font-mono ${getMetricColor(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}`}>
                {metrics.largestContentfulPaint?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">INP:</span>
              <span className={`font-mono ${getMetricColor(metrics.interactionToNextPaint || 0, { good: 200, poor: 500 })}`}>
                {metrics.interactionToNextPaint?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              <span className={`font-mono ${getMetricColor(metrics.cumulativeLayoutShift || 0, { good: 0.1, poor: 0.25 })}`}>
                {metrics.cumulativeLayoutShift?.toFixed(3) || 'N/A'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
              <span className={`font-mono ${getMetricColor(metrics.timeToFirstByte || 0, { good: 800, poor: 1800 })}`}>
                {metrics.timeToFirstByte?.toFixed(0) || 'N/A'}ms
              </span>
            </div>
          </div>
          
          {report && report.recommendations.length > 0 && (
            <div className="mt-4 pt-3 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Recommendations:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {report.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <div className="flex items-center mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Good
              </div>
              <div className="flex items-center mb-1">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Needs Improvement
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Poor
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;