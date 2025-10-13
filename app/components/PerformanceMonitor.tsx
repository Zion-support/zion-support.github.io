import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, Database } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkRequests: number;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkRequests: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    // Measure load time
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure memory usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Count network requests
    const countNetworkRequests = () => {
      const entries = performance.getEntriesByType('resource');
      setMetrics(prev => ({ ...prev, networkRequests: entries.length }));
    };

    // Measure render time
    const measureRenderTime = () => {
      const renderTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, renderTime }));
    };

    // Run measurements
    if (document.readyState === 'complete') {
      measureLoadTime();
      measureMemoryUsage();
      countNetworkRequests();
      measureRenderTime();
    } else {
      window.addEventListener('load', () => {
        measureLoadTime();
        measureMemoryUsage();
        countNetworkRequests();
        measureRenderTime();
      });
    }

    // Monitor performance continuously
    const interval = setInterval(() => {
      measureMemoryUsage();
      countNetworkRequests();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Log performance issues
  useEffect(() => {
    if (metrics.loadTime > 3000) {
      console.warn('Slow page load detected:', metrics.loadTime + 'ms');
    }
    if (metrics.memoryUsage > 100) {
      console.warn('High memory usage detected:', metrics.memoryUsage + 'MB');
    }
  }, [metrics]);

  if (!showDetails) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-white text-xs z-50">
      <div className="flex items-center mb-2">
        <Activity className="w-4 h-4 text-cyan-400 mr-2" />
        <span className="font-semibold">Performance Monitor</span>
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={`font-mono ${metrics.loadTime > 2000 ? 'text-red-400' : 'text-green-400'}`}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Memory:</span>
          <span className={`font-mono ${metrics.memoryUsage > 50 ? 'text-yellow-400' : 'text-green-400'}`}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Requests:</span>
          <span className="font-mono text-cyan-400">
            {metrics.networkRequests}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Render:</span>
          <span className={`font-mono ${metrics.renderTime > 1000 ? 'text-red-400' : 'text-green-400'}`}>
            {metrics.renderTime.toFixed(0)}ms
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;