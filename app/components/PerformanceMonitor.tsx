import React, { memo, useEffect, useState } from 'react';
import { Activity, Zap, Shield, TrendingUp } from 'lucide-react';

const PerformanceMonitor: React.FC = memo(() => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0
  });

  useEffect(() => {
    // Simulate performance monitoring
    const interval = setInterval(() => {
      setMetrics({
        loadTime: Math.random() * 100 + 50, // 50-150ms
        memoryUsage: Math.random() * 20 + 10, // 10-30%
        cpuUsage: Math.random() * 15 + 5, // 5-20%
        networkLatency: Math.random() * 50 + 10 // 10-60ms
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="quantum-card p-4 space-y-3 min-w-[200px]">
        <div className="flex items-center space-x-2 mb-3">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="text-white font-semibold text-sm">Performance</span>
        </div>
        
        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Load Time</span>
            <span className="text-cyan-400 font-mono">{metrics.loadTime.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Memory</span>
            <span className="text-green-400 font-mono">{metrics.memoryUsage.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">CPU</span>
            <span className="text-yellow-400 font-mono">{metrics.cpuUsage.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Latency</span>
            <span className="text-purple-400 font-mono">{metrics.networkLatency.toFixed(0)}ms</span>
          </div>
        </div>
      </div>
    </div>
  );
});

PerformanceMonitor.displayName = 'PerformanceMonitor';
export default PerformanceMonitor;