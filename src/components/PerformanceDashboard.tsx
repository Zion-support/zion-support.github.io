import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  RefreshCw,
  BarChart3,
  Gauge,
  Network,
  HardDrive
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
  memoryUsage?: {
    used: number;
    total: number;
    limit: number;
  };
  networkInfo?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
  score: number;
  recommendations: string[];
}

interface PerformanceDashboardProps {
  className?: string;
  showDetails?: boolean;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ 
  className = '', 
  showDetails = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const collectMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      // Use PerformanceObserver for real-time metrics
      if ('PerformanceObserver' in window) {
        let fcp = 0;
        let lcp = 0;
        let fid = 0;
        let cls = 0;

        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            fcp = entries[0].startTime;
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            lcp = entries[entries.length - 1].startTime;
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            const entry = entries[0] as any;
            fid = entry.processingStart - entry.startTime;
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          }
          cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Get other metrics
        const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        const domLoad = navigationEntry.domContentLoadedEventEnd - navigationEntry.navigationStart;
        const windowLoad = navigationEntry.loadEventEnd - navigationEntry.navigationStart;

        // Memory usage (if available)
        const memoryUsage = (performance as any).memory ? {
          used: Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round((performance as any).memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round((performance as any).memory.jsHeapSizeLimit / 1024 / 1024)
        } : undefined;

        // Network information (if available)
        const networkInfo = (navigator as any).connection ? {
          effectiveType: (navigator as any).connection.effectiveType,
          downlink: (navigator as any).connection.downlink,
          rtt: (navigator as any).connection.rtt
        } : undefined;

        // Calculate performance score
        const score = calculatePerformanceScore(fcp, lcp, fid, cls);

        // Generate recommendations
        const recommendations = generateRecommendations(fcp, lcp, fid, cls, ttfb);

        setTimeout(() => {
          resolve({
            fcp,
            lcp,
            fid,
            cls,
            ttfb,
            domLoad,
            windowLoad,
            memoryUsage,
            networkInfo,
            score,
            recommendations
          });
        }, 1000);
      } else {
        // Fallback for older browsers
        const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        const domLoad = navigationEntry.domContentLoadedEventEnd - navigationEntry.navigationStart;
        const windowLoad = navigationEntry.loadEventEnd - navigationEntry.navigationStart;

        resolve({
          fcp: 0,
          lcp: 0,
          fid: 0,
          cls: 0,
          ttfb,
          domLoad,
          windowLoad,
          score: 0,
          recommendations: ['Enable PerformanceObserver for detailed metrics']
        });
      }
    });
  }, []);

  const calculatePerformanceScore = (fcp: number, lcp: number, fid: number, cls: number): number => {
    let score = 100;

    // FCP scoring (0-2500ms is good)
    if (fcp > 2500) score -= 20;
    else if (fcp > 1000) score -= 10;

    // LCP scoring (0-2500ms is good)
    if (lcp > 4000) score -= 25;
    else if (lcp > 2500) score -= 15;

    // FID scoring (0-100ms is good)
    if (fid > 300) score -= 20;
    else if (fid > 100) score -= 10;

    // CLS scoring (0-0.1 is good)
    if (cls > 0.25) score -= 25;
    else if (cls > 0.1) score -= 15;

    return Math.max(0, score);
  };

  const generateRecommendations = (fcp: number, lcp: number, fid: number, cls: number, ttfb: number): string[] => {
    const recommendations: string[] = [];

    if (fcp > 1000) {
      recommendations.push('Optimize First Contentful Paint by reducing server response time');
    }
    if (lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint by optimizing images and fonts');
    }
    if (fid > 100) {
      recommendations.push('Reduce First Input Delay by optimizing JavaScript execution');
    }
    if (cls > 0.1) {
      recommendations.push('Minimize Cumulative Layout Shift by setting explicit dimensions');
    }
    if (ttfb > 600) {
      recommendations.push('Improve Time to First Byte by optimizing server performance');
    }

    if (recommendations.length === 0) {
      recommendations.push('Performance is excellent! Keep up the good work.');
    }

    return recommendations;
  };

  const refreshMetrics = useCallback(async () => {
    setIsLoading(true);
    try {
      const newMetrics = await collectMetrics();
      setMetrics(newMetrics);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Failed to collect performance metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshMetrics();

    if (autoRefresh) {
      const interval = setInterval(refreshMetrics, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshMetrics]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };

  if (!metrics) {
    return (
      <div className={`p-6 bg-white rounded-lg shadow-lg ${className}`}>
        <div className="flex items-center justify-center h-32">
          <RefreshCw className="w-8 h-8 text-gray-400 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-6 h-6 text-white" />
            <h2 className="text-xl font-semibold text-white">Performance Dashboard</h2>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={refreshMetrics}
              disabled={isLoading}
              className="flex items-center space-x-2 px-3 py-1 bg-white/20 rounded-md text-white hover:bg-white/30 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <label className="flex items-center space-x-2 text-white text-sm">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="rounded"
              />
              <span>Auto</span>
            </label>
          </div>
        </div>
      </div>

      {/* Performance Score */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Overall Score</h3>
          {getScoreIcon(metrics.score)}
        </div>
        <div className="flex items-center space-x-4">
          <div className={`text-4xl font-bold ${getScoreColor(metrics.score)}`}>
            {metrics.score}/100
          </div>
          <div className="flex-1">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-500 ${
                  metrics.score >= 90 ? 'bg-green-500' : 
                  metrics.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${metrics.score}%` }}
              />
            </div>
          </div>
        </div>
        {lastUpdated && (
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        )}
      </div>

      {/* Core Web Vitals */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Core Web Vitals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="FCP"
            value={`${Math.round(metrics.fcp)}ms`}
            description="First Contentful Paint"
            icon={<Activity className="w-5 h-5" />}
            status={metrics.fcp <= 1000 ? 'good' : metrics.fcp <= 2500 ? 'needs-improvement' : 'poor'}
          />
          <MetricCard
            title="LCP"
            value={`${Math.round(metrics.lcp)}ms`}
            description="Largest Contentful Paint"
            icon={<Zap className="w-5 h-5" />}
            status={metrics.lcp <= 2500 ? 'good' : metrics.lcp <= 4000 ? 'needs-improvement' : 'poor'}
          />
          <MetricCard
            title="FID"
            value={`${Math.round(metrics.fid)}ms`}
            description="First Input Delay"
            icon={<Clock className="w-5 h-5" />}
            status={metrics.fid <= 100 ? 'good' : metrics.fid <= 300 ? 'needs-improvement' : 'poor'}
          />
          <MetricCard
            title="CLS"
            value={metrics.cls.toFixed(3)}
            description="Cumulative Layout Shift"
            icon={<TrendingUp className="w-5 h-5" />}
            status={metrics.cls <= 0.1 ? 'good' : metrics.cls <= 0.25 ? 'needs-improvement' : 'poor'}
          />
        </div>
      </div>

      {/* Additional Metrics */}
      {showDetails && (
        <>
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricCard
                title="TTFB"
                value={`${Math.round(metrics.ttfb)}ms`}
                description="Time to First Byte"
                icon={<Network className="w-5 h-5" />}
                status={metrics.ttfb <= 600 ? 'good' : 'needs-improvement'}
              />
              <MetricCard
                title="DOM Load"
                value={`${Math.round(metrics.domLoad)}ms`}
                description="DOM Content Loaded"
                icon={<HardDrive className="w-5 h-5" />}
                status="info"
              />
              <MetricCard
                title="Window Load"
                value={`${Math.round(metrics.windowLoad)}ms`}
                description="Window Load Event"
                icon={<Gauge className="w-5 h-5" />}
                status="info"
              />
            </div>
          </div>

          {/* Memory and Network Info */}
          {(metrics.memoryUsage || metrics.networkInfo) && (
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">System Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {metrics.memoryUsage && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Memory Usage</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Used:</span>
                        <span className="font-mono">{metrics.memoryUsage.used} MB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total:</span>
                        <span className="font-mono">{metrics.memoryUsage.total} MB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Limit:</span>
                        <span className="font-mono">{metrics.memoryUsage.limit} MB</span>
                      </div>
                    </div>
                  </div>
                )}
                {metrics.networkInfo && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Network</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-mono">{metrics.networkInfo.effectiveType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Downlink:</span>
                        <span className="font-mono">{metrics.networkInfo.downlink} Mbps</span>
                      </div>
                      <div className="flex justify-between">
                        <span>RTT:</span>
                        <span className="font-mono">{metrics.networkInfo.rtt} ms</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Recommendations */}
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recommendations</h3>
        <div className="space-y-3">
          {metrics.recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg"
            >
              <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-800">{recommendation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  status: 'good' | 'needs-improvement' | 'poor' | 'info';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, description, icon, status }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'good': return 'Good';
      case 'needs-improvement': return 'Needs Improvement';
      case 'poor': return 'Poor';
      default: return 'Info';
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {icon}
          <span className="font-medium text-gray-900">{title}</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </span>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default PerformanceDashboard;