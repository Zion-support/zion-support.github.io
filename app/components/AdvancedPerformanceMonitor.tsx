import React, { useEffect, useState } from 'react';

interface AdvancedMetrics {
  memoryUsage: number | null;
  renderTime: number | null;
  bundleSize: number | null;
  networkLatency: number | null;
}

interface AdvancedPerformanceMonitorProps {
  showInProduction?: boolean;
  enableReporting?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({
  showInProduction = false,
  enableReporting = false
}) => {
  const [metrics, setMetrics] = useState<AdvancedMetrics>({
    memoryUsage: null,
    renderTime: null,
    bundleSize: null,
    networkLatency: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || showInProduction) {
      setIsVisible(true);
      
      // Monitor memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory) {
          setMetrics(prev => ({
            ...prev,
            memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
          }));
        }
      }
      
      // Monitor render time
      const startTime = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - startTime;
        setMetrics(prev => ({ ...prev, renderTime }));
      });
      
      // Monitor network latency
      if (navigator.connection) {
        setMetrics(prev => ({
          ...prev,
          networkLatency: (navigator.connection as any).rtt || null
        }));
      }
      
      // Estimate bundle size (this is a rough estimate)
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      scripts.forEach(script => {
        const src = (script as HTMLScriptElement).src;
        if (src && !src.includes('chrome-extension')) {
          totalSize += 100; // Rough estimate
        }
      });
      setMetrics(prev => ({ ...prev, bundleSize: totalSize }));
    }
  }, [showInProduction]);

  if (!isVisible) {
    return null;
  }

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-purple-400 font-semibold">Advanced Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={getScoreColor(metrics.memoryUsage, { good: 50, poor: 100 })}>
            {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Render:</span>
          <span className={getScoreColor(metrics.renderTime, { good: 16, poor: 33 })}>
            {metrics.renderTime ? `${metrics.renderTime.toFixed(1)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Bundle:</span>
          <span className={getScoreColor(metrics.bundleSize, { good: 500, poor: 1000 })}>
            {metrics.bundleSize ? `${metrics.bundleSize}KB` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Network:</span>
          <span className={getScoreColor(metrics.networkLatency, { good: 100, poor: 300 })}>
            {metrics.networkLatency ? `${metrics.networkLatency}ms` : 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-white/20">
        <div className="text-xs text-gray-400">
          Advanced Metrics
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;