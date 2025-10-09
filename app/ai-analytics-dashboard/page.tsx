'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, BarChart, Eye, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading dashboard data
    setIsLoading(true);
    setTimeout(() => {
      setDashboardData({
        totalRevenue: 125000,
        revenueGrowth: 15.2,
        activeUsers: 2847,
        userGrowth: 8.7,
        conversionRate: 3.4,
        conversionGrowth: 12.1,
        avgSessionDuration: 4.2,
        sessionGrowth: 5.8,
        topPages: [
          { page: '/products', views: 15420, growth: 12.3 },
          { page: '/services', views: 12890, growth: 8.7 },
          { page: '/about', views: 9870, growth: 15.2 },
          { page: '/contact', views: 6540, growth: 6.1 }
        ],
        trafficSources: [
          { source: 'Organic Search', percentage: 45.2, visitors: 12840 },
          { source: 'Direct', percentage: 28.7, visitors: 8150 },
          { source: 'Social Media', percentage: 15.3, visitors: 4350 },
          { source: 'Email', percentage: 10.8, visitors: 3070 }
        ],
        aiInsights: [
          'User engagement increased 23% after implementing AI recommendations',
          'Mobile traffic shows 18% higher conversion rates than desktop',
          'Peak activity occurs between 2-4 PM on weekdays',
          'Users from organic search have 40% higher lifetime value'
        ]
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Monitor your business performance with live data updates and instant insights',
      benefits: ['Live data streaming', 'Instant notifications', 'Real-time alerts', 'Performance monitoring']
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns',
      benefits: ['Predictive analytics', 'Trend identification', 'Anomaly detection', 'Smart recommendations']
    },
    {
      icon: Eye,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your specific business needs',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based views', 'Mobile optimization']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and collaborate with your team through integrated tools',
      benefits: ['Shared dashboards', 'Comment system', 'Report sharing', 'Team notifications']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 data sources',
        'Basic analytics dashboard',
        'Monthly AI insights report',
        'Email support',
        'Standard integrations',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25 data sources',
        'Advanced analytics dashboard',
        'Weekly AI insights report',
        'Priority support',
        'Advanced integrations',
        'Custom dashboards',
        'Up to 10 user accounts',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,599',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited data sources',
        'Enterprise analytics suite',
        'Real-time AI insights',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label solution',
        'Unlimited user accounts',
        'Advanced API access',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      role: 'CEO',
      company: 'DataDriven Inc.',
      content: 'The AI Analytics Dashboard has transformed how we make business decisions. The insights are incredibly accurate and actionable.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Marketing Director',
      company: 'GrowthCo',
      content: 'We\'ve seen a 40% improvement in our marketing ROI since implementing the AI recommendations from this dashboard.',
      rating: 5
    },
    {
      name: 'Michael Brown',
      role: 'Operations Manager',
      company: 'TechSolutions',
      content: 'The real-time monitoring capabilities have helped us identify and resolve issues before they impact our customers.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Analytics Dashboard - Zion Tech Group"
        description="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time monitoring, predictive analytics, and intelligent recommendations for better business decisions."
        keywords={['AI analytics', 'business intelligence', 'data dashboard', 'predictive analytics', 'real-time monitoring', 'data visualization']}
        canonicalUrl="https://ziontechgroup.com/ai-analytics-dashboard"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Analytics Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our AI-powered analytics platform. 
              Get real-time monitoring, predictive analytics, and intelligent recommendations to drive better business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                View Live Demo
              </button>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">ROI Improvement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Real-time</div>
                <div className="text-gray-300">Data Processing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section id="demo-section" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Interactive Dashboard Demo
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
                  <p className="text-gray-300">Loading dashboard data...</p>
                </div>
              ) : dashboardData ? (
                <div className="space-y-8">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white/10 rounded-lg p-6 text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        ${dashboardData.totalRevenue.toLocaleString()}
                      </div>
                      <div className="text-gray-300 text-sm mb-2">Total Revenue</div>
                      <div className="text-green-400 text-sm flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +{dashboardData.revenueGrowth}%
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6 text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        {dashboardData.activeUsers.toLocaleString()}
                      </div>
                      <div className="text-gray-300 text-sm mb-2">Active Users</div>
                      <div className="text-green-400 text-sm flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +{dashboardData.userGrowth}%
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6 text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        {dashboardData.conversionRate}%
                      </div>
                      <div className="text-gray-300 text-sm mb-2">Conversion Rate</div>
                      <div className="text-green-400 text-sm flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +{dashboardData.conversionGrowth}%
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6 text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        {dashboardData.avgSessionDuration}m
                      </div>
                      <div className="text-gray-300 text-sm mb-2">Avg Session</div>
                      <div className="text-green-400 text-sm flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +{dashboardData.sessionGrowth}%
                      </div>
                    </div>
                  </div>

                  {/* Charts Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Top Pages */}
                    <div className="bg-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Top Performing Pages</h3>
                      <div className="space-y-4">
                        {dashboardData.topPages.map((page, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-medium">{page.page}</div>
                              <div className="text-gray-400 text-sm">{page.views.toLocaleString()} views</div>
                            </div>
                            <div className="text-green-400 text-sm flex items-center">
                              <TrendingUp className="w-4 h-4 mr-1" />
                              +{page.growth}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Traffic Sources */}
                    <div className="bg-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Traffic Sources</h3>
                      <div className="space-y-4">
                        {dashboardData.trafficSources.map((source, index) => (
                          <div key={index}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white font-medium">{source.source}</span>
                              <span className="text-cyan-400 font-bold">{source.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${source.percentage}%` }}
                              ></div>
                            </div>
                            <div className="text-gray-400 text-sm mt-1">{source.visitors.toLocaleString()} visitors</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Bot className="w-6 h-6 mr-2 text-cyan-400" />
                      AI Insights & Recommendations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {dashboardData.aiInsights.map((insight, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300 text-sm">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <BarChart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">Dashboard data will appear here</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful Analytics Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Choose Your Analytics Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                } cyber-card`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of businesses who trust our AI Analytics Dashboard to make data-driven decisions and drive growth.
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
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-100 hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIAnalyticsDashboardPage;