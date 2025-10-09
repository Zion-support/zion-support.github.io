<<<<<<< HEAD:app/components/PerformanceMonitor.tsx
import React, { useEffect, useState } from 'react';

=======
'use client';
import React, { useEffect, useState, memo } from 'react';
>>>>>>> cursor/website-audit-and-update-with-deployment-572b:src/components/PerformanceMonitor.tsx
interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}
<<<<<<< HEAD:app/components/PerformanceMonitor.tsx

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

=======
const PerformanceMonitor: React.FC = memo(() => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });
>>>>>>> cursor/website-audit-and-update-with-deployment-572b:src/components/PerformanceMonitor.tsx
  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
      
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      
      return () => observer.disconnect();
    }
  }, []);

  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
      <div>FID: {metrics.fid?.toFixed(2)}ms</div>
      <div>CLS: {metrics.cls?.toFixed(3)}</div>
    </div>
  );
<<<<<<< HEAD:app/components/PerformanceMonitor.tsx
};

=======
});

PerformanceMonitor.displayName = 'PerformanceMonitor';
>>>>>>> cursor/website-audit-and-update-with-deployment-572b:src/components/PerformanceMonitor.tsx
export default PerformanceMonitor;
