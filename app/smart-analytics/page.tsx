'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart, TrendingUp, Users, Eye, MousePointer, 
  Clock, DollarSign, Target, Globe, Smartphone, 
  Laptop, Tablet, ArrowUp, ArrowDown, RefreshCw,
  Download, Share, Settings, Filter, Calendar,
  Phone, Mail, MapPin, Award, Shield, Zap
} from 'lucide-react';

const SmartAnalyticsPage: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('overview');

  // Mock data - in a real app, this would come from an API
  const analyticsData = {
    overview: {
      totalUsers: 15420,
      newUsers: 1240,
      sessions: 45680,
      pageViews: 128450,
      bounceRate: 32.5,
      avgSessionDuration: '3m 24s',
      conversionRate: 4.2,
      revenue: 45680
    },
    traffic: {
      organic: 45.2,
      direct: 28.7,
      social: 15.3,
      referral: 8.1,
      email: 2.7
    },
    devices: {
      desktop: 52.3,
      mobile: 38.7,
      tablet: 9.0
    },
    topPages: [
      { page: '/ai-writing-assistant', views: 12540, bounceRate: 28.5 },
      { page: '/smart-analytics', views: 8920, bounceRate: 31.2 },
      { page: '/micro-saas', views: 6780, bounceRate: 35.8 },
      { page: '/ai-services', views: 5430, bounceRate: 29.1 },
      { page: '/contact', views: 4320, bounceRate: 42.3 }
    ],
    realTime: {
      activeUsers: 234,
      currentPage: 'AI Writing Assistant',
      topCountry: 'United States',
      topCity: 'New York'
    }
  };

  const metrics = [
    {
      id: 'overview',
      name: 'Overview',
      icon: BarChart,
      description: 'Key performance indicators and metrics'
    },
    {
      id: 'traffic',
      name: 'Traffic Sources',
      icon: Globe,
      description: 'Where your visitors come from'
    },
    {
      id: 'devices',
      name: 'Devices',
      icon: Smartphone,
      description: 'Device and platform breakdown'
    },
    {
      id: 'pages',
      name: 'Top Pages',
      icon: Target,
      description: 'Most visited pages and performance'
    },
    {
      id: 'realtime',
      name: 'Real-time',
      icon: Clock,
      description: 'Live visitor activity and behavior'
    }
  ];

  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Monitor your website performance with live data updates and instant insights.',
      benefits: ['Live visitor tracking', 'Real-time conversions', 'Instant alerts', 'Live dashboards']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered predictions to help you make data-driven decisions and forecast trends.',
      benefits: ['Trend forecasting', 'Anomaly detection', 'Predictive modeling', 'Future insights']
    },
    {
      icon: Target,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards with the metrics that matter most to your business.',
      benefits: ['Drag & drop builder', 'Custom widgets', 'Multiple dashboards', 'Team sharing']
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Generate and send automated reports to stakeholders on your schedule.',
      benefits: ['Scheduled reports', 'Email delivery', 'PDF export', 'Custom templates']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with GDPR compliance and data encryption.',
      benefits: ['GDPR compliant', 'Data encryption', 'Access controls', 'Audit logs']
    },
    {
      icon: Globe,
      title: 'Multi-platform Support',
      description: 'Track data across websites, mobile apps, and other digital properties.',
      benefits: ['Website tracking', 'Mobile app analytics', 'E-commerce tracking', 'API integration']
    }
  ];

  const integrations = [
    { name: 'Google Analytics', logo: 'GA', status: 'connected' },
    { name: 'Facebook Pixel', logo: 'FB', status: 'connected' },
    { name: 'Google Ads', logo: 'GAds', status: 'connected' },
    { name: 'Salesforce', logo: 'SF', status: 'pending' },
    { name: 'HubSpot', logo: 'HS', status: 'connected' },
    { name: 'Stripe', logo: 'ST', status: 'connected' },
    { name: 'Shopify', logo: 'SH', status: 'pending' },
    { name: 'Mailchimp', logo: 'MC', status: 'connected' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      originalPrice: '$79',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 100K page views/month',
        'Basic analytics dashboard',
        '5 custom reports',
        'Email support',
        '1 user account',
        '30-day data retention'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      originalPrice: '$149',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1M page views/month',
        'Advanced analytics dashboard',
        'Unlimited custom reports',
        'Predictive analytics',
        'Priority support',
        '5 user accounts',
        '1-year data retention',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      originalPrice: '$399',
      description: 'For large organizations',
      features: [
        'Unlimited page views',
        'Custom analytics solutions',
        'White-label dashboards',
        'Advanced AI insights',
        'Dedicated support',
        'Unlimited users',
        'Unlimited data retention',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const handleRefresh = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const renderOverviewMetrics = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card">
        <div className="flex items-center justify-between mb-4">
          <Users className="w-8 h-8 text-cyan-400" />
          <div className="flex items-center text-green-400 text-sm">
            <ArrowUp className="w-4 h-4 mr-1" />
            +12.5%
          </div>
        </div>
        <div className="text-2xl font-bold text-white mb-1">
          {analyticsData.overview.totalUsers.toLocaleString()}
        </div>
        <div className="text-gray-400 text-sm">Total Users</div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card">
        <div className="flex items-center justify-between mb-4">
          <Eye className="w-8 h-8 text-purple-400" />
          <div className="flex items-center text-green-400 text-sm">
            <ArrowUp className="w-4 h-4 mr-1" />
            +8.2%
          </div>
        </div>
        <div className="text-2xl font-bold text-white mb-1">
          {analyticsData.overview.sessions.toLocaleString()}
        </div>
        <div className="text-gray-400 text-sm">Sessions</div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card">
        <div className="flex items-center justify-between mb-4">
          <MousePointer className="w-8 h-8 text-green-400" />
          <div className="flex items-center text-red-400 text-sm">
            <ArrowDown className="w-4 h-4 mr-1" />
            -2.1%
          </div>
        </div>
        <div className="text-2xl font-bold text-white mb-1">
          {analyticsData.overview.bounceRate}%
        </div>
        <div className="text-gray-400 text-sm">Bounce Rate</div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card">
        <div className="flex items-center justify-between mb-4">
          <DollarSign className="w-8 h-8 text-orange-400" />
          <div className="flex items-center text-green-400 text-sm">
            <ArrowUp className="w-4 h-4 mr-1" />
            +15.3%
          </div>
        </div>
        <div className="text-2xl font-bold text-white mb-1">
          ${analyticsData.overview.revenue.toLocaleString()}
        </div>
        <div className="text-gray-400 text-sm">Revenue</div>
      </div>
    </div>
  );

  const renderTrafficSources = () => (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card">
      <h3 className="text-xl font-bold text-white mb-6">Traffic Sources</h3>
      <div className="space-y-4">
        {Object.entries(analyticsData.traffic).map(([source, percentage]) => (
          <div key={source} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
              <span className="text-gray-300 capitalize">{source}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="text-white font-medium w-12 text-right">{percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDevices = () => (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card">
      <h3 className="text-xl font-bold text-white mb-6">Device Breakdown</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(analyticsData.devices).map(([device, percentage]) => (
          <div key={device} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              {device === 'desktop' && <Laptop className="w-8 h-8 text-white" />}
              {device === 'mobile' && <Smartphone className="w-8 h-8 text-white" />}
              {device === 'tablet' && <Tablet className="w-8 h-8 text-white" />}
            </div>
            <div className="text-2xl font-bold text-white mb-1">{percentage}%</div>
            <div className="text-gray-400 capitalize">{device}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTopPages = () => (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card">
      <h3 className="text-xl font-bold text-white mb-6">Top Pages</h3>
      <div className="space-y-4">
        {analyticsData.topPages.map((page, index) => (
          <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700/50 last:border-b-0">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <div className="text-white font-medium">{page.page}</div>
                <div className="text-gray-400 text-sm">Bounce Rate: {page.bounceRate}%</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-medium">{page.views.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">views</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRealTime = () => (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Real-time Activity</h3>
        <div className="flex items-center space-x-2 text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm">Live</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="text-3xl font-bold text-cyan-400 mb-2">
            {analyticsData.realTime.activeUsers}
          </div>
          <div className="text-gray-400">Active Users</div>
        </div>
        <div>
          <div className="text-lg font-medium text-white mb-1">
            {analyticsData.realTime.currentPage}
          </div>
          <div className="text-gray-400 text-sm">Current Page</div>
        </div>
        <div>
          <div className="text-lg font-medium text-white mb-1">
            {analyticsData.realTime.topCountry}
          </div>
          <div className="text-gray-400 text-sm">Top Country</div>
        </div>
        <div>
          <div className="text-lg font-medium text-white mb-1">
            {analyticsData.realTime.topCity}
          </div>
          <div className="text-gray-400 text-sm">Top City</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Smart Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="AI-powered business intelligence with predictive analytics and automated reporting. Make data-driven decisions and identify trends 3x faster." />
        <meta name="keywords" content="analytics dashboard, business intelligence, predictive analytics, data visualization, reporting, insights" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                Smart Analytics Dashboard
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                AI-powered business intelligence that transforms your data into actionable insights. 
                Make data-driven decisions with predictive analytics and automated reporting.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">8,500+</div>
                  <div className="text-gray-300 text-sm">Active Users</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card">
                  <div className="text-2xl font-bold text-green-400 mb-1">4.8/5</div>
                  <div className="text-gray-300 text-sm">User Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card">
                  <div className="text-2xl font-bold text-purple-400 mb-1">3x</div>
                  <div className="text-gray-300 text-sm">Faster Insights</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card">
                  <div className="text-2xl font-bold text-orange-400 mb-1">90%</div>
                  <div className="text-gray-300 text-sm">Time Saved</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  View Live Demo
                </button>
                <a
                  href="tel:+13024640950"
                  className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500/10 transition-all text-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>

            {/* Demo Dashboard */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Live Dashboard</h3>
                <button
                  onClick={handleRefresh}
                  disabled={isLoading}
                  className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>
              
              {/* Mini Dashboard */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400">15.4K</div>
                  <div className="text-gray-400 text-sm">Total Users</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">45.6K</div>
                  <div className="text-gray-400 text-sm">Sessions</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">32.5%</div>
                  <div className="text-gray-400 text-sm">Bounce Rate</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-400">$45.6K</div>
                  <div className="text-gray-400 text-sm">Revenue</div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-slate-800/50 rounded-lg p-4 h-32 flex items-center justify-center">
                <BarChart className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Interactive Analytics Dashboard
          </h2>
          
          {/* Metric Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {metrics.map((metric) => (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedMetric === metric.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <metric.icon className="w-4 h-4" />
                <span className="font-medium">{metric.name}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="mb-8">
            {selectedMetric === 'overview' && renderOverviewMetrics()}
            {selectedMetric === 'traffic' && renderTrafficSources()}
            {selectedMetric === 'devices' && renderDevices()}
            {selectedMetric === 'pages' && renderTopPages()}
            {selectedMetric === 'realtime' && renderRealTime()}
          </div>

          {/* Period Selector */}
          <div className="flex justify-center space-x-4 mb-8">
            {['24h', '7d', '30d', '90d'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedPeriod === period
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Analytics Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Seamless Integrations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">{integration.logo}</span>
                </div>
                <h3 className="text-white font-medium mb-2">{integration.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  integration.status === 'connected' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {integration.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card ${
                  plan.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join 8,500+ businesses that are already making better decisions with AI-powered analytics. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartAnalyticsPage;