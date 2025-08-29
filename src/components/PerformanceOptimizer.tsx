import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Zap,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  X,
  Info,
  BarChart3,
  Gauge,
  HardDrive,
  Wifi,
  Cpu,
  Memory,
  Battery,
  Thermometer,
  Settings,
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
  si: number;
  tti: number;
  tbt: number;
  memory: number;
  cpu: number;
  network: number;
}

interface OptimizationHistory {
  id: string;
  timestamp: Date;
  action: string;
  impact: string;
  details: string;
}

export default function PerformanceOptimizer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fmp: 0,
          si: 0,
    tti: 0,
    tbt: 0,
    memory: 0,
    cpu: 0,
    network: 0
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<OptimizationHistory[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [autoOptimize, setAutoOptimize] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Simulate performance metrics
  const simulateMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {
      fcp: Math.random() * 2000 + 500, // 500-2500ms
      lcp: Math.random() * 4000 + 1000, // 1000-5000ms
      fid: Math.random() * 100 + 10, // 10-110ms
      cls: Math.random() * 0.3 + 0.01, // 0.01-0.31
      ttfb: Math.random() * 800 + 200, // 200-1000ms
      fmp: Math.random() * 3000 + 1000, // 1000-4000ms
      si: Math.random() * 5000 + 2000, // 2000-7000ms
      tti: Math.random() * 4000 + 1500, // 1500-5500ms
      tbt: Math.random() * 300 + 50, // 50-350ms
      memory: Math.random() * 100 + 20, // 20-120MB
      cpu: Math.random() * 80 + 10, // 10-90%
      network: Math.random() * 50 + 10 // 10-60KB/s
    };
    setMetrics(newMetrics);
    setLastUpdate(new Date());
  }, []);

  // Auto-optimization logic
  useEffect(() => {
    if (autoOptimize) {
      intervalRef.current = setInterval(() => {
        simulateMetrics();
        // Auto-optimize if metrics are poor
        if (metrics.fcp > 2000 || metrics.lcp > 4000 || metrics.cls > 0.25) {
          performOptimization('Auto-optimization triggered', 'High');
        }
      }, 30000); // Check every 30 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoOptimize, metrics]);

  const performOptimization = (action: string, impact: string) => {
    setIsOptimizing(true);
    
    setTimeout(() => {
      const optimization: OptimizationHistory = {
        id: Date.now().toString(),
        timestamp: new Date(),
        action,
        impact,
        details: `Optimized performance metrics at ${new Date().toLocaleTimeString()}`
      };
      
      setOptimizationHistory(prev => [optimization, ...prev.slice(0, 9)]);
      setIsOptimizing(false);
      
      // Simulate improved metrics
      setTimeout(simulateMetrics, 1000);
    }, 2000);
  };

  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number) => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 600, needsImprovement: 1800 },
      fmp: { good: 2000, needsImprovement: 4000 },
      si: { good: 3400, needsImprovement: 5800 },
      tti: { good: 3800, needsImprovement: 7300 },
      tbt: { good: 200, needsImprovement: 600 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'neutral';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'warning';
    return 'critical';
  };

  const getMetricColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getMetricIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'critical': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <Info className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatMetric = (metric: keyof PerformanceMetrics, value: number) => {
    if (metric === 'cls') return value.toFixed(3);
    if (metric === 'memory') return `${value.toFixed(1)} MB`;
    if (metric === 'cpu') return `${value.toFixed(1)}%`;
    if (metric === 'network') return `${value.toFixed(1)} KB/s`;
    return `${value.toFixed(0)}ms`;
  };

  const getMetricLabel = (metric: keyof PerformanceMetrics) => {
    const labels: Record<string, string> = {
      fcp: 'First Contentful Paint',
      lcp: 'Largest Contentful Paint',
      fid: 'First Input Delay',
      cls: 'Cumulative Layout Shift',
      ttfb: 'Time to First Byte',
      fmp: 'First Meaningful Paint',
      si: 'Speed Index',
      tti: 'Time to Interactive',
      tbt: 'Total Blocking Time'
    };
    return labels[metric] || metric;
  };

  const getMetricDescription = (metric: keyof PerformanceMetrics) => {
    const descriptions: Record<string, string> = {
      fcp: 'Time until first content is painted on screen',
      lcp: 'Time until largest content element is visible',
      fid: 'Time from first interaction to response',
      cls: 'Measure of visual stability',
      ttfb: 'Time to receive first byte from server',
      fmp: 'Time until primary content is visible',
      si: 'How quickly content is visually displayed',
      tti: 'Time until page becomes interactive',
      tbt: 'Total time page is blocked from responding'
    };
    return descriptions[metric] || '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 right-4 z-50"
      onAnimationComplete={() => setIsVisible(true)}
    >
      <motion.div
        className="bg-zion-slate/95 backdrop-blur-md border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
        animate={{ width: isExpanded ? 400 : 60, height: isExpanded ? 500 : 60 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            {isExpanded && (
              <div>
                <h3 className="text-white font-semibold">Performance Optimizer</h3>
                <p className="text-xs text-zion-cyan/70">Real-time monitoring</p>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {isExpanded && (
              <>
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="p-2 hover:bg-zion-cyan/10 rounded-lg transition-colors"
                  title="Advanced Options"
                >
                  <Settings className="w-4 h-4 text-zion-cyan" />
                </button>
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="p-2 hover:bg-zion-cyan/10 rounded-lg transition-colors"
                  title="Optimization History"
                >
                  <BarChart3 className="w-4 h-4 text-zion-cyan" />
                </button>
              </>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-zion-cyan/10 rounded-lg transition-colors"
            >
              {isExpanded ? <X className="w-4 h-4 text-zion-cyan" /> : <Eye className="w-4 h-4 text-zion-cyan" />}
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Quick Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => performOptimization('Manual optimization', 'Medium')}
                disabled={isOptimizing}
                className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all disabled:opacity-50"
              >
                {isOptimizing ? (
                  <RefreshCw className="w-4 h-4 animate-spin mx-auto" />
                ) : (
                  'Optimize Now'
                )}
              </button>
              <button
                onClick={simulateMetrics}
                className="px-3 py-2 border border-zion-cyan/30 text-zion-cyan rounded-lg text-sm hover:bg-zion-cyan/10 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            {/* Auto-optimization Toggle */}
            <div className="flex items-center justify-between p-3 bg-zion-slate-dark/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-zion-cyan" />
                <span className="text-sm text-white">Auto-optimize</span>
              </div>
              <button
                onClick={() => setAutoOptimize(!autoOptimize)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  autoOptimize ? 'bg-zion-cyan' : 'bg-zion-slate-light/30'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    autoOptimize ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Core Web Vitals */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <Gauge className="w-4 h-4 text-zion-cyan" />
                Core Web Vitals
              </h4>
              
              {(['fcp', 'lcp', 'fid', 'cls'] as const).map((metric) => {
                const status = getMetricStatus(metric, metrics[metric]);
                return (
                  <div key={metric} className="flex items-center justify-between p-2 bg-zion-slate-dark/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      {getMetricIcon(status)}
                      <div>
                        <div className="text-xs text-gray-300">{getMetricLabel(metric)}</div>
                        <div className="text-xs text-zion-cyan/70">{getMetricDescription(metric)}</div>
                      </div>
                    </div>
                    <div className={`text-sm font-mono ${getMetricColor(status)}`}>
                      {formatMetric(metric, metrics[metric])}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Metrics */}
            {showAdvanced && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-zion-cyan" />
                  Advanced Metrics
                </h4>
                
                {(['ttfb', 'fmp', 'si', 'tti', 'tbt'] as const).map((metric) => {
                  const status = getMetricStatus(metric, metrics[metric]);
                  return (
                    <div key={metric} className="flex items-center justify-between p-2 bg-zion-slate-dark/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        {getMetricIcon(status)}
                        <div className="text-xs text-gray-300">{getMetricLabel(metric)}</div>
                      </div>
                      <div className={`text-sm font-mono ${getMetricColor(status)}`}>
                        {formatMetric(metric, metrics[metric])}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* System Metrics */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-zion-cyan" />
                System Resources
              </h4>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-2 bg-zion-slate-dark/30 rounded-lg">
                  <div className="text-xs text-gray-300">Memory</div>
                  <div className="text-sm font-mono text-zion-cyan">{formatMetric('memory', metrics.memory)}</div>
                </div>
                <div className="text-center p-2 bg-zion-slate-dark/30 rounded-lg">
                  <div className="text-xs text-gray-300">CPU</div>
                  <div className="text-sm font-mono text-zion-cyan">{formatMetric('cpu', metrics.cpu)}</div>
                </div>
                <div className="text-center p-2 bg-zion-slate-dark/30 rounded-lg">
                  <div className="text-xs text-gray-300">Network</div>
                  <div className="text-sm font-mono text-zion-cyan">{formatMetric('network', metrics.network)}</div>
                </div>
              </div>
            </div>

            {/* Last Update */}
            <div className="text-xs text-zion-cyan/50 text-center">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </div>

            {/* Optimization History */}
            {showHistory && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <h4 className="text-sm font-semibold text-white">Recent Optimizations</h4>
                  {optimizationHistory.map((item) => (
                    <div key={item.id} className="p-2 bg-zion-slate-dark/30 rounded-lg text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-zion-cyan">{item.action}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                          item.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {item.impact}
                        </span>
                      </div>
                      <div className="text-gray-400">{item.details}</div>
                      <div className="text-zion-cyan/50 mt-1">
                        {item.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
