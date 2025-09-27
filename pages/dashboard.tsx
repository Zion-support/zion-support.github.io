import React, { useState } from 'react';
import Head from 'next/head';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

const Dashboard = React.memo(function Dashboard(): JSX.Element {
  const [activeTab, setActiveTab] = useState('overview');
  const [isRealTime, setIsRealTime] = useState(false);

  // Analytics tracking
  const { trackClick } = useAnalytics();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    trackClick(`dashboard-tab-${tab}`, 'navigation');
  };

  const renderDashboard = () => {
    switch (activeTab) {
      case 'overview':
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
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">1,234</p>
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
                    <p className="text-2xl font-bold text-gray-900">567</p>
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
                    <p className="text-2xl font-bold text-gray-900">$12,345</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Conversion Rate</p>
                    <p className="text-2xl font-bold text-gray-900">3.2%</p>
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
                </div>
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics Dashboard</h1>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600">Analytics features coming soon...</p>
            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Performance Dashboard</h1>
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
        );
    }
  };

  return (
    <>
      <SEO />
      <Head>
        <title>Dashboard - Zion App</title>
        <meta name="description" content="Access your Zion App dashboard for analytics, performance metrics, and system monitoring." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

        {/* Main Content */}
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