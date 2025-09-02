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
;
interface PerformanceAlert {
  type: 'warning' | 'error';
  message: string;
  metric: string;
}
;
const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
;
  const getScoreColor = (score: number): string => {;
    if (score >= 90) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };
;
  const updateMetrics = useCallback(async () => {
    setIsLoading(true);
    try {;
      // Simulate API call to get performance metrics;
      await new Promise(resolve => setTimeout(resolve, 1000));
;
      const newMetrics: PerformanceMetrics = {;
        fcp: Math.random() * 2000 + 500,;
        lcp: Math.random() * 3000 + 1000,;
        fid: Math.random() * 100 + 10,;
        cls: Math.random() * 0.3,;
        ttfb: Math.random() * 500 + 100,;
        score: Math.random() * 100;
      };
;
      setMetrics(newMetrics);
      setLastUpdated(new Date());
;
      // Generate alerts based on metrics;
      const newAlerts: PerformanceAlert[] = [];
      if (newMetrics.fcp > 1800) {;
        newAlerts.push({;
          type: 'warning',;
          message: 'First Contentful Paint is slow',;
          metric: 'FCP';
        });
      }
      if (newMetrics.lcp > 2500) {;
        newAlerts.push({;
          type: 'error',;
          message: 'Largest Contentful Paint is very slow',;
          metric: 'LCP';
        });
      }
      if (newMetrics.cls > 0.25) {;
        newAlerts.push({;
          type: 'warning',;
          message: 'Cumulative Layout Shift is high',;
          metric: 'CLS';
        });
      }
;
      setAlerts(newAlerts);
    } catch (error) {;
      console.error('Error updating metrics:', error);
    } finally {;
      setIsLoading(false);
    }
  }, []);
;
  useEffect(() => {;
    updateMetrics();
    const interval = setInterval(updateMetrics, 30000); // Update every 30 seconds;
    return () => clearInterval(interval);
  }, [updateMetrics]);
;
  if (!metrics) {;
    return (
      <div className='flex items-center justify-center h-64'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
      </div>
    );
  }
;
  return (;
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white flex items-center'>
          <Activity className='w-5 h-5 mr-2 text-blue-500' />
          Performance Monitor;
        </h3>
        <div className='flex items-center space-x-2'>
          <button
            onClick={updateMetrics}
            disabled={isLoading}
            className='px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50';
          >;
            {isLoading ? 'Updating...' : 'Refresh'}
          </button>
          <span className='text-xs text-gray-500'>
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
        <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
          <div className='text-sm text-gray-600 dark:text-gray-400'>FCP</div>
          <div className='text-2xl font-bold text-gray-900 dark:text-white'>
            {Math.round(metrics.fcp)}ms;
          </div>
        </div>
        <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
          <div className='text-sm text-gray-600 dark:text-gray-400'>LCP</div>
          <div className='text-2xl font-bold text-gray-900 dark:text-white'>
            {Math.round(metrics.lcp)}ms;
          </div>
        </div>
        <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
          <div className='text-sm text-gray-600 dark:text-gray-400'>CLS</div>
          <div className='text-2xl font-bold text-gray-900 dark:text-white'>
            {metrics.cls.toFixed(3)}
          </div>
        </div>
      </div>
      <div className='mb-4'>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
            Performance Score;
          </span>
          <span className={`text-lg font-bold ${getScoreColor(metrics.score)}`}>
            {Math.round(metrics.score)}
          </span>
        </div>
        <div className='w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2'>
          <div;
            className={`h-2 rounded-full ${;
              metrics.score >= 90 ? 'bg-green-500' :;
              metrics.score >= 50 ? 'bg-yellow-500' : 'bg-red-500';
            }`}
            style={{ width: `${metrics.score}%` }}
          ></div>
        </div>
      </div>
      <AnimatePresence>
        {alerts.length > 0 ? (;
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='space-y-2';
          >;
            <h4 className='text-sm font-medium text-red-600 dark:text-red-400 flex items-center'>
              <AlertTriangle className='w-4 h-4 mr-1' />
              Performance Alerts;
            </h4>
            {alerts.map((alert, index) => (;
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className='flex items-center text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded';
              >;
                <AlertTriangle className='w-3 h-3 mr-2' />
                {alert.message}
              </motion.div>
            ))}
          </motion.div>
        ) : (;
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='flex items-center justify-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded';
          >;
            <CheckCircle className='w-4 h-4 mr-2' />
            <span className='text-sm'>All performance metrics are within acceptable ranges</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
;
export default EnhancedPerformanceMonitor;