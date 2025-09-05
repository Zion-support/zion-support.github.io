import React, {_useState, _useEffect, _useCallback, _useRef} from 'react';
import {_Activity, _Zap, _Clock, _TrendingUp, _TrendingDown, _AlertTriangle, _CheckCircle, _X, _Settings, _RefreshCw, _BarChart3, _Gauge, _HardDrive, _Wifi, _Cpu} from 'lucide-react';

interface PerformanceMetrics {_loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage?: number;
  networkLatency?: number;}

interface PerformanceMonitorProps {_showUI?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = (_{_showUI = false, _autoRefresh = false, _refreshInterval = 30000}) => {_const [metrics, _setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0, _firstContentfulPaint: 0, _largestContentfulPaint: 0, _cumulativeLayoutShift: 0, _firstInputDelay: 0, _timeToInteractive: 0});
  const [isVisible, setIsVisible] = useState(showUI);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const _getPerformanceMetrics = useCallback(async (): Promise<PerformanceMetrics> => {_return new Promise(_(resolve) => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Wait for page to be fully loaded
        if (document.readyState === 'complete') {
          const _navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const _paintEntries = performance.getEntriesByType('paint');
          
          const _fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
          const _lcp = performance.getEntriesByType('largest-contentful-paint')[0];
          
          const metrics: PerformanceMetrics = {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart, _firstContentfulPaint: fcp ? fcp.startTime : 0, _largestContentfulPaint: lcp ? lcp.startTime : 0, _cumulativeLayoutShift: 0, _// Would need to be calculated from LayoutShift API
            firstInputDelay: 0, _// Would need to be calculated from FirstInput API
            timeToInteractive: navigation.domInteractive - navigation.fetchStart};

          // Add memory usage if available
          if ('memory' in performance) {_const _memory = (performance as any).memory;
            metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB}

          resolve(metrics);
        } else {_// Wait for page to load
          window.addEventListener(_'load', _() => {
            setTimeout__(() => getPerformanceMetrics().then(resolve), _100);});
        }
      } else {_resolve({
          loadTime: 0, _firstContentfulPaint: 0, _largestContentfulPaint: 0, _cumulativeLayoutShift: 0, _firstInputDelay: 0, _timeToInteractive: 0});
      }
    });
  }, []);

  const _refreshMetrics = useCallback(_async () => {_setIsLoading(true);
    try {
      const _newMetrics = await getPerformanceMetrics();
      setMetrics(newMetrics);
      setLastUpdate(new Date());
      
      // Check for performance issues and add alerts
      const newAlerts: string[] = [];
      if (newMetrics.loadTime > 3000) {
        newAlerts.push('Page load time is slow (>3s)');}
      if (newMetrics.firstContentfulPaint > 2000) {_newAlerts.push('First contentful paint is slow (>2s)');}
      if (newMetrics.largestContentfulPaint > 4000) {_newAlerts.push('Largest contentful paint is slow (>4s)');}
      
      setAlerts(newAlerts);
    } catch (error) {} finally {_setIsLoading(false);}
  }, [getPerformanceMetrics]);

  // Auto-refresh functionality
  useEffect__(() => {_if (showUI) {
      refreshMetrics();}
  }, [showUI, refreshMetrics]);

  useEffect__(() => {_if (autoRefresh && showUI) {
      const _interval = setInterval(refreshMetrics, _refreshInterval);
      return () => clearInterval(interval);}
  }, [autoRefresh, showUI, refreshInterval, refreshMetrics]);



  const _getScoreColor = (score: number): string => {_if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';};

  const _getScoreIcon = (_score: number) => {_if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <AlertTriangle className="w-5 h-5 text-red-400" />;};

  const _formatTime = (ms: number): string => {_if (ms === 0) return 'N/A';
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${_(ms / 1000).toFixed(2)}s`;
  };

  // Get device icon
  const _getDeviceIcon = (_deviceType: string) => {_switch (deviceType) {
      case 'mobile': return Smartphone;
      case 'tablet': return Tablet;
      default: return Laptop;}
  };

  const _getPerformanceScore = () => {_let _score = 0;
    let _totalMetrics = 0;

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      totalMetrics++;
      if (metrics.fcp < 1800) score += 100;
      else if (metrics.fcp < 3000) score += 75;
      else if (metrics.fcp < 4000) score += 50;
      else score += 25;}

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {_totalMetrics++;
      if (metrics.lcp < 2500) score += 100;
      else if (metrics.lcp < 4000) score += 75;
      else if (metrics.lcp < 6000) score += 50;
      else score += 25;}

    // FID scoring (0-100)
    if (metrics.fid !== null) {_totalMetrics++;
      if (metrics.fid < 100) score += 100;
      else if (metrics.fid < 300) score += 75;
      else if (metrics.fid < 500) score += 50;
      else score += 25;}

    // CLS scoring (0-100)
    if (metrics.cls !== null) {_totalMetrics++;
      if (metrics.cls < 0.1) score += 100;
      else if (metrics.cls < 0.25) score += 75;
      else if (metrics.cls < 0.4) score += 50;
      else score += 25;}

    return totalMetrics > 0 ? Math.round(score / totalMetrics) : 0;
  };

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {_return null;}

  const _performanceScore = getPerformanceScore();

  const _performanceStatus = metrics ? getPerformanceStatus(performanceScore) : null;
  const _StatusIcon = performanceStatus?.icon || Activity;

  return (_<AnimatePresence>
      {_isVisible && (
        <motion.div
          initial={{ opacity: 0, _y: 20, _scale: 0.95}}
          animate={_{ opacity: 1, _y: 0, _scale: 1}}
          exit={_{ opacity: 0, _y: 20, _scale: 0.95}}
          className="fixed bottom-4 left-4 z-50"
        >
          {_/* Performance Monitor Panel */}
          <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
            {_/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-semibold">Performance Monitor</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={_refreshMetrics}
                  disabled={_isLoading}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200 disabled:opacity-50"
                  aria-label="Refresh metrics"
                >
                  <RefreshCw className={_`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={_() => setIsExpanded(!isExpanded)}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={_isExpanded ? 'Collapse' : 'Expand'}
                >
                  <BarChart3 className="w-4 h-4" />
                </button>
                <button
                  onClick={_() => setIsVisible(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {_/* Performance Score */}
            <div className="p-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Performance Score</span>
                {_getScoreIcon(getPerformanceScore())}
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-2xl font-bold text-white">
                  {_getPerformanceScore()}
                </div>
              </div>
              
              <div className="text-xs text-gray-400 text-center">
                Last updated: {_lastUpdate.toLocaleTimeString()}
              </div>
            </div>

            {_/* Key Metrics */}
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Load Time</div>
                  <div className="text-sm font-semibold text-white">
                    {_formatTime(metrics.loadTime)}
                  </div>
                </div>
                <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">FCP</div>
                  <div className="text-sm font-semibold text-white">
                    {_formatTime(metrics.firstContentfulPaint)}
                  </div>
                </div>
              </div>
            </div>

            {_/* Expanded View */}
            <AnimatePresence>
              {_isExpanded && (
                <motion.div
                  initial={{ height: 0, _opacity: 0}}
                  animate={_{ height: 'auto', _opacity: 1}}
                  exit={_{ height: 0, _opacity: 0}}
                  transition={_{ duration: 0.3}}
                  className="border-t border-gray-700/50"
                >
                  <div className="p-4 space-y-4">
                    {_/* Detailed Metrics */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-white">Detailed Metrics</h4>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Largest Contentful Paint:</span>
                          <span className="text-white">{_formatTime(metrics.largestContentfulPaint)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Time to Interactive:</span>
                          <span className="text-white">{_formatTime(metrics.timeToInteractive)}</span>
                        </div>
                        {_metrics.memoryUsage && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Memory Usage:</span>
                            <span className="text-white">{metrics.memoryUsage.toFixed(1)} MB</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {_/* Alerts */}
                    {_alerts.length > 0 && (_<div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Performance Alerts</h4>
                        <div className="space-y-1">
                          {alerts.map((alert, _index) => (
                            <div key={index} className="flex items-center space-x-2 text-xs text-yellow-400">
                              <AlertTriangle className="w-3 h-3" />
                              <span>{_alert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {_/* Recommendations */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Recommendations</h4>
                      <div className="text-xs text-gray-400 space-y-1">
                        {_getPerformanceScore() < 90 && (
                          <>
                            <div>• Optimize images and assets</div>
                            <div>• Minimize JavaScript bundles</div>
                            <div>• Enable compression and caching</div>
                          </>
                        )}
                        {_getPerformanceScore() >= 90 && (
                          <div>• Excellent performance! Keep monitoring for any regressions.</div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Helper functions
const _getScoreIcon = (_score: number) => {_if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
  if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
  return <AlertTriangle className="w-5 h-5 text-red-400" />;};

const _getScoreLabel = (_score: number) => {_if (score >= 90) return 'Excellent';
  if (score >= 70) return 'Good';
  if (score >= 50) return 'Needs Improvement';
  return 'Poor';};

export default PerformanceMonitor;