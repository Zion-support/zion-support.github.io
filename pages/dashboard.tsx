import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Dashboard(): JSX.Element {
  const [activeTab, setActiveTab] = useState('comprehensive');
  const [isRealTime, setIsRealTime] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { trackClick } = useAnalytics();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    trackClick(`dashboard-tab-${tab}`, 'navigation');
  };

  const renderDashboard = () => {
    switch (activeTab) {
      case 'comprehensive':
        return <ComprehensiveAnalyticsDashboard />;
      case 'performance':
        return <PerformanceDashboard />;
      case 'security':
        return <SecurityDashboard />;
      case 'accessibility':
        return <AccessibilityDashboard />;
      default:
        return <ComprehensiveAnalyticsDashboard />;
    }
  };

  return (
    <>
      <Head>
        <title>Analytics Dashboard - Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive analytics dashboard for monitoring website performance, security, and accessibility metrics." />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
                <p className="text-gray-600">Monitor your website's performance and health</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsRealTime(!isRealTime)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isRealTime
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-gray-100 text-gray-800 border border-gray-200'
                  }`}
                >
                  {isRealTime ? 'Real-time ON' : 'Real-time OFF'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8">
              {[
                { id: 'comprehensive', name: 'Comprehensive', icon: '📊' },
                { id: 'performance', name: 'Performance', icon: '⚡' },
                { id: 'security', name: 'Security', icon: '🔒' },
                { id: 'accessibility', name: 'Accessibility', icon: '♿' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-red-400 text-xl">⚠️</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error loading dashboard</h3>
                  <p className="mt-1 text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          ) : (
            renderDashboard()
          )}
        </div>
      </div>
    </>
  );
}

// Placeholder components
function ComprehensiveAnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-lg">👥</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">12,345</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg">📈</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Page Views</p>
              <p className="text-2xl font-bold text-gray-900">45,678</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-lg">⚡</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Avg. Load Time</p>
              <p className="text-2xl font-bold text-gray-900">1.2s</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-lg">🔒</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Security Score</p>
              <p className="text-2xl font-bold text-gray-900">98%</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Analytics Overview</h3>
        <p className="text-gray-600">Comprehensive analytics dashboard coming soon...</p>
      </div>
    </div>
  );
}

function PerformanceDashboard() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Metrics</h3>
      <p className="text-gray-600">Performance dashboard coming soon...</p>
    </div>
  );
}

function SecurityDashboard() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Security Monitoring</h3>
      <p className="text-gray-600">Security dashboard coming soon...</p>
    </div>
  );
}

function AccessibilityDashboard() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Accessibility Metrics</h3>
      <p className="text-gray-600">Accessibility dashboard coming soon...</p>
    </div>
  );
}