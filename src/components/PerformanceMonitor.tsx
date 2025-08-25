import React, { useEffect, useState, useCallback } from 'react';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Info,
  BarChart3
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
}

interface PerformanceReport {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  recommendations: string[];
  metrics: PerformanceMetrics;
  timestamp: Date;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [report, setReport] = useState<PerformanceReport | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 3000) score -= 30;
    else if (metrics.fcp > 2000) score -= 20;
    else if (metrics.fcp > 1500) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp > 2500) score -= 20;
    else if (metrics.lcp > 2000) score -= 10;
    
    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
    
    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;
    
    return Math.max(0, score);
  }, []);

  const getGrade = useCallback((score: number): 'A' | 'B' | 'C' | 'D' | 'F' => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, []);

  const generateRecommendations = useCallback((metrics: PerformanceMetrics): string[] => {
    const recommendations: string[] = [];
    
    if (metrics.fcp > 2000) {
      recommendations.push('Optimize First Contentful Paint: Minimize critical resources, optimize images, and reduce server response time');
    }
    
    if (metrics.lcp > 2500) {
      recommendations.push('Improve Largest Contentful Paint: Optimize images, implement lazy loading, and reduce layout shifts');
    }
    
    if (metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay: Minimize JavaScript execution time and optimize event handlers');
    }
    
    if (metrics.cls > 0.1) {
      recommendations.push('Fix Cumulative Layout Shift: Set explicit dimensions for images and avoid inserting content above existing content');
    }
    
    if (metrics.ttfb > 600) {
      recommendations.push('Optimize Time to First Byte: Improve server response time and implement caching strategies');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Performance is excellent! Keep monitoring and maintain current optimizations');
    }
    
    return recommendations;
  }, []);

  const measurePerformance = useCallback(async () => {
    try {
      // Wait for performance metrics to be available
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              const lcp = entry.startTime;
              setMetrics(prev => prev ? { ...prev, lcp } : null);
            }
          });
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Measure FCP
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      const fcp = fcpEntry ? fcpEntry.startTime : 0;
      
      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : 0;
      
      // Measure FMP (approximation)
      const fmp = performance.now();
      
      // Measure FID (approximation)
      const fid = 0; // Would need user interaction to measure
      
      // Measure CLS (approximation)
      const cls = 0; // Would need layout shift observer to measure
      
      const newMetrics: PerformanceMetrics = { fcp, lcp: 0, fid, cls, ttfb, fmp };
      setMetrics(newMetrics);
      
      // Generate report
      const score = calculateScore(newMetrics);
      const grade = getGrade(score);
      const recommendations = generateRecommendations(newMetrics);
      
      setReport({
        score,
        grade,
        recommendations,
        metrics: newMetrics,
        timestamp: new Date()
      });
      
    } catch (error) {
      console.error('Error measuring performance:', error);
    }
  }, [calculateScore, getGrade, generateRecommendations]);

  useEffect(() => {
    measurePerformance();
    
    // Re-measure on route changes
    const handleRouteChange = () => {
      setTimeout(measurePerformance, 1000);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [measurePerformance]);

  const getMetricColor = (value: number, threshold: number, isLowerBetter: boolean = true) => {
    const isGood = isLowerBetter ? value <= threshold : value >= threshold;
    return isGood ? 'text-green-500' : 'text-red-500';
  };

  const getMetricIcon = (value: number, threshold: number, isLowerBetter: boolean = true) => {
    const isGood = isLowerBetter ? value <= threshold : value >= threshold;
    return isGood ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        title="Performance Monitor"
      >
        <BarChart3 className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 max-w-sm">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {isExpanded ? '−' : '+'}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </div>

        {report && (
          <div className="space-y-3">
            {/* Overall Score */}
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{report.score}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Performance Score</div>
              <div className={`text-lg font-semibold ${
                report.grade === 'A' ? 'text-green-600' :
                report.grade === 'B' ? 'text-blue-600' :
                report.grade === 'C' ? 'text-yellow-600' :
                report.grade === 'D' ? 'text-orange-600' : 'text-red-600'
              }`}>
                Grade: {report.grade}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>FCP</span>
                </span>
                <span className={getMetricColor(metrics?.fcp || 0, 2000)}>
                  {metrics?.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                </span>
                {metrics?.fcp && getMetricIcon(metrics.fcp, 2000)}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>LCP</span>
                </span>
                <span className={getMetricColor(metrics?.lcp || 0, 2500)}>
                  {metrics?.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                </span>
                {metrics?.lcp && getMetricIcon(metrics.lcp, 2500)}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>TTFB</span>
                </span>
                <span className={getMetricColor(metrics?.ttfb || 0, 600)}>
                  {metrics?.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
                </span>
                {metrics?.ttfb && getMetricIcon(metrics.ttfb, 600)}
              </div>
            </div>

            {/* Recommendations */}
            {isExpanded && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center space-x-2">
                  <Info className="w-4 h-4 text-blue-600" />
                  <span>Recommendations</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {report.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Last Updated */}
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center pt-2">
              Last updated: {report.timestamp.toLocaleTimeString()}
            </div>
          </div>
        )}

        {!report && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Measuring performance...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { PerformanceMonitor };