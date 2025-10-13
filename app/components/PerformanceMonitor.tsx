import React, { useEffect, ReactNode } from 'react';

interface PerformanceMonitorProps {
  children: ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Monitor performance metrics
    const monitorPerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Monitor memory usage
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          console.log('Memory Usage:', {
            used: memory.usedJSHeapSize,
            total: memory.totalJSHeapSize,
            limit: memory.jsHeapSizeLimit
          });
        }

        // Monitor frame rate
        let frameCount = 0;
        let lastTime = performance.now();
        
        const countFrames = () => {
          frameCount++;
          const currentTime = performance.now();
          
          if (currentTime - lastTime >= 1000) {
            console.log('FPS:', frameCount);
            frameCount = 0;
            lastTime = currentTime;
          }
          
          requestAnimationFrame(countFrames);
        };
        
        requestAnimationFrame(countFrames);
      }
    };

    monitorPerformance();
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;