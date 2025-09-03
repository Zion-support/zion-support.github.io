import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  performanceScore: number;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    performanceScore: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    // Simple performance scoring algorithm
    const loadTimeScore = Math.max(0, 100 - (metrics.loadTime / 100));
    const memoryScore = Math.max(0, 100 - metrics.memoryUsage);
    const cpuScore = Math.max(0, 100 - metrics.cpuUsage);
    
    return Math.round((loadTimeScore + memoryScore + cpuScore) / 3);
  }, []);

  const collectMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
    
    // Memory usage (if available)
    const memory = (performance as any).memory;
    const memoryUsage = memory ? (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100 : 0;
    
    // CPU usage estimation (simplified)
    const cpuUsage = Math.random() * 20; // Placeholder for actual CPU monitoring
    
    const newMetrics: PerformanceMetrics = {
      loadTime,
      memoryUsage,
      cpuUsage,
      performanceScore: 0
    };

    const score = calculatePerformanceScore(newMetrics);
    newMetrics.performanceScore = score;

    setMetrics(newMetrics);
  }, [calculatePerformanceScore]);

  useEffect(() => {
    collectMetrics();
    
    const interval = setInterval(collectMetrics, 5000);
    
    return () => clearInterval(interval);
  }, [collectMetrics]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || !showDetails) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border z-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-lg shadow">
            <h3 className="font-semibold text-sm">Load Time</h3>
            <p className="text-xl font-bold text-blue-600">{metrics.loadTime.toFixed(2)}ms</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow">
            <h3 className="font-semibold text-sm">Memory Usage</h3>
            <p className="text-xl font-bold text-orange-600">{metrics.memoryUsage.toFixed(1)}%</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow">
            <h3 className="font-semibold text-sm">Performance Score</h3>
            <p className="text-xl font-bold text-green-600">{metrics.performanceScore}/100</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;