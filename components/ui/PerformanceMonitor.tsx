import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  className?: string;
}

export default function PerformanceMonitor({ 
  showMetrics = false, 
  className = '' 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        if (navigation && paint.length > 0) {
          const firstPaint = paint.find(entry => entry.name === 'first-paint');
          const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint');
          
          const newMetrics: PerformanceMetrics = {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            firstPaint: firstPaint ? firstPaint.startTime : 0,
            firstContentfulPaint: firstContentfulPaint ? firstContentfulPaint.startTime : 0,
            largestContentfulPaint: 0,
            cumulativeLayoutShift: 0
          };

          // Measure LCP if available
          if ('PerformanceObserver' in window) {
            try {
              const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                if (lastEntry) {
                  newMetrics.largestContentfulPaint = lastEntry.startTime;
                }
              });
              lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
              console.warn('LCP measurement not supported');
            }
          }

          // Measure CLS if available
          if ('PerformanceObserver' in window) {
            try {
              const clsObserver = new PerformanceObserver((list) => {
                let clsValue = 0;
                for (const entry of list.getEntries()) {
                  if (!entry.hadRecentInput) {
                    clsValue += (entry as any).value;
                  }
                }
                newMetrics.cumulativeLayoutShift = clsValue;
              });
              clsObserver.observe({ entryTypes: ['layout-shift'] });
            } catch (e) {
              console.warn('CLS measurement not supported');
            }
          }

          setMetrics(newMetrics);
        }
      };

      // Wait for page to fully load
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
        return () => window.removeEventListener('load', measurePerformance);
      }
    }
  }, []);

  useEffect(() => {
    if (showMetrics && metrics) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showMetrics, metrics]);

  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // Deduct points for slow metrics
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstPaint > 1000) score -= 15;
    if (metrics.firstContentfulPaint > 1500) score -= 15;
    if (metrics.largestContentfulPaint > 2500) score -= 20;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!metrics) return null;

  const score = getPerformanceScore(metrics);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className={`fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl ${className}`}
        >
          <div className="flex items-center space-x-2 mb-3">
            <Activity className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-white">Performance</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-300">Load Time:</span>
              <span className={`font-mono ${metrics.loadTime < 1000 ? 'text-green-400' : 'text-yellow-400'}`}>
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-300">First Paint:</span>
              <span className={`font-mono ${metrics.firstPaint < 500 ? 'text-green-400' : 'text-yellow-400'}`}>
                {metrics.firstPaint.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-300">FCP:</span>
              <span className={`font-mono ${metrics.firstContentfulPaint < 1000 ? 'text-green-400' : 'text-yellow-400'}`}>
                {metrics.firstContentfulPaint.toFixed(0)}ms
              </span>
            </div>
            
            {metrics.largestContentfulPaint > 0 && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-300">LCP:</span>
                <span className={`font-mono ${metrics.largestContentfulPaint < 2500 ? 'text-green-400' : 'text-yellow-400'}`}>
                  {metrics.largestContentfulPaint.toFixed(0)}ms
                </span>
              </div>
            )}
            
            {metrics.cumulativeLayoutShift > 0 && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-300">CLS:</span>
                <span className={`font-mono ${metrics.cumulativeLayoutShift < 0.1 ? 'text-green-400' : 'text-yellow-400'}`}>
                  {metrics.cumulativeLayoutShift.toFixed(3)}
                </span>
              </div>
            )}
          </div>
          
          <div className="mt-3 pt-3 border-t border-white/20">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-300">Score:</span>
              <span className={`text-sm font-bold ${getScoreColor(score)}`}>
                {score}/100
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  score >= 90 ? 'bg-green-500' : score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${score}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}