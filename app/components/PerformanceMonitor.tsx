import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    return null;
  }

  return (
      </div>
      
      <div className="space-y-2 text-xs">
        {metrics.fcp && (
          <div className="flex justify-between">
            <span className="text-gray-300">FCP:</span>
            <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.lcp && (
          <div className="flex justify-between">
            <span className="text-gray-300">LCP:</span>
            <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.fid && (
          <div className="flex justify-between">
            <span className="text-gray-300">FID:</span>
            <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
              {metrics.fid.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.cls !== undefined && (
          <div className="flex justify-between">
            <span className="text-gray-300">CLS:</span>
            <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-600 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
>>>>>>> cursor/analyze-improve-and-deploy-application-b99c
      </div>
=======
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
      <div>INP: {metrics.inp?.toFixed(1) || 'N/A'}ms</div>
      <div>FCP: {metrics.fcp?.toFixed(1) || 'N/A'}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(1) || 'N/A'}ms</div>
      <div>TTFB: {metrics.ttfb?.toFixed(1) || 'N/A'}ms</div>
>>>>>>> cursor/analyze-improve-and-deploy-application-c97f
    </div>
  );
};

export default PerformanceMonitor;