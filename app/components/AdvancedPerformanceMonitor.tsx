import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  INP: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
  reportEndpoint?: string;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true,
  reportEndpoint = '/api/performance'
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    INP: null,
    FCP: null,
    LCP: null,
    TTFB: null
  });

  const [isVisible, setIsVisible] = useState(false);

  // Report metrics to analytics service
  const reportMetrics = async (metric: any) => {
    if (!enableReporting) return;

    try {
      const payload = {
        name: metric.name,
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        connection: (navigator as any).connection?.effectiveType || 'unknown'
      };

      // Send to analytics service
      if (typeof fetch !== 'undefined') {
        await fetch(reportEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
      }

      // Also send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.value),
          non_interaction: true,
        });
      }
    } catch (error) {
      console.warn('Failed to report performance metrics:', error);
    }
  };

  // Update metrics state
  const updateMetrics = (metric: any) => {
    const newMetrics = { ...metrics };
    
    switch (metric.name) {
      case 'CLS':
        newMetrics.CLS = metric.value;
        break;
      case 'INP':
        newMetrics.INP = metric.value;
        break;
      case 'FCP':
        newMetrics.FCP = metric.value;
        break;
      case 'LCP':
        newMetrics.LCP = metric.value;
        break;
      case 'TTFB':
        newMetrics.TTFB = metric.value;
        break;
    }

    setMetrics(newMetrics);
    onMetricsUpdate?.(newMetrics);
  };

  // Get performance score based on metrics
  const getPerformanceScore = (): number => {
    let score = 100;
    
    // LCP scoring (0-100)
    if (metrics.LCP !== null) {
      if (metrics.LCP > 4000) score -= 30;
      else if (metrics.LCP > 2500) score -= 20;
      else if (metrics.LCP > 1000) score -= 10;
    }
    
    // INP scoring (0-100)
    if (metrics.INP !== null) {
      if (metrics.INP > 500) score -= 25;
      else if (metrics.INP > 200) score -= 15;
      else if (metrics.INP > 100) score -= 5;
    }
    
    // CLS scoring (0-100)
    if (metrics.CLS !== null) {
      if (metrics.CLS > 0.25) score -= 20;
      else if (metrics.CLS > 0.1) score -= 10;
      else if (metrics.CLS > 0.05) score -= 5;
    }
    
    return Math.max(0, score);
  };

  // Get performance grade
  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  // Get performance color
  const getPerformanceColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    if (score >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  useEffect(() => {
    // Measure Core Web Vitals
    onCLS((metric) => {
      updateMetrics(metric);
      reportMetrics(metric);
    });

    onINP((metric) => {
      updateMetrics(metric);
      reportMetrics(metric);
    });

    onFCP((metric) => {
      updateMetrics(metric);
      reportMetrics(metric);
    });

    onLCP((metric) => {
      updateMetrics(metric);
      reportMetrics(metric);
    });

    onTTFB((metric) => {
      updateMetrics(metric);
      reportMetrics(metric);
    });

    // Show performance monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    // Keyboard shortcut to toggle performance monitor
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const performanceScore = getPerformanceScore();
  const performanceGrade = getPerformanceGrade(performanceScore);
  const performanceColor = getPerformanceColor(performanceScore);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-cyan-500/20 z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        {/* Performance Score */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-300">Overall Score</span>
          <div className="flex items-center space-x-2">
            <span className={`text-lg font-bold ${performanceColor}`}>
              {performanceScore}
            </span>
            <span className={`text-sm font-semibold ${performanceColor}`}>
              {performanceGrade}
            </span>
          </div>
        </div>

        {/* Individual Metrics */}
        <div className="space-y-1 text-xs">
          {metrics.LCP !== null && (
            <div className="flex justify-between">
              <span className="text-gray-400">LCP</span>
              <span className={metrics.LCP > 2500 ? 'text-red-400' : metrics.LCP > 1000 ? 'text-yellow-400' : 'text-green-400'}>
                {Math.round(metrics.LCP)}ms
              </span>
            </div>
          )}
          
          {metrics.INP !== null && (
            <div className="flex justify-between">
              <span className="text-gray-400">INP</span>
              <span className={metrics.INP > 200 ? 'text-red-400' : metrics.INP > 100 ? 'text-yellow-400' : 'text-green-400'}>
                {Math.round(metrics.INP)}ms
              </span>
            </div>
          )}
          
          {metrics.CLS !== null && (
            <div className="flex justify-between">
              <span className="text-gray-400">CLS</span>
              <span className={metrics.CLS > 0.1 ? 'text-red-400' : metrics.CLS > 0.05 ? 'text-yellow-400' : 'text-green-400'}>
                {metrics.CLS.toFixed(3)}
              </span>
            </div>
          )}
          
          {metrics.FCP !== null && (
            <div className="flex justify-between">
              <span className="text-gray-400">FCP</span>
              <span className={metrics.FCP > 1000 ? 'text-red-400' : metrics.FCP > 500 ? 'text-yellow-400' : 'text-green-400'}>
                {Math.round(metrics.FCP)}ms
              </span>
            </div>
          )}
          
          {metrics.TTFB !== null && (
            <div className="flex justify-between">
              <span className="text-gray-400">TTFB</span>
              <span className={metrics.TTFB > 600 ? 'text-red-400' : metrics.TTFB > 200 ? 'text-yellow-400' : 'text-green-400'}>
                {Math.round(metrics.TTFB)}ms
              </span>
            </div>
          )}
        </div>

        {/* Performance Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              performanceScore >= 90 ? 'bg-green-500' : 
              performanceScore >= 80 ? 'bg-yellow-500' : 
              performanceScore >= 70 ? 'bg-orange-500' : 'bg-red-500'
            }`}
            style={{ width: `${performanceScore}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;