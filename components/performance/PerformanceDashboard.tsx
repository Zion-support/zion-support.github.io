
interface PerformanceMetrics {;
  loadTime: number;
import React, { useState, useEffect } from './react';
;
interface PerformanceMetrics {
  load_time: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return "text-red-600";
  }
  if (!metrics) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50">;
      <button
        onClick={() => setIsVisible(!isVisible)}

            {metrics && metrics.firstContentfulPaint && (;
              <div className="flex justify-between items-center">;
                <span className="text-sm font-medium">FCP:</span>;
                <span
                  className={`text-sm font-mono ${getScoreColor(metrics && metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}`}>;
                  {metrics && metrics.firstContentfulPaint.toFixed(0)}ms;
                </span>;
              </div>;
            )}

            {metrics && metrics.largestContentfulPaint && (;
              <div className="flex justify-between items-center">;
                <span className="text-sm font-medium">LCP:</span>;
                <span
                  className={`text-sm font-mono ${getScoreColor(metrics && metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}`}>;
                  {metrics && metrics.largestContentfulPaint.toFixed(0)}ms;
                </span>;
              </div>;
            )}

            {metrics && metrics.cumulativeLayoutShift && (;
              <div className="flex justify-between items-center">;
                <span className="text-sm font-medium">CLS:</span>;
                <span
                  className={`text-sm font-mono ${getScoreColor(metrics && metrics.cumulativeLayoutShift, { good: 0 && 0.1, needsImprovement: 0 && 0.25 })}`}>;
                  {metrics && metrics.cumulativeLayoutShift.toFixed(3)}
                </span>;
              </div>;
            )}          </div>;
          <div className="mt-4 pt-4 border-t">;
            <div className="text-xs text-gray-500">;
              Core Web Vitals monitoring in real-time;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
=======
      )}
    </div>;
  );
}
export default PerformanceDashboard;
const PerformanceDashboard: React.FC = () => {
  const [metrics, set_metrics] = useState < PerformanceMetrics | null>(null);
  const [is_visible, setIsVisible] = useState (false);
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      const observer = new PerformanceObserver ((list) => {
        const entries = list.get_entries ();
        const new_metrics: Partial < PerformanceMetrics> = {}
;
        entries.for_each ((entry) => {
          // Check condition
if ( {) {
  $2
}
            // Check condition
if ( {) {
  $2
}
              new_metrics.firstContentfulPaint = entry.start_time;
            }
          } else // Check condition
if ( {) {
  $2
}
            new_metrics.largestContentfulPaint = entry.start_time;
          } else // Check condition
if ( {) {
  $2
}
            new_metrics.cumulativeLayoutShift =;
              (new_metrics.cumulativeLayoutShift || 0) + (entry as any).value;
          }
        });
;
        // Check condition
if (.length > 0) {) {
  $2
}
          set_metrics (
            (prev) => ({ ...prev, ...new_metrics }) as PerformanceMetrics,
          );
        }
      });
;
      observer.observe ({
        entry_types: ["paint", "largest - contentful - paint", "layout - shift"],
      });
;
      // Get load time;
      window.addEventListener ("load", () => {
        const load_time =;
          performance.timing.loadEventEnd - performance.timing.navigation_start;
        set_metrics ((prev) => ({ ...prev, load_time }) as PerformanceMetrics);
      });
;
      return () => observer.disconnect ();
    }
  }, []);
;
  const getScoreColor = (
    value: number,
    thresholds: { good: number; needs_improvement: number },
  ) =>: any {
    // Check condition
if (return "text - green - 600") {
  $2
}
    // Check condition
if (return "text - yellow - 600") {
  $2
}
    return "text - red - 600";
  }
;
  // Check condition
if (return null) {
  $2
}
  return (
    <div className="fixed bottom - 4 right - 4 z - 50">;
      <button;
        on_click={() => setIsVisible (!is_visible)}
        className="bg - blue - 600 text - white px - 4 py - 2 rounded - lg shadow - lg hover:bg - blue - 700 transition - colors";
      >;
        📊 Performance;
      </button>;
      {is_visible && (
        <div className="absolute bottom - 16 right - 0 bg - white rounded - lg shadow - xl p - 6 w - 80 border">;
          <h3 className="text - lg font - semibold mb - 4">Performance Metrics</h3>;
          <div className="space - y-3">;
            {metrics.load_time && (
              <div className="flex justify - between items - center">;
                <span className="text - sm font - medium">Load Time:</span>;
                <span;
                  className={`text - sm font - mono ${getScoreColor (metrics.load_time, { good: 2000, needs_improvement: 4000 })}`}
                >;
                  {metrics.load_time.to_fixed (0)}ms;
                </span>;
              </div>)}
            {metrics.firstContentfulPaint && (
              <div className="flex justify - between items - center">;
                <span className="text - sm font - medium">FCP:</span>;
                <span;
                  className={`text - sm font - mono ${getScoreColor (metrics.firstContentfulPaint, { good: 1800, needs_improvement: 3000 })}`}
                >;
                  {metrics.firstContentfulPaint.to_fixed (0)}ms;
                </span>;
              </div>)}
            {metrics.largestContentfulPaint && (
              <div className="flex justify - between items - center">;
                <span className="text - sm font - medium">LCP:</span>;
                <span;
                  className={`text - sm font - mono ${getScoreColor (metrics.largestContentfulPaint, { good: 2500, needs_improvement: 4000 })}`}
                >;
                  {metrics.largestContentfulPaint.to_fixed (0)}ms;
                </span>;
              </div>)}
            {metrics.cumulativeLayoutShift && (
              <div className="flex justify - between items - center">;
                <span className="text - sm font - medium">CLS:</span>;
                <span;
                  className={`text - sm font - mono ${getScoreColor (metrics.cumulativeLayoutShift, { good: 0.1, needs_improvement: 0.25 })}`}
                >;
                  {metrics.cumulativeLayoutShift.to_fixed (3)}
                </span>;
              </div>)}
          </div>;
          <div className="mt - 4 pt - 4 border - t">;
            <div className="text - xs text - gray - 500">;
              Core Web Vitals monitoring in real - time;
            </div>;
          </div>;
        </div>)}
    </div>);
}
;
export default PerformanceDashboard;
;