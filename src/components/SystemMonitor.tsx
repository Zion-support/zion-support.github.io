'use client';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  memoryUsage: number;
  performanceScore: number;
}

interface ErrorStats {
  totalErrors: number;
  jsErrors: number;
  networkErrors: number;
}

// Collect basic performance metrics
const collectPerformanceMetrics = (): PerformanceMetrics | null => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  const navigation = window.performance.timing;
  const paint = window.performance.getEntriesByType('paint');
  
  return {
    loadTime: navigation.loadEventEnd - navigation.navigationStart,
    firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
    memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
    performanceScore: 0
  };
};

// Helper functions
const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
  if (!metrics) return 0;
  
  let score = 100;
  
  // Deduct points for slow load times
  if (metrics.loadTime > 3000) score -= 30;
  else if (metrics.loadTime > 2000) score -= 20;
  else if (metrics.loadTime > 1000) score -= 10;
  
  // Deduct points for slow FCP
  if (metrics.firstContentfulPaint > 2000) score -= 25;
  else if (metrics.firstContentfulPaint > 1500) score -= 15;
  else if (metrics.firstContentfulPaint > 1000) score -= 10;
  
  // Deduct points for high memory usage
  if (metrics.memoryUsage > 100 * 1024 * 1024) score -= 20; // 100MB
  else if (metrics.memoryUsage > 50 * 1024 * 1024) score -= 10; // 50MB
  
  return Math.max(0, score);
};

const SystemMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [errorStats, setErrorStats] = useState<ErrorStats>({
    totalErrors: 0,
    jsErrors: 0,
    networkErrors: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMetrics = () => {
      const newMetrics = collectPerformanceMetrics();
      if (newMetrics) {
        newMetrics.performanceScore = calculatePerformanceScore(newMetrics);
        setMetrics(newMetrics);
      }
    };

    // Initial metrics collection
    updateMetrics();

    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000);

    // Error tracking
    const handleError = (event: ErrorEvent) => {
      setErrorStats(prev => ({
        ...prev,
        totalErrors: prev.totalErrors + 1,
        jsErrors: prev.jsErrors + 1
      }));
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      setErrorStats(prev => ({
        ...prev,
        totalErrors: prev.totalErrors + 1,
        jsErrors: prev.jsErrors + 1
      }));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      clearInterval(interval);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        Show System Monitor
      </button>
    );
  }

  if (!metrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">System Monitor</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>
        <p>Loading metrics...</p>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">System Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xl"
        >
          ×
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-300">Performance Score</span>
            <span className={`font-bold ${getScoreColor(metrics.performanceScore)}`}>
              {metrics.performanceScore}/100
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                metrics.performanceScore >= 80 ? 'bg-green-400' :
                metrics.performanceScore >= 60 ? 'bg-yellow-400' : 'bg-red-400'
              }`}
              style={{ width: `${metrics.performanceScore}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-gray-400">Load Time:</span>
            <div className="font-mono">{(metrics.loadTime / 1000).toFixed(2)}s</div>
          </div>
          <div>
            <span className="text-gray-400">FCP:</span>
            <div className="font-mono">{(metrics.firstContentfulPaint / 1000).toFixed(2)}s</div>
          </div>
          <div>
            <span className="text-gray-400">Memory:</span>
            <div className="font-mono">{formatBytes(metrics.memoryUsage)}</div>
          </div>
          <div>
            <span className="text-gray-400">Errors:</span>
            <div className="font-mono">{errorStats.totalErrors}</div>
          </div>
        </div>

        {errorStats.totalErrors > 0 && (
          <div className="pt-2 border-t border-gray-700">
            <div className="text-xs text-gray-400">
              JS Errors: {errorStats.jsErrors} | Network: {errorStats.networkErrors}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemMonitor;