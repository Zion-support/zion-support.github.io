import React from 'react';
import React, { useState, useEffect, useCallback } from 'react';
import { Activity, TrendingUp } from 'lucide-react';
interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  memory?: number;
  connection?: string;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  logMetrics?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const ImprovedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  logMetrics = false,
//   onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      onMetricsUpdate?.(updated);
      return updated;
    });
  }, [onMetricsUpdate]);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Load web-vitals library dynamically
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');

        // Measure Core Web Vitals
        getCLS((metric) => {
          updateMetrics({ cls: metric.value });
          if (logMetrics) console.log('CLS:', metric);
        });

        getFID((metric) => {
          updateMetrics({ fid: metric.value });
          if (logMetrics) console.log('FID:', metric);
        });

        getFCP((metric) => {
          updateMetrics({ fcp: metric.value });
          if (logMetrics) console.log('FCP:', metric);
        });

        getLCP((metric) => {
          updateMetrics({ lcp: metric.value });
          if (logMetrics) console.log('LCP:', metric);
        });

        getTTFB((metric) => {
          updateMetrics({ ttfb: metric.value });
          if (logMetrics) console.log('TTFB:', metric);
        });

      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
      }
    };

    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        updateMetrics({
//           memory: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        });
      }
    };

    // Monitor connection
    const monitorConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        updateMetrics({
          connection: `${connection.effectiveType} (${connection.downlink}Mbps)`
        });
      }
    };

    // Monitor performance entries
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          updateMetrics({ lcp: entry.startTime });
        } else if (entry.entryType === 'first-input') {
          updateMetrics({ fid: entry.processingStart - entry.startTime });
        } else if (entry.entryType === 'layout-shift') {
          if (!(entry as any).hadRecentInput) {
            updateMetrics({
              cls: (metrics.cls || 0) + (entry as any).value
            });
          }
        } else if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            updateMetrics({ fcp: entry.startTime });
          }
      }
    });

    // Initialize monitoring
    loadWebVitals();
    monitorMemory();
    monitorConnection();

    // Set up observers
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch (e) {
      console.warn('Performance Observer not supported:', e);
    }

    // Monitor memory every 5 seconds
    const memoryInterval = setInterval(monitorMemory, 5000);

    // Monitor connection changes
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      connection.addEventListener('change', monitorConnection);
    }

    return () => {
      observer.disconnect();
      clearInterval(memoryInterval);
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        connection.removeEventListener('change', monitorConnection);
      }
    };
  }, [updateMetrics, logMetrics, metrics.cls]);

  // Performance score calculation
  const getPerformanceScore = () => {
    let score = 100;

    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 20;

    return Math.max(0, score);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  const performanceScore = getPerformanceScore();

  if (!showDetails) {
    return null;
  }

interface ImprovedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedPerformanceMonitor({ className = '', children }: ImprovedPerformanceMonitorProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
    <div className="fixed bottom-4 right-4 z-50"
        title="Performance Monitor"w-5 h-5"absolute bottom-16 right-0 w-80 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white"flex items-center justify-between mb-4"text-lg font-semibold flex items-center gap-2"w-5 h-5"text-gray-400 hover:text-white"mb-4"flex items-center justify-between mb-2"text-sm text-gray-300"w-full bg-slate-700 rounded-full h-2"text-xs text-gray-400 mt-1"space-y-2 text-sm"flex justify-between"text-gray-300"flex justify-between"text-gray-300"flex justify-between"text-gray-300"flex justify-between"text-gray-300"flex justify-between"text-gray-300"flex justify-between"text-gray-300"text-cyan-400"flex justify-between"text-gray-300"text-cyan-400">
                  {metrics.connection}
</span>
</div>
            )}
</div>
</div>
      )}
</div>
  );
