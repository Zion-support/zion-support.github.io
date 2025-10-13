import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime?: number;
  memoryUsage?: number;
  fps?: number;
  cls?: number;
  fid?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
}

interface AdvancedPerformanceMonitorProps {
  showInProduction?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ 
  showInProduction = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    // Measure load time
    const measureLoadTime = () => {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        setMetrics(prev => ({ ...prev, loadTime }));
      });
    };

    // Measure memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }));
      }
    };

    // Measure FPS
    const measureFPS = () => {
      let lastTime = performance.now();
      let frameCount = 0;

      const countFrames = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
          setMetrics(prev => ({ ...prev, fps: Math.round((frameCount * 1000) / (currentTime - lastTime)) }));
          frameCount = 0;
          lastTime = currentTime;
        }
        
        requestAnimationFrame(countFrames);
      };
      
      requestAnimationFrame(countFrames);
    };

    // Initialize measurements
    measureLoadTime();
    measureMemory();
    measureFPS();

    // Set up performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log('Custom Performance Measure:', entry.name, entry.duration);
          }
        }
      });
      observer.observe({ entryTypes: ['measure'] });
    }
  }, []);

  return (
    <div className="performance-monitor">
      {showInProduction && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs">
          <div>Load Time: {metrics.loadTime?.toFixed(2)}ms</div>
          <div>Memory: {metrics.memoryUsage?.toFixed(2)}MB</div>
          <div>FPS: {metrics.fps}</div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;