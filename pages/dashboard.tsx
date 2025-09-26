import React, { useState } from 'react';
import Head from 'next/head';
import { PerformanceDashboard } from '../src/components/PerformanceDashboard';
import { SecurityDashboard } from '../src/components/SecurityDashboard';
import { AnalyticsDashboard } from '../src/components/AnalyticsDashboard';
import EnhancedDashboard from '../src/components/EnhancedDashboard';
import EnhancedSearch from '../src/components/EnhancedSearch';

type DashboardTab = 'analytics' | 'performance' | 'security' | 'enhanced' | 'search';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('analytics');

  const tabs = [
    { id: 'analytics' as const, name: 'Analytics', icon: '📊' },
    { id: 'performance' as const, name: 'Performance', icon: '⚡' },
    { id: 'security' as const, name: 'Security', icon: '🔒' },
    { id: 'enhanced' as const, name: 'Enhanced Dashboard', icon: '🚀' },
    { id: 'search' as const, name: 'Search', icon: '🔍' }
  ];

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