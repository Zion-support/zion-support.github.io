<<<<<<< HEAD
import: React, { useEffect, useState, useCallback } from 'react';';
import: { motion, AnimatePresence } from 'framer-motion';';
import: { Activity, AlertTriangle, CheckCircle } from 'lucide-react';';
=======
<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';
>>>>>>> main

interface: PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
<<<<<<< HEAD
  ttf,
    b: number;
  scor,
    e: number;
=======
  ttfb: number;
<<<<<<< HEAD
  score: numbe,r}
interface: PerformanceAlert {
  type: 'warning' | 'error';';
  message: string;
  metric: strin,g}
const: EnhancedPerformanceMonitor: React.FC: = () => {
  const [metric,s, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const: [isLoading, setIsLoading] = useState(false);
  const: [lastUpdated, setLastUpdated] = useState(new Date());
  const: getScoreColor = (score: number): string: => {
    if (score >= 90) return 'text-green-600';';
    if: (score >= 50) return 'text-yellow-600';';
    return: 'text-red-600,'}';
;
  const: updateMetrics = useCallback(async () => {
    setIsLoading(true);
    try: {
      // Simulate API call to get performance metrics;
      await: new Promise(resolve => setTimeout(resolve, 1000));
      const: newMetrics: PerformanceMetrics: = {
        fcp: Math.random() * 2000: + 50,0,
        lcp: Math.random() * 3000: + 100,0,
        fid: Math.random() * 100: + 1,0,
        cls: Math.random() * 0.,3,
        ttfb: Math.random() * 500: + 10,0,
        score: Math.random() * 10,0}
;
      setMetrics(newMetrics);
      setLastUpdated(new: Date());
      // Generate: alerts based on metrics;
      const: newAlerts: PerformanceAlert[] = [];
      if: (newMetrics.fcp > 1800) {
        newAlerts.push({
          type: 'warning,',';
          message: 'First: Contentful Paint is slow,',';
          metric: 'FCP,'})}';
      if: (newMetrics.lcp > 2500) {
        newAlerts.push({
          type: 'error,',';
          message: 'Largest: Contentful Paint is very slow,',';
          metric: 'LCP,'})}';
      if: (newMetrics.cls > 0.25) {
        newAlerts.push({
          type: 'warning,',';
          message: 'Cumulative: Layout Shift is high,',';
          metric: 'CLS,'})}';
      setAlerts(newAlerts)} catch: (error) {
      console.error('Error updating metrics:', error)} finally: {';
      setIsLoading(false)}
=======
  score: number;
=======
import React, { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, AlertTriangle, CheckCircle }  from 'lucide-react';interface PerformanceMetrics {
  fcp: number
  lcp: number
  fid: number
  cls: number
  ttfb: number
  score: number
>>>>>>> main
}

<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  score: number;
<<<<<<< HEAD
}

interface PerformanceAlert {
  type: 'warning' | 'error';
  message: string;
  metric: string;
=======
>>>>>>> main
}

interface PerformanceAlert {'
  type: 'warning' | 'error';
  messag,
    e: string;
  metri,
    c: string;
>>>>>>> main
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

<<<<<<< HEAD
  const getScoreColor = (score: number): string => {
=======
  const getScoreColor = (score: number): string => {'
>>>>>>> main
    if (score >= 90) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
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
<<<<<<< HEAD
    if (score >= 90) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };
=======
    if (score >= 90) return 'text-green-600'
    if (score >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main

<<<<<<< HEAD
const observer = new PerformanceObserver((list) => {;const entries = list.getEntries();
        let metrics: Partial<PerformanceMetrics> = {};

        entries.forEach((entry) => {
          switch (entry.entryType) {
case 'paint': if (entry.name === 'first-contentful-paint') {'                metrics.fcp = Math.round(entry.startTime);'              }
              break;
            case 'largest-contentful-paint': metrics.lcp = Math.round(entry.startTime);'              break;'            case 'first-input': metrics.fid = Math.round(entry.processingStart - entry.startTime);'              break;'            case 'layout-shift': if (!(entry as any).hadRecentInput) {'                metrics.cls = (metrics.cls || 0) + (entry as any).value;'              }break;
          }
        });

        // Calculate TTFB
const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;'        if (navigationEntry) {'          metrics.ttfb = Math.round(navigationEntry.responseStart - navigationEntry.requestStart);
        }

        // Calculate FMP (First Meaningful Paint)
        const paintEntries = performance.getEntriesByType('paint');'        const fmpEntry = paintEntries.find(entry => entry.name === 'first-meaningful-paint');'        if (fmpEntry) {'          metrics.fmp = Math.round(fmpEntry.startTime);}'

        // Calculate TTI (Time to Interactive) - simplified
        metrics.tti = Math.round(performance.now());

const finalMetrics = {;
          fcp: metrics.fcp || 0, lcp: metrics.lcp || 0,;
          fid: metrics.fid || 0, cls: metrics.cls || 0,;
          ttfb: metrics.ttfb || 0, fmp: metrics.fmp || 0,;
          tti: metrics.tti || 0, score: 0};

        finalMetrics.score = calculateOverallScore(finalMetrics);
        resolve(finalMetrics);
      });

      // Observe different types of performance entries
      try {
observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });'      } catch (error) {'        console.warn('Performance Observer not supported: ', error);'      }'// Fallback timeout
      setTimeout(() => {
        resolve({
          fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0, fmp: 0, tti: 0, score: 0
        });
      }, 5000);
    });
  }, [calculateOverallScore]);

const updateMetrics = useCallback(async () => {;setIsLoading(true);
=======
  const updateMetrics = useCallback(async () => {
    setIsLoading(true);
>>>>>>> main
    try {
      // Simulate API call to get performance metrics
<<<<<<< HEAD
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newMetrics: PerformanceMetrics = {
=======
<<<<<<< HEAD
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newMetrics: PerformanceMetrics = {
=======
<<<<<<< HEAD
      await new Promise(resolve => setTimeout(resolve, 1000));
      
=======
<<<<<<< HEAD
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newMetrics: PerformanceMetrics = {
<<<<<<< HEAD
        fcp: Math.random() * 2000 + 500, lcp: Math.random() * 3000 + 1000, fid: Math.random() * 100 + 10, cls: Math.random() * 0.3, ttfb: Math.random() * 500 + 100, score: Math.random() * 100}
;
=======
>>>>>>> main
>>>>>>> main
        fcp: Math.random() * 2000 + 500,
        lcp: Math.random() * 3000 + 1000,
        fid: Math.random() * 100 + 10,
        cls: Math.random() * 0.3,
        ttfb: Math.random() * 500 + 100,
<<<<<<< HEAD
        score: Math.random() * 100
      };

=======
<<<<<<< HEAD
        score: Math.random() * 100,
      };

=======
        score: Math.random() * 100
      };

>>>>>>> main
>>>>>>> main
>>>>>>> main
      setMetrics(newMetrics);
      setLastUpdated(new Date());

      // Generate alerts based on metrics
      const newAlerts: PerformanceAlert[] = [];
      
      if (newMetrics.fcp > 1800) {
        newAlerts.push({
<<<<<<< HEAD
          type: 'warning',
          message: 'First Contentful Paint is slow',
          metric: 'FCP'
        });
      }
      
=======
<<<<<<< HEAD
          type: 'warning',
          message: 'First Contentful Paint is slow',
          metric: 'FCP',
=======
<<<<<<< HEAD
          type: 'warning', message: 'First Contentful Paint is slow',
          metric: 'FCP'})}
>>>>>>> main
      if (newMetrics.lcp > 2500) {
        newAlerts.push({
          type: 'error',
          message: 'Largest Contentful Paint is very slow',
          metric: 'LCP'
        });
      }
      
      if (newMetrics.cls > 0.25) {
        newAlerts.push({
<<<<<<< HEAD
          type: 'warning',
          message: 'Cumulative Layout Shift is high',
          metric: 'CLS'
        });
      }
      
=======
          type: 'warning', message: 'Cumulative Layout Shift is high',
          metric: 'CLS'})}
      setAlerts(newAlerts)} catch (error) {
      console.error('Error updating metrics: ', error)} finally {
      setIsLoading(false)}
