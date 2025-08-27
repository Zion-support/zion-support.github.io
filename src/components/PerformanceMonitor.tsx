import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { useLocation } from 'react-router-dom';
import { BarChart3, Zap, Clock, HardDrive, Wifi, WifiOff } from 'lucide-react';

=======
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
=======
import { useLocation } from 'react-router-dom';
import { BarChart3, Zap, Clock, HardDrive, Wifi, WifiOff } from 'lucide-react';

>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
interface PerformanceMetrics {
  pageLoadTime: number;
  memoryUsage: number;
  networkSpeed: number;
  isOnline: boolean;
  timestamp: number;
}
<<<<<<< HEAD

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: 0,
    memoryUsage: 0,
    networkSpeed: 0,
    isOnline: navigator.onLine,
    timestamp: Date.now()
  });
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Track page load performance
    const trackPageLoad = () => {
      if ('performance' in window) {
        const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationTiming) {
          const loadTime = navigationTiming.loadEventEnd - navigationTiming.responseEnd;
          setMetrics(prev => ({ ...prev, pageLoadTime: parseFloat(loadTime.toFixed(2)) }));
        }
      }
    };

    // Track memory usage (non-standard, Chrome only)
    const trackMemoryUsage = () => {
      if ('performance' in window && 'memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ ...prev, memoryUsage: parseFloat((memory.usedJSHeapSize / 1024 / 1024).toFixed(2)) }));
      }
    };

    // Track network speed (estimation)
    const trackNetworkSpeed = () => {
      if ('connection' in navigator && (navigator.connection as any).downlink) {
        setMetrics(prev => ({ ...prev, networkSpeed: (navigator.connection as any).downlink }));
      }
    };

    // Track online status
    const handleOnlineStatus = () => {
      setMetrics(prev => ({ ...prev, isOnline: navigator.onLine }));
    };

    window.addEventListener('load', trackPageLoad);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    const intervalId = setInterval(() => {
      trackMemoryUsage();
      trackNetworkSpeed();
      setMetrics(prev => ({ ...prev, timestamp: Date.now() }));
    }, 5000); // Update every 5 seconds

    return () => {
      window.removeEventListener('load', trackPageLoad);
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
      clearInterval(intervalId);
    };
  }, [location.pathname]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleVisibility}
        className="bg-zion-purple text-white p-3 rounded-full shadow-lg hover:bg-zion-cyan transition-colors duration-300 flex items-center justify-center"
        aria-label="Toggle Performance Monitor"
      >
        <BarChart3 className="h-6 w-6" />
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-white/10 backdrop-blur-xl border border-zion-cyan/20 rounded-lg p-4 shadow-xl text-white text-sm w-64 space-y-2">
          <h3 className="font-bold text-lg text-zion-cyan mb-2">Performance Metrics</h3>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-zion-cyan" />
            <span>Page Load: {metrics.pageLoadTime} ms</span>
          </div>
          <div className="flex items-center">
            <HardDrive className="h-4 w-4 mr-2 text-zion-cyan" />
            <span>Memory: {metrics.memoryUsage} MB</span>
          </div>
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-2 text-zion-cyan" />
            <span>Network: {metrics.networkSpeed} Mbps</span>
          </div>
          <div className="flex items-center">
            {metrics.isOnline ? (
              <Wifi className="h-4 w-4 mr-2 text-green-400" />
            ) : (
              <WifiOff className="h-4 w-4 mr-2 text-red-400" />
            )}
            <span>Status: {metrics.isOnline ? 'Online' : 'Offline'}</span>
          </div>
          <div className="text-xs text-zion-slate-light mt-2">
            Last updated: {new Date(metrics.timestamp).toLocaleTimeString()}
          </div>
        </div>
      )}
    </div>
=======
export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
      setIsVisible(true);
    }
    // Performance monitoring
    if ('performance' in window && 'PerformanceObserver' in window) {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      // Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigation = entries[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics(prev => ({ ...prev, ttfb: navigation.responseStart - navigation.requestStart }));
        }
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        navigationObserver.disconnect();
      };
    }
  }, []);
  if (!isVisible) return null;
  const getScore = (metric: keyof PerformanceMetrics, value: number): { score: number; color: string; label: string } => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 800, needsImprovement: 1800 }
    };
    const threshold = thresholds[metric];
    if (!threshold) return { score: 0, color: 'text-gray-400', label: 'Unknown' };
    if (value <= threshold.good) {
      return { score: 100, color: 'text-green-400', label: 'Good' };
    } else if (value <= threshold.needsImprovement) {
      return { score: 50, color: 'text-yellow-400', label: 'Needs Improvement' };
    } else {
      return { score: 0, color: 'text-red-400', label: 'Poor' };
    }
  };
  const formatMetric = (metric: keyof PerformanceMetrics, value: number): string => {
    if (metric === 'cls') return value.toFixed(3);
    if (metric === 'fid') return `${Math.round(value)}ms`;
    return `${Math.round(value)}ms`;
  };
  const metricsList = [
    { key: 'fcp' as keyof PerformanceMetrics, label: 'First Contentful Paint', icon: Activity },
    { key: 'lcp' as keyof PerformanceMetrics, label: 'Largest Contentful Paint', icon: TrendingUp },
    { key: 'fid' as keyof PerformanceMetrics, label: 'First Input Delay', icon: Zap },
    { key: 'cls' as keyof PerformanceMetrics, label: 'Cumulative Layout Shift', icon: Clock },
    { key: 'ttfb' as keyof PerformanceMetrics, label: 'Time to First Byte', icon: Activity }
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 right-4 z-50 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 rounded-lg p-4 max-w-sm shadow-xl"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
        <div className="text-xs text-zinc-400">
          {process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD'}
        </div>
      </div>
      
      <div className="space-y-2">
        {metricsList.map(({ key, label, icon: Icon }) => {
          const value = metrics?.[key];
          if (value === undefined) return null;
          
          const { score, color, label: scoreLabel } = getScore(key, value);
          
          return (
            <div key={key} className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <Icon className="w-3 h-3 text-zinc-400" />
                <span className="text-zinc-300">{label}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={color}>{formatMetric(key, value)}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded ${color.replace('text-', 'bg-')}/10 border border-current/20`}>
                  {scoreLabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {metrics && (
        <div className="mt-3 pt-3 border-t border-zinc-700/50">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400">Overall Score</span>
            <span className="text-white font-medium">
              {Math.round(
                metricsList.reduce((acc, { key }) => {
                  const { score } = getScore(key, metrics[key] || 0);
                  return acc + score;
                }, 0) / metricsList.length
              )}/100
            </span>
          </div>
        </div>
      )}
      <div className="mt-3 text-xs text-zinc-500">
        <button
          onClick={() => setIsVisible(false)}
          className="text-zinc-400 hover:text-white transition-colors"
        >
          Hide
        </button>
      </div>
    </motion.div>
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
=======
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Track page load performance
    const trackPageLoad = () => {
      if ('performance' in window) {
        const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationTiming) {
          const loadTime = navigationTiming.loadEventEnd - navigationTiming.responseEnd;
          setMetrics(prev => ({ ...prev, pageLoadTime: parseFloat(loadTime.toFixed(2)) }));
        }
      }
    };

    // Track memory usage (non-standard, Chrome only)
    const trackMemoryUsage = () => {
      if ('performance' in window && 'memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ ...prev, memoryUsage: parseFloat((memory.usedJSHeapSize / 1024 / 1024).toFixed(2)) }));
      }
    };

    // Track network speed (estimation)
    const trackNetworkSpeed = () => {
      if ('connection' in navigator && (navigator.connection as any).downlink) {
        setMetrics(prev => ({ ...prev, networkSpeed: (navigator.connection as any).downlink }));
      }
    };

    // Track online status
    const handleOnlineStatus = () => {
      setMetrics(prev => ({ ...prev, isOnline: navigator.onLine }));
    };

    window.addEventListener('load', trackPageLoad);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    const intervalId = setInterval(() => {
      trackMemoryUsage();
      trackNetworkSpeed();
      setMetrics(prev => ({ ...prev, timestamp: Date.now() }));
    }, 5000); // Update every 5 seconds

    return () => {
      window.removeEventListener('load', trackPageLoad);
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
      clearInterval(intervalId);
    };
  }, [location.pathname]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleVisibility}
        className="bg-zion-purple text-white p-3 rounded-full shadow-lg hover:bg-zion-cyan transition-colors duration-300 flex items-center justify-center"
        aria-label="Toggle Performance Monitor"
      >
        <BarChart3 className="h-6 w-6" />
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-white/10 backdrop-blur-xl border border-zion-cyan/20 rounded-lg p-4 shadow-xl text-white text-sm w-64 space-y-2">
          <h3 className="font-bold text-lg text-zion-cyan mb-2">Performance Metrics</h3>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-zion-cyan" />
            <span>Page Load: {metrics.pageLoadTime} ms</span>
          </div>
          <div className="flex items-center">
            <HardDrive className="h-4 w-4 mr-2 text-zion-cyan" />
            <span>Memory: {metrics.memoryUsage} MB</span>
          </div>
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-2 text-zion-cyan" />
            <span>Network: {metrics.networkSpeed} Mbps</span>
          </div>
          <div className="flex items-center">
            {metrics.isOnline ? (
              <Wifi className="h-4 w-4 mr-2 text-green-400" />
            ) : (
              <WifiOff className="h-4 w-4 mr-2 text-red-400" />
            )}
            <span>Status: {metrics.isOnline ? 'Online' : 'Offline'}</span>
          </div>
          <div className="text-xs text-zion-slate-light mt-2">
            Last updated: {new Date(metrics.timestamp).toLocaleTimeString()}
          </div>
        </div>
      )}
    </div>
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
  );
};

export default PerformanceMonitor;
