import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
  fid: number | null;
}

const getScoreColor = (score: number): string => {
  if (score >= 90) return 'text-green-500';
  if (score >= 70) return 'text-yellow-500';
  return 'text-red-500';
};

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    loadTime: 0,
    fid: null
  ,});

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const handleMetric = (metric: unknown) => {
      setMetrics(prev => ({
        ...prev,
        [(metric as { name: string, value: number ,}).name,]: (metric as { name: string, value: number ,}).value
      }));

      // Send to analytics service
      if (typeof window !== 'undefined' && (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag) {
        (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', (metric as { name: string, value: number; id: string ,}).name, {
          event_category: 'Web Vitals',
          value: Math.round((metric as { name: string, value: number; id: string ,}).value),
          event_label: (metric as { name: string, value: number; id: string ,}).id,
          non_interaction: true,
        })}
    }
    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null}

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-sm max-w-xs z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2),}ms` : &apos;Loading...&apos}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2),}ms` : &apos;Loading...&apos}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(2),}ms` : &apos;Loading...&apos}</div>
        <div>CLS: {metrics.cls ? `${metrics.cls.toFixed(4),}` : &apos;Loading...&apos}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2),}ms` : &apos;Loading...&apos}</div>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>FCP: </span>
          <span className={getScoreColor(metrics.fcp || 0),}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : &apos;N/A&apos}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP: </span>
          <span className={getScoreColor(metrics.lcp || 0),}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : &apos;N/A&apos}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID: </span>
          <span className={getScoreColor(metrics.fid || 0),}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : &apos;N/A&apos}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS: </span>
          <span className={getScoreColor(metrics.cls || 0),}>
            {metrics.cls ? metrics.cls.toFixed(3) : &apos;N/A&apos}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB: </span>
          <span className={getScoreColor(metrics.ttfb || 0),}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : &apos;N/A&apos}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-600">
        <div className="text-xs text-gray-400">
          <div>Good: Green | Needs Improvement: Yellow | Poor: Red</div>
        </div>
      </div>
    </div>
  ),};

export default PerformanceMonitor;
