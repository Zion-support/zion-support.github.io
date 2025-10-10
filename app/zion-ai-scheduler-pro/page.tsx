'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, Zap, CheckCircle, ArrowRight, Star, Brain, Smartphone, Globe, Shield, BarChart3, MessageSquare, Settings, Target, DollarSign, Award, Rocket, TrendingUp, Cpu, Database, FileText, Eye, Mic, Workflow, Heart, Globe as World, Lock, Monitor, Package, Wifi, Printer, Router, Box, Headphones, MessageCircle, CheckSquare, ShoppingCart, Link as LinkIcon, Server, Mail, Phone, MapPin } from 'lucide-react';
import Navigation from '../components/EnhancedNavigation';
import Footer from '../components/Footer';

const ZionAISchedulerPro: React.FC = () => {
  const features = [
    'AI-powered meeting optimization',
    'Smart conflict resolution',
    'Multi-timezone coordination',
    'Resource allocation intelligence',
    'Automated follow-up scheduling',
    'Integration with 100+ calendar apps',
    'Natural language scheduling',
    'Predictive availability analysis',
    'Team workload balancing',
    'Meeting effectiveness scoring',
    'Automated reminder sequences',
    'Custom scheduling rules engine',
    'Real-time availability updates',
    'Meeting room optimization',
    'Travel time calculation',
    'Holiday and time-off integration',
    'Meeting preparation automation',
    'Post-meeting action item tracking',
    'Analytics and reporting dashboard',
    'API for custom integrations'
  ];

  const benefits = [
    'Save 5+ hours per week on scheduling',
    'Reduce scheduling conflicts by 90%',
    'Increase meeting attendance by 40%',
    'Optimize resource utilization',
    'Improve team productivity',
    'Automate repetitive tasks',
    'Enhance meeting effectiveness',
    'Reduce administrative overhead',
    'Better work-life balance',
    'Data-driven scheduling insights'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 team members',
        'Basic AI scheduling',
        '2 calendar integrations',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Unlimited calendar integrations',
        'Priority support',
        'Advanced analytics',
        'Custom scheduling rules',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI capabilities',
        'Custom integrations',
        'Dedicated support',
        'Advanced reporting',
        'White-label options',
        'Custom deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Google Calendar', icon: Calendar, status: 'Available' },
    { name: 'Microsoft Outlook', icon: Mail, status: 'Available' },
    { name: 'Apple Calendar', icon: Calendar, status: 'Available' },
    { name: 'Slack', icon: MessageSquare, status: 'Available' },
    { name: 'Microsoft Teams', icon: Users, status: 'Available' },
    { name: 'Zoom', icon: Video, status: 'Available' },
    { name: 'Webex', icon: Monitor, status: 'Available' },
    { name: 'Salesforce', icon: BarChart3, status: 'Available' },
    { name: 'HubSpot', icon: Target, status: 'Available' },
    { name: 'Zapier', icon: Zap, status: 'Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Scheduler Pro - Intelligent Meeting Scheduling | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered scheduling platform that automates meeting coordination, optimizes time slots, and eliminates scheduling conflicts. Save 5+ hours per week with intelligent scheduling." />
        <meta name="keywords" content="AI scheduler, meeting scheduling, calendar automation, team scheduling, AI meeting optimization, scheduling software, calendar management" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-scheduler-pro" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">AI-Powered Scheduling</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
                Zion AI Scheduler Pro
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionary AI-powered scheduling platform that automates meeting coordination, 
                eliminates conflicts, and optimizes your team's time like never before.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Intelligent Scheduling Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI learns your team's patterns and preferences to create the perfect schedule every time.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Transform Your Scheduling
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See measurable improvements in productivity, efficiency, and team satisfaction.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your team size and needs. All plans include our core AI features.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`relative bg-slate-800/50 rounded-2xl p-8 ${
                    tier.popular ? 'ring-2 ring-cyan-500 shadow-lg shadow-cyan-500/25' : ''
                  }`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 mb-4">{tier.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-white">{tier.price}</span>
                        <span className="text-gray-400 ml-2">{tier.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Seamless Integrations
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect with your favorite tools and platforms for a unified scheduling experience.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {integrations.map((integration, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700 transition-colors">
                      <integration.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                    <p className="text-green-400 text-sm">{integration.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Scheduling?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of teams who have revolutionized their scheduling with AI. 
                  Start your free trial today and experience the difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                <div className="mt-6 text-gray-400">
                  <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ZionAISchedulerPro;