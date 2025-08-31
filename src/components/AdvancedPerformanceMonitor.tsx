<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState, useCallback, useMemo } from 'react.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { Activity, TrendingUp, AlertTriangle, CheckCircle, XCircle, Info interface PerformanceMetrics {

=======
import React, { useEffect, useState, useCallback, useMemo  
} from 'react.ts';
import { motion, AnimatePresence   } from 'framer-motion.ts';
import { Activity, TrendingUp, AlertTriangle, CheckCircle, XCircle, Info   } from 'lucide-react.ts';

interface PerformanceMetrics {


>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  fps: number;
  memory: number;
  loadTime: number;
  networkLatency: number;
  cpuUsage: number;
<<<<<<< HEAD
  timestamp: number;
=======
timestamp: number;
=======
import React, { useEffect, useState, useCallback } from 'react.ts';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react.ts';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  fmp: number | null; // First Meaningful Paint
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
interface PerformanceAlert {


  id: string;
  type: 'warning' | 'error' | 'info' | 'success';
  message: string;
  metric: string;
  value: number;
<<<<<<< HEAD
  timestamp: number;
=======
timestamp: number;
=======
interface PerformanceScore {
  score: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  color: string;
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
export const AdvancedPerformanceMonitor: React.FC = (): JSX.Element => {
  const [metrics, setMetrics] = useState<any>({;
    fps: 0,;
    memory: 0,;
    loadTime: 0,;
    networkLatency: 0,;
    cpuUsage: 0,;
    timestamp: Date.now();
  });

  const [alerts, setAlerts] = useState<any>([]);
=======
const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null
  });

>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  const [isVisible, setIsVisible] = useState(false);
  const [overallScore, setOverallScore] = useState<PerformanceScore>({
    score: 0,
    rating: 'good',
    color: 'text-green-500'
  });

<<<<<<< HEAD
  // FPS monitoring
  const measureFPS = useCallback(() => {;
    let frameCount = 0;
    let lastTime = performance.now();

    const countFrames = () => {;
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps, timestamp: Date.now() }));
        frameCount = 0;
<<<<<<< HEAD
        lastTime = currentTime;

      requestAnimationFrame(countFrames);
    };
=======
        lastTime = currentTime};
      ;
      requestAnimationFrame(countFrames)};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    requestAnimationFrame(countFrames)}, []);

  // Memory monitoring
<<<<<<< HEAD
  const memoryUsage = memory.usedJSHeapSize / 1024 / 1024;
      setMetrics(prev = > ({ ...prev, memory: memoryUsage }))};
=======;
  const memoryUsage = memory.usedJSHeapSize / 1024 / 1024;
      setMetrics(prev => ({ ...prev, memory: memoryUsage }));
<<<<<<< HEAD

=======
    }
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }, []);

  // Load time monitoring
  const measureLoadTime = useCallback(() => {;
    if (typeof window !== 'null') {;
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
<<<<<<< HEAD
        setMetrics(prev => ({ ...prev, loadTime }));


=======
        setMetrics(prev = > ({ ...prev, loadTime }))};
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }, []);

  // Network latency monitoring
  const measureNetworkLatency = useCallback(async () => {;
    try {;
      const start = performance.now();
      await fetch('/api/health', { method: 'HEAD' });
      const end = performance.now();
      const latency = end - start;
<<<<<<< HEAD
      setMetrics(prev => ({ ...prev, networkLatency: anylatency }));
    } catch (error) {
      // If health check fails, use a default value
      setMetrics(prev  => ({ ...prev, networkLatency: 0 }));

=======
      setMetrics(prev = > ({ ...prev, networkLatency: anylatency }))} catch (error) {
      // If health check fails, use a default value;
      setMetrics(prev   => ({ ...prev, networkLatency: 0 }))};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }, []);

  // CPU usage estimation
  const estimateCPUUsage = useCallback(() => {;
    let lastTime = performance.now();
    let frameCount = 0;
<<<<<<< HEAD

    const measureFrame = () => {
=======
    
    const measureFrame = () => {;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const cpuUsage = Math.min(100, (frameCount / 60) * 100);
        setMetrics(prev => ({ ...prev, cpuUsage }));
        frameCount = 0;
<<<<<<< HEAD
        lastTime = currentTime;

      requestAnimationFrame(measureFrame);
    };

    requestAnimationFrame(measureFrame);
=======
  // Calculate performance score based on Core Web Vitals
  const calculateScore = useCallback((metrics: PerformanceMetrics): PerformanceScore => {
    let totalScore = 0;
    let validMetrics = 0;

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      validMetrics++;
      if (metrics.fcp < 1800) totalScore += 100;
      else if (metrics.fcp < 3000) totalScore += 50;
      else totalScore += 0;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      validMetrics++;
      if (metrics.lcp < 2500) totalScore += 100;
      else if (metrics.lcp < 4000) totalScore += 50;
      else totalScore += 0;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      validMetrics++;
      if (metrics.fid < 100) totalScore += 100;
      else if (metrics.fid < 300) totalScore += 50;
      else totalScore += 0;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      validMetrics++;
      if (metrics.cls < 0.1) totalScore += 100;
      else if (metrics.cls < 0.25) totalScore += 50;
      else totalScore += 0;
    }

    const averageScore = validMetrics > 0 ? Math.round(totalScore / validMetrics) : 0;
    
    let rating: 'good' | 'needs-improvement' | 'poor';
    let color: string;

    if (averageScore >= 90) {
      rating = 'good';
      color = 'text-green-500';
    } else if (averageScore >= 50) {
      rating = 'needs-improvement';
      color = 'text-yellow-500';
    } else {
      rating = 'poor';
      color = 'text-red-500';
    }

    return { score: averageScore, rating, color };
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  }, []);
=======
        lastTime = currentTime};
      ;
      requestAnimationFrame(measureFrame)};
    
    requestAnimationFrame(measureFrame)}, []);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
  // Performance alerts
<<<<<<< HEAD
  const checkPerformanceAlerts = useCallback((metrics: anyPerformanceMetrics)  => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    const newAlerts: PerformanceAlert[] = [];

    if (metrics.fps < 30) {
      newAlerts.push({
        id: `fps-${Date.now()}`,
        type: 'error',
        message: `Low FPS detected: ${metrics.fps}`,
        metric: 'fps',
        value: metrics.fps,
        timestamp: Date.now()
      })} else if (metrics.fps < 50) {
      newAlerts.push({
        id: `fps-${Date.now()}`,
        type: 'warning',
        message: `FPS below optimal: ${metrics.fps}`,
        metric: 'fps',
        value: metrics.fps,
        timestamp: Date.now()
<<<<<<< HEAD
      });
=======
      })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    if (metrics.memory > 100) {
      newAlerts.push({
        id: `memory-${Date.now()}`,
        type: 'warning',
        message: `High memory usage: ${metrics.memory.toFixed(1)}MB`,
        metric: 'memory',
        value: metrics.memory,
        timestamp: Date.now()
<<<<<<< HEAD
      });
=======
      })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    if (metrics.loadTime > 3000) {
      newAlerts.push({
        id: `load-${Date.now()}`,
        type: 'warning',
        message: `Slow load time: ${metrics.loadTime.toFixed(0)}ms`,
        metric: 'loadTime',
        value: metrics.loadTime,
        timestamp: Date.now()
<<<<<<< HEAD
      });
=======
      })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    if (metrics.networkLatency > 1000) {
      newAlerts.push({
        id: any`network-${Date.now()}`,
        type: 'warning',
        message: `High network latency: ${metrics.networkLatency.toFixed(0)}ms`,
        metric: 'networkLatency',
        value: metrics.networkLatency,
        timestamp: Date.now()
<<<<<<< HEAD
      });

    if (newAlerts.length > 0) {
      setAlerts(prev  => [...prev, ...newAlerts]);

=======
      })}

    if (newAlerts.length > 0) {
      setAlerts(prev = > [...prev, ...newAlerts])};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }, []);

  // Auto-hide alerts after 5 seconds
  useEffect(() => {
<<<<<<< HEAD
    const timer = setTimeout(() => {;
      setAlerts(prev => prev.filter(alert => Date.now() - alert.timestamp < 5000))}, 5000);
=======
    const timer = setTimeout(() => {;
      setAlerts(prev => prev.filter(alert => Date.now() - alert.timestamp < 5000));
    }, 5000);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

    return () => clearTimeout(timer)}, [alerts]);
=======
  // Measure Core Web Vitals
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.processingStart && entry.startTime) {
            const fid = entry.processingStart - entry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // Measure Time to First Byte
  useEffect(() => {
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    }
  }, []);

<<<<<<< HEAD
    const interval = setInterval(() => {;
      measureMemory();
      measureLoadTime();
      measureNetworkLatency();
      checkPerformanceAlerts(metrics)}, 2000);

    return () => clearInterval(interval)}, [measureFPS, measureMemory, measureLoadTime, measureNetworkLatency, estimateCPUUsage, checkPerformanceAlerts, metrics]);

<<<<<<< HEAD
  const getPerformanceScore = useMemo(() => {
    const score = 100;

=======
  const getPerformanceScore = useMemo(() => {;
    let score = 100;
    
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    if (metrics.fps < 30) score -= 30;
    else if (metrics.fps < 50) score -= 15;

    if (metrics.memory > 100) score -= 20;
    else if (metrics.memory > 50) score -= 10;

    if (metrics.loadTime > 3000) score -= 20;
    else if (metrics.loadTime > 1000) score -= 10;

    if (metrics.networkLatency > 1000) score -= 15;
    else if (metrics.networkLatency > 500) score -= 5;
<<<<<<< HEAD

    return Math.max(0, score);
  }, [metrics]);
=======
    
    return Math.max(0, score)}, [metrics]);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
  const getScoreColor = (score: anynumber)  => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400'};

<<<<<<< HEAD
  const getScoreIcon = (score: anynumber)  => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    if (score >= 80) return <CheckCircle className="w-4 h-4" />;
    if (score >= 60) return <AlertTriangle className="w-4 h-4" />;
    return <XCircle className="w-4 h-4" />};

  if (!isVisible) {
    return (
      <motion.button
        onClick = {() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-slate-800 hover:bg-slate-700 rounded-full shadow-lg transition-all duration-300"
<<<<<<< HEAD
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}

        <Activity className="w-5 h-5 text-cyan-400" />
      </motion.button>
    )};
=======;
        whileHover={{ scale: 1.1 }};
        whileTap={{ scale: 0.9 }};
      >;
        <Activity className="w-5 h-5 text-cyan-400" />;
      </motion.button>;
