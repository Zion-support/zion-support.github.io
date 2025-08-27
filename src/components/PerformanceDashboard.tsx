import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  BarChart3, 
  Cpu, 
  HardDrive,
  Network,
  Monitor,
  Smartphone
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  bundleSize: number;
  lighthouseScore: number;
}

export const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    bundleSize: 0,
    lighthouseScore: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate performance monitoring
    const interval = setInterval(() => {
      setMetrics(prev => ({
        loadTime: Math.random() * 2000 + 500,
        memoryUsage: Math.random() * 100 + 20,
        cpuUsage: Math.random() * 80 + 10,
        networkLatency: Math.random() * 100 + 20,
        bundleSize: Math.random() * 500 + 200,
        lighthouseScore: Math.random() * 30 + 70
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Show dashboard after page load
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const getPerformanceColor = (value: number, threshold: number) => {
    if (value <= threshold) return 'text-green-400';
    if (value <= threshold * 1.5) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPerformanceIcon = (value: number, threshold: number) => {
    if (value <= threshold) return '🟢';
    if (value <= threshold * 1.5) return '🟡';
    return '🔴';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 rounded-xl p-4 shadow-2xl shadow-zion-cyan/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-zion-cyan font-semibold text-sm flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Performance Monitor
          </h3>
          <div className="text-xs text-zinc-400">
            Live Metrics
          </div>
        </div>

        <div className="space-y-3">
          {/* Load Time */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <Clock className="w-3 h-3" />
              Load Time
            </div>
            <div className={`text-xs font-mono ${getPerformanceColor(metrics.loadTime, 1000)}`}>
              {getPerformanceIcon(metrics.loadTime, 1000)} {Math.round(metrics.loadTime)}ms
            </div>
          </div>

          {/* Memory Usage */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <HardDrive className="w-3 h-3" />
              Memory
            </div>
            <div className={`text-xs font-mono ${getPerformanceColor(metrics.memoryUsage, 50)}`}>
              {getPerformanceIcon(metrics.memoryUsage, 50)} {Math.round(metrics.memoryUsage)}MB
            </div>
          </div>

          {/* CPU Usage */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <Cpu className="w-3 h-3" />
              CPU
            </div>
            <div className={`text-xs font-mono ${getPerformanceColor(metrics.cpuUsage, 40)}`}>
              {getPerformanceIcon(metrics.cpuUsage, 40)} {Math.round(metrics.cpuUsage)}%
            </div>
          </div>

          {/* Network Latency */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <Network className="w-3 h-3" />
              Network
            </div>
            <div className={`text-xs font-mono ${getPerformanceColor(metrics.networkLatency, 50)}`}>
              {getPerformanceIcon(metrics.networkLatency, 50)} {Math.round(metrics.networkLatency)}ms
            </div>
          </div>

          {/* Bundle Size */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <BarChart3 className="w-3 h-3" />
              Bundle
            </div>
            <div className={`text-xs font-mono ${getPerformanceColor(metrics.bundleSize, 300)}`}>
              {getPerformanceIcon(metrics.bundleSize, 300)} {Math.round(metrics.bundleSize)}KB
            </div>
          </div>

          {/* Lighthouse Score */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <TrendingUp className="w-3 h-3" />
              Lighthouse
            </div>
            <div className={`text-xs font-mono ${getPerformanceColor(100 - metrics.lighthouseScore, 20)}`}>
              {getPerformanceIcon(100 - metrics.lighthouseScore, 20)} {Math.round(metrics.lighthouseScore)}/100
            </div>
          </div>
        </div>

        {/* Device Info */}
        <div className="mt-4 pt-3 border-t border-zinc-700/50">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-1">
              {window.innerWidth > 768 ? (
                <Monitor className="w-3 h-3" />
              ) : (
                <Smartphone className="w-3 h-3" />
              )}
              {window.innerWidth > 768 ? 'Desktop' : 'Mobile'}
            </div>
            <div className="text-zion-cyan">
              {navigator.connection?.effectiveType || '4G'}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
