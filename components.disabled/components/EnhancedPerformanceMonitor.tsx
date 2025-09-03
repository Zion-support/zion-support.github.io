import React { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  score: number}

interface PerformanceAlert {
  type: 'warning' | 'error';
  message: string;
  metric: string}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600'};

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
        score: Math.random() * 100 };

      setMetrics(newMetrics);
      setLastUpdated(new Date());

      // Generate alerts based on metrics
      const newAlerts: PerformanceAlert[] = [];
      if (newMetrics.fcp > 1800) {
        newAlerts.push({
          type: 'warning',
          message: 'First Contentful Paint is slow',
          metric: 'FCP' })}
      if (newMetrics.lcp > 2500) {
        newAlerts.push({
          type: 'error',
          message: 'Largest Contentful Paint is too slow',
          metric: 'LCP' })}
      if (newMetrics.fid > 100) {
        newAlerts.push({
          type: 'warning',
          message: 'First Input Delay is high',
          metric: 'FID' })}
      if (newMetrics.cls > 0.1) {
        newAlerts.push({
          type: 'error',
          message: 'Cumulative Layout Shift is significant',
          metric: 'CLS' })}

      setAlerts(newAlerts)} catch (error) {
      console.error('Failed to update metrics:', error)} finally {
      setIsLoading(false)}
  }, []);

  useEffect(() => {
    updateMetrics();
    const interval = setInterval(updateMetrics, 30000); // Update every 30 seconds
    return () => clearInterval(interval)}, [updateMetrics]);

  if (!metrics) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading performance metrics...</p>
        </div>
      </div>
    )}

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Performance Monitor</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-400">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
            <button
              onClick={updateMetrics}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-4 py-2 rounded-lg transition-colors"
            >
              {isLoading ? 'Updating...' : 'Refresh'}
            </button>
          </div>
        </motion.div>

        {/* Performance Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 rounded-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Performance Score</h2>
              <p className="text-gray-400">Overall web vitals performance</p>
            </div>
            <div className="text-right">
              <div
                className={`text-4xl font-bold ${getScoreColor(metrics.score)}`}
              >
                {Math.round(metrics.score)}
              </div>
              <div className="text-sm text-gray-400">out of 100</div>
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
              <h3 className="text-lg font-semibold mb-4">Performance Alerts</h3>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border-l-4 ${
                      alert.type === 'error'
                        ? 'bg-red-900/20 border-red-500 text-red-200'
                        : 'bg-yellow-900/20 border-yellow-500 text-yellow-200'
                    }`}
                  >
                    <div className="flex items-center">
                      {alert.type === 'error' ? (
                        <AlertTriangle className="w-5 h-5 mr-3" />
                      ) : (
                        <Activity className="w-5 h-5 mr-3" />
                      )}
                      <div>
                        <div className="font-medium">{alert.metric}</div>
                        <div className="text-sm opacity-90">
                          {alert.message}
                        </div>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              First Contentful Paint
            </h3>
            <div className="text-3xl font-bold mb-2">
              {Math.round(metrics.fcp)}ms
            </div>
            <div
              className={`text-sm ${
                metrics.fcp < 1800 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {metrics.fcp < 1800 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Largest Contentful Paint
            </h3>
            <div className="text-3xl font-bold mb-2">
              {Math.round(metrics.lcp)}ms
            </div>
            <div
              className={`text-sm ${
                metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {metrics.lcp < 2500 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">First Input Delay</h3>
            <div className="text-3xl font-bold mb-2">
              {Math.round(metrics.fid)}ms
            </div>
            <div
              className={`text-sm ${
                metrics.fid < 100 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {metrics.fid < 100 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Cumulative Layout Shift
            </h3>
            <div className="text-3xl font-bold mb-2">
              {metrics.cls.toFixed(3)}
            </div>
            <div
              className={`text-sm ${
                metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {metrics.cls < 0.1 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>
        </motion.div>

        {/* Additional Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Time to First Byte</h3>
            <div className="text-3xl font-bold mb-2">
              {Math.round(metrics.ttfb)}ms
            </div>
            <div className="text-sm text-gray-400">Server response time</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Status</h3>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-green-400">Monitoring Active</span>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              Real-time performance tracking
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )};

export default EnhancedPerformanceMonitor;
