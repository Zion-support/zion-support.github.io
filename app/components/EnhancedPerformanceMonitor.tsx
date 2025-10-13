'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const EnhancedPerformanceMonitorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];
import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  timestamp: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    timestamp: Date.now()
  });

  const [isVisible, setIsVisible] = useState(false);

  const updateMetric = useCallback((name: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => {
      const updated = { ...prev, [name]: value, timestamp: Date.now() };
      if (onMetricsUpdate) {
        onMetricsUpdate(updated);
      }
      return updated;
    });
  }, [onMetricsUpdate]);

  const reportMetric = useCallback((name: string, value: number) => {
    if (!enableReporting) return;

    // Report to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        event_label: name,
        non_interaction: true,
      });
    }

    // Report to custom analytics endpoint
    if (typeof window !== 'undefined' && process.env['NODE_ENV'] === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: name,
          value: value,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }
  }, [enableReporting]);
import React, { useState, useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
  memoryUsage?: number;
  interactionToNextPaint?: number;
  totalBlockingTime?: number;
  speedIndex?: number;
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  enableWebVitals?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  reportInterval?: number;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  enableWebVitals = true,
  enableMemoryMonitoring = true,
  enableNetworkMonitoring = true,
  reportInterval = 5000,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  const getMetricColor = useCallback((value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  }, []);

  const formatMetric = useCallback((value: number | undefined, suffix = 'ms') => {
    if (value === undefined || value === null) return 'N/A';
    return `${value.toFixed(0)}${suffix}`;
  }, []);

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint) {
      if (metrics.largestContentfulPaint > 4000) score -= 30;
      else if (metrics.largestContentfulPaint > 2500) score -= 15;
    }
    
    // FID scoring (0-100)
    if (metrics.firstInputDelay) {
      if (metrics.firstInputDelay > 300) score -= 25;
      else if (metrics.firstInputDelay > 100) score -= 10;
    }
    
    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift !== undefined) {
      if (metrics.cumulativeLayoutShift > 0.25) score -= 20;
      else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    }
    
    // TTFB scoring (0-100)
    if (metrics.timeToFirstByte) {
      if (metrics.timeToFirstByte > 1800) score -= 15;
      else if (metrics.timeToFirstByte > 800) score -= 5;
    }
    
    return Math.max(0, score);
  }, []);

  const updateMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {};

    // Load time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      if (loadTime > 0) newMetrics.loadTime = loadTime;
    }

    // Memory usage
    if (enableMemoryMonitoring && 'memory' in performance) {
      const memory = (performance as any).memory;
      if (memory) {
        newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      }
    }

    // Network information
    if (enableNetworkMonitoring && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        console.log('Network type:', connection.effectiveType);
        console.log('Downlink speed:', connection.downlink, 'Mbps');
      }
    }

    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      const score = calculatePerformanceScore(updated);
      setPerformanceScore(score);
      
      if (onMetricsUpdate) {
        onMetricsUpdate(updated);
      }
      
      return updated;
    });
  }, [enableMemoryMonitoring, enableNetworkMonitoring, calculatePerformanceScore, onMetricsUpdate]);

  // Web Vitals monitoring
  useEffect(() => {
    if (!enableWebVitals) return;

    const handleCLS = (metric: any) => {
      setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }));
    };

    const handleINP = (metric: any) => {
      setMetrics(prev => ({ ...prev, interactionToNextPaint: metric.value }));
    };

    const handleFCP = (metric: any) => {
      setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }));
    };

    const handleLCP = (metric: any) => {
      setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }));
    };

    const handleTTFB = (metric: any) => {
      setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value }));
    };

    onCLS(handleCLS);
    onINP(handleINP);
    onFCP(handleFCP);
    onLCP(handleLCP);
    onTTFB(handleTTFB);
  }, [enableWebVitals]);

  // Real-time monitoring
  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    updateMetrics();
    
    const interval = setInterval(updateMetrics, reportInterval);
    return () => clearInterval(interval);
  }, [enableRealTimeMonitoring, reportInterval, updateMetrics]);

  // Keyboard shortcut to toggle visibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/95 backdrop-blur-xl border border-cyan-500/20 rounded-lg shadow-2xl p-4 min-w-80 z-50 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-cyan-400">Performance Monitor</h3>
        <div className="flex items-center space-x-2">
          <div className={`text-sm font-bold ${getScoreColor(performanceScore)}`}>
            {performanceScore}/100
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <div className={`w-3 h-3 rounded-full ${
          performanceScore >= 90 ? 'bg-green-500' : 
          performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
        }`} />
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>Performance Score:</span>
          <span className="font-mono">{performanceScore}/100</span>
        </div>
        
        {metrics.lcp !== null && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className="font-mono">{Math.round(metrics.lcp)}ms</span>
          </div>
        )}
        
        {metrics.inp !== null && (
          <div className="flex justify-between">
            <span>INP:</span>
            <span className="font-mono">{Math.round(metrics.inp)}ms</span>
          </div>
        )}
        
        {metrics.cls !== null && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className="font-mono">{metrics.cls.toFixed(3)}</span>
          </div>
        )}
        
        {metrics.fcp !== null && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className="font-mono">{Math.round(metrics.fcp)}ms</span>
          </div>
        )}
        
        {metrics.ttfb !== null && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className="font-mono">{Math.round(metrics.ttfb)}ms</span>
          </div>
        )}
      </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-300">Overall Score</span>
          <span className={`text-sm font-semibold ${getScoreColor(performanceScore)}`}>
            {getScoreLabel(performanceScore)}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              performanceScore >= 90 ? 'bg-green-500' : 
              performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${performanceScore}%` }}
          />
        </div>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={getMetricColor(metrics.loadTime || 0, { good: 2000, poor: 4000 })}>
            {formatMetric(metrics.loadTime)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={getMetricColor(metrics.firstContentfulPaint || 0, { good: 1800, poor: 3000 })}>
            {formatMetric(metrics.firstContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={getMetricColor(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}>
            {formatMetric(metrics.largestContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FID:</span>
          <span className={getMetricColor(metrics.firstInputDelay || 0, { good: 100, poor: 300 })}>
            {formatMetric(metrics.firstInputDelay)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={getMetricColor(metrics.cumulativeLayoutShift || 0, { good: 0.1, poor: 0.25 })}>
            {formatMetric(metrics.cumulativeLayoutShift, '')}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={getMetricColor(metrics.timeToFirstByte || 0, { good: 800, poor: 1800 })}>
            {formatMetric(metrics.timeToFirstByte)}
          </span>
        </div>
        
        {metrics.memoryUsage !== undefined && (
          <div className="flex justify-between">
            <span className="text-gray-300">Memory:</span>
            <span className={getMetricColor(metrics.memoryUsage, { good: 50, poor: 100 })}>
              {formatMetric(metrics.memoryUsage, 'MB')}
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-3 border-t border-white/20 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitorPage;
