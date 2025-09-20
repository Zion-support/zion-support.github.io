import { useEffect, useState } from "react";

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  fps: number;
  lighthouseScore: number;
};

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    fps: 0,
    lighthouseScore: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure page load time
    const loadTime = performance.now();
    
    // Measure memory usage
    const memoryInfo = (performance as any).memory;
    const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : 0;

    // Measure render time
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const renderTime = navigationEntry?.loadEventEnd || 0;

    // Measure network latency (simplified)
    const networkLatency = performance.getEntriesByType('resource')
      .reduce((acc, entry) => acc + entry.duration, 0) / 10;

    // Calculate FPS (simplified)
    let fps = 60;
    let lastTime = performance.now();
    let frameCount = 0;
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      requestAnimationFrame(measureFPS);
    };
    measureFPS();

    // Calculate Lighthouse score (simplified)
    const lighthouseScore = Math.max(0, Math.min(100, 
      100 - (loadTime / 10) - (memoryUsage * 2) - (networkLatency / 10)
    ));

    setMetrics({
      loadTime: Math.round(loadTime),
      renderTime: Math.round(renderTime),
      memoryUsage: Math.round(memoryUsage * 100) / 100,
      networkLatency: Math.round(networkLatency),
      fps,
      lighthouseScore: Math.round(lighthouseScore)
    });
  }, []);

  useEffect(() => {
    // Show performance monitor on Ctrl+Shift+P
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 text-xs font-mono z-50 min-w-[280px]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-blue-400 font-bold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-blue-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-400">Load Time:</span>
          <span className={metrics.loadTime < 1000 ? 'text-green-400' : 'text-red-400'}>
            {metrics.loadTime}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Memory:</span>
          <span className={metrics.memoryUsage < 50 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">FPS:</span>
          <span className={metrics.fps >= 60 ? 'text-green-400' : metrics.fps >= 30 ? 'text-yellow-400' : 'text-red-400'}>
            {metrics.fps}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Network:</span>
          <span className={metrics.networkLatency < 100 ? 'text-green-400' : 'text-red-400'}>
            {metrics.networkLatency}ms
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Score:</span>
          <div className="flex items-center">
            <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${
                  metrics.lighthouseScore >= 90 ? 'bg-green-400' :
                  metrics.lighthouseScore >= 70 ? 'bg-yellow-400' :
                  'bg-red-400'
                }`}
                style={{ width: `${metrics.lighthouseScore}%` }}
              />
            </div>
            <span className={metrics.lighthouseScore >= 90 ? 'text-green-400' : 
                            metrics.lighthouseScore >= 70 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.lighthouseScore}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700 text-center">
        <span className="text-gray-500 text-xs">Press Ctrl+Shift+P to toggle</span>
      </div>
    </div>
  );
}