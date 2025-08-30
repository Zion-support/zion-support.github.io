import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });
  const [score, setScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const calculateScore = () => {
      let totalScore = 0;
      let validMetrics = 0;

      // FCP scoring (0-100)
      if (metrics.fcp !== null) {
        validMetrics++;
        if (metrics.fcp <= 1800) totalScore += 100;
        else if (metrics.fcp <= 3000) totalScore += 50;
        else totalScore += 0;
      }

      // LCP scoring (0-100)
      if (metrics.lcp !== null) {
        validMetrics++;
        if (metrics.lcp <= 2500) totalScore += 100;
        else if (metrics.lcp <= 4000) totalScore += 50;
        else totalScore += 0;
      }

      // FID scoring (0-100)
      if (metrics.fid !== null) {
        validMetrics++;
        if (metrics.fid <= 100) totalScore += 100;
        else if (metrics.fid <= 300) totalScore += 50;
        else totalScore += 0;
      }

      // CLS scoring (0-100)
      if (metrics.cls !== null) {
        validMetrics++;
        if (metrics.cls <= 0.1) totalScore += 100;
        else if (metrics.cls <= 0.25) totalScore += 50;
        else totalScore += 0;
      }

      // TTFB scoring (0-100)
      if (metrics.ttfb !== null) {
        validMetrics++;
        if (metrics.ttfb <= 800) totalScore += 100;
        else if (metrics.ttfb <= 1800) totalScore += 50;
        else totalScore += 0;
      }

      return validMetrics > 0 ? Math.round(totalScore / validMetrics) : 0;
    };

    const newScore = calculateScore();
    setScore(newScore);

    // Show component after score calculation
    if (newScore > 0) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, [metrics]);

  useEffect(() => {
    // Only run in browser environment
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
              {metrics.cls}
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
    </motion.div>
  );
};