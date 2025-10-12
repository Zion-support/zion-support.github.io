'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Sparkles, Rocket, Mail, Video, FileText, Smartphone, Cpu, Database, BarChart3, Settings, Calendar, Share2, BarChart, Clock, DollarSign, TrendingUp as TrendingUpIcon, Eye, Heart, MessageCircle, Share, Plus, Edit, Trash2, Save, Upload, Download, Filter, Search, RefreshCw, Play, Pause, Stop, SkipForward, SkipBack, Send, MailOpen, UserPlus, UserMinus, Tag, Layers, PieChart, Activity } from 'lucide-react';

const AIEmailMarketingAutomation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('campaigns');
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Welcome Series',
      status: 'active',
      subscribers: 1250,
      openRate: 68.5,
      clickRate: 12.3,
      conversionRate: 3.2,
      revenue: 15600
    },
    {
      id: 2,
      name: 'Product Launch',
      status: 'scheduled',
      subscribers: 890,
      openRate: 0,
      clickRate: 0,
      conversionRate: 0,
      revenue: 0
    },
    {
      id: 3,
      name: 'Abandoned Cart',
      status: 'active',
      subscribers: 2100,
      openRate: 45.2,
      clickRate: 8.7,
      conversionRate: 2.1,
      revenue: 8900
    }
  ]);
  const [analytics, setAnalytics] = useState({
    totalSubscribers: 15600,
    openRate: 42.3,
    clickRate: 8.7,
    conversionRate: 2.8,
    revenue: 45600,
    unsubscribes: 23,
    bounces: 12
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate compelling email content, subject lines, and CTAs using advanced AI',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior and preferences',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Calendar,
      title: 'Automated Workflows',
      description: 'Create complex email sequences that trigger based on user actions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Track performance with detailed analytics and ROI reporting',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      features: [
        'Up to 5,000 subscribers',
        'Unlimited emails',
        'Basic AI content generation',
        'Email templates',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      features: [
        'Up to 25,000 subscribers',
        'Advanced AI features',
        'Smart segmentation',
        'A/B testing',
        'Advanced analytics',
        'Priority support',
        'Custom templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      features: [
        'Unlimited subscribers',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        'API access',
        'Advanced automation',
        'Custom reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'E-commerce Plus',
      content: 'Our email open rates increased by 150% and conversions by 200% with AI Email Marketing Automation!',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      company: 'SaaS Solutions',
      content: 'The AI-generated content is so good, our customers think we have a team of copywriters.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      company: 'Digital Agency',
      content: 'The automation workflows save us hours every week. Our ROI has never been better.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Boost email engagement with AI-powered content generation, smart segmentation, and automated workflows. Increase open rates by 150% and conversions by 200%." />
        <meta name="keywords" content="AI email marketing, email automation, email content generation, email segmentation, email analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl mb-6">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Email Marketing Automation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Boost email engagement with AI-powered content generation, smart segmentation, and automated workflows
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group">
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                  Watch Demo
                </button>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-white mb-2">150%</div>
                  <div className="text-gray-400 text-sm">Increase in Open Rates</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-white mb-2">200%</div>
                  <div className="text-gray-400 text-sm">Boost in Conversions</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-white mb-2">85%</div>
                  <div className="text-gray-400 text-sm">Time Saved</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Deliverability Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, send, and optimize email campaigns with AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Email Command Center</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Manage campaigns, track performance, and optimize with AI insights
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {/* Tab Navigation */}
              <div className="flex space-x-4 mb-8">
                {['campaigns', 'analytics', 'subscribers', 'templates'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Dashboard Content */}
              {activeTab === 'campaigns' && (
                <div className="space-y-4">
                  {campaigns.map((campaign) => (
                    <div key={campaign.id} className="bg-slate-700/50 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            campaign.status === 'active' ? 'bg-green-400' :
                            campaign.status === 'scheduled' ? 'bg-yellow-400' : 'bg-gray-400'
                          }`}></div>
                          <h3 className="text-lg font-semibold text-white">{campaign.name}</h3>
                          <span className="text-sm text-gray-400 capitalize">{campaign.status}</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-gray-400">Subscribers</div>
                          <div className="text-white font-semibold">{campaign.subscribers.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Open Rate</div>
                          <div className="text-white font-semibold">{campaign.openRate}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Click Rate</div>
                          <div className="text-white font-semibold">{campaign.clickRate}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Revenue</div>
                          <div className="text-white font-semibold">${campaign.revenue.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Total Subscribers</h3>
                      <Users className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{analytics.totalSubscribers.toLocaleString()}</div>
                    <div className="text-green-400 text-sm">+8.2% from last month</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Open Rate</h3>
                      <MailOpen className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{analytics.openRate}%</div>
                    <div className="text-green-400 text-sm">+2.1% from last month</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Click Rate</h3>
                      <Target className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{analytics.clickRate}%</div>
                    <div className="text-green-400 text-sm">+1.3% from last month</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Revenue</h3>
                      <DollarSign className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">${analytics.revenue.toLocaleString()}</div>
                    <div className="text-green-400 text-sm">+15.7% from last month</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your email marketing needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI Email Marketing Automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Email Marketing?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and see how AI can revolutionize your email campaigns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                    Start Free Trial
                  </button>
                  <Link 
                    to="/contact"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Sales
                  </Link>
                </div>
                <div className="mt-8 text-sm text-gray-400">
                  <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
                  <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIEmailMarketingAutomation;
