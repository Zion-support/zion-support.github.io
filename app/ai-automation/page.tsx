'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, Cog, Target, BarChart, Users, Shield, Clock, CheckCircle, ArrowRight, Star, TrendingUp, Globe, Smartphone, Code, Database, Cloud, Lock } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies and maps your business processes for optimization opportunities.'
    },
    {
      icon: Zap,
      title: 'Smart Workflow Automation',
      description: 'Create intelligent workflows that adapt and learn from your business patterns.'
    },
    {
      icon: Cog,
      title: 'Robotic Process Automation',
      description: 'Deploy software robots to handle repetitive tasks with human-like precision.'
    },
    {
      icon: Target,
      title: 'Predictive Automation',
      description: 'Anticipate needs and trigger automated responses before issues arise.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Real-time insights into automation effectiveness and ROI metrics.'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human workers and AI automation systems.'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automated ticket routing, response generation, and escalation management.',
      icon: Users
    },
    {
      title: 'Financial Process Automation',
      description: 'Invoice processing, expense management, and financial reporting automation.',
      icon: BarChart
    },
    {
      title: 'HR Process Automation',
      description: 'Resume screening, interview scheduling, and employee onboarding workflows.',
      icon: Users
    },
    {
      title: 'Marketing Automation',
      description: 'Campaign management, lead nurturing, and personalized content delivery.',
      icon: Target
    },
    {
      title: 'IT Operations Automation',
      description: 'System monitoring, incident response, and infrastructure management.',
      icon: Cog
    },
    {
      title: 'Supply Chain Automation',
      description: 'Inventory management, demand forecasting, and logistics optimization.',
      icon: Globe
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase process efficiency by 80%',
    'Eliminate human errors in repetitive tasks',
    'Scale operations without proportional staff increases',
    '24/7 automated operations',
    'Real-time process monitoring and optimization'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Automation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Intelligent Process
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business operations with AI-driven automation that learns, adapts, and optimizes your processes in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Start Automation Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Automation Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation platform combines machine learning, process mining, and intelligent orchestration to deliver unprecedented efficiency gains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From customer service to supply chain management, our AI automation solutions deliver results across every industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI automation solutions deliver quantifiable results that transform your bottom line and operational efficiency.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">80%</div>
                <div className="text-gray-300 mb-6">Average Efficiency Increase</div>
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <div className="text-gray-300 mb-6">Cost Reduction</div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Automated Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already using AI automation to transform their operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAutomationPage;