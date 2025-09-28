import React, { useState, useEffect, useCallback } from "react";

interface PerformanceMetrics {
  loadTime: number | null;
  memoryUsage: number | null;
  bundleSize: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
}

interface PerformanceWidgetProps {
  isVisible: boolean;
  onClose: () => void;
}

const PerformanceWidget: React.FC<PerformanceWidgetProps> = ({
  isVisible,
  onClose,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    memoryUsage: null,
    bundleSize: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const updateMetrics = useCallback(() => {
    if (typeof window === "undefined") return;

    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming;
    const newMetrics: PerformanceMetrics = {
      loadTime: navigation
        ? navigation.loadEventEnd - navigation.fetchStart
        : null,
      memoryUsage: null,
      bundleSize: null,
      firstContentfulPaint: null,
      largestContentfulPaint: null,
    };

    // Get memory usage if available
    if ("memory" in performance) {
      const memory = (
        performance as Performance & { memory?: { usedJSHeapSize: number } }
      ).memory;
      newMetrics.memoryUsage = memory
        ? Math.round(memory.usedJSHeapSize / 1024 / 1024)
        : null;
    }

    // Get paint metrics
    const paintEntries = performance.getEntriesByType("paint");
    const fcpEntry = paintEntries.find(
      (entry) => entry.name === "first-contentful-paint",
    );
    if (fcpEntry) {
      newMetrics.firstContentfulPaint = Math.round(fcpEntry.startTime);
    }

    setMetrics(newMetrics);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [isVisible, updateMetrics]);

  if (!isVisible) return null;

  const getPerformanceColor = (
    value: number | null,
    thresholds: { good: number; poor: number },
  ) => {
    if (value === null) return "text-gray-500";
    if (value <= thresholds.good) return "text-green-600";
    if (value <= thresholds.poor) return "text-yellow-600";
    return "text-red-600";
  };

  const getPerformanceStatus = (
    value: number | null,
    thresholds: { good: number; poor: number },
  ) => {
    if (value === null) return "Unknown";
    if (value <= thresholds.good) return "Good";
    if (value <= thresholds.poor) return "Needs Improvement";
    return "Poor";
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Performance
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {isExpanded ? "−" : "+"}
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {/* Load Time */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Load Time:
            </span>
            <span
              className={`text-sm font-medium ${getPerformanceColor(metrics.loadTime, { good: 2000, poor: 4000 })}`}
            >
              {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : "—"}
            </span>
          </div>

          {/* Memory Usage */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Memory:
            </span>
            <span
              className={`text-sm font-medium ${getPerformanceColor(metrics.memoryUsage, { good: 50, poor: 100 })}`}
            >
              {metrics.memoryUsage ? `${metrics.memoryUsage}MB` : "—"}
            </span>
          </div>

          {/* First Contentful Paint */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              FCP:
            </span>
            <span
              className={`text-sm font-medium ${getPerformanceColor(metrics.firstContentfulPaint, { good: 1500, poor: 2500 })}`}
            >
              {metrics.firstContentfulPaint
                ? `${metrics.firstContentfulPaint}ms`
                : "—"}
            </span>
          </div>

          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <div>
                  Status:{" "}
                  {getPerformanceStatus(metrics.loadTime, {
                    good: 2000,
                    poor: 4000,
                  })}
                </div>
                <div>
                  Memory:{" "}
                  {getPerformanceStatus(metrics.memoryUsage, {
                    good: 50,
                    poor: 100,
                  })}
                </div>
                <div>
                  FCP:{" "}
                  {getPerformanceStatus(metrics.firstContentfulPaint, {
                    good: 1500,
                    poor: 2500,
                  })}
                </div>
              </div>

              <button
                onClick={updateMetrics}
                className="mt-2 w-full px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
              >
                Refresh Metrics
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceWidget;
