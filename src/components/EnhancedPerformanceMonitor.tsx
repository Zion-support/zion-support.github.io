import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  inp: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
  enableConsoleLogging?: boolean;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true,
  enableConsoleLogging = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    inp: null
  });

  const updateMetrics = useCallback((name: string, value: number) => {
    const metricName = name.toLowerCase() as keyof PerformanceMetrics;
    
    setMetrics(prev => {
      const updated = { ...prev, [metricName]: value };
      
      if (onMetricsUpdate) {
        onMetricsUpdate(updated);
      }
      
      if (enableConsoleLogging) {
        console.log(`[Performance] ${name}:`, Math.round(value));
      }
      
      return updated;
    });
  }, [onMetricsUpdate, enableConsoleLogging]);

  const reportMetric = useCallback((metric: { name: string; value: number }) => {
    if (enableReporting && process.env.NODE_ENV === 'production') {
      // In a real application, you would send this to your analytics service
      // Example: analytics.track('web-vital', { metric: metric.name, value: metric.value });
      console.log(`[Analytics] ${metric.name}:`, Math.round(metric.value));
    }
  }, [enableReporting]);

  useEffect(() => {
    // Set up Web Vitals monitoring
    onCLS((metric) => {
      updateMetrics(metric.name, metric.value);
      reportMetric(metric);
    });

    onFCP((metric) => {
      updateMetrics(metric.name, metric.value);
      reportMetric(metric);
    });

    onLCP((metric) => {
      updateMetrics(metric.name, metric.value);
      reportMetric(metric);
    });

    onTTFB((metric) => {
      updateMetrics(metric.name, metric.value);
      reportMetric(metric);
    });

    onINP((metric) => {
      updateMetrics(metric.name, metric.value);
      reportMetric(metric);
    });
  }, [updateMetrics, reportMetric]);

  // Performance thresholds based on Web Vitals guidelines
  const getPerformanceGrade = (metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds = {
      CLS: { good: 0.1, poor: 0.25 },
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 },
      INP: { good: 200, poor: 500 }
    };

    const threshold = thresholds[metricName as keyof typeof thresholds];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  const formatValue = (value: number, metricName: string): string => {
    if (metricName === 'CLS') {
      return value.toFixed(3);
    }
    return `${Math.round(value)}ms`;
  };

  return (
    <div className="performance-monitor" style={{ display: 'none' }}>
      {/* This component is for monitoring only - no visible UI */}
      {/* In development, you might want to show metrics for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ 
          position: 'fixed', 
          top: '10px', 
          right: '10px', 
          background: 'rgba(0,0,0,0.8)', 
          color: 'white', 
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 9999
        }}>
          <h4>Performance Metrics</h4>
          {Object.entries(metrics).map(([key, value]) => (
            value !== null && (
              <div key={key}>
                {key.toUpperCase()}: {formatValue(value, key)} 
                <span style={{ 
                  color: getPerformanceGrade(key.toUpperCase(), value) === 'good' ? 'green' : 
                         getPerformanceGrade(key.toUpperCase(), value) === 'needs-improvement' ? 'orange' : 'red'
                }}>
                  ({getPerformanceGrade(key.toUpperCase(), value)})
                </span>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default EnhancedPerformanceMonitor;