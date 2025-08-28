import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  Monitor, 
  Settings, 
  RefreshCw, 
  CheckCircle,
  AlertTriangle,
  Info,
  X,
  Download,
  Share2
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enabled: boolean;
  showMetrics?: boolean;
  customThresholds?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

export function PerformanceOptimizer({ 
  enabled, 
  showMetrics = false,
  customThresholds = {
    fcp: 1000,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 600
  }
}: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{
    timestamp: Date;
    action: string;
    impact: 'high' | 'medium' | 'low';
  }>>([]);

  useEffect(() => {
    if (!enabled) return;

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }

    // Initialize performance monitoring
    initializePerformanceMonitoring();
    
    // Set up periodic optimization
    const interval = setInterval(() => {
      if (enabled) {
        runOptimizations();
      }
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, [enabled]);

  const initializePerformanceMonitoring = () => {
    if (!('PerformanceObserver' in window)) return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const fid = entry.processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        } else if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: prev.cls + (entry as any).value }));
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor First Contentful Paint
    const paintObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      });
    });

    paintObserver.observe({ entryTypes: ['paint'] });

    // Monitor Time to First Byte
    const navigationObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
        }
      });
    });

    navigationObserver.observe({ entryTypes: ['navigation'] });
  };

  const runOptimizations = async () => {
    setIsOptimizing(true);
    
    try {
      // Image optimization
      await optimizeImages();
      
      // Font optimization
      await optimizeFonts();
      
      // CSS optimization
      await optimizeCSS();
      
      // JavaScript optimization
      await optimizeJavaScript();
      
      // Resource hints
      await setupResourceHints();
      
      // Cache optimization
      await optimizeCache();
      
      // Add to optimization history
      setOptimizationHistory(prev => [...prev, {
        timestamp: new Date(),
        action: 'Automatic optimization cycle',
        impact: 'medium'
      }]);
      
    } catch (error) {
      console.error('Optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  const optimizeImages = async () => {
    const images = document.querySelectorAll('img');
    let optimizedCount = 0;
    
    images.forEach((img) => {
      // Add lazy loading
      if (!img.loading) {
        img.loading = 'lazy';
        optimizedCount++;
      }
      
      // Add decoding optimization
      if (!img.decoding) {
        img.decoding = 'async';
        optimizedCount++;
      }
      
      // Add fetch priority for above-the-fold images
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.fetchPriority = 'high';
        optimizedCount++;
      }
    });
    
    if (optimizedCount > 0) {
      setOptimizationHistory(prev => [...prev, {
        timestamp: new Date(),
        action: `Optimized ${optimizedCount} images`,
        impact: 'high'
      }]);
    }
  };

  const optimizeFonts = async () => {
    // Preload critical fonts
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach((link) => {
      link.setAttribute('crossorigin', 'anonymous');
    });
    
    // Add font display swap for better performance
    const styleSheets = Array.from(document.styleSheets);
    styleSheets.forEach((sheet) => {
      try {
        const rules = sheet.cssRules || sheet.rules;
        if (rules) {
          Array.from(rules).forEach((rule: any) => {
            if (rule.style && rule.style.fontFamily) {
              rule.style.fontDisplay = 'swap';
            }
          });
        }
      } catch (e) {
        // Cross-origin stylesheets will throw errors
      }
    });
  };

  const optimizeCSS = async () => {
    // Remove unused CSS rules
    const styleSheets = Array.from(document.styleSheets);
    styleSheets.forEach((sheet) => {
      try {
        const rules = sheet.cssRules || sheet.rules;
        if (rules) {
          Array.from(rules).forEach((rule: any) => {
            if (rule.selectorText && rule.selectorText.includes(':hover')) {
              rule.media = 'hover';
            }
          });
        }
      } catch (e) {
        // Cross-origin stylesheets will throw errors
      }
    });
  };

  const optimizeJavaScript = async () => {
    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script:not([data-critical])');
    scripts.forEach((script) => {
      if (!script.async && !script.defer) {
        script.defer = true;
      }
    });
  };

  const setupResourceHints = async () => {
    // Add DNS prefetch for external domains
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    const domains = new Set<string>();
    
    externalLinks.forEach((link) => {
      try {
        const url = new URL(link.getAttribute('href') || '');
        if (url.hostname !== window.location.hostname) {
          domains.add(url.hostname);
        }
      } catch (e) {
        // Invalid URL
      }
    });

    domains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  };

  const optimizeCache = async () => {
    // Clear old caches if available
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        const oldCaches = cacheNames.filter(name => 
          name.includes('zion-tech-group') && 
          !name.includes('v1.0.0')
        );
        
        await Promise.all(oldCaches.map(name => caches.delete(name)));
      } catch (error) {
        console.error('Cache cleanup failed:', error);
      }
    }
  };

  const getMetricStatus = (metric: keyof PerformanceMetrics) => {
    const value = metrics[metric];
    const threshold = customThresholds[metric];
    
    if (value === 0) return 'pending';
    if (value <= threshold) return 'good';
    if (value <= threshold * 1.5) return 'warning';
    return 'critical';
  };

  const getMetricColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getMetricIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': return <X className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const exportMetrics = () => {
    const data = {
      timestamp: new Date().toISOString(),
      metrics,
      thresholds: customThresholds,
      optimizationHistory
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `performance-metrics-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const shareMetrics = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Performance Metrics',
          text: `FCP: ${metrics.fcp}ms, LCP: ${metrics.lcp}ms, FID: ${metrics.fid}ms, CLS: ${metrics.cls}, TTFB: ${metrics.ttfb}ms`,
          url: window.location.href
        });
      } catch (error) {
        console.error('Share failed:', error);
      }
    } else {
      // Fallback to clipboard
      const text = `Performance Metrics:\nFCP: ${metrics.fcp}ms\nLCP: ${metrics.lcp}ms\nFID: ${metrics.fid}ms\nCLS: ${metrics.cls}\nTTFB: ${metrics.ttfb}ms`;
      await navigator.clipboard.writeText(text);
      alert('Metrics copied to clipboard!');
    }
  };

  if (!enabled) return null;

  if (!showMetrics) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 left-4 z-50"
      >
        <button
          onClick={runOptimizations}
          disabled={isOptimizing}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50"
          title="Performance Optimizer"
        >
          {isOptimizing ? (
            <RefreshCw className="w-6 h-6 animate-spin" />
          ) : (
            <Zap className="w-6 h-6" />
          )}
        </button>
      </motion.div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Monitor className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">Performance Optimizer</h1>
                <p className="text-blue-100">Real-time performance monitoring & optimization</p>
              </div>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="text-white hover:text-blue-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { key: 'fcp', label: 'FCP', unit: 'ms', description: 'First Contentful Paint' },
              { key: 'lcp', label: 'LCP', unit: 'ms', description: 'Largest Contentful Paint' },
              { key: 'fid', label: 'FID', unit: 'ms', description: 'First Input Delay' },
              { key: 'cls', label: 'CLS', unit: '', description: 'Cumulative Layout Shift' },
              { key: 'ttfb', label: 'TTFB', unit: 'ms', description: 'Time to First Byte' }
            ].map(({ key, label, unit, description }) => {
              const status = getMetricStatus(key as keyof PerformanceMetrics);
              const value = metrics[key as keyof PerformanceMetrics];
              
              return (
                <div
                  key={key}
                  className={`p-4 rounded-lg border ${
                    status === 'good' ? 'bg-green-50 border-green-200' :
                    status === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                    status === 'critical' ? 'bg-red-50 border-red-200' :
                    'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                    <span className={getMetricColor(status)}>
                      {getMetricIcon(status)}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {value > 0 ? `${value.toFixed(2)}${unit}` : '...'}
                  </div>
                  <div className="text-xs text-gray-500">{description}</div>
                  <div className="text-xs text-gray-400">
                    Threshold: {customThresholds[key as keyof PerformanceMetrics]}{unit}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              <button
                onClick={runOptimizations}
                disabled={isOptimizing}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isOptimizing ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Zap className="w-4 h-4" />
                )}
                <span>{isOptimizing ? 'Optimizing...' : 'Run Optimizations'}</span>
              </button>
              
              <button
                onClick={exportMetrics}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              
              <button
                onClick={shareMetrics}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Optimization History */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Optimization History</h3>
            <div className="bg-gray-50 rounded-lg p-4 max-h-48 overflow-auto">
              {optimizationHistory.length === 0 ? (
                <p className="text-gray-500 text-center">No optimizations run yet</p>
              ) : (
                optimizationHistory.slice(-10).map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.impact === 'high' ? 'bg-red-100 text-red-800' :
                        item.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {item.impact}
                      </span>
                      <span className="text-sm text-gray-700">{item.action}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {item.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
