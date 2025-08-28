import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  Settings,
  BarChart3,
  Cpu,
  HardDrive,
  Wifi
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  enableMonitoring?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = true,
  enableMonitoring = true,
  autoOptimize = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics | null>(null);

  // Initialize performance monitoring
  useEffect(() => {
    if (!enableMonitoring) return;

    const initPerformanceMonitoring = () => {
      // Web Vitals monitoring
      if ('PerformanceObserver' in window) {
        try {
          // First Contentful Paint
          observerRef.current = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                updateMetrics('fcp', entry.startTime);
              }
            });
          });
          observerRef.current.observe({ entryTypes: ['paint'] });

          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              updateMetrics('lcp', lastEntry.startTime);
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              updateMetrics('fid', entry.processingStart - entry.startTime);
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            updateMetrics('cls', clsValue);
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          console.warn('Performance monitoring initialization failed:', error);
        }
      }

      // Traditional performance metrics
      const updateTraditionalMetrics = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          updateMetrics('ttfb', navigation.responseStart - navigation.requestStart);
          updateMetrics('domLoad', navigation.domContentLoadedEventEnd - navigation.navigationStart);
          updateMetrics('windowLoad', navigation.loadEventEnd - navigation.navigationStart);
        }
      };

      // Update metrics when page loads
      if (document.readyState === 'complete') {
        updateTraditionalMetrics();
      } else {
        window.addEventListener('load', updateTraditionalMetrics);
      }
    };

    initPerformanceMonitoring();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enableMonitoring]);

  // Update metrics state
  const updateMetrics = useCallback((key: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => {
      if (!prev) {
        const initial: PerformanceMetrics = {
          fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0, domLoad: 0, windowLoad: 0
        };
        initial[key] = value;
        return initial;
      }
      return { ...prev, [key]: value };
    });
  }, []);

  // Performance optimization suggestions
  const getOptimizationSuggestions = useCallback((metrics: PerformanceMetrics): string[] => {
    const suggestions: string[] = [];

    if (metrics.fcp > 1800) {
      suggestions.push('Optimize First Contentful Paint - Consider reducing render-blocking resources');
    }
    if (metrics.lcp > 2500) {
      suggestions.push('Improve Largest Contentful Paint - Optimize images and critical resources');
    }
    if (metrics.fid > 100) {
      suggestions.push('Reduce First Input Delay - Optimize JavaScript execution');
    }
    if (metrics.cls > 0.1) {
      suggestions.push('Minimize Cumulative Layout Shift - Ensure stable layout during page load');
    }
    if (metrics.ttfb > 600) {
      suggestions.push('Improve Time to First Byte - Optimize server response time');
    }

    return suggestions;
  }, []);

  // Auto-optimize performance
  const performOptimizations = useCallback(async () => {
    if (!autoOptimize) return;

    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
      // Preload critical resources
      const criticalResources = [
        '/fonts/orbitron-v19-latin-700.woff2',
        '/images/zion-tech-group-logo.png'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        document.head.appendChild(link);
        newOptimizations.push(`Preloaded critical resource: ${resource}`);
      });

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
          newOptimizations.push('Added lazy loading to images');
        }
      });

      // Optimize CSS delivery
      const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
      styleSheets.forEach(sheet => {
        if (!sheet.media || sheet.media === 'all') {
          sheet.media = 'print';
          sheet.onload = () => { sheet.media = 'all'; };
          newOptimizations.push('Optimized CSS delivery with media query trick');
        }
      });

      // Service worker optimization
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.getRegistration();
          if (registration) {
            newOptimizations.push('Service worker is active and optimizing performance');
          }
        } catch (error) {
          console.warn('Service worker optimization check failed:', error);
        }
      }

      setOptimizations(prev => [...new Set([...prev, ...newOptimizations])]);
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [autoOptimize]);

  // Get performance score
  const getPerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;

    if (metrics.fcp > 1800) score -= 10;
    if (metrics.lcp > 2500) score -= 15;
    if (metrics.fid > 100) score -= 10;
    if (metrics.cls > 0.1) score -= 15;
    if (metrics.ttfb > 600) score -= 10;

    return Math.max(0, score);
  }, []);

  // Get performance grade
  const getPerformanceGrade = useCallback((score: number): { grade: string; color: string } => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400' };
    if (score >= 60) return { grade: 'D', color: 'text-red-400' };
    return { grade: 'F', color: 'text-red-600' };
  }, []);

  // Toggle visibility
  const toggleVisibility = () => setIsVisible(!isVisible);

  // Toggle settings
  const toggleSettings = () => setShowSettings(!showSettings);

  if (!showMetrics) return null;

  const performanceScore = metrics ? getPerformanceScore(metrics) : 0;
  const { grade, color } = getPerformanceGrade(performanceScore);
  const suggestions = metrics ? getOptimizationSuggestions(metrics) : [];

  return (
    <>
      {/* Performance Toggle Button */}
      <motion.button
        onClick={toggleVisibility}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-20 z-40 w-80 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">Performance Monitor</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleSettings}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleVisibility}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Performance Score */}
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-3xl font-bold text-white mb-2">{performanceScore}</div>
                <div className={`text-2xl font-bold ${color} mb-2`}>{grade}</div>
                <div className="text-slate-400 text-sm">Performance Score</div>
              </div>

              {/* Metrics */}
              {metrics && (
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center">
                    <Cpu className="w-4 h-4 mr-2 text-cyan-400" />
                    Core Web Vitals
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <MetricCard
                      label="FCP"
                      value={metrics.fcp}
                      unit="ms"
                      good={metrics.fcp <= 1800}
                      description="First Contentful Paint"
                    />
                    <MetricCard
                      label="LCP"
                      value={metrics.lcp}
                      unit="ms"
                      good={metrics.lcp <= 2500}
                      description="Largest Contentful Paint"
                    />
                    <MetricCard
                      label="FID"
                      value={metrics.fid}
                      unit="ms"
                      good={metrics.fid <= 100}
                      description="First Input Delay"
                    />
                    <MetricCard
                      label="CLS"
                      value={metrics.cls}
                      unit=""
                      good={metrics.cls <= 0.1}
                      description="Cumulative Layout Shift"
                    />
                  </div>
                </div>
              )}

              {/* Optimizations */}
              {optimizations.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold flex items-center mb-3">
                    <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                    Applied Optimizations
                  </h4>
                  <div className="space-y-2">
                    {optimizations.slice(-5).map((opt, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold flex items-center mb-3">
                    <AlertTriangle className="w-4 h-4 mr-2 text-orange-400" />
                    Optimization Suggestions
                  </h4>
                  <div className="space-y-2">
                    {suggestions.map((suggestion, index) => (
                      <div key={index} className="text-sm text-slate-300 bg-slate-800/50 p-2 rounded">
                        {suggestion}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={performOptimizations}
                  disabled={isOptimizing}
                  className="flex-1 flex items-center justify-center px-3 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 text-white text-sm font-medium rounded transition-colors"
                >
                  {isOptimizing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Optimizing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Optimize
                    </>
                  )}
                </button>
                
                <button
                  onClick={() => window.location.reload()}
                  className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded transition-colors"
                  title="Refresh Page"
                >
                  <HardDrive className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-32 right-20 z-30 w-64 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl p-4"
          >
            <h4 className="text-white font-semibold mb-3">Performance Settings</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Auto-optimize</span>
                <input
                  type="checkbox"
                  checked={autoOptimize}
                  onChange={(e) => setOptimizations(prev => [...prev, `Auto-optimization ${e.target.checked ? 'enabled' : 'disabled'}`])}
                  className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Monitoring</span>
                <input
                  type="checkbox"
                  checked={enableMonitoring}
                  className="w-4 h-4 text-cyan-600 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                  disabled
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Metric Card Component
interface MetricCardProps {
  label: string;
  value: number;
  unit: string;
  good: boolean;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, unit, good, description }) => (
  <div className="bg-slate-800/50 p-3 rounded-lg">
    <div className="flex items-center justify-between mb-1">
      <span className="text-xs text-slate-400">{label}</span>
      <div className={`w-2 h-2 rounded-full ${good ? 'bg-green-400' : 'bg-red-400'}`} />
    </div>
    <div className="text-lg font-semibold text-white">
      {value.toFixed(1)}{unit}
    </div>
    <div className="text-xs text-slate-500">{description}</div>
  </div>
);
