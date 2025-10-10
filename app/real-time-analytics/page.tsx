'use client';

import React from 'react';
import { BarChart, Zap, Target, CheckCircle, ArrowRight, Brain, Activity, Globe, Shield, Clock, Award, Monitor, PieChart, TrendingUp, Database, Settings, Users, Lock, Cpu, Eye } from 'lucide-react';
import SEOHead from '../../src/components/SEOHead';

const RealTimeAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Real-time Data Processing',
      description: 'Process and analyze data streams in real-time with sub-second latency for instant insights and decision making.',
      benefits: ['Sub-second latency', 'Stream processing', 'Real-time insights']
    },
    {
      icon: BarChart,
      title: 'Live Analytics Dashboard',
      description: 'Interactive dashboards with real-time visualizations, custom metrics, and automated alerts.',
      benefits: ['Live dashboards', 'Custom metrics', 'Automated alerts']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms that automatically detect patterns, anomalies, and trends in your data streams.',
      benefits: ['Pattern detection', 'Anomaly detection', 'Predictive insights']
    },
    {
      icon: Target,
      title: 'Custom Metrics & KPIs',
      description: 'Define and track custom business metrics and KPIs with real-time calculations and monitoring.',
      benefits: ['Custom KPIs', 'Real-time calculations', 'Business metrics']
    },
    {
      icon: Settings,
      title: 'Automated Alerts',
      description: 'Intelligent alerting system that notifies you of important changes, anomalies, or threshold breaches.',
      benefits: ['Smart alerts', 'Threshold monitoring', 'Instant notifications']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Secure data processing with encryption, access controls, and compliance with industry standards.',
      benefits: ['Data encryption', 'Access controls', 'Compliance ready']
    }
  ];

  const services = [
    {
      title: 'Real-time Analytics Platform',
      description: 'Complete real-time analytics platform with dashboards, alerts, and basic AI insights.',
      price: '$15,000/mo',
      features: ['Real-time processing', 'Live dashboards', 'Basic alerts', 'Data connectors']
    },
    {
      title: 'AI Analytics Engine',
      description: 'Advanced AI-powered analytics with machine learning insights and predictive capabilities.',
      price: '$25,000/mo',
      features: ['AI insights', 'Predictive analytics', 'Anomaly detection', 'Custom models']
    },
    {
      title: 'Enterprise Analytics Suite',
      description: 'Comprehensive enterprise analytics solution with advanced features and 24/7 support.',
      price: '$45,000/mo',
      features: ['Full analytics suite', 'Custom development', '24/7 support', 'Advanced security']
    },
    {
      title: 'Custom Analytics Solution',
      description: 'Bespoke analytics solution tailored to your specific business requirements and data sources.',
      price: '$75,000/mo',
      features: ['Custom solution', 'Full customization', 'Dedicated team', 'Ongoing support']
    }
  ];

  const stats = [
    { number: '< 100ms', label: 'Processing Latency', icon: Zap },
    { number: '1M+', label: 'Events/Second', icon: Activity },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Real-time Monitoring', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <SEOHead 
        title="Real-time Analytics Platform | Zion Tech Group"
        description="Advanced real-time analytics platform with AI-powered insights, live dashboards, and instant data processing. Get actionable insights from your data streams in real-time."
        keywords="real-time analytics, live analytics, data streaming, real-time dashboards, stream processing, business intelligence, data visualization"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Real-time Analytics Platform
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Advanced real-time analytics platform with AI-powered insights, live dashboards, 
            and instant data processing. Get actionable insights from your data streams 
            in real-time and make faster, smarter decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Analytics Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-orange-400 text-orange-400 font-semibold py-4 px-8 rounded-xl hover:bg-orange-400 hover:text-slate-900 transition-all duration-300">
              View Live Dashboard
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-400 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Real-time Analytics Features</h2>
            <p className="text-xl text-gray-300">Advanced real-time data processing and analytics capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-orange-400/20 rounded-xl p-8 hover:border-orange-400/40 hover:shadow-lg hover:shadow-orange-400/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Analytics Services</h2>
            <p className="text-xl text-gray-300">Comprehensive real-time analytics solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-orange-400/20 rounded-xl p-8 hover:border-orange-400/40 hover:shadow-lg hover:shadow-orange-400/10 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-3xl font-bold text-orange-400 mb-6">{service.price}</div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Real-time Insights?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a free analytics assessment and discover how real-time analytics 
            can transform your business decision-making process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
              Get Analytics Demo
            </button>
            <button className="border-2 border-orange-400 text-orange-400 font-semibold py-4 px-8 rounded-xl hover:bg-orange-400 hover:text-slate-900 transition-all duration-300">
              Contact Analytics Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealTimeAnalyticsPage;