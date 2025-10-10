'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  loadTime: number;
  domSize: number;
  resourceCount: number;
}

interface PerformanceData {
  timestamp: number;
  metrics: PerformanceMetrics;
  url: string;
  userAgent: string;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    loadTime: 0,
    domSize: 0,
    resourceCount: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    const resourceEntries = performance.getEntriesByType('resource');

    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    const ttfb = navigation.responseStart - navigation.requestStart;
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;

    setMetrics(prev => ({
      ...prev,
      fcp,
      lcp,
      ttfb,
      loadTime,
      domSize: document.documentElement.outerHTML.length,
      resourceCount: resourceEntries.length
    }));

    // Store performance data
    const data: PerformanceData = {
      timestamp: Date.now(),
      metrics: {
        fcp,
        lcp,
        fid: 0, // Would need specific measurement
        cls: 0, // Would need specific measurement
        ttfb,
        loadTime,
        domSize: document.documentElement.outerHTML.length,
        resourceCount: resourceEntries.length
      },
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    setPerformanceData(prev => [...prev.slice(-9), data]);
  }, []);

  const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    try {
      import('web-vitals')
        .then(webVitals => {
          const { onCLS, onFCP, onLCP, onTTFB } = webVitals;

          if (onCLS) {
            onCLS((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, cls: metric.value }))
            );
          }

          if (onFCP) {
            onFCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, fcp: metric.value }))
            );
          }

          if (onLCP) {
            onLCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, lcp: metric.value }))
            );
          }

          if (onTTFB) {
            onTTFB((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, ttfb: metric.value }))
            );
          }
        })
        .catch(() => {
          // Fallback if web-vitals is not available
          measurePerformance();
        });
    } catch (error) {
      measurePerformance();
    }
  }, [measurePerformance]);

  useEffect(() => {
    if (isMonitoring) {
      measureCoreWebVitals();
      
      const interval = setInterval(measurePerformance, 5000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring, measureCoreWebVitals, measurePerformance]);

  const getPerformanceScore = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return { score: 'Good', color: 'text-green-400' };
    if (value <= thresholds.poor) return { score: 'Needs Improvement', color: 'text-yellow-400' };
    return { score: 'Poor', color: 'text-red-400' };
  };

  const fcpScore = getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 });
  const lcpScore = getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 });
  const clsScore = getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 });

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsMonitoring(!isMonitoring)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
            isMonitoring
              ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
              : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
          }`}
        >
          {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
        </button>
      </div>

      {isMonitoring && (
        <div className="space-y-6">
          {/* Core Web Vitals */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Core Web Vitals
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">First Contentful Paint</span>
                  <span className={`text-sm font-medium ${fcpScore.color}`}>
                    {fcpScore.score}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {metrics.fcp.toFixed(0)}ms
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Largest Contentful Paint</span>
                  <span className={`text-sm font-medium ${lcpScore.color}`}>
                    {lcpScore.score}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {metrics.lcp.toFixed(0)}ms
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Cumulative Layout Shift</span>
                  <span className={`text-sm font-medium ${clsScore.color}`}>
                    {clsScore.score}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {metrics.cls.toFixed(3)}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Additional Metrics
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <Clock className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">TTFB</div>
                <div className="text-lg font-bold text-white">
                  {metrics.ttfb.toFixed(0)}ms
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 text-center">
                <Activity className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Load Time</div>
                <div className="text-lg font-bold text-white">
                  {metrics.loadTime.toFixed(0)}ms
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 text-center">
                <AlertTriangle className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">DOM Size</div>
                <div className="text-lg font-bold text-white">
                  {(metrics.domSize / 1024).toFixed(1)}KB
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 text-center">
                <Zap className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Resources</div>
                <div className="text-lg font-bold text-white">
                  {metrics.resourceCount}
                </div>
              </div>
            </div>
          </div>

          {/* Performance History */}
          {performanceData.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Performance History
              </h4>
              <div className="bg-white/5 rounded-lg p-4 max-h-40 overflow-y-auto">
                <div className="space-y-2">
                  {performanceData.slice(-5).map((data, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">
                        {new Date(data.timestamp).toLocaleTimeString()}
                      </span>
                      <div className="flex gap-4">
                        <span className="text-blue-400">
                          FCP: {data.metrics.fcp.toFixed(0)}ms
                        </span>
                        <span className="text-green-400">
                          LCP: {data.metrics.lcp.toFixed(0)}ms
                        </span>
                        <span className="text-yellow-400">
                          Resources: {data.metrics.resourceCount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {!isMonitoring && (
        <div className="text-center py-8">
          <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-300">
            Click "Start Monitoring" to begin tracking performance metrics
          </p>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;