import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  interactionToNextPaint: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
  firstInputDelay: number;
  totalBlockingTime: number;
  speedIndex: number;
}

interface PerformanceReport {
  metrics: PerformanceMetrics;
  recommendations: string[];
  score: number;
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
        totalBlockingTime: 0,
        speedIndex: 0
      };
      
      return {
        ...baseMetrics,
        [metric.name === 'CLS' ? 'cumulativeLayoutShift' : 
         metric.name === 'INP' ? 'interactionToNextPaint' :
         metric.name === 'FCP' ? 'firstContentfulPaint' :
         metric.name === 'LCP' ? 'largestContentfulPaint' :
         metric.name === 'TTFB' ? 'timeToFirstByte' : 'loadTime']: metric.value
      };
    });
  }, []);

  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (25% weight)
    if (metrics.largestContentfulPaint > 4000) score -= 25;
    else if (metrics.largestContentfulPaint > 2500) score -= 15;
    
    // FID scoring (25% weight)
    if (metrics.firstInputDelay > 300) score -= 25;
    else if (metrics.firstInputDelay > 100) score -= 15;
    
    // CLS scoring (25% weight)
    if (metrics.cumulativeLayoutShift > 0.25) score -= 25;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 15;
    
    // FCP scoring (25% weight)
    if (metrics.firstContentfulPaint > 3000) score -= 25;
    else if (metrics.firstContentfulPaint > 1800) score -= 15;
    
    return Math.max(0, score);
  }, []);

  const generateRecommendations = useCallback((metrics: PerformanceMetrics): string[] => {
    const recommendations: string[] = [];
    
    if (metrics.largestContentfulPaint > 2500) {
      recommendations.push('Optimize images and implement lazy loading');
      recommendations.push('Consider using a CDN for static assets');
    }
    
    if (metrics.firstContentfulPaint > 1800) {
      recommendations.push('Minimize render-blocking resources');
      recommendations.push('Implement critical CSS inlining');
    }
    
    if (metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('Add size attributes to images and videos');
      recommendations.push('Avoid inserting content above existing content');
    }
    
    if (metrics.interactionToNextPaint > 200) {
      recommendations.push('Optimize JavaScript execution');
      recommendations.push('Consider code splitting for large bundles');
    }
    
    if (metrics.timeToFirstByte > 800) {
      recommendations.push('Optimize server response time');
      recommendations.push('Consider using a faster hosting provider');
    }
    
    return recommendations;
  }, []);

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
      const paintEntries = performance.getEntriesByType('paint');
      
      setMetrics(prev => {
        const baseMetrics = prev || {
          loadTime: 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          interactionToNextPaint: 0,
          cumulativeLayoutShift: 0,
          timeToFirstByte: 0,
          firstInputDelay: 0,
          totalBlockingTime: 0,
          speedIndex: 0
        };
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        
        return {
          ...baseMetrics,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
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
        recommendations,
        score
      });
    }
  }, [metrics, calculateScore, generateRecommendations]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !report) {
    return null;
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
        aria-label="Toggle performance metrics"
      >
        Performance ({report.score}/100)
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-96 max-h-96 overflow-y-auto">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <span className={`w-2 h-2 rounded-full mr-2 ${getScoreColor(report.score).replace('text-', 'bg-')}`}></span>
            Performance Report
          </h3>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Overall Score:</span>
              <span className={`font-bold text-lg ${getScoreColor(report.score)}`}>
                {report.score}/100
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  report.score >= 90 ? 'bg-green-500' : 
                  report.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${report.score}%` }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-3 text-sm mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
              <span className={`font-mono ${getMetricColor(report.metrics.loadTime, { good: 1000, poor: 3000 })}`}>
                {report.metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
              <span className={`font-mono ${getMetricColor(report.metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}`}>
                {report.metrics.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              <span className={`font-mono ${getMetricColor(report.metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}`}>
                {report.metrics.largestContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">INP:</span>
              <span className={`font-mono ${getMetricColor(report.metrics.interactionToNextPaint, { good: 200, poor: 500 })}`}>
                {report.metrics.interactionToNextPaint.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              <span className={`font-mono ${getMetricColor(report.metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}`}>
                {report.metrics.cumulativeLayoutShift.toFixed(3)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
              <span className={`font-mono ${getMetricColor(report.metrics.timeToFirstByte, { good: 800, poor: 1800 })}`}>
                {report.metrics.timeToFirstByte.toFixed(0)}ms
              </span>
            </div>
          </div>
          
          {report.recommendations.length > 0 && (
            <div className="mt-4 pt-3 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Recommendations:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {report.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;
