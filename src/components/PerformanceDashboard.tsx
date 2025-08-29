import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  BarChart3,
  Gauge,
  HardDrive,
  Network,
  Cpu,
  MemoryStick
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  tti: number;
  score: number;
}

interface ResourceMetrics {
  name: string;
  duration: number;
  size: number;
  type: string;
  status: 'fast' | 'medium' | 'slow';
}

export function PerformanceDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    tti: 0,
    score: 0
  });
  const [slowResources, setSlowResources] = useState<ResourceMetrics[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Get performance metrics from window object
  const getPerformanceMetrics = useCallback(() => {
    if (typeof window !== 'undefined' && (window as any).performanceMetrics) {
      const currentMetrics = (window as any).performanceMetrics.getMetrics();
      const score = (window as any).performanceMetrics.getPerformanceScore();
      
      setMetrics(prev => ({
        ...prev,
        score,
        ttfb: currentMetrics.ttfb || 0
      }));
    }
  }, []);

  // Monitor performance in real-time
  const startMonitoring = useCallback(() => {
    if (typeof window === 'undefined') return;

    setIsMonitoring(true);
    
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // FCP Observer
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // LCP Observer
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID Observer
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = entry.processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS Observer
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Resource Observer
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const slow: ResourceMetrics[] = [];
        
        entries.forEach((entry: any) => {
          if (entry.duration > 1000) {
            slow.push({
              name: entry.name,
              duration: entry.duration,
              size: entry.transferSize || 0,
              type: entry.initiatorType,
              status: entry.duration > 3000 ? 'slow' : entry.duration > 1500 ? 'medium' : 'fast'
            });
          }
        });

        if (slow.length > 0) {
          setSlowResources(slow.slice(0, 10)); // Keep top 10 slowest
        }
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    }

    // Update metrics every 5 seconds
    const interval = setInterval(() => {
      getPerformanceMetrics();
      setLastUpdate(new Date());
    }, 5000);

    return () => {
      clearInterval(interval);
      setIsMonitoring(false);
    };
  }, [getPerformanceMetrics]);

  // Start monitoring on mount
  useEffect(() => {
    const cleanup = startMonitoring();
    return cleanup;
  }, [startMonitoring]);

  // Get performance grade
  const getPerformanceGrade = (score: number): { grade: string; color: string; icon: React.ReactNode } => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400', icon: <CheckCircle className="w-5 h-5" /> };
    if (score >= 70) return { grade: 'B', color: 'text-yellow-400', icon: <AlertTriangle className="w-5 h-5" /> };
    if (score >= 50) return { grade: 'C', color: 'text-orange-400', icon: <AlertTriangle className="w-5 h-5" /> };
    return { grade: 'F', color: 'text-red-400', icon: <XCircle className="w-5 h-5" /> };
  };

  // Get metric status
  const getMetricStatus = (value: number, thresholds: { good: number; needsImprovement: number }): { status: string; color: string; icon: React.ReactNode } => {
    if (value <= thresholds.good) {
      return { status: 'Good', color: 'text-green-400', icon: <CheckCircle className="w-4 h-4" /> };
    } else if (value <= thresholds.needsImprovement) {
      return { status: 'Needs Improvement', color: 'text-yellow-400', icon: <AlertTriangle className="w-4 h-4" /> };
    } else {
      return { status: 'Poor', color: 'text-red-400', icon: <XCircle className="w-4 h-4" /> };
    }
  };

  const performanceGrade = getPerformanceGrade(metrics.score);

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-24 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus-visible-ring"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open performance dashboard"
      >
        <Activity className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Performance Dashboard Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Activity className="w-6 h-6 text-purple-400" />
                  Performance Dashboard
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`} />
                    {isMonitoring ? 'Monitoring' : 'Stopped'}
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                    aria-label="Close performance dashboard"
                  >
                    <XCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Performance Score */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-xl p-6 border border-slate-600">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Overall Performance Score</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Last updated:</span>
                      <span className="text-sm text-gray-300">
                        {lastUpdate.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className={`text-6xl font-bold ${performanceGrade.color}`}>
                        {performanceGrade.grade}
                      </div>
                      <div className="text-2xl font-bold text-white">{metrics.score}</div>
                      <div className="text-sm text-gray-400">out of 100</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {performanceGrade.icon}
                        <span className={`font-semibold ${performanceGrade.color}`}>
                          {performanceGrade.grade} Grade
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3">
                        <motion.div
                          className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-3 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${metrics.score}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Core Web Vitals
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* FCP */}
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">First Contentful Paint</span>
                      {getMetricStatus(metrics.fcp, { good: 1800, needsImprovement: 3000 }).icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{Math.round(metrics.fcp)}ms</div>
                    <div className={`text-sm ${getMetricStatus(metrics.fcp, { good: 1800, needsImprovement: 3000 }).color}`}>
                      {getMetricStatus(metrics.fcp, { good: 1800, needsImprovement: 3000 }).status}
                    </div>
                  </div>

                  {/* LCP */}
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">Largest Contentful Paint</span>
                      {getMetricStatus(metrics.lcp, { good: 2500, needsImprovement: 4000 }).icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{Math.round(metrics.lcp)}ms</div>
                    <div className={`text-sm ${getMetricStatus(metrics.lcp, { good: 2500, needsImprovement: 4000 }).color}`}>
                      {getMetricStatus(metrics.lcp, { good: 2500, needsImprovement: 4000 }).status}
                    </div>
                  </div>

                  {/* FID */}
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">First Input Delay</span>
                      {getMetricStatus(metrics.fid, { good: 100, needsImprovement: 300 }).icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{Math.round(metrics.fid)}ms</div>
                    <div className={`text-sm ${getMetricStatus(metrics.fid, { good: 100, needsImprovement: 300 }).color}`}>
                      {getMetricStatus(metrics.fid, { good: 100, needsImprovement: 300 }).status}
                    </div>
                  </div>

                  {/* CLS */}
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">Cumulative Layout Shift</span>
                      {getMetricStatus(metrics.cls, { good: 0.1, needsImprovement: 0.25 }).icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{metrics.cls.toFixed(3)}</div>
                    <div className={`text-sm ${getMetricStatus(metrics.cls, { good: 0.1, needsImprovement: 0.25 }).color}`}>
                      {getMetricStatus(metrics.cls, { good: 0.1, needsImprovement: 0.25 }).status}
                    </div>
                  </div>

                  {/* TTFB */}
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">Time to First Byte</span>
                      {getMetricStatus(metrics.ttfb, { good: 800, needsImprovement: 1800 }).icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{Math.round(metrics.ttfb)}ms</div>
                    <div className={`text-sm ${getMetricStatus(metrics.ttfb, { good: 800, needsImprovement: 1800 }).color}`}>
                      {getMetricStatus(metrics.ttfb, { good: 800, needsImprovement: 1800 }).status}
                    </div>
                  </div>

                  {/* TTI */}
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">Time to Interactive</span>
                      {getMetricStatus(metrics.tti, { good: 3500, needsImprovement: 5000 }).icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{Math.round(metrics.tti)}ms</div>
                    <div className={`text-sm ${getMetricStatus(metrics.tti, { good: 3500, needsImprovement: 5000 }).color}`}>
                      {getMetricStatus(metrics.tti, { good: 3500, needsImprovement: 5000 }).status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slow Resources */}
              {slowResources.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-400" />
                    Slow Resources ({slowResources.length})
                  </h3>
                  <div className="bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-600/50">
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Resource</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Type</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Duration</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Size</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {slowResources.map((resource, index) => (
                            <tr key={index} className="border-t border-slate-600 hover:bg-slate-600/30">
                              <td className="px-4 py-3 text-sm text-gray-300 font-mono">
                                {resource.name.length > 50 ? resource.name.substring(0, 50) + '...' : resource.name}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-400">{resource.type}</td>
                              <td className="px-4 py-3 text-sm text-gray-300">{Math.round(resource.duration)}ms</td>
                              <td className="px-4 py-3 text-sm text-gray-400">
                                {resource.size > 0 ? `${(resource.size / 1024).toFixed(1)}KB` : 'N/A'}
                              </td>
                              <td className="px-4 py-3">
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                  resource.status === 'fast' ? 'bg-green-500/20 text-green-400' :
                                  resource.status === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                  'bg-red-500/20 text-red-400'
                                }`}>
                                  {resource.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Performance Tips */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Performance Tips
                </h3>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Optimize images and use WebP format when possible</li>
                  <li>• Minimize JavaScript bundle size and use code splitting</li>
                  <li>• Enable compression and caching on your server</li>
                  <li>• Use CDN for static assets</li>
                  <li>• Monitor Core Web Vitals regularly</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}