import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Zap, Activity, Eye, MousePointer, Clock } from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  averageSessionDuration: number;
  bounceRate: number;
  performanceScore: number;
  userInteractions: number;
  loadTime: number;
  memoryUsage: number;
}

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  icon: React.ComponentType<any>;
  color: string;
  trend: 'up' | 'down' | 'stable';
}

export const AdvancedAnalytics: React.FC<{ enabled?: boolean; showMetrics?: boolean }> = ({ 
  enabled = true, 
  showMetrics = true 
}) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    averageSessionDuration: 0,
    bounceRate: 0,
    performanceScore: 0,
    userInteractions: 0,
    loadTime: 0,
    memoryUsage: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Simulate real-time data updates
  const updateAnalytics = useCallback(() => {
    if (!enabled) return;

    setAnalyticsData(prev => ({
      pageViews: prev.pageViews + Math.floor(Math.random() * 5) + 1,
      uniqueVisitors: prev.uniqueVisitors + Math.floor(Math.random() * 2),
      averageSessionDuration: Math.max(0, prev.averageSessionDuration + (Math.random() - 0.5) * 10),
      bounceRate: Math.max(0, Math.min(100, prev.bounceRate + (Math.random() - 0.5) * 5)),
      performanceScore: Math.max(0, Math.min(100, prev.performanceScore + (Math.random() - 0.5) * 2)),
      userInteractions: prev.userInteractions + Math.floor(Math.random() * 3) + 1,
      loadTime: Math.max(0, prev.loadTime + (Math.random() - 0.5) * 50),
      memoryUsage: Math.max(0, prev.memoryUsage + (Math.random() - 0.5) * 5)
    }));
  }, [enabled]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled) return;

    // Measure page load performance
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setAnalyticsData(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart
        }));
      }
    }

    // Measure memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setAnalyticsData(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }
  }, [enabled]);

  // User interaction tracking
  const trackUserInteractions = useCallback(() => {
    if (!enabled) return;

    const handleInteraction = () => {
      setAnalyticsData(prev => ({
        ...prev,
        userInteractions: prev.userInteractions + 1
      }));
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    // Initialize with some data
    setAnalyticsData({
      pageViews: Math.floor(Math.random() * 1000) + 500,
      uniqueVisitors: Math.floor(Math.random() * 500) + 200,
      averageSessionDuration: Math.floor(Math.random() * 300) + 120,
      bounceRate: Math.floor(Math.random() * 40) + 20,
      performanceScore: Math.floor(Math.random() * 20) + 80,
      userInteractions: Math.floor(Math.random() * 100) + 50,
      loadTime: Math.floor(Math.random() * 200) + 100,
      memoryUsage: Math.floor(Math.random() * 50) + 25
    });

    // Set up real-time updates
    const interval = setInterval(updateAnalytics, 5000);
    const performanceInterval = setInterval(measurePerformance, 10000);

    // Track user interactions
    const cleanup = trackUserInteractions();

    // Show analytics after a delay
    const showTimer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      clearInterval(interval);
      clearInterval(performanceInterval);
      clearTimeout(showTimer);
      cleanup?.();
    };
  }, [enabled, updateAnalytics, measurePerformance, trackUserInteractions]);

  const performanceMetrics: PerformanceMetric[] = [
    {
      name: 'Performance Score',
      value: analyticsData.performanceScore,
      unit: '%',
      icon: Zap,
      color: 'text-green-400',
      trend: analyticsData.performanceScore > 85 ? 'up' : analyticsData.performanceScore < 75 ? 'down' : 'stable'
    },
    {
      name: 'Load Time',
      value: analyticsData.loadTime,
      unit: 'ms',
      icon: Clock,
      color: 'text-blue-400',
      trend: analyticsData.loadTime < 200 ? 'up' : analyticsData.loadTime > 500 ? 'down' : 'stable'
    },
    {
      name: 'Memory Usage',
      value: analyticsData.memoryUsage,
      unit: 'MB',
      icon: Activity,
      color: 'text-purple-400',
      trend: analyticsData.memoryUsage < 50 ? 'up' : analyticsData.memoryUsage > 100 ? 'down' : 'stable'
    }
  ];

  if (!enabled || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <motion.div
          className="bg-zion-slate-dark/95 backdrop-blur-md border border-zion-slate-light/30 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ width: 80, height: 80 }}
          animate={{ width: isExpanded ? 400 : 80, height: isExpanded ? 'auto' : 80 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zion-slate-light/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">Analytics</span>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-zion-slate-light hover:text-white transition-colors"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.div>
            </button>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 space-y-4"
              >
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{analyticsData.pageViews}</div>
                    <div className="text-xs text-zion-slate-light">Page Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{analyticsData.uniqueVisitors}</div>
                    <div className="text-xs text-zion-slate-light">Unique Visitors</div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white">Performance</h4>
                  {performanceMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-2 bg-zion-slate/50 rounded-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <metric.icon className={`w-4 h-4 ${metric.color}`} />
                        <span className="text-sm text-zion-slate-light">{metric.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-white">
                          {metric.value.toFixed(1)}{metric.unit}
                        </span>
                        <motion.div
                          animate={{ 
                            color: metric.trend === 'up' ? '#22c55e' : 
                                   metric.trend === 'down' ? '#ef4444' : '#6b7280'
                          }}
                          className="text-xs"
                        >
                          {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* User Behavior */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white">User Behavior</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-zion-slate/50 rounded-lg">
                      <div className="text-lg font-bold text-green-400">{analyticsData.averageSessionDuration}s</div>
                      <div className="text-xs text-zion-slate-light">Avg. Session</div>
                    </div>
                    <div className="text-center p-2 bg-zion-slate/50 rounded-lg">
                      <div className="text-lg font-bold text-orange-400">{analyticsData.bounceRate}%</div>
                      <div className="text-xs text-zion-slate-light">Bounce Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Collapsed State */}
          {!isExpanded && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-400">{analyticsData.performanceScore}%</div>
                <div className="text-xs text-zion-slate-light">Score</div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};