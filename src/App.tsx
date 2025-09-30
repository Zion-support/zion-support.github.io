import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './index.css';

export default function App(): React.JSX.Element {
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);

  // Initialize performance monitoring
  useEffect(() => {
    performanceMonitor.initialize();
    return () => performanceMonitor.cleanup();
  }, []);

  // Initialize security enhancements
  useEffect(() => {
    enhancedSecurityManager.initialize();
  }, []);

  // Initialize accessibility enhancements
  useEffect(() => {
    accessibilityEnhancer.initialize();
    return () => accessibilityEnhancer.cleanup();
  }, []);

  // Performance optimization handlers
  const handlePerformanceOptimization = useCallback(() => {
    setShowPerformanceOptimizer(prev => !prev);
  }, []);

  const handlePerformanceMonitoring = useCallback(() => {
    setShowPerformanceMonitor(prev => !prev);
  }, []);

  // Memoized performance data
  const performanceData = useMemo(() => ({
    metrics: performanceMonitor.getMetrics(),
    optimizations: performanceMonitor.getOptimizations(),
  }), []);

  // Handle keyboard shortcuts
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Ctrl/Cmd + Shift + P for performance optimizer
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'P') {
      event.preventDefault();
      handlePerformanceOptimization();
    }
    // Ctrl/Cmd + Shift + M for performance monitor
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
      event.preventDefault();
      handlePerformanceMonitoring();
    }
  }, [handlePerformanceOptimization, handlePerformanceMonitoring]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance metrics:', performanceData);
    }
  }, [performanceData]);

  return (
    <div className="min-h-screen bg-white">
      <AppRouter />
      
      {/* Development-only performance tools */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
          <button
            onClick={handlePerformanceOptimization}
            className="px-3 py-2 bg-blue-600 text-white text-xs rounded shadow-lg hover:bg-blue-700 transition-colors"
            title="Toggle Performance Optimizer (Ctrl+Shift+P)"
          >
            Perf Opt
          </button>
          <button
            onClick={handlePerformanceMonitoring}
            className="px-3 py-2 bg-green-600 text-white text-xs rounded shadow-lg hover:bg-green-700 transition-colors"
            title="Toggle Performance Monitor (Ctrl+Shift+M)"
          >
            Perf Mon
          </button>
        </div>
      )}
    </div>
  );
}