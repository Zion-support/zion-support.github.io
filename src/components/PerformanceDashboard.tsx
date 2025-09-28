import React, { useState, useEffect } from 'react';
import AdvancedPerformanceMonitor from '../utils/advancedPerformanceMonitor';

interface PerformanceDashboardProps {
  isVisible?: boolean;
  onClose?: () => void;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ 
  isVisible = false, 
  onClose 
}) => {
  const [metrics, setMetrics] = useState<any[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState<any>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    const monitor = AdvancedPerformanceMonitor.getInstance();
    
    // Get initial metrics
    setMetrics(monitor.getMetrics());
    setCurrentMetrics(monitor.getLatestMetrics());

    // Start monitoring
    monitor.startMonitoring();
    setIsMonitoring(true);

    // Update metrics periodically
    const interval = setInterval(() => {
      setMetrics(monitor.getMetrics());
      setCurrentMetrics(monitor.getLatestMetrics());
    }, 5000);

    return () => {
      clearInterval(interval);
      monitor.stopMonitoring();
      setIsMonitoring(false);
    };
  }, []);

  const formatMetricValue = (value: any): string => {
    if (typeof value === 'number') {
      if (value < 1) {
        return value.toFixed(3);
      } else if (value < 1000) {
        return `${value.toFixed(1)}ms`;
      } else {
        return `${(value / 1000).toFixed(1)}s`;
      }
    }
    return String(value);
  };

  const getMetricColor = (key: string, value: number): string => {
    const thresholds = {
      pageLoadTime: 3000,
      firstContentfulPaint: 1800,
      largestContentfulPaint: 2500,
      cumulativeLayoutShift: 0.1,
      firstInputDelay: 100,
      totalBlockingTime: 300,
    };

    const threshold = thresholds[key as keyof typeof thresholds];
    if (threshold && value > threshold) {
      return '#e53e3e'; // Red for poor performance
    } else if (threshold && value > threshold * 0.8) {
      return '#d69e2e'; // Yellow for warning
    }
    return '#38a169'; // Green for good performance
  };

  if (!isVisible) return null;

  return (
    <div className="performance-dashboard">
      <div className="dashboard-header">
        <h2>Performance Dashboard</h2>
        <div className="dashboard-controls">
          <div className={`monitoring-status ${isMonitoring ? 'active' : 'inactive'}`}>
            {isMonitoring ? '🟢 Monitoring' : '🔴 Stopped'}
          </div>
          {onClose && (
            <button onClick={onClose} className="close-button">
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="dashboard-content">
        {/* Current Metrics */}
        {currentMetrics && (
          <div className="metrics-section">
            <h3>Current Metrics</h3>
            <div className="metrics-grid">
              {Object.entries(currentMetrics).map(([key, value]) => {
                if (key === 'timestamp' || key === 'customMetrics') return null;
                
                const numericValue = typeof value === 'number' ? value : 0;
                const color = getMetricColor(key, numericValue);
                
                return (
                  <div key={key} className="metric-card">
                    <div className="metric-label">{key}</div>
                    <div 
                      className="metric-value"
                      style={{ color }}
                    >
                      {formatMetricValue(value)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Custom Metrics */}
        {currentMetrics?.customMetrics && Object.keys(currentMetrics.customMetrics).length > 0 && (
          <div className="metrics-section">
            <h3>Custom Metrics</h3>
            <div className="metrics-grid">
              {Object.entries(currentMetrics.customMetrics).map(([key, value]) => (
                <div key={key} className="metric-card">
                  <div className="metric-label">{key}</div>
                  <div className="metric-value">
                    {formatMetricValue(value)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Memory Usage */}
        {currentMetrics?.memoryUsage && (
          <div className="metrics-section">
            <h3>Memory Usage</h3>
            <div className="memory-info">
              <div className="memory-item">
                <span className="memory-label">Used:</span>
                <span className="memory-value">
                  {(currentMetrics.memoryUsage.usedJSHeapSize / 1024 / 1024).toFixed(1)} MB
                </span>
              </div>
              <div className="memory-item">
                <span className="memory-label">Total:</span>
                <span className="memory-value">
                  {(currentMetrics.memoryUsage.totalJSHeapSize / 1024 / 1024).toFixed(1)} MB
                </span>
              </div>
              <div className="memory-item">
                <span className="memory-label">Limit:</span>
                <span className="memory-value">
                  {(currentMetrics.memoryUsage.jsHeapSizeLimit / 1024 / 1024).toFixed(1)} MB
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Network Information */}
        {currentMetrics?.networkInfo && (
          <div className="metrics-section">
            <h3>Network Information</h3>
            <div className="network-info">
              <div className="network-item">
                <span className="network-label">Connection:</span>
                <span className="network-value">
                  {currentMetrics.networkInfo.effectiveType}
                </span>
              </div>
              <div className="network-item">
                <span className="network-label">Downlink:</span>
                <span className="network-value">
                  {currentMetrics.networkInfo.downlink} Mbps
                </span>
              </div>
              <div className="network-item">
                <span className="network-label">RTT:</span>
                <span className="network-value">
                  {currentMetrics.networkInfo.rtt} ms
                </span>
              </div>
              {currentMetrics.networkInfo.saveData && (
                <div className="network-item">
                  <span className="network-label">Data Saver:</span>
                  <span className="network-value">Enabled</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Metrics History */}
        {metrics.length > 1 && (
          <div className="metrics-section">
            <h3>Recent History ({metrics.length} entries)</h3>
            <div className="history-chart">
              {metrics.slice(-10).map((metric) => (
                <div key={metric.timestamp} className="history-item">
                  <div className="history-time">
                    {new Date(metric.timestamp).toLocaleTimeString()}
                  </div>
                  <div className="history-metrics">
                    {metric.pageLoadTime > 0 && (
                      <span 
                        className="history-metric"
                        style={{ color: getMetricColor('pageLoadTime', metric.pageLoadTime) }}
                      >
                        Load: {formatMetricValue(metric.pageLoadTime)}
                      </span>
                    )}
                    {metric.firstContentfulPaint > 0 && (
                      <span 
                        className="history-metric"
                        style={{ color: getMetricColor('firstContentfulPaint', metric.firstContentfulPaint) }}
                      >
                        FCP: {formatMetricValue(metric.firstContentfulPaint)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .performance-dashboard {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 400px;
          max-height: 80vh;
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .dashboard-header h2 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .dashboard-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .monitoring-status {
          font-size: 0.8rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.2);
        }

        .monitoring-status.active {
          background: rgba(56, 161, 105, 0.8);
        }

        .close-button {
          background: none;
          border: none;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .dashboard-content {
          max-height: calc(80vh - 80px);
          overflow-y: auto;
          padding: 1rem;
        }

        .metrics-section {
          margin-bottom: 1.5rem;
        }

        .metrics-section h3 {
          margin: 0 0 1rem 0;
          font-size: 1rem;
          font-weight: 600;
          color: #2d3748;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0.5rem;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.75rem;
        }

        .metric-card {
          background: #f7fafc;
          border-radius: 8px;
          padding: 0.75rem;
          text-align: center;
        }

        .metric-label {
          font-size: 0.8rem;
          color: #4a5568;
          margin-bottom: 0.25rem;
          text-transform: capitalize;
        }

        .metric-value {
          font-size: 1rem;
          font-weight: 600;
          color: #2d3748;
        }

        .memory-info, .network-info {
          background: #f7fafc;
          border-radius: 8px;
          padding: 1rem;
        }

        .memory-item, .network-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .memory-item:last-child, .network-item:last-child {
          margin-bottom: 0;
        }

        .memory-label, .network-label {
          font-size: 0.9rem;
          color: #4a5568;
        }

        .memory-value, .network-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: #2d3748;
        }

        .history-chart {
          background: #f7fafc;
          border-radius: 8px;
          padding: 1rem;
          max-height: 200px;
          overflow-y: auto;
        }

        .history-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .history-item:last-child {
          border-bottom: none;
        }

        .history-time {
          font-size: 0.8rem;
          color: #4a5568;
          min-width: 80px;
        }

        .history-metrics {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .history-metric {
          font-size: 0.8rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.8);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }

        @media (max-width: 640px) {
          .performance-dashboard {
            top: 10px;
            right: 10px;
            left: 10px;
            width: auto;
            max-height: 90vh;
          }

          .metrics-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default PerformanceDashboard;