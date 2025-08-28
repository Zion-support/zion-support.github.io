import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Download, 
  Globe, 
  HardDrive, 
  Network, 
  RefreshCw, 
  Settings, 
  Shield, 
  Zap 
} from 'lucide-react';
import resourceMonitor from '../utils/resourceMonitor';
import mimeTypeFallback from '../utils/mimeTypeFallback';

interface PerformanceMetrics {
  loadTime: number;
  resourceCount: number;
  errorCount: number;
  mimeTypeIssues: number;
  cacheHitRate: number;
  networkLatency: number;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    resourceCount: 0,
    errorCount: 0,
    mimeTypeIssues: 0,
    cacheHitRate: 0,
    networkLatency: 0
  });
  const [resourceErrors, setResourceErrors] = useState<any[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    // Start monitoring when component mounts
    if (!isMonitoring) {
      startMonitoring();
    }

    // Collect initial metrics
    collectMetrics();

    // Set up periodic metric collection
    const interval = setInterval(collectMetrics, 5000);

    return () => {
      clearInterval(interval);
      if (isMonitoring) {
        stopMonitoring();
      }
    };
  }, []);

  const startMonitoring = () => {
    resourceMonitor.start();
    setIsMonitoring(true);
    console.log('🚀 Performance monitoring started');
  };

  const stopMonitoring = () => {
    resourceMonitor.stop();
    setIsMonitoring(false);
    console.log('🛑 Performance monitoring stopped');
  };

  const collectMetrics = async () => {
    try {
      // Performance timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

      // Resource count
      const resources = performance.getEntriesByType('resource');
      const resourceCount = resources.length;

      // Error count
      const errors = resourceMonitor.getErrors();
      const errorCount = errors.length;

      // MIME type issues
      const mimeTypeIssues = errors.filter(e => 
        e.error.includes('MIME') || e.error.includes('content-type')
      ).length;

      // Cache hit rate (simplified)
      const cacheHitRate = resources.filter(r => 
        (r as PerformanceResourceTiming).transferSize === 0
      ).length / resourceCount * 100;

      // Network latency
      const networkLatency = resources.reduce((acc, r) => {
        const resource = r as PerformanceResourceTiming;
        return acc + (resource.responseStart - resource.requestStart);
      }, 0) / resourceCount;

      setMetrics({
        loadTime,
        resourceCount,
        errorCount,
        mimeTypeIssues,
        cacheHitRate: isNaN(cacheHitRate) ? 0 : cacheHitRate,
        networkLatency: isNaN(networkLatency) ? 0 : networkLatency
      });

      setResourceErrors(errors);

    } catch (error) {
      console.error('Error collecting metrics:', error);
    }
  };

  const refreshMetrics = () => {
    collectMetrics();
  };

  const fixMimeTypeIssues = async () => {
    try {
      await mimeTypeFallback.preloadCriticalResources();
      collectMetrics();
    } catch (error) {
      console.error('Error fixing MIME type issues:', error);
    }
  };

  const getStatusColor = (value: number, threshold: number) => {
    if (value <= threshold) return 'text-green-400';
    if (value <= threshold * 1.5) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getStatusIcon = (value: number, threshold: number) => {
    if (value <= threshold) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (value <= threshold * 1.5) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <AlertTriangle className="w-5 h-5 text-red-400" />;
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Dashboard */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-h-[80vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <h3 className="font-semibold">Performance Monitor</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={refreshMetrics}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    title="Refresh Metrics"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    title="Close"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto">
              {/* Monitoring Status */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-sm text-gray-300">Monitoring Status</span>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`} />
                  <span className="text-sm text-gray-300">
                    {isMonitoring ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-gray-400">Load Time</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {metrics.loadTime.toFixed(0)}ms
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <HardDrive className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-gray-400">Resources</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {metrics.resourceCount}
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-gray-400">Errors</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {metrics.errorCount}
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-gray-400">MIME Issues</span>
                  </div>
                  <div className="text-lg font-semibold text-white">
                    {metrics.mimeTypeIssues}
                  </div>
                </div>
              </div>

              {/* Performance Indicators */}
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Cache Hit Rate</span>
                    {getStatusIcon(100 - metrics.cacheHitRate, 20)}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        metrics.cacheHitRate >= 80 ? 'bg-green-500' : 
                        metrics.cacheHitRate >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${metrics.cacheHitRate}%` }}
                    />
                  </div>
                  <div className="text-right text-xs text-gray-400 mt-1">
                    {metrics.cacheHitRate.toFixed(1)}%
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Network Latency</span>
                    {getStatusIcon(metrics.networkLatency, 100)}
                  </div>
                  <div className={`text-lg font-semibold ${getStatusColor(metrics.networkLatency, 100)}`}>
                    {metrics.networkLatency.toFixed(0)}ms
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button
                  onClick={fixMimeTypeIssues}
                  disabled={metrics.mimeTypeIssues === 0}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Settings className="w-4 h-4" />
                  <span>Fix MIME Type Issues</span>
                </button>

                <button
                  onClick={isMonitoring ? stopMonitoring : startMonitoring}
                  className={`w-full py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
                    isMonitoring 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isMonitoring ? (
                    <>
                      <AlertTriangle className="w-4 h-4" />
                      <span>Stop Monitoring</span>
                    </>
                  ) : (
                    <>
                      <Activity className="w-4 h-4" />
                      <span>Start Monitoring</span>
                    </>
                  )}
                </button>
              </div>

              {/* Resource Errors */}
              {resourceErrors.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Recent Errors</h4>
                  <div className="max-h-32 overflow-y-auto space-y-2">
                    {resourceErrors.slice(-5).map((error, index) => (
                      <div key={index} className="p-2 bg-red-500/10 border border-red-500/20 rounded text-xs">
                        <div className="text-red-400 font-medium">{error.type}</div>
                        <div className="text-red-300 truncate">{error.url}</div>
                        <div className="text-red-400">{error.error}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Quick Stats */}
        <div className="p-4 bg-slate-800/50">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400">
                {metrics.lcp ? Math.round(metrics.lcp) : '--'}
              </div>
              <div className="text-xs text-slate-400">LCP (ms)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">
                {metrics.fid ? Math.round(metrics.fid) : '--'}
              </div>
              <div className="text-xs text-slate-400">FID (ms)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">
                {metrics.cls ? metrics.cls.toFixed(3) : '--'}
              </div>
              <div className="text-xs text-slate-400">CLS</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;
