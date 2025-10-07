'use client';

import React, { useEffect, useState } from 'react';
import { Cpu, Zap, Clock } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  loadTime?: number;
  renderTime?: number;
  memoryUsage?: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver(list => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            const newMetrics = { fcp: entry.startTime };
            setMetrics(newMetrics);
          }
        }
      });
    });

    observer.observe({
      entryTypes: [
        'paint',
        'largest-contentful-paint',
        'first-input',
        'layout-shift',
      ],
    });

    return () => observer.disconnect();
  }, []);

  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg shadow-lg z-50 text-sm font-mono">
      <div className="flex items-center gap-2 mb-2">
        <Cpu className="w-4 h-4" />
        <span className="font-bold">Performance Monitor</span>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3" />
          <span>Load: {metrics.loadTime}ms</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-3 h-3" />
          <span>Render: {metrics.renderTime}ms</span>
        </div>
        <div className="flex items-center gap-2">
          <Cpu className="w-3 h-3" />
          <span>Memory: {metrics.memoryUsage}MB</span>
        </div>
      </div>
      <div className="text-xs text-gray-400 mt-2">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
}
