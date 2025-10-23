import React, { useState, useEffect } from "react";

interface PerformanceMetrics {
  _renderTime: number;
  _memoryUsage: number;
  _fps: number;
}

const PerformanceDashboard: React.FC = () => {
  
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    _renderTime: 0,
    _memoryUsage: 0,
    _fps: 0,
  });

  useEffect(() => {
    let _frameCount = 0;
    let lastTime = performance.now();

    const __updateMetrics = () => {
      const currentTime = performance.now();
      const __renderTime = currentTime - lastTime;

      const __memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

      _frameCount++;
      const __fps = Math.round(1000 / __renderTime);

      setMetrics({
        _renderTime: Math.round(__renderTime * 100) / 100,
        _memoryUsage: Math.round((__memoryUsage / 1024 / 1024) * 100) / 100,
        _fps: __fps,
      });

      lastTime = currentTime;
    };

    const interval: NodeJS.Timeout = setInterval(__updateMetrics, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Performance Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            Render Time
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {metrics._renderTime}ms
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-green-900 mb-2">
            Memory Usage
          </h2>
          <p className="text-3xl font-bold text-green-600">
            {metrics._memoryUsage}MB
          </p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-purple-900 mb-2">FPS</h2>
          <p className="text-3xl font-bold text-purple-600">{metrics._fps}</p>
        </div>
      </div>
    </div>
  );
};


