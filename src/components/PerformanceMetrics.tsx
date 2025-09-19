import React from 'react';

interface PerformanceMetricsProps {
  className?: string;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ 
  className = '' 
}) => {
  const [metrics, setMetrics] = React.useState({
    loadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    firstContentfulPaint: 0
  });

  React.useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perfData = {
        loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
        domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
        firstPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      };
      setMetrics(perfData);
    }
  }, []);

  return (
    <div className={`performance-metrics ${className}`}>
      <h3>Performance Metrics</h3>
      <div className="metrics-grid">
        <div className="metric">
          <span className="metric-label">Load Time:</span>
          <span className="metric-value">{metrics.loadTime}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">DOM Ready:</span>
          <span className="metric-value">{metrics.domContentLoaded}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">First Paint:</span>
          <span className="metric-value">{metrics.firstPaint.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span className="metric-label">First Contentful Paint:</span>
          <span className="metric-value">{metrics.firstContentfulPaint.toFixed(2)}ms</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;