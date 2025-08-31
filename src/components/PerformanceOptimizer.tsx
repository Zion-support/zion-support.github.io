import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import {
  Activity,
  Zap,
  Gauge,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  HardDrive,
  Cpu,
  Memory,
  Network,
  Battery,
  Settings,
  X,
  RefreshCw,
  Info,
  BarChart3,
  Target,
  Rocket,
  Lightbulb,
  Shield,
  Globe,
  Smartphone
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

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'accessibility' | 'seo' | 'mobile' | 'security';
  implemented: boolean;
  priority: number;
  estimatedSavings: string;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
  onOptimizationComplete?: (metrics: PerformanceMetrics) => void;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: 0
  });

  // Measure Core Web Vitals
  const measureCoreWebVitals = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint (FCP)
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metricsRef.current.fcp = entry.startTime;
            setMetrics({ ...metricsRef.current });
          }
        });
      });
      observerRef.current.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            metricsRef.current.lcp = entry.startTime;
            setMetrics({ ...metricsRef.current });
          }
        });
      });
      observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            metricsRef.current.fid = entry.processingStart - entry.startTime;
            setMetrics({ ...metricsRef.current });
          }
        });
      });
      observerRef.current.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      observerRef.current = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metricsRef.current.cls = clsValue;
        setMetrics({ ...metricsRef.current });
      });
      observerRef.current.observe({ entryTypes: ['layout-shift'] });

    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }
  }, [enabled]);

  // Measure additional performance metrics
  const measureAdditionalMetrics = useCallback(() => {
    if (!enabled) return;

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
    }

    // DOM Load Time
    const domLoadEvent = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (domLoadEvent) {
      metricsRef.current.domLoad = domLoadEvent.domContentLoadedEventEnd - domLoadEvent.domContentLoadedEventStart;
    }

    // Window Load Time
    const windowLoadEvent = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (windowLoadEvent) {
      metricsRef.current.windowLoad = windowLoadEvent.loadEventEnd - windowLoadEvent.loadEventStart;
    }

    setMetrics({ ...metricsRef.current });
  }, [enabled]);

  // Auto-optimization based on metrics
  const autoOptimize = useCallback(() => {
    if (!autoOptimize || !metrics) return;

    setIsOptimizing(true);

    // Optimize based on poor performance
    if (metrics.fcp > 2000) {
      // Optimize images and critical resources
      optimizeImages();
    }

    if (metrics.lcp > 4000) {
      // Optimize largest contentful paint
      optimizeLCP();
    }

    if (metrics.cls > 0.1) {
      // Optimize layout stability
      optimizeLayout();
    }

    setTimeout(() => setIsOptimizing(false), 1000);
  }, [autoOptimize, metrics]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  // LCP optimization
  const optimizeLCP = useCallback(() => {
    // Preload critical resources
    const criticalResources = document.querySelectorAll('link[rel="preload"]');
    criticalResources.forEach((link) => {
      if (link.getAttribute('as') === 'image') {
        link.setAttribute('fetchpriority', 'high');
      }
    });
  }, []);

  // Layout optimization
  const optimizeLayout = useCallback(() => {
    // Add explicit dimensions to images and videos
    const mediaElements = document.querySelectorAll('img, video');
    mediaElements.forEach((element) => {
      if (!element.hasAttribute('width') || !element.hasAttribute('height')) {
        element.setAttribute('width', '100%');
        element.setAttribute('height', 'auto');
      }
    });
  }, []);

  // Resource hints optimization
  const optimizeResourceHints = useCallback(() => {
    if (!enabled) return;

    // DNS prefetch for external domains
    const externalDomains = new Set<string>();
    document.querySelectorAll('a[href^="http"]').forEach((link) => {
      try {
        const url = new URL(link.getAttribute('href') || '');
        if (url.hostname !== window.location.hostname) {
          externalDomains.add(url.hostname);
        }
      } catch (e) {
        // Invalid URL, skip
      }
    });

    externalDomains.forEach((domain) => {
      if (!document.querySelector(`link[href*="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      }
    });
  }, [enabled]);

  // Memory usage monitoring
  const monitorMemory = useCallback(() => {
    if (!enabled || !('memory' in performance)) return;

    const memory = (performance as any).memory;
    if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
      console.warn('High memory usage detected');
      // Trigger garbage collection if possible
      if ('gc' in window) {
        (window as any).gc();
      }
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    // Measure core web vitals
    measureCoreWebVitals();

    // Measure additional metrics after page load
    const handleLoad = () => {
      setTimeout(measureAdditionalMetrics, 100);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleLoad);
    } else {
      handleLoad();
    }

    // Optimize resource hints
    optimizeResourceHints();

    // Monitor memory usage
    const memoryInterval = setInterval(monitorMemory, 10000);

    // Auto-optimize after metrics are collected
    const optimizationTimeout = setTimeout(autoOptimize, 3000);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearInterval(memoryInterval);
      clearTimeout(optimizationTimeout);
      document.removeEventListener('DOMContentLoaded', handleLoad);
    };
  }, [enabled, measureCoreWebVitals, measureAdditionalMetrics, optimizeResourceHints, monitorMemory, autoOptimize]);

  // Performance score calculation
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;

    // FCP scoring (0-2000ms is good)
    if (metrics.fcp > 2000) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;

    // LCP scoring (0-4000ms is good)
    if (metrics.lcp > 4000) score -= 20;
    else if (metrics.lcp > 2000) score -= 10;

    // FID scoring (0-100ms is good)
    if (metrics.fid > 100) score -= 20;
    else if (metrics.fid > 50) score -= 10;

    // CLS scoring (0-0.1 is good)
    if (metrics.cls > 0.1) score -= 20;
    else if (metrics.cls > 0.05) score -= 10;

    return Math.max(0, score);
  }, []);

  if (!enabled) return null;

  const performanceScore = metrics ? calculatePerformanceScore(metrics) : null;

  return (
    <>
      {showMetrics && metrics && (
        <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 text-white text-sm z-50 max-w-xs">
          <div className="font-semibold mb-2 text-cyan-400">Performance Metrics</div>
          {performanceScore !== null && (
            <div className="mb-2">
              <span className="text-gray-300">Score: </span>
              <span className={`font-bold ${performanceScore >= 90 ? 'text-green-400' : performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>
                {performanceScore}/100
              </span>
            </div>
          )}
          <div className="space-y-1 text-xs">
            <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
            <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
            <div>FID: {metrics.fid.toFixed(0)}ms</div>
            <div>CLS: {metrics.cls.toFixed(3)}</div>
            <div>TTFB: {metrics.ttfb.toFixed(0)}ms</div>
          </div>
          {isOptimizing && (
            <div className="mt-2 text-cyan-400 text-xs animate-pulse">
              Optimizing...
            </div>
          )}
        </div>
      )}
    </>
  );
};
