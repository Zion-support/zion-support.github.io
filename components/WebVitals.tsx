import { useEffect } from 'react';

interface WebVitalsProps {
  onPerfEntry?: (metric: any) => void;
}

const WebVitals: React.FC<WebVitalsProps> = ({ onPerfEntry }) => {
  useEffect(() => {
    if (onPerfEntry && typeof window !== 'undefined') {
      // Basic performance metrics without web-vitals dependency
      const measurePerformance = () => {
        if ('PerformanceObserver' in window) {
          // Measure First Contentful Paint
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                onPerfEntry({
                  name: 'FCP',
                  value: entry.startTime,
                  id: 'fcp',
                });
              }
            });
          });
          
          try {
            observer.observe({ entryTypes: ['paint'] });
          } catch (error) {
            console.log('Performance observer not supported');
          }
        }

        // Measure page load time
        window.addEventListener('load', () => {
          const loadTime = performance.now();
          onPerfEntry({
            name: 'Load Time',
            value: loadTime,
            id: 'load-time',
          });
        });
      };

      measurePerformance();
    }
  }, [onPerfEntry]);

  return null; // This component doesn't render anything
};

export default WebVitals;