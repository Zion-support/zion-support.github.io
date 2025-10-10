'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, Code, Database, Lock } from 'lucide-react';

const AIAPIManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Model Orchestration',
      description: 'Intelligent orchestration of AI models with automatic scaling and load balancing',
      benefits: ['Auto-scaling', 'Load balancing', 'Model chaining', 'Performance optimization']
    },
    {
      icon: Code,
      title: 'API Lifecycle Management',
      description: 'Complete API lifecycle management from development to retirement',
      benefits: ['Version control', 'Deprecation management', 'Migration tools', 'Documentation']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Advanced data management for AI model training and inference pipelines',
      benefits: ['Data versioning', 'Feature stores', 'Data validation', 'Privacy controls']
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Comprehensive security framework for AI API protection and compliance',
      benefits: ['Zero-trust architecture', 'API encryption', 'Access controls', 'Audit trails']
    }
  ];

  const benefits = [
    'Simplified AI model deployment',
    'Automated API lifecycle management',
    'Real-time monitoring and analytics',
    'Enterprise-grade security',
    'Cost-effective resource utilization',
    'Seamless integration capabilities',
    'Comprehensive documentation',
    'Expert technical support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI API Manager - Zion Tech Group | AI Solutions</title>
        <meta name="description" content="Professional AI API manager solutions by Zion Tech Group. Advanced AI and API management for your business." />
        <meta name="keywords" content="AI API manager, AI solutions, API management, model orchestration, Zion Tech Group" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI API Manager
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Take control of your AI APIs with our advanced management platform. 
            Orchestrate, monitor, and optimize your AI models with enterprise-grade tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI API Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools for managing your AI APIs with intelligence and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI API Manager
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of intelligent AI API management for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our AI experts to discuss your API management needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Start Your Project
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAPIManagerPage;