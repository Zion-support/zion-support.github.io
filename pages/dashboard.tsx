import React, { useState } from 'react';
import Head from 'next/head';
import { useAnalytics } from '../src/hooks/useAnalytics';

// Lazy load heavy components to reduce initial bundle size
// const PerformanceDashboard = dynamic(() => import('../src/components/PerformanceDashboard').then(mod => ({ default: mod.PerformanceDashboard })) {
//   ssr: false
//   loading: () => <div className="h-64 w-full bg-gray-200 rounded animate-pulse" />
// });

// const SecurityDashboard = dynamic(() => import('../src/components/SecurityDashboard').then(mod => ({ default: mod.SecurityDashboard })) {
//   ssr: false
//   loading: () => <div className="h-64 w-full bg-gray-200 rounded animate-pulse" />
// });

export default function Dashboard(): JSX.Element {
  const [activeTab, setActiveTab] = useState('comprehensive');
  const [isRealTime, setIsRealTime] = useState(false);
  const { trackClick } = useAnalytics();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    trackClick(`dashboard-tab-${tab}`, 'navigation');
  };

  const renderDashboard = () => {
    switch (activeTab) {
      case 'comprehensive':
        return <div className="p-8">Comprehensive Analytics Dashboard (temporarily disabled)</div>;
      case 'analytics':
        return <div className="p-8">Analytics Dashboard (temporarily disabled)</div>;
      case 'performance':
        return <div className="p-8">Performance Dashboard (temporarily disabled)</div>;
      case 'security':
        return <div className="p-8">Security Dashboard (temporarily disabled)</div>;
      case 'enhanced':
        return <div className="p-8">Enhanced Dashboard (temporarily disabled)</div>;
      case 'search':
        return (
      <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Enhanced Search</h1>
      <div className="max-w-2xl">
              {/* <EnhancedSearch 
                onSearch={(query results) => console.log('Search:' query results)}
                onResultClick={(result) => console.log('Result clicked:' result)}
                enableFilters={true}
                enableSuggestions={true}
                enableHistory={true}
              /> */}
            </div>
          </div>
        );
      case 'advanced-analytics':
        return (
          <div className="p-8">
      <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
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

            {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Users</p>
                    <p className="text-2 xl font-bold text-gray-900">1234</p>
                  </div>
      <div className="bg-blue-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                </div>
              </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Active Sessions</p>
                    <p className="text-2 xl font-bold text-gray-900">567</p>
                  </div>
      <div className="bg-green-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Revenue</p>
                    <p className="text-2 xl font-bold text-gray-900">$12345</p>
                  </div>
      <div className="bg-yellow-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>              </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Conversion Rate</p>
                    <p className="text-2 xl font-bold text-gray-900">3.2%</p>
                  </div>
      <div className="bg-purple-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">User Activity</h3>
      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Chart placeholder</p>
                </div>
              </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Chart placeholder</p>
                </div>              </div>
            </div>
            <div className="p-4 bg-gray-100 rounded">
              System Monitor (temporarily disabled)
            </div>
          </div>
        );
      case 'security-enhancements':
        return (
      <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced Security Enhancements</h1>
            {/* <AdvancedSecurityEnhancements /> */}
      <div className="text-center py-8 text-gray-500">Security Enhancements temporarily disabled</div>
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
            {/* <PerformanceDashboard /> */}
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
            <div className="p-4 bg-gray-100 rounded">
              Security Monitor (temporarily disabled)
            </div>
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
            {/* <AdvancedPerformanceOptimizer /> */}
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
            <div className="p-4 bg-gray-100 rounded">
              Enhanced Analytics (temporarily disabled)
            </div>
          </div>
        );
      case 'error-monitoring':
        return (
      <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced Error Monitoring</h1>
            {/* <AdvancedErrorMonitoring /> */}
          </div>
        );
      case 'advanced-system-monitor':
        return (
      <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced System Monitor</h1>
            <div className="p-4 bg-gray-100 rounded">
              Advanced System Monitor (temporarily disabled)
            </div>
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
            {/* <AdvancedErrorHandler 
              onError={(error) => console.log('Error captured:' error)}
              onPerformanceIssue={(issue) => console.log('Performance issue:' issue)}
              enableAutoRetry={true}
              maxRetries={3}
              enablePerformanceMonitoring={true}
              enableErrorReporting={true}
              enableUserFeedback={true}
            /> */}
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
            {/* <AdvancedAnalyticsInsights 
              timeRange="30d"
              data={{
                pageViews: 125000
                uniqueVisitors: 45000
                bounceRate: 35.2
                avgSessionDuration: 180
                conversionRate: 12.5
                topPages: [
                  { page: '/' views: 25000 bounceRate: 28.5 avgTime: 120 }
                  { page: '/services' views: 18000 bounceRate: 32.1 avgTime: 95 }
                  { page: '/blog' views: 15000 bounceRate: 45.2 avgTime: 180 }
                ]
                trafficSources: [
                  { source: 'Organic Search' visitors: 25000 percentage: 55.6 conversionRate: 12.5 }
                  { source: 'Direct' visitors: 12000 percentage: 26.7 conversionRate: 15.2 }
                  { source: 'Social Media' visitors: 8000 percentage: 17.8 conversionRate: 8.9 }
                ]
                deviceTypes: [
                  { device: 'Desktop' visitors: 25000 percentage: 55.6 }
                  { device: 'Mobile' visitors: 15000 percentage: 33.3 }
                  { device: 'Tablet' visitors: 5000 percentage: 11.1 }
                ]
                userBehavior: [
                  { action: 'page_view' count: 1250 trend: 'up' }
                  { action: 'click' count: 890 trend: 'stable' }
                  { action: 'scroll' count: 2100 trend: 'down' }
                ]
                performance: {
                  pageLoadTime: 1.2
                  firstContentfulPaint: 0.8
                  largestContentfulPaint: 1.5
                  cumulativeLayoutShift: 0.1
                  firstInputDelay: 50
                }
                realTime: [
                  { activeUsers: 45 currentPage: '/' location: 'US' device: 'desktop' }
                  { activeUsers: 23 currentPage: '/services' location: 'CA' device: 'mobile' }
                ]
              }}
              enableRealTime={true}
              refreshInterval={30000}
              onDataUpdate={(data) => console.log('Analytics data updated:', data)}
            /> */}
      <div className="text-center py-8 text-gray-500">Analytics Insights temporarily disabled</div>
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
            {/* <ComprehensiveMonitoringDashboard 
              refreshInterval={5000}
              enableRealTimeUpdates={true}
              onMetricsUpdate={(metrics) => console.log('Metrics updated:', metrics)}
            /> */}
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
            {/* <ComprehensiveSecurityDashboard 
              refreshInterval={10000}
              enableRealTimeMonitoring={true}
              onSecurityUpdate={(metrics) => console.log('Security metrics updated:' metrics)}
            /> */}
          </div>
        );
      case 'error-monitoring-v2':
        return (
      <div className="p-8">
      <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Advanced Error Monitoring V2</h1>
      <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            {/* <AdvancedErrorMonitoring /> */}
          </div>
        );
      case 'advanced-system-monitor-v2':
        return (
      <div className="p-8">
      <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Advanced System Monitor V2</h1>
      <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
            <div className="p-4 bg-gray-100 rounded">
              Advanced System Monitor (temporarily disabled)
            </div>
          </div>
        );

      case 'analytics-v2':
        return (
      <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics Dashboard V2</h1>
      <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600">Analytics features coming soon...</p>
            </div>
          </div>
        );

      case 'performance-v2':
        return (
      <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Performance Dashboard V2</h1>
      <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600">Performance monitoring features coming soon...</p>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600">Select a tab to view dashboard content.</p>
            </div>
          </div>
        )}
  };

  return (
    <>
      <Head>
        <title>Advanced Dashboard - Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive analytics dashboard with advanced performance monitoring security analysis SEO optimization and accessibility insights" />
        <meta name="viewport" content="width=device-width initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-gray-900">Zion Dashboard</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <button
                    onClick={() => handleTabChange('overview')}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      activeTab === 'overview'
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => handleTabChange('analytics')}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      activeTab === 'analytics'
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    Analytics
                  </button>
                  <button
                    onClick={() => handleTabChange('performance')}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      activeTab === 'performance'
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    Performance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main>
          {renderDashboard()}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">© 2024 Zion Tech Solutions. All rights reserved.</p>
              </div>
              <div>
                <p className="mt-1">Dashboard powered by advanced analytics and monitoring systems.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}