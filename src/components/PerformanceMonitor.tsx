import React, { useState, useEffect, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  memoryUsage?: number;
  networkInfo?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showDashboard?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  onMetricsUpdate, 
  showDashboard = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [alerts, setAlerts] = useState<string[]>([]);
  const observerRef = useRef<PerformanceObserver | null>(null);

  useEffect(() => {
    if (isMonitoring) {
      startPerformanceMonitoring();
    }
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isMonitoring]);

  const startPerformanceMonitoring = () => {
    // Get basic performance metrics
    const getBasicMetrics = (): PerformanceMetrics => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.fetchStart;
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
      
      const firstContentfulPaint = paintEntries.find(
        entry => entry.name === 'first-contentful-paint'
      )?.startTime || 0;

      return {
        loadTime,
        domContentLoaded,
        firstContentfulPaint,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
        timeToInteractive: 0,
        memoryUsage: (performance as any).memory?.usedJSHeapSize,
        networkInfo: getNetworkInfo()
      };
    };

    // Get network information
    const getNetworkInfo = () => {
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      return connection ? {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
      } : undefined;
    };

    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if (!('PerformanceObserver' in window)) return;

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        setMetrics(prev => prev ? {
          ...prev,
          largestContentfulPaint: lastEntry.startTime
        } : null);

        // Check for performance issues
        if (lastEntry.startTime > 2500) {
          addAlert(`LCP exceeded threshold: ${lastEntry.startTime.toFixed(0)}ms (threshold: 2500ms)`);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;
          
          setMetrics(prev => prev ? {
            ...prev,
            firstInputDelay: fid
          } : null);

          if (fid > 100) {
            addAlert(`FID exceeded threshold: ${fid.toFixed(0)}ms (threshold: 100ms)`);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });

        setMetrics(prev => prev ? {
          ...prev,
          cumulativeLayoutShift: clsValue
        } : null);

        if (clsValue > 0.1) {
          addAlert(`CLS exceeded threshold: ${clsValue.toFixed(3)} (threshold: 0.1)`);
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      observerRef.current = lcpObserver; // Store reference for cleanup
    };

    // Monitor resource loading
    const monitorResources = () => {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.duration > 1000) { // Resources taking more than 1 second
            addAlert(`Slow resource load: ${entry.name} took ${entry.duration.toFixed(0)}ms`);
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    };

    // Monitor memory usage
    const monitorMemory = () => {
      if ((performance as any).memory) {
        const checkMemory = () => {
          const memory = (performance as any).memory;
          const usedMB = memory.usedJSHeapSize / 1024 / 1024;
          const limitMB = memory.jsHeapSizeLimit / 1024 / 1024;
          
          setMetrics(prev => prev ? {
            ...prev,
            memoryUsage: memory.usedJSHeapSize
          } : null);

          if (usedMB > limitMB * 0.8) { // More than 80% of limit
            addAlert(`High memory usage: ${usedMB.toFixed(1)}MB (${((usedMB/limitMB)*100).toFixed(1)}%)`);
          }
        };

        setInterval(checkMemory, 5000); // Check every 5 seconds
      }
    };

    // Initialize monitoring
    const initialMetrics = getBasicMetrics();
    setMetrics(initialMetrics);
    
    monitorCoreWebVitals();
    monitorResources();
    monitorMemory();

    // Update metrics periodically
    const updateInterval = setInterval(() => {
      const updatedMetrics = getBasicMetrics();
      setMetrics(updatedMetrics);
      if (onMetricsUpdate) {
        onMetricsUpdate(updatedMetrics);
      }
    }, 10000); // Update every 10 seconds

    return () => {
      clearInterval(updateInterval);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  };

  const addAlert = (message: string) => {
    setAlerts(prev => [...prev.slice(-4), message]); // Keep only last 5 alerts
  };

  const getPerformanceScore = (): number => {
    if (!metrics) return 0;

    let score = 100;

    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint > 4000) score -= 30;
    else if (metrics.largestContentfulPaint > 2500) score -= 20;
    else if (metrics.largestContentfulPaint > 0) score -= 10;

    // FID scoring (0-100)
    if (metrics.firstInputDelay > 300) score -= 30;
    else if (metrics.firstInputDelay > 100) score -= 20;
    else if (metrics.firstInputDelay > 0) score -= 10;

    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift > 0.25) score -= 30;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 20;
    else if (metrics.cumulativeLayoutShift > 0) score -= 10;

    // Load time scoring
    if (metrics.loadTime > 5000) score -= 20;
    else if (metrics.loadTime > 3000) score -= 10;

    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number): { grade: string; color: string } => {
    if (score >= 90) return { grade: 'A', color: 'text-green-600' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-600' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-600' };
    if (score >= 60) return { grade: 'D', color: 'text-red-600' };
    return { grade: 'F', color: 'text-red-800' };
  };

  if (!showDashboard) {
    return null;
  }

  const score = getPerformanceScore();
  const grade = getPerformanceGrade(score);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Performance Monitor</h3>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className={`text-3xl font-bold ${grade.color}`}>{grade.grade}</div>
            <div className="text-sm text-gray-500">Score: {score}</div>
          </div>
          <button
            onClick={() => setIsMonitoring(!isMonitoring)}
            className={`px-3 py-1 rounded text-sm ${
              isMonitoring 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}
          >
            {isMonitoring ? 'Monitoring' : 'Stopped'}
          </button>
        </div>
      </div>

      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-blue-600 text-sm font-medium">Load Time</div>
            <div className="text-2xl font-bold text-blue-900">
              {metrics.loadTime.toFixed(0)}ms
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-green-600 text-sm font-medium">First Contentful Paint</div>
            <div className="text-2xl font-bold text-green-900">
              {metrics.firstContentfulPaint.toFixed(0)}ms
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-purple-600 text-sm font-medium">Largest Contentful Paint</div>
            <div className="text-2xl font-bold text-purple-900">
              {metrics.largestContentfulPaint.toFixed(0)}ms
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-yellow-600 text-sm font-medium">First Input Delay</div>
            <div className="text-2xl font-bold text-yellow-900">
              {metrics.firstInputDelay.toFixed(0)}ms
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <div className="text-red-600 text-sm font-medium">Cumulative Layout Shift</div>
            <div className="text-2xl font-bold text-red-900">
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </div>
          </div>

          {metrics.memoryUsage && (
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="text-indigo-600 text-sm font-medium">Memory Usage</div>
              <div className="text-2xl font-bold text-indigo-900">
                {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB
              </div>
            </div>
          )}
        </div>
      )}

      {metrics?.networkInfo && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="text-lg font-medium text-gray-900 mb-3">Network Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <span className="text-gray-600">Connection Type:</span>
              <span className="ml-2 font-semibold">{metrics.networkInfo.effectiveType}</span>
            </div>
            <div>
              <span className="text-gray-600">Download Speed:</span>
              <span className="ml-2 font-semibold">{metrics.networkInfo.downlink} Mbps</span>
            </div>
            <div>
              <span className="text-gray-600">Round Trip Time:</span>
              <span className="ml-2 font-semibold">{metrics.networkInfo.rtt} ms</span>
            </div>
          </div>
        </div>
      )}

      {alerts.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="text-lg font-medium text-red-900 mb-3">Performance Alerts</h4>
          <div className="space-y-2">
            {alerts.map((alert, index) => (
              <div key={index} className="text-red-700 text-sm">
                ⚠️ {alert}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;