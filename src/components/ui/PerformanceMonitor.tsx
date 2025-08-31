import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, Zap } from 'lucide-react';

export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
}

export interface PerformanceMonitorProps {
  showDetails?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
  className?: string;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const getPerformanceMetrics = (): PerformanceMetrics => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paintEntries = performance.getEntriesByType('paint');
  
  const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
  const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
  const fmp = paintEntries.find(entry => entry.name === 'first-meaningful-paint')?.startTime || 0;
  
  return {
    fcp: Math.round(fcp),
    lcp: Math.round(lcp),
    fid: 0, // Would need to be measured with real user interactions
    cls: 0, // Would need to be measured with real user interactions
    ttfb: Math.round(navigation?.responseStart - navigation?.requestStart || 0),
    fmp: Math.round(fmp)
  };
};

const getPerformanceScore = (metrics: PerformanceMetrics): number => {
  let score = 100;
  
  // FCP scoring (0-100)
  if (metrics.fcp > 2500) score -= 30;
  else if (metrics.fcp > 1800) score -= 20;
  else if (metrics.fcp > 1000) score -= 10;
  
  // LCP scoring (0-100)
  if (metrics.lcp > 4000) score -= 30;
  else if (metrics.lcp > 2500) score -= 20;
  else if (metrics.lcp > 1700) score -= 10;
  
  // TTFB scoring (0-100)
  if (metrics.ttfb > 800) score -= 20;
  else if (metrics.ttfb > 600) score -= 10;
  
  return Math.max(0, score);
};

const getPerformanceGrade = (score: number): { grade: string; color: string; icon: React.ComponentType } => {
  if (score >= 90) return { grade: 'A', color: 'text-green-500', icon: CheckCircle };
  if (score >= 80) return { grade: 'B', color: 'text-blue-500', icon: TrendingUp };
  if (score >= 70) return { grade: 'C', color: 'text-yellow-500', icon: AlertTriangle };
  if (score >= 60) return { grade: 'D', color: 'text-orange-500', icon: TrendingDown };
  return { grade: 'F', color: 'text-red-500', icon: AlertTriangle };
};

const MetricCard: React.FC<{ label: string; value: number; unit: string; threshold: number; className?: string }> = ({
  label,
  value,
  unit,
  threshold,
  className = ''
}) => {
  const isGood = value <= threshold;
  const isWarning = value > threshold && value <= threshold * 1.5;
  const isPoor = value > threshold * 1.5;
  
  const getColor = () => {
    if (isGood) return 'text-green-500';
    if (isWarning) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  const getIcon = () => {
    if (isGood) return <CheckCircle className="w-4 h-4" />;
    if (isWarning) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-zion-slate-light">{label}</span>
        {getIcon()}
      </div>
      <div className="flex items-baseline space-x-1">
        <span className={`text-2xl font-bold ${getColor()}`}>{value}</span>
        <span className="text-sm text-zion-slate-light">{unit}</span>
      </div>
      <div className="mt-2">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className={`h-2 rounded-full ${isGood ? 'bg-green-500' : isWarning ? 'bg-yellow-500' : 'bg-red-500'}`}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((value / threshold) * 100, 100)}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="text-xs text-zion-slate-light mt-1 block">
          Target: {threshold}{unit}
        </span>
      </div>
    </motion.div>
  );
};

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = true,
  autoRefresh = true,
  refreshInterval = 5000,
  className = '',
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>(getPerformanceMetrics());
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const updateMetrics = useCallback(() => {
    const newMetrics = getPerformanceMetrics();
    setMetrics(newMetrics);
    setLastUpdate(new Date());
    onMetricsUpdate?.(newMetrics);
  }, [onMetricsUpdate]);

  useEffect(() => {
    updateMetrics();
    
    if (autoRefresh) {
      const interval = setInterval(updateMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval, updateMetrics]);

  const score = getPerformanceScore(metrics);
  const grade = getPerformanceGrade(score);
  const GradeIcon = grade.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-zion-slate-dark/80 backdrop-blur-md rounded-xl p-6 border border-zion-purple/20 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-zion-cyan/20 rounded-lg">
            <Activity className="w-6 h-6 text-zion-cyan" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
            <p className="text-sm text-zion-slate-light">Core Web Vitals & Metrics</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <GradeIcon className={`w-5 h-5 ${grade.color}`} />
              <span className={`text-2xl font-bold ${grade.color}`}>{grade.grade}</span>
            </div>
            <span className="text-sm text-zion-slate-light">{score}/100</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 bg-zion-purple/20 rounded-lg text-zion-purple hover:bg-zion-purple/30 transition-colors"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ▼
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <MetricCard
          label="First Contentful Paint"
          value={metrics.fcp}
          unit="ms"
          threshold={1800}
        />
        <MetricCard
          label="Largest Contentful Paint"
          value={metrics.lcp}
          unit="ms"
          threshold={2500}
        />
        <MetricCard
          label="Time to First Byte"
          value={metrics.ttfb}
          unit="ms"
          threshold={600}
        />
      </div>

      {/* Detailed Metrics */}
      <AnimatePresence>
        {isExpanded && showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="border-t border-zion-purple/20 pt-4">
              <h4 className="text-md font-semibold text-white mb-3">Detailed Metrics</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">First Meaningful Paint</span>
                    <span className="text-white font-mono">{metrics.fmp}ms</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">First Input Delay</span>
                    <span className="text-white font-mono">{metrics.fid}ms</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Cumulative Layout Shift</span>
                    <span className="text-white font-mono">{metrics.cls.toFixed(3)}</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Last Updated</span>
                    <span className="text-white font-mono text-xs">
                      {lastUpdate.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-zion-purple/20">
        <button
          onClick={updateMetrics}
          className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-lg hover:bg-zion-cyan/30 transition-colors"
        >
          <Zap className="w-4 h-4" />
          <span>Refresh</span>
        </button>
        
        <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
          <Clock className="w-4 h-4" />
          <span>Auto-refresh: {autoRefresh ? 'On' : 'Off'}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;