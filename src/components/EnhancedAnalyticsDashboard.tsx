import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target, 
  BarChart3, 
  PieChart, 
  Activity,
  ArrowUp,
  ArrowDown,
  Star,
  Shield,
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity,
  Cloud,
  Cpu,
  Search,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Gauge,
  GitFork,
  Atom,
  Truck,
  Building,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ShoppingCart,
  Lock,
  FileText,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Leaf,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle,
  ArrowUpRight,
  Play,
  MailIcon
} from 'lucide-react';

interface MetricCard {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ComponentType<any>;
  color: string;
  description: string;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
  }[];
}

export const EnhancedAnalyticsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('30d');
  const [isLoading, setIsLoading] = useState(false);

  const metrics: MetricCard[] = [
    {
      title: 'Total Revenue',
      value: '$2.8M',
      change: 23.5,
      changeType: 'increase',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      description: 'Year-to-date revenue growth'
    },
    {
      title: 'Active Users',
      value: '45.2K',
      change: 18.7,
      changeType: 'increase',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      description: 'Monthly active users'
    },
    {
      title: 'ROI Average',
      value: '847%',
      change: 12.3,
      changeType: 'increase',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      description: 'Average return on investment'
    },
    {
      title: 'Success Rate',
      value: '99.2%',
      change: 2.1,
      changeType: 'increase',
      icon: CheckCircle,
      color: 'from-cyan-500 to-blue-500',
      description: 'Project success rate'
    }
  ];

  const chartData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [1200000, 1350000, 1420000, 1580000, 1720000, 1890000],
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgb(34, 197, 94)'
      },
      {
        label: 'ROI',
        data: [650, 720, 780, 820, 890, 920],
        backgroundColor: 'rgba(168, 85, 247, 0.2)',
        borderColor: 'rgb(168, 85, 247)'
      }
    ]
  };

  const servicePerformance = [
    {
      name: 'AI Business Intelligence',
      performance: 98,
      growth: 24.5,
      revenue: '$450K',
      color: 'from-purple-500 to-cyan-500'
    },
    {
      name: 'AI Healthcare Platform',
      performance: 96,
      growth: 31.2,
      revenue: '$380K',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Quantum AI Cybersecurity',
      performance: 99,
      growth: 28.7,
      revenue: '$520K',
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'AI Content Creation',
      performance: 94,
      growth: 19.8,
      revenue: '$290K',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'revenue', name: 'Revenue', icon: DollarSign },
    { id: 'performance', name: 'Performance', icon: TrendingUp },
    { id: 'analytics', name: 'Analytics', icon: PieChart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Enhanced Analytics Dashboard
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Real-time insights into Zion Tech Group's performance, revenue, and growth metrics
          </motion.p>
        </div>

        {/* Time Range Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800 rounded-lg p-1">
            {['7d', '30d', '90d', '1y'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  timeRange === range
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${metric.color}`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center text-sm ${
                  metric.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.changeType === 'increase' ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  {metric.change}%
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
              <p className="text-gray-400 text-sm mb-2">{metric.title}</p>
              <p className="text-gray-500 text-xs">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 rounded-xl p-8 border border-slate-700"
          >
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Performance Overview</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Revenue Trend</h4>
                    <div className="space-y-3">
                      {chartData.labels.map((label, index) => (
                        <div key={label} className="flex items-center justify-between">
                          <span className="text-gray-400">{label}</span>
                          <div className="flex items-center space-x-4">
                            <span className="text-white">${(chartData.datasets[0].data[index] / 1000000).toFixed(1)}M</span>
                            <div className="w-32 bg-slate-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                                style={{ width: `${(chartData.datasets[0].data[index] / 2000000) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">ROI Performance</h4>
                    <div className="space-y-3">
                      {chartData.labels.map((label, index) => (
                        <div key={label} className="flex items-center justify-between">
                          <span className="text-gray-400">{label}</span>
                          <div className="flex items-center space-x-4">
                            <span className="text-white">{chartData.datasets[1].data[index]}%</span>
                            <div className="w-32 bg-slate-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                                style={{ width: `${(chartData.datasets[1].data[index] / 1000) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'performance' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Service Performance</h3>
                <div className="space-y-4">
                  {servicePerformance.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-700 rounded-lg p-6 border border-slate-600"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-medium`}>
                          {service.performance}%
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-cyan-400">{service.growth}%</div>
                          <div className="text-gray-400 text-sm">Growth</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-400">{service.revenue}</div>
                          <div className="text-gray-400 text-sm">Revenue</div>
                        </div>
                        <div>
                          <div className="w-full bg-slate-600 rounded-full h-3">
                            <div 
                              className={`bg-gradient-to-r ${service.color} h-3 rounded-full`}
                              style={{ width: `${service.performance}%` }}
                            />
                          </div>
                          <div className="text-gray-400 text-sm mt-1">Performance</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Advanced Analytics</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Market Share</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">AI Business Intelligence</span>
                        <span className="text-white font-semibold">23.4%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Cybersecurity</span>
                        <span className="text-white font-semibold">18.7%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Cloud Services</span>
                        <span className="text-white font-semibold">15.2%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Customer Satisfaction</h4>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">98.7%</div>
                      <div className="text-gray-400">Average Rating</div>
                      <div className="flex justify-center mt-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};