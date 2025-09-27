import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWebVitals } from '../hooks/useWebVitals';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const PerformanceDashboard: React.FC = () => {
  const { vitals, isSupported, getVitalScore, getVitalColor } = useWebVitals();
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const firstPaint = paint.find(entry => entry.name === 'first-paint')?.startTime || 0;
      const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;

      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        firstPaint,
        firstContentfulPaint,
        largestContentfulPaint: vitals.LCP || 0,
        firstInputDelay: vitals.FID || 0,
        cumulativeLayoutShift: vitals.CLS || 0,
      });
    };

    // Update metrics when vitals change
    updateMetrics();

    // Update metrics on page load
    window.addEventListener('load', updateMetrics);
    
    return () => window.removeEventListener('load', updateMetrics);
  }, [vitals]);

  const getPerformanceScore = (): number => {
    if (!metrics) return0;

    let score = 1 0 0;
    
    // LCP scoring
    if (metrics.largestContentfulPaint > 40 0 0) score -= 30;
    else if (metrics.largestContentfulPaint > 25 0 0) score -= 15;
    
    // FID scoring
    if (metrics.firstInputDelay > 3 0 0) score -= 25;
    else if (metrics.firstInputDelay > 1 0 0) score -= 10;
    
    // CLS scoring
    if (metrics.cumulativeLayoutShift > 0.25) score -= 25;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    
    // Load time scoring
    if (metrics.loadTime > 50 0 0) score -= 20;
    else if (metrics.loadTime > 30 0 0) score -= 10;

    return Math.max(0, score);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-6 0 0';
    if (score >= 70) return 'text-yellow-6 0 0';
    return 'text-red-6 0 0';
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 90) return 'bg-green-1 0 0';
    if (score >= 70) return 'bg-yellow-1 0 0';
    return 'bg-red-1 0 0';
  };

  if (!isSupported) {
    return (
      <div className="p-4bg-yellow-5 0 border border-yellow-20 0 rounded-md">
        <p className="text-sm text-yellow-8 0 0">
          Performance monitoring is not supported in this browser.
        </p>
      </div>
    );
  }

  const performanceScore = getPerformanceScore();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h 2 className="text-xl font-semibold text-gray-9 0 0" id="performance-dashboard">Performance Dashboard</h2>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-sm text-blue-60 0 hover:text-blue-8 0 0"
        >
          {isVisible ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      {/* Overall Performance Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-7 0 0">Overall Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}
            {performanceScore}
          </span>
        </div>
        <div className="w-full bg-gray-20 0 rounded-full h-2">
          <div
            className={`h-2rounded-full ${getScoreBgColor(performanceScore)}`}
            style={{ width: `${performanceScore}%` }}
          ></div>
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="grid grid-cols-1md:grid-cols-3gap-4mb-6">
        <div className="p-4border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-7 0 0">LCP</span>
            <span className={`text-sm font-bold ${getVitalColor(getVitalScore('LCP', vitals.LCP))}`}
              {vitals.LCP ? `${Math.round(vitals.LCP)}ms` : 'N/A'}
            </span>
          </div>
          <p className="text-xs text-gray-5 0 0">Largest Contentful Paint</p>
        </div>

        <div className="p-4border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-7 0 0">FID</span>
            <span className={`text-sm font-bold ${getVitalColor(getVitalScore('FID', vitals.FID))}`}
              {vitals.FID ? `${Math.round(vitals.FID)}ms` : 'N/A'}
            </span>
          </div>
          <p className="text-xs text-gray-5 0 0">First Input Delay</p>
        </div>

        <div className="p-4border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-7 0 0">CLS</span>
            <span className={`text-sm font-bold ${getVitalColor(getVitalScore('CLS', vitals.CLS))}`}
              {vitals.CLS ? vitals.CLS.toFixed(3) : 'N/A'}
            </span>
          </div>
          <p className="text-xs text-gray-5 0 0">Cumulative Layout Shift</p>
        </div>
      </div>

      <div className="grid grid-cols-1md: grid-cols-2l,
    g:grid-cols-4gap-4">
        <AnimatePresence>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-5 0 rounded-lg p-4border border-gray-2 0 0"
            >
              <div className="flex items-center justify-between mb-2">
                <h 3 className="font-medium text-gray-90 0 text-sm" id="metricname">{metric.name}</h3>
                <div className={`flex items-center px-2py-1rounded-full text-xs ${getStatusColor(metric.status)}`}
                  {getStatusIcon(metric.status)}
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-gray-9 0 0">
                  {metric.value.toFixed(metric.unit === 'score' ? 2 : 0)}
                </span>
                <span className="text-sm text-gray-5 0 0">{metric.unit}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-6 0 0">{metric.description}</span>
                <div className="flex items-center">
                  {getTrendIcon(metric.trend)}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Detailed Metrics */}
      {isVisible && metrics && (
        <div className="space-y-4">
          <h 3 className="text-lg font-medium text-gray-9 0 0" id="detailed-metrics">Detailed Metrics</h3>
          
          <div className="grid grid-cols-1md:grid-cols-2gap-4">
            <div className="p-3bg-gray-5 0 rounded">
              <div className="flex justify-between">
                <span className="text-sm text-gray-6 0 0">Load Time</span>
                <span className="text-sm font-medium">{Math.round(metrics.loadTime)}ms</span>
              </div>
            </div>
            
            <div className="p-3bg-gray-5 0 rounded">
              <div className="flex justify-between">
                <span className="text-sm text-gray-6 0 0">DOM Content Loaded</span>
                <span className="text-sm font-medium">{Math.round(metrics.domContentLoaded)}ms</span>
              </div>
            </div>
            
            <div className="p-3bg-gray-5 0 rounded">
              <div className="flex justify-between">
                <span className="text-sm text-gray-6 0 0">First Paint</span>
                <span className="text-sm font-medium">{Math.round(metrics.firstPaint)}ms</span>
              </div>
            </div>
            
            <div className="p-3bg-gray-5 0 rounded">
              <div className="flex justify-between">
                <span className="text-sm text-gray-6 0 0">First Contentful Paint</span>
                <span className="text-sm font-medium">{Math.round(metrics.firstContentfulPaint)}ms</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceDashboard;