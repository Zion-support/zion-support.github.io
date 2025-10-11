'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Target, Brain, Zap, Shield, TrendingUp, Users, Clock, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Globe, Settings, Award, Database, Cpu, Wifi, Smartphone, Monitor, Laptop, Tablet, PieChart, LineChart, Activity, Eye, Lock, RefreshCw, Download, Share, Filter, Search, Calendar, AlertCircle, ThumbsUp, ThumbsDown, MessageSquare, Send, BarChart, DollarSign, Headphones, Bot, FileText, CreditCard, Cloud } from 'lucide-react';

const AiMarketingAutomationProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Campaigns',
      description: 'Advanced AI algorithms automatically create, optimize, and execute marketing campaigns across all channels',
      benefits: ['Auto-campaign creation', 'A/B testing', 'Performance optimization', 'Cross-channel coordination']
    },
    {
      icon: Target,
      title: 'Intelligent Targeting',
      description: 'AI-driven audience segmentation and targeting with predictive customer behavior analysis',
      benefits: ['Smart segmentation', 'Behavior prediction', 'Lookalike audiences', 'Dynamic targeting']
    },
    {
      icon: Zap,
      title: 'Real-Time Automation',
      description: 'Instant response to customer actions with personalized messaging and automated workflows',
      benefits: ['Real-time triggers', 'Personalized messaging', 'Workflow automation', 'Event-based actions']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive marketing analytics with AI-powered insights and ROI optimization',
      benefits: ['ROI tracking', 'Attribution modeling', 'Predictive analytics', 'Performance insights']
    },
    {
      icon: Users,
      title: 'Multi-Channel Management',
      description: 'Unified platform for managing email, social media, SMS, and paid advertising campaigns',
      benefits: ['Omnichannel marketing', 'Unified dashboard', 'Cross-channel tracking', 'Consistent messaging']
    },
    {
      icon: Settings,
      title: 'Custom Integrations',
      description: 'Seamless integration with 200+ marketing tools and platforms for complete automation',
      benefits: ['200+ integrations', 'Custom APIs', 'Data synchronization', 'Workflow automation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 contacts',
        'Basic AI automation',
        'Email & social media',
        'Standard analytics',
        '5 team members',
        'Email support',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100,000 contacts',
        'Advanced AI automation',
        'All channels + SMS',
        'Advanced analytics & reporting',
        '15 team members',
        'Priority support',
        'Advanced integrations',
        'API access',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'All channels + voice',
        'Real-time analytics dashboard',
        'Unlimited team members',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label solution',
        'SLA guarantee',
        'Custom training & onboarding'
      ],
      popular: false
    }
  ];

  const marketingChannels = [
    { name: 'Email Marketing', icon: Mail, description: 'Automated email campaigns' },
    { name: 'Social Media', icon: Globe, description: 'Facebook, Instagram, LinkedIn' },
    { name: 'SMS Marketing', icon: Smartphone, description: 'Text message campaigns' },
    { name: 'Google Ads', icon: Search, description: 'Search advertising' },
    { name: 'Facebook Ads', icon: Globe, description: 'Social media advertising' },
    { name: 'LinkedIn Ads', icon: Users, description: 'B2B advertising' },
    { name: 'YouTube Ads', icon: Monitor, description: 'Video advertising' },
    { name: 'TikTok Ads', icon: Smartphone, description: 'Short-form video ads' },
    { name: 'Twitter Ads', icon: MessageSquare, description: 'Social media ads' },
    { name: 'Pinterest Ads', icon: Target, description: 'Visual discovery ads' },
    { name: 'Snapchat Ads', icon: Smartphone, description: 'AR advertising' },
    { name: 'Display Ads', icon: Monitor, description: 'Banner advertising' },
    { name: 'Retargeting', icon: Target, description: 'Behavioral targeting' },
    { name: 'Push Notifications', icon: Bell, description: 'Mobile notifications' },
    { name: 'Web Push', icon: Globe, description: 'Browser notifications' },
    { name: 'In-App Messages', icon: Smartphone, description: 'App notifications' },
    { name: 'Chatbots', icon: Bot, description: 'AI conversations' },
    { name: 'Live Chat', icon: MessageSquare, description: 'Real-time support' },
    { name: 'Voice Marketing', icon: Mic, description: 'Voice campaigns' },
    { name: 'Video Marketing', icon: Monitor, description: 'Video content' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'GrowthHack Marketing',
      role: 'Marketing Director',
      content: 'AI Marketing Automation Pro increased our conversion rates by 300% and reduced our marketing costs by 50%. The AI optimization is incredible.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Robert Chen',
      company: 'E-commerce Plus',
      role: 'VP of Marketing',
      content: 'The multi-channel automation saved us 40 hours per week. Our team can now focus on strategy while AI handles the execution.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Amanda Thompson',
      company: 'SaaS Solutions',
      role: 'Head of Growth',
      content: 'The predictive analytics helped us identify high-value customers and increase our LTV by 250%. ROI was achieved in just 6 weeks.',
      rating: 5,
      avatar: '👩‍🔬'
    }
  ];

  const stats = [
    { number: '300%', label: 'Conversion Increase', icon: TrendingUp },
    { number: '50%', label: 'Cost Reduction', icon: DollarSign },
    { number: '200+', label: 'Integrations', icon: Settings },
    { number: '95%', label: 'Time Saved', icon: Clock },
    { number: '24/7', label: 'Automation', icon: Zap },
    { number: '500+', label: 'Happy Clients', icon: Users }
  ];

  const automationWorkflows = [
    {
      title: 'Lead Nurturing',
      description: 'Automated email sequences that nurture leads through the sales funnel',
      icon: Target,
      features: ['Welcome series', 'Educational content', 'Product demos', 'Follow-up sequences']
    },
    {
      title: 'Customer Onboarding',
      description: 'Personalized onboarding experience for new customers',
      icon: Users,
      features: ['Welcome messages', 'Tutorial series', 'Feature highlights', 'Success milestones']
    },
    {
      title: 'Retention Campaigns',
      description: 'AI-powered campaigns to reduce churn and increase retention',
      icon: Shield,
      features: ['Churn prediction', 'Win-back campaigns', 'Loyalty programs', 'Upsell sequences']
    },
    {
      title: 'Event-Based Triggers',
      description: 'Automated responses to customer actions and behaviors',
      icon: Zap,
      features: ['Purchase triggers', 'Abandonment recovery', 'Engagement scoring', 'Behavioral targeting']
    },
    {
      title: 'Seasonal Campaigns',
      description: 'Automated seasonal and holiday marketing campaigns',
      icon: Calendar,
      features: ['Holiday promotions', 'Seasonal content', 'Event marketing', 'Timely offers']
    },
    {
      title: 'Cross-Sell & Upsell',
      description: 'Intelligent product recommendations and upselling automation',
      icon: TrendingUp,
      features: ['Product recommendations', 'Upsell sequences', 'Cross-sell campaigns', 'Bundle offers']
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: Database, description: 'CRM integration' },
    { name: 'HubSpot', icon: Target, description: 'Marketing automation' },
    { name: 'Mailchimp', icon: Mail, description: 'Email marketing' },
    { name: 'Facebook Ads', icon: Globe, description: 'Social advertising' },
    { name: 'Google Ads', icon: Search, description: 'Search advertising' },
    { name: 'Shopify', icon: Monitor, description: 'E-commerce platform' },
    { name: 'WooCommerce', icon: ShoppingCart, description: 'E-commerce platform' },
    { name: 'Stripe', icon: CreditCard, description: 'Payment processing' },
    { name: 'Zapier', icon: Zap, description: 'Workflow automation' },
    { name: 'Slack', icon: MessageSquare, description: 'Team communication' },
    { name: 'Microsoft Teams', icon: Users, description: 'Enterprise collaboration' },
    { name: 'WhatsApp Business', icon: Smartphone, description: 'Messaging platform' },
    { name: 'Instagram', icon: Camera, description: 'Social media' },
    { name: 'LinkedIn', icon: Users, description: 'Professional network' },
    { name: 'Twitter', icon: MessageSquare, description: 'Social media' },
    { name: 'TikTok', icon: Smartphone, description: 'Short-form video' },
    { name: 'YouTube', icon: Monitor, description: 'Video platform' },
    { name: 'Pinterest', icon: Target, description: 'Visual discovery' },
    { name: 'Snapchat', icon: Smartphone, description: 'AR platform' },
    { name: 'Custom APIs', icon: Settings, description: 'Bespoke integrations' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Marketing Automation Pro - Advanced Marketing Automation Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered marketing automation platform with multi-channel campaigns, intelligent targeting, and advanced analytics. Increase conversions by 300% and reduce costs by 50%." />
        <meta name="keywords" content="AI marketing automation, marketing automation, email marketing, social media automation, campaign management, lead nurturing" />
        <meta property="og:title" content="AI Marketing Automation Pro - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered marketing automation platform with multi-channel campaigns and intelligent targeting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-marketing-automation-pro" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                AI Marketing Automation Pro
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Marketing
                </span>
                <br />
                <span className="text-4xl md:text-6xl">That Converts</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI-powered marketing automation platform with multi-channel campaigns, 
                intelligent targeting, and advanced analytics. Increase conversions by 300% and 
                reduce marketing costs by 50%.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>300% Conversion Increase</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>50% Cost Reduction</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>200+ Integrations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Multi-Channel Automation</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#demo" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-cyan-400 mr-1" />
                  <span>500+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-green-400 mr-1" />
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-purple-400 mr-1" />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-cyan-400">AI Marketing Automation Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology combined with powerful automation tools to deliver 
                marketing campaigns that convert and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
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
          </div>
        </section>

        {/* Marketing Channels Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-cyan-400">20+ Marketing Channels</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Reach your audience across all channels with unified automation and 
                consistent messaging.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {marketingChannels.map((channel, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{channel.name}</h3>
                  <p className="text-gray-400 text-xs">{channel.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Workflows Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pre-Built <span className="text-cyan-400">Automation Workflows</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started quickly with our professionally designed automation workflows 
                for every marketing scenario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationWorkflows.map((workflow, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <workflow.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {workflow.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {workflow.description}
                  </p>
                  <div className="space-y-2">
                    {workflow.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Connect <span className="text-cyan-400">200+ Tools</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamlessly integrate with your existing marketing stack and business tools 
                for complete automation.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{integration.name}</h3>
                  <p className="text-gray-400 text-xs">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent <span className="text-cyan-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 24/7 support 
                and 30-day money-back guarantee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
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

                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Need a custom solution?</p>
              <a 
                href="/contact" 
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Contact our sales team →
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-cyan-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join 500+ companies using AI Marketing Automation Pro to scale their marketing efforts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 500+ companies using AI Marketing Automation Pro to scale their marketing 
              efforts and drive growth. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>✓ 30-day free trial • ✓ No credit card required • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiMarketingAutomationProPage;