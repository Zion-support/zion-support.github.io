'use client';
import React, { useEffect, useState } from 'react';
import { Zap, Clock, Database, Wifi } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  connectionType?: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = lcpEntries[lcpEntries.length - 1];
      
      // Get connection info
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      
      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        firstInputDelay: 0, // Would need to measure this with PerformanceObserver
        cumulativeLayoutShift: 0, // Would need to measure this with PerformanceObserver
        connectionType: connection ? connection.effectiveType : 'unknown'
      };

      setMetrics(performanceMetrics);
      
      // Show performance indicator in development
      if (process.env.NODE_ENV === 'development') {
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), 5000);
      }
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!isVisible || !metrics) return null;

  const getPerformanceGrade = (loadTime: number) => {
    if (loadTime < 1000) return { grade: 'A', color: 'text-green-400' };
    if (loadTime < 2000) return { grade: 'B', color: 'text-yellow-400' };
    if (loadTime < 3000) return { grade: 'C', color: 'text-orange-400' };
    return { grade: 'D', color: 'text-red-400' };
  };

  const grade = getPerformanceGrade(metrics.loadTime);

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-700 z-50 max-w-xs">
      <div className="flex items-center space-x-2 mb-3">
        <Zap className="w-4 h-4 text-cyan-400" />
        <span className="text-sm font-medium text-white">Performance</span>
        <span className={`text-xs font-bold ${grade.color}`}>
          {grade.grade}
        </span>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3 text-gray-400" />
            <span className="text-gray-300">Load Time</span>
          </div>
          <span className="text-white font-mono">
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Database className="w-3 h-3 text-gray-400" />
            <span className="text-gray-300">FCP</span>
          </div>
          <span className="text-white font-mono">
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        {metrics.connectionType && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Wifi className="w-3 h-3 text-gray-400" />
              <span className="text-gray-300">Connection</span>
            </div>
            <span className="text-white font-mono capitalize">
              {metrics.connectionType}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;