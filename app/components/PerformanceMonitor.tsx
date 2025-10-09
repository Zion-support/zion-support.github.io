import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: number;
  fps: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  threshold?: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    firstInputDelay: number;
    cumulativeLayoutShift: number;
  };
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  onMetricsUpdate,
  threshold = {
    loadTime: 3000,
    firstContentfulPaint: 1500,
    largestContentfulPaint: 2500,
    firstInputDelay: 100,
    cumulativeLayoutShift: 0.1,
  },
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    memoryUsage: 0,
    fps: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const collectPerformanceMetrics = useCallback(() => {
    if (!enabled || typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const largestContentfulPaint = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
    
    // Get FID (First Input Delay) - this would need to be measured during actual user interaction
    const firstInputDelay = 0; // Placeholder - would need to be measured during user interaction
    
    // Get CLS (Cumulative Layout Shift) - this would need to be measured over time
    const cumulativeLayoutShift = 0; // Placeholder - would need to be measured over time
    
    // Get memory usage if available
    const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
    
    // Calculate FPS (simplified)
    let fps = 0;
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measureFPS = () => {
      const currentTime = performance.now();
      frameCount++;
      
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (enabled) {
        requestAnimationFrame(measureFPS);
      }
    };
    
    measureFPS();

    const newMetrics: PerformanceMetrics = {
      loadTime,
      firstContentfulPaint,
      largestContentfulPaint,
      firstInputDelay,
      cumulativeLayoutShift,
      memoryUsage,
      fps,
    };

    setMetrics(newMetrics);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics);
    }

    // Check for performance issues
    const newAlerts: string[] = [];
    if (loadTime > threshold.loadTime) {
      newAlerts.push(`Load time ${loadTime.toFixed(0)}ms exceeds threshold ${threshold.loadTime}ms`);
    }
    if (firstContentfulPaint > threshold.firstContentfulPaint) {
      newAlerts.push(`FCP ${firstContentfulPaint.toFixed(0)}ms exceeds threshold ${threshold.firstContentfulPaint}ms`);
    }
    if (largestContentfulPaint > threshold.largestContentfulPaint) {
      newAlerts.push(`LCP ${largestContentfulPaint.toFixed(0)}ms exceeds threshold ${threshold.largestContentfulPaint}ms`);
    }
    if (firstInputDelay > threshold.firstInputDelay) {
      newAlerts.push(`FID ${firstInputDelay.toFixed(0)}ms exceeds threshold ${threshold.firstInputDelay}ms`);
    }
    if (cumulativeLayoutShift > threshold.cumulativeLayoutShift) {
      newAlerts.push(`CLS ${cumulativeLayoutShift.toFixed(3)} exceeds threshold ${threshold.cumulativeLayoutShift}`);
    }

    setAlerts(newAlerts);
  }, [enabled, onMetricsUpdate, threshold]);

  useEffect(() => {
    if (!enabled) return;

    // Initial metrics collection
    const timer = setTimeout(collectPerformanceMetrics, 1000);

    // Set up periodic updates
    const interval = setInterval(collectPerformanceMetrics, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [enabled, collectPerformanceMetrics]);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.loadTime > threshold.loadTime) score -= 20;
    if (metrics.firstContentfulPaint > threshold.firstContentfulPaint) score -= 20;
    if (metrics.largestContentfulPaint > threshold.largestContentfulPaint) score -= 20;
    if (metrics.firstInputDelay > threshold.firstInputDelay) score -= 20;
    if (metrics.cumulativeLayoutShift > threshold.cumulativeLayoutShift) score -= 20;
    
    return Math.max(0, score);
  };

  if (!enabled) return null;

  const performanceScore = getPerformanceScore();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
        title="Performance Monitor"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Performance Score</span>
              <span className={`text-lg font-bold ${
                performanceScore >= 80 ? 'text-green-600' :
                performanceScore >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {performanceScore}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  performanceScore >= 80 ? 'bg-green-500' :
                  performanceScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${performanceScore}%` }}
              />
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Load Time:</span>
              <span className={metrics.loadTime > threshold.loadTime ? 'text-red-600' : 'text-green-600'}>
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">FCP:</span>
              <span className={metrics.firstContentfulPaint > threshold.firstContentfulPaint ? 'text-red-600' : 'text-green-600'}>
                {metrics.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">LCP:</span>
              <span className={metrics.largestContentfulPaint > threshold.largestContentfulPaint ? 'text-red-600' : 'text-green-600'}>
                {metrics.largestContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">FPS:</span>
              <span className={metrics.fps < 30 ? 'text-red-600' : 'text-green-600'}>
                {metrics.fps}
              </span>
            </div>
            {metrics.memoryUsage && (
              <div className="flex justify-between">
                <span className="text-gray-600">Memory:</span>
                <span className="text-blue-600">
                  {formatBytes(metrics.memoryUsage)}
                </span>
              </div>
            )}
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <h4 className="text-sm font-medium text-red-800 mb-2">Performance Issues:</h4>
              <ul className="text-xs text-red-700 space-y-1">
                {alerts.map((alert, index) => (
                  <li key={index}>• {alert}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;