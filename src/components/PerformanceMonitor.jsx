import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, X, RefreshCw, TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';

export default function PerformanceMonitor({ 
  isVisible = true, 
  onClose, 
  showDetails = false 
}) {
  const [metrics, setMetrics] = useState({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });
  const [score, setScore] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Performance Observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: Math.round(fcpEntry.startTime) }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('FCP observer failed:', e);
      }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: Math.round(lastEntry.startTime) }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer failed:', e);
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.processingStart && entry.processingStart > 0) {
              const fid = entry.processingStart - entry.startTime;
              setMetrics(prev => ({ ...prev, fid: Math.round(fid) }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer failed:', e);
      }

      // Cumulative Layout Shift
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer failed:', e);
      }
    }

    // Time to First Byte (from navigation timing)
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      setMetrics(prev => ({ ...prev, ttfb: Math.round(ttfb) }));
    }
  }, []);

  // Calculate performance score
  useEffect(() => {
    let totalScore = 0;
    let metricCount = 0;

    if (metrics.fcp !== null) {
      totalScore += metrics.fcp <= 1800 ? 100 : metrics.fcp <= 3000 ? 50 : 0;
      metricCount++;
    }
    if (metrics.lcp !== null) {
      totalScore += metrics.lcp <= 2500 ? 100 : metrics.lcp <= 4000 ? 50 : 0;
      metricCount++;
    }
    if (metrics.fid !== null) {
      totalScore += metrics.fid <= 100 ? 100 : metrics.fid <= 300 ? 50 : 0;
      metricCount++;
    }
    if (metrics.cls !== null) {
      totalScore += metrics.cls <= 0.1 ? 100 : metrics.cls <= 0.25 ? 50 : 0;
      metricCount++;
    }
    if (metrics.ttfb !== null) {
      totalScore += metrics.ttfb <= 800 ? 100 : metrics.ttfb <= 1800 ? 50 : 0;
      metricCount++;
    }

    if (metricCount > 0) {
      setScore(Math.round(totalScore / metricCount));
    }
  }, [metrics]);

  if (!isVisible) return null;

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score) => {
    if (score >= 90) return 'Excellent';
    if (score >= 50) return 'Good';
    return 'Poor';
  };

  const getMetricStatus = (value, threshold, isLowerBetter = true) => {
    if (value === null) return 'unknown';
    const isGood = isLowerBetter ? value <= threshold : value >= threshold;
    return isGood ? 'good' : 'poor';
  };

  const getMetricIcon = (status) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-3 h-3 text-green-400" />;
      case 'poor':
        return <AlertTriangle className="w-3 h-3 text-red-400" />;
      default:
        return <TrendingUp className="w-3 h-3 text-gray-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-4 text-white text-sm max-w-xs z-50"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <h3 className="font-semibold text-cyan-400">Performance</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className={`text-lg font-bold ${getScoreColor(score)}`}>
            {score}
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
      
      <div className="text-xs text-zinc-300 mb-2">
        {getScoreLabel(score)} • Core Web Vitals
      </div>
      
      <div className="space-y-1 text-xs">
        {metrics.fcp && (
          <div className="flex items-center justify-between">
            <span>FCP:</span>
            <div className="flex items-center gap-1">
              {getMetricIcon(getMetricStatus(metrics.fcp, 1800))}
              <span className={metrics.fcp <= 1800 ? 'text-green-400' : 'text-yellow-400'}>
                {metrics.fcp}ms
              </span>
            </div>
          </div>
        )}
        {metrics.lcp && (
          <div className="flex items-center justify-between">
            <span>LCP:</span>
            <div className="flex items-center gap-1">
              {getMetricIcon(getMetricStatus(metrics.lcp, 2500))}
              <span className={metrics.lcp <= 2500 ? 'text-green-400' : 'text-yellow-400'}>
                {metrics.lcp}ms
              </span>
            </div>
          </div>
        )}
        {metrics.fid && (
          <div className="flex items-center justify-between">
            <span>FID:</span>
            <div className="flex items-center gap-1">
              {getMetricIcon(getMetricStatus(metrics.fid, 100))}
              <span className={metrics.fid <= 100 ? 'text-green-400' : 'text-yellow-400'}>
                {metrics.fid}ms
              </span>
            </div>
          </div>
        )}
        {metrics.cls && (
          <div className="flex items-center justify-between">
            <span>CLS:</span>
            <div className="flex items-center gap-1">
              {getMetricIcon(getMetricStatus(metrics.cls, 0.1))}
              <span className={metrics.cls <= 0.1 ? 'text-green-400' : 'text-yellow-400'}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
          </div>
        )}
        {metrics.ttfb && (
          <div className="flex items-center justify-between">
            <span>TTFB:</span>
            <div className="flex items-center gap-1">
              {getMetricIcon(getMetricStatus(metrics.ttfb, 800))}
              <span className={metrics.ttfb <= 800 ? 'text-green-400' : 'text-yellow-400'}>
                {metrics.ttfb}ms
              </span>
            </div>
          </div>
        )}
      </div>

      {showDetails && (
        <div className="mt-3 pt-3 border-t border-zinc-600">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            {isExpanded ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
          
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-xs text-zinc-400"
            >
              <div className="space-y-1">
                <div>FCP: First Contentful Paint</div>
                <div>LCP: Largest Contentful Paint</div>
                <div>FID: First Input Delay</div>
                <div>CLS: Cumulative Layout Shift</div>
                <div>TTFB: Time to First Byte</div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      <button
        onClick={() => window.location.reload()}
        className="mt-3 w-full px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 text-white text-xs rounded transition-colors flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-3 h-3" />
        Refresh Metrics
      </button>
    </motion.div>
  );
}