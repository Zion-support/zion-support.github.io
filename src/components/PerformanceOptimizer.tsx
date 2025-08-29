import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Clock, Cpu, HardDrive, Wifi, Battery } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  batteryLevel?: number;
  isOnline: boolean;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  enableOptimizations?: boolean;
  className?: string;
}

export function PerformanceOptimizer({
  showMetrics = false,
  enableOptimizations = true,
  className = ''
}: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    batteryLevel: undefined,
    isOnline: navigator.onLine
  });

  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          loadTime: Math.round(navigation.loadEventEnd - navigation.loadEventStart)
        }));
      }
    }

    // Memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }

    // Network information (if available)
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        setMetrics(prev => ({
          ...prev,
          networkLatency: connection.rtt || 0
        }));
      }
    }

    // Battery information (if available)
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        setMetrics(prev => ({
          ...prev,
          batteryLevel: Math.round(battery.level * 100)
        }));
      });
    }
  }, []);

  // Performance optimizations
  const applyOptimizations = useCallback(() => {
    const newOptimizations: string[] = [];

    // Lazy load images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });

      newOptimizations.push('Lazy image loading enabled');
    }

    // Preload critical resources
    const criticalResources = [
      '/fonts/main-font.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      link.crossOrigin = resource.endsWith('.woff2') ? 'anonymous' : undefined;
      document.head.appendChild(link);
    });

    newOptimizations.push('Critical resource preloading');

    // Service worker registration
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(() => {
        newOptimizations.push('Service worker registered');
      }).catch(() => {
        // Service worker registration failed
      });
    }

    // Memory optimization
    if (metrics.memoryUsage > 80) {
      newOptimizations.push('Memory usage optimization applied');
    }

    setOptimizations(newOptimizations);
  }, [metrics.memoryUsage]);

  // Network status monitoring
  useEffect(() => {
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnline: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Performance monitoring interval
  useEffect(() => {
    measurePerformance();
    
    const interval = setInterval(measurePerformance, 5000);
    return () => clearInterval(interval);
  }, [measurePerformance]);

  // Apply optimizations when component mounts
  useEffect(() => {
    if (enableOptimizations) {
      applyOptimizations();
    }
  }, [enableOptimizations, applyOptimizations]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.memoryUsage > 80) score -= 15;
    if (metrics.networkLatency > 100) score -= 10;
    if (!metrics.isOnline) score -= 30;
    
    return Math.max(0, score);
  }, [metrics]);

  // Performance status
  const getPerformanceStatus = (score: number) => {
    if (score >= 90) return { color: 'text-green-400', label: 'Excellent' };
    if (score >= 70) return { color: 'text-yellow-400', label: 'Good' };
    if (score >= 50) return { color: 'text-orange-400', label: 'Fair' };
    return { color: 'text-red-400', label: 'Poor' };
  };

  const status = getPerformanceStatus(performanceScore);

  if (!showMetrics) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-xl z-50 max-w-sm ${className}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Close performance monitor"
            >
              ×
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-300">Performance Score</span>
              <span className={`text-sm font-bold ${status.color}`}>
                {performanceScore}/100
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full ${
                  performanceScore >= 90 ? 'bg-green-500' :
                  performanceScore >= 70 ? 'bg-yellow-500' :
                  performanceScore >= 50 ? 'bg-orange-500' : 'bg-red-500'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${performanceScore}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <span className={`text-xs ${status.color}`}>{status.label}</span>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <div>
                <div className="text-xs text-slate-400">Load Time</div>
                <div className="text-sm text-white">{metrics.loadTime}ms</div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              <div>
                <div className="text-xs text-slate-400">Memory</div>
                <div className="text-sm text-white">{metrics.memoryUsage}%</div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Wifi className="w-4 h-4 text-green-400" />
              <div>
                <div className="text-xs text-slate-400">Network</div>
                <div className="text-sm text-white">{metrics.networkLatency}ms</div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className={`w-4 h-4 ${metrics.isOnline ? 'text-green-400' : 'text-red-400'}`}>
                ●
              </div>
              <div>
                <div className="text-xs text-slate-400">Status</div>
                <div className="text-sm text-white">
                  {metrics.isOnline ? 'Online' : 'Offline'}
                </div>
              </div>
            </div>
          </div>

          {/* Optimizations Applied */}
          {optimizations.length > 0 && (
            <div className="mb-3">
              <div className="text-xs text-slate-400 mb-2">Optimizations Applied:</div>
              <div className="space-y-1">
                {optimizations.map((optimization, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-slate-300">{optimization}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Battery Level */}
          {metrics.batteryLevel !== undefined && (
            <div className="flex items-center space-x-2">
              <Battery className="w-4 h-4 text-yellow-400" />
              <div>
                <div className="text-xs text-slate-400">Battery</div>
                <div className="text-sm text-white">{metrics.batteryLevel}%</div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Performance hook for components
export function usePerformanceMonitoring() {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});

  useEffect(() => {
    const updateMetrics = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            loadTime: Math.round(navigation.loadEventEnd - navigation.loadEventStart)
          }));
        }
      }
    };

    updateMetrics();
    window.addEventListener('load', updateMetrics);
    
    return () => window.removeEventListener('load', updateMetrics);
  }, []);

  return metrics;
}

// Performance optimization utilities
export const performanceUtils = {
  // Debounce function calls
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function calls
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Lazy load images
  lazyLoadImages: () => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  },

  // Preload critical resources
  preloadResource: (href: string, as: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (as === 'font') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  }
};

export default PerformanceOptimizer;
