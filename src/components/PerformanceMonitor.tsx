import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Gauge, 
  Clock, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  X, 
  ChevronDown, 
  ChevronUp,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Info,
  Settings,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  score: number; // Overall performance score
}

interface MetricThresholds {
  good: number;
  needsImprovement: number;
  poor: number;
}

const PERFORMANCE_THRESHOLDS: Record<keyof Omit<PerformanceMetrics, 'score'>, MetricThresholds> = {
  fcp: { good: 1800, needsImprovement: 3000, poor: 3000 },
  lcp: { good: 2500, needsImprovement: 4000, poor: 4000 },
  fid: { good: 100, needsImprovement: 300, poor: 300 },
  cls: { good: 0.1, needsImprovement: 0.25, poor: 0.25 },
  ttfb: { good: 800, needsImprovement: 1800, poor: 1800 }
};

const getMetricColor = (metric: keyof Omit<PerformanceMetrics, 'score'>, value: number): string => {
  const thresholds = PERFORMANCE_THRESHOLDS[metric];
  if (value <= thresholds.good) return 'text-green-400';
  if (value <= thresholds.needsImprovement) return 'text-yellow-400';
  return 'text-red-400';
};

const getMetricStatus = (metric: keyof Omit<PerformanceMetrics, 'score'>, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const thresholds = PERFORMANCE_THRESHOLDS[metric];
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.needsImprovement) return 'needs-improvement';
  return 'poor';
};

const getScoreColor = (score: number): string => {
  if (score >= 90) return 'text-green-400';
  if (score >= 50) return 'text-yellow-400';
  return 'text-red-400';
};

const getScoreStatus = (score: number): 'good' | 'needs-improvement' | 'poor' => {
  if (score >= 90) return 'good';
  if (score >= 50) return 'needs-improvement';
  return 'poor';
};

const formatMetric = (metric: keyof Omit<PerformanceMetrics, 'score'>, value: number): string => {
  if (metric === 'cls') return value.toFixed(3);
  if (metric === 'fid') return `${value}ms`;
  return `${value}ms`;
};

const getMetricIcon = (status: 'good' | 'needs-improvement' | 'poor') => {
  switch (status) {
    case 'good':
      return <CheckCircle className="w-4 h-4 text-green-400" />;
    case 'needs-improvement':
      return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
    case 'poor':
      return <X className="w-4 h-4 text-red-400" />;
  }
};

