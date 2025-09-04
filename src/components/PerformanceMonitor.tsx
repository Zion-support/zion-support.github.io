import React, { useEffect, useState, useCallback } from 'react';
export const PerformanceMonitor: Reac t.FC < PerformanceMonitorProps> = ({
export default PerformanceMonitor;
import { motion, AnimatePresence  } from 'framer-motion';
  useEffect(() => {
    if (typeof window === 'undefined') return;

  return () => {
    // Cleanup function
  };
}, []);, []);
    if(metrics) {

      // Log metrics after 3 seconds
      setTimeout(logMetrics, 3000);
    }

  return () => {
    // Cleanup function
  };
}, []);, []);
    // Show monitor after 3 seconds
    
    return () => clearTimeout(timer) }, []) ;
  if(!isVisible || !showDetails) return null;
return (
    <div className="grid grid-cols-1 md: gri d-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold">Load Time</h3>
        <p className="text-2xl font-bold text-blue-600">{metrics.loadTime.toFixed(2)}ms</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold">Memory Usage</h3>
        <p className="text-2xl font-bold text-orange-600">{metrics.memoryUsage.toFixed(1)}%</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold">CPU Usage</h3>
        <p className="text-2xl font-bold text-purple-600">{metrics.cpuUsage.toFixed(1)}%</p>
      </div>
    </div>
  )
}
