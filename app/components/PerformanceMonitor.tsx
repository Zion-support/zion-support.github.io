import React, { useEffect, useState } from "react";
import { onCLS, onINP, onFCP, onLCP, onTTFB } from "web-vitals";

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  cls: number;
  inp: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    cls: 0,
    inp: 0,
    fcp: 0,
    lcp: 0,
    ttfb: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    // Measure Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, inp: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
    });

    // Measure load time
    const measureLoadTime = () => {
      if (typeof window !== "undefined" && window.performance) {
        const navigation = window.performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        
        setMetrics(prev => ({ ...prev, loadTime: Math.round(loadTime) }));
      }
    };

    // Measure memory usage
    const measureMemory = () => {
      if (typeof window !== "undefined" && (window as Window & { performance?: Performance & { memory?: { usedJSHeapSize: number } } }).performance?.memory) {
        const memory = (window as Window & { performance: Performance & { memory: { usedJSHeapSize: number } } }).performance.memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
        }));
      }
    };

    measureLoadTime();
    measureMemory();

    // Toggle visibility with Ctrl + Shift + M
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === "M") {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg font-mono text-sm z-50 max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div>Load Time: {metrics.loadTime}ms</div>
        <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
        <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
        <div>CLS: {metrics.cls.toFixed(3)}</div>
        <div>INP: {metrics.inp.toFixed(2)}ms</div>
        <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
      </div>
      
      <div className="mt-2 text-xs text-gray-400">
        Press Ctrl+Shift+M to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;