import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Lazy load heavy components to reduce initial bundle size
const PerformanceDashboard = dynamic(() => import('../src/components/PerformanceDashboard').then(mod => ({ default: mod.PerformanceDashboard })), {
  ssr: false,
  loading: () => <div className="h-64 w-full bg-gray-200 rounded animate-pulse" />
});

// const SecurityDashboard = dynamic(() => import('../src/components/SecurityDashboard').then(mod => ({ default: mod.SecurityDashboard })), {
//   loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div></div>
// });

// const AnalyticsDashboard = dynamic(() => import('../src/components/AnalyticsDashboard').then(mod => ({ default: mod.AnalyticsDashboard })), {
//   loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div></div>
// });

const EnhancedDashboard = dynamic(() => import('../src/components/EnhancedDashboard'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div></div>
});

// const EnhancedSearch = dynamic(() => import('../src/components/EnhancedSearch'), {
//   loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div></div>
// });

const ComprehensiveAnalyticsDashboard = dynamic(() => import('../src/components/ComprehensiveAnalyticsDashboard'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div></div>
});

const AdvancedPerformanceMonitor = dynamic(() => import('../src/components/AdvancedPerformanceMonitor').then(mod => ({ default: mod.AdvancedPerformanceMonitor })), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-600"></div></div>
});

const AdvancedAnalyticsDashboard = dynamic(() => import('../src/components/AdvancedAnalyticsDashboard').then(mod => ({ default: mod.AdvancedAnalyticsDashboard })), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div></div>
});

const AdvancedSecurityMonitor = dynamic(() => import('../src/components/AdvancedSecurityMonitor').then(mod => ({ default: mod.AdvancedSecurityMonitor })), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div></div>
});

const AdvancedAccessibilityAuditor = dynamic(() => import('../src/components/AdvancedAccessibilityAuditor').then(mod => ({ default: mod.AdvancedAccessibilityAuditor })), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600"></div></div>
});

const SystemMonitor = dynamic(() => import('../src/components/SystemMonitor'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div></div>
});

const AdvancedSecurityEnhancements = dynamic(() => import('../src/components/AdvancedSecurityEnhancements'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-600"></div></div>
});

const SecurityMonitor = dynamic(() => import('../src/components/SecurityMonitor'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600"></div></div>
});

const EnhancedAnalytics = dynamic(() => import('../src/components/EnhancedAnalytics'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-600"></div></div>
});

const AdvancedErrorHandler = dynamic(() => import('../src/components/AdvancedErrorHandler'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lime-600"></div></div>
});

const AdvancedPerformanceOptimizer = dynamic(() => import('../src/components/AdvancedPerformanceOptimizer'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div></div>
});

const EnhancedUserExperience = dynamic(() => import('../src/components/EnhancedUserExperience'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-fuchsia-600"></div></div>
});

const AdvancedAnalyticsInsights = dynamic(() => import('../src/components/AdvancedAnalyticsInsights'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600"></div></div>
});

<<<<<<< HEAD
type DashboardTab = 'comprehensive' | 'analytics' | 'performance' | 'security' | 'enhanced' | 'search' | 'advanced-analytics' | 'advanced-performance' | 'advanced-security' | 'accessibility' | 'system-monitor' | 'security-enhancements' | 'performance-optimizer' | 'user-experience' | 'error-handler' | 'analytics-insights' | 'new-performance' | 'new-security' | 'new-analytics' | 'error-monitoring' | 'advanced-system-monitor';
=======
const ComprehensiveMonitoringDashboard = dynamic(() => import('../src/components/ComprehensiveMonitoringDashboard'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div></div>
});

const ComprehensiveSecurityDashboard = dynamic(() => import('../src/components/ComprehensiveSecurityDashboard'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div></div>
});

const AdvancedErrorMonitoring = dynamic(() => import('../src/components/AdvancedErrorMonitoring'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div></div>
});

const AdvancedSystemMonitor = dynamic(() => import('../src/components/AdvancedSystemMonitor'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>
});

type DashboardTab = 'comprehensive' | 'analytics' | 'performance' | 'security' | 'enhanced' | 'search' | 'advanced-analytics' | 'advanced-performance' | 'advanced-security' | 'accessibility' | 'system-monitor' | 'security-enhancements' | 'performance-optimizer' | 'user-experience' | 'error-handler' | 'analytics-insights' | 'error-monitoring' | 'advanced-system-monitor' | 'new-performance' | 'new-security' | 'new-analytics' | 'comprehensive-monitoring' | 'comprehensive-security';
>>>>>>> cursor/check-fix-push-and-merge-to-main-ab84

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('comprehensive');
  const [isRealTime, setIsRealTime] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Optimized tab switching with loading state
  const handleTabChange = useCallback((tabId: DashboardTab) => {
    if (tabId !== activeTab) {
      setIsLoading(true);
      setActiveTab(tabId);
      // Simulate loading time for better UX
      setTimeout(() => setIsLoading(false), 100);
    }
  }, [activeTab]);

  const tabs = useMemo(() => [
    { id: 'comprehensive' as const, name: 'Comprehensive', icon: '🎯' },
    { id: 'analytics' as const, name: 'Analytics', icon: '📊' },
    { id: 'performance' as const, name: 'Performance', icon: '⚡' },
    { id: 'security' as const, name: 'Security', icon: '🔒' },
    { id: 'enhanced' as const, name: 'Enhanced Dashboard', icon: '🚀' },
    { id: 'search' as const, name: 'Search', icon: '🔍' },
    { id: 'advanced-analytics' as const, name: 'Advanced Analytics', icon: '📈' },
    { id: 'advanced-performance' as const, name: 'Advanced Performance', icon: '⚡️' },
    { id: 'advanced-security' as const, name: 'Advanced Security', icon: '🛡️' },
    { id: 'accessibility' as const, name: 'Accessibility', icon: '♿' },
    { id: 'system-monitor' as const, name: 'System Monitor', icon: '📊' },
    { id: 'security-enhancements' as const, name: 'Security Enhancements', icon: '🔐' },
    { id: 'performance-optimizer' as const, name: 'Performance Optimizer', icon: '⚙️' },
    { id: 'user-experience' as const, name: 'User Experience', icon: '👤' },
    { id: 'error-monitoring' as const, name: 'Error Monitoring', icon: '🚨' },
    { id: 'advanced-system-monitor' as const, name: 'Advanced System Monitor', icon: '🔧' },
    { id: 'new-performance' as const, name: 'New Performance', icon: '⚡️' },
    { id: 'new-security' as const, name: 'New Security', icon: '🛡️' },
    { id: 'new-analytics' as const, name: 'New Analytics', icon: '📊' },
    { id: 'error-handler' as const, name: 'Error Handler', icon: '🚨' },
    { id: 'analytics-insights' as const, name: 'Analytics Insights', icon: '💡' },
    { id: 'comprehensive-monitoring' as const, name: 'Comprehensive Monitoring', icon: '📊' },
    { id: 'comprehensive-security' as const, name: 'Comprehensive Security', icon: '🛡️' }
  ], []);

  // Sample data for advanced components - memoized to prevent re-creation
  const sampleAnalyticsData = useMemo(() => ({
    pageViews: 125000,
    uniqueVisitors: 45000,
    bounceRate: 35.2,
    avgSessionDuration: 180,
    conversionRate: 12.5,
    topPages: [
      { page: '/', views: 25000, bounceRate: 28.5, avgTime: 120 },
      { page: '/services', views: 18000, bounceRate: 32.1, avgTime: 95 },
      { page: '/blog', views: 15000, bounceRate: 45.2, avgTime: 180 }
    ],
    trafficSources: [
      { source: 'Organic Search', visitors: 25000, percentage: 55.6, conversionRate: 12.5 },
      { source: 'Direct', visitors: 12000, percentage: 26.7, conversionRate: 15.2 },
      { source: 'Social Media', visitors: 8000, percentage: 17.8, conversionRate: 8.9 }
    ],
                deviceTypes: [
                  { device: 'Desktop', count: 25000, percentage: 55.6 },
                  { device: 'Mobile', count: 15000, percentage: 33.3 },
                  { device: 'Tablet', count: 5000, percentage: 11.1 }
                ],
    geographicData: [
      { country: 'United States', visitors: 18000, percentage: 40.0 },
      { country: 'Canada', visitors: 9000, percentage: 20.0 },
      { country: 'United Kingdom', visitors: 7200, percentage: 16.0 }
    ],
    hourlyData: Array.from({ length: 24 }, (_, i) => ({ hour: i, visitors: Math.floor(Math.random() * 1000) })),
    dailyData: Array.from({ length: 30 }, (_, i) => ({ 
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0], 
      visitors: Math.floor(Math.random() * 2000) + 1000,
      pageViews: Math.floor(Math.random() * 5000) + 2000
    })),
    realTimeVisitors: 127,
    topKeywords: [
      { keyword: 'AI solutions', searches: 1250, position: 1 },
      { keyword: 'cloud computing', searches: 980, position: 2 },
      { keyword: 'digital transformation', searches: 750, position: 3 }
    ],
    errorRate: 0.5,
    performanceScore: 92
  }), []);

  const renderDashboard = useMemo(() => {
    switch (activeTab) {
      case 'comprehensive':
        return <ComprehensiveAnalyticsDashboard />;
      case 'analytics':
        return <div>Analytics Dashboard (temporarily disabled)</div>;
      case 'performance':
        return <PerformanceDashboard />;
      case 'security':
        return <div>Security Dashboard (temporarily disabled)</div>;
      case 'enhanced':
        return <EnhancedDashboard />;
      case 'search':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Enhanced Search</h1>
            <div className="max-w-2xl">
              <div>Enhanced Search (temporarily disabled)</div>
            </div>
          </div>
        );
      case 'advanced-analytics':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Advanced Analytics Dashboard</h1>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isRealTime}
                    onChange={(e) => setIsRealTime(e.target.checked)}
                    className="mr-2"
                  />
                  Real-time Updates
                </label>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh Data
                </button>
              </div>
            </div>
            <AdvancedAnalyticsDashboard 
              data={sampleAnalyticsData}
              onDataRefresh={() => console.log('Refreshing analytics data...')}
            />
          </div>
        );
      case 'advanced-performance':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced Performance Monitor</h1>
            <AdvancedPerformanceMonitor 
              onMetricsUpdate={(metrics) => console.log('Performance metrics updated:', metrics)}
              showDashboard={true}
            />
          </div>
        );
      case 'advanced-security':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced Security Monitor</h1>
            <AdvancedSecurityMonitor 
              metrics={{
                totalThreats: 0,
                blockedRequests: 0,
                suspiciousActivity: 0,
                securityScore: 95,
                lastScan: new Date(),
                vulnerabilities: [],
                recentEvents: [],
                cspViolations: 0,
                xssAttempts: 0,
                sqlInjectionAttempts: 0,
                bruteForceAttempts: 0,
                rateLimitHits: 0
              }}
              onThreatDetected={(event) => console.log('Security threat detected:', event)}
            />
          </div>
        );
      case 'accessibility':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Accessibility Auditor</h1>
            <AdvancedAccessibilityAuditor 
              onAuditComplete={(results) => console.log('Accessibility audit complete:', results)}
            />
          </div>
        );
      case 'system-monitor':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">System Monitor</h1>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isRealTime}
                    onChange={(e) => setIsRealTime(e.target.checked)}
                    className="mr-2"
                  />
                  Real-time Monitoring
                </label>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <SystemMonitor 
              onAlert={(alert) => console.log('System alert:', alert)}
              onMetricsUpdate={(metrics) => console.log('Metrics updated:', metrics)}
              enableRealTime={isRealTime}
              refreshInterval={5000}
            />
          </div>
        );
      case 'security-enhancements':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced Security Enhancements</h1>
            <AdvancedSecurityEnhancements />
          </div>
        );
      case 'new-performance':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Enhanced Performance Dashboard</h1>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isRealTime}
                    onChange={(e) => setIsRealTime(e.target.checked)}
                    className="mr-2"
                  />
                  Real-time Updates
                </label>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <PerformanceDashboard />
          </div>
        );
      case 'new-security':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Enhanced Security Monitor</h1>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isRealTime}
                    onChange={(e) => setIsRealTime(e.target.checked)}
                    className="mr-2"
                  />
                  Real-time Monitoring
                </label>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <SecurityMonitor 
              refreshInterval={isRealTime ? 5000 : 30000}
              enableAlerts={true}
              onSecurityAlert={(alert) => console.log('Security alert:', alert)}
            />
          </div>
        );
      case 'performance-optimizer':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Performance Optimizer</h1>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <AdvancedPerformanceOptimizer />
          </div>
        );
      case 'new-analytics':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Enhanced Analytics Dashboard</h1>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isRealTime}
                    onChange={(e) => setIsRealTime(e.target.checked)}
                    className="mr-2"
                  />
                  Real-time Updates
                </label>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <EnhancedAnalytics 
              refreshInterval={isRealTime ? 10000 : 60000}
              enableRealTime={isRealTime}
              onDataUpdate={(data) => console.log('Analytics data updated:', data)}
            />
          </div>
        );
      case 'error-monitoring':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced Error Monitoring</h1>
            <AdvancedErrorMonitoring />
          </div>
        );
      case 'advanced-system-monitor':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced System Monitor</h1>
            <AdvancedSystemMonitor />
          </div>
        );
      case 'error-handler':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Advanced Error Handler</h1>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <AdvancedErrorHandler 
              onError={(error) => console.log('Error captured:', error)}
              onPerformanceIssue={(issue) => console.log('Performance issue:', issue)}
              enableAutoRetry={true}
              maxRetries={3}
              enablePerformanceMonitoring={true}
              enableErrorReporting={true}
              enableUserFeedback={true}
            />
          </div>
        );
      case 'performance-optimizer':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Performance Optimizer</h1>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <AdvancedPerformanceOptimizer />
          </div>
        );
      case 'analytics-insights':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Analytics Insights</h1>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <AdvancedAnalyticsInsights 
              timeRange="30d"
              refreshInterval={30000}
              onDataUpdate={(data) => console.log('Analytics data updated:', data)}
            />
          </div>
        );
      case 'comprehensive-monitoring':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Comprehensive Monitoring</h1>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <ComprehensiveMonitoringDashboard 
              refreshInterval={5000}
              enableRealTimeUpdates={true}
              onMetricsUpdate={(metrics) => console.log('Metrics updated:', metrics)}
            />
          </div>
        );
      case 'comprehensive-security':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Comprehensive Security</h1>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <ComprehensiveSecurityDashboard 
              refreshInterval={10000}
              enableRealTimeMonitoring={true}
              onSecurityUpdate={(metrics) => console.log('Security metrics updated:', metrics)}
            />
          </div>
        );
      case 'error-monitoring':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Advanced Error Monitoring</h1>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <AdvancedErrorMonitoring />
          </div>
        );
      case 'advanced-system-monitor':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Advanced System Monitor</h1>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <AdvancedSystemMonitor />
          </div>
        );
      default:
        return <ComprehensiveAnalyticsDashboard />;
    }
  }, [activeTab, isRealTime, sampleAnalyticsData]);

  return (
    <>
      <Head>
        <title>Advanced Dashboard - Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive analytics dashboard with advanced performance monitoring, security analysis, SEO optimization, and accessibility insights" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Advanced Analytics Dashboard</h1>
                <p className="text-sm text-gray-600">Comprehensive monitoring with AI-powered insights, performance optimization, security analysis, and SEO recommendations</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleString()}
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Refresh Data
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  disabled={isLoading}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Dashboard Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
          {isLoading && (
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="text-gray-600">Loading dashboard...</span>
              </div>
            </div>
          )}
          {renderDashboard}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center text-sm text-gray-500">
              <p>&copy; 2024 Zion Tech Solutions. All rights reserved.</p>
              <p className="mt-1">Dashboard powered by advanced analytics and monitoring systems.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Dashboard;