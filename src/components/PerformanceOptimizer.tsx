import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  X,
  Info,
  Gauge,
  Clock,
  HardDrive
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  targetScore?: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  targetScore = 90
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring (0-2.5s is good)
    if (metrics.fcp > 2500) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP scoring (0-2.5s is good)
    if (metrics.lcp > 2500) score -= 25;
    else if (metrics.lcp > 1000) score -= 15;
    
    // FID scoring (0-100ms is good)
    if (metrics.fid > 100) score -= 20;
    else if (metrics.fid > 50) score -= 10;
    
    // CLS scoring (0-0.1 is good)
    if (metrics.cls > 0.1) score -= 25;
    else if (metrics.cls > 0.05) score -= 15;
    
    // TTFB scoring (0-800ms is good)
    if (metrics.ttfb > 800) score -= 10;
    
    return Math.max(0, score);
  }, []);

  const generateOptimizations = useCallback((metrics: PerformanceMetrics): string[] => {
    const suggestions: string[] = [];
    
    if (metrics.fcp > 1000) {
      suggestions.push('Optimize critical rendering path');
      suggestions.push('Reduce server response time');
    }
    
    if (metrics.lcp > 1000) {
      suggestions.push('Optimize largest contentful paint');
      suggestions.push('Use image optimization techniques');
    }
    
    if (metrics.fid > 50) {
      suggestions.push('Reduce JavaScript execution time');
      suggestions.push('Implement code splitting');
    }
    
    if (metrics.cls > 0.05) {
      suggestions.push('Prevent layout shifts');
      suggestions.push('Set explicit dimensions for media');
    }
    
    if (metrics.ttfb > 800) {
      suggestions.push('Optimize server response time');
      suggestions.push('Use CDN for static assets');
    }
    
    return suggestions;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const measurePerformance = () => {
      // Measure First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          const fcp = fcpEntry.startTime;
          
          // Measure other metrics
          const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const domLoad = navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart;
          const windowLoad = navigationEntry.loadEventEnd - navigationEntry.loadEventStart;
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          
          // Simulate other metrics for demo purposes
          const lcp = fcp + Math.random() * 1000;
          const fid = Math.random() * 100;
          const cls = Math.random() * 0.2;
          
          const newMetrics: PerformanceMetrics = {
            fcp,
            lcp,
            fid,
            cls,
            ttfb,
            domLoad,
            windowLoad
          };
          
          setMetrics(newMetrics);
          const newScore = calculatePerformanceScore(newMetrics);
          setScore(newScore);
          setOptimizations(generateOptimizations(newMetrics));
          
          if (newScore < targetScore) {
            setIsVisible(true);
          }
        }
      });
      
      fcpObserver.observe({ entryTypes: ['paint'] });
    };

    // Wait for page to load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [enabled, targetScore, calculatePerformanceScore, generateOptimizations]);

  if (!enabled || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-4 right-4 z-50 max-w-sm w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Performance Alert</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Performance Score</span>
              <span className={`text-sm font-semibold ${
                score >= 90 ? 'text-green-600' : 
                score >= 70 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {score}/100
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  score >= 90 ? 'bg-green-500' : 
                  score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${score}%` }}
              />
            </div>
          </div>

          {showMetrics && metrics && (
            <div className="mb-3 space-y-2">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center space-x-2">
                  <Gauge className="w-3 h-3 text-blue-500" />
                  <span className="text-gray-600 dark:text-gray-400">FCP:</span>
                  <span className="font-mono">{metrics.fcp.toFixed(0)}ms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-3 h-3 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">LCP:</span>
                  <span className="font-mono">{metrics.lcp.toFixed(0)}ms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-3 h-3 text-yellow-500" />
                  <span className="text-gray-600 dark:text-gray-400">FID:</span>
                  <span className="font-mono">{metrics.fid.toFixed(0)}ms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-3 h-3 text-purple-500" />
                  <span className="text-gray-600 dark:text-gray-400">CLS:</span>
                  <span className="font-mono">{metrics.cls.toFixed(3)}</span>
                </div>
              </div>
            </div>
          )}

          {optimizations.length > 0 && (
            <div className="mb-3">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center space-x-2">
                <Info className="w-4 h-4 text-blue-500" />
                <span>Optimization Suggestions</span>
              </h4>
              <ul className="space-y-1">
                {optimizations.map((suggestion, index) => (
                  <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex space-x-2">
            <button
              onClick={() => setIsVisible(false)}
              className="flex-1 px-3 py-2 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Dismiss
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex-1 px-3 py-2 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

