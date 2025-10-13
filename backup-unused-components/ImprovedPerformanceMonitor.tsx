<<<<<<< HEAD
import React from 'react';
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f

export default function Component() {
  return (
<<<<<<< HEAD
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
=======
    <div className="fixed bottom-4 right-4 z-50">
//       <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-slate-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 text-white hover:bg-slate-700/90 transition-colors"
        title="Performance Monitor"
//       >
        <Activity className="w-5 h-5" />
</button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 w-80 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Performance
</h3>
//             <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
//             >
//               ×
</button>
</div>

          {/* Performance Score */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Overall Score</span>
              <span className={`font-bold ${getScoreColor(performanceScore)}`}>
                {performanceScore}/100
</span>
</div>
            <div className="w-full bg-slate-700 rounded-full h-2">
//               <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  performanceScore >= 90 ? 'bg-green-400' :
                  performanceScore >= 70 ? 'bg-yellow-400' : 'bg-red-400'
                }`}
                style={{ width: `${performanceScore}%` }}
//               />
</div>
            <p className="text-xs text-gray-400 mt-1">
              {getScoreLabel(performanceScore)}
</p>
</div>

          {/* Metrics */}
          <div className="space-y-2 text-sm">
            {metrics.lcp && (
              <div className="flex justify-between">
                <span className="text-gray-300">LCP</span>
                <span className={metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}>
                  {metrics.lcp.toFixed(0)}ms
</span>
</div>
            )}
            {metrics.fid && (
              <div className="flex justify-between">
                <span className="text-gray-300">FID</span>
                <span className={metrics.fid > 100 ? 'text-red-400' : 'text-green-400'}>
                  {metrics.fid.toFixed(0)}ms
</span>
</div>
            )}
            {metrics.cls && (
              <div className="flex justify-between">
                <span className="text-gray-300">CLS</span>
                <span className={metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}>
                  {metrics.cls.toFixed(3)}
</span>
</div>
            )}
            {metrics.fcp && (
              <div className="flex justify-between">
                <span className="text-gray-300">FCP</span>
                <span className={metrics.fcp > 1800 ? 'text-red-400' : 'text-green-400'}>
                  {metrics.fcp.toFixed(0)}ms
</span>
</div>
            )}
            {metrics.ttfb && (
              <div className="flex justify-between">
                <span className="text-gray-300">TTFB</span>
                <span className={metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}>
                  {metrics.ttfb.toFixed(0)}ms
</span>
</div>
            )}
            {metrics.memory && (
              <div className="flex justify-between">
                <span className="text-gray-300">Memory</span>
                <span className="text-cyan-400">
                  {metrics.memory.toFixed(1)}MB
</span>
</div>
            )}
            {metrics.connection && (
              <div className="flex justify-between">
                <span className="text-gray-300">Connection</span>
                <span className="text-cyan-400">
                  {metrics.connection}
</span>
</div>
            )}
</div>
</div>
      )}
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  );
}
