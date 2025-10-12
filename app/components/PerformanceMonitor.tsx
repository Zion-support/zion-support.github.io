import React, { useEffect, createContext, useContext } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceData {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceContext = createContext<PerformanceData>({
  cls: null,
  fid: null,
  fcp: null,
  lcp: null,
  ttfb: null,
});

export const usePerformanceMonitor = () => useContext(PerformanceContext);

const PerformanceMonitor: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [performanceData, setPerformanceData] = React.useState<PerformanceData>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        onCLS((metric) => {
          setPerformanceData(prev => ({ ...prev, cls: metric.value }));
        });
        
        onINP((metric) => {
          setPerformanceData(prev => ({ ...prev, fid: metric.value }));
        });
        
        onFCP((metric) => {
          setPerformanceData(prev => ({ ...prev, fcp: metric.value }));
        });
        
        onLCP((metric) => {
          setPerformanceData(prev => ({ ...prev, lcp: metric.value }));
        });
        
        onTTFB((metric) => {
          setPerformanceData(prev => ({ ...prev, ttfb: metric.value }));
        });
      }
    };

    monitorCoreWebVitals();
  }, []);

  return (
    <PerformanceContext.Provider value={performanceData}>
      {children}
    </PerformanceContext.Provider>
  );
};

export default PerformanceMonitor;
