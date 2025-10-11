'use client';
import {useEffect}}from 'react';

export const usePerformanceMonitor = const usePerformanceMonitor = () => {;
  useEffect(() => {;
>>>>>>> origin/main
    if (typeof window === 'undefined') return;

        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) 
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);}}
    }

    // Run monitoring after page load;
    if (document.readyState === 'complete') {
      monitorWebVitals();
    } else {
      window.addEventListener('load', monitorWebVitals);
    }

    return () => {
      window.removeEventListener('load', monitorWebVitals);
    }
  }, []);
}
>>>>>>> origin/main
