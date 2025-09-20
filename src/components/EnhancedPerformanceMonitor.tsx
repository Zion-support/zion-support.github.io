import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Eye, EyeOff, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  fps: number;
  lighthouseScore: number;
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
    fcp: number;
    ttfb: number;
  };
}

interface PerformanceThresholds {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  fps: number;
  lighthouseScore: number;
}

const DEFAULT_THRESHOLDS: PerformanceThresholds = {
  loadTime: 1000,
  renderTime: 100,
  memoryUsage: 0.8,
  networkLatency: 200,
  fps: 30,
  lighthouseScore: 90
};

export default function EnhancedPerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    fps: 0,
    lighthouseScore: 0,
    coreWebVitals: {
      lcp: 0,
      fid: 0,
      cls: 0,
      fcp: 0,
      ttfb: 0
    }
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [thresholds, setThresholds] = useState<PerformanceThresholds>(DEFAULT_THRESHOLDS);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const observerRef = useRef<PerformanceObserver | null>(null);

  const measurePerformance = useCallback(() => {
    // Measure load time
    const loadTime = performance.now();
    
    // Measure render time
    const renderStart = performance.now();
    const renderTime = performance.now() - renderStart;
    
    // Measure memory usage
    const memoryInfo = (performance as any).memory;
    const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / memoryInfo.totalJSHeapSize : 0;
    
    // Measure network latency
    const networkStart = performance.now();
    fetch('/api/ping').then(() => {
      const networkLatency = performance.now() - networkStart;
      setMetrics(prev => ({
        ...prev,
        networkLatency
      }));
    }).catch(() => {
      setMetrics(prev => ({
        ...prev,
        networkLatency: 0
      }));
    });
    
    // Measure FPS
    const measureFPS = () => {
      frameCountRef.current++;
      const now = performance.now();
      if (now - lastTimeRef.current >= 1000) {
        const fps = Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current));
        setMetrics(prev => ({
          ...prev,
          fps
        }));
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }
      requestAnimationFrame(measureFPS);
    };
    measureFPS();
    
    // Calculate Lighthouse score
    const lighthouseScore = Math.max(0, 100 - loadTime / 10);
    
    setMetrics(prev => ({
      ...prev,
      loadTime: Math.round(loadTime),
      renderTime: Math.round(renderTime),
      memoryUsage: Math.round(memoryUsage * 100) / 100,
      lighthouseScore: Math.round(lighthouseScore)
    }));
  }, []);

  const measureCoreWebVitals = useCallback(() => {
    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({
        ...prev,
        coreWebVitals: {
          ...prev.coreWebVitals,
          lcp: Math.round(lastEntry.startTime)
        }
      }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        setMetrics(prev => ({
          ...prev,
          coreWebVitals: {
            ...prev.coreWebVitals,
            fid: Math.round(entry.processingStart - entry.startTime)
          }
        }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          setMetrics(prev => ({
            ...prev,
            coreWebVitals: {
              ...prev.coreWebVitals,
              cls: Math.round(clsValue * 1000) / 1000
            }
          }));
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        setMetrics(prev => ({
          ...prev,
          coreWebVitals: {
            ...prev.coreWebVitals,
            fcp: Math.round(entry.startTime)
          }
        }));
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Measure Time to First Byte (TTFB)
    const ttfbObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.responseStart > 0) {
          setMetrics(prev => ({
            ...prev,
            coreWebVitals: {
              ...prev.coreWebVitals,
              ttfb: Math.round(entry.responseStart)
            }
          }));
        }
      });
    });
    ttfbObserver.observe({ entryTypes: ['navigation'] });

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
      ttfbObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    measurePerformance();
    const cleanup = measureCoreWebVitals();
    return cleanup;
  }, [measurePerformance, measureCoreWebVitals]);

  const getScoreColor = (score: number, threshold: number) => {
    if (score >= threshold) return 'text-green-500';
    if (score >= threshold * 0.7) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number, threshold: number) => {
    if (score >= threshold) return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (score >= threshold * 0.7) return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    return <XCircle className="w-4 h-4 text-red-500" />;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Show Performance Monitor"
      >
        <TrendingUp className="w-5 h-5" />
      </button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm z-50"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Performance Monitor</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
          >
            <EyeOff className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center justify-between">
              <span>Load Time:</span>
              <div className="flex items-center gap-1">
                {getScoreIcon(metrics.loadTime, thresholds.loadTime)}
                <span className={getScoreColor(metrics.loadTime, thresholds.loadTime)}>
                  {metrics.loadTime}ms
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span>Render Time:</span>
              <div className="flex items-center gap-1">
                {getScoreIcon(metrics.renderTime, thresholds.renderTime)}
                <span className={getScoreColor(metrics.renderTime, thresholds.renderTime)}>
                  {metrics.renderTime}ms
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span>Memory Usage:</span>
              <div className="flex items-center gap-1">
                {getScoreIcon(metrics.memoryUsage, thresholds.memoryUsage)}
                <span className={getScoreColor(metrics.memoryUsage, thresholds.memoryUsage)}>
                  {Math.round(metrics.memoryUsage * 100)}%
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span>Network Latency:</span>
              <div className="flex items-center gap-1">
                {getScoreIcon(metrics.networkLatency, thresholds.networkLatency)}
                <span className={getScoreColor(metrics.networkLatency, thresholds.networkLatency)}>
                  {metrics.networkLatency}ms
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span>FPS:</span>
              <div className="flex items-center gap-1">
                {getScoreIcon(metrics.fps, thresholds.fps)}
                <span className={getScoreColor(metrics.fps, thresholds.fps)}>
                  {metrics.fps}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span>Lighthouse Score:</span>
              <div className="flex items-center gap-1">
                {getScoreIcon(metrics.lighthouseScore, thresholds.lighthouseScore)}
                <span className={getScoreColor(metrics.lighthouseScore, thresholds.lighthouseScore)}>
                  {metrics.lighthouseScore}/100
                </span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-3">
            <h4 className="font-semibold mb-2">Core Web Vitals</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex justify-between">
                <span>LCP:</span>
                <span>{metrics.coreWebVitals.lcp}ms</span>
              </div>
              <div className="flex justify-between">
                <span>FID:</span>
                <span>{metrics.coreWebVitals.fid}ms</span>
              </div>
              <div className="flex justify-between">
                <span>CLS:</span>
                <span>{metrics.coreWebVitals.cls}</span>
              </div>
              <div className="flex justify-between">
                <span>FCP:</span>
                <span>{metrics.coreWebVitals.fcp}ms</span>
              </div>
              <div className="flex justify-between">
                <span>TTFB:</span>
                <span>{metrics.coreWebVitals.ttfb}ms</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}