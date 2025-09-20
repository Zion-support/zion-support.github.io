import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MonitoringData {
  uptime: number;
  responseTime: number;
  errorRate: number;
  userCount: number;
  pageViews: number;
  conversionRate: number;
  bounceRate: number;
  averageSessionDuration: number;
}

interface Alert {
  id: string;
  type: 'error' | 'warning' | 'info' | 'success';
  message: string;
  timestamp: Date;
  resolved: boolean;
}

interface MonitoringDashboardProps {
  enableRealTime?: boolean;
  showAlerts?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
  className?: string;
}

const MonitoringDashboard: React.FC<MonitoringDashboardProps> = ({
  enableRealTime = true,
  showAlerts = true,
  autoRefresh = true,
  refreshInterval = 30000, // 30 seconds
  className = ''
}) => {
  const [data, setData] = useState<MonitoringData>({
    uptime: 99.9,
    responseTime: 150,
    errorRate: 0.1,
    userCount: 0,
    pageViews: 0,
    conversionRate: 0,
    bounceRate: 0,
    averageSessionDuration: 0
  });

  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Simulate real-time data updates
  const updateData = useCallback(() => {
    if (!enableRealTime) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setData(prev => ({
        uptime: Math.max(95, Math.min(100, prev.uptime + (Math.random() - 0.5) * 0.1)),
        responseTime: Math.max(50, Math.min(500, prev.responseTime + (Math.random() - 0.5) * 20)),
        errorRate: Math.max(0, Math.min(5, prev.errorRate + (Math.random() - 0.5) * 0.1)),
        userCount: prev.userCount + Math.floor(Math.random() * 10),
        pageViews: prev.pageViews + Math.floor(Math.random() * 50),
        conversionRate: Math.max(0, Math.min(100, prev.conversionRate + (Math.random() - 0.5) * 2)),
        bounceRate: Math.max(0, Math.min(100, prev.bounceRate + (Math.random() - 0.5) * 2)),
        averageSessionDuration: Math.max(0, prev.averageSessionDuration + (Math.random() - 0.5) * 30)
      }));

      setLastUpdated(new Date());
      setIsLoading(false);
    }, 1000);
  }, [enableRealTime]);

  // Auto-refresh data
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(updateData, refreshInterval);
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, updateData]);

  // Initial data load
  useEffect(() => {
    updateData();
  }, [updateData]);

  // Generate alerts based on data
  useEffect(() => {
    const newAlerts: Alert[] = [];

    if (data.uptime < 99) {
      newAlerts.push({
        id: `uptime-${Date.now()}`,
        type: 'warning',
        message: `Uptime dropped to ${data.uptime.toFixed(1)}%`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (data.responseTime > 300) {
      newAlerts.push({
        id: `response-${Date.now()}`,
        type: 'error',
        message: `Response time is high: ${data.responseTime.toFixed(0)}ms`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (data.errorRate > 1) {
      newAlerts.push({
        id: `error-${Date.now()}`,
        type: 'error',
        message: `Error rate is high: ${data.errorRate.toFixed(1)}%`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (data.bounceRate > 70) {
      newAlerts.push({
        id: `bounce-${Date.now()}`,
        type: 'warning',
        message: `High bounce rate: ${data.bounceRate.toFixed(1)}%`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...prev, ...newAlerts].slice(-10)); // Keep only last 10 alerts
    }
  }, [data]);

  // Resolve alert
  const resolveAlert = useCallback((alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, resolved: true } : alert
    ));
  }, []);

  // Clear resolved alerts
  const clearResolvedAlerts = useCallback(() => {
    setAlerts(prev => prev.filter(alert => !alert.resolved));
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getStatusColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value >= thresholds.good) return 'text-green-600';
    if (value >= thresholds.warning) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'error': return '🔴';
      case 'warning': return '🟡';
      case 'info': return '🔵';
      case 'success': return '🟢';
      default: return 'ℹ️';
    }
  };

  return (
    <div className={`monitoring-dashboard ${className}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            System Monitoring
          </h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={updateData}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? 'Refreshing...' : 'Refresh'}
            </button>
            <span className="text-sm text-gray-500">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Uptime</p>
                <p className={`text-2xl font-bold ${getStatusColor(data.uptime, { good: 99.5, warning: 99 })}`}>
                  {data.uptime.toFixed(1)}%
                </p>
              </div>
              <div className="text-2xl">📊</div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Response Time</p>
                <p className={`text-2xl font-bold ${getStatusColor(data.responseTime, { good: 200, warning: 300 })}`}>
                  {data.responseTime.toFixed(0)}ms
                </p>
              </div>
              <div className="text-2xl">⚡</div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Error Rate</p>
                <p className={`text-2xl font-bold ${getStatusColor(data.errorRate, { good: 0.5, warning: 1 })}`}>
                  {data.errorRate.toFixed(1)}%
                </p>
              </div>
              <div className="text-2xl">⚠️</div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Active Users</p>
                <p className="text-2xl font-bold text-blue-600">
                  {data.userCount.toLocaleString()}
                </p>
              </div>
              <div className="text-2xl">👥</div>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Page Views</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {data.pageViews.toLocaleString()}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Conversion Rate</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {data.conversionRate.toFixed(1)}%
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Avg Session Duration</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {formatTime(data.averageSessionDuration)}
            </p>
          </div>
        </div>

        {/* Alerts */}
        {showAlerts && alerts.length > 0 && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Alerts
              </h3>
              <button
                onClick={clearResolvedAlerts}
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Clear Resolved
              </button>
            </div>
            
            <div className="space-y-2">
              <AnimatePresence>
                {alerts.map((alert) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-3 rounded-lg border-l-4 ${
                      alert.resolved 
                        ? 'bg-gray-100 dark:bg-gray-700 border-gray-300' 
                        : alert.type === 'error'
                        ? 'bg-red-50 dark:bg-red-900 border-red-500'
                        : alert.type === 'warning'
                        ? 'bg-yellow-50 dark:bg-yellow-900 border-yellow-500'
                        : 'bg-blue-50 dark:bg-blue-900 border-blue-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getAlertIcon(alert.type)}</span>
                        <span className={`text-sm font-medium ${
                          alert.resolved ? 'text-gray-500' : 'text-gray-900 dark:text-white'
                        }`}>
                          {alert.message}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">
                          {alert.timestamp.toLocaleTimeString()}
                        </span>
                        {!alert.resolved && (
                          <button
                            onClick={() => resolveAlert(alert.id)}
                            className="text-xs text-blue-600 hover:text-blue-800"
                          >
                            Resolve
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Status Indicator */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <div className={`w-2 h-2 rounded-full ${
            data.uptime >= 99.5 ? 'bg-green-500' : 
            data.uptime >= 99 ? 'bg-yellow-500' : 'bg-red-500'
          }`}></div>
          <span>
            System Status: {
              data.uptime >= 99.5 ? 'Healthy' : 
              data.uptime >= 99 ? 'Warning' : 'Critical'
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDashboard;