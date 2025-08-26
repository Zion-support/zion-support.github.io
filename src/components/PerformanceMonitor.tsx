import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Zap, TrendingUp, BarChart3 } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoadTime: number | null;
  pageLoadTime: number | null;
}

interface UserInteractions {
  clicks: number;
  scrolls: number;
  pageViews: number;
  timeOnPage: number;
  bounceRate: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoadTime: null,
    pageLoadTime: null,
  });

  const [interactions, setInteractions] = useState<UserInteractions>({
    clicks: 0,
    scrolls: 0,
    pageViews: 1,
    timeOnPage: 0,
    bounceRate: 0,
  });

  const [showMetrics, setShowMetrics] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Track Core Web Vitals
    if ('performance' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
          domLoadTime: navigationEntry.domContentLoadedEventEnd - navigationEntry.navigationStart,
          pageLoadTime: navigationEntry.loadEventEnd - navigationEntry.navigationStart,
        }));
      }
    }

    // Track user interactions
    let startTime = Date.now();
    let hasScrolled = false;
    let hasClicked = false;

    const handleScroll = () => {
      if (!hasScrolled) {
        hasScrolled = true;
        setInteractions(prev => ({ ...prev, scrolls: prev.scrolls + 1 }));
      }
    };

    const handleClick = () => {
      if (!hasClicked) {
        hasClicked = true;
      }
      setInteractions(prev => ({ ...prev, clicks: prev.clicks + 1 }));
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });

    // Track time on page
    const timeInterval = setInterval(() => {
      const timeOnPage = Date.now() - startTime;
      setInteractions(prev => ({ ...prev, timeOnPage }));
    }, 1000);

    // Track page visibility
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      fcpObserver?.disconnect();
      lcpObserver?.disconnect();
      fidObserver?.disconnect();
      clsObserver?.disconnect();
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      clearInterval(timeInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const getPerformanceGrade = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === null) return 'N/A';

    switch (metric) {
      case 'fcp':
        return value <= 1000 ? 'A' : value <= 2500 ? 'B' : 'C';
      case 'lcp':
        return value <= 2500 ? 'A' : value <= 4000 ? 'B' : 'C';
      case 'fid':
        return value <= 100 ? 'A' : value <= 300 ? 'B' : 'C';
      case 'cls':
        return value <= 0.1 ? 'A' : value <= 0.25 ? 'B' : 'C';
      case 'ttfb':
        return value <= 600 ? 'A' : value <= 1000 ? 'B' : 'C';
      default:
        return 'N/A';
    }
  };

  const getGradeColor = (grade: string): string => {
    switch (grade) {
      case 'A': return 'text-green-400';
      case 'B': return 'text-yellow-400';
      case 'C': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatMetric = (value: number | null, unit: string = 'ms'): string => {
    if (value === null) return 'N/A';
    if (unit === 's') return `${(value / 1000).toFixed(2)}s`;
    return `${Math.round(value)}${unit}`;
  };

  const formatTime = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  };

  return (
    <>
      {/* Performance Monitor Toggle */}
      <motion.button
        onClick={() => setShowMetrics(!showMetrics)}
        className={`fixed bottom-4 right-4 z-50 p-3 rounded-lg shadow-2xl transition-all duration-300 ${
          showMetrics 
            ? 'bg-zion-cyan text-black' 
            : 'bg-zion-slate border border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/10'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </motion.button>

      {/* Performance Metrics Panel */}
      {showMetrics && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed bottom-20 right-4 z-40 w-80 bg-zion-slate border border-zion-cyan/20 rounded-lg p-4 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Performance
            </h3>
            <div className={`w-3 h-3 rounded-full ${isVisible ? 'bg-green-400' : 'bg-red-400'}`} />
          </div>

          {/* Core Web Vitals */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-zion-cyan uppercase tracking-wide">Core Web Vitals</h4>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">FCP:</span>
                <span className="text-white">{formatMetric(metrics.fcp, 'ms')}</span>
                <span className={`font-bold ${getGradeColor(getPerformanceGrade('fcp'))}`}>
                  {getPerformanceGrade('fcp')}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">LCP:</span>
                <span className="text-white">{formatMetric(metrics.lcp, 'ms')}</span>
                <span className={`font-bold ${getGradeColor(getPerformanceGrade('lcp'))}`}>
                  {getPerformanceGrade('lcp')}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">FID:</span>
                <span className="text-white">{formatMetric(metrics.fid, 'ms')}</span>
                <span className={`font-bold ${getGradeColor(getPerformanceGrade('fid'))}`}>
                  {getPerformanceGrade('fid')}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">CLS:</span>
                <span className="text-white">{metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</span>
                <span className={`font-bold ${getGradeColor(getPerformanceGrade('cls'))}`}>
                  {getPerformanceGrade('cls')}
                </span>
              </div>
            </div>
          </div>

          {/* Load Times */}
          <div className="mt-4 space-y-3">
            <h4 className="text-sm font-semibold text-zion-cyan uppercase tracking-wide">Load Times</h4>
            
            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">TTFB:</span>
                <span className="text-white">{formatMetric(metrics.ttfb, 'ms')}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">DOM Load:</span>
                <span className="text-white">{formatMetric(metrics.domLoadTime, 's')}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Page Load:</span>
                <span className="text-white">{formatMetric(metrics.pageLoadTime, 's')}</span>
              </div>
            </div>
          </div>

          {/* User Interactions */}
          <div className="mt-4 space-y-3">
            <h4 className="text-sm font-semibold text-zion-cyan uppercase tracking-wide">User Activity</h4>
            
            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Time on Page:</span>
                <span className="text-white">{formatTime(interactions.timeOnPage)}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Clicks:</span>
                <span className="text-white">{interactions.clicks}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Scrolled:</span>
                <span className="text-white">{interactions.scrolls > 0 ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>

          {/* Performance Tips */}
          <div className="mt-4 p-3 bg-zion-slate-light rounded-lg">
            <h5 className="text-xs font-semibold text-zion-cyan mb-2">Performance Tips</h5>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Optimize images and use WebP format</li>
              <li>• Minimize JavaScript bundles</li>
              <li>• Use CDN for static assets</li>
              <li>• Implement lazy loading</li>
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
};
