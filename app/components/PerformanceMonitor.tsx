'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  tbt: number | null;
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  enableWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableUserTiming?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  enableWebVitals = true,
  enableResourceTiming = true,
  enableUserTiming = true,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    tbt: null
  });

  const [isVisible, setIsVisible] = useState(false);

  // Web Vitals measurement
  const measureWebVitals = useCallback(() => {
    if (!enableWebVitals || typeof window === 'undefined') return;

    // First Contentful Paint (FCP)
    const measureFCP = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            observer.disconnect();
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    };

    // Largest Contentful Paint (LCP)
    const measureLCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    };

    // First Input Delay (FID)
    const measureFID = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    };

    // Cumulative Layout Shift (CLS)
    const measureCLS = () => {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    };

    // Time to First Byte (TTFB)
    const measureTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({ ...prev, ttfb: navigation.responseStart - navigation.requestStart }));
      }
    };

    // First Meaningful Paint (FMP) - approximation
    const measureFMP = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-meaningful-paint') {
            setMetrics(prev => ({ ...prev, fmp: entry.startTime }));
            observer.disconnect();
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    };

    // Total Blocking Time (TBT) - approximation
    const measureTBT = () => {
      const observer = new PerformanceObserver((list) => {
        let totalBlockingTime = 0;
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            totalBlockingTime += entry.duration - 50;
          }
        }
        setMetrics(prev => ({ ...prev, tbt: totalBlockingTime }));
      });
      observer.observe({ entryTypes: ['longtask'] });
    };

    // Initialize measurements
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();
    measureFMP();
    measureTBT();
  }, [enableWebVitals]);

  // Resource timing analysis
  const analyzeResourceTiming = useCallback(() => {
    if (!enableResourceTiming || typeof window === 'undefined') return;

    const resources = performance.getEntriesByType('resource');
    const resourceMetrics = {
      totalResources: resources.length,
      totalSize: 0,
      slowResources: 0,
      cachedResources: 0,
      failedResources: 0
    };

    resources.forEach((resource: any) => {
      resourceMetrics.totalSize += resource.transferSize || 0;
      if (resource.duration > 1000) resourceMetrics.slowResources++;
      if (resource.transferSize === 0) resourceMetrics.cachedResources++;
      if (resource.responseEnd === 0) resourceMetrics.failedResources++;
    });

    // Log resource analysis
    console.log('Resource Analysis:', resourceMetrics);
  }, [enableResourceTiming]);

  // User timing measurements
  const measureUserTiming = useCallback(() => {
    if (!enableUserTiming || typeof window === 'undefined') return;

    // Mark critical points
    performance.mark('performance-monitor-start');
    
    // Measure component render time
    const startTime = performance.now();
    
    // Simulate some work
    setTimeout(() => {
      performance.mark('performance-monitor-end');
      performance.measure('performance-monitor-duration', 'performance-monitor-start', 'performance-monitor-end');
      
      const measures = performance.getEntriesByType('measure');
      console.log('User Timing Measures:', measures);
    }, 100);
  }, [enableUserTiming]);

  // Real-time monitoring
  const startRealTimeMonitoring = useCallback(() => {
    if (!enableRealTimeMonitoring) return;

    const interval = setInterval(() => {
      // Monitor memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory Usage:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
        });
      }

      // Monitor frame rate
      let frameCount = 0;
      let lastTime = performance.now();
      
      const countFrames = () => {
        frameCount++;
        const currentTime = performance.now();
        if (currentTime - lastTime >= 1000) {
          console.log('FPS:', frameCount);
          frameCount = 0;
          lastTime = currentTime;
        }
        requestAnimationFrame(countFrames);
      };
      
      countFrames();
    }, 5000);

    return () => clearInterval(interval);
  }, [enableRealTimeMonitoring]);

  // Performance optimization suggestions
  const getOptimizationSuggestions = useCallback(() => {
    const suggestions: string[] = [];
    
    if (metrics.fcp && metrics.fcp > 2000) {
      suggestions.push('First Contentful Paint is slow. Consider optimizing critical CSS and reducing render-blocking resources.');
    }
    
    if (metrics.lcp && metrics.lcp > 4000) {
      suggestions.push('Largest Contentful Paint is slow. Optimize images and lazy load non-critical content.');
    }
    
    if (metrics.fid && metrics.fid > 100) {
      suggestions.push('First Input Delay is high. Consider code splitting and reducing JavaScript execution time.');
    }
    
    if (metrics.cls && metrics.cls > 0.1) {
      suggestions.push('Cumulative Layout Shift is high. Ensure images and ads have defined dimensions.');
    }
    
    if (metrics.ttfb && metrics.ttfb > 600) {
      suggestions.push('Time to First Byte is slow. Consider server-side optimizations and CDN usage.');
    }

    return suggestions;
  }, [metrics]);

  useEffect(() => {
    measureWebVitals();
    analyzeResourceTiming();
    measureUserTiming();
    
    const cleanup = startRealTimeMonitoring();
    
    return cleanup;
  }, [measureWebVitals, analyzeResourceTiming, measureUserTiming, startRealTimeMonitoring]);

  // Update parent component with metrics
  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Performance score calculation
  const calculatePerformanceScore = useCallback(() => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 2000) score -= 20;
    if (metrics.lcp && metrics.lcp > 4000) score -= 25;
    if (metrics.fid && metrics.fid > 100) score -= 15;
    if (metrics.cls && metrics.cls > 0.1) score -= 15;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 25;
    
    return Math.max(0, score);
  }, [metrics]);

  const performanceScore = calculatePerformanceScore();
  const suggestions = getOptimizationSuggestions();

  return (
    <div className="performance-monitor">
      {/* Performance Score Display */}
      <div className="performance-score">
        <div className="score-circle">
          <span className="score-number">{performanceScore}</span>
          <span className="score-label">Performance Score</span>
        </div>
      </div>

      {/* Metrics Display */}
      <div className="metrics-grid">
        <div className="metric-item">
          <span className="metric-label">FCP</span>
          <span className="metric-value">
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">LCP</span>
          <span className="metric-value">
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">FID</span>
          <span className="metric-value">
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">CLS</span>
          <span className="metric-value">
            {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">TTFB</span>
          <span className="metric-value">
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Measuring...'}
          </span>
        </div>
      </div>

      {/* Optimization Suggestions */}
      {suggestions.length > 0 && (
        <div className="optimization-suggestions">
          <h3>Optimization Suggestions:</h3>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Toggle Visibility Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="toggle-button"
        aria-label="Toggle performance monitor"
      >
        {isVisible ? 'Hide' : 'Show'} Performance
      </button>

      <style jsx>{`
        .performance-monitor {
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 16px;
          border-radius: 8px;
          font-family: monospace;
          font-size: 12px;
          z-index: 1000;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 255, 255, 0.3);
          display: ${isVisible ? 'block' : 'none'};
          max-width: 300px;
        }

        .performance-score {
          text-align: center;
          margin-bottom: 16px;
        }

        .score-circle {
          display: inline-block;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .score-number {
          font-size: 18px;
          font-weight: bold;
        }

        .score-label {
          font-size: 8px;
          text-align: center;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 16px;
        }

        .metric-item {
          display: flex;
          justify-content: space-between;
          padding: 4px 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .metric-label {
          font-weight: bold;
          color: #00ffff;
        }

        .metric-value {
          color: #ffffff;
        }

        .optimization-suggestions {
          margin-top: 16px;
          padding: 8px;
          background: rgba(255, 0, 0, 0.1);
          border-radius: 4px;
          border-left: 3px solid #ff0000;
        }

        .optimization-suggestions h3 {
          margin: 0 0 8px 0;
          color: #ff0000;
          font-size: 12px;
        }

        .optimization-suggestions ul {
          margin: 0;
          padding-left: 16px;
        }

        .optimization-suggestions li {
          margin-bottom: 4px;
          font-size: 10px;
          line-height: 1.4;
        }

        .toggle-button {
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          font-weight: bold;
          z-index: 1001;
        }

        .toggle-button:hover {
          background: linear-gradient(45deg, #ff00ff, #00ffff);
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default PerformanceMonitor;