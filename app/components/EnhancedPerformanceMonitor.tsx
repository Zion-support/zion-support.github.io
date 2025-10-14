'use client';
import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import { Activity, Zap, Clock, Monitor, Wifi } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  inp: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  loadTime: number | null;
}

// interface PerformanceReport {
//   metrics: PerformanceMetrics;
//   timestamp: string;
//   userAgent: string;
//   connectionType: string;
//   deviceMemory: number | null;
// }

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    inp: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure Core Web Vitals
    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, inp: metric.value }));
    });

    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
    });

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as unknown as { memory: { usedJSHeapSize: number } }).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }

    // Measure load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
    });

    // Show monitor after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const getPerformanceScore = () => {
    const scores = [];
    
    if (metrics.lcp !== null) {
      scores.push(metrics.lcp < 2500 ? 100 : metrics.lcp < 4000 ? 80 : 60);
    }
    if (metrics.inp !== null) {
      scores.push(metrics.inp < 200 ? 100 : metrics.inp < 500 ? 80 : 60);
    }
    if (metrics.cls !== null) {
      scores.push(metrics.cls < 0.1 ? 100 : metrics.cls < 0.25 ? 80 : 60);
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold flex items-center">
          <Activity className="w-5 h-5 mr-2 text-cyan-400" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">Overall Score</span>
          <span className={`font-bold ${getScoreColor(getPerformanceScore())}`}>
            {getPerformanceScore()}/100
          </span>
        </div>

        {metrics.lcp !== null && (
          <div className="flex items-center justify-between">
            <span className="text-gray-300 text-sm flex items-center">
              <Zap className="w-4 h-4 mr-1" />
              LCP
            </span>
            <span className="text-white text-sm">
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
        )}

        {metrics.inp !== null && (
          <div className="flex items-center justify-between">
            <span className="text-gray-300 text-sm flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              INP
            </span>
            <span className="text-white text-sm">
              {metrics.inp.toFixed(0)}ms
            </span>
          </div>
        )}

        {metrics.cls !== null && (
          <div className="flex items-center justify-between">
            <span className="text-gray-300 text-sm flex items-center">
              <Monitor className="w-4 h-4 mr-1" />
              CLS
            </span>
            <span className="text-white text-sm">
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}

        {metrics.memoryUsage !== null && (
          <div className="flex items-center justify-between">
            <span className="text-gray-300 text-sm flex items-center">
              <Wifi className="w-4 h-4 mr-1" />
              Memory
            </span>
            <span className="text-white text-sm">
              {metrics.memoryUsage.toFixed(1)}MB
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;