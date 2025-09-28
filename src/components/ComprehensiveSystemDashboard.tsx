import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { advancedPerformanceOptimizer } from '../utils/advancedPerformanceOptimizer';
import { enhancedSecurityManager } from '../utils/enhancedSecurityManager';
import { enhancedPerformanceMonitor } from '../utils/enhancedPerformanceMonitor';
import { enhancedAnalytics } from '../utils/enhancedAnalytics';

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
  const [realTimeData, setRealTimeData] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'security' | 'analytics' | 'system'>('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isVisible) {
      initializeDashboard();
      startRealTimeMonitoring();
    }
  }, [isVisible]);

  const initializeDashboard = async () => {
    setIsLoading(true);
    try {
      await Promise.all([
        advancedPerformanceOptimizer.initialize(),
        enhancedSecurityManager.initialize(),
        Promise.resolve(), // enhancedPerformanceMonitor.initialize(),
        enhancedAnalytics.initialize()
      ]);

      const systemMetrics = await collectSystemMetrics();
      setMetrics(systemMetrics);
    } catch (error) {
      console.error('Failed to initialize dashboard:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const collectSystemMetrics = async (): Promise<SystemMetrics> => {
    const perfScore = advancedPerformanceOptimizer.getPerformanceScore();
    const perfReport = advancedPerformanceOptimizer.getOptimizationReport();
    
    const securityReport = enhancedSecurityManager.getSecurityReport();
    const securityScore = enhancedSecurityManager.getSecurityScore();

    // Mock analytics data (in real app, this would come from analytics service)
    const analyticsData = {
      pageViews: Math.floor(Math.random() * 1000) + 500,
      uniqueVisitors: Math.floor(Math.random() * 300) + 200,
      bounceRate: Math.random() * 0.3 + 0.1
    };

    // Mock system data (in real app, this would come from system monitoring)
    const systemData = {
      memoryUsage: Math.random() * 80 + 10,
      cpuUsage: Math.random() * 60 + 20,
      networkLatency: Math.random() * 100 + 50
    };

    return {
      performance: {
        score: perfScore,
        lcp: perfReport.metrics?.lcp || 0,
        fcp: perfReport.metrics?.fcp || 0,
        ttfb: perfReport.metrics?.ttfb || 0
      },
      security: {
        score: securityScore,
        totalEvents: securityReport.totalEvents,
        criticalEvents: securityReport.eventsBySeverity.critical || 0
      },
      analytics: analyticsData,
      system: systemData
    };
  };

  const startRealTimeMonitoring = () => {
    const interval = setInterval(async () => {
      const newMetrics = await collectSystemMetrics();
      setMetrics(newMetrics);
      
      const newData = {
        time: new Date().toLocaleTimeString(),
        performance: newMetrics.performance.score,
        security: newMetrics.security.score,
        memory: newMetrics.system.memoryUsage,
        cpu: newMetrics.system.cpuUsage,
        latency: newMetrics.system.networkLatency
      };
      
      setRealTimeData(prev => [...prev.slice(-19), newData]);
    }, 5000);

    return () => clearInterval(interval);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#10b981';
    if (score >= 70) return '#f59e0b';
    return '#ef4444';
  };

  const getStatusColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (!isVisible) return null;

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'performance', name: 'Performance', icon: '⚡' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'analytics', name: 'Analytics', icon: '📈' },
    { id: 'system', name: 'System', icon: '🖥️' }
  ];

  const performanceData = metrics ? [
    { name: 'LCP', value: metrics.performance.lcp, threshold: 2500 },
    { name: 'FCP', value: metrics.performance.fcp, threshold: 1800 },
    { name: 'TTFB', value: metrics.performance.ttfb, threshold: 800 }
  ] : [];

  const securityData = metrics ? [
    { name: 'Total Events', value: metrics.security.totalEvents },
    { name: 'Critical Events', value: metrics.security.criticalEvents }
  ] : [];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Comprehensive System Dashboard
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {/* Overview Tab */}
              {activeTab === 'overview' && metrics && (
                <div className="space-y-6">
                  {/* Key Metrics Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-100">Performance Score</p>
                          <p className="text-3xl font-bold">{metrics.performance.score}</p>
                        </div>
                        <div className="text-blue-200">⚡</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-green-100">Security Score</p>
                          <p className="text-3xl font-bold">{metrics.security.score}</p>
                        </div>
                        <div className="text-green-200">🔒</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-100">Page Views</p>
                          <p className="text-3xl font-bold">{metrics.analytics.pageViews}</p>
                        </div>
                        <div className="text-purple-200">📈</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-orange-100">Memory Usage</p>
                          <p className="text-3xl font-bold">{metrics.system.memoryUsage.toFixed(1)}%</p>
                        </div>
                        <div className="text-orange-200">🖥️</div>
                      </div>
                    </div>
                  </div>

                  {/* Real-time Monitoring Chart */}
                  {realTimeData.length > 0 && (
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Real-time System Metrics
                      </h3>
                      <ResponsiveContainer width="100%" height={400}>
                        <AreaChart data={realTimeData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="performance" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                          <Area type="monotone" dataKey="security" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                          <Area type="monotone" dataKey="memory" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  {/* System Status */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        System Status
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-300">Performance</span>
                          <span className={`font-medium ${getStatusColor(metrics.performance.score)}`}>
                            {metrics.performance.score >= 90 ? 'Excellent' : 
                             metrics.performance.score >= 70 ? 'Good' : 'Needs Improvement'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-300">Security</span>
                          <span className={`font-medium ${getStatusColor(metrics.security.score)}`}>
                            {metrics.security.score >= 90 ? 'Secure' : 
                             metrics.security.score >= 70 ? 'Moderate' : 'At Risk'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-300">System Health</span>
                          <span className="font-medium text-green-600">Healthy</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Quick Actions
                      </h3>
                      <div className="space-y-2">
                        <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                          Run Performance Optimization
                        </button>
                        <button className="w-full text-left px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                          Generate Security Report
                        </button>
                        <button className="w-full text-left px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
                          Export Analytics Data
                        </button>
                        <button className="w-full text-left px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
                          System Health Check
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Performance Tab */}
              {activeTab === 'performance' && (
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Core Web Vitals
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3b82f6" />
                        <Bar dataKey="threshold" fill="#ef4444" opacity={0.3} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Security Events
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={securityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#ef4444" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* Analytics Tab */}
              {activeTab === 'analytics' && metrics && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100">Page Views</h4>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{metrics.analytics.pageViews}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 dark:text-green-100">Unique Visitors</h4>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">{metrics.analytics.uniqueVisitors}</p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Bounce Rate</h4>
                      <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{(metrics.analytics.bounceRate * 100).toFixed(1)}%</p>
                    </div>
                  </div>
                </div>
              )}

              {/* System Tab */}
              {activeTab === 'system' && metrics && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Memory Usage</h4>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${metrics.system.memoryUsage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{metrics.system.memoryUsage.toFixed(1)}%</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">CPU Usage</h4>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${metrics.system.cpuUsage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{metrics.system.cpuUsage.toFixed(1)}%</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Network Latency</h4>
                      <p className="text-2xl font-bold text-orange-600">{metrics.system.networkLatency.toFixed(0)}ms</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveSystemDashboard;