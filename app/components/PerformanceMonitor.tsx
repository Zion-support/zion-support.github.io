import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showInProduction = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if explicitly enabled in production
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      
      // Measure render time
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        
        // Get memory usage if available
        const memoryUsage = (performance as any).memory ? 
          (performance as any).memory.usedJSHeapSize / 1024 / 1024 : 0;

        setMetrics({
          loadTime,
          renderTime,
          memoryUsage,
          fps: 60 // Placeholder - would need more complex measurement
        });
      });
    };

    // Initial measurement
    measurePerformance();

    // Measure on route changes
    const handleRouteChange = () => {
      setTimeout(measurePerformance, 100);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    // Toggle visibility with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showInProduction]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-xs font-mono z-50 border border-gray-700">
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
      
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <Clock className="w-3 h-3 text-yellow-400" />
          <span>Load: {metrics.loadTime.toFixed(2)}ms</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Zap className="w-3 h-3 text-green-400" />
          <span>Render: {metrics.renderTime.toFixed(2)}ms</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-3 h-3 text-blue-400" />
          <span>Memory: {metrics.memoryUsage.toFixed(1)}MB</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Activity className="w-3 h-3 text-purple-400" />
          <span>FPS: {metrics.fps}</span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600 text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;