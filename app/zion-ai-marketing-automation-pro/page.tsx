'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, BarChart, Brain, Target, Zap, Shield, Globe, Database, Smartphone, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle as CheckCircleIcon, ShoppingCart, Award, Clock, Settings, Calendar, CheckSquare, Lock, TrendingUp as TrendingUpIcon, Cpu, Target as TargetIcon, Globe as GlobeIcon, Database as DatabaseIcon, Smartphone as SmartphoneIcon, Lock as LockIcon, TrendingUp as TrendingUpIcon2, Settings as SettingsIcon, Calendar as CalendarIcon, CheckSquare as CheckSquareIcon, FileText as FileTextIcon, MessageCircle as MessageCircleIcon, Heart as HeartIcon, DollarSign as DollarSignIcon, Box as BoxIcon, Monitor as MonitorIcon, Link as LinkIcon2, Server as ServerIcon, Package as PackageIcon, Mic as MicIcon, Workflow as WorkflowIcon, Eye as EyeIcon, Wifi as WifiIcon, MessageSquare as MessageSquareIcon, CheckCircle as CheckCircleIcon2, ShoppingCart as ShoppingCartIcon } from 'lucide-react';

const ZionAiMarketingAutomationProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Campaign Optimization',
      description: 'Automatically optimize email subject lines, send times, and content for maximum engagement and conversion rates.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Smart Audience Segmentation',
      description: 'Create dynamic customer segments based on behavior, preferences, and engagement patterns using machine learning.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Workflow,
      title: 'Advanced Workflow Automation',
      description: 'Build complex multi-channel marketing workflows with conditional logic and AI-driven decision making.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Predict customer behavior, lifetime value, and churn probability to optimize marketing spend and ROI.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5,000 contacts',
        'Basic email automation',
        'Simple workflows',
        'Email support',
        'Standard templates'
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25,000 contacts',
        'Advanced AI optimization',
        'Multi-channel campaigns',
        'Priority support',
        'Custom integrations',
        'A/B testing tools'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'Advanced analytics',
        '24/7 dedicated support',
        'White-label options',
        'Custom development'
      ],
      color: 'from-cyan-500 to-blue-500',
      popular: false
    }
  ];

  const automationTypes = [
    {
      title: 'Email Marketing',
      description: 'Send personalized emails at scale with AI-optimized content and timing.',
      icon: Mail,
      color: 'from-blue-500 to-purple-500',
      features: ['Smart subject lines', 'Send time optimization', 'Content personalization', 'A/B testing']
    },
    {
      title: 'Social Media',
      description: 'Automate social media posting and engagement across all platforms.',
      icon: MessageSquare,
      color: 'from-green-500 to-teal-500',
      features: ['Auto-posting', 'Engagement tracking', 'Hashtag optimization', 'Content scheduling']
    },
    {
      title: 'SMS Marketing',
      description: 'Reach customers instantly with personalized SMS campaigns.',
      icon: Smartphone,
      color: 'from-yellow-500 to-orange-500',
      features: ['Bulk SMS', 'Personalization', 'Delivery tracking', 'Compliance tools']
    },
    {
      title: 'Lead Nurturing',
      description: 'Convert leads into customers with automated nurturing sequences.',
      icon: Target,
      color: 'from-red-500 to-pink-500',
      features: ['Lead scoring', 'Drip campaigns', 'Behavioral triggers', 'Conversion tracking']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Marketing Automation Pro - Advanced Marketing Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your marketing with Zion AI Marketing Automation Pro. AI-powered campaigns, smart segmentation, and automated workflows that drive results." />
        <meta name="keywords" content="marketing automation, AI marketing, email automation, social media automation, lead nurturing, campaign optimization" />
        <meta property="og:title" content="Zion AI Marketing Automation Pro - Advanced Marketing Platform" />
        <meta property="og:description" content="Transform your marketing with AI-powered automation and optimization tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-marketing-automation-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion AI Marketing Automation Pro
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Advanced Marketing Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Automate your marketing with AI-powered campaigns, smart segmentation, and intelligent workflows 
                that deliver personalized experiences at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Marketing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage artificial intelligence to create, optimize, and automate your marketing campaigns.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Multi-Channel Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Automate your marketing across all channels with intelligent, AI-driven campaigns.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationTypes.map((type, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg mb-4`}>
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your business needs and scale with your growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gray-800 rounded-xl p-8 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Automate Your Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses using Zion AI Marketing Automation Pro to scale their marketing and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiMarketingAutomationProPage;