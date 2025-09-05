<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
export const PerformanceMonitor: React.FC < PerformanceMonitorProps> = ({;
export default PerformanceMonitor;
import { motion, AnimatePresence  } from 'framer-motion';
  useEffect(() => {
  // TODO: Add dependencies if needed;

  return () => {;
    // Cleanup function;
};
}, []); []);
    if(metrics) {;

      setPerformanceScore(score)}
  }, [metrics, calculatePerformanceScore]) ;
  useEffect(() => {
  // TODO: Add dependencies if needed;

  return () => {;
    // Cleanup function;
};
}, []); []);
    // Show monitor after 3 seconds;
    return () => clearTimeout(timer) }, []) ;
  if(!isVisible || !showDetails) return null;
  return (;
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
      <div className="bg-white p-4 rounded-lg shadow">;
        <h3 className="font-semibold">Load Time</h3>;
        <p className="text-2xl font-bold text-blue-600">{metrics.loadTime.toFixed(2)}ms</p>;
      </div>;
      <div className="bg-white p-4 rounded-lg shadow">;
        <h3 className="font-semibold">Memory Usage</h3>;
        <p className="text-2xl font-bold text-orange-600">{metrics.memoryUsage.toFixed(1)}%</p>;
      </div>;
      <div className="bg-white p-4 rounded-lg shadow">;
        <h3 className="font-semibold">CPU Usage</h3>;
        <p className="text-2xl font-bold text-purple-600">{metrics.cpuUsage.toFixed(1)}%</p>;
      </div>;
    </div>;
  );
}
=======
import React,{ useEffect,useState } from 'react'; interface PerformanceMetrics { loadTime: number; memoryUsage: number; renderTime: number} const PerformanceMonitor: React.FC = () => { const [metrics,setMetrics] = useState<PerformanceMetrics>({ loadTime: 0,memoryUsage: 0,renderTime: 0 }); useEffect(() => { const startTime = performance.now(); if (window.performance.timing) { const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart; setMetrics(prev => ({ ...prev,loadTime }))} if ('memory' in performance) { const memory = (performance as any).memory; setMetrics(prev => ({ ...prev,memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) }))} const endTime = performance.now(); setMetrics(prev => ({ ...prev,renderTime: Math.round(endTime - startTime) }))},[]); return ( <div className="bg-gray-100 p-4 rounded-lg"> <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3> <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> <div className="bg-white p-3 rounded"> <div className="text-sm text-gray-600">Load Time</div> <div className="text-2xl font-bold text-blue-600">{metrics.loadTime}ms</div> </div> <div className="bg-white p-3 rounded"> <div className="text-sm text-gray-600">Memory Usage</div> <div className="text-2xl font-bold text-green-600">{metrics.memoryUsage}MB</div> </div> <div className="bg-white p-3 rounded"> <div className="text-sm text-gray-600">Render Time</div> <div className="text-2xl font-bold text-purple-600">{metrics.renderTime}ms</div> </div> </div> </div> )}; export default PerformanceMonitor;
>>>>>>> origin/automation-improvements
