import React, { useEffect, useState } from "react";

interface PerformanceMetrics {
  loadTime: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  firstInputDelay: number | null;
  cumulativeLayoutShift: number | null;
  timeToFirstByte: number | null;
  memoryUsage: number | null;
  domContentLoaded: number | null;
  totalBlockingTime: number | null;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToFirstByte: null,
    memoryUsage: null,
    domContentLoaded: null,
    totalBlockingTime: null
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    const measureWebVitals = () => {
      try {
        // Web Vitals measurement would go here
        // This is a placeholder implementation
        console.log("Measuring web vitals...");
      } catch (error) {
        console.error("Failed to measure web vitals:", error);
      }
    };

    const measureMemory = () => {
      if ("memory" in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize }));
      }
    };

    const measureLoadTime = () => {
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }
    };

    measureWebVitals();
    measureMemory();
    measureLoadTime();
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-cyan-600 transition-colors z-50"
        title="Show Performance Monitor"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 w-80 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <div className="flex gap-2">
          <button
            onClick={toggleRecording}
            className={`px-3 py-1 rounded text-sm ${
              isRecording ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {isRecording ? "Stop" : "Record"}
          </button>
          <button
            onClick={toggleVisibility}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-300 capitalize">
              {key.replace(/([A-Z])/g, " $1").trim()}:
            </span>
            <span className="text-cyan-400">
              {value ? `${value}ms` : "N/A"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;
