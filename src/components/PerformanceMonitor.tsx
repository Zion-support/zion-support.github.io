import React, { useState, useEffect, useCallback } from 'react.ts';
import { motion, AnimatePresence               } from 'framer-motion.ts';
<<<<<<< HEAD
import { Activity,
  Clock,
  Zap,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  X,
  Settings,
  BarChart3,
  Cpu,
  HardDrive,
  Wifi
=======
import { Activity, Zap, Clock, HardDrive, Wifi, AlertTriangle, CheckCircle, X, ChevronDown               } from 'lucide-react.ts';

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
interface PerformanceMetrics {














  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  loadTime: number;
<<<<<<< HEAD
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage?: number;
  cpuUsage?: number;
=======














}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  color: string}
export const PerformanceMonitor: React.FC = (): JSX.Element => {;
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<any>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });
  const [scores, setScores] = useState<Record<string, any>>({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const calculateScore = useCallback((metric: anyanyanyanyanyanyanyanyanyanyanyanyanyanynumber, thresholds: number[]): PerformanceScore                => {;
    if (metric <= thresholds[0]) return { score: 100, grade: 'A', color: 'text-green-400' };
    if (metric <= thresholds[1]) return { score: 80, grade: 'B', color: 'text-yellow-400' };
    if (metric <= thresholds[2]) return { score: 60, grade: 'C', color: 'text-orange-400' };
    if (metric <= thresholds[3]) return { score: 40, grade: 'D', color: 'text-red-400' };
    return { score: 20, grade: 'F', color: 'text-red-600' }}, []);
  const updateMetrics = useCallback(() => {;
    if ('performance' in window) {;
      const perf = performance;
      // First Contentful Paint
      const fcp = fcpEntry ? fcpEntry.startTime : null;
      // Largest Contentful Paint
      const lcp = lcpEntry ? lcpEntry.startTime : null;
      // First Input Delay
      const fid = fidEntry ? fidEntry.processingStart - fidEntry.startTime : null;
      // Cumulative Layout Shift
      const cls = clsEntry ? (clsEntry as ).value : null;
=======
interface PerformanceMonitorProps extends React.PropsWithChildren<{}> {

  enabled?: boolean;
<<<<<<< HEAD
  showMetrics?: boolean;
  onPerformanceIssue?: (issue: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => void;
=======
  autoRefresh?: boolean;
  refreshInterval?: number;
  showDetails?: boolean;

}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export function PerformanceMonitor(...args: any[]): any {
  const [metrics, setMetrics] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [alerts, setAlerts] = useState<any>([]);

  const calculateMetrics = useCallback(() => {
    if (!window.performance) return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
    const fid = 0; // First Input Delay - would need to be measured during user interaction
    const cls = 0; // Cumulative Layout Shift - would need to be measured over time
    
    const ttfb = navigation.responseStart - navigation.requestStart;
    const loadTime = navigation.loadEventEnd - navigation.navigationStart;
    
    // Estimate bundle size (this is a rough approximation)
    const bundleSize = performance.memory?.usedJSHeapSize || 0;
    
    return {
      fcp,
      lcp,
      fid,
      cls,
      ttfb,
      bundleSize,
      loadTime
    };
  }, []);

  const getPerformanceScore = useCallback((metrics: anyanyanyanyanyanyanyanyanyanyanyanyanyanyPerformanceMetrics)               => {
    let score = 100;
<<<<<<< HEAD

    // FCP scoring (0-100)
    if (metrics.firstContentfulPaint < 1800) score -= 0;
    else if (metrics.firstContentfulPaint < 3000) score -= 10;
    else score -= 30;

    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint < 2500) score -= 0;
    else if (metrics.largestContentfulPaint < 4000) score -= 10;
    else score -= 30;

    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift < 0.1) score -= 0;
    else if (metrics.cumulativeLayoutShift < 0.25) score -= 10;
    else score -= 30;

    // FID scoring (0-100)
    if (metrics.firstInputDelay < 100) score -= 0;
    else if (metrics.firstInputDelay < 300) score -= 10;
    else score -= 30;

    return Math.max(0, score);
  }, []);

  // Collect performance metrics
  const collectMetrics = useCallback(() => {
    if ('performance' in window) {
      const perf = (window as ).performance;
      const navigation = perf.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

      if (navigation) {
        const newMetrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          cumulativeLayoutShift: 0,
          firstInputDelay: 0,
          timeToInteractive: navigation.domInteractive - navigation.fetchStart
        };

        // Get FCP
        const fcpEntry = perf.getEntriesByName('first-contentful-paint')[0];
        if (fcpEntry) {
          newMetrics.firstContentfulPaint = fcpEntry.startTime;

        // Get LCP
        const lcpEntries = perf.getEntriesByType('largest-contentful-paint');
        if (lcpEntries.length > 0) {
          newMetrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;

        // Get CLS
        if ('PerformanceObserver' in window) {
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const clsValue = 0;
            entries.forEach((entry: anyanyanyanyanyanyanyanyanyanyanyanyanyany)               => {
              if (entry.value) {
                clsValue += entry.value;

            });
            newMetrics.cumulativeLayoutShift = clsValue;
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Get FID
        if ('PerformanceObserver' in window) {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            if (entries.length > 0) {
              const lastEntry = entries[entries.length - 1] as ;
              newMetrics.firstInputDelay = lastEntry.processingStart - lastEntry.startTime;

          });
          fidObserver.observe({ entryTypes: ['first-input'] });

        setMetrics(newMetrics);
        const score = calculateScore(newMetrics);
        setPerformanceScore(score);

        // Check for performance issues
        const newIssues: string[] = [];
        if (newMetrics.firstContentfulPaint > 3000) {
          newIssues.push('First Contentful Paint is slow');

        if (newMetrics.largestContentfulPaint > 4000) {
          newIssues.push('Largest Contentful Paint is slow');

        if (newMetrics.cumulativeLayoutShift > 0.25) {
          newIssues.push('Cumulative Layout Shift is high');

        if (newMetrics.firstInputDelay > 300) {
          newIssues.push('First Input Delay is high');

        setIssues(newIssues);
        if (onPerformanceIssue && newIssues.length > 0) {
          newIssues.forEach(issue => onPerformanceIssue(issue));



  }, [calculateScore, onPerformanceIssue]);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    collectMetrics();

    // Monitor continuously
    intervalRef.current = setInterval(() => {
      collectMetrics();
    }, 5000);
  }, [collectMetrics]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);

  }, []);

  useEffect(() => {
    if (enabled) {
      startMonitoring();
=======
    
    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 20;
    if (metrics.ttfb > 600) score -= 15;
    if (metrics.loadTime > 3000) score -= 15;
    
    return Math.max(0, score);
  }, []);

  const getPerformanceColor = useCallback((score: anyanyanyanyanyanyanyanyanyanyanyanyanyanynumber)               => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  }, []);

  const getPerformanceStatus = useCallback((score: anyanyanyanyanyanyanyanyanyanyanyanyanyanynumber)               => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  }, []);

  const checkPerformanceIssues = useCallback((metrics: anyanyanyanyanyanyanyanyanyanyanyanyanyanyPerformanceMetrics)               => {
    const newAlerts: string[] = [];
    
    if (metrics.fcp > 1800) {
      newAlerts.push('First Contentful Paint is slow (>1.8s)');
    }
    if (metrics.lcp > 2500) {
      newAlerts.push('Largest Contentful Paint is slow (>2.5s)');
    }
    if (metrics.ttfb > 600) {
      newAlerts.push('Time to First Byte is slow (>600ms)');
    }
    if (metrics.loadTime > 3000) {
      newAlerts.push('Page load time is slow (>3s)');
    }
    
    setAlerts(newAlerts);
  }, []);
  useEffect(() => {
    if (!enabled) return;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    const updateMetrics = () => {
      const newMetrics = calculateMetrics();
      if (newMetrics) {
        setMetrics(newMetrics);
        checkPerformanceIssues(newMetrics);
      }
    };

    // Initial calculation
    updateMetrics();

    // Set up auto-refresh
    if (autoRefresh) {
      const interval = setInterval(updateMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [enabled, autoRefresh, refreshInterval, calculateMetrics, checkPerformanceIssues]);

  useEffect(() => {
    // Show monitor after page load
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!enabled || !isVisible) return null;

  const score = metrics ? getPerformanceScore(metrics) : 0;
  const status = getPerformanceStatus(score);
  const statusColor = getPerformanceColor(score);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
<<<<<<< HEAD
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-sm"

            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Performance Monitor
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"

                  <Settings className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"

                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
=======
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-cyan-400/20">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-white">Performance</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 hover:bg-cyan-400/20 rounded-lg transition-colors"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 text-cyan-400" />
                </motion.div>
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-red-400/20 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>

          {/* Score Display */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-400">Performance Score</span>
              <span className={`text-sm font-bold ${statusColor}`}>{score}/100</span>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
              <motion.div
                className={`h-2 rounded-full ${
                  score >= 90 ? 'bg-green-400' : 
                  score >= 70 ? 'bg-yellow-400' : 'bg-red-400'
                }`}
<<<<<<< HEAD

                {isMonitoring ? 'Stop' : 'Start'} Monitoring
              </button>
              <button
                onClick={collectMetrics}
                className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"

                Refresh
              </button>
=======
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
            <div className="text-center">
              <span className={`text-xs font-medium ${statusColor}`}>{status}</span>
            </div>
          </div>

<<<<<<< HEAD
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"

        <BarChart3 className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default PerformanceMonitor;
}}}}}}}}}}}}}}}}}}
=======
          {/* Expanded Details */}
          <AnimatePresence>
            {isExpanded && metrics && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-cyan-400/20"
              >
                <div className="p-4 space-y-3">
                  {/* Core Web Vitals */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                      <Clock className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">FCP</div>
                      <div className="text-sm font-medium text-white">
                        {metrics.fcp.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                      <Zap className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">LCP</div>
                      <div className="text-sm font-medium text-white">
                        {metrics.lcp.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                      <Wifi className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">TTFB</div>
                      <div className="text-sm font-medium text-white">
                        {metrics.ttfb.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                      <HardDrive className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Load</div>
                      <div className="text-sm font-medium text-white">
                        {(metrics.loadTime / 1000).toFixed(1)}s
                      </div>
                    </div>
                  </div>

                  {/* Alerts */}
                  {alerts.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-yellow-400">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-xs font-medium">Performance Issues</span>
                      </div>
                      <div className="space-y-1">
                        {alerts.map((alert, index) => (
                          <div key={index} className="text-xs text-gray-300 bg-yellow-400/10 p-2 rounded">
                            {alert}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Refresh Button */}
                  <button
                    onClick={() => {
                      const newMetrics = calculateMetrics();
                      if (newMetrics) {
                        setMetrics(newMetrics);
                        checkPerformanceIssues(newMetrics);
                      }
                    }}
                    className="w-full py-2 px-3 bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-400 text-xs font-medium rounded-lg transition-colors"
                  >
                    Refresh Metrics
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
