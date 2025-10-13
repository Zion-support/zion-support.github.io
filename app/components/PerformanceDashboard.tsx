import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, Clock, Cpu, Wifi, Battery, AlertTriangle, CheckCircle, TrendingUp, TrendingDown } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  networkSpeed: number | null;
  batteryLevel: number | null;
  timestamp: number;
}

interface PerformanceDashboardProps {
  isVisible?: boolean;
  onClose?: () => void;
  enableRealTime?: boolean;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  isVisible = false,
  onClose,
  enableRealTime = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    networkSpeed: null,
    batteryLevel: null,
    timestamp: Date.now()
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number | null>(null);

  const getMetricStatus = useCallback((value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'unknown';
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  }, []);

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 0;
    let totalMetrics = 0;

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      totalMetrics++;
      if (metrics.lcp <= 2500) score += 100;
      else if (metrics.lcp <= 4000) score += 80;
      else if (metrics.lcp <= 6000) score += 60;
      else score += 40;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      totalMetrics++;
      if (metrics.fid <= 100) score += 100;
      else if (metrics.fid <= 300) score += 80;
      else score += 40;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      totalMetrics++;
      if (metrics.cls <= 0.1) score += 100;
      else if (metrics.cls <= 0.25) score += 80;
      else score += 40;
    }

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      totalMetrics++;
      if (metrics.fcp <= 1800) score += 100;
      else if (metrics.fcp <= 3000) score += 80;
      else score += 40;
    }

    // TTFB scoring (0-100)
    if (metrics.ttfb !== null) {
      totalMetrics++;
      if (metrics.ttfb <= 800) score += 100;
      else if (metrics.ttfb <= 1800) score += 80;
      else score += 40;
    }

    return totalMetrics > 0 ? Math.round(score / totalMetrics) : null;
  }, []);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics, timestamp: Date.now() };
      const score = calculatePerformanceScore(updated);
      setPerformanceScore(score);
      return updated;
    });
  }, [calculatePerformanceScore]);

  const measureWebVitals = useCallback(async () => {
    try {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
      
      getCLS((metric) => updateMetrics({ cls: metric.value }));
      getFID((metric) => updateMetrics({ fid: metric.value }));
      getFCP((metric) => updateMetrics({ fcp: metric.value }));
      getLCP((metric) => updateMetrics({ lcp: metric.value }));
      getTTFB((metric) => updateMetrics({ ttfb: metric.value }));
    } catch (error) {
      console.warn('Failed to load web-vitals:', error);
    }
  }, [updateMetrics]);

  const measureMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      updateMetrics({ memoryUsage: usedMB });
    }
  }, [updateMetrics]);

  const measureNetworkSpeed = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection.effectiveType) {
        const speedMap: { [key: string]: number } = {
          'slow-2g': 50,
          '2g': 100,
          '3g': 500,
          '4g': 1000
        };
        updateMetrics({ networkSpeed: speedMap[connection.effectiveType] || 1000 });
      }
    }
  }, [updateMetrics]);

  const measureBatteryLevel = useCallback(async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        updateMetrics({ batteryLevel: Math.round(battery.level * 100) });
      } catch (error) {
        console.warn('Battery API not supported:', error);
      }
    }
  }, [updateMetrics]);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    measureWebVitals();
    measureMemoryUsage();
    measureNetworkSpeed();
    measureBatteryLevel();
  }, [measureWebVitals, measureMemoryUsage, measureNetworkSpeed, measureBatteryLevel]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  useEffect(() => {
    if (enableRealTime && isVisible) {
      startMonitoring();
      
      const interval = setInterval(() => {
        measureMemoryUsage();
        measureNetworkSpeed();
        measureBatteryLevel();
      }, 5000);

      return () => {
        clearInterval(interval);
        stopMonitoring();
      };
    }
  }, [enableRealTime, isVisible, startMonitoring, stopMonitoring, measureMemoryUsage, measureNetworkSpeed, measureBatteryLevel]);

  if (!isVisible) return null;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'needs-improvement':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'poor':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default:
        return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-green-400';
      case 'needs-improvement':
        return 'text-yellow-400';
      case 'poor':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const lcpStatus = getMetricStatus(metrics.lcp, { good: 2500, needsImprovement: 4000 });
  const fidStatus = getMetricStatus(metrics.fid, { good: 100, needsImprovement: 300 });
  const clsStatus = getMetricStatus(metrics.cls, { good: 0.1, needsImprovement: 0.25 });
  const fcpStatus = getMetricStatus(metrics.fcp, { good: 1800, needsImprovement: 3000 });
  const ttfbStatus = getMetricStatus(metrics.ttfb, { good: 800, needsImprovement: 1800 });

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-lg p-4 text-white z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Performance Monitor
        </h3>
        <div className="flex items-center space-x-2">
          {performanceScore !== null && (
            <div className={`text-sm font-bold ${
              performanceScore >= 90 ? 'text-green-400' :
              performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {performanceScore}/100
            </div>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {/* Core Web Vitals */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-cyan-400">Core Web Vitals</h4>
          
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center">
              {getStatusIcon(lcpStatus)}
              <span className="ml-2">LCP</span>
            </span>
            <span className={getStatusColor(lcpStatus)}>
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center">
              {getStatusIcon(fidStatus)}
              <span className="ml-2">FID</span>
            </span>
            <span className={getStatusColor(fidStatus)}>
              {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center">
              {getStatusIcon(clsStatus)}
              <span className="ml-2">CLS</span>
            </span>
            <span className={getStatusColor(clsStatus)}>
              {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center">
              {getStatusIcon(fcpStatus)}
              <span className="ml-2">FCP</span>
            </span>
            <span className={getStatusColor(fcpStatus)}>
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center">
              {getStatusIcon(ttfbStatus)}
              <span className="ml-2">TTFB</span>
            </span>
            <span className={getStatusColor(ttfbStatus)}>
              {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
            </span>
          </div>
        </div>

        {/* System Metrics */}
        <div className="space-y-2 pt-2 border-t border-gray-600">
          <h4 className="text-sm font-medium text-cyan-400">System Metrics</h4>
          
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center">
              <Cpu className="w-4 h-4 mr-2" />
              Memory
            </span>
            <span className="text-gray-300">
              {metrics.memoryUsage ? `${metrics.memoryUsage}MB` : 'N/A'}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center">
              <Wifi className="w-4 h-4 mr-2" />
              Network
            </span>
            <span className="text-gray-300">
              {metrics.networkSpeed ? `${metrics.networkSpeed}Kbps` : 'N/A'}
            </span>
          </div>

          {metrics.batteryLevel !== null && (
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center">
                <Battery className="w-4 h-4 mr-2" />
                Battery
              </span>
              <span className="text-gray-300">
                {metrics.batteryLevel}%
              </span>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-600">
          <button
            onClick={isMonitoring ? stopMonitoring : startMonitoring}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              isMonitoring 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-cyan-600 hover:bg-cyan-700 text-white'
            }`}
          >
            {isMonitoring ? 'Stop' : 'Start'}
          </button>
          
          <div className="text-xs text-gray-400">
            Last updated: {new Date(metrics.timestamp).toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;