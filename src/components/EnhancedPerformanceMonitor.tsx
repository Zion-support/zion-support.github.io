import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  BarChart3,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone,
  Monitor,
  Settings,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
}

interface PerformanceRecommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: 'critical' | 'significant' | 'minor';
  action: string;
  implemented: boolean;
}

export const EnhancedPerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0
  });
  
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Performance recommendations based on metrics
  const generateRecommendations = useCallback((currentMetrics: PerformanceMetrics): PerformanceRecommendation[] => {
    const recs: PerformanceRecommendation[] = [];

    if (currentMetrics.loadTime > 3000) {
      recs.push({
        id: 'load-time',
        title: 'Optimize Page Load Time',
        description: 'Page load time is above 3 seconds, which may impact user experience',
        priority: 'high',
        impact: 'critical',
        action: 'Implement lazy loading, optimize images, and reduce bundle size',
        implemented: false
      });
    }

    if (currentMetrics.firstContentfulPaint > 1800) {
      recs.push({
        id: 'fcp',
        title: 'Improve First Contentful Paint',
        description: 'First contentful paint is above 1.8 seconds',
        priority: 'high',
        impact: 'significant',
        action: 'Optimize critical rendering path and reduce render-blocking resources',
        implemented: false
      });
    }

    if (currentMetrics.largestContentfulPaint > 2500) {
      recs.push({
        id: 'lcp',
        title: 'Optimize Largest Contentful Paint',
        description: 'Largest contentful paint is above 2.5 seconds',
        priority: 'medium',
        impact: 'significant',
        action: 'Optimize images, implement resource hints, and use CDN',
        implemented: false
      });
    }

    if (currentMetrics.cumulativeLayoutShift > 0.1) {
      recs.push({
        id: 'cls',
        title: 'Reduce Cumulative Layout Shift',
        description: 'Cumulative layout shift is above 0.1, causing visual instability',
        priority: 'medium',
        impact: 'significant',
        action: 'Set explicit dimensions for images and avoid inserting content above existing content',
        implemented: false
      });
    }

    if (currentMetrics.memoryUsage > 50) {
      recs.push({
        id: 'memory',
        title: 'Optimize Memory Usage',
        description: 'Memory usage is above 50MB, may cause performance issues',
        priority: 'medium',
        impact: 'minor',
        action: 'Implement memory leak detection and optimize component lifecycle',
        implemented: false
      });
    }

    return recs;
  }, []);

  // Collect performance metrics
  const collectMetrics = useCallback(async () => {
    try {
      // Basic performance timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];

      // Memory info (if available)
      const memory = (performance as any).memory;
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: 0, // Would need to be calculated from CLS observer
        firstInputDelay: 0, // Would need to be calculated from FID observer
        timeToInteractive: navigation ? navigation.domInteractive - navigation.fetchStart : 0,
        memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0,
        cpuUsage: 0, // Would need to be calculated from performance observer
        networkLatency: navigation ? navigation.responseStart - navigation.requestStart : 0
      };

      setMetrics(newMetrics);
      setLastUpdate(new Date());
      
      // Generate recommendations
      const newRecommendations = generateRecommendations(newMetrics);
      setRecommendations(newRecommendations);
      
    } catch (error) {
      console.error('Error collecting performance metrics:', error);
    }
  }, [generateRecommendations]);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    collectMetrics();
    
    // Set up interval for continuous monitoring
    const interval = setInterval(collectMetrics, 10000); // Every 10 seconds
    
    return () => clearInterval(interval);
  }, [collectMetrics]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Toggle visibility
  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  // Get performance score
  const getPerformanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstContentfulPaint > 1800) score -= 15;
    if (metrics.largestContentfulPaint > 2500) score -= 15;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    if (metrics.memoryUsage > 50) score -= 5;
    
    return Math.max(0, score);
  }, [metrics]);

  // Get performance status
  const getPerformanceStatus = useMemo(() => {
    if (getPerformanceScore >= 90) return { status: 'Excellent', color: 'text-green-500', bgColor: 'bg-green-100' };
    if (getPerformanceScore >= 70) return { status: 'Good', color: 'text-yellow-500', bgColor: 'bg-yellow-100' };
    if (getPerformanceScore >= 50) return { status: 'Fair', color: 'text-orange-500', bgColor: 'bg-orange-100' };
    return { status: 'Poor', color: 'text-red-500', bgColor: 'bg-red-100' };
  }, [getPerformanceScore]);

  useEffect(() => {
    if (isMonitoring) {
      startMonitoring();
    }
  }, [isMonitoring, startMonitoring]);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={toggleVisibility}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Dashboard */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <h3 className="font-semibold">Performance Monitor</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={isMonitoring ? stopMonitoring : startMonitoring}
                    className={`p-2 rounded-full transition-colors ${
                      isMonitoring ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    }`}
                  >
                    <RefreshCw className={`w-4 h-4 ${isMonitoring ? 'animate-spin' : ''}`} />
                  </button>
                  <button
                    onClick={toggleVisibility}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto">
              {/* Performance Score */}
              <div className={`p-4 rounded-xl ${getPerformanceStatus.bgColor} border`}>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Performance Score</span>
                  <span className={`text-2xl font-bold ${getPerformanceStatus.color}`}>
                    {getPerformanceScore}
                  </span>
                </div>
                <div className={`text-sm ${getPerformanceStatus.color} mt-1`}>
                  {getPerformanceStatus.status}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>Load Time</span>
                  </div>
                  <div className="text-lg font-semibold mt-1">
                    {metrics.loadTime > 0 ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
                  </div>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Zap className="w-4 h-4" />
                    <span>FCP</span>
                  </div>
                  <div className="text-lg font-semibold mt-1">
                    {metrics.firstContentfulPaint > 0 ? `${Math.round(metrics.firstContentfulPaint)}ms` : 'N/A'}
                  </div>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>LCP</span>
                  </div>
                  <div className="text-lg font-semibold mt-1">
                    {metrics.largestContentfulPaint > 0 ? `${Math.round(metrics.largestContentfulPaint)}ms` : 'N/A'}
                  </div>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <HardDrive className="w-4 h-4" />
                    <span>Memory</span>
                  </div>
                  <div className="text-lg font-semibold mt-1">
                    {metrics.memoryUsage > 0 ? `${metrics.memoryUsage}MB` : 'N/A'}
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              {recommendations.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Recommendations</h4>
                  {recommendations.map((rec) => (
                    <div
                      key={rec.id}
                      className={`p-3 rounded-lg border-l-4 ${
                        rec.priority === 'high' ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
                        rec.priority === 'medium' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' :
                        'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {rec.priority === 'high' ? (
                          <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900 dark:text-white">{rec.title}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {rec.description}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 font-medium">
                            Action: {rec.action}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Last Update */}
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center pt-2 border-t">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedPerformanceMonitor;