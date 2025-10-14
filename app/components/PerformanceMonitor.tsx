import React, { useEffect } from "react";

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only monitor performance in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Monitor performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "navigation") {
          console.warn("Navigation timing:", entry);
        }
        if (entry.entryType === "paint") {
          console.warn("Paint timing:", entry);
        }
      }
    });

    observer.observe({ entryTypes: ["navigation", "paint"] });

    // Monitor Core Web Vitals
    if ("web-vitals" in window) {
      import("web-vitals").then(({ onCLS, onFCP, onLCP, onTTFB }) => {
        onCLS(console.warn);
        onFCP(console.warn);
        onLCP(console.warn);
        onTTFB(console.warn);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
