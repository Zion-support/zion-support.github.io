
import React, { useEffect, useState } from 'react';
>>>>>>> origin/main
// Type definitions for browser APIs
declare global {
  interface PerformanceObserver {
    observe(options: { entryTypes: string[] }): void;
    disconnect(): void;
  ;
// Type definitions for browser APIs
declare global {
  interface PerformanceNavigationTiming extends PerformanceEntry {

    requestStart: number;
    responseStart: number;
} catch (error) {
  console.error('Error:', error)
  res.status(500).json({ error: 'Internal server error' })}
}
import React, { useEffect, useState } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
  interface PerformanceEntry {

    name: string;
    entryType: string;
    startTime: number;
    duration: number;
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7f4e
  
} catch (error) {
  console.error('Error:', error)
  res.status(500).json({ error: 'Internal server error' })}
}
  
  interface PerformanceEntry {

    name: string;
    entryType: string;
    startTime: number;
    duration: number;
} catch (error) {
  console.error('Error:', error)
  res.status(500).json({ error: 'Internal server error' })}
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7f4e
>>>>>>> origin/main
interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
;
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7f4e
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
          } else if (entry.entryType === 'first-input') {

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input'] })

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7f4e
            if (inputEntry.processingStart && inputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }))
            }

          } else if (entry.entryType === 'layout-shift') {
=======
            if (inputEntry.processingStart && inputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }))
            }

            if (inputEntry.processingStart && inputEntry.startTime) {
              setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }))
            }
}
} else if (entry.entryType === 'layout-shift') {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
>>>>>>> 3d33b64448bdb81cd2984819501ea4fc0c6fb47c
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }))
          }
        }
      })

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
      // Monitor TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming}
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }))
      }
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7f4e
      return () => observer.disconnect()
    }
    return undefined}
  }, [])

  // Only show in development
  if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'development') {
    return null}
  }
  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
      <div className="metrics-grid">
        {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(2)}ms</div>}
        {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
        {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>;
        {metrics.cls && <div>CLS: {metrics.cls.toFixed(4)}</div>;
        {metrics.ttfb && <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>;
      </div>
    </div>});
=======
export default PerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-b847
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6405
=======

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? `${metrics.cls.toFixed(4)}` : 'Loading...'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>
      </div>;
    </div>;
;
>>>>>>> 3d33b64448bdb81cd2984819501ea4fc0c6fb47c;
>>>>>>> origin/main;
