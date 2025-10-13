import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  INP: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

interface PerformanceMonitorProps {
  children: React.ReactNode;
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  children, 
  showDetails = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    INP: null,
    FCP: null,
    LCP: null,
    TTFB: null
  });

  useEffect(() => {
    const sendToAnalytics = (metric: any) => {
      console.log($1);
      
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));

      // Send to analytics service (replace with your analytics)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.value),
          non_interaction: true,
        });
      }
    };

    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []);

  const getMetricStatus = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'pending';
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return '✅';
      case 'needs-improvement': return '⚠️';
      case 'poor': return '❌';
      default: return '⏳';
    }
  };

  if (!showDetails) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {children}
      
      {/* Performance Debug Panel */}
      <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 max-w-sm z-50">
        <h3 className="text-sm font-semibold text-white mb-3">Performance Metrics</h3>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">CLS:</span>
            <span className={getStatusColor(getMetricStatus(metrics.CLS, { good: 0.1, poor: 0.25 }))}>
              {getStatusIcon(getMetricStatus(metrics.CLS, { good: 0.1, poor: 0.25 }))} {metrics.CLS?.toFixed(3) || '...'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">INP:</span>
            <span className={getStatusColor(getMetricStatus(metrics.INP, { good: 200, poor: 500 }))}>
              {getStatusIcon(getMetricStatus(metrics.INP, { good: 200, poor: 500 }))} {metrics.INP ? `${metrics.INP}ms` : '...'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">FCP:</span>
            <span className={getStatusColor(getMetricStatus(metrics.FCP, { good: 1800, poor: 3000 }))}>
              {getStatusIcon(getMetricStatus(metrics.FCP, { good: 1800, poor: 3000 }))} {metrics.FCP ? `${metrics.FCP}ms` : '...'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">LCP:</span>
            <span className={getStatusColor(getMetricStatus(metrics.LCP, { good: 2500, poor: 4000 }))}>
              {getStatusIcon(getMetricStatus(metrics.LCP, { good: 2500, poor: 4000 }))} {metrics.LCP ? `${metrics.LCP}ms` : '...'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">TTFB:</span>
            <span className={getStatusColor(getMetricStatus(metrics.TTFB, { good: 800, poor: 1800 }))}>
              {getStatusIcon(getMetricStatus(metrics.TTFB, { good: 800, poor: 1800 }))} {metrics.TTFB ? `${metrics.TTFB}ms` : '...'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;