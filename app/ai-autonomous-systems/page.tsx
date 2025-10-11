'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Bot, Cpu, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Autonomous Agents',
      description: 'AI-powered autonomous agents that can operate independently.',
      benefits: ['Self-learning', 'Decision making', 'Task automation', 'Adaptive behavior']
    },
    {
      icon: Cpu,
      title: 'Intelligent Systems',
      description: 'Advanced AI systems that can process and respond to complex scenarios.',
      benefits: ['Real-time processing', 'Pattern recognition', 'Predictive analysis', 'Autonomous operation']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with existing systems and workflows.',
      benefits: ['API integration', 'Data synchronization', 'Workflow automation', 'System monitoring']
    },
    {
      icon: Shield,
      title: 'Security & Safety',
      description: 'Built-in security and safety measures for autonomous operations.',
      benefits: ['Threat detection', 'Safety protocols', 'Access control', 'Audit trails']
    }
  ];

  const benefits = [
    'Fully autonomous operation',
    'Reduced human intervention',
    '24/7 continuous operation',
    'Adaptive learning capabilities',
    'Scalable and flexible systems',
    'Cost-effective automation'
  ];

  const stats = [
    { label: 'Autonomous Operations', value: '99.9%' },
    { label: 'Uptime', value: '24/7' },
    { label: 'Learning Accuracy', value: '95%' },
    { label: 'Cost Reduction', value: '60%' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered autonomous systems for intelligent automation and decision making" />
        <meta name="keywords" content="AI autonomous systems, intelligent automation, autonomous agents, AI robotics, smart systems" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Autonomous Systems</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build intelligent autonomous systems that can operate independently and make decisions in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Autonomous System Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI capabilities for autonomous operation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                System Performance
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Reliable and efficient autonomous operation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Autonomous Systems?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start developing intelligent autonomous systems with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AIAutonomousSystemsPage;