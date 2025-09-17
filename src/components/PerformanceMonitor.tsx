import React, { useEffect } from 'react';
import { PerformanceMonitor, measureWebVitals } from '../utils/performance';
interface PerformanceMonitorProps {
  enabled?: boolean;
}

const PerformanceMonitorComponent: React.FC<PerformanceMonitorProps> = ({ 
  enabled = process.env.NODE_ENV === 'development' 
}) => {
  useEffect(() => {
    if (!enabled) return;
    const monitor = PerformanceMonitor.getInstance();
    // Measure Web Vitals
    measureWebVitals();
    // Log performance report on page unload
    const handleBeforeUnload = () => {
      const report = monitor.getReport();
      console.log('Performance Report:', report);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enabled]);
  // This component doesn't render anything
  return null;
};


export default PerformanceMonitorComponent;
