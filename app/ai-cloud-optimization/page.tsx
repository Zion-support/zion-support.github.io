'use client';

import React from 'react';
import { Cloud, TrendingDown, DollarSign, Zap, BarChart, Settings, Target, CheckCircle, ArrowRight, Brain, Activity, Globe, Database, Shield, Clock, Award, Monitor, PieChart, TrendingUp } from 'lucide-react';
import SEOHead from '../../src/components/SEOHead';

const AICloudOptimizationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Cost Analysis',
      description: 'Advanced machine learning algorithms analyze your cloud usage patterns and identify cost optimization opportunities.',
      benefits: ['Real-time cost monitoring', 'Predictive cost forecasting', 'Automated recommendations']
    },
    {
      icon: TrendingDown,
      title: 'Intelligent Resource Scaling',
      description: 'Automatically scale resources up and down based on demand patterns to optimize costs and performance.',
      benefits: ['Auto-scaling policies', 'Demand-based optimization', 'Performance maintenance']
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization Engine',
      description: 'Continuously optimize your cloud spending with AI-driven recommendations and automated cost controls.',
      benefits: ['30-50% cost reduction', 'Automated cost controls', 'Budget alerts']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive analytics and reporting on cloud usage, costs, and optimization opportunities.',
      benefits: ['Real-time dashboards', 'Custom reports', 'ROI tracking']
    },
    {
      icon: Settings,
      title: 'Multi-Cloud Management',
      description: 'Unified management across AWS, Azure, Google Cloud, and other cloud providers for optimal cost efficiency.',
      benefits: ['Multi-cloud visibility', 'Unified billing', 'Cross-cloud optimization']
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Balance cost optimization with performance requirements to ensure optimal cloud infrastructure.',
      benefits: ['Performance monitoring', 'Cost-performance balance', 'SLA maintenance']
    }
  ];

  const services = [
    {
      title: 'Cloud Cost Optimization',
      description: 'Comprehensive cloud cost analysis and optimization with AI-powered recommendations.',
      price: '$5,000/mo',
      features: ['Cost analysis', 'Optimization recommendations', 'Automated scaling', 'Monthly reports']
    },
    {
      title: 'Multi-Cloud Management',
      description: 'Unified management and optimization across multiple cloud providers.',
      price: '$8,500/mo',
      features: ['Multi-cloud dashboard', 'Unified billing', 'Cross-cloud optimization', '24/7 monitoring']
    },
    {
      title: 'AI Resource Optimization',
      description: 'AI-powered resource scaling and optimization for maximum efficiency.',
      price: '$12,000/mo',
      features: ['AI scaling', 'Predictive analytics', 'Automated optimization', 'Performance monitoring']
    },
    {
      title: 'Cloud Migration & Optimization',
      description: 'Complete cloud migration with ongoing optimization and cost management.',
      price: '$25,000/mo',
      features: ['Migration planning', 'Cost optimization', 'Performance tuning', 'Ongoing support']
    }
  ];

  const stats = [
    { number: '50%', label: 'Average Cost Reduction', icon: TrendingDown },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Monitoring & Support', icon: Clock },
    { number: '$2M+', label: 'Costs Optimized', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOHead 
        title="AI Cloud Cost Optimization | Zion Tech Group"
        description="Intelligent cloud cost optimization with AI-powered analysis, automated scaling, and multi-cloud management. Reduce cloud costs by up to 50% with our advanced optimization platform."
        keywords="cloud cost optimization, AI cloud management, multi-cloud optimization, cloud cost reduction, cloud analytics, AWS optimization, Azure optimization"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              AI Cloud Cost Optimization
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Intelligent cloud cost optimization with AI-powered analysis, automated scaling, 
            and multi-cloud management. Reduce your cloud costs by up to 50% while 
            maintaining optimal performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Cost Analysis
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-blue-400 text-blue-400 font-semibold py-4 px-8 rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Cloud Optimization Features</h2>
            <p className="text-xl text-gray-300">Advanced AI-powered cloud cost optimization and management</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Optimization Services</h2>
            <p className="text-xl text-gray-300">Choose the right cloud optimization solution for your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Cloud Costs?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a free cloud cost analysis and discover how much you can save 
            with our AI-powered optimization platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Get Free Cost Analysis
            </button>
            <button className="border-2 border-blue-400 text-blue-400 font-semibold py-4 px-8 rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
              Contact Cloud Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICloudOptimizationPage;