React, { useEffect, useState, useCallback } from
  'react';
import { motion, AnimatePresence } from
  'framer-motion';
import { Activity, Zap, Shield, Globe, TrendingUp, AlertTriangle, CheckCircle } from'
  'lucide-react';''
  'interface PerformanceMetrics {fcp: number;'lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
  tti: number;
  score: number;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
showDetails = false, autoRefresh = true,refreshInterval = 30000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [alerts, setAlerts] = useState<string[]>([]);

  const getPerformanceScore = useCallback((metric: number, thresholds: { good: number; poor: number }): number => {
    if (metric <= thresholds.good) return 100;
    if (metric <= thresholds.poor) return 50;
    return 0;
  }, []);

const calculateOverallScore = useCallback((metrics: PerformanceMetrics): number => {;const fcpScore = getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 });
    const lcpScore = getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 });
    const fidScore = getPerformanceScore(metrics.fid, { good: 100, poor: 300 });
    const clsScore = getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 });
    
    return Math.round((fcpScore + lcpScore + fidScore + clsScore) / 4);
  }, [getPerformanceScore]);

const collectMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      if (typeof window === 'undefined'
  ' || !('performance
  ' in window)) {'        resolve({
  '          fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0, fmp: 0, tti: 0, score: 0});'
        return;
      }

const observer = new PerformanceObserver((list) => {;const entries = list.getEntries();
        let metrics: Partial<PerformanceMetrics> = {}

        entries.forEach((entry) => {
          switch (entry.entryType) {
case, paint
  ': if (entry.name === 'first-contentful-paint
  ') {'                metrics.fcp = Math.round(entry.startTime);              }
              break;
            case, largest-contentful-paint': metrics.lcp = Math.round(entry.startTime);'              break;'            case'
  'first-input': metrics.fid = Math.round(entry.processingStart - entry.startTime);'              break;'            case
  'layout-shift': if (!(entry as any).hadRecentInput) {
  '                metrics.cls = (metrics.cls || 0) + (entry as any).value;              }break;'}
        });

        // Calculate TTFB
const navigationEntry = performance.getEntriesByType(
  'navigation')[0] as PerformanceNavigationTiming;'        if (navigationEntry) {'
  '          metrics.ttfb = Math.round(navigationEntry.responseStart - navigationEntry.requestStart);'
        }

        // Calculate FMP (First Meaningful Paint)
        const paintEntries = performance.getEntriesByType('paint'
  ');'        const fmpEntry = paintEntries.find(entry => entry.name ===
  'first-meaningful-paint');'        if (fmpEntry) {'
  '          metrics.fmp = Math.round(fmpEntry.startTime);}'// Calculate TTI (Time to Interactive) - simplified
        metrics.tti = Math.round(performance.now());

const finalMetrics = {;
          fcp: metrics.fcp || 0, lcp: metrics.lcp || 0,;
          fid: metrics.fid || 0, cls: metrics.cls || 0,;
          ttfb: metrics.ttfb || 0, fmp: metrics.fmp || 0,;
          tti: metrics.tti || 0, score: 0};

        finalMetrics.score = calculateOverallScore(finalMetrics);
        resolve(finalMetrics);
      });

      // Observe different types of performance entries
      try {
observer.observe({ entryTypes: [, paint
  ', 'largest-contentful-paint
  ', 'first-input
  ', 'layout-shift
  '] });'      } catch (error) {
  '        console.warn('Performance Observer not supported:  , error);'      }'
  '// Fallback timeout'setTimeout(() => {
        resolve({
          fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0, fmp: 0, tti: 0, score: 0
        });
      }, 5000);
    });
  }, [calculateOverallScore]);

const updateMetrics = useCallback(async () => {;setIsLoading(true);
    try {
      const newMetrics = await collectMetrics();
      setMetrics(newMetrics);
      setLastUpdated(new Date());

      // Generate alerts based on metrics
const newAlerts: string[] = [];
if (newMetrics.fcp > 3000) newAlerts.push(, First Contentful Paint is slow
  ');'      if (newMetrics.lcp > 4000) newAlerts.push(
  'Largest Contentful Paint is slow');'      if (newMetrics.fid > 300) newAlerts.push('
  'First Input Delay is high');'      if (newMetrics.cls > 0.25) newAlerts.push('
  'Cumulative Layout Shift is high');'      if (newMetrics.score < 50) newAlerts.push('
  'Overall performance score is low');''
  '      setAlerts(newAlerts);'
    } catch (error) {
      console.error('Error collecting performance metrics:  , error);, '
  } finally {
  '      setIsLoading(false);}'}, [collectMetrics]);

  useEffect(() => {
    updateMetrics();

    if (autoRefresh) {
      const interval = setInterval(updateMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [updateMetrics, autoRefresh, refreshInterval]);

const getScoreColor = (score: number): string => {;
    if (score >= 90) return 'text-green-500'
  ';'    if (score >= 70) return
  'text-yellow-500';'    return'
  'text-red-500';  };, const getScoreBgColor = (score: number): string => {;
    if (score >= 90) return
  'bg-green-100';'    if (score >= 70) return'
  'bg-yellow-100';'    return'
  'bg-red-100';  };''if (!showDetails) {
    return (
      <div className="fixed bottom-4 right-4 z-50">"        <motion.div"          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-700""        >"          <div className="flex items-center space-x-2">"            <Activity className="w-4 h-4 text-blue-500" />"            <span className="text-sm font-medium">Performance</span>"            {metrics && ("              <span className={`text-sm font-bold ${getScoreColor(metrics.score)}`}>`                {metrics.score}</span>
            )}
          </div>
        </motion.div>
      </div>
    )
  }

  return (
<div className="bg-white dark: bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">"      <div className="flex items-center justify-between mb-4">"        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">"          <Activity className="w-5 h-5 mr-2 text-blue-500" />"          Performance Monitor"        </h3>"
        <div className="flex items-center space-x-2">"          <button"            onClick={updateMetrics}
            disabled={isLoading}
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50""          >"            {isLoading ?, Updating...': 'Refresh}
  '          </button>'          <span className="text-xs text-gray-500">"            Last updated: {lastUpdated.toLocaleTimeString()}"          </span></div>
      </div>

      {metrics && (
<div className="space-y-4">"          {/* Overall Score */}"          <div className="text-center">"            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getScoreBgColor(metrics.score)}`}>"              <span className={`text-2xl font-bold ${getScoreColor(metrics.score)}`}>`                {metrics.score}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark: text-gray-400 mt-2">Overall Score</p>"          </div>"
          {/* Core Web Vitals */}
          <div className="grid grid-cols-2 gap-4">"            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">"              <div className="flex items-center justify-between">"                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">FCP</span>"                <span className="text-sm font-bold text-gray-900 dark:text-white">"                  {metrics.fcp}ms"                </span>
              </div>
              <div className="text-xs text-gray-500 mt-1">First Contentful Paint</div>"            </div>"
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">"              <div className="flex items-center justify-between">"                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LCP</span>"                <span className="text-sm font-bold text-gray-900 dark:text-white">"                  {metrics.lcp}ms"                </span>"
              </div>
              <div className="text-xs text-gray-500 mt-1">Largest Contentful Paint</div>"            </div>"
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">"              <div className="flex items-center justify-between">"                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">FID</span>"                <span className="text-sm font-bold text-gray-900 dark:text-white">"                  {metrics.fid}ms"                </span>"
              </div>
              <div className="text-xs text-gray-500 mt-1">First Input Delay</div>"            </div>"
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">"              <div className="flex items-center justify-between">"                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CLS</span>"                <span className="text-sm font-bold text-gray-900 dark:text-white">"                  {metrics.cls.toFixed(3)}"                </span>"
              </div>
              <div className="text-xs text-gray-500 mt-1">Cumulative Layout Shift</div>"            </div>"          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-3 gap-3">"            <div className="text-center">"              <div className="text-lg font-bold text-gray-900 dark: text-white">{metrics.ttfb}ms</div>"              <div className="text-xs text-gray-500">TTFB</div>"            </div>"            <div className="text-center">"              <div className="text-lg font-bold text-gray-900 dark:text-white">{metrics.fmp}ms</div>"              <div className="text-xs text-gray-500">FMP</div>"            </div>"            <div className="text-center">"              <div className="text-lg font-bold text-gray-900 dark:text-white">{metrics.tti}ms</div>"              <div className="text-xs text-gray-500">TTI</div>"            </div>"          </div>{/* Alerts */}"
          <AnimatePresence>
            {alerts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
  '                exit={{ opacity: 0, height: 0 }}'                className="space-y-2""              >"                <h4 className="text-sm font-medium text-red-600 dark:text-red-400 flex items-center">"                  <AlertTriangle className="w-4 h-4 mr-1" />"                  Performance Alerts"                </h4>{alerts.map((alert, index) => ("<motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
className="flex items-center text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded""                  >"                    <AlertTriangle className="w-3 h-3 mr-2" />"                    {alert}"                  </motion.div>))}
              </motion.div>
            )}
          </AnimatePresence>

          {alerts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
className="flex items-center justify-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded""            >"              <CheckCircle className="w-4 h-4 mr-2" />"              <span className="text-sm">All performance metrics are within acceptable ranges</span>"            </motion.div>"          )}</div>"
      )}
    </div>
  );
};

export default EnhancedPerformanceMonitor;