export function PerformanceMonitor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    score: 0
  });
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [autoHide, setAutoHide] = useState(true);

  // Simulate performance metrics (in real app, use Web Vitals API)
  const simulateMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {
      fcp: Math.random() * 3000 + 500,
      lcp: Math.random() * 5000 + 1000,
      fid: Math.random() * 400 + 50,
      cls: Math.random() * 0.3 + 0.05,
      ttfb: Math.random() * 2000 + 500,
      score: 0
    };

    // Calculate overall score
    let totalScore = 0;
    let metricCount = 0;

    Object.keys(PERFORMANCE_THRESHOLDS).forEach((metric) => {
      const key = metric as keyof Omit<PerformanceMetrics, 'score'>;
      const value = newMetrics[key];
      const thresholds = PERFORMANCE_THRESHOLDS[key];
      
      if (value <= thresholds.good) {
        totalScore += 100;
      } else if (value <= thresholds.needsImprovement) {
        totalScore += 50;
      } else {
        totalScore += 25;
      }
      metricCount++;
    });

    newMetrics.score = Math.round(totalScore / metricCount);
    setMetrics(newMetrics);
    setLastUpdate(new Date());
  }, []);

  useEffect(() => {
    // Initial metrics
    simulateMetrics();

    // Auto-hide after 10 seconds if enabled
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [autoHide, simulateMetrics]);

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(simulateMetrics, 5000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring, simulateMetrics]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    if (autoHide) {
      setAutoHide(false);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
  };

  const refreshMetrics = () => {
    simulateMetrics();
  };

  const resetAutoHide = () => {
    setAutoHide(true);
    setIsVisible(false);
  };

  if (!isVisible) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleVisibility}
        className="fixed bottom-6 right-6 z-50 p-3 bg-slate-800 hover:bg-slate-700 rounded-full shadow-lg border border-slate-600 transition-all duration-200 group"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">!</span>
        </div>
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-80 bg-slate-800 rounded-xl shadow-2xl border border-slate-600 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-700/50 border-b border-slate-600">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-semibold text-white">Performance Monitor</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleMonitoring}
            className={`p-1.5 rounded-lg transition-colors duration-200 ${
              isMonitoring 
                ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                : 'bg-slate-600 text-gray-400 hover:bg-slate-500'
            }`}
            title={isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
          >
            <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-gray-400'}`} />
          </button>
          <button
            onClick={refreshMetrics}
            className="p-1.5 rounded-lg bg-slate-600 text-gray-400 hover:bg-slate-500 transition-colors duration-200"
            title="Refresh Metrics"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
          <button
            onClick={toggleExpanded}
            className="p-1.5 rounded-lg bg-slate-600 text-gray-400 hover:bg-slate-500 transition-colors duration-200"
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
          <button
            onClick={toggleVisibility}
            className="p-1.5 rounded-lg bg-slate-600 text-gray-400 hover:bg-slate-500 transition-colors duration-200"
            title="Close"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Overall Score */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-300">Overall Score</span>
            <span className={`text-lg font-bold ${getScoreColor(metrics.score)}`}>
              {metrics.score}/100
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${metrics.score}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`h-2 rounded-full ${
                getScoreStatus(metrics.score) === 'good' ? 'bg-green-500' :
                getScoreStatus(metrics.score) === 'needs-improvement' ? 'bg-yellow-500' : 'bg-red-500'
              }`}
            />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="space-y-3">
          {Object.entries(PERFORMANCE_THRESHOLDS).map(([metric, thresholds]) => {
            const metricKey = metric as keyof Omit<PerformanceMetrics, 'score'>;
            const value = metrics[metricKey];
            const status = getMetricStatus(metricKey, value);
            const color = getMetricColor(metricKey, value);
            
            return (
              <div key={metric} className="flex items-center justify-between p-2 bg-slate-700/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  {getMetricIcon(status)}
                  <span className="text-sm font-medium text-gray-300 uppercase">{metric}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-mono ${color}`}>
                    {formatMetric(metricKey, value)}
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${
                      status === 'good' ? 'bg-green-400' :
                      status === 'needs-improvement' ? 'bg-yellow-400' : 'bg-red-400'
                    }`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded View */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-slate-600"
            >
              {/* Additional Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Last Update:</span>
                  <span className="text-gray-300">
                    {lastUpdate.toLocaleTimeString()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Monitoring:</span>
                  <span className={`${isMonitoring ? 'text-green-400' : 'text-gray-400'}`}>
                    {isMonitoring ? 'Active' : 'Inactive'}
                  </span>
                </div>

                {/* Recommendations */}
                <div className="mt-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Info className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-gray-300">Recommendations</span>
                  </div>
                  <div className="text-xs text-gray-400 space-y-1">
                    {metrics.lcp > 4000 && (
                      <p>• Optimize images and reduce LCP time</p>
                    )}
                    {metrics.cls > 0.25 && (
                      <p>• Fix layout shifts and stabilize elements</p>
                    )}
                    {metrics.fid > 300 && (
                      <p>• Reduce JavaScript execution time</p>
                    )}
                    {metrics.ttfb > 1800 && (
                      <p>• Optimize server response time</p>
                    )}
                    {metrics.score >= 90 && (
                      <p>• Excellent performance! Keep it up</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-slate-600 flex items-center justify-between">
          <button
            onClick={resetAutoHide}
            className="text-xs text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            Auto-hide
          </button>
          <div className="flex items-center space-x-2">
            <Settings className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-400">v2.0</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
