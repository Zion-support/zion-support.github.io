<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Activity,
  AlertTriangle, 
  CheckCircle,
  X,
  RefreshCw,
  BarChart3,
  Gauge
} from 'lucide-react',

interface PerformanceMetrics {
  fcp: number,
  lcp: number,
  fid: number,
  cls: number,
  ttfb: number,
  domLoad: number,
  windowLoad: number,
  memoryUsage?: {
    usedJSHeapSize: number,
    totalJSHeapSize: number,
    jsHeapSizeLimit: number
  },
  networkInfo?: {
    effectiveType: string,
    downlink: number,
    rtt: number
  }
}

interface PerformanceRecommendation {
  id: string,
  title: string,
  description: string,
  priority: 'high' | 'medium' | 'low',
  impact: string,
  solution: string,
  category: 'performance' | 'accessibility' | 'seo' | 'user-experience'
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]),
  const [isMonitoring, setIsMonitoring] = useState(false),
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null),

  const generateRecommendations = useCallback((metrics: PerformanceMetrics): PerformanceRecommendation[] => {
    const recs: PerformanceRecommendation[] = [],
=======
import React, {_useState, _useEffect, _useCallback} from 'react';
import {_Activity, _AlertTriangle, _CheckCircle, _X, _RefreshCw, _BarChart3, _Gauge} from 'lucide-react';

interface PerformanceMetrics {_fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
  memoryUsage?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;};
  networkInfo?: {_effectiveType: string;
    downlink: number;
    rtt: number;};
}

interface PerformanceRecommendation {_id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: string;
  solution: string;
  category: 'performance' | 'accessibility' | 'seo' | 'user-experience';}

const EnhancedPerformanceMonitor: React.FC = () => {_const [isVisible, _setIsVisible] = useState(false);
  const [metrics, _setMetrics] = useState<PerformanceMetrics | null>(null);
  const [recommendations, _setRecommendations] = useState<PerformanceRecommendation[]>([]);
  const [isMonitoring, _setIsMonitoring] = useState(false);
  const [lastUpdate, _setLastUpdate] = useState<Date | null>(null);

  const _generateRecommendations = useCallback((metrics: PerformanceMetrics): PerformanceRecommendation[] => {
    const recs: PerformanceRecommendation[] = [];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // FCP recommendations
    if (metrics.fcp > 2000) {
      recs.push({
<<<<<<< HEAD
        id: 'fcp-optimization',
        title: 'First Contentful Paint Optimization',
        description: 'FCP is above the recommended 2-second threshold',
        priority: 'high',
        impact: 'High impact on user perception of site speed',
        solution: 'Optimize critical rendering path, reduce server response time, eliminate render-blocking resources',
        category: 'performance'
      })
    }

    // LCP recommendations
    if (metrics.lcp > 2500) {
      recs.push({
        id: 'lcp-optimization',
        title: 'Largest Contentful Paint Optimization',
        description: 'LCP is above the recommended 2.5-second threshold',
        priority: 'high',
        impact: 'High impact on user experience and Core Web Vitals',
        solution: 'Optimize images, implement lazy loading, use CDN, optimize server response time',
        category: 'performance'
      })
    }

    // CLS recommendations
    if (metrics.cls > 0.1) {
      recs.push({
        id: 'cls-optimization',
        title: 'Cumulative Layout Shift Reduction',
        description: 'CLS is above the recommended 0.1 threshold',
        priority: 'medium',
        impact: 'Medium impact on user experience and visual stability',
        solution: 'Set explicit dimensions for images and videos, avoid inserting content above existing content',
        category: 'user-experience'
      })
    }

    // Memory usage recommendations
    if (metrics.memoryUsage && metrics.memoryUsage.usedJSHeapSize > 50 * 1024 * 1024) {
      recs.push({
        id: 'memory-optimization',
        title: 'Memory Usage Optimization',
        description: 'JavaScript heap usage is above 50MB',
        priority: 'medium',
        impact: 'Medium impact on long-term performance and stability',
        solution: 'Implement memory cleanup, optimize component lifecycle, use React.memo and useMemo',
        category: 'performance'
      })
    }

    // Network recommendations
    if (metrics.networkInfo && metrics.networkInfo.effectiveType === 'slow-2g') {
      recs.push({
        id: 'network-optimization',
        title: 'Network Performance Optimization',
        description: 'Network connection is slow, affecting user experience',
        priority: 'high',
        impact: 'High impact on all performance metrics',
        solution: 'Implement service workers, optimize bundle size, use progressive loading',
        category: 'performance'
      })
=======
        id: 'fcp-optimization', _title: 'First Contentful Paint Optimization', _description: 'FCP is above the recommended 2-second threshold', _priority: 'high', _impact: 'High impact on user perception of site speed', _solution: 'Optimize critical rendering path, _reduce server response time, _eliminate render-blocking resources', _category: 'performance'});
    }

    // LCP recommendations
    if (metrics.lcp > 2500) {_recs.push({
        id: 'lcp-optimization', _title: 'Largest Contentful Paint Optimization', _description: 'LCP is above the recommended 2.5-second threshold', _priority: 'high', _impact: 'High impact on user experience and Core Web Vitals', _solution: 'Optimize images, _implement lazy loading, _use CDN, _optimize server response time', _category: 'performance'});
    }

    // CLS recommendations
    if (metrics.cls > 0.1) {_recs.push({
        id: 'cls-optimization', _title: 'Cumulative Layout Shift Reduction', _description: 'CLS is above the recommended 0.1 threshold', _priority: 'medium', _impact: 'Medium impact on user experience and visual stability', _solution: 'Set explicit dimensions for images and videos, _avoid inserting content above existing content', _category: 'user-experience'});
    }

    // Memory usage recommendations
    if (metrics.memoryUsage && metrics.memoryUsage.usedJSHeapSize > 50 * 1024 * 1024) {_recs.push({
        id: 'memory-optimization', _title: 'Memory Usage Optimization', _description: 'JavaScript heap usage is above 50MB', _priority: 'medium', _impact: 'Medium impact on long-term performance and stability', _solution: 'Implement memory cleanup, _optimize component lifecycle, _use React.memo and useMemo', _category: 'performance'});
    }

    // Network recommendations
    if (metrics.networkInfo && metrics.networkInfo.effectiveType === 'slow-2g') {_recs.push({
        id: 'network-optimization', _title: 'Network Performance Optimization', _description: 'Network connection is slow, _affecting user experience', _priority: 'high', _impact: 'High impact on all performance metrics', _solution: 'Implement service workers, _optimize bundle size, _use progressive loading', _category: 'performance'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    return recs
  }, []),

<<<<<<< HEAD
  const measurePerformance = useCallback(async () => {
    try {
      setIsMonitoring(true),
=======
  const _measurePerformance = useCallback(_async () => {_try {
      setIsMonitoring(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Wait for page to be fully loaded
      if (document.readyState !== 'complete') {
        await new Promise(resolve => {
<<<<<<< HEAD
          window.addEventListener('load', resolve, { once: true })
        })
=======
          window.addEventListener('load', _resolve, _{ once: true});
        });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }

      // Wait a bit more for any async operations
      await new Promise(resolve => setTimeout(resolve, 1000)),

<<<<<<< HEAD
      const navigation = window.window.window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
      const paint = window.window.window.performance.getEntriesByType('paint'),
      
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      const lcp = await new Promise<number>((resolve) => {
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries(),
            const lastEntry = entries[entries.length - 1],
            resolve(lastEntry.startTime)
          }),
          observer.observe({ entryTypes: ['largest-contentful-paint'] }),
          
          // Fallback timeout
          setTimeout(() => resolve(0), 5000)
        } else {
          resolve(0)
        }
      }),

      const metrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid: 0, // Would need user interaction to measure
        cls: 0, // Would need PerformanceObserver for CLS
        ttfb: navigation.responseStart - navigation.requestStart,
        domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        windowLoad: navigation.loadEventEnd - navigation.loadEventStart,
        memoryUsage: 'memory' in performance ? (performance as any).memory : undefined,
        networkInfo: 'connection' in navigator ? (navigator as any).connection : undefined
      },

      setMetrics(metrics),
      setRecommendations(generateRecommendations(metrics)),
      setLastUpdate(new Date())
    } catch {
      // Performance measurement failed
    } finally {
      setIsMonitoring(false)
    }
  }, [generateRecommendations]),

  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100,
=======
      const _navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const _paint = performance.getEntriesByType('paint');
      
      const _fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const _lcp = await new Promise<number>(_(resolve) => {_if ('PerformanceObserver' in window) {
          const _observer = new PerformanceObserver(_(list) => {
            const _entries = list.getEntries();
            const _lastEntry = entries[entries.length - 1];
            resolve(lastEntry.startTime);});
          observer.observe({_entryTypes: ['largest-contentful-paint']});
          
          // Fallback timeout
          setTimeout__(() => resolve(0), 5000);
        } else {_resolve(0);}
      });

      const metrics: PerformanceMetrics = {_fcp, _lcp, _fid: 0, _// Would need user interaction to measure
        cls: 0, _// Would need PerformanceObserver for CLS
        ttfb: navigation.responseStart - navigation.requestStart, _domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart, _windowLoad: navigation.loadEventEnd - navigation.loadEventStart, _memoryUsage: 'memory' in performance ? (performance as any).memory : undefined, _networkInfo: 'connection' in navigator ? (navigator as any).connection : undefined};

      setMetrics(metrics);
      setRecommendations(generateRecommendations(metrics));
      setLastUpdate(new Date());
    } catch {_// Performance measurement failed} finally {_setIsMonitoring(false);}
  }, [generateRecommendations]);

  const _getPerformanceScore = (metrics: PerformanceMetrics): number => {_let _score = 100;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (metrics.fcp > 2000) score -= 20,
    if (metrics.lcp > 2500) score -= 25,
    if (metrics.cls > 0.1) score -= 15,
    if (metrics.ttfb > 600) score -= 20,
    
<<<<<<< HEAD
    return Math.max(0, score)
  },

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400',
    if (score >= 70) return 'text-yellow-400',
    return 'text-red-400'
  },

  const getOverallScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-500/20',
    if (score >= 70) return 'bg-yellow-500/20',
    return 'bg-red-500/20'
  },
=======
    return Math.max(0, _score);};

  const _getScoreColor = (score: number): string => {_if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';};

  const _getOverallScoreBg = (_score: number) => {_if (score >= 90) return 'bg-green-500/20';
    if (score >= 70) return 'bg-yellow-500/20';
    return 'bg-red-500/20';};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!performanceData) {_return (
      <div className={`p-4 bg-gray-900 rounded-lg border border-gray-700 ${className}`}>
        <div className=&quot;animate-pulse&quot;>
          <div className=&quot;h-4 bg-gray-700 rounded w-1/3 mb-4&quot;></div>
          <div className=&quot;space-y-3&quot;>
            <div className=&quot;h-3 bg-gray-700 rounded&quot;></div>
            <div className=&quot;h-3 bg-gray-700 rounded w-5/6&quot;></div>
            <div className=&quot;h-3 bg-gray-700 rounded w-4/6&quot;></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className={_`bg-gray-900 rounded-lg border border-gray-700 overflow-hidden ${className}`}
      initial={_{ opacity: 0, _y: 20}}
      animate={_{ opacity: 1, _y: 0}}
    >
<<<<<<< HEAD
      {/* Header */}
      <div className=&quot;p-4 bg-gray-800/50 border-b border-gray-700&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <div className=&quot;flex items-center space-x-3&quot;>
            <div className=&quot;p-2 bg-blue-500/20 rounded-lg&quot;>
              <Activity className=&quot;w-5 h-5 text-blue-400&quot; />
            </div>
            <div>
              <h3 className=&quot;text-white font-semibold&quot;>Performance Monitor</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                Last updated: {lastUpdate.toLocaleTimeString()}
=======
      {_/* Header */}
      <div className="p-4 bg-gray-800/50 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Performance Monitor</h3>
              <p className="text-gray-400 text-sm">
                Last updated: {_lastUpdate.toLocaleTimeString()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
            </div>
          </div>
          <div className=&quot;flex items-center space-x-2&quot;>
            <button
<<<<<<< HEAD
              onClick={() => setShowDetails(!showDetails)}
              className=&quot;p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors&quot;
              title={showDetails ? 'Hide details' : 'Show details'}
=======
              onClick={_() => setShowDetails(!showDetails)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
              title={_showDetails ? 'Hide details' : 'Show details'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <BarChart3 className=&quot;w-4 h-4&quot; />
            </button>
            <button
<<<<<<< HEAD
              onClick={updatePerformanceData}
              disabled={isLoading}
              className=&quot;p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors disabled:opacity-50&quot;
              title=&quot;Refresh data&quot;
=======
              onClick={_updatePerformanceData}
              disabled={_isLoading}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors disabled:opacity-50"
              title="Refresh data"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <RefreshCw className={_`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
<<<<<<< HEAD
              onClick={() => setIsExpanded(!isExpanded)}
              className=&quot;p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors&quot;
              title={isExpanded ? 'Collapse' : 'Expand'}
=======
              onClick={_() => setIsExpanded(!isExpanded)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
              title={_isExpanded ? 'Collapse' : 'Expand'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Settings className=&quot;w-4 h-4&quot; />
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Overall Score */}
      <div className=&quot;p-4&quot;>
        <div className=&quot;text-center mb-6&quot;>
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getOverallScoreBg(performanceData.overallScore)} mb-3`}>
            <span className={`text-2xl font-bold ${getOverallScoreColor(performanceData.overallScore)}`}>
              {performanceData.overallScore}
            </span>
          </div>
          <h4 className=&quot;text-white font-semibold mb-1&quot;>Performance Score</h4>
          <p className=&quot;text-gray-400 text-sm&quot;>
            {performanceData.overallScore >= 90 ? 'Excellent' : 
=======
      {_/* Overall Score */}
      <div className="p-4">
        <div className="text-center mb-6">
          <div className={_`inline-flex items-center justify-center w-20 h-20 rounded-full ${getOverallScoreBg(performanceData.overallScore)} mb-3`}>
            <span className={_`text-2xl font-bold ${getOverallScoreColor(performanceData.overallScore)}`}>
              {_performanceData.overallScore}
            </span>
          </div>
          <h4 className="text-white font-semibold mb-1">Performance Score</h4>
          <p className="text-gray-400 text-sm">
            {_performanceData.overallScore >= 90 ? 'Excellent' : 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
             performanceData.overallScore >= 70 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>

<<<<<<< HEAD
              {/* Metrics */}
              {metrics && (
                <div className=&quot;bg-gray-800 rounded-lg p-4 border border-gray-700&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white mb-3&quot;>Core Web Vitals</h3>
                  <div className=&quot;space-y-3&quot;>
                    <div className=&quot;flex justify-between items-center&quot;>
                      <span className=&quot;text-gray-300&quot;>FCP</span>
=======
              {_/* Metrics */}
              {_metrics && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Core Web Vitals</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">FCP</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <span className={`font-mono ${metrics.fcp > 2000 ? 'text-red-400' : 'text-green-400'}`}>
                        {_metrics.fcp.toFixed(0)}ms
                      </span>
                    </div>
<<<<<<< HEAD
                    <div className=&quot;flex justify-between items-center&quot;>
                      <span className=&quot;text-gray-300&quot;>LCP</span>
                      <span className={`font-mono ${metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}`}>
                        {metrics.lcp.toFixed(0)}ms
                      </span>
                    </div>
                    <div className=&quot;flex justify-between items-center&quot;>
                      <span className=&quot;text-gray-300&quot;>CLS</span>
                      <span className={`font-mono ${metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}`}>
                        {metrics.cls.toFixed(3)}
                      </span>
                    </div>
                    <div className=&quot;flex justify-between items-center&quot;>
                      <span className=&quot;text-gray-300&quot;>TTFB</span>
                      <span className={`font-mono ${metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}`}>
                        {metrics.ttfb.toFixed(0)}ms
=======
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">LCP</span>
                      <span className={_`font-mono ${metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}`}>
                        {_metrics.lcp.toFixed(0)}ms
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">CLS</span>
                      <span className={_`font-mono ${metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}`}>
                        {_metrics.cls.toFixed(3)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">TTFB</span>
                      <span className={_`font-mono ${metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}`}>
                        {_metrics.ttfb.toFixed(0)}ms
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </span>
                    </div>
                  </div>
                </div>
              )}

<<<<<<< HEAD
              {/* Memory Usage */}
              {metrics?.memoryUsage && (
                <div className=&quot;bg-gray-800 rounded-lg p-4 border border-gray-700&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white mb-3&quot;>Memory Usage</h3>
                  <div className=&quot;space-y-2&quot;>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-gray-300&quot;>Used</span>
                      <span className=&quot;font-mono text-cyan-400&quot;>
                        {(metrics.memoryUsage.usedJSHeapSize / 1024 / 1024).toFixed(1)}MB
                      </span>
                    </div>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-gray-300&quot;>Total</span>
                      <span className=&quot;font-mono text-blue-400&quot;>
                        {(metrics.memoryUsage.totalJSHeapSize / 1024 / 1024).toFixed(1)}MB
=======
              {_/* Memory Usage */}
              {_metrics?.memoryUsage && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Memory Usage</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Used</span>
                      <span className="font-mono text-cyan-400">
                        {(metrics.memoryUsage.usedJSHeapSize / 1024 / 1024).toFixed(1)}MB
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total</span>
                      <span className="font-mono text-blue-400">
                        {_(metrics.memoryUsage.totalJSHeapSize / 1024 / 1024).toFixed(1)}MB
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </span>
                    </div>
                    <div className=&quot;w-full bg-gray-700 rounded-full h-2&quot;>
                      <div 
<<<<<<< HEAD
                        className=&quot;bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300&quot;
                        style={{ 
=======
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                        style={_{ 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          width: `${(metrics.memoryUsage.usedJSHeapSize / metrics.memoryUsage.totalJSHeapSize) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

<<<<<<< HEAD
              {/* Network Info */}
              {metrics?.networkInfo && (
                <div className=&quot;bg-gray-800 rounded-lg p-4 border border-gray-700&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white mb-3&quot;>Network</h3>
                  <div className=&quot;space-y-2&quot;>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-gray-300&quot;>Type</span>
                      <span className=&quot;font-mono text-green-400 capitalize&quot;>
                        {metrics.networkInfo.effectiveType}
                      </span>
                    </div>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-gray-300&quot;>Speed</span>
                      <span className=&quot;font-mono text-blue-400&quot;>
                        {metrics.networkInfo.downlink.toFixed(1)}Mbps
                      </span>
                    </div>
                    <div className=&quot;flex justify-between&quot;>
                      <span className=&quot;text-gray-300&quot;>RTT</span>
                      <span className=&quot;font-mono text-purple-400&quot;>
                        {metrics.networkInfo.rtt}ms
=======
              {_/* Network Info */}
              {_metrics?.networkInfo && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Network</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Type</span>
                      <span className="font-mono text-green-400 capitalize">
                        {metrics.networkInfo.effectiveType}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Speed</span>
                      <span className="font-mono text-blue-400">
                        {_metrics.networkInfo.downlink.toFixed(1)}Mbps
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">RTT</span>
                      <span className="font-mono text-purple-400">
                        {_metrics.networkInfo.rtt}ms
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </span>
                    </div>
                  </div>
                </div>
              )}

<<<<<<< HEAD
              {/* Recommendations */}
              {recommendations.length > 0 && (
                <div className=&quot;bg-gray-800 rounded-lg p-4 border border-gray-700&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white mb-3&quot;>Recommendations</h3>
                  <div className=&quot;space-y-3&quot;>
                    {recommendations.map((rec) => (
                      <div key={rec.id} className=&quot;border-l-4 border-cyan-500 pl-3&quot;>
                        <div className=&quot;flex items-start justify-between&quot;>
                          <h4 className=&quot;font-medium text-white text-sm&quot;>{rec.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded ${
=======
              {_/* Recommendations */}
              {_recommendations.length > 0 && (_<div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Recommendations</h3>
                  <div className="space-y-3">
                    {recommendations.map((rec) => (
                      <div key={rec.id} className="border-l-4 border-cyan-500 pl-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-white text-sm">{_rec.title}</h4>
                          <span className={_`text-xs px-2 py-1 rounded ${
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            rec.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                            rec.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-green-500/20 text-green-400'}`}>
                            {_rec.priority}
                          </span>
                        </div>
<<<<<<< HEAD
                        <p className=&quot;text-gray-400 text-xs mt-1&quot;>{rec.description}</p>
                        <p className=&quot;text-cyan-400 text-xs mt-1&quot;>{rec.solution}</p>
=======
                        <p className="text-gray-400 text-xs mt-1">{_rec.description}</p>
                        <p className="text-cyan-400 text-xs mt-1">{_rec.solution}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    ))}
                  </div>
                </div>
              )}

<<<<<<< HEAD
              {/* Action Buttons */}
              <div className=&quot;flex space-x-3&quot;>
                <button
                  onClick={measurePerformance}
                  disabled={isMonitoring}
                  className=&quot;flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2&quot;
                >
                  {isMonitoring ? (
                    <RefreshCw className=&quot;w-4 h-4 animate-spin&quot; />
=======
              {_/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={_measurePerformance}
                  disabled={_isMonitoring}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {_isMonitoring ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  ) : (
                    <BarChart3 className=&quot;w-4 h-4&quot; />
                  )}
                  <span>{_isMonitoring ? 'Measuring...' : 'Measure Performance'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
},

export default EnhancedPerformanceMonitor,