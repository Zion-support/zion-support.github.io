import React, { useState, useEffect, useCallback } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
// import advancedPerformanceOptimizer from '../utils/advancedPerformanceOptimizer';
import { enhancedSecurityManager } from '../utils/enhancedSecurityManager';
import { enhancedPerformanceMonitor } from '../utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from '../utils/enhancedAnalytics';
// import { advancedAnalytics } from '../utils/advancedAnalytics';
// import { smartCache } from '../utils/smartCache';
// import { errorRecoverySystem } from '../utils/errorRecovery';

interface SystemMetrics {
  performance: {
    score: number;
    lcp: number;
    fcp: number;
    ttfb: number;
  };
  security: {
    score: number;
    totalEvents: number;
    criticalEvents: number;
  };
  analytics: {
    pageViews: number;
    uniqueVisitors: number;
    bounceRate: number;
  };
  system: {
    memoryUsage: number;
    cpuUsage: number;
    networkLatency: number;
  };
}

interface SystemDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const ComprehensiveSystemDashboard: React.FC<SystemDashboardProps> = ({
  isVisible,
  onClose
}) => {
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null);
  interface RealTimeDataPoint {
    timestamp: number;
    value: number;
    metric: string;
  }

  const [realTimeData, setRealTimeData] = useState<RealTimeDataPoint[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'security' | 'analytics' | 'system'>('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isVisible) {
      loadSystemMetrics();
      const interval = setInterval(loadSystemMetrics, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, loadSystemMetrics]);

  const loadSystemMetrics = useCallback(async () => {
    try {
      setIsLoading(true);
      
      // Load performance metrics
      const performanceData = await enhancedPerformanceMonitor.getMetrics();
      const performanceScore = 85; // Mock performance score
      
      // Load security metrics
      const securityData = enhancedSecurityManager.getSecurityReport();
      
      // Load analytics data
      const analyticsReport = enhancedAnalytics.generateReport();
      // const advancedEvents = advancedAnalytics?.getEvents();
      
      // Load system metrics
      const systemData = {
        memoryUsage: ((performance as any).memory?.usedJSHeapSize ?? 0) / 1024 / 1024,
        cpuUsage: Math.random() * 100, // Placeholder
        networkLatency: Math.random() * 100 // Placeholder
      };

      setMetrics({
        performance: {
          score: performanceScore,
          lcp: performanceData.get('lcp')?.[0]?.value || 0,
          fcp: performanceData.get('fcp')?.[0]?.value || 0,
          ttfb: performanceData.get('ttfb')?.[0]?.value || 0
        },
        security: {
          score: enhancedSecurityManager.getSecurityScore(),
          totalEvents: securityData.totalEvents || 0,
          criticalEvents: securityData.eventsBySeverity?.critical || 0
        },
        analytics: {
          pageViews: analyticsReport.pageViews || 0,
          uniqueVisitors: analyticsReport.uniqueVisitors || 0,
          bounceRate: analyticsReport.bounceRate || 0
        },
        system: systemData
      });

      // Generate real-time data
      const realTime: RealTimeDataPoint[] = Array.from({ length: 20 }, (_, i) => ({
        timestamp: Date.now() - (19 - i) * 1000,
        value: Math.random() * 100,
        metric: 'performance'
      }));
      setRealTimeData(realTime as any);
    } catch (error) {
      console.error('Failed to load system metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // const exportSystemData = () => {
  //   const data = {
  //     metrics,
  //     realTimeData,
  //     timestamp: new Date().toISOString()
  //   };

  //   const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'system-dashboard-data.json';
  //   a.click();
  //   URL.revokeObjectURL(url);
  // };

  // const clearAllData = () => {
  //   // errorRecoverySystem?.reset();
  //   // advancedAnalytics?.clearData();
  //   // smartCache?.clear();
  //   setMetrics(null);
  //   setRealTimeData([]);
  // };

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#10B981';
    if (score >= 70) return '#F59E0B';
    return '#EF4444';
  };

  if (!isVisible) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'performance', label: 'Performance', icon: '⚡' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'system', label: 'System', icon: '🖥️' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Comprehensive System Dashboard</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'performance' | 'security' | 'analytics')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && metrics && (
                <div className="space-y-6">
                  {/* Key Metrics Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Performance Score</h3>
                      <div className="text-3xl font-bold">{metrics.performance.score}</div>
                      <div className="text-blue-100">Core Web Vitals</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Security Score</h3>
                      <div className="text-3xl font-bold">{metrics.security.score}</div>
                      <div className="text-green-100">Security Events</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Page Views</h3>
                      <div className="text-3xl font-bold">{metrics.analytics.pageViews.toLocaleString()}</div>
                      <div className="text-purple-100">Total Views</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Memory Usage</h3>
                      <div className="text-3xl font-bold">{metrics.system.memoryUsage.toFixed(1)}MB</div>
                      <div className="text-orange-100">System Memory</div>
                    </div>
                  </div>

                  {/* Real-time Performance Chart */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Real-time System Performance</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={realTimeData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="performance" stroke="#3B82F6" strokeWidth={2} />
                          <Line type="monotone" dataKey="security" stroke="#10B981" strokeWidth={2} />
                          <Line type="monotone" dataKey="memory" stroke="#F59E0B" strokeWidth={2} />
                          <Line type="monotone" dataKey="network" stroke="#EF4444" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              )}

              {/* Performance Tab */}
              {activeTab === 'performance' && metrics && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Performance Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Largest Contentful Paint</h4>
                      <div className="text-3xl font-bold" style={{ color: getScoreColor(100 - (metrics.performance.lcp / 2.5) * 100) }}>
                        {metrics.performance.lcp.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">First Contentful Paint</h4>
                      <div className="text-3xl font-bold" style={{ color: getScoreColor(100 - (metrics.performance.fcp / 1.8) * 100) }}>
                        {metrics.performance.fcp.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Time to First Byte</h4>
                      <div className="text-3xl font-bold" style={{ color: getScoreColor(100 - (metrics.performance.ttfb / 600) * 100) }}>
                        {metrics.performance.ttfb.toFixed(0)}ms
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && metrics && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Security Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Security Score</h4>
                      <div className="text-3xl font-bold" style={{ color: getScoreColor(metrics.security.score) }}>
                        {metrics.security.score}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Total Events</h4>
                      <div className="text-3xl font-bold">{metrics.security.totalEvents}</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Critical Events</h4>
                      <div className="text-3xl font-bold text-red-600">{metrics.security.criticalEvents}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Analytics Tab */}
              {activeTab === 'analytics' && metrics && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Analytics Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Page Views</h4>
                      <div className="text-3xl font-bold">{metrics.analytics.pageViews.toLocaleString()}</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Unique Visitors</h4>
                      <div className="text-3xl font-bold">{metrics.analytics.uniqueVisitors.toLocaleString()}</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Bounce Rate</h4>
                      <div className="text-3xl font-bold">{metrics.analytics.bounceRate.toFixed(1)}%</div>
                    </div>
                  </div>
                </div>
              )}

              {/* System Tab */}
              {activeTab === 'system' && metrics && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">System Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Memory Usage</h4>
                      <div className="text-3xl font-bold">{metrics.system.memoryUsage.toFixed(1)}MB</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">CPU Usage</h4>
                      <div className="text-3xl font-bold">{metrics.system.cpuUsage.toFixed(1)}%</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">Network Latency</h4>
                      <div className="text-3xl font-bold">{metrics.system.networkLatency.toFixed(1)}ms</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveSystemDashboard;