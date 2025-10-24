import { useState, useEffect } from 'react';

interface PerformanceData {
  domContentLoaded: number;
  loadComplete: number;
  firstPaint: number | undefined;
  firstContentfulPaint: number | undefined;
  memoryUsage?: {
    used: number;
    total: number;
    limi,
  t: number;
  };
}

export const usePerformanceMonitor = $2;
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);

  useEffect(() => {
    // Monitor page load performance
    const handleLoad = $2;
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paint = performance.getEntriesByType('paint');
          
          // Log performance metrics
          console.log('Page Load Performance:', {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
            firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
          });

          setPerformanceData({
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
            firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
          });
        }, 0);
      }
    };

    // Monitor resource loading
    const handleResourceLoad = $2;
        const resources = performance.getEntriesByType('resource');
        const slowResources = resources.filter(resource => resource.duration > 1000);
        
        if (slowResources.length > 0) {
          console.warn('Slow loading resources:', slowResources);
        }
      }
    };

    // Monitor memory usage
    const checkMemoryUsage = $2;
        const memory = (performance as any).memory;
        const memoryData = {
          used: Math.round(memory.usedJSHeapSize / 1048576),
          total: Math.round(memory.totalJSHeapSize / 1048576),
          limit: Math.round(memory.jsHeapSizeLimit / 1048576),
        };
        
        setPerformanceData(prev => prev ? {
          ...prev,
          memoryUsage: memoryData,
        } : null);
        
        console.log('Memory Usage:', memoryData);
      }
    };

    // Set up event listeners
    window.addEventListener('load', handleLoad);
    window.addEventListener('load', handleResourceLoad);
    
    // Check memory usage periodically
    const memoryInterval = setInterval(checkMemoryUsage, 5000);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('load', handleResourceLoad);
      clearInterval(memoryInterval);
    };
  }, []);

  return { performanceData };
};