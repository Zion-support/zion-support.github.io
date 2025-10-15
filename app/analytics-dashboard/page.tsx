'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ChartBarIcon,
  TrendingUpIcon,
  EyeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  BoltIcon,
  GlobeAltIcon,
  CogIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const AnalyticsDashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for demonstration
  const [analyticsData, setAnalyticsData] = useState({
    totalVisitors: 125430,
    pageViews: 892340,
    conversionRate: 3.24,
    revenue: 45670,
    bounceRate: 42.1,
    avgSessionDuration: '2m 34s',
    topPages: [
      { page: '/home', views: 45230, change: 12.5 },
      { page: '/products', views: 32140, change: -2.3 },
      { page: '/about', views: 28760, change: 8.7 },
      { page: '/contact', views: 19840, change: 15.2 },
      { page: '/blog', views: 16520, change: -5.1 }
    ],
    trafficSources: [
      { source: 'Organic Search', percentage: 45.2, visitors: 56720 },
      { source: 'Direct', percentage: 28.7, visitors: 35980 },
      { source: 'Social Media', percentage: 15.3, visitors: 19190 },
      { source: 'Email', percentage: 6.8, visitors: 8520 },
      { source: 'Referral', percentage: 4.0, visitors: 5020 }
    ],
    deviceBreakdown: [
      { device: 'Desktop', percentage: 58.3, visitors: 73120 },
      { device: 'Mobile', percentage: 35.7, visitors: 44780 },
      { device: 'Tablet', percentage: 6.0, visitors: 7530 }
    ],
    realTimeVisitors: 47,
    topCountries: [
      { country: 'United States', visitors: 45230, percentage: 36.1 },
      { country: 'United Kingdom', visitors: 18940, percentage: 15.1 },
      { country: 'Canada', visitors: 15670, percentage: 12.5 },
      { country: 'Germany', visitors: 12340, percentage: 9.8 },
      { country: 'Australia', visitors: 9870, percentage: 7.9 }
    ]
  });

  const [chartData, setChartData] = useState({
    visitors: [120, 135, 142, 138, 155, 168, 175],
    pageViews: [850, 920, 880, 950, 1020, 1100, 1150],
    revenue: [1200, 1350, 1420, 1380, 1550, 1680, 1750]
  });

  const features = [
    {
      icon: ChartBarIcon,
      title: 'Real-Time Analytics',
      description: 'Monitor your website performance with live data updates and instant insights.',
      price: 'Included'
    },
    {
      icon: TrendingUpIcon,
      title: 'Advanced Reporting',
      description: 'Comprehensive reports with custom date ranges, filters, and export options.',
      price: 'Included'
    },
    {
      icon: EyeIcon,
      title: 'User Behavior Tracking',
      description: 'Track user journeys, heatmaps, and conversion funnels to optimize your site.',
      price: 'Included'
    },
    {
      icon: UserGroupIcon,
      title: 'Audience Insights',
      description: 'Detailed demographic data, interests, and behavior patterns of your visitors.',
      price: 'Included'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'E-commerce Analytics',
      description: 'Track sales, revenue, and product performance with detailed e-commerce metrics.',
      price: 'Pro Plan'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Property Tracking',
      description: 'Monitor multiple websites and properties from a single dashboard.',
      price: 'Pro Plan'
    },
    {
      icon: CogIcon,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards with widgets and metrics that matter to you.',
      price: 'Enterprise'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Data Privacy Compliance',
      description: 'GDPR and CCPA compliant analytics with data retention controls.',
      price: 'Enterprise'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small websites and blogs',
      features: [
        'Up to 100K page views/month',
        'Basic analytics dashboard',
        'Real-time data',
        'Email support',
        '1 website property'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and e-commerce',
      features: [
        'Up to 1M page views/month',
        'Advanced analytics & reporting',
        'E-commerce tracking',
        'Multi-property support',
        'Priority support',
        'Custom dashboards',
        'Data export'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited page views',
        'All features included',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support',
        'Data privacy compliance',
        'White-label options',
        'API access'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      role: 'Marketing Director',
      company: 'E-commerce Plus',
      content: 'The real-time analytics helped us increase our conversion rate by 35%. The insights are incredibly detailed and actionable.',
      rating: 5
    },
    {
      name: 'Mark Thompson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'We finally understand our users better. The audience insights feature has been a game-changer for our marketing strategy.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      role: 'Web Developer',
      company: 'Digital Agency Co.',
      content: 'The custom dashboards save us hours every week. Our clients love the detailed reports we can now provide.',
      rating: 5
    }
  ];

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-400' : 'text-red-400';
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? ArrowUpIcon : ArrowDownIcon;
  };

  return (
    <>
      <Helmet>
        <title>Analytics Dashboard Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced web analytics dashboard with real-time data, user behavior tracking, and comprehensive reporting. Boost your website performance." />
        <meta name="keywords" content="web analytics, data dashboard, user behavior tracking, conversion optimization, real-time analytics" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <ChartBarIcon className="w-5 h-5 text-indigo-400 mr-2" />
                <span className="text-indigo-300 text-sm font-medium">Advanced Web Analytics</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Analytics Dashboard Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Unlock the power of your data with our advanced analytics dashboard. Real-time insights, user behavior tracking, and comprehensive reporting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25"
                >
                  View Live Demo
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                </button>
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">1M+</div>
                  <div className="text-gray-400 text-sm">Data Points Tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
                  <div className="text-gray-400 text-sm">Websites Monitored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Real-Time Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Live <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Analytics Dashboard</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Experience our powerful analytics dashboard with real-time data and interactive visualizations.
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                {/* Dashboard Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 sm:mb-0">Analytics Overview</h3>
                  <div className="flex gap-2">
                    {['7d', '30d', '90d', '1y'].map((period) => (
                      <button
                        key={period}
                        onClick={() => setSelectedPeriod(period)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          selectedPeriod === period
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Total Visitors</h4>
                      <EyeIcon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {analyticsData.totalVisitors.toLocaleString()}
                    </div>
                    <div className="flex items-center text-sm">
                      <ArrowUpIcon className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-green-400">+12.5%</span>
                      <span className="text-gray-400 ml-1">vs last period</span>
                    </div>
                  </div>

                  <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Page Views</h4>
                      <ChartBarIcon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {analyticsData.pageViews.toLocaleString()}
                    </div>
                    <div className="flex items-center text-sm">
                      <ArrowUpIcon className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-green-400">+8.3%</span>
                      <span className="text-gray-400 ml-1">vs last period</span>
                    </div>
                  </div>

                  <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Conversion Rate</h4>
                      <TrendingUpIcon className="w-5 h-5 text-pink-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {analyticsData.conversionRate}%
                    </div>
                    <div className="flex items-center text-sm">
                      <ArrowUpIcon className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-green-400">+2.1%</span>
                      <span className="text-gray-400 ml-1">vs last period</span>
                    </div>
                  </div>

                  <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Revenue</h4>
                      <CurrencyDollarIcon className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      ${analyticsData.revenue.toLocaleString()}
                    </div>
                    <div className="flex items-center text-sm">
                      <ArrowUpIcon className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-green-400">+15.7%</span>
                      <span className="text-gray-400 ml-1">vs last period</span>
                    </div>
                  </div>
                </div>

                {/* Charts and Tables */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Top Pages */}
                  <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                    <h4 className="text-lg font-semibold text-white mb-4">Top Pages</h4>
                    <div className="space-y-3">
                      {analyticsData.topPages.map((page, index) => {
                        const ChangeIcon = getChangeIcon(page.change);
                        return (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white">{page.page}</div>
                              <div className="text-xs text-gray-400">{page.views.toLocaleString()} views</div>
                            </div>
                            <div className={`flex items-center text-sm ${getChangeColor(page.change)}`}>
                              <ChangeIcon className="w-4 h-4 mr-1" />
                              {Math.abs(page.change)}%
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Traffic Sources */}
                  <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                    <h4 className="text-lg font-semibold text-white mb-4">Traffic Sources</h4>
                    <div className="space-y-3">
                      {analyticsData.trafficSources.map((source, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white">{source.source}</div>
                            <div className="text-xs text-gray-400">{source.visitors.toLocaleString()} visitors</div>
                          </div>
                          <div className="text-sm text-indigo-400 font-medium">
                            {source.percentage}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Real-time Stats */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Live Visitors</h4>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {analyticsData.realTimeVisitors}
                    </div>
                    <div className="text-xs text-gray-400">currently online</div>
                  </div>

                  <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Bounce Rate</h4>
                      <ArrowDownIcon className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {analyticsData.bounceRate}%
                    </div>
                    <div className="text-xs text-gray-400">-2.3% vs last period</div>
                  </div>

                  <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Avg. Session</h4>
                      <ClockIcon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {analyticsData.avgSessionDuration}
                    </div>
                    <div className="text-xs text-gray-400">+15s vs last period</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand your audience, optimize performance, and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm">
                    {feature.description}
                  </p>
                  <span className="text-xs text-indigo-400 font-medium">{feature.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your analytics needs. All plans include our core features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-indigo-500 shadow-lg shadow-indigo-500/25' 
                    : 'border-slate-700 hover:border-indigo-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                      : 'border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-500 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses who trust our analytics platform to drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start tracking your website performance today. No credit card required for the free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
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

export default AnalyticsDashboard;
