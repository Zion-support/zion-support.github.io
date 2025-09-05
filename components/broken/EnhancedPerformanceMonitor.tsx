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

    // FCP recommendations
    if (metrics.fcp > 2000) {
      recs.push({
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
    }

    return recs;
  }, []);

  const _measurePerformance = useCallback(_async () => {_try {
      setIsMonitoring(true);
      
      // Wait for page to be fully loaded
      if (document.readyState !== 'complete') {
        await new Promise(resolve => {
          window.addEventListener('load', _resolve, _{ once: true});
        });
      }

      // Wait a bit more for any async operations
      await new Promise(resolve => setTimeout(resolve, 1000));

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
    
    if (metrics.fcp > 2000) score -= 20;
    if (metrics.lcp > 2500) score -= 25;
    if (metrics.cls > 0.1) score -= 15;
    if (metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, _score);};

  const _getScoreColor = (score: number): string => {_if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';};

  const _getOverallScoreBg = (_score: number) => {_if (score >= 90) return 'bg-green-500/20';
    if (score >= 70) return 'bg-yellow-500/20';
    return 'bg-red-500/20';};

  if (!performanceData) {_return (
      <div className={`p-4 bg-gray-900 rounded-lg border border-gray-700 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-700 rounded"></div>
            <div className="h-3 bg-gray-700 rounded w-5/6"></div>
            <div className="h-3 bg-gray-700 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={_`bg-gray-900 rounded-lg border border-gray-700 overflow-hidden ${className}`}
      initial={_{ opacity: 0, _y: 20}}
      animate={_{ opacity: 1, _y: 0}}
    >
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
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={_() => setShowDetails(!showDetails)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
              title={_showDetails ? 'Hide details' : 'Show details'}
            >
              <BarChart3 className="w-4 h-4" />
            </button>
            <button
              onClick={_updatePerformanceData}
              disabled={_isLoading}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors disabled:opacity-50"
              title="Refresh data"
            >
              <RefreshCw className={_`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={_() => setIsExpanded(!isExpanded)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
              title={_isExpanded ? 'Collapse' : 'Expand'}
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

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
             performanceData.overallScore >= 70 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>

              {_/* Metrics */}
              {_metrics && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Core Web Vitals</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">FCP</span>
                      <span className={`font-mono ${metrics.fcp > 2000 ? 'text-red-400' : 'text-green-400'}`}>
                        {_metrics.fcp.toFixed(0)}ms
                      </span>
                    </div>
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
                      </span>
                    </div>
                  </div>
                </div>
              )}

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
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                        style={_{ 
                          width: `${(metrics.memoryUsage.usedJSHeapSize / metrics.memoryUsage.totalJSHeapSize) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

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
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {_/* Recommendations */}
              {_recommendations.length > 0 && (_<div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Recommendations</h3>
                  <div className="space-y-3">
                    {recommendations.map((rec) => (
                      <div key={rec.id} className="border-l-4 border-cyan-500 pl-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-white text-sm">{_rec.title}</h4>
                          <span className={_`text-xs px-2 py-1 rounded ${
                            rec.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                            rec.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-green-500/20 text-green-400'}`}>
                            {_rec.priority}
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">{_rec.description}</p>
                        <p className="text-cyan-400 text-xs mt-1">{_rec.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {_/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={_measurePerformance}
                  disabled={_isMonitoring}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {_isMonitoring ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <BarChart3 className="w-4 h-4" />
                  )}
                  <span>{_isMonitoring ? 'Measuring...' : 'Measure Performance'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedPerformanceMonitor;