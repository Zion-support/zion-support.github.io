import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  className?: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if PerformanceObserver is supported
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
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries[entries.length - 1];
        if (fidEntry) {
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getScore = (metric: keyof PerformanceMetrics): { score: number; color: string; label: string } => {
    const value = metrics[metric];
    if (value === null) return { score: 0, color: 'text-gray-400', label: 'N/A' };

    let score = 0;
    let color = '';
    let label = '';

    switch (metric) {
      case 'fcp':
        if (value < 1800) { score = 3; color = 'text-green-500'; label = 'Good'; }
        else if (value < 3000) { score = 2; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        else { score = 1; color = 'text-red-500'; label = 'Poor'; }
        break;
      case 'lcp':
        if (value < 2500) { score = 3; color = 'text-green-500'; label = 'Good'; }
        else if (value < 4000) { score = 2; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        else { score = 1; color = 'text-red-500'; label = 'Poor'; }
        break;
      case 'fid':
        if (value < 100) { score = 3; color = 'text-green-500'; label = 'Good'; }
        else if (value < 300) { score = 2; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        else { score = 1; color = 'text-red-500'; label = 'Poor'; }
        break;
      case 'cls':
        if (value < 0.1) { score = 3; color = 'text-green-500'; label = 'Good'; }
        else if (value < 0.25) { score = 2; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        else { score = 1; color = 'text-red-500'; label = 'Poor'; }
        break;
      case 'ttfb':
        if (value < 800) { score = 3; color = 'text-green-500'; label = 'Good'; }
        else if (value < 1800) { score = 2; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        else { score = 1; color = 'text-red-500'; label = 'Poor'; }
        break;
    }

    return { score, color, label };
  };

  const overallScore = Object.keys(metrics).reduce((acc, key) => {
    const metricScore = getScore(key as keyof PerformanceMetrics).score;
    return acc + metricScore;
  }, 0) / Object.keys(metrics).length;

  const overallColor = overallScore >= 2.5 ? 'text-green-500' : overallScore >= 1.5 ? 'text-yellow-500' : 'text-red-500';
  const overallLabel = overallScore >= 2.5 ? 'Excellent' : overallScore >= 1.5 ? 'Good' : 'Needs Improvement';

  if (!showDetails) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        className={`fixed bottom-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 shadow-2xl shadow-cyan-500/20 ${className}`}
      >
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="text-xs text-white font-medium">Performance</span>
          <div className={`text-xs font-bold ${overallColor}`}>
            {overallLabel}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      className={`bg-slate-900/95 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 shadow-2xl shadow-cyan-500/20 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white flex items-center space-x-2">
          <Zap className="w-5 h-5 text-cyan-400" />
          <span>Performance Monitor</span>
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Overall:</span>
          <span className={`text-lg font-bold ${overallColor}`}>
            {overallLabel}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(metrics).map(([key, value]) => {
          const { score, color, label } = getScore(key as keyof PerformanceMetrics);
          const icon = key === 'fcp' ? Clock : key === 'lcp' ? TrendingUp : key === 'fid' ? AlertTriangle : key === 'cls' ? Activity : Zap;
          
          return (
            <div key={key} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {React.createElement(icon, { className: `w-4 h-4 ${color}` })}
                  <span className="text-sm font-medium text-white uppercase">{key}</span>
                </div>
                <span className={`text-xs font-bold ${color}`}>{label}</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {value !== null ? `${value.toFixed(2)}${key === 'cls' ? '' : 'ms'}` : 'N/A'}
              </div>
              <div className="flex space-x-1 mt-2">
                {[1, 2, 3].map((star) => (
                  <div
                    key={star}
                    className={`w-2 h-2 rounded-full ${
                      star <= score ? 'bg-cyan-400' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-700/50">
        <div className="text-sm text-gray-400">
          <p>• FCP: First Contentful Paint - when first content appears</p>
          <p>• LCP: Largest Contentful Paint - when main content loads</p>
          <p>• FID: First Input Delay - interactivity responsiveness</p>
          <p>• CLS: Cumulative Layout Shift - visual stability</p>
          <p>• TTFB: Time to First Byte - server response time</p>
        </div>
      </div>
    </motion.div>
  );
};
