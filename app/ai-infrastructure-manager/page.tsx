'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Server, Shield, BarChart3, Zap, Target, CheckCircle, ArrowRight, Star, Clock, Users, TrendingUp, Globe, Cpu, Database, Settings, AlertTriangle, Lock, Search, FileText, MessageSquare, Cloud, Wifi } from 'lucide-react';

const AIInfrastructureManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Infrastructure Monitoring',
      description: 'Intelligent monitoring that predicts failures, optimizes performance, and automatically resolves issues before they impact your business.',
      benefits: ['Predictive maintenance', 'Auto-healing systems', 'Performance optimization', 'Anomaly detection']
    },
    {
      icon: Server,
      title: 'Smart Resource Management',
      description: 'AI-powered resource allocation that automatically scales infrastructure based on demand and optimizes costs in real-time.',
      benefits: ['Auto-scaling', 'Cost optimization', 'Resource allocation', 'Load balancing']
    },
    {
      icon: Shield,
      title: 'Automated Security',
      description: 'AI-driven security management that continuously monitors threats, applies patches, and maintains compliance automatically.',
      benefits: ['Threat detection', 'Auto-patching', 'Compliance monitoring', 'Security hardening']
    },
    {
      icon: BarChart3,
      title: 'Intelligent Analytics',
      description: 'Advanced analytics that provide insights into infrastructure performance, usage patterns, and optimization opportunities.',
      benefits: ['Performance insights', 'Usage analytics', 'Cost analysis', 'Capacity planning']
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by 40% with AI optimization',
    'Achieve 99.99% uptime with predictive maintenance',
    'Save 60% on IT operations with automated management',
    'Improve performance by 50% through intelligent scaling',
    'Ensure 100% compliance with automated security updates'
  ];

  const pricing = [
    {
      name: 'Essential',
      price: '$499/month',
      features: [
        'Basic AI monitoring',
        'Up to 10 servers',
        'Email support',
        'Standard security',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,999/month',
      features: [
        'Advanced AI features',
        'Unlimited servers',
        'Priority support',
        'Advanced security',
        'Detailed analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      features: [
        'Full AI capabilities',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const infrastructureTypes = [
    {
      title: 'Cloud Infrastructure',
      description: 'AI-optimized cloud management for AWS, Azure, and Google Cloud with intelligent cost optimization.',
      icon: Cloud,
      results: '35% cost reduction, 50% better performance'
    },
    {
      title: 'On-Premise Servers',
      description: 'Intelligent on-premise server management with predictive maintenance and automated optimization.',
      icon: Server,
      results: '40% fewer outages, 60% faster maintenance'
    },
    {
      title: 'Network Infrastructure',
      description: 'AI-powered network management with intelligent routing, security, and performance optimization.',
      icon: Wifi,
      results: '45% better throughput, 30% lower latency'
    },
    {
      title: 'Database Systems',
      description: 'Smart database management with AI-driven optimization, backup, and performance tuning.',
      icon: Database,
      results: '50% faster queries, 70% better reliability'
    }
  ];

  const aiCapabilities = [
    { feature: 'Failure Prediction', accuracy: '96%', timeSaved: '24 hours' },
    { feature: 'Auto-scaling', accuracy: '94%', timeSaved: '16 hours' },
    { feature: 'Security Patching', accuracy: '98%', timeSaved: '12 hours' },
    { feature: 'Performance Optimization', accuracy: '92%', timeSaved: '20 hours' },
    { feature: 'Cost Optimization', accuracy: '90%', timeSaved: '8 hours' }
  ];

  const managementServices = [
    {
      title: 'Infrastructure Assessment',
      description: 'Comprehensive AI-powered assessment of your current infrastructure with optimization recommendations.',
      icon: Search,
      price: 'Starting at $2,999/assessment'
    },
    {
      title: 'Migration Services',
      description: 'AI-assisted migration to cloud or hybrid infrastructure with zero downtime and data integrity.',
      icon: ArrowRight,
      price: 'Starting at $9,999/migration'
    },
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock AI monitoring with instant alerts and automated response to infrastructure issues.',
      icon: Clock,
      price: 'Starting at $1,999/month'
    },
    {
      title: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting for SOC2, ISO27001, HIPAA, and other standards.',
      icon: Shield,
      price: 'Starting at $799/month'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Infrastructure Manager - Zion Tech Group | Intelligent Infrastructure Management</title>
        <meta name="description" content="Revolutionary AI-powered infrastructure management that automates monitoring, optimization, and security. Reduce costs by 40% and achieve 99.99% uptime with intelligent automation." />
        <meta name="keywords" content="AI infrastructure management, infrastructure automation, server management, cloud optimization, IT automation, infrastructure monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Infrastructure <span className="text-green-400">Manager</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered infrastructure management that automates monitoring, optimization, and security. Reduce costs by 40% and achieve 99.99% uptime with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Infrastructure Assessment
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Infrastructure Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent infrastructure management powered by advanced AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Performance */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Capabilities Performance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven AI performance that saves time and improves infrastructure reliability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-4">{capability.feature}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Accuracy:</span>
                      <span className="text-green-400 font-bold">{capability.accuracy}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Time Saved:</span>
                      <span className="text-blue-400 font-bold">{capability.timeSaved}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Manage Any Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered management for all types of infrastructure environments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureTypes.map((infra, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <infra.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{infra.title}</h3>
                      <p className="text-gray-300 mb-4">{infra.description}</p>
                      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {infra.results}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Management Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive infrastructure management services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {managementServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="text-green-400 font-bold text-lg">{service.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Infrastructure Manager?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary advantages that transform your infrastructure management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Infrastructure Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the infrastructure management solution that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative ${
                  plan.popular ? 'ring-2 ring-green-500' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">{plan.price}</div>
                    <p className="text-gray-300">per month</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Optimize Your Infrastructure Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your infrastructure management with AI-powered automation and optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Infrastructure Assessment
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Infrastructure Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AIInfrastructureManagerPage;