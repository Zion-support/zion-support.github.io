import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  HardDrive, 
  Network, 
  Cpu, 
  HardDriveIcon, 
  Battery, 
  Wifi, 
  WifiOff,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
  memoryUsage: number; // Memory usage in MB
  networkSpeed: number; // Network speed in Mbps
  batteryLevel: number; // Battery level percentage
  isOnline: boolean;
  connectionType: string;
}

interface PerformanceRecommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  category: 'performance' | 'accessibility' | 'seo' | 'user-experience';
  impact: string;
  action: string;
  icon: React.ComponentType<any>;
}

export function EnhancedPerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: 0,
    memoryUsage: 0,
    networkSpeed: 0,
    batteryLevel: 100,
    isOnline: navigator.onLine,
    connectionType: 'unknown'
  });

  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);

  // Performance monitoring
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
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

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // Network and system monitoring
  useEffect(() => {
    const updateNetworkInfo = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({
          ...prev,
          connectionType: connection.effectiveType || 'unknown',
          networkSpeed: connection.downlink || 0
        }));
      }
    };

    const updateBatteryInfo = async () => {
      if ('getBattery' in navigator) {
        try {
          const battery = await (navigator as any).getBattery();
          setMetrics(prev => ({ ...prev, batteryLevel: battery.level * 100 }));
          
          battery.addEventListener('levelchange', () => {
            setMetrics(prev => ({ ...prev, batteryLevel: battery.level * 100 }));
          });
        } catch (error) {
          console.log('Battery API not supported');
        }
      }
    };

    const updateMemoryInfo = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024)
        }));
      }
    };

    const updateOnlineStatus = () => {
      setMetrics(prev => ({ ...prev, isOnline: navigator.onLine }));
    };

    // Initial updates
    updateNetworkInfo();
    updateBatteryInfo();
    updateMemoryInfo();
    updateOnlineStatus();

    // Event listeners
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    window.addEventListener('load', updateMemoryInfo);

    // Periodic updates
    const interval = setInterval(updateMemoryInfo, 5000);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      window.removeEventListener('load', updateMemoryInfo);
      clearInterval(interval);
    };
  }, []);

  // Generate performance recommendations
  useEffect(() => {
    const newRecommendations: PerformanceRecommendation[] = [];

    // FCP recommendations
    if (metrics.fcp > 1800) {
      newRecommendations.push({
        id: 'fcp-slow',
        title: 'Slow First Contentful Paint',
        description: 'Your page takes too long to show the first content. Consider optimizing images and reducing render-blocking resources.',
        priority: 'high',
        category: 'performance',
        impact: 'High - Affects user perception of speed',
        action: 'Optimize critical rendering path',
        icon: TrendingDown
      });
    }

    // LCP recommendations
    if (metrics.lcp > 2500) {
      newRecommendations.push({
        id: 'lcp-slow',
        title: 'Slow Largest Contentful Paint',
        description: 'The main content takes too long to load. Optimize images and consider lazy loading.',
        priority: 'high',
        category: 'performance',
        impact: 'High - Core Web Vital metric',
        action: 'Optimize largest content element',
        icon: TrendingDown
      });
    }

    // CLS recommendations
    if (metrics.cls > 0.1) {
      newRecommendations.push({
        id: 'cls-poor',
        title: 'Poor Cumulative Layout Shift',
        description: 'Page elements are shifting during load, causing poor user experience.',
        priority: 'medium',
        category: 'user-experience',
        impact: 'Medium - Affects visual stability',
        action: 'Fix layout shifts and reserve space',
        icon: AlertTriangle
      });
    }

    // Memory recommendations
    if (metrics.memoryUsage > 100) {
      newRecommendations.push({
        id: 'memory-high',
        title: 'High Memory Usage',
        description: 'The application is using significant memory. Consider implementing memory management.',
        priority: 'medium',
        category: 'performance',
        impact: 'Medium - May cause performance issues',
        action: 'Implement memory cleanup and optimization',
        icon: HardDriveIcon
      });
    }

    // Network recommendations
    if (metrics.networkSpeed < 1) {
      newRecommendations.push({
        id: 'network-slow',
        title: 'Slow Network Connection',
        description: 'User has a slow network connection. Consider implementing progressive enhancement.',
        priority: 'low',
        category: 'user-experience',
        impact: 'Low - Network dependent',
        action: 'Implement progressive loading',
        icon: WifiOff
      });
    }

    setRecommendations(newRecommendations);
  }, [metrics]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    let score = 100;

    // FCP scoring (0-1800ms = 100-0 points)
    if (metrics.fcp > 0) {
      score -= Math.min(100, (metrics.fcp - 1800) / 18);
    }

    // LCP scoring (0-2500ms = 100-0 points)
    if (metrics.lcp > 0) {
      score -= Math.min(100, (metrics.lcp - 2500) / 25);
    }

    // CLS scoring (0-0.1 = 100-0 points)
    if (metrics.cls > 0) {
      score -= Math.min(100, metrics.cls * 1000);
    }

    // Memory scoring (0-100MB = 100-0 points)
    if (metrics.memoryUsage > 0) {
      score -= Math.min(100, metrics.memoryUsage);
    }

    return Math.max(0, Math.round(score));
  }, [metrics]);

  // Performance grade
  const performanceGrade = useMemo(() => {
    if (performanceScore >= 90) return { grade: 'A', color: 'text-green-400', bg: 'bg-green-500/20' };
    if (performanceScore >= 80) return { grade: 'B', color: 'text-yellow-400', bg: 'bg-yellow-500/20' };
    if (performanceScore >= 70) return { grade: 'C', color: 'text-orange-400', bg: 'bg-orange-500/20' };
    if (performanceScore >= 60) return { grade: 'D', color: 'text-red-400', bg: 'bg-red-500/20' };
    return { grade: 'F', color: 'text-red-500', bg: 'bg-red-500/20' };
  }, [performanceScore]);

  // Refresh performance data
  const refreshMetrics = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigation.responseStart - navigation.requestStart,
          domLoad: navigation.domContentLoadedEventEnd - navigation.navigationStart,
          windowLoad: navigation.loadEventEnd - navigation.navigationStart
        }));
      }
    }
  }, []);

  // Auto-hide after 5 seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Show performance panel on performance issues
  useEffect(() => {
    if (performanceScore < 70 && !isVisible) {
      setIsVisible(true);
    }
  }, [performanceScore, isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-6 right-6 z-50 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${performanceGrade.bg}`}>
                <Zap className={`w-5 h-5 ${performanceGrade.color}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Performance Monitor
                </h3>
                <p className="text-sm text-gray-400">
                  Real-time performance metrics
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={refreshMetrics}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Refresh performance metrics"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Toggle detailed view"
              >
                <Gauge className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Performance Score */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className={`text-4xl font-bold ${performanceGrade.color} mb-2`}>
              {performanceScore}
            </div>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${performanceGrade.bg} ${performanceGrade.color}`}>
              Grade {performanceGrade.grade}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-xs text-gray-400 mb-1">FCP</div>
              <div className="text-lg font-semibold text-white">
                {metrics.fcp > 0 ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
              </div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-xs text-gray-400 mb-1">LCP</div>
              <div className="text-lg font-semibold text-white">
                {metrics.lcp > 0 ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
              </div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-xs text-gray-400 mb-1">CLS</div>
              <div className="text-lg font-semibold text-white">
                {metrics.cls > 0 ? metrics.cls.toFixed(3) : 'N/A'}
              </div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-xs text-gray-400 mb-1">Memory</div>
              <div className="text-lg font-semibold text-white">
                {metrics.memoryUsage > 0 ? `${metrics.memoryUsage}MB` : 'N/A'}
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Network className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">Network</span>
              </div>
              <div className="flex items-center space-x-2">
                {metrics.isOnline ? (
                  <Wifi className="w-4 h-4 text-green-400" />
                ) : (
                  <WifiOff className="w-4 h-4 text-red-400" />
                )}
                <span className="text-white">{metrics.connectionType}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Battery className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">Battery</span>
              </div>
              <span className="text-white">{Math.round(metrics.batteryLevel)}%</span>
            </div>
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                Recommendations
              </h4>
              {recommendations.slice(0, 2).map((rec) => (
                <div key={rec.id} className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-cyan-500">
                  <div className="flex items-start space-x-3">
                    <rec.icon className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white mb-1">{rec.title}</div>
                      <div className="text-xs text-gray-400">{rec.description}</div>
                    </div>
                  </div>
                </div>
              ))}
              {recommendations.length > 2 && (
                <div className="text-center">
                  <button className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    View {recommendations.length - 2} more recommendations
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700/50 bg-gray-800/30">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Auto-hide in 5s</span>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Dismiss
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}