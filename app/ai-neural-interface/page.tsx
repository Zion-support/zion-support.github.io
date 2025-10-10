'use client';

import React from 'react';
import { Brain, Cpu, Zap, Target, CheckCircle, ArrowRight, Activity, Globe, Shield, Clock, Award, Monitor, PieChart, TrendingUp, Database, Settings, Users, Lock, Eye, Headphones, Wifi } from 'lucide-react';
import SEOHead from '../../src/components/SEOHead';

const AINeuralInterfacePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Neural Signal Processing',
      description: 'Advanced brain-computer interface technology that interprets neural signals for direct device control.',
      benefits: ['Neural signal interpretation', 'Direct brain control', 'Real-time processing']
    },
    {
      icon: Cpu,
      title: 'AI-Powered Translation',
      description: 'Intelligent translation of neural patterns into actionable commands for various applications.',
      benefits: ['Pattern recognition', 'Command translation', 'Multi-application support']
    },
    {
      icon: Zap,
      title: 'Real-time Response',
      description: 'Ultra-low latency neural interface with sub-millisecond response times for seamless interaction.',
      benefits: ['Sub-millisecond latency', 'Real-time feedback', 'Seamless interaction']
    },
    {
      icon: Target,
      title: 'Precision Control',
      description: 'High-precision neural control for complex tasks including typing, navigation, and device manipulation.',
      benefits: ['High precision', 'Complex task support', 'Multi-dimensional control']
    },
    {
      icon: Settings,
      title: 'Adaptive Learning',
      description: 'Machine learning algorithms that adapt to individual neural patterns for improved accuracy over time.',
      benefits: ['Personalized adaptation', 'Continuous learning', 'Improved accuracy']
    },
    {
      icon: Shield,
      title: 'Secure Neural Interface',
      description: 'Advanced security protocols to protect neural data and ensure privacy in brain-computer interactions.',
      benefits: ['Neural data protection', 'Privacy safeguards', 'Secure transmission']
    }
  ];

  const services = [
    {
      title: 'Basic Neural Interface',
      description: 'Entry-level neural interface for simple device control and communication.',
      price: '$2,500/mo',
      features: ['Basic neural control', 'Simple commands', 'Device integration', 'Basic training']
    },
    {
      title: 'Advanced Neural Platform',
      description: 'Comprehensive neural interface platform with advanced features and applications.',
      price: '$5,000/mo',
      features: ['Advanced control', 'Multiple applications', 'AI optimization', 'Custom training']
    },
    {
      title: 'Enterprise Neural Solution',
      description: 'Full-scale neural interface solution for enterprise applications and research.',
      price: '$15,000/mo',
      features: ['Enterprise features', 'Custom development', 'Research support', '24/7 monitoring']
    },
    {
      title: 'Research & Development',
      description: 'Cutting-edge neural interface research and development for next-generation applications.',
      price: 'Custom',
      features: ['R&D partnership', 'Custom research', 'Patent development', 'Technology transfer']
    }
  ];

  const stats = [
    { number: '< 1ms', label: 'Response Time', icon: Zap },
    { number: '99.9%', label: 'Accuracy Rate', icon: Target },
    { number: '24/7', label: 'Neural Monitoring', icon: Clock },
    { number: '100+', label: 'Applications', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Neural Interface | Zion Tech Group"
        description="Advanced neural interface technology with brain-computer interface capabilities, real-time neural signal processing, and AI-powered neural control. Experience the future of human-computer interaction."
        keywords="neural interface, brain-computer interface, BCI, neural control, neural signals, brain interface, neural technology, mind control"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              AI Neural Interface
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Advanced neural interface technology with brain-computer interface capabilities, 
            real-time neural signal processing, and AI-powered neural control. Experience 
            the future of human-computer interaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Neural Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-purple-400 text-purple-400 font-semibold py-4 px-8 rounded-xl hover:bg-purple-400 hover:text-slate-900 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Neural Interface Features</h2>
            <p className="text-xl text-gray-300">Advanced brain-computer interface capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-400/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Neural Interface Services</h2>
            <p className="text-xl text-gray-300">Comprehensive neural interface solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-400/10 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-3xl font-bold text-purple-400 mb-6">{service.price}</div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Neural Control?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a comprehensive neural interface assessment and discover how 
            brain-computer interface technology can transform your interaction with technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Get Neural Assessment
            </button>
            <button className="border-2 border-purple-400 text-purple-400 font-semibold py-4 px-8 rounded-xl hover:bg-purple-400 hover:text-slate-900 transition-all duration-300">
              Contact Neural Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AINeuralInterfacePage;