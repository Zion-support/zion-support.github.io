import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Lazy load components
const EnhancedDashboard = dynamic(() => import('../src/components/EnhancedDashboard'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div></div>
});

const AdvancedAnalyticsSystem = dynamic(() => import('../src/components/AdvancedAnalyticsSystem'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>
});

const AdvancedPerformanceSystem = dynamic(() => import('../src/components/AdvancedPerformanceSystem'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-600"></div></div>
});

const ComprehensiveAnalyticsDashboard = dynamic(() => import('../src/components/ComprehensiveAnalyticsDashboard'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div></div>
});

const AdvancedAnalyticsInsights = dynamic(() => import('../src/components/AdvancedAnalyticsInsights'), {
  loading: () => <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div></div>
});

interface DashboardProps {
  initialTab?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ initialTab = 'overview' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'performance', label: 'Performance', icon: '⚡' },
    { id: 'comprehensive', label: 'Comprehensive', icon: '🎯' },
    { id: 'advanced-analytics', label: 'Advanced Analytics', icon: '📊' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <EnhancedDashboard />;
      case 'analytics':
        return <AdvancedAnalyticsSystem />;
      case 'performance':
        return <AdvancedPerformanceSystem />;
      case 'comprehensive':
        return <ComprehensiveAnalyticsDashboard />;
      case 'advanced-analytics':
        return <AdvancedAnalyticsInsights />;
      default:
        return <EnhancedDashboard />;
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard - Zion Tech Group</title>
        <meta name="description" content="Comprehensive dashboard for monitoring and analytics" />
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
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderTabContent()}
        </main>
      </div>
    </>
  );
};

export default Dashboard;