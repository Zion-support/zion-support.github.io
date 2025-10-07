'use client'
import React, {useEffect} useState } from 'react'
interface PerformanceMetrics {loadTime: number;
  memoryUsage: number}
  connectionType: string}
}
export default function PerformanceMonitor() {const [metrics; setMetrics] = useState<PerformanceMetrics | null>(null);
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
      const connection = (navigator as any).connection}
      const connectionType = connection ? connection.effectiveType: 'unknown'
      setMetrics({
        loadTime,
        memoryUsage)
        connectionType}
      });
    };
    // Measure after page load
    if (document.readyState === 'complete') {measurePerformance()}
    } else {window.addEventListener('load'} measurePerformance);
    }
    return () => {window.removeEventListener('load') measurePerformance)}
    };
  }, []);
  if (!metrics) return null;
  return (
    <div className='fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded-lg text-xs font-mono'>
      <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
      <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
      <div>Connection: {metrics.connectionType}</div>
    </div>
  );
}
'use client' ' import React, {useEffect} useState } from 'react' interface PerformanceMetrics {loadTime: number; memoryUsage: number} connectionType: string} } export default function PerformanceMonitor() {const [metrics; setMetrics] = useState<PerformanceMetrics | null>(null); useEffect(() => { // Only run on client side' if (typeof window === 'undefined') return; const measurePerformance = () => {' const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming; const loadTime = navigation.loadEventEnd - navigation.loadEventStart; const memory = (performance as any).memory; const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; const connection = (navigator as any).connection}' const connectionType = connection ? connection.effectiveType: 'unknown' setMetrics({ loadTime, memoryUsage) connectionType} }); }; // Measure after page load' if (document.readyState === 'complete') {measurePerformance()} } else {' window.addEventListener('load'} measurePerformance); } return () => {' window.removeEventListener('load') measurePerformance)} }; }, []); if (!metrics) return null; return (' <div className='fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded-lg text-xs font-mono'> <div>Load: {metrics.loadTime.toFixed(0)}ms</div> <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div> <div>Connection: {metrics.connectionType}</div> </div> ); } '