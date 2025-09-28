import React, { useState, useEffect } from "react";
import { Activity, Zap, Clock, Database, Wifi, Shield } from "lucide-react";

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage: number;
  networkSpeed: string;
  securityScore: number;
}

export const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    memoryUsage: 0,
    networkSpeed: "Unknown",
    securityScore: 0,
  });

  useEffect(() => {
    const collectMetrics = () => {
      // Collect Web Vitals
      if ("web-vitals" in window) {
        import("web-vitals").then((webVitals) => {
          webVitals.onCLS((metric: any) =>
            setMetrics((prev) => ({
              ...prev,
              cumulativeLayoutShift: metric.value,
            })),
          );
          webVitals.onFCP((metric: any) =>
            setMetrics((prev) => ({
              ...prev,
              firstContentfulPaint: metric.value,
            })),
          );
          webVitals.onLCP((metric: any) =>
            setMetrics((prev) => ({
              ...prev,
              largestContentfulPaint: metric.value,
            })),
          );
          webVitals.onTTFB((metric: any) =>
            setMetrics((prev) => ({ ...prev, loadTime: metric.value })),
          );
          // Note: FID is deprecated, using INP instead
          webVitals.onINP((metric: any) =>
            setMetrics((prev) => ({ ...prev, firstInputDelay: metric.value })),
          );
        });
      }

      // Memory usage
      if ("memory" in performance) {
        const memory = (performance as any).memory;
        setMetrics((prev) => ({
          ...prev,
          memoryUsage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
        }));
      }

      // Network speed
      if ("connection" in navigator) {
        const connection = (navigator as any).connection;
        setMetrics((prev) => ({
          ...prev,
          networkSpeed: connection.effectiveType || "Unknown",
        }));
      }

      // Security score
      let securityScore = 100;
      if (!location.protocol.includes("https")) securityScore -= 20;
      if (!("serviceWorker" in navigator)) securityScore -= 10;
      setMetrics((prev) => ({ ...prev, securityScore }));
    };

    collectMetrics();
    const interval = setInterval(collectMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  const getPerformanceColor = (
    value: number,
    thresholds: { good: number; poor: number },
  ) => {
    if (value <= thresholds.good) return "text-green-600";
    if (value <= thresholds.poor) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Activity className="mr-2" />
        Performance Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Load Time</h3>
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <p
            className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, poor: 3000 })}`}
          >
            {metrics.loadTime.toFixed(0)}ms
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">First Contentful Paint</h3>
            <Zap className="w-5 h-5 text-yellow-600" />
          </div>
          <p
            className={`text-2xl font-bold ${getPerformanceColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}`}
          >
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Memory Usage</h3>
            <Database className="w-5 h-5 text-green-600" />
          </div>
          <p
            className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 50, poor: 80 })}`}
          >
            {metrics.memoryUsage.toFixed(1)}%
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Network Speed</h3>
            <Wifi className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {metrics.networkSpeed}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Security Score</h3>
            <Shield className="w-5 h-5 text-green-600" />
          </div>
          <p
            className={`text-2xl font-bold ${getPerformanceColor(100 - metrics.securityScore, { good: 20, poor: 50 })}`}
          >
            {metrics.securityScore}/100
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
