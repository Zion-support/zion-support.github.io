'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  AnalyticsManager, 
  PerformanceMonitor, 
  ErrorTracker, 
  UptimeMonitor,
  ResourceMonitor,
  MemoryMonitor
} from '@/lib/monitoring';

interface PerformanceContextType {
  analytics: AnalyticsManager;
  performanceMonitor: PerformanceMonitor;
  errorTracker: ErrorTracker;
  uptimeMonitor: UptimeMonitor;
  resourceMonitor: ResourceMonitor;
  memoryMonitor: MemoryMonitor;
  isMonitoring: boolean;
  coreWebVitals: any;
  memoryUsage: any;
  uptime: number;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
};

interface PerformanceProviderProps {
  children: React.ReactNode;
  enableMonitoring?: boolean;
}

export const PerformanceProvider: React.FC<PerformanceProviderProps> = ({ 
  children, 
  enableMonitoring = true 
}) => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [coreWebVitals, setCoreWebVitals] = useState<any>({});
  const [memoryUsage, setMemoryUsage] = useState<any>(null);
  const [uptime, setUptime] = useState(0);

  // Initialize monitoring instances
  const analytics = new AnalyticsManager(enableMonitoring);
  const performanceMonitor = new PerformanceMonitor();
  const errorTracker = new ErrorTracker(enableMonitoring);
  const uptimeMonitor = new UptimeMonitor();
  const resourceMonitor = new ResourceMonitor();
  const memoryMonitor = new MemoryMonitor();

  useEffect(() => {
    if (!enableMonitoring) return;

    setIsMonitoring(true);

    // Track page load
    analytics.track({
      name: 'page_load',
      properties: {
        url: window.location.href,
        timestamp: Date.now()
      }
    });

    // Set up performance monitoring
    const updateMetrics = () => {
      setCoreWebVitals(performanceMonitor.getCoreWebVitals());
      setMemoryUsage(memoryMonitor.getMemoryUsage());
      setUptime(uptimeMonitor.getUptime());
    };

    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000);
    updateMetrics(); // Initial update

    // Track performance metrics
    const trackPerformance = () => {
      const vitals = performanceMonitor.getCoreWebVitals();
      if (vitals.FCP || vitals.LCP || vitals.FID || vitals.CLS) {
        analytics.track({
          name: 'core_web_vitals',
          properties: vitals
        });
      }
    };

    // Track performance after page load
    setTimeout(trackPerformance, 2000);

    // Track memory usage if high
    const checkMemoryUsage = () => {
      const usage = memoryMonitor.getMemoryUsage();
      if (usage && usage.percentage > 80) {
        analytics.track({
          name: 'high_memory_usage',
          properties: usage
        });
      }
    };

    const memoryInterval = setInterval(checkMemoryUsage, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(memoryInterval);
      performanceMonitor.destroy();
    };
  }, [enableMonitoring, analytics, performanceMonitor, memoryMonitor, uptimeMonitor]);

  const value: PerformanceContextType = {
    analytics,
    performanceMonitor,
    errorTracker,
    uptimeMonitor,
    resourceMonitor,
    memoryMonitor,
    isMonitoring,
    coreWebVitals,
    memoryUsage,
    uptime
  };

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
};

// Performance metrics display component
export const PerformanceMetrics: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { coreWebVitals, memoryUsage, uptime, isMonitoring } = usePerformance();

  if (!isMonitoring) return null;

  return (
    <div className={`performance-metrics ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Core Web Vitals */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-medium text-gray-900 mb-2">Core Web Vitals</h4>
          <div className="space-y-1 text-sm">
            {coreWebVitals.FCP && (
              <div>FCP: {Math.round(coreWebVitals.FCP)}ms</div>
            )}
            {coreWebVitals.LCP && (
              <div>LCP: {Math.round(coreWebVitals.LCP)}ms</div>
            )}
            {coreWebVitals.FID && (
              <div>FID: {Math.round(coreWebVitals.FID)}ms</div>
            )}
            {coreWebVitals.CLS && (
              <div>CLS: {coreWebVitals.CLS.toFixed(3)}</div>
            )}
          </div>
        </div>

        {/* Memory Usage */}
        {memoryUsage && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-medium text-gray-900 mb-2">Memory Usage</h4>
            <div className="space-y-1 text-sm">
              <div>Used: {memoryUsage.used}MB</div>
              <div>Total: {memoryUsage.total}MB</div>
              <div>Limit: {memoryUsage.limit}MB</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    memoryUsage.percentage > 80 ? 'bg-red-500' : 
                    memoryUsage.percentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${memoryUsage.percentage}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500">
                {memoryUsage.percentage.toFixed(1)}% used
              </div>
            </div>
          </div>
        )}

        {/* Uptime */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-medium text-gray-900 mb-2">Uptime</h4>
          <div className="text-sm">
            <div>Uptime: {(uptime * 100).toFixed(1)}%</div>
            <div className="text-xs text-gray-500">
              Since page load
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-medium text-gray-900 mb-2">Status</h4>
          <div className="space-y-1 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Monitoring Active
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Analytics Tracking
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Error boundary component
export class PerformanceErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Track error in analytics
    if (typeof window !== 'undefined') {
      const analytics = new AnalyticsManager();
      analytics.track({
        name: 'react_error_boundary',
        properties: {
          error: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack
        }
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary p-4 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-lg font-semibold text-red-800 mb-2">
            Something went wrong
          </h2>
          <p className="text-red-600 mb-4">
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}