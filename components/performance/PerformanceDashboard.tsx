
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from "react";
<<<<<<< HEAD
interface PerformanceMetrics {
=======

interface PerformanceMetrics {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}
<<<<<<< HEAD
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
=======

const PerformanceDashboard: React.FC = () => {;
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {;
    if (typeof window !== "undefined" && "performance" in window) {;
      const observer = new PerformanceObserver((list) => {;
        const entries = list && list.getEntries();
        const newMetrics: Partial<PerformanceMetrics> = {};

        entries && entries.forEach((entry) => {;
          if (entry && entry.entryType === "paint") {;
            if (entry && entry.name === "first-contentful-paint") {;
              newMetrics && newMetrics.firstContentfulPaint = entry && entry.startTime;
            }
          } else if (entry && entry.entryType === "largest-contentful-paint") {;
            newMetrics && newMetrics.largestContentfulPaint = entry && entry.startTime;
          } else if (entry && entry.entryType === "layout-shift") {;
            newMetrics && newMetrics.cumulativeLayoutShift =;
              (newMetrics && newMetrics.cumulativeLayoutShift || 0) + (entry as any).value;
          }
        });

        if (Object && Object.keys(newMetrics).length > 0) {;
          setMetrics(;
            (prev) => ({ ...prev, ...newMetrics }) as PerformanceMetrics,;
          );
        }
      });

      observer && observer.observe({;
        entryTypes: ["paint", "largest-contentful-paint", "layout-shift"],;
      });

      // Get load time;
      window && window.addEventListener("load", () => {;
        const loadTime =;
          performance && performance.timing.loadEventEnd - performance && performance.timing.navigationStart;
        setMetrics((prev) => ({ ...prev, loadTime }) as PerformanceMetrics);
      });

      return () => observer && observer.disconnect();
    }
  }, []);

  const getScoreColor = (;
    value: number,;
    thresholds: { good: number; needsImprovement: number },;
  ) => {;
    if (value <= thresholds && thresholds.good) return "text-green-600";
    if (value <= thresholds && thresholds.needsImprovement) return "text-yellow-600";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return "text-red-600";
  }
  if (!metrics) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50">;
      <button
        onClick={() => setIsVisible(!isVisible)}
<<<<<<< HEAD
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
=======
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors";
      >;
        📊 Performance;
      </button>;

      {isVisible && (;
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-6 w-80 border">;
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>;

          <div className="space-y-3">;
            {metrics && metrics.loadTime && (;
              <div className="flex justify-between items-center">;
                <span className="text-sm font-medium">Load Time:</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <span
                  className={`text-sm font-mono ${getScoreColor(metrics && metrics.loadTime, { good: 2000, needsImprovement: 4000 })}`}>;
                  {metrics && metrics.loadTime.toFixed(0)}ms;
                </span>;
              </div>;
            )}
<<<<<<< HEAD
            {metrics.firstContentfulPaint && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">FCP:</span>
=======

            {metrics && metrics.firstContentfulPaint && (;
              <div className="flex justify-between items-center">;
                <span className="text-sm font-medium">FCP:</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <span
                  className={`text-sm font-mono ${getScoreColor(metrics && metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}`}>;
                  {metrics && metrics.firstContentfulPaint.toFixed(0)}ms;
                </span>;
              </div>;
            )}
<<<<<<< HEAD
            {metrics.largestContentfulPaint && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">LCP:</span>
=======

            {metrics && metrics.largestContentfulPaint && (;
              <div className="flex justify-between items-center">;
                <span className="text-sm font-medium">LCP:</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <span
                  className={`text-sm font-mono ${getScoreColor(metrics && metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}`}>;
                  {metrics && metrics.largestContentfulPaint.toFixed(0)}ms;
                </span>;
              </div>;
            )}
<<<<<<< HEAD
            {metrics.cumulativeLayoutShift && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">CLS:</span>
=======

            {metrics && metrics.cumulativeLayoutShift && (;
              <div className="flex justify-between items-center">;
                <span className="text-sm font-medium">CLS:</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <span
                  className={`text-sm font-mono ${getScoreColor(metrics && metrics.cumulativeLayoutShift, { good: 0 && 0.1, needsImprovement: 0 && 0.25 })}`}>;
                  {metrics && metrics.cumulativeLayoutShift.toFixed(3)}
                </span>;
              </div>;
            )}
<<<<<<< HEAD
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="text-xs text-gray-500">
              Core Web Vitals monitoring in real-time
            </div>
          </div>
        </div>
=======
          </div>;

          <div className="mt-4 pt-4 border-t">;
            <div className="text-xs text-gray-500">;
              Core Web Vitals monitoring in real-time;
            </div>;
          </div>;
        </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      )}
    </div>;
  );
}
export default PerformanceDashboard;