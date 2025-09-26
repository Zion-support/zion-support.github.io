import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { PerformanceDashboard } from '../src/components/PerformanceDashboard';
import { SecurityDashboard } from '../src/components/SecurityDashboard';
import { AnalyticsDashboard } from '../src/components/AnalyticsDashboard';
import EnhancedDashboard from '../src/components/EnhancedDashboard';
import EnhancedSearch from '../src/components/EnhancedSearch';
import { AdvancedPerformanceMonitor } from '../src/components/AdvancedPerformanceMonitor';
import { AdvancedAnalyticsDashboard } from '../src/components/AdvancedAnalyticsDashboard';
import { AdvancedSecurityMonitor } from '../src/components/AdvancedSecurityMonitor';
import { AdvancedAccessibilityAuditor } from '../src/components/AdvancedAccessibilityAuditor';
import SystemMonitor from '../src/components/SystemMonitor';
import SecurityMonitor from '../src/components/SecurityMonitor';
import EnhancedAnalytics from '../src/components/EnhancedAnalytics';
import AdvancedErrorHandler from '../src/components/AdvancedErrorHandler';
import AdvancedPerformanceOptimizer from '../src/components/AdvancedPerformanceOptimizer';
import AdvancedAnalyticsInsights from '../src/components/AdvancedAnalyticsInsights';

type DashboardTab = 'analytics' | 'performance' | 'security' | 'enhanced' | 'search' | 'advanced-analytics' | 'advanced-performance' | 'advanced-security' | 'accessibility' | 'system-monitor' | 'new-performance' | 'new-security' | 'new-analytics' | 'error-handler' | 'performance-optimizer' | 'analytics-insights';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('analytics');
  const [isRealTime, setIsRealTime] = useState(true);

  const tabs = [
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
    { id: 'new-performance' as const, name: 'New Performance', icon: '⚡️' },
    { id: 'new-security' as const, name: 'New Security', icon: '🛡️' },
    { id: 'new-analytics' as const, name: 'New Analytics', icon: '📊' },
    { id: 'error-handler' as const, name: 'Error Handler', icon: '🚨' },
    { id: 'performance-optimizer' as const, name: 'Performance Optimizer', icon: '⚙️' },
    { id: 'analytics-insights' as const, name: 'Analytics Insights', icon: '💡' }
  ];

  // Sample data for advanced components
  const sampleAnalyticsData = {
    pageViews: 125000,
    uniqueVisitors: 45000,
    bounceRate: 35.2,
    avgSessionDuration: 180,
    conversionRate: 12.5,
    topPages: [
      { page: '/', views: 25000, bounceRate: 28.5 },
      { page: '/services', views: 18000, bounceRate: 32.1 },
      { page: '/blog', views: 15000, bounceRate: 45.2 }
    ],
    trafficSources: [
      { source: 'Organic Search', visitors: 25000, percentage: 55.6 },
      { source: 'Direct', visitors: 12000, percentage: 26.7 },
      { source: 'Social Media', visitors: 8000, percentage: 17.8 }
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
  };

  const renderDashboard = () => {
    switch (activeTab) {
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'performance':
        return <PerformanceDashboard />;
      case 'security':
        return <SecurityDashboard />;
      case 'enhanced':
        return <EnhancedDashboard />;
      case 'search':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Enhanced Search</h1>
            <div className="max-w-2xl">
              <EnhancedSearch 
                onSearch={(query, results) => console.log('Search:', query, results)}
                onResultClick={(result) => console.log('Result clicked:', result)}
                enableFilters={true}
                enableSuggestions={true}
                enableHistory={true}
              />
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
              onSecurityAlert={(alert) => console.log('Security alert:', alert)}
              showDashboard={true}
            />
          </div>
        );
      case 'accessibility':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Accessibility Auditor</h1>
            <AdvancedAccessibilityAuditor 
              onAuditComplete={(results) => console.log('Accessibility audit complete:', results)}
              showDashboard={true}
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
            <PerformanceDashboard 
              refreshInterval={isRealTime ? 5000 : 30000}
              enableAlerts={true}
              onAlert={(alert) => console.log('Performance alert:', alert)}
            />
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
            <SecurityMonitor 
              refreshInterval={isRealTime ? 5000 : 30000}
              enableAlerts={true}
              onSecurityAlert={(alert) => console.log('Security alert:', alert)}
            />
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
      case 'error-handler':
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Error Handler</h1>
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
              enableRealTime={true}
              refreshInterval={5000}
              onError={(error) => console.log('Error detected:', error)}
              onErrorResolved={(error) => console.log('Error resolved:', error)}
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
            <AdvancedPerformanceOptimizer 
              enableRealTime={true}
              refreshInterval={1000}
              enableAutoOptimization={true}
              onOptimization={(rule) => console.log('Optimization applied:', rule)}
              onPerformanceChange={(metrics) => console.log('Performance changed:', metrics)}
            />
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
              data={sampleAnalyticsData}
              enableRealTime={true}
              refreshInterval={30000}
              onInsightAction={(insight) => console.log('Insight action:', insight)}
            />
          </div>
        );
      default:
        return <AnalyticsDashboard />;
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard - Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive dashboard for monitoring analytics, performance, and security metrics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-600">Monitor your application&apos;s performance and security</p>
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
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Dashboard Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderDashboard()}
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