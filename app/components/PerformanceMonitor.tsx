import React, { useEffect } from 'react';
import { performanceMonitor } from '../utils/performanceMonitor';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Start performance monitoring
    performanceMonitor.observeWebVitals();
    
    // Mark app start
    performanceMonitor.mark('app-start');
    
    // Measure app load time
    const measureAppLoad = () => {
      performanceMonitor.mark('app-loaded');
      performanceMonitor.measure('app-load-time', 'app-start', 'app-loaded');
    };

    // Measure when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', measureAppLoad);
    } else {
      measureAppLoad();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', measureAppLoad);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;