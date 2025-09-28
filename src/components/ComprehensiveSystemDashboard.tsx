import React, { useState, useEffect } from 'react';
import { errorRecoverySystem as errorRecovery } from '../utils/errorRecovery';
import { advancedAnalytics } from '../utils/advancedAnalytics';
import { smartCache } from '../utils/smartCache';

interface ComprehensiveSystemDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const ComprehensiveSystemDashboard: React.FC<ComprehensiveSystemDashboardProps> = ({ isVisible, onClose }) => {
  const [systemStats, setSystemStats] = useState({
    errorCount: 0,
    analyticsEvents: 0,
    cacheSize: 0,
    cacheHitRate: 0,
    userBehavior: {
      pageViews: 0,
      clicks: 0,
      scrollDepth: 0,
      timeOnPage: 0,
      interactions: 0
    }
  });

  const [performanceMetrics, setPerformanceMetrics] = useState({
    memoryUsage: 0,
    loadTime: 0,
    fps: 0
  });

  useEffect(() => {
    if (!isVisible) return;

    const updateStats = () => {
      setSystemStats({
        errorCount: errorRecovery.getErrorCount(),
        analyticsEvents: advancedAnalytics.getEvents().length,
        cacheSize: smartCache.size(),
        cacheHitRate: smartCache.getStats().hitRate,
        userBehavior: advancedAnalytics.getUserBehavior()
      });

      // Get performance metrics
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setPerformanceMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024
        }));
      }
    };

    updateStats();
    const interval = setInterval(updateStats, 2000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const getStatusColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-600 bg-green-100';
    if (value <= thresholds.warning) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const exportSystemData = () => {
    const data = {
      systemStats,
      performanceMetrics,
      analyticsData: advancedAnalytics.exportData(),
      cacheStats: smartCache.getStats(),
      timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'system-dashboard-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearAllData = () => {
    errorRecovery.reset();
    advancedAnalytics.clearData();
    smartCache.clear();
    setSystemStats({
      errorCount: 0,
      analyticsEvents: 0,
      cacheSize: 0,
      cacheHitRate: 0,
      userBehavior: {
        pageViews: 0,
        clicks: 0,
        scrollDepth: 0,
        timeOnPage: 0,
        interactions: 0
      }
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">🔧 Comprehensive System Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close dashboard"
          >
            ×
          </button>
        </div>

        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className={`p-4 rounded-lg ${getStatusColor(systemStats.errorCount, { good: 0, warning: 2 })}`}>
            <h3 className="text-sm font-medium">Errors</h3>
            <p className="text-2xl font-bold">{systemStats.errorCount}</p>
          </div>
          <div className={`p-4 rounded-lg ${getStatusColor(systemStats.cacheHitRate * 100, { good: 80, warning: 60 })}`}>
            <h3 className="text-sm font-medium">Cache Hit Rate</h3>
            <p className="text-2xl font-bold">{(systemStats.cacheHitRate * 100).toFixed(1)}%</p>
          </div>
          <div className="p-4 rounded-lg bg-blue-100">
            <h3 className="text-sm font-medium text-blue-700">Analytics Events</h3>
            <p className="text-2xl font-bold text-blue-600">{systemStats.analyticsEvents}</p>
          </div>
          <div className="p-4 rounded-lg bg-purple-100">
            <h3 className="text-sm font-medium text-purple-700">Cache Size</h3>
            <p className="text-2xl font-bold text-purple-600">{systemStats.cacheSize}</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">📊 Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600">Memory Usage</h4>
              <p className="text-2xl font-bold text-blue-600">{performanceMetrics.memoryUsage.toFixed(1)} MB</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600">Load Time</h4>
              <p className="text-2xl font-bold text-green-600">{performanceMetrics.loadTime.toFixed(0)} ms</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600">FPS</h4>
              <p className="text-2xl font-bold text-purple-600">{performanceMetrics.fps}</p>
            </div>
          </div>
        </div>

        {/* User Behavior */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">👤 User Behavior</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600">Page Views</h4>
              <p className="text-xl font-bold text-blue-600">{systemStats.userBehavior.pageViews}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600">Clicks</h4>
              <p className="text-xl font-bold text-green-600">{systemStats.userBehavior.clicks}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600">Scroll Depth</h4>
              <p className="text-xl font-bold text-purple-600">{systemStats.userBehavior.scrollDepth.toFixed(1)}%</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600">Time on Page</h4>
              <p className="text-xl font-bold text-orange-600">{Math.round(systemStats.userBehavior.timeOnPage / 1000)}s</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600">Interactions</h4>
              <p className="text-xl font-bold text-red-600">{systemStats.userBehavior.interactions}</p>
            </div>
          </div>
        </div>

        {/* System Actions */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">⚡ System Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={exportSystemData}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Export Data
            </button>
            <button
              onClick={clearAllData}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Clear All Data
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Reload App
            </button>
            <button
              onClick={() => {
                if ('caches' in window) {
                  caches.keys().then(names => {
                    names.forEach(name => caches.delete(name));
                  });
                }
                localStorage.clear();
                sessionStorage.clear();
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Clear Cache
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveSystemDashboard;