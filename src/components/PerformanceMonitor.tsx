<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
export const PerformanceMonitor: React.FC < PerformanceMonitorProps> = ({
export default PerformanceMonitor;
import { motion, AnimatePresence  } from 'framer-motion';
=======
>>>>>>> main

import React, { useState, useEffect } from 'react'

<<<<<<< HEAD
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

      // FCP scoring(0-25 points)
      if(metrics.fcp <= threshold.fcp) score -= 0;
      else if(metrics.fcp <= threshold.fcp * 1.5) score -= 10;
      else score -= 25;

      // LCP scoring(0-25 points)
      if(metrics.lcp <= threshold.lcp) score -= 0;
      else if(metrics.lcp <= threshold.lcp * 1.5) score -= 10;
      else score -= 25;

      // FID scoring(0-25 points)
      if(metrics.fid <= threshold.fid) score -= 0;
      else if(metrics.fid <= threshold.fid * 1.5) score -= 10;
      else score -= 25;

      // CLS scoring(0-25 points)
      if(metrics.cls <= threshold.cls) score -= 0;
      else if(metrics.cls <= threshold.cls * 1.5) score -= 10;
      else score -= 25;

      return Math.max(0, score)},
    [threshold]
  );

      if(value <= thresholdValue) return 'good';
      if(value <= thresholdValue * 1.5) return 'needs-improvement';
      return 'poor'},
    [threshold]
  );

        case 'needs-improvement':'
          return 'text-yellow-400';
        case 'poor':'
          return 'text-red-400';
        default:'
          return 'text-gray-400'}
    },
    []
  );

        case 'needs-improvement':"
          return <AlertTriangle className="w-4 h-4"  />;
        case 'poor':"
          return <AlertTriangle className="w-4 h-4"  />;
        default:"
          return <Activity className="w-4 h-4"  />}
    },
    []
  );
  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);

    if('PerformanceObserver' in window) {

      // Observe FCP

        if(fcpEntry) {

          setMetrics(prev =>
            prev ? { ...prev, fcp: fcpEntry.startTime } : null
          )}
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
        if(lcpEntry) {

          setMetrics(prev =>
            prev ? { ...prev, lcp: lcpEntry.startTime } : null
          )}
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      // Observe FID

        if(fidEntry) {

          setMetrics(prev =>
            prev
              ? { ...prev, fid: fidEntry.processingStart - fidEntry.startTime }
              : null
          )}
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    if(tips.length === 0) {
      tips.push('Great performance! Keep monitoring for any regressions')}

      const clsObserver = new PerformanceObserver(list => {

        let clsValue = 0;        for (const entry of list.getEntries()) {

          if(!entry.hadRecentInput) {

            clsValue += (entry as any).value}
        }
      });

        setMetrics(prev => (prev ? { ...prev, cls: clsValue } : null))});
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Get TTFB from navigation timing
      
      if(navigationEntry) {

        setMetrics(prev =>
          prev ? { ...prev, ttfb } : { fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb }
        )}

      return () => {
        fcpObserver.disconnect () ;
        lcpObserver.disconnect () ;
        fidObserver.disconnect () ;
        clsObserver.disconnect () }}  }, []);
=======
export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0
  })
>>>>>>> main

  useEffect(() => {
<<<<<<< HEAD
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
    if(metrics) {

      setPerformanceScore(score)}
  }, [metrics, calculatePerformanceScore]) ;
  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
    // Show monitor after 3 seconds
    
    return () => clearTimeout(timer) }, []) ;
  if(!isVisible || !showDetails) return null;
=======
    const interval = setInterval(() => {
      setMetrics({
        loadTime: Math.random() * 1000,
        memoryUsage: Math.random() * 100,
        cpuUsage: Math.random() * 100
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])
>>>>>>> main

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
