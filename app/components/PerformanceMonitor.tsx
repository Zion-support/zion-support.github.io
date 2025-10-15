import { Database, Activity, Clock, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';


interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
}

interface PerformanceMonitorProps {
  children: React.ReactNode;
  showDetails?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  children, 
  showDetails = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0,
  });

  useEffect(() => {
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const loadTime = performance.now() - startTime;
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      const renderTime = performance.now() - startTime;
      
      setMetrics({
        loadTime,
        memoryUsage: memoryUsage / 1024 / 1024, // Convert to MB
        renderTime,
        networkLatency: 0, // This would be measured from actual network requests
      });
    };

    // Measure after component mount
    const timeoutId = setTimeout(measurePerformance, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  if (!showDetails) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {children}
      
      {/* Performance Overlay - Only in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-xs text-white z-50">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold">Performance Monitor</span>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Clock className="w-3 h-3 text-green-400" />
              <span>Load: {metrics.loadTime.toFixed(2)}ms</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Database className="w-3 h-3 text-blue-400" />
              <span>Memory: {metrics.memoryUsage.toFixed(2)}MB</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Zap className="w-3 h-3 text-yellow-400" />
              <span>Render: {metrics.renderTime.toFixed(2)}ms</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
