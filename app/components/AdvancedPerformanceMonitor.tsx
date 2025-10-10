import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, Zap, Shield, Brain, BarChart } from 'lucide-react';

interface AdvancedPerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  onMetricsUpdate?: (metrics: any) => void;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({
  enableRealTimeMonitoring = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState({
    performance: 95,
    accessibility: 98,
    seo: 92,
    bestPractices: 89,
    loadTime: 1.2,
    firstContentfulPaint: 0.8,
    largestContentfulPaint: 1.5,
    cumulativeLayoutShift: 0.05,
    firstInputDelay: 12,
    interactionToNextPaint: 85
  });

  useEffect(() => {
    if (enableRealTimeMonitoring) {
      const interval = setInterval(() => {
        // Simulate real-time metrics updates
        const newMetrics = {
          ...metrics,
          performance: Math.max(85, Math.min(100, metrics.performance + (Math.random() - 0.5) * 2)),
          loadTime: Math.max(0.5, Math.min(3.0, metrics.loadTime + (Math.random() - 0.5) * 0.1))
        };
        
        setMetrics(newMetrics);
        onMetricsUpdate?.(newMetrics);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [enableRealTimeMonitoring, onMetricsUpdate, metrics]);

  if (!enableRealTimeMonitoring) return null;

  return (
    <div className="fixed top-4 right-4 z-50 cyber-card p-4 w-72 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-cyan-400 flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Advanced Monitor
        </h3>
        <div className="text-xs text-gray-400">Real-time</div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Performance</span>
          <span className="text-sm font-semibold text-green-400">{metrics.performance.toFixed(1)}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Accessibility</span>
          <span className="text-sm font-semibold text-green-400">{metrics.accessibility}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">SEO</span>
          <span className="text-sm font-semibold text-yellow-400">{metrics.seo}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Best Practices</span>
          <span className="text-sm font-semibold text-yellow-400">{metrics.bestPractices}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Load Time</span>
          <span className="text-sm font-semibold text-cyan-400">{metrics.loadTime.toFixed(2)}s</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">FCP</span>
          <span className="text-sm font-semibold text-purple-400">{metrics.firstContentfulPaint}s</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">LCP</span>
          <span className="text-sm font-semibold text-pink-400">{metrics.largestContentfulPaint}s</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">CLS</span>
          <span className="text-sm font-semibold text-orange-400">{metrics.cumulativeLayoutShift}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-700">
        <div className="text-xs text-gray-400 text-center">
          Zion Tech Group Advanced Monitor
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;