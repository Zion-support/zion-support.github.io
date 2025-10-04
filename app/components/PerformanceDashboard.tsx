import React, { useState, useEffect } from 'react';
import { performanceOptimizer } from '../../utils/performanceOptimizer';
import { getErrorMetrics, isErrorRateTooHigh } from '../../utils/errorHandling';

interface DashboardData {
  performance: ReturnType<typeof performanceOptimizer.getPerformanceSummary>;
  errors: ReturnType<typeof getErrorMetrics>;
  isHealthy: boolean;
  timestamp: Date;
}

const PerformanceDashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    const updateData = () => {
      const performance = performanceOptimizer.getPerformanceSummary();
      const errors = getErrorMetrics();
      const isHealthy = !isErrorRateTooHigh(5) && performance.performanceGrade.startsWith('A');
      
      setData({
        performance,
        errors,
        isHealthy,
        timestamp: new Date()
      });
    };

    updateData();

    if (autoRefresh) {
      const interval = setInterval(updateData, 5000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  if (!data) {
    return <div>Loading performance data...</div>;
  }

  const { performance, errors, isHealthy, timestamp } = data;

  return (
    <div className="performance-dashboard">
      <div className="dashboard-header">
        <h2>Performance Dashboard</h2>
        <div className="dashboard-controls">
          <label>
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
            />
            Auto Refresh
          </label>
          <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? 'Hide' : 'Show'} Details
          </button>
        </div>
      </div>

      <div className="dashboard-summary">
        <div className={`status-indicator ${isHealthy ? 'healthy' : 'unhealthy'}`}>
          {isHealthy ? '✓ Healthy' : '⚠ Issues Detected'}
        </div>
        <div className="performance-grade">
          Grade: {performance.performanceGrade}
        </div>
        <div className="last-updated">
          Last updated: {timestamp.toLocaleTimeString()}
        </div>
      </div>

      {isVisible && (
        <div className="dashboard-details">
          <div className="performance-metrics">
            <h3>Performance Metrics</h3>
            <div className="metrics-grid">
              <div className="metric">
                <span className="metric-label">Load Time:</span>
                <span className="metric-value">{performance.loadTime}ms</span>
              </div>
              <div className="metric">
                <span className="metric-label">First Paint:</span>
                <span className="metric-value">{performance.firstPaint}ms</span>
              </div>
              <div className="metric">
                <span className="metric-label">Largest Contentful Paint:</span>
                <span className="metric-value">{performance.lcp}ms</span>
              </div>
              <div className="metric">
                <span className="metric-label">Cumulative Layout Shift:</span>
                <span className="metric-value">{performance.cls}</span>
              </div>
            </div>
          </div>

          <div className="error-metrics">
            <h3>Error Metrics</h3>
            <div className="metrics-grid">
              <div className="metric">
                <span className="metric-label">Total Errors:</span>
                <span className="metric-value">{errors.totalErrors}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Error Rate:</span>
                <span className="metric-value">{(errors.errorRate * 100).toFixed(2)}%</span>
              </div>
              <div className="metric">
                <span className="metric-label">Last Error:</span>
                <span className="metric-value">
                  {errors.lastError ? new Date(errors.lastError).toLocaleString() : 'None'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceDashboard;