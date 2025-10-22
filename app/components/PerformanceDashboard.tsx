'use client';
import React from 'react';

const PerformanceDashboard: React.FC = () => {
<<<<<<< HEAD
=======
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0;

      // Measure render time
      
      

      // Measure memory usage
      let _memoryUsage = 0;
      if ('memory' in performance) {
        
        memoryUsage = memory?.usedJSHeapSize || 0;
      }

      // Measure FPS (simplified)
      let _fps = 0;
      if ('requestAnimationFrame' in window) {
        let _lastTime = performance.now();
        let _frameCount = 0;
        const measureFPS = (currentTime: number) => {
          frameCount++;
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
          }
          requestAnimationFrame(measureFPS);
        };
        requestAnimationFrame(measureFPS);
      }

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        fps,
      });
    };

    updateMetrics();

    // Update metrics every 5 seconds
    

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Show Performance
      </button>
    );
  }

>>>>>>> bda5d40addebc09fc3c74601f15d6b21b20062c5
  return (
    <div>
      <h1>PerformanceDashboard</h1>
    </div>
  );
};

export default PerformanceDashboard;