import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Zap, 
  Database,
  Network,
  Cpu,
  HardDrive,
  BarChart3,
  RefreshCw,
  Settings,
  Info,
  X,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  change: number;
  timestamp: Date;
}

interface BundleInfo {
  name: string;
  size: number;
  gzipSize: number;
  brotliSize: number;
  dependencies: string[];
  lastModified: Date;
}

interface PerformanceDashboardProps {
  enabled?: boolean;
  showRealTime?: boolean;
  refreshInterval?: number;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  enabled = true,
  showRealTime = true,
  refreshInterval = 5000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [bundleInfo, setBundleInfo] = useState<BundleInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  // Core Web Vitals thresholds
  const thresholds = {
    fcp: { good: 1800, warning: 3000, critical: 4000 },
    lcp: { good: 2500, warning: 4000, critical: 6000 },
    fid: { good: 100, warning: 300, critical: 500 },
    cls: { good: 0.1, warning: 0.25, critical: 0.4 },
    ttfb: { good: 800, warning: 1800, critical: 3000 }
  };

  // Generate mock performance data for demonstration
  const generateMockMetrics = useCallback((): PerformanceMetric[] => {
    const now = new Date();
    return [
      {
        name: 'First Contentful Paint (FCP)',
        value: Math.random() * 2000 + 800,
        unit: 'ms',
        status: 'good',
        trend: 'stable',
        change: Math.random() * 10 - 5,
        timestamp: now
      },
      {
        name: 'Largest Contentful Paint (LCP)',
        value: Math.random() * 3000 + 1500,
        unit: 'ms',
        status: 'good',
        trend: 'stable',
        change: Math.random() * 15 - 7,
        timestamp: now
      },
      {
        name: 'First Input Delay (FID)',
        value: Math.random() * 200 + 50,
        unit: 'ms',
        status: 'good',
        trend: 'stable',
        change: Math.random() * 8 - 4,
        timestamp: now
      },
      {
        name: 'Cumulative Layout Shift (CLS)',
        value: Math.random() * 0.2 + 0.05,
        unit: '',
        status: 'good',
        trend: 'stable',
        change: Math.random() * 0.02 - 0.01,
        timestamp: now
      },
      {
        name: 'Time to First Byte (TTFB)',
        value: Math.random() * 1500 + 500,
        unit: 'ms',
        status: 'good',
        trend: 'stable',
        change: Math.random() * 12 - 6,
        timestamp: now
      }
    ];
  }, []);

  // Generate mock bundle information
  const generateMockBundleInfo = useCallback((): BundleInfo[] => {
    const now = new Date();
    return [
      {
        name: 'main.js',
        size: 1024 * 1024 * 2.5, // 2.5MB
        gzipSize: 1024 * 512, // 512KB
        brotliSize: 1024 * 400, // 400KB
        dependencies: ['react', 'react-dom', 'framer-motion'],
        lastModified: now
      },
      {
        name: 'vendor.js',
        size: 1024 * 1024 * 1.8, // 1.8MB
        gzipSize: 1024 * 450, // 450KB
        brotliSize: 1024 * 350, // 350KB
        dependencies: ['lodash', 'axios', 'moment'],
        lastModified: now
      },
      {
        name: 'styles.css',
        size: 1024 * 256, // 256KB
        gzipSize: 1024 * 64, // 64KB
        brotliSize: 1024 * 50, // 50KB
        dependencies: ['tailwindcss', 'framer-motion'],
        lastModified: now
      }
    ];
  }, []);

  // Refresh performance data
  const refreshData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newMetrics = generateMockMetrics();
      const newBundleInfo = generateMockBundleInfo();
      
      setMetrics(newMetrics);
      setBundleInfo(newBundleInfo);
      setLastRefresh(new Date());
    } catch (error) {
      console.error('Failed to refresh performance data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [generateMockMetrics, generateMockBundleInfo]);

  // Auto-refresh data
  useEffect(() => {
    if (!enabled || !showRealTime) return;

    refreshData();
    const interval = setInterval(refreshData, refreshInterval);

    return () => clearInterval(interval);
  }, [enabled, showRealTime, refreshInterval, refreshData]);

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'critical': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  // Get trend icon
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-green-500" />;
      default: return <Activity className="w-4 h-4 text-blue-500" />;
    }
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Calculate performance score
  const performanceScore = useMemo(() => {
    if (metrics.length === 0) return 0;
    
    const scores = metrics.map(metric => {
      const threshold = thresholds[metric.name.toLowerCase().split(' ')[0] as keyof typeof thresholds];
      if (!threshold) return 100;
      
      if (metric.value <= threshold.good) return 100;
      if (metric.value <= threshold.warning) return 70;
      if (metric.value <= threshold.critical) return 40;
      return 20;
    });
    
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }, [metrics]);

  if (!enabled) return null;

  return (
    <>
      {/* Floating Performance Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(!isVisible)}
          className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center text-white"
          aria-label="Performance Dashboard"
        >
          <Activity className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Performance Dashboard Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-24 right-6 z-40 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden ${
              isExpanded ? 'w-96 h-96' : 'w-80 h-64'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5" />
                <h3 className="font-semibold">Performance Dashboard</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-full overflow-y-auto">
              {/* Performance Score */}
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 dark:text-white">
                  {performanceScore}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Performance Score
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      performanceScore >= 80 ? 'bg-green-500' :
                      performanceScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${performanceScore}%` }}
                  />
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 gap-3">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(metric.status)}`} />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {metric.name}
                        </span>
                      </div>
                      {getTrendIcon(metric.trend)}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold text-gray-800 dark:text-white">
                        {metric.value.toFixed(metric.unit === '' ? 3 : 0)}{metric.unit}
                      </span>
                      <span className={`text-sm ${
                        metric.change > 0 ? 'text-red-500' : 'text-green-500'
                      }`}>
                        {metric.change > 0 ? '+' : ''}{metric.change.toFixed(1)}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bundle Information (Expanded View) */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-3"
                >
                  <h4 className="font-semibold text-gray-800 dark:text-white flex items-center space-x-2">
                    <Database className="w-4 h-4" />
                    <span>Bundle Analysis</span>
                  </h4>
                  {bundleInfo.map((bundle, index) => (
                    <div key={bundle.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {bundle.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {bundle.lastModified.toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center">
                          <div className="font-semibold text-gray-800 dark:text-white">
                            {formatFileSize(bundle.size)}
                          </div>
                          <div className="text-gray-500">Original</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-green-600">
                            {formatFileSize(bundle.gzipSize)}
                          </div>
                          <div className="text-gray-500">Gzip</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-blue-600">
                            {formatFileSize(bundle.brotliSize)}
                          </div>
                          <div className="text-gray-500">Brotli</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={refreshData}
                  disabled={isLoading}
                  className="flex items-center space-x-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg transition-colors text-sm"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
                <div className="text-xs text-gray-500">
                  Last: {lastRefresh.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};