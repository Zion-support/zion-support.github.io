import React { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const SEO = dynamic(() => import('../src/components/SEO'), { ssr: false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { ssr: false })

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  
  const stats = [
    {
      title: 'Active Projects',
      value: '12',
      change: '+2 this month',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    }, {
      title: 'Team Members',
      value: '8',
      change: '+1 this week',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    }, {
      title: 'Completed Tasks',
      value: '47',
      change: '+12 this week',
      icon: CheckCircle,
      color: 'from-purple-500 to-pink-500'
    }, {
      title: 'Revenue',
      value: '$125K',
      change: '+15% this month',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const automationStatus = [
    {
      id: 1,
      name: 'AI Customer Analytics Platform',
      client: 'E-commerce Retailer',
      status: 'In Progress',
      progress: 75,
      dueDate: '2024-02-15',
      team: ['John Doe', 'Jane Smith', 'Mike Johnson']
    }, {
      id: 2,
      name: 'Cloud Migration',
      status: 'Planning',
      progress: 25,
      dueDate: '2024-03-01',
      team: ['Sarah Wilson', 'David Brown']
    }, {
      id: 3,
      name: 'Cloud Migration Project',
      client: 'Financial Services',
      status: 'In Progress',
      progress: 60,
      deadline: '2024-03-01'
    },
    {
      id: 4,
      name: 'Cybersecurity Assessment',
      client: 'Healthcare Provider',
      status: 'Planning',
      progress: 25,
      deadline: '2024-02-28'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'New project assigned',
      message: 'You have been assigned to the AI Chatbot project',
      time: '2 hours ago',
      type: 'info'
    }, {
      id: 2,
      title: 'Meeting reminder',
      message: 'Team standup meeting in 30 minutes',
      time: '30 minutes ago',
      type: 'warning'
    }, {
      id: 3,
      title: 'Project completed',
      message: 'Mobile App Development project has been completed',
      time: '1 day ago',
      type: 'success'
    }
  ];

  const quickActions = [
    {
      title: 'Create Project',
      description: 'Start a new project',
      icon: Plus,
      color: 'from-blue-500 to-cyan-500',
      href: '/projects/new'
    }, {
      title: 'View Reports',
      description: 'Check project analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      href: '/reports'
    }, {
      title: 'Team Chat',
      description: 'Communicate with team',
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-500',
      href: '/chat'
    }, {
      title: 'Download Resources',
      description: 'Access project files',
      icon: Download,
      color: 'from-orange-500 to-red-500',
      href: '/resources'
    }
  ];

  const services = [
    {
      title: 'AI Services',
      description: 'Explore our AI solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/services/ai-services'
    }, {
      title: 'Micro SAAS',
      description: 'Business automation tools',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/micro-saas'
    }, {
      title: 'IT Services',
      description: 'Infrastructure management',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      href: '/services/it-services'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Head>
        <title>Dashboard - bolt.new.zion.app</title>
        <meta name="description" content="Real-time dashboard and system overview for bolt.new.zion.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            System Dashboard
          </h1>
          <p className="text-gray-300 mt-2 text-lg">
            Real-time monitoring and system overview
          </p>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemMetrics.map((metric, index) => (
            <div key={index} className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{metric.icon}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  metric.status === 'excellent' ? 'bg-green-500/20 text-green-300' :
                  metric.status === 'good' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-red-500/20 text-red-300'
                }`}>
                  {metric.status}
                </span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-cyan-300 mb-2">{metric.title}</div>
              <div className="text-green-400 text-sm">{metric.change}</div>
            </div>
          ))}
        </div>

        {/* Automation Status */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-300">Automation Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automationStatus.map((automation, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white text-lg">{automation.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    automation.health === 'excellent' ? 'bg-green-500/20 text-green-300' :
                    automation.health === 'good' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {automation.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>Last Run: {automation.lastRun}</div>
                  <div>Next Run: {automation.nextRun}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-300">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center space-x-4">
                  <span className={`w-3 h-3 rounded-full ${
                    activity.status === 'success' ? 'bg-green-400' : 'bg-red-400'
                  }`}></span>
                  <div>
                    <div className="font-medium text-white">{activity.type}</div>
                    <div className="text-sm text-gray-400">{activity.description}</div>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{activity.timestamp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-300">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href} className="group">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{action.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-400">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* System Health Summary */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-300">System Health Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">All Systems Operational</div>
              <div className="text-green-300">No critical issues detected</div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">227 Automations</div>
              <div className="text-blue-300">Running smoothly</div>
            </div>
            <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.97% Uptime</div>
              <div className="text-purple-300">Last 30 days</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/reports" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
            View Reports
          </Link>
          <Link href="/automation-health" className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-colors">
            Automation Health
          </Link>
          <Link href="/about" className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-semibold rounded-lg transition-colors">
            About Us
          </Link>
        </div>
      </div>
    </>
  )}