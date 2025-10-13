import React, { useState, useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import { Activity, Zap, Clock, TrendingUp, X } from 'lucide-react';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
  memoryUsage?: number;
  interactionToNextPaint?: number;
  totalBlockingTime?: number;
  speedIndex?: number;
}

interface AdvancedPerformanceMonitorProps {
  showInProduction?: boolean;
  enableReporting?: boolean;
  reportEndpoint?: string;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({
  showInProduction = false,
  enableReporting = false,
  reportEndpoint = '/api/metrics'
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const reportMetric = useCallback(async (metric: any) => {
    if (!enableReporting) return;

    try {
      const payload = {
        name: metric.name,
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      await fetch(reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.warn('Failed to report metric:', error);
    }
  }, [enableReporting, reportEndpoint]);

  useEffect(() => {
    // Only run in development or if explicitly enabled
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

    const measurePerformance = () => {
      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }))
            }
          }
        })
      })

      observer.observe({ entryTypes: ['paint'] })

      // Measure memory usage if available
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
      }

      // Measure load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
      })

      // Set up Web Vitals monitoring
      onCLS((metric) => {
        setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }));
        reportMetric(metric);
      });

      onLCP((metric) => {
        setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }));
        reportMetric(metric);
      });

      onFCP((metric) => {
        setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }));
        reportMetric(metric);
      });

      onINP((metric) => {
        setMetrics(prev => ({ ...prev, interactionToNextPaint: metric.value }));
        reportMetric(metric);
      });

      onTTFB((metric) => {
        setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value }));
        reportMetric(metric);
      });

      // Set up performance observer for additional metrics
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'measure') {
              console.log('Custom Performance Measure:', entry.name, entry.duration)
            }
          }
        })

        observer.observe({ entryTypes: ['measure'] })
      }
    }

    // Initialize performance monitoring
    measurePerformance()

    // Toggle visibility with keyboard shortcut
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showInProduction, reportMetric]);

  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-lg p-2 text-white text-xs z-50 hover:bg-slate-700/90 transition-colors"
        title="Performance Monitor (Ctrl+Shift+P)"
      >
        <Activity className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm z-50 transition-all duration-300 ${
      isMinimized ? 'w-12 h-12' : 'min-w-[300px]'
    }`}>
      {!isMinimized ? (
        <>
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <h3 className="font-semibold text-cyan-400 flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              Performance Monitor
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(true)}
                className="text-gray-400 hover:text-white transition-colors"
                title="Minimize"
              >
                −
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            {/* Core Web Vitals */}
            <div className="space-y-2">
              <h4 className="text-cyan-400 font-medium text-xs uppercase tracking-wide">Core Web Vitals</h4>
              
              {metrics.largestContentfulPaint && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    LCP
                  </span>
                  <span className="text-cyan-400 font-mono text-xs">
                    {Math.round(metrics.largestContentfulPaint)}ms
                  </span>
                </div>
              )}
              
              {metrics.firstInputDelay && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center text-xs">
                    <Zap className="w-3 h-3 mr-1" />
                    FID
                  </span>
                  <span className="text-cyan-400 font-mono text-xs">
                    {Math.round(metrics.firstInputDelay)}ms
                  </span>
                </div>
              )}
              
              {metrics.cumulativeLayoutShift && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center text-xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    CLS
                  </span>
                  <span className="text-cyan-400 font-mono text-xs">
                    {metrics.cumulativeLayoutShift.toFixed(3)}
                  </span>
                </div>
              )}
            </div>

            {/* Additional Metrics */}
            <div className="space-y-2">
              <h4 className="text-cyan-400 font-medium text-xs uppercase tracking-wide">Additional Metrics</h4>
              
              {metrics.loadTime && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-xs">Load Time</span>
                  <span className="text-cyan-400 font-mono text-xs">
                    {Math.round(metrics.loadTime)}ms
                  </span>
                </div>
              )}
              
              {metrics.memoryUsage && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-xs">Memory</span>
                  <span className="text-cyan-400 font-mono text-xs">
                    {Math.round(metrics.memoryUsage)}MB
                  </span>
                </div>
              )}
              
              {metrics.timeToFirstByte && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-xs">TTFB</span>
                  <span className="text-cyan-400 font-mono text-xs">
                    {Math.round(metrics.timeToFirstByte)}ms
                  </span>
                </div>
              )}
            </div>

            {/* Environment Info */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-xs text-gray-400">
                <div>Mode: {process.env.NODE_ENV}</div>
                <div>Reporting: {enableReporting ? 'On' : 'Off'}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-full h-full flex items-center justify-center hover:bg-slate-700/50 transition-colors"
          title="Expand Performance Monitor"
        >
          <Activity className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;