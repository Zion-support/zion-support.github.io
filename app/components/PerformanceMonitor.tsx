<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0

  const [isVisible, setIsVisible] = useState(false);
    // Only run in development
    if (process.env['NODE_ENV'] !== 'development') return;
=======
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

interface PerformanceMonitorProps {
  children: React.ReactNode;
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children, showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091

    const measurePerformance = () => {
      // Measure load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

      // Measure render time (FCP)
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const renderTime = fcp ? fcp.startTime : 0;
          requestAnimationFrame(measureFrame);
        };
        
        requestAnimationFrame(measureFrame);
    if (typeof window === 'undefined') return;

    // Only show in development or when performance monitoring is enabled
    const shouldMonitor = process.env['NODE_ENV'] === 'development' ||
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          updateMetrics({ lcp: entry.startTime });
        }
        if (entry.entryType === 'first-input') {
          updateMetrics({ fid: entry.processingStart - entry.startTime });
        }
        if (entry.entryType === 'layout-shift') {
          updateMetrics({ cls: (entry as any).value });
        }
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          updateMetrics({ fcp: entry.startTime });
        }
      }

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: Math.round(memoryUsage * 100),
        fps
      });
    // Monitor resource loading
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter((resource: any) => resource.duration > 1000);
      
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map((r: any) => ({
          name: r.name,
          duration: Math.round(r.duration) + 'ms'
        })));
    // Initial measurement
    measurePerformance();

    // Show/hide with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg font-mono text-sm z-50">
      <div className="mb-2 font-bold">Performance Monitor</div>
      <div>Load Time: {metrics.loadTime}ms</div>
      <div>Render Time: {metrics.renderTime}ms</div>
      <div>Memory: {metrics.memoryUsage}%</div>
      <div>FPS: {metrics.fps}</div>
      <div className="text-xs text-gray-400 mt-2">
}
    // Show performance panel after 3 seconds;
const timer = setTimeout(() => setIsVisible(true), 3000);
      observer.disconnect();
  useEffect(() => {
<<<<<<< HEAD
    // Only show in development or if explicitly enabled
    if (process.env['NODE_ENV'] !== 'development' && !showInProduction) {
      return;
    }

    const updateMetrics = () => {
      // Get performance metrics from the browser
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint');
      
      setMetrics({
        lcp: lcp ? lcp.startTime : null,
        fid: null, // FID requires user interaction
        cls: null, // CLS requires more complex calculation
        fcp: fcp ? fcp.startTime : null,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : null
      });
    };
=======
=======
import React, { useEffect, useState, useCallback } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMonitorProps {
  showDetails?: boolean;
  children: React.ReactNode;
}

<<<<<<< HEAD
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    INP: null,
    FCP: null,
    LCP: null,
    TTFB: null,
=======
interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showDetails = false, 
  children 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
  });

  const [isVisible, setIsVisible] = useState(false);

