import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { BarChart3, TrendingUp, Users, Activity, Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function Dashboard(): JSX.Element {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const stats = [
    { name: 'Total Users', value: '12,345', change: '+12%', icon: Users, color: 'blue' },
    { name: 'Revenue', value: '$45,678', change: '+8%', icon: TrendingUp, color: 'green' },
    { name: 'Active Sessions', value: '2,156', change: '+15%', icon: Activity, color: 'purple' },
    { name: 'Security Score', value: '98%', change: '+2%', icon: Shield, color: 'orange' }
  ];

  const recentActivities = [
    { id: 1, type: 'success', message: 'System backup completed successfully', time: '2 minutes ago' },
    { id: 2, type: 'warning', message: 'High CPU usage detected on server-02', time: '5 minutes ago' },
    { id: 3, type: 'info', message: 'New user registration from mobile app', time: '8 minutes ago' },
    { id: 4, type: 'success', message: 'Database optimization completed', time: '12 minutes ago' },
    { id: 5, type: 'info', message: 'Scheduled maintenance window started', time: '15 minutes ago' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'monitoring', name: 'Monitoring', icon: Activity }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                      <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-100' :
                      activity.type === 'warning' ? 'bg-yellow-100' :
                      activity.type === 'error' ? 'bg-red-100' :
                      'bg-blue-100'
                    }`}>
                      {activity.type === 'success' && <CheckCircle className="h-4 w-4 text-green-600" />}
                      {activity.type === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-600" />}
                      {activity.type === 'error' && <AlertTriangle className="h-4 w-4 text-red-600" />}
                      {activity.type === 'info' && <Clock className="h-4 w-4 text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
            <div className="text-center py-12">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Analytics features coming soon...</p>
            </div>
          </div>
        );
      
      case 'security':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Dashboard</h3>
            <div className="text-center py-12">
              <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Security monitoring features coming soon...</p>
            </div>
          </div>
        );
      
      case 'monitoring':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Monitoring</h3>
            <div className="text-center py-12">
              <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">System monitoring features coming soon...</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard - Zion Tech</title>
        <meta name="description" content="Zion Tech Solutions Dashboard" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome to your Zion Tech dashboard</p>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="mb-8">
            <nav className="flex space-x-8 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Error State */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error</h3>
                  <p className="text-sm text-red-700 mt-1">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}

          {/* Tab Content */}
          {!isLoading && renderTabContent()}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">© 2024 Zion Tech Solutions. All rights reserved.</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Dashboard powered by advanced analytics and monitoring systems.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}