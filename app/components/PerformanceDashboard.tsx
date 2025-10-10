import React, { useState, useEffect } from 'react';
import { BarChart, TrendingUp, Activity, Zap, Shield, Brain } from 'lucide-react';

const PerformanceDashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState({
    performance: 95,
    accessibility: 98,
    seo: 92,
    bestPractices: 89,
    loadTime: 1.2,
    firstContentfulPaint: 0.8,
    largestContentfulPaint: 1.5,
    cumulativeLayoutShift: 0.05
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 cyber-card p-4 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-cyan-400 flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Performance Dashboard
        </h3>
        <div className="text-xs text-gray-400">Live</div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Performance</span>
          <span className="text-sm font-semibold text-green-400">{metrics.performance}%</span>
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
          <span className="text-sm font-semibold text-cyan-400">{metrics.loadTime}s</span>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-700">
        <div className="text-xs text-gray-400 text-center">
          Zion Tech Group Performance Monitor
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;