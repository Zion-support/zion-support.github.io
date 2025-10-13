import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, Clock, Wifi, Battery, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: number;
  connectionType?: string;
  batteryLevel?: number;
}

const RealTimePerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const getPerformanceMetrics = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
    
    // Get memory usage if available
    const memory = (performance as any).memory;
    
    // Get connection info
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    
    // Get battery info
    const getBatteryInfo = async () => {
      if ('getBattery' in navigator) {
        try {
          const battery = await (navigator as any).getBattery();
          return battery.level * 100;
        } catch (error) {
          return null;
        }
      }
      return null;
    };

    const newMetrics: PerformanceMetrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint: fcp,
      largestContentfulPaint: lcp,
      firstInputDelay: 0, // Would need to measure this with event listeners
      cumulativeLayoutShift: 0, // Would need to measure this with observers
      memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : undefined,
      connectionType: connection?.effectiveType || 'unknown',
      batteryLevel: null
    };

    // Get battery info asynchronously
    getBatteryInfo().then(level => {
      if (level !== null) {
        setMetrics(prev => prev ? { ...prev, batteryLevel: level } : null);
      }
    });

    return newMetrics;
  }, []);

  const checkPerformanceAlerts = useCallback((metrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];

    if (metrics.loadTime > 3000) {
      newAlerts.push('Slow page load time detected');
    }
    if (metrics.firstContentfulPaint > 1500) {
      newAlerts.push('Slow first contentful paint');
    }
    if (metrics.largestContentfulPaint > 2500) {
      newAlerts.push('Slow largest contentful paint');
    }
    if (metrics.memoryUsage && metrics.memoryUsage > 100) {
      newAlerts.push('High memory usage detected');
    }
    if (metrics.connectionType === 'slow-2g' || metrics.connectionType === '2g') {
      newAlerts.push('Slow network connection detected');
    }
    if (metrics.batteryLevel && metrics.batteryLevel < 20) {
      newAlerts.push('Low battery level detected');
    }

    setAlerts(newAlerts);
  }, []);

  useEffect(() => {
    const updateMetrics = () => {
      const newMetrics = getPerformanceMetrics();
      if (newMetrics) {
        setMetrics(newMetrics);
        checkPerformanceAlerts(newMetrics);
      }
    };

    // Initial measurement
    updateMetrics();

    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000);

    // Listen for performance events
    const observer = new PerformanceObserver((list) => {
      updateMetrics();
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    } catch (error) {
      console.log('Performance Observer not supported');
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [getPerformanceMetrics, checkPerformanceAlerts]);

  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstContentfulPaint > 1500) score -= 20;
    if (metrics.largestContentfulPaint > 2500) score -= 20;
    if (metrics.memoryUsage && metrics.memoryUsage > 100) score -= 20;
    if (metrics.connectionType === 'slow-2g' || metrics.connectionType === '2g') score -= 20;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!metrics) return null;

  const score = getPerformanceScore(metrics);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-slate-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 text-white hover:bg-slate-700/90 transition-all duration-300 shadow-lg"
        aria-label="Toggle Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 w-80 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>
            <div className={`text-lg font-bold ${getScoreColor(score)}`}>
              {score}/100
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-slate-700/50 rounded-lg p-3">
              <div className="flex items-center mb-1">
                <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-xs text-gray-300">Load Time</span>
              </div>
              <div className="text-white font-semibold text-sm">
                {metrics.loadTime.toFixed(0)}ms
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-3">
              <div className="flex items-center mb-1">
                <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-xs text-gray-300">FCP</span>
              </div>
              <div className="text-white font-semibold text-sm">
                {metrics.firstContentfulPaint.toFixed(0)}ms
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-3">
              <div className="flex items-center mb-1">
                <Activity className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-xs text-gray-300">LCP</span>
              </div>
              <div className="text-white font-semibold text-sm">
                {metrics.largestContentfulPaint.toFixed(0)}ms
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-3">
              <div className="flex items-center mb-1">
                <Wifi className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-xs text-gray-300">Network</span>
              </div>
              <div className="text-white font-semibold text-sm">
                {metrics.connectionType}
              </div>
            </div>
          </div>

          {/* Memory Usage */}
          {metrics.memoryUsage && (
            <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-300">Memory Usage</span>
                <span className="text-white font-semibold text-sm">
                  {metrics.memoryUsage}MB
                </span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div 
                  className="bg-cyan-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (metrics.memoryUsage / 100) * 100)}%` }}
                />
              </div>
            </div>
          )}

          {/* Battery Level */}
          {metrics.batteryLevel !== null && (
            <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-300">Battery</span>
                <span className="text-white font-semibold text-sm">
                  {metrics.batteryLevel.toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    metrics.batteryLevel < 20 ? 'bg-red-400' : 
                    metrics.batteryLevel < 50 ? 'bg-yellow-400' : 'bg-green-400'
                  }`}
                  style={{ width: `${metrics.batteryLevel}%` }}
                />
              </div>
            </div>
          )}

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center text-yellow-400 text-xs font-semibold">
                <AlertTriangle className="w-4 h-4 mr-1" />
                Alerts
              </div>
              {alerts.map((alert, index) => (
                <div key={index} className="text-xs text-yellow-300 bg-yellow-900/20 rounded px-2 py-1">
                  {alert}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RealTimePerformanceMonitor;
