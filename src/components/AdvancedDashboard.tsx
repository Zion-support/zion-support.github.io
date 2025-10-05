import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  id: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  events: Array<{
    event: string;
    timestamp: number;
    properties: Record<string, any>;
  }>;
  deviceInfo: {
    screenResolution: string;
    language: string;
    timezone: string;
  };
}

interface CacheData {
  size: number;
  totalSize: number;
  maxSize: number;
  hitRate: number;
}

interface PerformanceData {
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
}

interface SecurityData {
  threatsBlocked: number;
  vulnerabilities: number;
  securityScore: number;
}

interface UXData {
  userSatisfaction: number;
  bounceRate: number;
  conversionRate: number;
}

interface DashboardData {
  analytics: AnalyticsData;
  cache: CacheData;
  performance: PerformanceData;
  security: SecurityData;
  ux: UXData;
}

const AdvancedDashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<DashboardData | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (isOpen) {
      updateData();
      const interval = setInterval(updateData, 5000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const updateData = () => {
    // Mock analytics data
    const analyticsData: AnalyticsData = {
      id: `session_${Date.now()}`,
      startTime: Date.now() - 300000, // 5 minutes ago
      lastActivity: Date.now(),
      pageViews: Math.floor(Math.random() * 100),
      events: [],
      deviceInfo: {
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    };

    const cache: CacheData = {
      size: Math.floor(Math.random() * 1000),
      totalSize: Math.floor(Math.random() * 10000),
      maxSize: 10000,
      hitRate: Math.random() * 100
    };

    const performance: PerformanceData = {
      memoryUsage: Math.floor(Math.random() * 100),
      loadTime: Math.floor(Math.random() * 2000),
      renderTime: Math.floor(Math.random() * 100)
    };

    const security: SecurityData = {
      threatsBlocked: Math.floor(Math.random() * 50),
      vulnerabilities: Math.floor(Math.random() * 10),
      securityScore: Math.floor(Math.random() * 100)
    };

    const ux: UXData = {
      userSatisfaction: Math.floor(Math.random() * 100),
      bounceRate: Math.random() * 100,
      conversionRate: Math.random() * 100
    };

    setData({
      analytics: analyticsData,
      cache: cache,
      performance: performance,
      security: security,
      ux: ux
    });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Open Dashboard
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Advanced Dashboard
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          {!data ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-blue-600 dark:text-blue-400">Page Views</h3>
                  <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">{data.analytics.pageViews}</p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-green-600 dark:text-green-400">Cache Hit Rate</h3>
                  <p className="text-3xl font-bold text-green-900 dark:text-green-100">{data.cache.hitRate.toFixed(1)}%</p>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Memory Usage</h3>
                  <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">{data.performance.memoryUsage}%</p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-purple-600 dark:text-purple-400">Security Score</h3>
                  <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">{data.security.securityScore}</p>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Load Time</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{data.performance.loadTime}ms</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Render Time</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{data.performance.renderTime}ms</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Cache Size</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{data.cache.size}MB</p>
                  </div>
                </div>
              </div>

              {/* Security & UX */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">Security</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-red-700 dark:text-red-300">Threats Blocked: {data.security.threatsBlocked}</p>
                    <p className="text-sm text-red-700 dark:text-red-300">Vulnerabilities: {data.security.vulnerabilities}</p>
                  </div>
                </div>
                
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">User Experience</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">Satisfaction: {data.ux.userSatisfaction}%</p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">Bounce Rate: {data.ux.bounceRate.toFixed(1)}%</p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">Conversion: {data.ux.conversionRate.toFixed(1)}%</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedDashboard;