import React, { useState, useEffect, useCallback } from "react";

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
  errorCount: number;
  timestamp: number;
}

interface RealTimePerformanceMonitorProps {
  isVisible: boolean;
  onClose: () => void;
}

const RealTimePerformanceMonitor: React.FC<RealTimePerformanceMonitorProps> = ({
  isVisible,
  onClose,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0,
    errorCount: 0,
    timestamp: Date.now(),
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);
  const [maxHistoryLength] = useState(100);

   React, { useState, useEffect, useCallback } from "react";

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
  errorCount: number;
  timestamp: number;
}

interface RealTimePerformanceMonitorProps {
  isVisible: boolean;
  onClose: () => void;
}

const RealTimePerformanceMonitor: React.FC<RealTimePerformanceMonitorProps> = ({
  isVisible,
  onClose,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0,
    errorCount: 0,
    timestamp: Date.now(),
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);
  const [maxHistoryLength] = useState(100);

  const calculateFPS = useCallback(() => {
    let lastTime = performance.now();
    let frameCount = 0;
    
    const countFrames = (currentTime: number) => {
      frameCount++;
      if (currentTime >= lastTime + 1000) {
        setMetrics(prev => ({
          ...prev,
          fps: Math.round((frameCount * 1000) / (currentTime - lastTime)),
          timestamp: Date.now()
        }));
        frameCount = 0;
        lastTime = currentTime;
      }
      if (isMonitoring) {
        requestAnimationFrame(countFrames);
      }
    };
    
    if (isMonitoring) {
      requestAnimationFrame(countFrames);
    }
  }, [isMonitoring]);

  
  const updateMetrics = useCallback(() => {
    if (!isMonitoring) return;

    const memory = (performance as any).memory;
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const newMetrics: PerformanceMetrics = {
      fps: metrics.fps,
      memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0,
      renderTime: navigation ? Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart) : 0,
      networkLatency: navigation ? Math.round(navigation.responseEnd - navigation.requestStart) : 0,
      errorCount: performance.getEntriesByType('resource').filter(entry => 
        entry.name.includes('error') || entry.name.includes('404')
      ).length,
      timestamp: Date.now()
    };

    setMetrics(newMetrics);
    setHistory(prev => {
      const newHistory = [...prev, newMetrics];
      return newHistory.length > maxHistoryLength ? newHistory.slice(-maxHistoryLength) : newHistory;
    });
  }, [isMonitoring, metrics.fps, maxHistoryLength]);

  useEffect(() => {
    if (isMonitoring) {
      calculateFPS();
      const interval = setInterval(updateMetrics, 1000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring, calculateFPS, updateMetrics]);

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const getPerformanceStatus = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return { status: 'good', color: 'text-green-500' };
    if (value <= thresholds.warning) return { status: 'warning', color: 'text-yellow-500' };
    return { status: 'poor', color: 'text-red-500' };
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Real-Time Performance Monitor</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* FPS */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">FPS</h3>
              <span className={`text-xl font-bold ${getPerformanceStatus(metrics.fps, { good: 55, warning: 45 }).color}`}>
                {metrics.fps}
              </span>
            </div>
            <div className="text-sm text-gray-600">
              {metrics.fps >= 55 ? 'Excellent' : metrics.fps >= 45 ? 'Good' : 'Needs improvement'}
            </div>
          </div>

          {/* Memory Usage */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Memory</h3>
              <span className={`text-xl font-bold ${getPerformanceStatus(metrics.memoryUsage, { good: 50, warning: 100 }).color}`}>
                {metrics.memoryUsage}MB
              </span>
            </div>
            <div className="text-sm text-gray-600">
              {metrics.memoryUsage <= 50 ? 'Low usage' : metrics.memoryUsage <= 100 ? 'Moderate usage' : 'High usage'}
            </div>
          </div>

          {/* Render Time */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Render Time</h3>
              <span className={`text-xl font-bold ${getPerformanceStatus(metrics.renderTime, { good: 100, warning: 200 }).color}`}>
                {metrics.renderTime}ms
              </span>
            </div>
            <div className="text-sm text-gray-600">
              {metrics.renderTime <= 100 ? 'Fast' : metrics.renderTime <= 200 ? 'Acceptable' : 'Slow'}
            </div>
          </div>

          {/* Network Latency */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Network</h3>
              <span className={`text-xl font-bold ${getPerformanceStatus(metrics.networkLatency, { good: 100, warning: 300 }).color}`}>
                {metrics.networkLatency}ms
              </span>
            </div>
            <div className="text-sm text-gray-600">
              {metrics.networkLatency <= 100 ? 'Fast' : metrics.networkLatency <= 300 ? 'Moderate' : 'Slow'}
            </div>
          </div>

          {/* Error Count */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Errors</h3>
              <span className={`text-xl font-bold ${getPerformanceStatus(metrics.errorCount, { good: 0, warning: 1 }).color}`}>
                {metrics.errorCount}
              </span>
            </div>
            <div className="text-sm text-gray-600">
              {metrics.errorCount === 0 ? 'No errors' : `${metrics.errorCount} error(s) detected`}
            </div>
          </div>

          {/* Monitoring Status */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Status</h3>
              <span className={`text-xl font-bold ${isMonitoring ? 'text-green-500' : 'text-gray-500'}`}>
                {isMonitoring ? 'Monitoring' : 'Stopped'}
              </span>
            </div>
            <div className="text-sm text-gray-600">
              {isMonitoring ? 'Real-time monitoring active' : 'Monitoring paused'}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={toggleMonitoring}
            className={`px-4 py-2 rounded-lg font-medium ${
              isMonitoring 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
          </button>
          <button
            onClick={clearHistory}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600"
          >
            Clear History
          </button>
        </div>

        {/* Performance Chart */}
        {history.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Performance History</h3>
            <div className="h-48 bg-white rounded border p-4 overflow-hidden">
              <div className="flex items-end h-full space-x-1">
                {history.slice(-20).map((metric, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="bg-blue-500 w-full rounded-t"
                      style={{ 
                        height: `${Math.max(10, (metric.fps / 60) * 100)}%`,
                        minHeight: '10px'
                      }}
                      title={`FPS: ${metric.fps}`}
                    />
                    <div className="text-xs text-gray-500 mt-1">
                      {new Date(metric.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Performance Tips */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Performance Tips</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              • Maintain 60 FPS for smooth user experience
            </li>
            <li>
              • Keep memory usage under 50MB for optimal performance
            </li>
            <li>
              • Network latency under 100ms provides good responsiveness
            </li>
            <li>• Minimize JavaScript errors for better stability</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RealTimePerformanceMonitor;