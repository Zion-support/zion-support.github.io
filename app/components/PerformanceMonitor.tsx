import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  isSlow: boolean;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    isSlow: false
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    
    // Monitor page load time
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      setMetrics(prev => ({
        ...prev,
        loadTime,
        memoryUsage: memoryUsage / 1024 / 1024, // Convert to MB
        isSlow: loadTime > 3000 // Consider slow if > 3 seconds
      }));
    };

    // Monitor render performance
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure') {
          setMetrics(prev => ({
            ...prev,
            renderTime: entry.duration,
            isSlow: entry.duration > 100 // Consider slow if > 100ms
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['measure'] });

    // Check if page is loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Show monitor in development
    if (process.env.NODE_ENV === 'development' && showDetails) {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      observer.disconnect();
    };
  }, [showDetails]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-xs max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold">Performance</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={`flex items-center space-x-1 ${
            metrics.isSlow ? 'text-red-400' : 'text-green-400'
          }`}>
            <Clock className="w-3 h-3" />
            <span>{metrics.loadTime.toFixed(0)}ms</span>
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Memory:</span>
          <span className="text-cyan-400">
            {metrics.memoryUsage.toFixed(1)}MB
          </span>
        </div>
        
        {metrics.renderTime > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Render:</span>
            <span className={`flex items-center space-x-1 ${
              metrics.renderTime > 100 ? 'text-red-400' : 'text-green-400'
            }`}>
              <Zap className="w-3 h-3" />
              <span>{metrics.renderTime.toFixed(0)}ms</span>
            </span>
          </div>
        )}
        
        {metrics.isSlow && (
          <div className="flex items-center space-x-1 text-red-400">
            <AlertTriangle className="w-3 h-3" />
            <span>Performance Warning</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
