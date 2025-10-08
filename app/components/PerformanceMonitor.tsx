'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Activity, Cpu, HardDrive, Gauge, X, ChevronDown, ChevronUp } from 'lucide-react';

interface DetailedPerformanceMetrics {
  // Core Web Vitals
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  fcp?: number; // First Contentful Paint
  ttfb?: number; // Time to First Byte
  
  // Additional Metrics
  loadTime: number;
  domContentLoaded: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  
  // Resource Metrics
  jsHeapSize?: number;
  totalJSHeapSize?: number;
  resourceCount?: number;
  
  // Network Metrics
  transferSize?: number;
  encodedBodySize?: number;
  decodedBodySize?: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: DetailedPerformanceMetrics) => void;
  enableConsoleLogging?: boolean;
  updateInterval?: number;
  showInProduction?: boolean;
  minimized?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableConsoleLogging = false,
  updateInterval = 2000,
  showInProduction = false,
  minimized: initialMinimized = false
}) => {
  const [metrics, setMetrics] = useState<DetailedPerformanceMetrics>({
    loadTime: 0,
    domContentLoaded: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  const [performanceScore, setPerformanceScore] = useState(100);
  const [isMinimized, setIsMinimized] = useState(initialMinimized);
  const [isVisible, setIsVisible] = useState(true);
  const fpsFrames = useRef<number[]>([]);
  const lastFrameTime = useRef<number>(performance.now());

  useEffect(() => {
    // Calculate FPS
    const calculateFPS = () => {
      const now = performance.now();
      const delta = now - lastFrameTime.current;
      lastFrameTime.current = now;
      
      const fps = 1000 / delta;
      fpsFrames.current.push(fps);
      
      // Keep only last 60 frames
      if (fpsFrames.current.length > 60) {
        fpsFrames.current.shift();
      }
      
      return fpsFrames.current.reduce((a, b) => a + b, 0) / fpsFrames.current.length;
    };

    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      if ('PerformanceObserver' in window) {
        try {
          // LCP Observer
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
            setMetrics(prev => ({
              ...prev,
              lcp: lastEntry.renderTime || lastEntry.loadTime || 0
            }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // FID Observer
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: PerformanceEntry & { processingStart?: number; startTime?: number }) => {
              setMetrics(prev => ({
                ...prev,
                fid: entry.processingStart ? entry.processingStart - entry.startTime : 0
              }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // CLS Observer
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: PerformanceEntry & { value?: number; hadRecentInput?: boolean }) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value || 0;
                setMetrics(prev => ({
                  ...prev,
                  cls: clsValue
                }));
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          return () => {
            lcpObserver.disconnect();
            fidObserver.disconnect();
            clsObserver.disconnect();
          };
        } catch (e) {
          console.error('Error setting up performance observers:', e);
        }
      }
    };

    const cleanup = observeWebVitals();
    
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      const memory = (performance as Performance & { 
        memory?: { 
          usedJSHeapSize: number; 
          totalJSHeapSize: number;
          jsHeapSizeLimit: number;
        } 
      }).memory;
      
      // Get resource metrics
      const resources = performance.getEntriesByType('resource');
      const totalTransferSize = resources.reduce((acc, resource: PerformanceEntry & { transferSize?: number }) => 
        acc + (resource.transferSize || 0), 0);
      
      const currentFPS = calculateFPS();
      
      const currentMetrics: DetailedPerformanceMetrics = {
        // Core Web Vitals
        fcp: navigation?.responseStart || 0,
        ttfb: navigation?.responseStart ? navigation.responseStart - navigation.requestStart : 0,
        lcp: metrics.lcp,
        fid: metrics.fid,
        cls: metrics.cls,
        
        // Load Metrics
        loadTime: navigation?.loadEventEnd || 0,
        domContentLoaded: navigation?.domContentLoadedEventEnd || 0,
        renderTime: performance.now(),
        
        // Memory Metrics
        memoryUsage: memory?.usedJSHeapSize ? memory.usedJSHeapSize / 1024 / 1024 : 0,
        jsHeapSize: memory?.usedJSHeapSize,
        totalJSHeapSize: memory?.totalJSHeapSize,
        
        // Performance
        fps: currentFPS,
        
        // Resource Metrics
        resourceCount: resources.length,
        transferSize: totalTransferSize,
      };
      
      setMetrics(currentMetrics);
      
      // Calculate performance score
      const score = calculatePerformanceScore(currentMetrics);
      setPerformanceScore(score);
      
      if (enableConsoleLogging) {
        console.group('📊 Performance Metrics');
        console.table(currentMetrics);
        console.log('Score:', score);
        console.groupEnd();
      }
      
      if (onMetricsUpdate) {
        onMetricsUpdate(currentMetrics);
      }
    };

    // Initial update
    setTimeout(updateMetrics, 1000);

    // Set up interval for continuous monitoring
    const interval = setInterval(updateMetrics, updateInterval);

    // FPS tracking
    let frameId: number;
    const trackFPS = () => {
      calculateFPS();
      frameId = requestAnimationFrame(trackFPS);
    };
    trackFPS();

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(frameId);
      if (cleanup) cleanup();
    };
  }, [onMetricsUpdate, enableConsoleLogging, updateInterval, metrics.lcp, metrics.fid, metrics.cls]);

  const calculatePerformanceScore = (metrics: DetailedPerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (Good: < 2.5s, Needs Improvement: < 4s, Poor: >= 4s)
    if (metrics.lcp) {
      if (metrics.lcp > 4000) score -= 25;
      else if (metrics.lcp > 2500) score -= 15;
    }
    
    // FID scoring (Good: < 100ms, Needs Improvement: < 300ms, Poor: >= 300ms)
    if (metrics.fid) {
      if (metrics.fid > 300) score -= 20;
      else if (metrics.fid > 100) score -= 10;
    }
    
    // CLS scoring (Good: < 0.1, Needs Improvement: < 0.25, Poor: >= 0.25)
    if (metrics.cls) {
      if (metrics.cls > 0.25) score -= 20;
      else if (metrics.cls > 0.1) score -= 10;
    }
    
    // FPS scoring
    if (metrics.fps < 30) score -= 15;
    else if (metrics.fps < 50) score -= 5;
    
    // Memory usage scoring
    if (metrics.memoryUsage > 100) score -= 15;
    else if (metrics.memoryUsage > 50) score -= 10;
    
    return Math.max(0, Math.min(100, score));
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number): string => {
    if (score >= 90) return 'Excellent';
    if (score >= 75) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  // Only show in development unless explicitly enabled for production
  if (process.env['NODE_ENV'] !== 'development' && !showInProduction) {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-xl max-w-sm">
      <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-blue-600" />
          <h3 className="text-sm font-semibold text-gray-900">
            Performance Monitor
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
            aria-label={isMinimized ? "Expand" : "Minimize"}
          >
            {isMinimized ? (
              <ChevronUp className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-600" />
            )}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      {!isMinimized && (
        <div className="p-4 space-y-3">
          {/* Performance Score */}
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Score</span>
            </div>
            <div className="text-right">
              <div className={`text-xl font-bold ${getScoreColor(performanceScore)}`}>
                {performanceScore}
              </div>
              <div className="text-xs text-gray-500">
                {getScoreLabel(performanceScore)}
              </div>
            </div>
          </div>

          {/* Core Web Vitals */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Core Web Vitals
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <MetricItem 
                label="LCP" 
                value={metrics.lcp ? `${(metrics.lcp / 1000).toFixed(2)}s` : '-'} 
                good={metrics.lcp ? metrics.lcp < 2500 : undefined}
              />
              <MetricItem 
                label="FID" 
                value={metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '-'} 
                good={metrics.fid ? metrics.fid < 100 : undefined}
              />
              <MetricItem 
                label="CLS" 
                value={metrics.cls ? metrics.cls.toFixed(3) : '-'} 
                good={metrics.cls ? metrics.cls < 0.1 : undefined}
              />
              <MetricItem 
                label="FCP" 
                value={metrics.fcp ? `${(metrics.fcp / 1000).toFixed(2)}s` : '-'} 
              />
            </div>
          </div>

          {/* System Metrics */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-1">
              <Cpu className="h-3 w-3" />
              System
            </h4>
            <div className="space-y-1 text-xs">
              <MetricItem 
                label="FPS" 
                value={metrics.fps.toFixed(1)} 
                good={metrics.fps > 50}
              />
              <MetricItem 
                label="Memory" 
                value={`${metrics.memoryUsage.toFixed(1)} MB`} 
                good={metrics.memoryUsage < 50}
              />
              {metrics.resourceCount && (
                <MetricItem 
                  label="Resources" 
                  value={metrics.resourceCount.toString()} 
                />
              )}
            </div>
          </div>

          {/* Load Metrics */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-1">
              <HardDrive className="h-3 w-3" />
              Load Time
            </h4>
            <div className="space-y-1 text-xs">
              <MetricItem 
                label="TTFB" 
                value={metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '-'} 
              />
              <MetricItem 
                label="DOM Content" 
                value={`${metrics.domContentLoaded.toFixed(0)}ms`} 
              />
              <MetricItem 
                label="Page Load" 
                value={`${metrics.loadTime.toFixed(0)}ms`} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface MetricItemProps {
  label: string;
  value: string;
  good?: boolean;
}

const MetricItem: React.FC<MetricItemProps> = ({ label, value, good }) => (
  <div className="flex justify-between items-center py-1 px-2 bg-white rounded border border-gray-100">
    <span className="text-gray-600">{label}:</span>
    <span className={`font-mono font-medium ${
      good === undefined ? 'text-gray-900' : 
      good ? 'text-green-600' : 'text-red-600'
    }`}>
      {value}
    </span>
  </div>
);

export default PerformanceMonitor;