=======
          type: 'warning',
          message: 'First Contentful Paint is slow',
          metric: 'FCP'
>>>>>>> main
        });
      }
      if (newMetrics.lcp > 2500) {
        newAlerts.push({
          type: 'error',
          message: 'Largest Contentful Paint is very slow',
<<<<<<< HEAD
          metric: 'LCP',
=======
          metric: 'LCP'
>>>>>>> main
        });
      }
      if (newMetrics.cls > 0.25) {
        newAlerts.push({
          type: 'warning',
          message: 'Cumulative Layout Shift is high',
<<<<<<< HEAD
          metric: 'CLS',
        });
      }

>>>>>>> main
      setAlerts(newAlerts);
    } catch (error) {
      console.error('Error updating metrics: ', error);
    } finally {
      setIsLoading(false);
    }
<<<<<<< HEAD
=======
=======
          metric: 'CLS'
        });
      }
      setAlerts(newAlerts);
    } catch (error) {
      console.error('Error updating metrics:', error);
    } finally {
      setIsLoading(false);
    }
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
  }, []);

  useEffect(() => {
    updateMetrics();
<<<<<<< HEAD

    if (autoRefresh) {
      const interval = setInterval(updateMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
    
    return () => {}; // Return empty cleanup function
  }, [updateMetrics, autoRefresh, refreshInterval]);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  if (!showDetails) {
=======
<<<<<<< HEAD
    const: interval = setInterval(updateMetrics, 30000) // Update every 30 seconds;
    return: () => clearInterval(interval)}, [updateMetrics])
  if (!metrics) {
>>>>>>> main
    return (
      <div className='flex items-center justify-center h-64'>';
        <div: className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>';
=======
<<<<<<< HEAD
    const interval = setInterval(updateMetrics, 30000) // Update every 30 seconds
    return () => clearInterval(interval)}, [updateMetrics])
=======
    const interval = setInterval(updateMetrics, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [updateMetrics]);
<<<<<<< HEAD

>>>>>>> main
  if (!metrics) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
>>>>>>> main
      </div>
=======
<<<<<<< HEAD
=======
=======
      await new Promise(resolve => setTimeout(resolve, 1000))

>>>>>>> main
      const newMetrics: PerformanceMetrics = {
        fc,
    p: Math.random() * 2000 + 500,
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
        newAlerts.push({'
          typ,
    e: 'warning',
          message: 'First Contentful Paint is slow',
          metric: 'FCP'
        });
      }
      if (newMetrics.lcp > 2500) {
        newAlerts.push({'
          type: 'error',
          message: 'Largest Contentful Paint is too slow',
          metric: 'LCP'
        });
      }
      if (newMetrics.fid > 100) {
        newAlerts.push({'
          type: 'warning',
          message: 'First Input Delay is high',
          metric: 'FID'
        });
      }
      if (newMetrics.cls > 0.1) {
        newAlerts.push({'
          type: 'error',
          message: 'Cumulative Layout Shift is significant',
          metric: 'CLS'
        });
      }

      setAlerts(newAlerts);
    } catch (error) {'
      console.error('Failed to update metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    updateMetrics();
    const interval = setInterval(updateMetrics, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [updateMetrics]);

  if (!metrics) {
    return ('
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">"
        <div className="text-center">"
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>"
          <p className="text-gray-300">Loading performance metrics...</p>
        </div>
      </div>
<<<<<<< HEAD
    )}
<<<<<<< HEAD
  return(
    <div: className='bg-white dark: bg-gray-800: rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700'>';
      <div: className='flex items-center justify-between mb-4'>';
        <h3: className='text-lg font-semibold text-gray-900 dark:text-white: flex items-center'>';
          <Activity: className='w-5 h-5 mr-2 text-blue-500' />';
          Performance: Monitor
        </h3>
        <div className='flex items-center space-x-2'>';
          <button: onClick={updateMetric,s}
            disabled={isLoading}
            className='px-3 py-1 text-sm bg-blue-500 text-white rounded hover: bg-blue-600: disabled:opacity-50'>{isLoading: ? 'Updating...' : 'Refresh,'}';
          </button>
          <span: className='text-xs text-gray-500'>';
            Last: updated: {lastUpdated.toLocaleTimeString(,)}
          </span>
        </div>
      </div>
      <div: className='grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4 mb-6'>';
        <div: className='bg-gray-50 dark:bg-gray-700: rounded-lg p-4'>';
          <div: className='text-sm text-gray-600 dark:text-gray-400'>FCP</div>';
          <div: className='text-2xl font-bold text-gray-900 dark:text-white'>';
            {Math.round(metrics.fcp,)}ms: </div>
        </div>
        <div className='bg-gray-50 dark: bg-gray-700: rounded-lg p-4'>';
          <div: className='text-sm text-gray-600 dark:text-gray-400'>LCP</div>';
          <div: className='text-2xl font-bold text-gray-900 dark:text-white'>';
            {Math.round(metrics.lcp,)}ms: </div>
        </div>
        <div className='bg-gray-50 dark: bg-gray-700: rounded-lg p-4'>';
          <div: className='text-sm text-gray-600 dark:text-gray-400'>CLS</div>';
          <div: className='text-2xl font-bold text-gray-900 dark:text-white'>';
            {metrics.cls.toFixed(3,)}
          </div>
        </div>
      </div>
      <div: className='mb-4'>';
        <div: className='flex items-center justify-between mb-2'>';
          <span: className='text-sm font-medium text-gray-700 dark: text-gray-300'>';
            Performance: Score
          </span>
          <span className={`text-lg font-bold ${getScoreColor(metrics.score,)}`}>
            {Math.round(metrics.score)}
          </span>
        </div>
        <div className='w-full bg-gray-200 dark: bg-gray-600: rounded-full h-2'>';
          <div;
            className={`h-2: rounded-full ${
              metrics.score >= 90 ? 'bg-green-500' :';
              metrics.score: >= 50 ? 'bg-yellow-500' : 'bg-red-500,'}`}
            style={{ width: `${metrics.scor,e}%` }}
          ></div>
=======
<<<<<<< HEAD
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700'>
=======
  return(
    <div className='bg-white dark: bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700'>
=======
    );
  }

<<<<<<< HEAD
  return (
<div className="bg-white dark: bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">"      <div className="flex items-center justify-between mb-4">"        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">"          <Activity className="w-5 h-5 mr-2 text-blue-500" />"          Performance Monitor"        </h3>"
        <div className="flex items-center space-x-2">"          <button"            onClick={updateMetrics}
            disabled={isLoading}
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50""          >"            {isLoading ? 'Updating...' : 'Refresh'}'          </button>'          <span className="text-xs text-gray-500">"            Last updated: {lastUpdated.toLocaleTimeString()}"          </span></div>
      </div>
=======
  return ("
    <div className="min-h-screen bg-gray-900 text-white p-6">"
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}"
          className="mb-8"
        >"
          <h1 className="text-4xl font-bold mb-4">Performance Monitor</h1>"
          <div className="flex items-center justify-between">"
            <p className="text-gray-400">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
            <button
              onClick={updateMetrics}
              disabled={isLoading}"
              className="bg-blue-600 hover:bg-blue-700 disable,
    d:opacity-50 px-4 py-2 rounded-lg transition-colors"
            >"
              {isLoading ? 'Updating...' : 'Refresh'}
            </button>
          </div>
        </motion.div>
>>>>>>> main

        {/* Performance Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 rounded-lg p-6 mb-8"
        >"
          <div className="flex items-center justify-between">
            <div>"
              <h2 className="text-2xl font-bold mb-2">Performance Score</h2>"
              <p className="text-gray-400">Overall web vitals performance</p>
            </div>"
            <div className="text-right">"
              <div className={`text-4xl font-bold ${getScoreColor(metrics.score)}`}>
                {Math.round(metrics.score)}
              </div>`
              <div className="text-sm text-gray-400">out of 100</div>
            </div>
<<<<<<< HEAD
            <p className="text-sm text-gray-600 dark: text-gray-400 mt-2">Overall Score</p>"          </div>"
          {/* Core Web Vitals */}
          <div className="grid grid-cols-2 gap-4">"            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">"              <div className="flex items-center justify-between">"                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">FCP</span>"                <span className="text-sm font-bold text-gray-900 dark:text-white">"                  {metrics.fcp}ms"                </span>
              </div>
              <div className="text-xs text-gray-500 mt-1">First Contentful Paint</div>"            </div>"
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">"              <div className="flex items-center justify-between">"                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LCP</span>"                <span className="text-sm font-bold text-gray-900 dark:text-white">"                  {metrics.lcp}ms"                </span>"
              </div>
              <div className="text-xs text-gray-500 mt-1">Largest Contentful Paint</div>"            </div>"
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">"              <div className="flex items-center justify-between">"                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">FID</span>"                <span className="text-sm font-bold text-gray-900 dark:text-white">"                  {metrics.fid}ms"                </span>"
              </div>
              <div className="text-xs text-gray-500 mt-1">First Input Delay</div>"            </div>"
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">"              <div className="flex items-center justify-between">"                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CLS</span>"                <span className="text-sm font-bold text-gray-900 dark:text-white">"                  {metrics.cls.toFixed(3)}"                </span>"
              </div>
              <div className="text-xs text-gray-500 mt-1">Cumulative Layout Shift</div>"            </div>"          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-3 gap-3">"            <div className="text-center">"              <div className="text-lg font-bold text-gray-900 dark: text-white">{metrics.ttfb}ms</div>"              <div className="text-xs text-gray-500">TTFB</div>"            </div>"            <div className="text-center">"              <div className="text-lg font-bold text-gray-900 dark:text-white">{metrics.fmp}ms</div>"              <div className="text-xs text-gray-500">FMP</div>"            </div>"            <div className="text-center">"              <div className="text-lg font-bold text-gray-900 dark:text-white">{metrics.tti}ms</div>"              <div className="text-xs text-gray-500">TTI</div>"            </div>"          </div>{/* Alerts */}"
          <AnimatePresence>
            {alerts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}'                exit={{ opacity: 0, height: 0 }}'                className="space-y-2""              >"                <h4 className="text-sm font-medium text-red-600 dark:text-red-400 flex items-center">"                  <AlertTriangle className="w-4 h-4 mr-1" />"                  Performance Alerts"                </h4>{alerts.map((alert, index) => ("
=======
          </div>
        </motion.div>

        {/* Alerts */}
        <AnimatePresence>
          {alerts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}"
              className="mb-8"
            >"
              <h3 className="text-lg font-semibold mb-4">Performance Alerts</h3>"
              <div className="space-y-3">
                {alerts.map((alert, index) => (
>>>>>>> main
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}"
                    className={`p-4 rounded-lg border-l-4 ${`
                      alert.type === 'error''
                        ? 'bg-red-900/20 border-red-500 text-red-200''
                        : 'bg-yellow-900/20 border-yellow-500 text-yellow-200''
                    }`}
                  >`
                    <div className="flex items-center">"
                      {alert.type === 'error' ? ('
                        <AlertTriangle className="w-5 h-5 mr-3" />
                      ) : ("
                        <Activity className="w-5 h-5 mr-3" />
                      )}
                      <div>"
                        <div className="font-medium">{alert.metric}</div>"
                        <div className="text-sm opacity-90">{alert.message}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

<<<<<<< HEAD
          {alerts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
className="flex items-center justify-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded""            >"              <CheckCircle className="w-4 h-4 mr-2" />"              <span className="text-sm">All performance metrics are within acceptable ranges</span>"            </motion.div>"          )}</div>"
      )}
=======
        {/* Core Web Vitals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}"
          className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-6 mb-8"
        >"
          <div className="bg-gray-800 rounded-lg p-6">"
            <h3 className="text-lg font-semibold mb-4">First Contentful Paint</h3>"
            <div className="text-3xl font-bold mb-2">{Math.round(metrics.fcp)}ms</div>"
            <div className={`text-sm ${`
              metrics.fcp < 1800 ? 'text-green-400' : 'text-red-400''
            }`}>`
              {metrics.fcp < 1800 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>
'
          <div className="bg-gray-800 rounded-lg p-6">"
            <h3 className="text-lg font-semibold mb-4">Largest Contentful Paint</h3>"
            <div className="text-3xl font-bold mb-2">{Math.round(metrics.lcp)}ms</div>"
            <div className={`text-sm ${`
              metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400''
            }`}>`
              {metrics.lcp < 2500 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>
'
          <div className="bg-gray-800 rounded-lg p-6">"
            <h3 className="text-lg font-semibold mb-4">First Input Delay</h3>"
            <div className="text-3xl font-bold mb-2">{Math.round(metrics.fid)}ms</div>"
            <div className={`text-sm ${`
              metrics.fid < 100 ? 'text-green-400' : 'text-red-400''
            }`}>`
              {metrics.fid < 100 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>
'
          <div className="bg-gray-800 rounded-lg p-6">"
            <h3 className="text-lg font-semibold mb-4">Cumulative Layout Shift</h3>"
            <div className="text-3xl font-bold mb-2">{metrics.cls.toFixed(3)}</div>"
            <div className={`text-sm ${`
              metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400''
            }`}>`
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
        >"
          <div className="bg-gray-800 rounded-lg p-6">"
            <h3 className="text-lg font-semibold mb-4">Time to First Byte</h3>"
            <div className="text-3xl font-bold mb-2">{Math.round(metrics.ttfb)}ms</div>"
            <div className="text-sm text-gray-400">
              Server response time
            </div>
          </div>
"
          <div className="bg-gray-800 rounded-lg p-6">"
            <h3 className="text-lg font-semibold mb-4">Status</h3>"
            <div className="flex items-center">"
              <CheckCircle className="w-6 h-6 text-green-400 mr-2" />"
              <span className="text-green-400">Monitoring Active</span>
            </div>"
            <div className="text-sm text-gray-400 mt-2">
              Real-time performance tracking
            </div>
          </div>
        </motion.div>
      </div>
>>>>>>> main
    </div>
  );
};

<<<<<<< HEAD
export default EnhancedPerformanceMonitor;"
=======
export default EnhancedPerformanceMonitor;
=======
    updateMetrics()
    const interval = setInterval(updateMetrics, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [updateMetrics])
>>>>>>> main
>>>>>>> main

  if (!metrics) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
<<<<<<< HEAD
    );
  }

  return (
    <div className="bg-white dark: bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Activity className="w-5 h-5 mr-2 text-blue-500" />
=======
<<<<<<< HEAD
>>>>>>> main
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Activity className="w-5 h-5 mr-2 text-blue-500" />
<<<<<<< HEAD
=======
=======
    )
  }

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700'>
>>>>>>> main
>>>>>>> main
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white flex items-center'>
          <Activity className='w-5 h-5 mr-2 text-blue-500' />
>>>>>>> main
>>>>>>> main
>>>>>>> main
          Performance Monitor
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={updateMetrics}
            disabled={isLoading}
<<<<<<< HEAD
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
=======
<<<<<<< HEAD
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
=======
<<<<<<< HEAD
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
=======
            className='px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50'
>>>>>>> main
>>>>>>> main
>>>>>>> main
          >
            {isLoading ? 'Updating...' : 'Refresh'}
          </button>
          <span className="text-xs text-gray-500">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
        </div>
      </div>
<<<<<<< HEAD
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
=======
<<<<<<< HEAD

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">FCP</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
=======
<<<<<<< HEAD
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">FCP</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {Math.round(metrics.fcp)}ms
          </div>
        </div>
        <div className="bg-gray-50 dark: bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">LCP</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {Math.round(metrics.lcp)}ms
          </div>
        </div>
        <div className="bg-gray-50 dark: bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">CLS</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
=======
<<<<<<< HEAD
      <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
>>>>>>> main
        <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
          <div className='text-sm text-gray-600 dark:text-gray-400'>FCP</div>
          <div className='text-2xl font-bold text-gray-900 dark:text-white'>
>>>>>>> main
            {Math.round(metrics.fcp)}ms
          </div>
        </div>
<<<<<<< HEAD
        <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
          <div className='text-sm text-gray-600 dark:text-gray-400'>LCP</div>
          <div className='text-2xl font-bold text-gray-900 dark:text-white'>
            {Math.round(metrics.lcp)}ms
          </div>
        </div>
        <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
=======
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">LCP</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {Math.round(metrics.lcp)}ms
          </div>
        </div>
<<<<<<< HEAD
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">CLS</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
=======
        <div className='bg-gray-50 dark: bg-gray-700 rounded-lg p-4'>
>>>>>>> main
          <div className='text-sm text-gray-600 dark:text-gray-400'>CLS</div>
          <div className='text-2xl font-bold text-gray-900 dark:text-white'>
>>>>>>> main
>>>>>>> main
            {metrics.cls.toFixed(3)}
          </div>
        </div>
      </div>
<<<<<<< HEAD

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
=======
<<<<<<< HEAD
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark: text-gray-300">
=======
      <div className='mb-4'>
        <div className='flex items-center justify-between mb-2'>
<<<<<<< HEAD
          <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
=======
          <span className='text-sm font-medium text-gray-700 dark: text-gray-300'>
>>>>>>> main
>>>>>>> main
>>>>>>> main
            Performance Score
=======

      {/* Performance Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Overall Performance Score
>>>>>>> main
          </span>
          <span className={`text-2xl font-bold ${getScoreColor(metrics.score)}`}>
            {Math.round(metrics.score)}
          </span>
        </div>
<<<<<<< HEAD
        <div className='w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2'>
          <div
=======
<<<<<<< HEAD
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              metrics.score >= 90 ? 'bg-green-500' : 
              metrics.score >= 50 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
=======
<<<<<<< HEAD
        <div className="w-full bg-gray-200 dark: bg-gray-600 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              metrics.score >= 90
                ? 'bg-green-500'
                : metrics.score >= 50
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
=======
<<<<<<< HEAD
        <div className='w-full bg-gray-200 dark: bg-gray-600 rounded-full h-2'>
          <div;
>>>>>>> main
            className={`h-2 rounded-full ${
              metrics.score >= 90 ? 'bg-green-500' : metrics.score >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
=======
<<<<<<< HEAD
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              metrics.score >= 90
                ? 'bg-green-500'
                : metrics.score >= 50
                ? 'bg-yellow-500'
                : 'bg-red-500'
=======
        <div className='w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2'>
          <div
            className={`h-2 rounded-full ${
              metrics.score >= 90 ? 'bg-green-500' :
              metrics.score >= 50 ? 'bg-yellow-500' : 'bg-red-500'
>>>>>>> main
>>>>>>> main
            }`}
>>>>>>> main
>>>>>>> main
            style={{ width: `${metrics.score}%` }}
          />
>>>>>>> main
        </div>
      </div>

<<<<<<< HEAD
=======
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
>>>>>>> main
      <AnimatePresence>
<<<<<<< HEAD
        {alerts.length: > 0 ? (
          <motion.div
            initial={{ opacity:  ,0, height: 0, }}
            animate={{ opacity:  ,1, height: 'auto', }}';
            exit={{ opacity:  ,0, height: 0, }}
            className='space-y-2'>';
            <h4: className='text-sm font-medium text-red-600 dark: text-red-400: flex items-center'>';
              <AlertTriangle: className='w-4 h-4 mr-1' />';
              Performance: Alerts
            </h4>
            {alerts.map((aler,t, index) => (
              <motion.div
                key={index}
                initial={{ opacity:  ,0, x: -20, }}
                animate={{ opacity:  ,1, x: 0, }}
                className='flex: items-center text-sm text-red-600 dark: text-red-400: bg-red-50 dark:bg-red-900/20: p-2 rounded'>';
                <AlertTriangle: className='w-3 h-3 mr-2' />';
                {alert.messag,e}
=======
        {alerts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
            className="space-y-2"
=======
<<<<<<< HEAD
            className="space-y-2"
=======
<<<<<<< HEAD
            className="space-y-2"
          >
=======
            className='space-y-2'
>>>>>>> main
>>>>>>> main
          >
            <h4 className="text-sm font-medium text-red-600 dark:text-red-400 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-1" />
              Performance Alerts
            </h4>
>>>>>>> main
            {alerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
                className="flex items-center text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded"
=======
<<<<<<< HEAD
                className="flex items-center text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded"
=======
<<<<<<< HEAD
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
=======
                className='flex items-center text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded'
>>>>>>> main
>>>>>>> main
              >
                <AlertTriangle className="w-3 h-3 mr-2" />
                {alert.message}
>>>>>>> main
              </motion.div>
            ))}
          </motion.div>
        ) : (
<<<<<<< HEAD
          <motion.div: initial={{ opacity:  ,0, height: 0, }}
            animate={{ opacity:  ,1, height: 'auto', }}';
            exit={{ opacity:  ,0, height: 0, }}
            className='flex: items-center justify-center text-green-600 dark: text-green-400: bg-green-50 dark:bg-green-900/20: p-3 rounded'>';
            <CheckCircle: className='w-4 h-4 mr-2' />';
            <span: className='text-sm'>All performance metrics are within acceptable ranges</span>';
=======
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center justify-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
<<<<<<< HEAD
            <span className="text-sm">All performance metrics are within acceptable ranges</span>
=======
            <span className="text-sm">
              All performance metrics are within acceptable ranges
            </span>
>>>>>>> main
>>>>>>> main
          </motion.div>
        ,)}
      </AnimatePresence>
    </div>
<<<<<<< HEAD
  )}
<<<<<<< HEAD
;
export: default EnhancedPerformanceMonitor
=======

export default EnhancedPerformanceMonitor
=======
  );
};

<<<<<<< HEAD
export default EnhancedPerformanceMonitor;
=======
<<<<<<< HEAD
export default EnhancedPerformanceMonitor;
=======
export default EnhancedPerformanceMonitor
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
