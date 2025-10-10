'use client';

import React from 'react';
import { Database, Server, Cpu, HardDrive, Zap, BarChart, Settings, Target, CheckCircle, ArrowRight, Brain, Activity, Globe, Shield, Clock, Award, Monitor, PieChart, TrendingUp, Wifi, Lock } from 'lucide-react';
import SEOHead from '../../src/components/SEOHead';

const AIDataCenterPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Infrastructure Management',
      description: 'Intelligent data center management with AI-driven optimization, predictive maintenance, and automated resource allocation.',
      benefits: ['Predictive maintenance', 'Automated optimization', 'Intelligent resource allocation']
    },
    {
      icon: Server,
      title: 'Advanced Server Management',
      description: 'Comprehensive server monitoring, health checks, and automated scaling based on demand patterns.',
      benefits: ['Real-time monitoring', 'Automated scaling', 'Health optimization']
    },
    {
      icon: Database,
      title: 'Database Optimization',
      description: 'AI-powered database performance tuning, query optimization, and automated backup management.',
      benefits: ['Query optimization', 'Automated backups', 'Performance tuning']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and reporting on data center performance, utilization, and efficiency metrics.',
      benefits: ['Real-time dashboards', 'Performance insights', 'Efficiency reports']
    },
    {
      icon: Settings,
      title: 'Automated Operations',
      description: 'Fully automated data center operations with AI-driven decision making and self-healing capabilities.',
      benefits: ['Self-healing systems', 'Automated responses', 'Intelligent automation']
    },
    {
      icon: Target,
      title: 'Energy Efficiency',
      description: 'AI-optimized power management and cooling systems for maximum energy efficiency and cost savings.',
      benefits: ['Energy optimization', 'Cost reduction', 'Green computing']
    }
  ];

  const services = [
    {
      title: 'Data Center Management',
      description: 'Comprehensive AI-powered data center management and optimization services.',
      price: '$15,000/mo',
      features: ['24/7 monitoring', 'AI optimization', 'Predictive maintenance', 'Performance analytics']
    },
    {
      title: 'Server Infrastructure',
      description: 'Advanced server management with AI-driven optimization and automated scaling.',
      price: '$12,000/mo',
      features: ['Server optimization', 'Automated scaling', 'Health monitoring', 'Performance tuning']
    },
    {
      title: 'Database Services',
      description: 'AI-powered database management, optimization, and automated backup services.',
      price: '$8,500/mo',
      features: ['Database optimization', 'Automated backups', 'Query tuning', 'Performance monitoring']
    },
    {
      title: 'Complete Data Center Solution',
      description: 'End-to-end data center management with AI optimization and 24/7 support.',
      price: '$35,000/mo',
      features: ['Full management', 'AI optimization', '24/7 support', 'Custom solutions']
    }
  ];

  const stats = [
    { number: '99.99%', label: 'Uptime Guarantee', icon: Shield },
    { number: '40%', label: 'Energy Savings', icon: Zap },
    { number: '24/7', label: 'AI Monitoring', icon: Clock },
    { number: '100+', label: 'Data Centers Managed', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEOHead 
        title="AI Data Center Management | Zion Tech Group"
        description="Intelligent data center management with AI-powered optimization, predictive maintenance, and automated operations. Maximize efficiency and reduce costs with our advanced data center solutions."
        keywords="AI data center, data center management, server optimization, database management, predictive maintenance, data center automation, infrastructure management"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              AI Data Center Management
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Intelligent data center management with AI-powered optimization, predictive maintenance, 
            and automated operations. Maximize efficiency, reduce costs, and ensure 99.99% uptime 
            with our advanced data center solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Infrastructure Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-green-400 text-green-400 font-semibold py-4 px-8 rounded-xl hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Data Center Management Features</h2>
            <p className="text-xl text-gray-300">Advanced AI-powered data center optimization and management</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-8 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Data Center Services</h2>
            <p className="text-xl text-gray-300">Comprehensive data center management and optimization solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-8 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-3xl font-bold text-green-400 mb-6">{service.price}</div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Data Center?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a comprehensive data center assessment and discover how AI-powered 
            management can improve your infrastructure efficiency and reduce costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
              Get Infrastructure Assessment
            </button>
            <button className="border-2 border-green-400 text-green-400 font-semibold py-4 px-8 rounded-xl hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
              Contact Data Center Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDataCenterPage;