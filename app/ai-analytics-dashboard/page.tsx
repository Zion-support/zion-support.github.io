'use client';
import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  EyeIcon,
  ClockIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  SparklesIcon,
  CogIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AIAnalyticsDashboardPage: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 12450,
    revenue: 89420,
    conversionRate: 3.2,
    bounceRate: 42.1,
    pageViews: 156780,
    sessions: 89450,
    avgSessionDuration: 4.2,
    newUsers: 3240
  });

  const [chartData, setChartData] = useState([
    { name: 'Mon', users: 1200, revenue: 8500 },
    { name: 'Tue', users: 1900, revenue: 12000 },
    { name: 'Wed', users: 3000, revenue: 18000 },
    { name: 'Thu', users: 2800, revenue: 16000 },
    { name: 'Fri', users: 1890, revenue: 14000 },
    { name: 'Sat', users: 2390, revenue: 15000 },
    { name: 'Sun', users: 3490, revenue: 20000 }
  ]);

  const [insights, setInsights] = useState([
    {
      type: 'positive',
      title: 'Revenue Growth',
      description: 'Revenue increased by 15% compared to last week',
      value: '+15%',
      icon: TrendingUpIcon
    },
    {
      type: 'positive',
      title: 'User Engagement',
      description: 'Average session duration increased by 8%',
      value: '+8%',
      icon: ClockIcon
    },
    {
      type: 'negative',
      title: 'Bounce Rate',
      description: 'Bounce rate increased by 2% - needs attention',
      value: '+2%',
      icon: ArrowUpIcon
    },
    {
      type: 'positive',
      title: 'New Users',
      description: 'New user acquisition up by 12%',
      value: '+12%',
      icon: UserGroupIcon
    }
  ]);

  const [aiRecommendations, setAiRecommendations] = useState([
    {
      title: 'Optimize Landing Page',
      description: 'Based on high bounce rate, consider A/B testing different headlines',
      priority: 'High',
      impact: 'Medium'
    },
    {
      title: 'Increase Ad Spend',
      description: 'Revenue per user is high, consider increasing marketing budget',
      priority: 'Medium',
      impact: 'High'
    },
    {
      title: 'Improve Mobile Experience',
      description: 'Mobile conversion rate is 40% lower than desktop',
      priority: 'High',
      impact: 'High'
    }
  ]);

  const features = [
    {
      icon: SparklesIcon,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Real-Time Analytics',
      description: 'Monitor your business metrics in real-time with live data updates.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: UserGroupIcon,
      title: 'User Behavior Analysis',
      description: 'Understand how users interact with your product and optimize accordingly.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and make data-driven business decisions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Platform Support',
      description: 'Track data from websites, mobile apps, and other digital touchpoints.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Data Security',
      description: 'Enterprise-grade security with GDPR compliance and data encryption.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-400 bg-red-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Low': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Low': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <>
      <SEOHead 
        title="AI Analytics Dashboard - Zion Tech Group"
        description="Advanced AI-powered analytics dashboard with real-time insights, predictive analytics, and intelligent recommendations. Transform your data into actionable business intelligence."
        keywords="AI analytics, business intelligence, data visualization, predictive analytics, real-time analytics, dashboard"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-6">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                AI Analytics
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your data into actionable insights with AI-powered analytics. 
                Get real-time monitoring, predictive analytics, and intelligent recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Try Live Demo
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Dashboard Demo */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Live Dashboard Preview
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Experience the power of AI analytics with our interactive demo
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              {/* Timeframe Selector */}
              <div className="flex justify-center mb-8">
                <div className="bg-slate-700 rounded-lg p-1">
                  {['1d', '7d', '30d', '90d'].map((timeframe) => (
                    <button
                      key={timeframe}
                      onClick={() => setSelectedTimeframe(timeframe)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        selectedTimeframe === timeframe
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-slate-600'
                      }`}
                    >
                      {timeframe === '1d' ? '1 Day' : 
                       timeframe === '7d' ? '7 Days' :
                       timeframe === '30d' ? '30 Days' : '90 Days'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <UserGroupIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-green-400 text-sm font-medium flex items-center">
                      <ArrowUpIcon className="w-4 h-4 mr-1" />
                      +12%
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {formatNumber(dashboardData.totalUsers)}
                  </div>
                  <div className="text-gray-400 text-sm">Total Users</div>
                </div>

                <div className="bg-slate-700/50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <CurrencyDollarIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-green-400 text-sm font-medium flex items-center">
                      <ArrowUpIcon className="w-4 h-4 mr-1" />
                      +15%
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    ${formatNumber(dashboardData.revenue)}
                  </div>
                  <div className="text-gray-400 text-sm">Revenue</div>
                </div>

                <div className="bg-slate-700/50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <TrendingUpIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-green-400 text-sm font-medium flex items-center">
                      <ArrowUpIcon className="w-4 h-4 mr-1" />
                      +0.3%
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {dashboardData.conversionRate}%
                  </div>
                  <div className="text-gray-400 text-sm">Conversion Rate</div>
                </div>

                <div className="bg-slate-700/50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <EyeIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-red-400 text-sm font-medium flex items-center">
                      <ArrowUpIcon className="w-4 h-4 mr-1" />
                      +2%
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {dashboardData.bounceRate}%
                  </div>
                  <div className="text-gray-400 text-sm">Bounce Rate</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-slate-700/30 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Revenue & Users Trend</h3>
                <div className="h-64 flex items-end space-x-2">
                  {chartData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-lg mb-2"
                           style={{ height: `${(data.revenue / 20000) * 200}px` }}>
                      </div>
                      <div className="text-xs text-gray-400">{data.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insights */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-700/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <SparklesIcon className="w-5 h-5 mr-2 text-purple-400" />
                    AI Insights
                  </h3>
                  <div className="space-y-3">
                    {insights.map((insight, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-slate-600/30 rounded-lg">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          insight.type === 'positive' ? 'bg-green-500/20' : 'bg-red-500/20'
                        }`}>
                          <insight.icon className={`w-4 h-4 ${
                            insight.type === 'positive' ? 'text-green-400' : 'text-red-400'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-white">{insight.title}</h4>
                            <span className={`text-sm font-bold ${
                              insight.type === 'positive' ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {insight.value}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">{insight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CogIcon className="w-5 h-5 mr-2 text-blue-400" />
                    AI Recommendations
                  </h3>
                  <div className="space-y-3">
                    {aiRecommendations.map((rec, index) => (
                      <div key={index} className="p-3 bg-slate-600/30 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-white">{rec.title}</h4>
                          <div className="flex space-x-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                              {rec.priority}
                            </span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getImpactColor(rec.impact)}`}>
                              {rec.impact}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400">{rec.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to make data-driven decisions with AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your analytics needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$79<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">Perfect for small businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 100K events/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI insights
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Real-time dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Professional Plan */}
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$199<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">For growing businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 1M events/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI insights
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Custom dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$599<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">For large organizations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited events
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using AI analytics to make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAnalyticsDashboardPage;