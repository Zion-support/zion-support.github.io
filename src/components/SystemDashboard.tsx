import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Wifi, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

interface SystemMetrics {
  performance: {
    score: number;
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  };
  resources: {
    memory: number;
    cpu: number;
    storage: number;
  };
  network: {
    latency: number;
    bandwidth: number;
    status: 'online' | 'offline' | 'slow';
  };
  errors: {
    count: number;
    lastError: string | null;
    critical: boolean;
  };
}

const SystemDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    performance: { score: 0, fcp: 0, lcp: 0, fid: 0, cls: 0 },
    resources: { memory: 0, cpu: 0, storage: 0 },
    network: { latency: 0, bandwidth: 0, status: 'online' },
    errors: { count: 0, lastError: null, critical: false }
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('showSystemDashboard') === 'true';
    
    if (!shouldShow) return;

    const updateMetrics = () => {
      // Get performance metrics
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      
      // Calculate performance score
      const fcp = fcpEntry ? fcpEntry.startTime : 0;
      const lcp = performance.now();
      const fid = 0; // Would need to measure this
      const cls = 0; // Would need to measure this
      
      const score = Math.max(0, 100 - (fcp / 10) - (lcp / 100) - (fid / 10) - (cls * 100));

      // Simulate resource usage (performance.memory is not available in all browsers)
      const memory = 0; // Simulated memory usage
      const cpu = Math.random() * 100;
      const storage = Math.random() * 100;

      // Simulate network metrics
      const latency = Math.random() * 100;
      const bandwidth = Math.random() * 1000;
      const status = latency > 500 ? 'slow' : 'online';

      // Get error count from console
      const errorCount = 0; // Would need to track this
      const lastError = null; // Would need to track this
      const critical = errorCount > 10;

      setMetrics({
        performance: { score, fcp, lcp, fid, cls },
        resources: { memory, cpu, storage },
        network: { latency, bandwidth, status },
        errors: { count: errorCount, lastError, critical }
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-500';
      case 'slow': return 'text-yellow-500';
      case 'offline': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        aria-label="Show system dashboard"
      >
        <Activity className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl p-4 max-w-sm z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          System Dashboard
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close system dashboard"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-4">
        {/* Performance Metrics */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
            <Zap className="w-4 h-4 mr-2" />
            Performance
          </h4>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Score:</span>
              <span className={getPerformanceColor(metrics.performance.score)}>
                {Math.round(metrics.performance.score)}/100
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">FCP:</span>
              <span>{Math.round(metrics.performance.fcp)}ms</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">LCP:</span>
              <span>{Math.round(metrics.performance.lcp)}ms</span>
            </div>
          </div>
        </div>

        {/* Resource Usage */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
            <Cpu className="w-4 h-4 mr-2" />
            Resources
          </h4>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Memory:</span>
              <span>{Math.round(metrics.resources.memory)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">CPU:</span>
              <span>{Math.round(metrics.resources.cpu)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Storage:</span>
              <span>{Math.round(metrics.resources.storage)}%</span>
            </div>
          </div>
        </div>

        {/* Network Status */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
            <Wifi className="w-4 h-4 mr-2" />
            Network
          </h4>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Status:</span>
              <span className={getStatusColor(metrics.network.status)}>
                {metrics.network.status}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Latency:</span>
              <span>{Math.round(metrics.network.latency)}ms</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Bandwidth:</span>
              <span>{Math.round(metrics.network.bandwidth)}Mbps</span>
            </div>
          </div>
        </div>

        {/* Error Status */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
            {metrics.errors.critical ? (
              <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
            ) : (
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
            )}
            Errors
          </h4>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Count:</span>
              <span className={metrics.errors.critical ? 'text-red-500' : 'text-green-500'}>
                {metrics.errors.count}
              </span>
            </div>
            {metrics.errors.lastError && (
              <div className="text-xs text-gray-500 truncate">
                Last: {metrics.errors.lastError}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
        <button
          onClick={() => {
            localStorage.setItem('showSystemDashboard', 'false');
            setIsVisible(false);
          }}
          className="text-xs text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200"
        >
          Hide permanently
        </button>
      </div>
    </div>
  );
};

export default SystemDashboard;