import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  score: number;
}

interface PerformanceAlert {
  type: 'warning' | 'error';
  message: string;
  metric: string;
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const updateMetrics = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call to get performance metrics
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newMetrics: PerformanceMetrics = {
        fcp: Math.random() * 2000 + 500,
        lcp: Math.random() * 3000 + 1000,
        fid: Math.random() * 100 + 10,
        cls: Math.random() * 0.3,
        ttfb: Math.random() * 500 + 100,
        score: Math.random() * 100
      };

      setMetrics(newMetrics);
      setLastUpdated(new Date());

      // Generate alerts based on metrics
      const newAlerts: PerformanceAlert[] = [];
      
      if (newMetrics.fcp > 1800) {
        newAlerts.push({
          type: 'warning',
          message: 'First Contentful Paint is slow',
          metric: 'FCP'
        });
      }
      
      if (newMetrics.lcp > 2500) {
        newAlerts.push({
          type: 'error',
          message: 'Largest Contentful Paint is very slow',
          metric: 'LCP'
        });
      }
      
      if (newMetrics.cls > 0.25) {
        newAlerts.push({
          type: 'warning',
          message: 'Cumulative Layout Shift is high',
          metric: 'CLS'
        });
      }

      setAlerts(newAlerts);
    } catch (error) {
      console.error('Error updating metrics: ', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    updateMetrics();
    const interval = setInterval(updateMetrics, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [updateMetrics]);

  const getMetricStatus = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'warning';
    return 'poor';
  };

  const getMetricColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  if (!metrics) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading performance metrics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Performance Monitor</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Real-time performance monitoring and alerts
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
              <button
                onClick={updateMetrics}
                disabled={isLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Updating...' : 'Refresh'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Overall Performance Score</h2>
              <p className="text-gray-600">Based on Core Web Vitals and other metrics</p>
            </div>
            <div className="text-right">
              <div className={`text-4xl font-bold ${getScoreColor(metrics.score)}`}>
                {Math.round(metrics.score)}
              </div>
              <div className="text-sm text-gray-500">out of 100</div>
            </div>
          </div>
        </motion.div>

        {/* Alerts */}
        <AnimatePresence>
          {alerts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Alerts</h3>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border-l-4 ${
                      alert.type === 'error'
                        ? 'bg-red-50 border-red-500'
                        : 'bg-yellow-50 border-yellow-500'
                    }`}
                  >
                    <div className="flex items-center">
                      {alert.type === 'error' ? (
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3" />
                      )}
                      <div>
                        <p className={`font-medium ${
                          alert.type === 'error' ? 'text-red-800' : 'text-yellow-800'
                        }`}>
                          {alert.metric}: {alert.message}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Core Web Vitals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {/* First Contentful Paint */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">First Contentful Paint</h3>
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {Math.round(metrics.fcp)}ms
            </div>
            <div className={`text-sm font-medium ${getMetricColor(
              getMetricStatus(metrics.fcp, { good: 1800, poor: 3000 })
            )}`}>
              {getMetricStatus(metrics.fcp, { good: 1800, poor: 3000 }) === 'good' ? 'Good' :
               getMetricStatus(metrics.fcp, { good: 1800, poor: 3000 }) === 'warning' ? 'Needs Improvement' : 'Poor'}
            </div>
          </div>

          {/* Largest Contentful Paint */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Largest Contentful Paint</h3>
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {Math.round(metrics.lcp)}ms
            </div>
            <div className={`text-sm font-medium ${getMetricColor(
              getMetricStatus(metrics.lcp, { good: 2500, poor: 4000 })
            )}`}>
              {getMetricStatus(metrics.lcp, { good: 2500, poor: 4000 }) === 'good' ? 'Good' :
               getMetricStatus(metrics.lcp, { good: 2500, poor: 4000 }) === 'warning' ? 'Needs Improvement' : 'Poor'}
            </div>
          </div>

          {/* First Input Delay */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">First Input Delay</h3>
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {Math.round(metrics.fid)}ms
            </div>
            <div className={`text-sm font-medium ${getMetricColor(
              getMetricStatus(metrics.fid, { good: 100, poor: 300 })
            )}`}>
              {getMetricStatus(metrics.fid, { good: 100, poor: 300 }) === 'good' ? 'Good' :
               getMetricStatus(metrics.fid, { good: 100, poor: 300 }) === 'warning' ? 'Needs Improvement' : 'Poor'}
            </div>
          </div>

          {/* Cumulative Layout Shift */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Cumulative Layout Shift</h3>
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {metrics.cls.toFixed(3)}
            </div>
            <div className={`text-sm font-medium ${getMetricColor(
              getMetricStatus(metrics.cls, { good: 0.1, poor: 0.25 })
            )}`}>
              {getMetricStatus(metrics.cls, { good: 0.1, poor: 0.25 }) === 'good' ? 'Good' :
               getMetricStatus(metrics.cls, { good: 0.1, poor: 0.25 }) === 'warning' ? 'Needs Improvement' : 'Poor'}
            </div>
          </div>

          {/* Time to First Byte */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Time to First Byte</h3>
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {Math.round(metrics.ttfb)}ms
            </div>
            <div className={`text-sm font-medium ${getMetricColor(
              getMetricStatus(metrics.ttfb, { good: 600, poor: 1500 })
            )}`}>
              {getMetricStatus(metrics.ttfb, { good: 600, poor: 1500 }) === 'good' ? 'Good' :
               getMetricStatus(metrics.ttfb, { good: 600, poor: 1500 }) === 'warning' ? 'Needs Improvement' : 'Poor'}
            </div>
          </div>
        </motion.div>

        {/* Performance Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-4">Performance Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">
                {alerts.filter(a => a.type === 'error').length}
              </div>
              <div className="text-blue-100">Critical Issues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">
                {alerts.filter(a => a.type === 'warning').length}
              </div>
              <div className="text-blue-100">Warnings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">
                {Math.round(metrics.score)}
              </div>
              <div className="text-blue-100">Overall Score</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;