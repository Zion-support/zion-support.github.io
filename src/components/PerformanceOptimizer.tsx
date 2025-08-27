import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  X,
  Gauge,
  Clock,
  HardDrive,
  Wifi,
  Cpu,
  Memory
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
  memoryUsage?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

interface OptimizationSuggestion {
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  action?: string;
}

export function PerformanceOptimizer() {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics | null>(null);

  // Performance thresholds
  const THRESHOLDS = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };

  // Initialize performance monitoring
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      try {
        // Monitor Core Web Vitals
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              updateMetric('lcp', entry.startTime);
            } else if (entry.entryType === 'first-input') {
              updateMetric('fid', entry.processingStart - entry.startTime);
            } else if (entry.entryType === 'layout-shift') {
              const layoutShiftEntry = entry as any;
              if (!layoutShiftEntry.hadRecentInput) {
                updateMetric('cls', layoutShiftEntry.value);
              }
            }
          });
        });

        observerRef.current.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

        // Get initial metrics
        setTimeout(() => {
          collectInitialMetrics();
        }, 1000);

        setIsMonitoring(true);
      } catch (error) {
        console.warn('Performance monitoring initialization failed:', error);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Collect initial performance metrics
  const collectInitialMetrics = useCallback(() => {
    if ('performance' in window) {
      const perf = window.performance;
      const navigation = perf.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const newMetrics: PerformanceMetrics = {
          fcp: 0,
          lcp: 0,
          fid: 0,
          cls: 0,
          ttfb: navigation.responseStart - navigation.requestStart,
          domLoad: navigation.domContentLoadedEventEnd - navigation.navigationStart,
          windowLoad: navigation.loadEventEnd - navigation.navigationStart
        };

        // Get FCP from Performance Paint Timing
        const paintEntries = perf.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          newMetrics.fcp = fcpEntry.startTime;
        }

        // Get memory usage if available
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          newMetrics.memoryUsage = {
            usedJSHeapSize: memory.usedJSHeapSize,
            totalJSHeapSize: memory.totalJSHeapSize,
            jsHeapSizeLimit: memory.jsHeapSizeLimit
          };
        }

        setMetrics(newMetrics);
        metricsRef.current = newMetrics;
        generateSuggestions(newMetrics);
        setIsVisible(true);
      }
    }
  }, []);

  // Update specific metric
  const updateMetric = useCallback((key: keyof PerformanceMetrics, value: number) => {
    if (metricsRef.current) {
      const updatedMetrics = { ...metricsRef.current, [key]: value };
      setMetrics(updatedMetrics);
      metricsRef.current = updatedMetrics;
      generateSuggestions(updatedMetrics);
    }
  }, []);

  // Generate optimization suggestions based on metrics
  const generateSuggestions = useCallback((currentMetrics: PerformanceMetrics) => {
    const newSuggestions: OptimizationSuggestion[] = [];

    // FCP suggestions
    if (currentMetrics.fcp > THRESHOLDS.fcp.poor) {
      newSuggestions.push({
        id: 'fcp-slow',
        type: 'critical',
        title: 'Slow First Contentful Paint',
        description: 'Your page takes too long to display the first content. Consider optimizing critical resources.',
        impact: 'high',
        action: 'Optimize critical rendering path, minimize render-blocking resources'
      });
    } else if (currentMetrics.fcp > THRESHOLDS.fcp.good) {
      newSuggestions.push({
        id: 'fcp-improve',
        type: 'warning',
        title: 'First Contentful Paint Could Be Better',
        description: 'Your FCP is acceptable but could be improved for better user experience.',
        impact: 'medium',
        action: 'Consider lazy loading non-critical resources'
      });
    }

    // LCP suggestions
    if (currentMetrics.lcp > THRESHOLDS.lcp.poor) {
      newSuggestions.push({
        id: 'lcp-slow',
        type: 'critical',
        title: 'Slow Largest Contentful Paint',
        description: 'The main content takes too long to load. This significantly impacts user experience.',
        impact: 'high',
        action: 'Optimize images, implement lazy loading, use CDN'
      });
    }

    // CLS suggestions
    if (currentMetrics.cls > THRESHOLDS.cls.poor) {
      newSuggestions.push({
        id: 'cls-poor',
        type: 'critical',
        title: 'Poor Cumulative Layout Shift',
        description: 'Page elements are shifting during load, causing poor user experience.',
        impact: 'high',
        action: 'Set explicit dimensions for images and media, avoid inserting content above existing content'
      });
    }

    // TTFB suggestions
    if (currentMetrics.ttfb > THRESHOLDS.ttfb.poor) {
      newSuggestions.push({
        id: 'ttfb-slow',
        type: 'warning',
        title: 'Slow Time to First Byte',
        description: 'Server response time is slow. Consider server-side optimizations.',
        impact: 'medium',
        action: 'Optimize server response, use CDN, implement caching'
      });
    }

    // Memory usage suggestions
    if (currentMetrics.memoryUsage) {
      const memoryUsagePercent = (currentMetrics.memoryUsage.usedJSHeapSize / currentMetrics.memoryUsage.jsHeapSizeLimit) * 100;
      if (memoryUsagePercent > 80) {
        newSuggestions.push({
          id: 'memory-high',
          type: 'warning',
          title: 'High Memory Usage',
          description: 'JavaScript memory usage is high, which could lead to performance issues.',
          impact: 'medium',
          action: 'Review memory leaks, optimize data structures, implement cleanup'
        });
      }
    }

    // General suggestions
    if (newSuggestions.length === 0) {
      newSuggestions.push({
        id: 'performance-good',
        type: 'info',
        title: 'Performance Looking Good!',
        description: 'Your page performance metrics are within good thresholds. Keep up the good work!',
        impact: 'low'
      });
    }

    setSuggestions(newSuggestions);
  }, []);

  // Get performance score
  const getPerformanceScore = useCallback(() => {
    if (!metrics) return 0;

    let score = 100;
    let totalWeight = 0;

    // FCP weight: 25%
    if (metrics.fcp > THRESHOLDS.fcp.poor) score -= 25;
    else if (metrics.fcp > THRESHOLDS.fcp.good) score -= 12.5;
    totalWeight += 25;

    // LCP weight: 25%
    if (metrics.lcp > THRESHOLDS.lcp.poor) score -= 25;
    else if (metrics.lcp > THRESHOLDS.lcp.good) score -= 12.5;
    totalWeight += 25;

    // FID weight: 25%
    if (metrics.fid > THRESHOLDS.fid.poor) score -= 25;
    else if (metrics.fid > THRESHOLDS.fid.good) score -= 12.5;
    totalWeight += 25;

    // CLS weight: 25%
    if (metrics.cls > THRESHOLDS.cls.poor) score -= 25;
    else if (metrics.cls > THRESHOLDS.cls.good) score -= 12.5;
    totalWeight += 25;

    return Math.max(0, Math.round(score));
  }, [metrics]);

  // Get score color
  const getScoreColor = useCallback((score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  }, []);

  // Get score label
  const getScoreLabel = useCallback((score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-slate-800/95 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-6 w-96 max-h-[80vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
                  <p className="text-sm text-gray-400">Real-time metrics & suggestions</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Performance Score */}
            {metrics && (
              <div className="mb-6 p-4 bg-slate-700/50 rounded-xl">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(getPerformanceScore())}`}>
                    {getPerformanceScore()}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {getScoreLabel(getPerformanceScore())}
                  </div>
                </div>
              </div>
            )}

            {/* Metrics Grid */}
            {metrics && (
              <div className="grid grid-cols-2 gap-3 mb-6">
                <MetricCard
                  label="FCP"
                  value={`${Math.round(metrics.fcp)}ms`}
                  status={getMetricStatus(metrics.fcp, THRESHOLDS.fcp)}
                  icon={Clock}
                />
                <MetricCard
                  label="LCP"
                  value={`${Math.round(metrics.lcp)}ms`}
                  status={getMetricStatus(metrics.lcp, THRESHOLDS.lcp)}
                  icon={TrendingUp}
                />
                <MetricCard
                  label="FID"
                  value={`${Math.round(metrics.fid)}ms`}
                  status={getMetricStatus(metrics.fid, THRESHOLDS.fid)}
                  icon={Zap}
                />
                <MetricCard
                  label="CLS"
                  value={metrics.cls.toFixed(3)}
                  status={getMetricStatus(metrics.cls, THRESHOLDS.cls)}
                  icon={AlertTriangle}
                />
              </div>
            )}

            {/* Memory Usage */}
            {metrics?.memoryUsage && (
              <div className="mb-6 p-4 bg-slate-700/50 rounded-xl">
                <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                  <Memory className="w-4 h-4" />
                  Memory Usage
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Used:</span>
                    <span className="text-white">{formatBytes(metrics.memoryUsage.usedJSHeapSize)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total:</span>
                    <span className="text-white">{formatBytes(metrics.memoryUsage.totalJSHeapSize)}</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div
                      className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(metrics.memoryUsage.usedJSHeapSize / metrics.memoryUsage.jsHeapSizeLimit) * 100}%`
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Optimization Suggestions */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-300">Optimization Suggestions</h4>
              {suggestions.map((suggestion) => (
                <SuggestionCard key={suggestion.id} suggestion={suggestion} />
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-slate-700/50">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Monitoring: {isMonitoring ? 'Active' : 'Inactive'}</span>
                <span>Updated: {new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            className="w-14 h-14 bg-cyan-600 hover:bg-cyan-700 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-200"
          >
            <Gauge className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// Helper components
function MetricCard({ label, value, status, icon: Icon }: {
  label: string;
  value: string;
  status: 'good' | 'needs-improvement' | 'poor';
  icon: React.ComponentType<{ className?: string }>;
}) {
  const statusColors = {
    good: 'text-green-400',
    'needs-improvement': 'text-yellow-400',
    poor: 'text-red-400'
  };

  return (
    <div className="p-3 bg-slate-700/50 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-gray-400" />
        <span className="text-xs text-gray-400">{label}</span>
      </div>
      <div className={`text-lg font-semibold ${statusColors[status]}`}>
        {value}
      </div>
    </div>
  );
}

function SuggestionCard({ suggestion }: { suggestion: OptimizationSuggestion }) {
  const typeColors = {
    critical: 'border-red-500/30 bg-red-500/10',
    warning: 'border-yellow-500/30 bg-yellow-500/10',
    info: 'border-cyan-500/30 bg-cyan-500/10'
  };

  const typeIcons = {
    critical: AlertTriangle,
    warning: AlertTriangle,
    info: Info
  };

  const Icon = typeIcons[suggestion.type];

  return (
    <div className={`p-3 rounded-lg border ${typeColors[suggestion.type]}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
          suggestion.type === 'critical' ? 'text-red-400' :
          suggestion.type === 'warning' ? 'text-yellow-400' :
          'text-cyan-400'
        }`} />
        <div className="flex-1">
          <h5 className="text-sm font-medium text-white mb-1">{suggestion.title}</h5>
          <p className="text-xs text-gray-300 mb-2">{suggestion.description}</p>
          {suggestion.action && (
            <p className="text-xs text-cyan-400 font-medium">{suggestion.action}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper functions
function getMetricStatus(value: number, thresholds: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' {
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export default PerformanceOptimizer;
