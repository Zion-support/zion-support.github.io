import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  connectionSpeed: string | null;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
  enableReporting?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showInProduction = false,
  enableReporting = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    connectionSpeed: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Don't show in production unless explicitly enabled
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

    // Load web-vitals library dynamically
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        // Measure Core Web Vitals
        getCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
          if (enableReporting) {
            console.log('CLS:', metric);
          }
        });

        getFID((metric) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }));
          if (enableReporting) {
            console.log('FID:', metric);
          }
        });

        getFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
          if (enableReporting) {
            console.log('FCP:', metric);
          }
        });

        getLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
          if (enableReporting) {
            console.log('LCP:', metric);
          }
        });

        getTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          if (enableReporting) {
            console.log('TTFB:', metric);
          }
        });
      } catch (error) {
        console.error('Failed to load web-vitals:', error);
      }
    };

    // Get memory usage if available
    const getMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        return memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : null;
      }
      return null;
    };

    // Get connection speed
    const getConnectionSpeed = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          return connection.effectiveType || 'unknown';
        }
      }
      return null;
    };

    // Update memory usage periodically
    const updateMemoryUsage = () => {
      setMetrics(prev => ({
        ...prev,
        memoryUsage: getMemoryUsage(),
        connectionSpeed: getConnectionSpeed()
      }));
    };

    loadWebVitals();
    updateMemoryUsage();

    // Update memory usage every 5 seconds
    const interval = setInterval(updateMemoryUsage, 5000);

    // Show monitor after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [showInProduction, enableReporting]);

  // Call onMetricsUpdate when metrics change
  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  const getPerformanceScore = () => {
    let score = 0;
    let count = 0;

    if (metrics.lcp !== null) {
      score += metrics.lcp < 2500 ? 100 : metrics.lcp < 4000 ? 50 : 0;
      count++;
    }
    if (metrics.fid !== null) {
      score += metrics.fid < 100 ? 100 : metrics.fid < 300 ? 50 : 0;
      count++;
    }
    if (metrics.cls !== null) {
      score += metrics.cls < 0.1 ? 100 : metrics.cls < 0.25 ? 50 : 0;
      count++;
    }
    if (metrics.fcp !== null) {
      score += metrics.fcp < 1800 ? 100 : metrics.fcp < 3000 ? 50 : 0;
      count++;
    }

    return count > 0 ? Math.round(score / count) : 0;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <TrendingUp className="w-4 h-4" />;
    if (score >= 70) return <Activity className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  if (!isVisible) return null;

  const performanceScore = getPerformanceScore();

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold">Performance</span>
        </div>
        <div className={`flex items-center space-x-1 ${getScoreColor(performanceScore)}`}>
          {getScoreIcon(performanceScore)}
          <span className="font-bold">{performanceScore}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.lcp && metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'}>
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={metrics.fid && metrics.fid < 100 ? 'text-green-400' : 'text-red-400'}>
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cls && metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400'}>
            {metrics.cls ? metrics.cls.toFixed(3) : '...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.fcp && metrics.fcp < 1800 ? 'text-green-400' : 'text-red-400'}>
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={metrics.ttfb && metrics.ttfb < 600 ? 'text-green-400' : 'text-red-400'}>
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '...'}
          </span>
        </div>
        {metrics.memoryUsage && (
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={metrics.memoryUsage < 50 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.memoryUsage}MB
            </span>
          </div>
        )}
        {metrics.connectionSpeed && (
          <div className="flex justify-between">
            <span>Connection:</span>
            <span className="text-cyan-400">
              {metrics.connectionSpeed}
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-3 border-t border-white/20">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Score: {performanceScore}/100</span>
          <div className="flex items-center space-x-1">
            <Zap className="w-3 h-3" />
            <span>Core Web Vitals</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;