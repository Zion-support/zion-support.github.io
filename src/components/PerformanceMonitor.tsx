import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const collectMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Get Web Vitals if available
      let largestContentfulPaint = 0;
      let firstInputDelay = 0;
      let cumulativeLayoutShift = 0;

      // Try to get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
      }

      // Try to get FID
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        firstInputDelay = (fidEntries[0] as any).processingStart - fidEntries[0].startTime;
      }

      // Try to get CLS
      const clsEntries = performance.getEntriesByType('layout-shift');
      if (clsEntries.length > 0) {
        cumulativeLayoutShift = clsEntries.reduce((sum, entry) => {
          return sum + ((entry as any).value || 0);
        }, 0);
      }

      // Get memory usage if available
      let memoryUsage: number | undefined;
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      }

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift,
        memoryUsage
      });
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
    }

    // Show/hide with keyboard shortcut (Ctrl+Shift+P)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', collectMetrics);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible || !metrics) {
    return null;
  }

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return '#10b981'; // green
    if (value <= thresholds.poor) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  const formatTime = (ms: number) => `${ms.toFixed(2)}ms`;
  const formatScore = (score: number) => score.toFixed(3);

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      padding: '1rem',
      borderRadius: '8px',
      fontFamily: 'monospace',
      fontSize: '12px',
      zIndex: 9999,
      minWidth: '300px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '0.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        paddingBottom: '0.5rem'
      }}>
        <h3 style={{ margin: 0, fontSize: '14px' }}>Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px',
            padding: '0'
          }}
        >
          ×
        </button>
      </div>
      
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Load Time:</span>
          <span style={{ color: getScoreColor(metrics.loadTime, { good: 1000, poor: 3000 }) }}>
            {formatTime(metrics.loadTime)}
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>FCP:</span>
          <span style={{ color: getScoreColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 }) }}>
            {formatTime(metrics.firstContentfulPaint)}
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>LCP:</span>
          <span style={{ color: getScoreColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }) }}>
            {formatTime(metrics.largestContentfulPaint)}
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>FID:</span>
          <span style={{ color: getScoreColor(metrics.firstInputDelay, { good: 100, poor: 300 }) }}>
            {formatTime(metrics.firstInputDelay)}
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>CLS:</span>
          <span style={{ color: getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }) }}>
            {formatScore(metrics.cumulativeLayoutShift)}
          </span>
        </div>
        
        {metrics.memoryUsage && (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Memory:</span>
            <span style={{ color: getScoreColor(metrics.memoryUsage, { good: 50, poor: 100 }) }}>
              {metrics.memoryUsage.toFixed(1)}MB
            </span>
          </div>
        )}
      </div>
      
      <div style={{ 
        marginTop: '0.5rem', 
        paddingTop: '0.5rem', 
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        fontSize: '10px',
        opacity: 0.7
      }}>
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;