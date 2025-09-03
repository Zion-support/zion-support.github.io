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
      console.error('Error updating metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    updateMetrics();
    const interval = setInterval(updateMetrics, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [updateMetrics]);

  if (!metrics) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Activity className="w-5 h-5 mr-2 text-blue-500" />
          Performance Monitor
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={updateMetrics}
            disabled={isLoading}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Updating...' : 'Refresh'}
          </button>
          <span className="text-xs text-gray-500">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
        </div>
      </div>

      {/* Performance Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Overall Performance Score
          </span>
          <span className={`text-2xl font-bold ${getScoreColor(metrics.score)}`}>
            {Math.round(metrics.score)}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              metrics.score >= 90
                ? 'bg-green-500'
                : metrics.score >= 50
                ? 'bg-yellow-500'
                : 'bg-red-500'
            }`}
            style={{ width: `${metrics.score}%` }}
          />
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">FCP</div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            {Math.round(metrics.fcp)}ms
          </div>
          <div className={`text-xs ${
            metrics.fcp < 1800 ? 'text-green-600' : 'text-red-600'
          }`}>
            {metrics.fcp < 1800 ? 'Good' : 'Needs Improvement'}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">LCP</div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            {Math.round(metrics.lcp)}ms
          </div>
          <div className={`text-xs ${
            metrics.lcp < 2500 ? 'text-green-600' : 'text-red-600'
          }`}>
            {metrics.lcp < 2500 ? 'Good' : 'Needs Improvement'}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">FID</div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            {Math.round(metrics.fid)}ms
          </div>
          <div className={`text-xs ${
            metrics.fid < 100 ? 'text-green-600' : 'text-red-600'
          }`}>
            {metrics.fid < 100 ? 'Good' : 'Needs Improvement'}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">CLS</div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            {metrics.cls.toFixed(3)}
          </div>
          <div className={`text-xs ${
            metrics.cls < 0.1 ? 'text-green-600' : 'text-red-600'
          }`}>
            {metrics.cls < 0.1 ? 'Good' : 'Needs Improvement'}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">TTFB</div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            {Math.round(metrics.ttfb)}ms
          </div>
          <div className={`text-xs ${
            metrics.ttfb < 200 ? 'text-green-600' : 'text-red-600'
          }`}>
            {metrics.ttfb < 200 ? 'Good' : 'Needs Improvement'}
          </div>
        </div>
      </div>

      {/* Alerts */}
      <AnimatePresence>
        {alerts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2"
          >
            {alerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`flex items-center p-3 rounded-lg ${
                  alert.type === 'error'
                    ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                    : 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800'
                }`}
              >
                {alert.type === 'error' ? (
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" />
                )}
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {alert.metric} Alert
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {alert.message}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedPerformanceMonitor;