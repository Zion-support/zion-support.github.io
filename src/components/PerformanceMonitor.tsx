import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  HardDrive, 
  Network, 
  Smartphone,
  Monitor,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  X
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  memoryUsage: number;
  networkRequests: number;
}

interface PerformanceRecommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: string;
  action: string;
}

const PerformanceMonitor: React.FC<{ enabled?: boolean; showMetrics?: boolean }> = ({ 
  enabled = false, 
  showMetrics = false 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Performance thresholds
  const thresholds = useMemo(() => ({
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  }), []);

  // Generate performance recommendations
  const generateRecommendations = useCallback((currentMetrics: PerformanceMetrics) => {
    const recs: PerformanceRecommendation[] = [];

    if (currentMetrics.fcp > thresholds.fcp.poor) {
      recs.push({
        id: 'fcp-optimization',
        title: 'First Contentful Paint Optimization',
        description: 'FCP is above recommended threshold, affecting perceived performance',
        priority: 'high',
        impact: 'High impact on user experience',
        action: 'Optimize critical rendering path, reduce render-blocking resources'
      });
    }

    if (currentMetrics.lcp > thresholds.lcp.poor) {
      recs.push({
        id: 'lcp-optimization',
        title: 'Largest Contentful Paint Optimization',
        description: 'LCP is above recommended threshold, affecting page load performance',
        priority: 'high',
        impact: 'High impact on Core Web Vitals',
        action: 'Optimize images, implement lazy loading, reduce bundle size'
      });
    }

    if (currentMetrics.bundleSize > 500) {
      recs.push({
        id: 'bundle-optimization',
        title: 'Bundle Size Optimization',
        description: 'JavaScript bundle size could be reduced for faster loading',
        priority: 'medium',
        impact: 'Medium impact on initial load time',
        action: 'Implement code splitting, tree shaking, and dynamic imports'
      });
    }

    if (currentMetrics.memoryUsage > 50) {
      recs.push({
        id: 'memory-optimization',
        title: 'Memory Usage Optimization',
        description: 'Memory usage is above optimal levels',
        priority: 'medium',
        impact: 'Medium impact on long-term performance',
        action: 'Implement memory cleanup, optimize component lifecycle'
      });
    }

    setRecommendations(recs);
  }, [thresholds]);

  // Measure performance metrics
  const measurePerformance = useCallback(async () => {
    try {
      // Core Web Vitals
      const fcp = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;
      const lcp = performance.getEntriesByName('largest-contentful-paint')[0]?.startTime || 0;
      
      // Navigation timing
      const navigation = performance.getNavigation();
      const ttfb = navigation.responseStart - navigation.requestStart;
      
      // Memory usage
      const memory = (performance as any).memory;
      const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0;
      
      // Network requests
      const networkRequests = performance.getEntriesByType('resource').length;
      
      // Bundle size estimation (simplified)
      const bundleSize = document.querySelectorAll('script[src*=".js"]').length * 50; // Rough estimate
      
      const currentMetrics: PerformanceMetrics = {
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        fid: 0, // First Input Delay - would need user interaction
        cls: 0, // Cumulative Layout Shift - would need observer
        ttfb: Math.round(ttfb),
        bundleSize,
        memoryUsage,
        networkRequests
      };

      setMetrics(currentMetrics);
      generateRecommendations(currentMetrics);
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [generateRecommendations]);

  // Get performance score
  const getPerformanceScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    
    if (metrics.fcp > thresholds.fcp.poor) score -= 20;
    else if (metrics.fcp > thresholds.fcp.good) score -= 10;
    
    if (metrics.lcp > thresholds.lcp.poor) score -= 20;
    else if (metrics.lcp > thresholds.lcp.good) score -= 10;
    
    if (metrics.bundleSize > 500) score -= 15;
    if (metrics.memoryUsage > 50) score -= 10;
    
    return Math.max(0, score);
  }, [thresholds]);

  // Get performance color
  const getPerformanceColor = useCallback((score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const timer = setTimeout(() => {
      measurePerformance();
    }, 2000);

    return () => clearTimeout(timer);
  }, [enabled, measurePerformance]);

  if (!enabled || !showMetrics) return null;

  const performanceScore = metrics ? getPerformanceScore(metrics) : 0;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-w-sm">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <TrendingUp className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Performance Score */}
            <div className="p-4">
              <div className="text-center mb-4">
                <div className={`text-3xl font-bold ${getPerformanceColor(performanceScore)}`}>
                  {performanceScore}
                </div>
                <div className="text-sm text-gray-500">Performance Score</div>
              </div>

              {/* Key Metrics */}
              {metrics && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">FCP</span>
                    <span className={`text-sm font-medium ${
                      metrics.fcp <= thresholds.fcp.good ? 'text-green-600' : 
                      metrics.fcp <= thresholds.fcp.poor ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {metrics.fcp}ms
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">LCP</span>
                    <span className={`text-sm font-medium ${
                      metrics.lcp <= thresholds.lcp.good ? 'text-green-600' : 
                      metrics.lcp <= thresholds.lcp.poor ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {metrics.lcp}ms
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Bundle Size</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      ~{metrics.bundleSize}KB
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Memory</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {metrics.memoryUsage}MB
                    </span>
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {isExpanded && recommendations.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Optimization Tips</h4>
                  <div className="space-y-3">
                    {recommendations.slice(0, 3).map((rec) => (
                      <div key={rec.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className={`w-4 h-4 mt-0.5 ${
                            rec.priority === 'high' ? 'text-red-500' : 
                            rec.priority === 'medium' ? 'text-yellow-500' : 'text-blue-500'
                          }`} />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {rec.title}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {rec.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={measurePerformance}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-3 rounded-lg transition-colors"
                >
                  Refresh Metrics
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {isExpanded ? 'Less' : 'More'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Toggle Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          title="Show Performance Monitor"
        >
          <Activity className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default PerformanceMonitor;
