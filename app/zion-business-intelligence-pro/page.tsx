'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cpu, Zap, Shield, BarChart, Users, ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Clock, Rocket, Target, Globe, Code, Database, Smartphone, Lock, Wifi, MessageCircle, ShoppingCart, Box, Monitor, Link as LinkIcon, Server, Calendar, CheckSquare, Workflow, Mic, Eye, Heart, DollarSign, Package, Settings, Video, FileText, TrendingUp, PieChart, Activity, BarChart3 } from 'lucide-react';

const ZionBusinessIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms that automatically identify trends, patterns, and insights from your data.',
      benefits: ['Predictive Analytics', 'Trend Analysis', 'Anomaly Detection', 'Smart Insights']
    },
    {
      icon: Brain,
      title: 'Natural Language Queries',
      description: 'Ask questions in plain English and get instant answers from your data with AI-powered natural language processing.',
      benefits: ['Voice Commands', 'Text Queries', 'Instant Answers', 'Context Understanding']
    },
    {
      icon: TrendingUp,
      title: 'Real-time Dashboards',
      description: 'Live, interactive dashboards that update in real-time with customizable widgets and automated alerts.',
      benefits: ['Live Updates', 'Custom Widgets', 'Smart Alerts', 'Mobile Access']
    },
    {
      icon: PieChart,
      title: 'Advanced Visualizations',
      description: 'Create stunning, interactive charts and graphs that make complex data easy to understand and share.',
      benefits: ['Interactive Charts', '3D Visualizations', 'Custom Themes', 'Export Options']
    }
  ];

  const capabilities = [
    {
      title: 'Data Integration',
      description: 'Connect to 100+ data sources including databases, APIs, cloud services, and spreadsheets.',
      icon: Database,
      benefits: ['100+ Connectors', 'Real-time Sync', 'Data Transformation', 'Error Handling']
    },
    {
      title: 'Automated Reporting',
      description: 'Generate and schedule reports automatically with AI-powered insights and recommendations.',
      icon: FileText,
      benefits: ['Scheduled Reports', 'AI Insights', 'Email Delivery', 'Custom Formats']
    },
    {
      title: 'Collaborative Analytics',
      description: 'Share insights and collaborate with your team through comments, annotations, and shared workspaces.',
      icon: Users,
      benefits: ['Team Collaboration', 'Shared Workspaces', 'Comments & Annotations', 'Version Control']
    },
    {
      title: 'Mobile Analytics',
      description: 'Access your data and insights anywhere with our mobile-optimized interface and offline capabilities.',
      icon: Smartphone,
      benefits: ['Mobile App', 'Offline Access', 'Push Notifications', 'Touch Optimized']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        'Up to 5 data sources',
        '10 dashboards',
        'Basic AI insights',
        'Email support',
        '5GB data storage',
        'Standard reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 25 data sources',
        'Unlimited dashboards',
        'Advanced AI analytics',
        'Priority support',
        '50GB data storage',
        'Custom reports',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited data sources',
        'Unlimited dashboards',
        'AI-powered insights',
        '24/7 dedicated support',
        'Unlimited storage',
        'Custom integrations',
        'White-label options',
        'Advanced security'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '500+', label: 'Companies Using' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50%', label: 'Faster Decisions' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Business Intelligence Pro - AI-Powered Analytics Platform</title>
        <meta name="description" content="Transform your data into actionable insights with Zion Business Intelligence Pro. AI-powered analytics, real-time dashboards, and natural language queries for smarter business decisions." />
        <meta name="keywords" content="business intelligence, data analytics, AI insights, dashboards, reporting, data visualization, business intelligence platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16 relative">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
                  📊 AI-Powered Business Intelligence
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Zion Business Intelligence
                <span className="block text-6xl md:text-8xl mt-2">Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your data into actionable insights with AI-powered analytics, real-time dashboards, 
                and natural language queries. Make smarter business decisions faster than ever before.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful AI <span className="text-purple-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced analytics capabilities powered by artificial intelligence for deeper insights and smarter decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete <span className="text-cyan-400">Analytics Platform</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into actionable business insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your <span className="text-purple-400">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-purple-400/50 scale-105 shadow-2xl shadow-purple-500/20' 
                      : 'border-white/10 hover:border-purple-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
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
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600'
                        : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-purple-500/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies using Zion Business Intelligence Pro to make smarter, 
                data-driven decisions. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ZionBusinessIntelligenceProPage;
