import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, Database, Wifi, Cpu } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  cpuUsage: number;
  storageUsage: number;
  fps: number;
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showUI?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  onMetricsUpdate, 
  showUI = true 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    cpuUsage: 0,
    storageUsage: 0,
    fps: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  // Performance measurement utilities
  const measureLoadTime = useCallback(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
  }, []);

  const measureMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return memory.usedJSHeapSize / (1024 * 1024); // Convert to MB
    }
    return 0;
  }, []);

  const measureNetworkLatency = useCallback(async () => {
    const start = performance.now();
    try {
      await fetch('/api/ping', { method: 'HEAD' });
      return performance.now() - start;
    } catch {
      return 0;
    }
  }, []);

  const measureWebVitals = useCallback(() => {
    // Measure LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure FID
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure CLS
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const measureFPS = useCallback(() => {
    let lastTime = performance.now();
    let frameCount = 0;

    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setMetrics(prev => ({ ...prev, fps: frameCount }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFrames);
    };
    
    requestAnimationFrame(countFrames);
  }, []);

  const updateMetrics = useCallback(async () => {
    const newMetrics: PerformanceMetrics = {
      loadTime: measureLoadTime(),
      renderTime: performance.now(),
      memoryUsage: measureMemoryUsage(),
      networkLatency: await measureNetworkLatency(),
      cpuUsage: 0, // Would need a web worker to measure accurately
      storageUsage: 0, // Would need storage API
      fps: metrics.fps,
      lcp: metrics.lcp,
      fid: metrics.fid,
      cls: metrics.cls
    };

    setMetrics(newMetrics);
    onMetricsUpdate?.(newMetrics);

    // Check for performance issues
    const newAlerts: string[] = [];
    if (newMetrics.loadTime > 3000) newAlerts.push('Slow page load time');
    if (newMetrics.memoryUsage > 100) newAlerts.push('High memory usage');
    if (newMetrics.fps < 30) newAlerts.push('Low FPS detected');
    if (newMetrics.lcp > 2500) newAlerts.push('Poor LCP score');
    if (newMetrics.fid > 100) newAlerts.push('Poor FID score');
    if (newMetrics.cls > 0.1) newAlerts.push('Poor CLS score');

    setAlerts(newAlerts);
  }, [measureLoadTime, measureMemoryUsage, measureNetworkLatency, metrics.fps, metrics.lcp, metrics.fid, metrics.cls, onMetricsUpdate]);

  useEffect(() => {
    // Initial measurement
    updateMetrics();

    // Set up periodic updates
    const interval = setInterval(updateMetrics, 5000);

    // Set up Web Vitals measurement
    const cleanup = measureWebVitals();

    // Start FPS measurement
    measureFPS();

    return () => {
      clearInterval(interval);
      cleanup();
    };
  }, [updateMetrics, measureWebVitals, measureFPS]);

  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.memoryUsage > 100) score -= 15;
    if (metrics.fps < 30) score -= 25;
    if (metrics.lcp > 2500) score -= 20;
    if (metrics.fid > 100) score -= 10;
    if (metrics.cls > 0.1) score -= 10;

    return Math.max(0, score);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!showUI) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        title="Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="absolute bottom-16 right-0 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Performance Score</span>
              <span className={`text-lg font-bold ${getScoreColor(getPerformanceScore())}`}>
                {getPerformanceScore()}/100
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getPerformanceScore()}%` }}
              />
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Load Time</span>
              </div>
              <span className="text-sm text-white">{metrics.loadTime.toFixed(0)}ms</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">Memory</span>
              </div>
              <span className="text-sm text-white">{metrics.memoryUsage.toFixed(1)}MB</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">Network</span>
              </div>
              <span className="text-sm text-white">{metrics.networkLatency.toFixed(0)}ms</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">FPS</span>
              </div>
              <span className="text-sm text-white">{metrics.fps}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">LCP</span>
              </div>
              <span className="text-sm text-white">{metrics.lcp.toFixed(0)}ms</span>
            </div>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <h4 className="text-sm font-semibold text-red-400 mb-2">Alerts</h4>
              <div className="space-y-1">
                {alerts.map((alert, index) => (
                  <div key={index} className="text-xs text-red-300 bg-red-900/20 p-2 rounded">
                    {alert}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <button
              onClick={updateMetrics}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Refresh Metrics
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;