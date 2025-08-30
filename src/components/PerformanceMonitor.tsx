import React, { useEffect, useState, useCallback } from 'react.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  Info,
  BarChart3,
  Gauge,
  Monitor
 } from 'lucide-react';
interface PerformanceMetrics {

  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null}
interface PerformanceScore {

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
  const calculateScore = useCallback((metric: number, thresholds: number[]): PerformanceScore  => {;
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
interface PerformanceMonitorProps {
  className?: string;
  showDetails?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  className = '',
  showDetails = false 
}) => {;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({;
    fcp: null,;
    lcp: null,;
    fid: null,;
    cls: null,;
    ttfb: null;
  });
  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {;
    let score = 0;
    let totalMetrics = 0;

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp < 1800) score += 100;
      else if (metrics.fcp < 3000) score += 50;
      else if (metrics.fcp < 4000) score += 25;
      totalMetrics++;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp < 2500) score += 100;
      else if (metrics.lcp < 4000) score += 50;
      else if (metrics.lcp < 5000) score += 25;
      totalMetrics++;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid < 100) score += 100;
      else if (metrics.fid < 300) score += 50;
      else if (metrics.fid < 500) score += 25;
      totalMetrics++;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls < 0.1) score += 100;
      else if (metrics.cls < 0.25) score += 50;
      else if (metrics.cls < 0.4) score += 25;
      totalMetrics++;
    }

    // TTFB scoring (0-100)
    if (metrics.ttfb !== null) {
      if (metrics.ttfb < 800) score += 100;
      else if (metrics.ttfb < 1800) score += 50;
      else if (metrics.ttfb < 3000) score += 25;
      totalMetrics++;
    }

    return totalMetrics > 0 ? Math.round(score / totalMetrics) : 0;
  }, []);

  const getScoreColor = (score: number): string => {;
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    if (score >= 50) return 'text-orange-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {;
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <TrendingUp className="w-5 h-5 text-yellow-400" />;
    if (score >= 50) return <AlertTriangle className="w-5 h-5 text-orange-400" />;
    return <AlertTriangle className="w-5 h-5 text-red-400" />;
  };

  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number | null): {;
    status: 'good' | 'needs-improvement' | 'poor';
    color: string;
    icon: React.ReactNode;
  } => {
    if (value === null) return { status: 'poor', color: 'text-gray-400', icon: <Clock className="w-4 h-4" /> };

    const thresholds = {
  fcp: { good: 1800,
  needsImprovement: 3000 



;
;

},;
      lcp: { good: 2500, needsImprovement: 4000 },;
      fid: { good: 100, needsImprovement: 300 },;
      cls: { good: 0.1, needsImprovement: 0.25 },;
      ttfb: { good: 800, needsImprovement: 1800 };
    };

    const threshold = thresholds[metric];
    if (value <= threshold.good) {
      return { status: 'good', color: 'text-green-400', icon: <CheckCircle className="w-4 h-4" /> };
    } else if (value <= threshold.needsImprovement) {
      return { status: 'needs-improvement', color: 'text-yellow-400', icon: <AlertTriangle className="w-4 h-4" /> };
    } else {
      return { status: 'poor', color: 'text-red-400', icon: <AlertTriangle className="w-4 h-4" /> };
    }
  };

  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        const fidEntry = entries[entries.length - 1];
        if (fidEntry) {
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      // Time to First Byte
      const navigationEntry = perf.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : null;
      // DOM Load and Window Load
      const domLoad = navigationEntry ? navigationEntry.domContentLoadedEventEnd - navigationEntry.navigationStart : null;
      const windowLoad = navigationEntry ? navigationEntry.loadEventEnd - navigationEntry.navigationStart : null;
      const newMetrics = {
  fcp, lcp, fid, cls, ttfb, domLoad,;
  windowLoad ;

};
      setMetrics(newMetrics);
      // Calculate scores
      const newScores = {
  fcp: fcp ? calculateScore(fcp, [1800, 3000, 4000, 5000]) : { score: 0, grade: 'F',
  color: 'text-gray-400' 

},
        lcp: lcp ? calculateScore(lcp, [2500, 4000, 5000, 6000]) : { score: 0, grade: 'F', color: 'text-gray-400' },
        fid: fid ? calculateScore(fid, [100, 300, 500, 1000]) : { score: 0, grade: 'F', color: 'text-gray-400' },;
        cls: cls ? calculateScore(cls, [0.1, 0.25, 0.4, 0.5]) : { score: 0, grade: 'F', color: 'text-gray-400' };
      };
      setScores(newScores);
      // Check for performance issues
      const issues = [];
      if (fcp && fcp > 3000) issues.push('First Contentful Paint is slow');
      if (lcp && lcp > 5000) issues.push('Largest Contentful Paint is slow');
      if (fid && fid > 500) issues.push('First Input Delay is high');
      if (cls && cls > 0.4) issues.push('Cumulative Layout Shift is poor');
      if (issues.length > 0) {
        setAlertMessage(issues.join(', '));
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000)}
    }
  }, []);
  useEffect(() => {
    // Initial metrics
    updateMetrics();
    // Set up performance observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint' || 
              entry.entryType === 'first-input-delay' || 
              entry.entryType === 'layout-shift') {
            updateMetrics()};
        };
      });
      observer.observe({ entryTypes['largest-contentful-paint', 'first-input-delay', 'layout-shift'] });
      return ()  => observer.disconnect()}
    // Update metrics periodically
    const interval = setInterval(updateMetrics, 10000);
    return () => clearInterval(interval)}, [updateMetrics]);
  const formatMetric = (value: number | null, unit: string = 'ms'): string => {;
    if (value === null) return 'N/A';
    if (unit === 'ms') return `${Math.round(value)}ms`;
    if (unit === 's') return `${(value / 1000).toFixed(2)}s`;
    return value.toFixed(3)};
  const getMetricColor = (score: PerformanceScore): string  => {;
    return score.color.replace('text-', 'bg-').replace('-400', '-500').replace('-600', '-700')};
  return (
<<<<<<< HEAD
    <>
      {/* Performance Toggle Button */}
      <button
        onClick = {() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-zion-purple text-white rounded-full shadow-lg hover:bg-zion-purple-dark transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-purple/50"
        aria-label="Open performance monitor"
        title="Performance Monitor"
      >
        <Activity size={24} />
      </button>
      {/* Performance Alert */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial = {
  { opacity: 0,
  y: -50 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            exit = {
  { opacity: 0,
  y: -50 

}}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 p-4 bg-red-500 text-white rounded-lg shadow-lg flex items-center gap-3"
          >
            <AlertTriangle size={20} />
            <span>{alertMessage}</span>
            <button
              onClick={() => setShowAlert(false)}
              className="ml-2 p-1 hover:bg-red-600 rounded"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial = {
  { opacity: 0,
  x: '-100%' 

}}
            animate = {
  { opacity: 1,
  x: 0 

}}
            exit = {
  { opacity: 0,
  x: '-100%' 

}}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-96 bg-zion-slate-dark border-r border-zion-purple/30 z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-zion-purple flex items-center gap-2">
                  <Monitor size={24} />
                  Performance
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-zion-slate-light hover:text-white transition-colors"
                  aria-label="Close performance panel"
                >
                  <X size={20} />
                </button>
              </div>
              {/* Core Web Vitals */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Zap size={20} className="text-zion-purple" />
                  Core Web Vitals
                </h3>
                {/* FCP */}
                <div className="p-3 bg-zion-slate-light/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zion-slate-light">First Contentful Paint</span>
                    <span className={`text-sm font-semibold ${scores.fcp?.color || 'text-gray-400'}`}>
                      {scores.fcp?.grade || 'N/A'}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {formatMetric(metrics.fcp)}
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getMetricColor(scores.fcp)}`}
                      style={{ width: `${scores.fcp?.score || 0}%` }}
                    />
                  </div>
                </div>
                {/* LCP */}
                <div className="p-3 bg-zion-slate-light/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zion-slate-light">Largest Contentful Paint</span>
                    <span className={`text-sm font-semibold ${scores.lcp?.color || 'text-gray-400'}`}>
                      {scores.lcp?.grade || 'N/A'}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {formatMetric(metrics.lcp)}
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getMetricColor(scores.lcp)}`}
                      style={{ width: `${scores.lcp?.score || 0}%` }}
                    />
                  </div>
                </div>
                {/* FID */}
                <div className="p-3 bg-zion-slate-light/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zion-slate-light">First Input Delay</span>
                    <span className={`text-sm font-semibold ${scores.fid?.color || 'text-gray-400'}`}>
                      {scores.fid?.grade || 'N/A'}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {formatMetric(metrics.fid)}
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getMetricColor(scores.fid)}`}
                      style={{ width: `${scores.fid?.score || 0}%` }}
                    />
                  </div>
                </div>
                {/* CLS */}
                <div className="p-3 bg-zion-slate-light/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zion-slate-light">Cumulative Layout Shift</span>
                    <span className={`text-sm font-semibold ${scores.cls?.color || 'text-gray-400'}`}>
                      {scores.cls?.grade || 'N/A'}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {formatMetric(metrics.cls, '')}
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getMetricColor(scores.cls)}`}
                      style={{ width: `${scores.cls?.score || 0}%` }}
                    />
                  </div>
                </div>
              </div>
              {/* Additional Metrics */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <BarChart3 size={20} className="text-zion-purple" />
                  Additional Metrics
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-zion-slate-light/10 rounded-lg text-center">
                    <div className="text-sm text-zion-slate-light mb-1">TTFB</div>
                    <div className="text-lg font-bold text-white">
                      {formatMetric(metrics.ttfb)}
                    </div>
                  </div>
                  <div className="p-3 bg-zion-slate-light/10 rounded-lg text-center">
                    <div className="text-sm text-zion-slate-light mb-1">DOM Load</div>
                    <div className="text-lg font-bold text-white">
                      {formatMetric(metrics.domLoad)}
                    </div>
                  </div>
                  <div className="p-3 bg-zion-slate-light/10 rounded-lg text-center">
                    <div className="text-sm text-zion-slate-light mb-1">Window Load</div>
                    <div className="text-lg font-bold text-white">
                      {formatMetric(metrics.windowLoad)}
                    </div>
                  </div>
                  <div className="p-3 bg-zion-slate-light/10 rounded-lg text-center">
                    <div className="text-sm text-zion-slate-light mb-1">Overall Score</div>
                    <div className="text-lg font-bold text-white">
                      {Math.round(Object.values(scores).reduce((acc, score) => acc + score.score, 0) / 4)}
                    </div>
                  </div>
                </div>
              </div>
              {/* Performance Tips */}
              <div className="p-4 bg-zion-purple/10 border border-zion-purple/20 rounded-lg">
                <h4 className="font-semibold text-zion-purple mb-2 flex items-center gap-2">
                  <Info size={16} />
                  Performance Tips
                </h4>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Optimize images and use WebP format</li>
                  <li>• Minimize JavaScript bundle size</li>
                  <li>• Use CDN for static assets</li>
                  <li>• Enable compression and caching</li>
                  <li>• Monitor Core Web Vitals regularly</li>
                </ul>
              </div>
              {/* Refresh Button */}
              <button
                onClick={updateMetrics}
                className="w-full mt-6 p-3 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw size={16} />
                Refresh Metrics
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>;
    </>;
  )};
// Simple refresh icon component
const RefreshCw: React.FC<{ size: number }> = ({ size }) => (
  <svg width = {size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 4v6h-6"/>
    <path d="M1 20v-6h6"/>
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>;
  </svg>;
);
=======
    <motion.div
      className = {`bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-4 ${className}`}
      initial = {
  { opacity: 0,
  y: 20 






}}
      animate = {
  { opacity: 1,
  y: 0 






}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
        </div>
        <div className="flex items-center space-x-2">
          {getScoreIcon(performanceScore)}
          <span className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
            {performanceScore}
          </span>;
        </div>;
      </div>;
;
      {showDetails && (;
        <div className="space-y-3">;
          {Object.entries(metrics).map(([key, value]) => {;
            const status = getMetricStatus(key as keyof PerformanceMetrics, value);
            const label = {
  fcp: 'First Contentful Paint',
              lcp: 'Largest Contentful Paint',
              fid: 'First Input Delay',
              cls: 'Cumulative Layout Shift',;
  ;
  ;
  ;
  ;
  ttfb: 'Time to First Byte';
            ;






}[key];

            return (
              <div key = {key} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={status.color}>{status.icon}</div>;
                  <span className="text-sm text-gray-300">{label}</span>;
                </div>;
                <span className="text-sm font-mono text-white">;
                  {value !== null ? `${value.toFixed(2)}${key === 'cls' ? '' : 'ms'}` : 'N/A'};
                </span>;
              </div>;
            );
          })}
        </div>
      )}

      <div className = "mt-4 pt-3 border-t border-cyan-400/20">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Performance Score</span>
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className={`font-semibold ${getScoreColor(performanceScore)}`}>
              {performanceScore >= 90 ? 'Excellent' : 
               performanceScore >= 70 ? 'Good' : ;
               performanceScore >= 50 ? 'Needs Improvement' : 'Poor'};
            </span>;
          </div>;
        </div>;
      </div>;
    </motion.div>;
  );
};

export default PerformanceMonitor;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