<<<<<<< HEAD
  useEffect(() => {
    // Only show in development or if debug flag is set
    const shouldShow = process.env['NODE_ENV'] === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Measure Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, CLS: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, INP: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, FCP: metric.value }));
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, LCP: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, TTFB: metric.value }));
    });

    // Log performance data
    const logPerformance = () => {
      console.group('🚀 Performance Metrics');
      console.log('CLS (Cumulative Layout Shift):', metrics.CLS);
      console.log('INP (Interaction to Next Paint):', metrics.INP);
      console.log('FCP (First Contentful Paint):', metrics.FCP);
      console.log('LCP (Largest Contentful Paint):', metrics.LCP);
      console.log('TTFB (Time to First Byte):', metrics.TTFB);
      console.groupEnd();
    };

    // Log after a delay to allow metrics to populate
    const timeout = setTimeout(logPerformance, 3000);
    return () => clearTimeout(timeout);
  }, [metrics]);

  const getScore = (metric: number | null, thresholds: { good: number; needsImprovement: number }): 'good' | 'needs-improvement' | 'poor' => {
    if (metric === null) return 'good';
    if (metric <= thresholds.good) return 'good';
    if (metric <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'Measuring...';
    return `${value.toFixed(2)}${unit}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-900/95 backdrop-blur-md border border-gray-700/50 rounded-lg p-4 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
=======
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    // Only run in production
    if (process.env['NODE_ENV'] !== 'production') return;

    const updateMetric = (name: keyof PerformanceMetrics, value: number) => {
      setMetrics(prev => ({ ...prev, [name]: value }));
=======
    const metrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
    };

    // Measure Core Web Vitals
    onCLS((metric) => updateMetric('cls', metric.value));
    onINP((metric) => updateMetric('inp', metric.value));
    onFCP((metric) => updateMetric('fcp', metric.value));
    onLCP((metric) => updateMetric('lcp', metric.value));
    onTTFB((metric) => updateMetric('ttfb', metric.value));

<<<<<<< HEAD
    // Show performance panel if metrics are poor
    const checkPerformance = () => {
      const hasPoorMetrics = 
        (metrics.lcp && metrics.lcp > 4000) ||
        (metrics.inp && metrics.inp > 300) ||
        (metrics.cls && metrics.cls > 0.25);
      
      if (hasPoorMetrics) {
        setIsVisible(true);
      }
    };

    // Check performance after 5 seconds
    const timer = setTimeout(checkPerformance, 5000);
    return () => clearTimeout(timer);
  }, [metrics]);

  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.lcp && metrics.lcp > 4000) score -= 30;
    if (metrics.inp && metrics.inp > 300) score -= 25;
    if (metrics.cls && metrics.cls > 0.25) score -= 25;
    if (metrics.fcp && metrics.fcp > 3000) score -= 10;
    if (metrics.ttfb && metrics.ttfb > 1000) score -= 10;
    
    return Math.max(0, score);
  };
=======
'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
=======
        // FID - First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            metrics.fid = entry.processingStart - entry.startTime;
          });
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observer not supported');
        }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          } else if (entry.entryType === 'layout-shift') {
            if (!entry.hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
            }
=======
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          }
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
          }
          if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cls: prev.cls + (entry as any).value }));
          }
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
          }
        }
      });

<<<<<<< HEAD
      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        observer.observe({ entryTypes: ['navigation'] });
      }

      // Start measuring after a short delay to ensure page is loaded
      const timeout = setTimeout(() => {
        if (typeof window !== 'undefined' && window.performance) {
          const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            setMetrics(prev => ({
              ...prev,
              ttfb: navigation.responseStart - navigation.requestStart
            }));
          }
        }
      }, 1000);

<<<<<<< HEAD
      return () => {
        clearTimeout(timeout);
        observer.disconnect();
      };
    }
  }, []);

  // Log metrics for debugging (only in development)
  useEffect(() => {
    if (process.env['NODE_ENV'] === 'development' && Object.keys(metrics).length > 0) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);
=======
    return () => {
      // Cleanup observers if needed
    };
  }, []);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74

  return null;
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const score = getPerformanceScore();

  if (!isVisible && score >= 90) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
<<<<<<< HEAD
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS</span>
          <span className={getScoreColor(getScore(metrics.CLS, { good: 0.1, needsImprovement: 0.25 }))}>
            {formatMetric(metrics.CLS)}
          </span>
=======
        <div className="flex justify-between">
          <span>Performance Score:</span>
          <span className={getScoreColor(score)}>{score}/100</span>
        </div>
        
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp > 4000 ? 'text-red-400' : 'text-green-400'}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.inp && (
          <div className="flex justify-between">
            <span>INP:</span>
            <span className={metrics.inp > 300 ? 'text-red-400' : 'text-green-400'}>
              {metrics.inp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.cls && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls > 0.25 ? 'text-red-400' : 'text-green-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp > 3000 ? 'text-red-400' : 'text-green-400'}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb > 1000 ? 'text-red-400' : 'text-green-400'}>
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>
      
      {score < 70 && (
        <div className="mt-3 pt-2 border-t border-gray-700">
          <p className="text-xs text-yellow-400">
            Consider optimizing images and reducing JavaScript bundle size.
          </p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">INP</span>
          <span className={getScoreColor(getScore(metrics.INP, { good: 200, needsImprovement: 500 }))}>
            {formatMetric(metrics.INP)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FCP</span>
          <span className={getScoreColor(getScore(metrics.FCP, { good: 1800, needsImprovement: 3000 }))}>
            {formatMetric(metrics.FCP)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP</span>
          <span className={getScoreColor(getScore(metrics.LCP, { good: 2500, needsImprovement: 4000 }))}>
            {formatMetric(metrics.LCP)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">TTFB</span>
          <span className={getScoreColor(getScore(metrics.TTFB, { good: 800, needsImprovement: 1800 }))}>
            {formatMetric(metrics.TTFB)}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-700/50">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Good: Green</span>
          <span>Needs Work: Yellow</span>
          <span>Poor: Red</span>
        </div>
      </div>
    </div>
=======
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      {children}
      {showDetails && process.env['NODE_ENV'] === 'development' && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg text-xs">
          <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
          <div>FID: {metrics.fid.toFixed(2)}ms</div>
          <div>CLS: {metrics.cls.toFixed(4)}</div>
          <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
        </div>
      )}
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37

<<<<<<< HEAD
    // Update metrics after page load
    const timer = setTimeout(updateMetrics, 1000);
    
    // Show monitor after 2 seconds
    const visibilityTimer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(visibilityTimer);
    };
  }, [showInProduction]);

  if (!isVisible) {
    return null;
  }

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return <Activity className="w-4 h-4" />;
    if (value <= thresholds.good) return <TrendingUp className="w-4 h-4" />;
    if (value <= thresholds.poor) return <Clock className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg p-4 shadow-2xl z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">LCP</span>
          <div className="flex items-center space-x-1">
            {getScoreIcon(metrics.lcp, { good: 2500, poor: 4000 })}
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">FCP</span>
          <div className="flex items-center space-x-1">
            {getScoreIcon(metrics.fcp, { good: 1800, poor: 3000 })}
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">TTFB</span>
          <div className="flex items-center space-x-1">
            {getScoreIcon(metrics.ttfb, { good: 800, poor: 1800 })}
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">FID</span>
          <div className="flex items-center space-x-1">
            <Activity className="w-4 h-4" />
            <span className="text-gray-400">N/A</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">CLS</span>
          <div className="flex items-center space-x-1">
            <Activity className="w-4 h-4" />
            <span className="text-gray-400">N/A</span>
          </div>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700">
        <div className="text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Good</span>
          </div>
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span>Needs Improvement</span>
          </div>
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <span>Poor</span>
          </div>
        </div>
=======
import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number;
  INP: number;
  FCP: number;
  LCP: number;
  TTFB: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const metrics: PerformanceMetrics = {
      CLS: 0,
      INP: 0,
      FCP: 0,
      LCP: 0,
      TTFB: 0,
    };

    const sendToAnalytics = (metric: any) => {
      // Send to your analytics service
      console.log('Performance Metric:', metric);
      
      // Example: Send to Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
=======
  const updateMetric = useCallback((name: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  useEffect(() => {
    // Measure Core Web Vitals
    onCLS((metric) => {
      updateMetric('cls', metric.value);
    });

    onINP((metric) => {
      updateMetric('inp', metric.value);
    });

    onFCP((metric) => {
      updateMetric('fcp', metric.value);
    });

    onLCP((metric) => {
      updateMetric('lcp', metric.value);
    });

    onTTFB((metric) => {
      updateMetric('ttfb', metric.value);
    });

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            // Track additional navigation metrics
            console.log('Navigation timing:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              domInteractive: navEntry.domInteractive - navEntry.navigationStart
            });
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

      return () => observer.disconnect();
    }
  }, [updateMetric]);

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  if (!showDetails) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Performance Monitor Overlay */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-slate-700 transition-colors text-sm font-medium"
        >
          Performance {isVisible ? '▼' : '▲'}
        </button>
        
        {isVisible && (
          <div className="absolute bottom-12 right-0 bg-slate-800 text-white p-4 rounded-lg shadow-xl min-w-80">
            <h3 className="text-lg font-semibold mb-3 text-cyan-400">Core Web Vitals</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span>LCP (Largest Contentful Paint):</span>
                <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
                  {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Measuring...'}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
              </div>
              
              <div className="flex justify-between items-center">
                <span>INP (Interaction to Next Paint):</span>
                <span className={getScoreColor(metrics.inp, { good: 200, needsImprovement: 500 })}>
                  {metrics.inp ? `${Math.round(metrics.inp)}ms` : 'Measuring...'}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {getScoreText(metrics.inp, { good: 200, needsImprovement: 500 })}
              </div>
              
              <div className="flex justify-between items-center">
                <span>CLS (Cumulative Layout Shift):</span>
                <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
                  {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
              </div>
              
              <div className="flex justify-between items-center">
                <span>FCP (First Contentful Paint):</span>
                <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
                  {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Measuring...'}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 })}
              </div>
              
              <div className="flex justify-between items-center">
                <span>TTFB (Time to First Byte):</span>
                <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
                  {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Measuring...'}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {getScoreText(metrics.ttfb, { good: 800, needsImprovement: 1800 })}
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-600">
              <div className="text-xs text-gray-400">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PerformanceMonitor;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
=======
export default PerformanceMonitor;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
