import React, { createContext, useContext, useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  interactiveTime: number;
  domContentLoaded: number;
  firstPaint: number;
}

interface PerformanceContextType {
  metrics: PerformanceMetrics | null;
  isMonitoring: boolean;
}

const PerformanceContext = createContext<PerformanceContextType>({
  metrics: null,
  isMonitoring: false,
});

export const usePerformance = () => useContext(PerformanceContext);

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.performance) {
      return;
    }

    setIsMonitoring(true);

    const measurePerformance = () => {
      const timing = window.performance.timing;
      const paintEntries = performance.getEntriesByType('paint');
      
      const newMetrics: PerformanceMetrics = {
        loadTime: timing.loadEventEnd - timing.navigationStart,
        interactiveTime: timing.domInteractive - timing.navigationStart,
        domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
        firstPaint: paintEntries[0]?.startTime || 0,
      };

      setMetrics(newMetrics);
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return (
    <PerformanceContext.Provider value={{ metrics, isMonitoring }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export default PerformanceMonitor;