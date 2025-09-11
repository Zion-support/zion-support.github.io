import React, { useEffect, useState } from 'react';
import './PerformanceMonitor.css';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

const PerformanceMonitor: React.FC<{ showInDevelopment?: boolean }> = ({
  showInDevelopment = false,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !showInDevelopment) {
      return;
    }

    const collectMetrics = () => {
      const newMetrics: PerformanceMetrics = {};

      // Get navigation timing
      if (performance.getEntriesByType) {
        const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        if (navigationEntries.length > 0) {
          const nav = navigationEntries[0];
          newMetrics.ttfb = nav.responseStart - nav.requestStart;
        }
      }

      // Get paint timing
      if (performance.getEntriesByType) {
        const paintEntries = performance.getEntriesByType('paint');
        paintEntries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            newMetrics.fcp = entry.startTime;
          }
        });
      }

      // Get LCP
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            newMetrics.lcp = lastEntry.startTime;
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // LCP not supported
        }
      }

      // Get CLS
      if ('PerformanceObserver' in window) {
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            newMetrics.cls = clsValue;
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // CLS not supported
        }
      }

      setMetrics(newMetrics);
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
    }

    // Show monitor after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      window.removeEventListener('load', collectMetrics);
      clearTimeout(timer);
    };
  }, [showInDevelopment]);

  if (!isVisible || (process.env.NODE_ENV !== 'development' && !showInDevelopment)) {
    return null;
  }

  const getScoreColor = (metric: string, value?: number) => {
    if (value === undefined) return 'metric--unknown';
    
    switch (metric) {
      case 'fcp':
        return value <= 1800 ? 'metric--good' : value <= 3000 ? 'metric--needs-improvement' : 'metric--poor';
      case 'lcp':
        return value <= 2500 ? 'metric--good' : value <= 4000 ? 'metric--needs-improvement' : 'metric--poor';
      case 'fid':
        return value <= 100 ? 'metric--good' : value <= 300 ? 'metric--needs-improvement' : 'metric--poor';
      case 'cls':
        return value <= 0.1 ? 'metric--good' : value <= 0.25 ? 'metric--needs-improvement' : 'metric--poor';
      case 'ttfb':
        return value <= 800 ? 'metric--good' : value <= 1800 ? 'metric--needs-improvement' : 'metric--poor';
      default:
        return 'metric--unknown';
    }
  };

  const formatValue = (metric: string, value?: number) => {
    if (value === undefined) return 'N/A';
    
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'ttfb':
        return `${Math.round(value)}ms`;
      case 'fid':
        return `${Math.round(value)}ms`;
      case 'cls':
        return value.toFixed(3);
      default:
        return value.toString();
    }
  };

  return (
    <div className="performance-monitor">
      <div className="performance-monitor__header">
        <h4>Performance Metrics</h4>
        <button
          className="performance-monitor__close"
          onClick={() => setIsVisible(false)}
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      <div className="performance-monitor__metrics">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className={`performance-monitor__metric ${getScoreColor(key, value)}`}>
            <span className="metric-label">{key.toUpperCase()}</span>
            <span className="metric-value">{formatValue(key, value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceMonitor;