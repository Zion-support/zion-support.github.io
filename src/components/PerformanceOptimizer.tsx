import React, { memo, useMemo, useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
}

export const PerformanceOptimizer = memo<PerformanceOptimizerProps>(({ showMetrics = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const performanceData = useMemo(() => ({
    renderTime: performance.now(),
    memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
    bundleSize: document.querySelectorAll('script').length
  }), []);

  const handlePerformanceCheck = useCallback(() => {
    setMetrics(performanceData);
  }, [performanceData]);

  useEffect(() => {
    if (showMetrics) {
      handlePerformanceCheck();
    }
  }, [showMetrics, handlePerformanceCheck]);

  if (!showMetrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 right-4 bg-zion-slate-light/90 backdrop-blur-sm border border-zion-cyan/30 rounded-lg p-4 text-white text-sm shadow-2xl z-50"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="font-semibold text-zion-cyan">Performance Monitor</span>
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>Render Time:</span>
          <span className="text-zion-cyan">{metrics.renderTime.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className="text-zion-cyan">{(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB</span>
        </div>
        <div className="flex justify-between">
          <span>Scripts:</span>
          <span className="text-zion-cyan">{metrics.bundleSize}</span>
        </div>
      </div>
      
      <button
        onClick={handlePerformanceCheck}
        className="mt-2 w-full px-2 py-1 bg-zion-cyan/20 hover:bg-zion-cyan/30 rounded text-xs transition-colors"
      >
        Refresh
      </button>
    </motion.div>
  );
});

PerformanceOptimizer.displayName = 'PerformanceOptimizer';