=======
  // Update overall score when metrics change
  useEffect(() => {
    const score = calculateScore(metrics);
    setOverallScore(score);
  }, [metrics, calculateScore]);

  // Format time values
  const formatTime = (time: number | null): string => {
    if (time === null) return 'N/A';
    return `${Math.round(time)}ms`;
  };

  // Format CLS value
  const formatCLS = (cls: number | null): string => {
    if (cls === null) return 'N/A';
    return cls.toFixed(3);
  };

  // Get metric rating
  const getMetricRating = (metric: string, value: number | null): string => {
    if (value === null) return 'N/A';
    
    switch (metric) {
      case 'fcp':
        return value < 1800 ? '🟢 Good' : value < 3000 ? '🟡 Needs Improvement' : '🔴 Poor';
      case 'lcp':
        return value < 2500 ? '🟢 Good' : value < 4000 ? '🟡 Needs Improvement' : '🔴 Poor';
      case 'fid':
        return value < 100 ? '🟢 Good' : value < 300 ? '🟡 Needs Improvement' : '🔴 Poor';
      case 'cls':
        return value < 0.1 ? '🟢 Good' : value < 0.25 ? '🟡 Needs Improvement' : '🔴 Poor';
      default:
        return 'N/A';
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-zion-cyan text-white p-3 rounded-full shadow-lg hover:bg-zion-cyan/90 transition-all duration-300 z-50"
        aria-label="Open Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </button>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
    );
<<<<<<< HEAD
=======
  }
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  return (
<<<<<<< HEAD
    <AnimatePresence>
      <motion.div
        initial = {
  { opacity: 0,
  y: 20 






}}
        animate = {
  { opacity: 1,
  y: 0 






}}
        exit = {
  { opacity: 0,
  y: 20 






}}
        className="fixed bottom-4 right-4 z-50 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl"

        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-white">Performance Monitor</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-slate-700 rounded transition-colors"

              <TrendingUp className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-slate-700 rounded transition-colors"

              <XCircle className="w-4 h-4 text-slate-400" />
            </button>
=======
    <div className="fixed bottom-4 right-4 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/30 rounded-2xl p-6 shadow-2xl z-50 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white flex items-center">
          <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-zion-slate-light hover:text-white transition-colors"
        >
          ×
        </button>
      </div>

      {/* Overall Score */}
      <div className="mb-4 p-4 bg-zion-slate/30 rounded-lg">
        <div className="text-center">
          <div className={`text-3xl font-bold ${overallScore.color}`}>
            {overallScore.score}
          </div>
          <div className="text-sm text-zion-slate-light">
            Overall Score ({overallScore.rating.replace('-', ' ')})
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          </div>
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-zion-slate-light">FCP</span>
          <div className="text-right">
            <div className="text-white font-mono">{formatTime(metrics.fcp)}</div>
            <div className="text-xs text-zion-slate-light">
              {getMetricRating('fcp', metrics.fcp)}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-zion-slate-light">LCP</span>
          <div className="text-right">
            <div className="text-white font-mono">{formatTime(metrics.lcp)}</div>
            <div className="text-xs text-zion-slate-light">
              {getMetricRating('lcp', metrics.lcp)}
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="p-3 border-t border-slate-700">
            <div className="space-y-2">
              {alerts.slice(-3).map((alert) => (
                <motion.div
                  key={alert.id}
                  initial = {
  { opacity: 0,
  x: 20 






}}
                  animate = {
  { opacity: 1,
  x: 0 






}}
                  exit = {
  { opacity: 0,
  x: -20 






}}
                  className={`flex items-center space-x-2 p-2 rounded text-xs ${
                    alert.type === 'error' ? 'bg-red-900/20 text-red-400' :
                    alert.type === 'warning' ? 'bg-yellow-900/20 text-yellow-400' :
                    alert.type === 'info' ? 'bg-blue-900/20 text-blue-400' :
                    'bg-green-900/20 text-green-400'
                  }`}

                  {alert.type === 'error' ? <XCircle className="w-3 h-3" /> :
                   alert.type === 'warning' ? <AlertTriangle className="w-3 h-3" /> :
                   alert.type === 'info' ? <Info className="w-3 h-3" /> :
                   <CheckCircle className="w-3 h-3" />}
                  <span>{alert.message}</span>
                </motion.div>
              ))}
<<<<<<< HEAD
            </div>
          </div>
        )}
      </motion.div>;
    </AnimatePresence>;
  )};
=======
            </div>;
          </div>;
        )};
      </motion.div>;
    </AnimatePresence>;
  );
<<<<<<< HEAD
};}}}}}}}}}}}}}}}
=======
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
        <div className="flex justify-between items-center">
          <span className="text-sm text-zion-slate-light">FID</span>
          <div className="text-right">
            <div className="text-white font-mono">{formatTime(metrics.fid)}</div>
            <div className="text-xs text-zion-slate-light">
              {getMetricRating('fid', metrics.fid)}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-zion-slate-light">CLS</span>
          <div className="text-right">
            <div className="text-white font-mono">{formatCLS(metrics.cls)}</div>
            <div className="text-xs text-zion-slate-light">
              {getMetricRating('cls', metrics.cls)}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-zion-slate-light">TTFB</span>
          <div className="text-right">
            <div className="text-white font-mono">{formatTime(metrics.ttfb)}</div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      {overallScore.rating !== 'good' && (
        <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
          <div className="flex items-center text-yellow-400 mb-2">
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Recommendations</span>
          </div>
          <ul className="text-xs text-yellow-300 space-y-1">
            {metrics.lcp && metrics.lcp > 2500 && (
              <li>• Optimize images and reduce LCP</li>
            )}
            {metrics.fid && metrics.fid > 100 && (
              <li>• Reduce JavaScript bundle size</li>
            )}
            {metrics.cls && metrics.cls > 0.1 && (
              <li>• Fix layout shifts and set image dimensions</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
