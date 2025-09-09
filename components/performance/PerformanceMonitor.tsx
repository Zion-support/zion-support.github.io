import React, { useEffect, useState } from "react";

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  fmp?: number;
}

interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "user" | "guest";
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          setMetrics(prev => ({
            ...prev,
            [entry.name.toLowerCase()]: entry.startTime
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        title="Show Performance Metrics"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-700">Performance Metrics</h3>
        <button
          onClick={toggleVisibility}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-1 text-xs">
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className="font-mono">{metrics.fcp.toFixed(2)}ms</span>
          </div>
        )}
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className="font-mono">{metrics.lcp.toFixed(2)}ms</span>
          </div>
        )}
        {metrics.fid && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span className="font-mono">{metrics.fid.toFixed(2)}ms</span>
          </div>
        )}
        {metrics.cls && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className="font-mono">{metrics.cls.toFixed(4)}</span>
          </div>
        )}
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className="font-mono">{metrics.ttfb.toFixed(2)}ms</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;