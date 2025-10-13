import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Calendar,
  Palette,
  Settings,
  Plus,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Eye,
  MousePointer,
  CheckCircle
} from 'lucide-react';

import AdManagementSystem from './AdManagementSystem';
import AdAnalytics from './AdAnalytics';
import AdScheduler from './AdScheduler';
import AdTemplates from './AdTemplates';
import AdvertisingBanner from './AdvertisingBanner';
import NewContentAdvertisingBanner from './NewContentAdvertisingBanner';
import UltimateContentAdvertisingBanner from './UltimateContentAdvertisingBanner';

interface AdDashboardProps {
  className?: string;
}

const AdDashboard: React.FC<AdDashboardProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'management' | 'analytics' | 'scheduler' | 'templates' | 'preview'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'management', label: 'Management', icon: Settings },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'scheduler', label: 'Scheduler', icon: Calendar },
    { id: 'templates', label: 'Templates', icon: Palette },
    { id: 'preview', label: 'Preview', icon: Eye }
  ];

  const overviewStats = [
    {
      title: 'Total Campaigns',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: BarChart3,
      color: 'blue'
    },
    {
      title: 'Active Ads',
      value: '8',
      change: '+1',
      changeType: 'positive',
      icon: Target,
      color: 'green'
    },
    {
      title: 'Total Impressions',
      value: '2.4M',
      change: '+15%',
      changeType: 'positive',
      icon: Eye,
      color: 'purple'
    },
    {
      title: 'Click-Through Rate',
      value: '3.2%',
      change: '+0.3%',
      changeType: 'positive',
      icon: MousePointer,
      color: 'orange'
    },
    {
      title: 'Conversions',
      value: '1,247',
      change: '+8%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Total Spend',
      value: '$24,580',
      change: '+12%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600',
      orange: 'bg-orange-50 text-orange-600',
      red: 'bg-red-50 text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {overviewStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.title}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500">vs last month</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button
                  onClick={() => setActiveTab('management')}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Settings className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Create Ad</div>
                      <div className="text-sm text-gray-600">Start a new campaign</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('templates')}
                  className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Palette className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Browse Templates</div>
                      <div className="text-sm text-gray-600">Use pre-made designs</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('scheduler')}
                  className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Schedule Campaign</div>
                      <div className="text-sm text-gray-600">Plan future ads</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('analytics')}
                  className="p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">View Analytics</div>
                      <div className="text-sm text-gray-600">Track performance</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: 'Created new campaign', time: '2 hours ago', type: 'create' },
                  { action: 'Paused "AI Revolution" campaign', time: '4 hours ago', type: 'pause' },
                  { action: 'Scheduled "Edge Computing" popup', time: '1 day ago', type: 'schedule' },
                  { action: 'Updated "Holiday Special" template', time: '2 days ago', type: 'update' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{activity.action}</div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'management':
        return <AdManagementSystem />;
      case 'analytics':
        return <AdAnalytics />;
      case 'scheduler':
        return <AdScheduler />;
      case 'templates':
        return <AdTemplates />;
      case 'preview':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ad Component Preview</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Basic Advertising Banner</h4>
                  <AdvertisingBanner
                    title="Revolutionary AI Solutions"
                    description="Transform your business with cutting-edge artificial intelligence technology"
                    ctaText="Learn More"
                    ctaUrl="/ai-solutions"
                    backgroundColor="#3b82f6"
                    textColor="#ffffff"
                    variant="gradient"
                    size="medium"
                  />
                </div>
                
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">New Content Advertising Banner</h4>
                  <NewContentAdvertisingBanner />
                </div>
                
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Ultimate Content Advertising Banner</h4>
                  <UltimateContentAdvertisingBanner />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`ad-dashboard ${className}`}>
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Ad Management Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage, analyze, and optimize your advertising campaigns</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
            <Plus className="w-5 h-5" />
            Quick Create
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderTabContent()}
      </motion.div>
    </div>
  );
};

export default AdDashboard;