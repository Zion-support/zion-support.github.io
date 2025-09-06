import React, { useState, useEffect } from "react";
interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}
const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && "performance" in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const newMetrics: Partial<PerformanceMetrics> = {}
        entries.forEach((entry) => {
          if (entry.entryType === "paint") {
            if (entry.name === "first-contentful-paint") {
              newMetrics.firstContentfulPaint = entry.startTime;
            }
          } else if (entry.entryType === "largest-contentful-paint") {
            newMetrics.largestContentfulPaint = entry.startTime;
          } else if (entry.entryType === "layout-shift") {
            newMetrics.cumulativeLayoutShift =
              (newMetrics.cumulativeLayoutShift |0) + (entry as any).value;
          }
        });
        if (Object.keys(newMetrics).length > 0) {
          setMetrics(
            (prev) => ({ ...prev, ...newMetrics }) as PerformanceMetrics
          );
        }
      });
      observer.observe({
        entryTypes: ["paint", "largest-contentful-paint", "layout-shift"]
      });
      // Get load time
      window.addEventListener("load", () => {
        const loadTime =
          performance.timing.loadEventEnd - performance.timing.navigationStart;
        setMetrics((prev) => ({ ...prev, loadTime }) as PerformanceMetrics);
      });
      return () => observer.disconnect();
    }
  }, []);
  const getScoreColor = (
    value: number
    thresholds: { good: number; needsImprovement: number }
  ) => {
    if (value <= thresholds.good) return "text-green-600";
    if (value <= thresholds.needsImprovement) return "text-yellow-600";
    return "text-red-600";
  }
  if (!metrics) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        📊 Performance
      </button>
      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-6 w-80 border">
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="space-y-3">
            {metrics.loadTime && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Load Time:</span>
                <span
                  className={`text-sm font-mono ${getScoreColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}`}
                >
                  {metrics.loadTime.toFixed(0)}ms
                </span>
              </div>
            )}
            {metrics.firstContentfulPaint && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">FCP:</span>
                <span
                  className={`text-sm font-mono ${getScoreColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}`}
                >
                  {metrics.firstContentfulPaint.toFixed(0)}ms
                </span>
              </div>
            )}
            {metrics.largestContentfulPaint && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">LCP:</span>
                <span
                  className={`text-sm font-mono ${getScoreColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}`}
                >
                  {metrics.largestContentfulPaint.toFixed(0)}ms
                </span>
              </div>
            )}
            {metrics.cumulativeLayoutShift && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">CLS:</span>
                <span
                  className={`text-sm font-mono ${getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}`}
                >
                  {metrics.cumulativeLayoutShift.toFixed(3)}
                </span>
              </div>
            )}
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="text-xs text-gray-500">
              Core Web Vitals monitoring in real-time
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default PerformanceDashboard;