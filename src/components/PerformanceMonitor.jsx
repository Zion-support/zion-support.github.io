import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PerformanceMonitor = ({ enabled = true, showMetrics = true }) => {
  const [metrics, setMetrics] = useState({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });
  const [score, setScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!enabled || !inView) return;

    setIsVisible(true);

    // Calculate performance score
    const calculateScore = () => {
      let totalScore = 0;
      let metricCount = 0;

      if (metrics.fcp) {
        totalScore += metrics.fcp <= 1800 ? 100 : metrics.fcp <= 3000 ? 50 : 0;
        metricCount++;
      }
      if (metrics.lcp) {
        totalScore += metrics.lcp <= 2500 ? 100 : metrics.lcp <= 4000 ? 50 : 0;
        metricCount++;
      }
      if (metrics.fid) {
        totalScore += metrics.fid <= 100 ? 100 : metrics.fid <= 300 ? 50 : 0;
        metricCount++;
      }
      if (metrics.cls) {
        totalScore += metrics.cls <= 0.1 ? 100 : metrics.cls <= 0.25 ? 50 : 0;
        metricCount++;
      }
      if (metrics.ttfb) {
        totalScore += metrics.ttfb <= 800 ? 100 : metrics.ttfb <= 1800 ? 50 : 0;
        metricCount++;
      }

      setScore(metricCount > 0 ? Math.round(totalScore / metricCount) : 0);
    };

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

    // Time to First Byte (from navigation timing)
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0];
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb: Math.round(ttfb) }));
      }
    } catch (e) {
      console.warn('TTFB calculation failed:', e);
    }

    // Calculate score when metrics change
    calculateScore();
  }, [enabled, inView, metrics]);

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
      ref={ref}
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
      
      {showMetrics && (
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
      )}
    </motion.div>
  );
};

export default PerformanceMonitor;