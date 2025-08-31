import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fcpScore: 'good' | 'needs-improvement' | 'poor';
  lcpScore: 'good' | 'needs-improvement' | 'poor';
  fidScore: 'good' | 'needs-improvement' | 'poor';
  clsScore: 'good' | 'needs-improvement' | 'poor';
}

interface PerformanceMonitorProps {
  showPanel?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

export function PerformanceMonitor({
  showPanel = true,
  autoRefresh = true,
  refreshInterval = 5000
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fcpScore: 'good',
    lcpScore: 'good',
    fidScore: 'good',
    clsScore: 'good'
  });
  const [isVisible, setIsVisible] = useState(false);
  const [score, setScore] = useState(0);

  const calculateScore = useCallback((metrics: PerformanceMetrics) => {
    let totalScore = 0;
    let validMetrics = 0;

    if (metrics.fcp !== null) {
      if (metrics.fcp <= 1800) totalScore += 100;
      else if (metrics.fcp <= 3000) totalScore += 50;
      else totalScore += 0;
      validMetrics++;
    }

    if (metrics.lcp !== null) {
      if (metrics.lcp <= 2500) totalScore += 100;
      else if (metrics.lcp <= 4000) totalScore += 50;
      else totalScore += 0;
      validMetrics++;
    }

    if (metrics.fid !== null) {
      if (metrics.fid <= 100) totalScore += 100;
      else if (metrics.fid <= 300) totalScore += 50;
      else totalScore += 0;
      validMetrics++;
    }

    if (metrics.cls !== null) {
      if (metrics.cls <= 0.1) totalScore += 100;
      else if (metrics.cls <= 0.25) totalScore += 50;
      else totalScore += 0;
      validMetrics++;
    }

    return validMetrics > 0 ? Math.round(totalScore / validMetrics) : 0;
  }, []);

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
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
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

  useEffect(() => {
    const newScore = calculateScore(metrics);
    setScore(newScore);
  }, [metrics, calculateScore]);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      // Refresh metrics
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigationEntry = performance.getEntriesByType('navigation')[0];
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          setMetrics(prev => ({ ...prev, ttfb: Math.round(ttfb) }));
        }
      }
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval]);

  if (!isVisible) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 50) return 'Good';
    return 'Poor';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-4 text-white text-sm max-w-xs z-50"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-zion-cyan">Performance</h3>
        <div className={`text-lg font-bold ${getScoreColor(score)}`}>
          {score}
        </div>
      </div>
      
      <div className="text-xs text-zinc-300 mb-2">
        {getScoreLabel(score)} • Core Web Vitals
      </div>
      
      <div className="space-y-1 text-xs">
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp <= 1800 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.fcp}ms
            </span>
          </div>
        )}
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp <= 2500 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.lcp}ms
            </span>
          </div>
        )}
        {metrics.fid && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={metrics.fid <= 100 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.fid}ms
            </span>
          </div>
        )}
        {metrics.cls && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls <= 0.1 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb <= 800 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.ttfb}ms
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 pt-2 border-t border-zinc-600">
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-400">Status</span>
          <div className="flex items-center space-x-1">
            {score >= 90 ? (
              <CheckCircle className="w-3 h-3 text-green-400" />
            ) : score >= 50 ? (
              <AlertTriangle className="w-3 h-3 text-yellow-400" />
            ) : (
              <AlertTriangle className="w-3 h-3 text-red-400" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}