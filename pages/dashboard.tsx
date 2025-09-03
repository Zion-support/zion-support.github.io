import React, { useState } from 'react';
import Head from 'next/head';
import { 
  User, 
  Bell, 
  Settings, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar,
  FileText,
  MessageCircle,
  Download,
  Eye,
  Plus,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Brain,
  Code,
  Cloud
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Active Projects',
      value: '12',
      change: '+2 this month',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Team Members',
      value: '8',
      change: '+1 this week',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Completed Tasks',
      value: '47',
      change: '+12 this week',
      icon: CheckCircle,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Revenue',
      value: '$125K',
      change: '+15% this month',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <Head>
        <title>Dashboard - Zion Tech Group</title>
        <meta name="description" content="Your personal dashboard for managing projects, team, and resources." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Bell className="h-6 w-6" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Settings className="h-6 w-6" />
                </button>
                <div className="flex items-center space-x-2">
                  <User className="h-8 w-8 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">John Doe</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change}</p>
                    </div>
                    <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Plus className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-sm font-medium">Create Project</span>
              </button>
              <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <BarChart3 className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-sm font-medium">View Reports</span>
              </button>
              <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <MessageCircle className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-sm font-medium">Team Chat</span>
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                <Brain className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">AI Services</h3>
                  <p className="text-xs text-gray-500">Explore our AI solutions</p>
                </div>
              </div>
              <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                <Code className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Micro SAAS</h3>
                  <p className="text-xs text-gray-500">Business automation tools</p>
                </div>
              </div>
              <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                <Cloud className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">IT Services</h3>
                  <p className="text-xs text-gray-500">Infrastructure management</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}