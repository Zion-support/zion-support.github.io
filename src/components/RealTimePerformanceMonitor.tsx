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

  const calculateFPS = (): number => {
    // This is a simplified FPS calculation
    // In a real implementation, you'd track frame times
    return Math.floor(Math.random() * 60) + 30; // Placeholder
  };

  const updateMetrics = useCallback(() => {
    if (!isMonitoring) return;

    const newMetrics: PerformanceMetrics = {
      fps: calculateFPS(),
      memoryUsage: getMemoryUsage(),
      renderTime: getRenderTime(),
      networkLatency: getNetworkLatency(),
      errorCount: getErrorCount(),
      timestamp: Date.now(),
    };

    setMetrics(newMetrics);
    setHistory((prev) => {
      const updated = [...prev, newMetrics];
      return updated.slice(-maxHistoryLength);
    });
  }, [isMonitoring, maxHistoryLength]);

  const getMemoryUsage = (): number => {
    if (
      typeof window === "undefined" ||
      !(
        window as unknown as {
          performance?: { memory?: { usedJSHeapSize?: number } };
        }
      ).performance?.memory
    )
      return 0;

    const memory = (
      window as unknown as {
        performance: { memory: { usedJSHeapSize: number } };
      }
    ).performance.memory;
    return Math.round(memory.usedJSHeapSize / 1024 / 1024); // MB
  };

  const getRenderTime = (): number => {
    if (typeof window === "undefined" || !window.performance) return 0;
    const entries = performance.getEntriesByType("measure");
    const renderEntry = entries.find((entry) => entry.name === "render-time");
    return renderEntry ? Math.round(renderEntry.duration) : 0;
  };

  const getNetworkLatency = (): number => {
    if (typeof window === "undefined" || !window.performance) return 0;
    const entries = performance.getEntriesByType("navigation");
    if (entries.length === 0) return 0;
    const nav = entries[0] as PerformanceNavigationTiming;
    return Math.round(nav.responseEnd - nav.requestStart);
  };

  const getErrorCount = (): number => {
    // This would typically come from an error tracking service
    return Math.floor(Math.random() * 5); // Placeholder
  };

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, [isVisible, updateMetrics]);

  const startMonitoring = () => {
    setIsMonitoring(true);
    updateMetrics();
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const getStatusColor = (
    value: number,
    thresholds: { good: number; warning: number },
  ): string => {
    if (value <= thresholds.good) return "text-green-600";
    if (value <= thresholds.warning) return "text-yellow-600";
    return "text-red-600";
  };

  const getStatusBg = (
    value: number,
    thresholds: { good: number; warning: number },
  ): string => {
    if (value <= thresholds.good) return "bg-green-100";
    if (value <= thresholds.warning) return "bg-yellow-100";
    return "bg-red-100";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Real-Time Performance Monitor
          </h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={isMonitoring ? stopMonitoring : startMonitoring}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isMonitoring
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {isMonitoring ? "Stop" : "Start"} Monitoring
              </button>
              <button
                onClick={clearHistory}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                Clear History
              </button>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2} d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Current Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <div className={`p-4 rounded-lg ${getStatusBg(metrics.fps, { good: 50, warning: 30 })}`}>
              <div className="text-sm font-medium text-gray-600">FPS</div>
              <div className={`text-2xl font-bold ${getStatusColor(metrics.fps, { good: 50, warning: 30 })}`}>
                {metrics.fps}
              </div>
              <div className="text-xs text-gray-500">Frames per second</div>
            </div>
            <div className={`p-4 rounded-lg ${getStatusBg(metrics.memoryUsage, { good: 50, warning: 100 })}`}>
              <div className="text-sm font-medium text-gray-600">Memory</div>
              <div className={`text-2xl font-bold ${getStatusColor(metrics.memoryUsage, { good: 50, warning: 100 })}`}>
                {metrics.memoryUsage}MB
              </div>
              <div className="text-xs text-gray-500">JS Heap Size</div>
            </div>
            <div className={`p-4 rounded-lg ${getStatusBg(metrics.renderTime, { good: 16, warning: 33 })}`}>
              <div className="text-sm font-medium text-gray-600">
                Render Time
              </div>
              <div className={`text-2xl font-bold ${getStatusColor(metrics.renderTime, { good: 16, warning: 33 })}`}>
                {metrics.renderTime}ms
              </div>
              <div className="text-xs text-gray-500">Frame render time</div>
            </div>
            <div className={`p-4 rounded-lg ${getStatusBg(metrics.networkLatency, { good: 100, warning: 300 })}`}>
              <div className="text-sm font-medium text-gray-600">Network</div>
              <div className={`text-2xl font-bold ${getStatusColor(metrics.networkLatency, { good: 100, warning: 300 })}`}>
                {metrics.networkLatency}ms
              </div>
              <div className="text-xs text-gray-500">Response time</div>
            </div>
            <div className={`p-4 rounded-lg ${getStatusBg(metrics.errorCount, { good: 0, warning: 2 })}`}>
              <div className="text-sm font-medium text-gray-600">Errors</div>
              <div className={`text-2xl font-bold ${getStatusColor(metrics.errorCount, { good: 0, warning: 2 })}`}>
                {metrics.errorCount}
              </div>
              <div className="text-xs text-gray-500">Current errors</div>
            </div>
          </div>

          {/* Performance Chart */}
          {history.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Performance History
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="h-64 flex items-end space-x-1">
                  {history.slice(-50).map((metric, index) => (
                    <div key={index} className="flex flex-col items-center space-y-1">
                      <div className="w-2 bg-blue-500 rounded-t"
                        style={{
                          height: `${Math.min((metric.fps / 60) * 100, 100)}%`,
                        }}
                        title={`FPS: ${metric.fps}`}
                      />
                      <div className="w-2 bg-red-500 rounded-t"
                        style={{
                          height: `${Math.min((metric.memoryUsage / 200) * 100, 100)}%`,
                        }}
                        title={`Memory: ${metric.memoryUsage} MB`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Blue: FPS</span>
                  <span>Red: Memory (MB)</span>
                </div>
              </div>
            </div>
          )}

          {/* Performance Tips */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Performance Tips
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Keep FPS above 30 for smooth user experience</li>
              <li>• Monitor memory usage to prevent memory leaks</li>
              <li>• Render time should be under 16ms for 60fps</li>
              <li>
                • Network latency under 100ms provides good responsiveness
              </li>
              <li>• Minimize JavaScript errors for better stability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimePerformanceMonitor;