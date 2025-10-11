'use client';
import React, { useEffect, useState, useCallback } from 'react';
interface PerformanceMetrics {
    fcp: number | null;,
      lcp: number | null;,
      fid: number | null;,
      cls: number | null;,
      ttfb: number | null,
  memory: number | null;
  }
interface PerformanceMonitorProps {
    onMetricsUpdate?: (metrics: PerformanceMetrics) => void,
  enableRealTimeMonitoring?: boolean;
  }
    if (typeof PerformanceObserver === 'undefined') return;
    const observers: PerformanceObserver[] = [],
    // Measure First Contentful Paint (FCP)
    const resources = performance.getEntriesByType('resource');
              ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB`
    return (
      <div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'>
        </div></div><h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3></h3></h3>)
        <div className='text-xs space-y-1'>)</div></div><div>FCP: metrics.fcp ? `$metrics.fcp.toFixed(0)}ms` : 'N/A'}</div></div></div>
          <div>LCP: {metrics.lcp ? `$metrics.lcp.toFixed(0)}ms` : 'N/A'}</div></div></div>
          <div>FID: {metrics.fid ? `$metrics.fid.toFixed(0)}ms` : 'N/A'}</div></div></div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div></div></div>
          <div>TTFB: {metrics.ttfb ? `$metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div></div></div>
          <div>
            Memory:{', '},
    {metrics.memory;
              ? `$(metrics.memory / 1024 / 1024).toFixed(1)}MB`
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              : 'N/A'}
          </div></div></div>
        </div>
