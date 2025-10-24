'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const UsePerformanceMetrics.tsPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>UsePerformanceMetrics.ts - Zion Tech Group</title>
        <meta name="description" content="Professional usePerformanceMetrics.ts services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">UsePerformanceMetrics.ts</h1>
          <p className="text-lg text-gray-300">
            This page is currently under development. Please check back soon for more information.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

<<<<<<< HEAD
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    setIsSupported(true);

    // First Contentful Paint
    new PerformanceObserver(list => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver(list => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver(list => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if ((entry as any).processingStart && entry.startTime) {
          setMetrics(prev => ({ 
            ...prev, 
            fid: (entry as any).processingStart - entry.startTime 
          }));
        }
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver(list => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    }).observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    new PerformanceObserver(list => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if ((entry as any).responseStart && (entry as any).requestStart) {
          setMetrics(prev => ({ 
            ...prev, 
            ttfb: (entry as any).responseStart - (entry as any).requestStart 
          }));
        }
      });
    }).observe({ entryTypes: ['navigation'] });
  }, []);

  return { metrics, isSupported };
}
=======
export default UsePerformanceMetrics.tsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
