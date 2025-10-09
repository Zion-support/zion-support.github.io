'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, Cog, Target, CheckCircle, ArrowRight, Star, Users, Award, TrendingUp } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes, reducing manual work by up to 80%.'
    },
    {
      icon: Zap,
      title: 'Smart Workflow Optimization',
      description: 'Automatically optimize workflows based on performance data and user behavior patterns.'
    },
    {
      icon: Cog,
      title: 'Adaptive Learning Systems',
      description: 'Self-improving automation that gets smarter over time, continuously optimizing your operations.'
    },
    {
      icon: Target,
      title: 'Predictive Automation',
      description: 'Anticipate needs and automate tasks before they become critical, preventing bottlenecks.'
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase productivity by 300%',
    'Eliminate human errors in repetitive tasks',
    'Scale operations without proportional staff increases',
    '24/7 automated operations',
    'Real-time process monitoring and optimization'
  ];

  const useCases = [
    {
      title: 'Document Processing',
      description: 'Automatically extract, classify, and process documents with 99% accuracy.',
      icon: '📄'
    },
    {
      title: 'Customer Service',
      description: 'AI chatbots and automated ticket routing for instant customer support.',
      icon: '🎧'
    },
    {
      title: 'Data Entry',
      description: 'Automated data extraction and entry from multiple sources.',
      icon: '📊'
    },
    {
      title: 'Email Management',
      description: 'Smart email categorization, prioritization, and automated responses.',
      icon: '📧'
    },
    {
      title: 'Inventory Management',
      description: 'Automated stock monitoring, reordering, and demand forecasting.',
      icon: '📦'
    },
    {
      title: 'Financial Processing',
      description: 'Automated invoice processing, expense categorization, and financial reporting.',
      icon: '💰'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Automation Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent automation that learns, adapts, and scales. 
                Reduce costs, increase efficiency, and eliminate manual work with our advanced AI automation platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Automated Operations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful AI Automation Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI automation platform combines machine learning, natural language processing, 
                and advanced analytics to deliver intelligent automation solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Automation Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From simple tasks to complex workflows, our AI automation handles it all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Automation?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our AI automation solutions are designed to deliver measurable results 
                  and transform your business operations.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">ROI Calculator</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Current Manual Hours:</span>
                    <span className="text-white font-semibold">40 hrs/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Automated Hours:</span>
                    <span className="text-cyan-400 font-semibold">8 hrs/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Time Saved:</span>
                    <span className="text-green-400 font-semibold">32 hrs/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Annual Savings:</span>
                    <span className="text-green-400 font-semibold">$125,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already using our AI automation solutions to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIAutomationPage;