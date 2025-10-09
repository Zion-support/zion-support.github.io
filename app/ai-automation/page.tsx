'use client';
import React from 'react';
import { Brain, Zap, Target, BarChart, Users, Clock, CheckCircle, ArrowRight, Star, Shield, TrendingUp } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes, reducing manual work by up to 80%.'
    },
    {
      icon: Zap,
      title: 'Workflow Optimization',
      description: 'Automatically identify bottlenecks and optimize workflows for maximum efficiency and productivity.'
    },
    {
      icon: Target,
      title: 'Smart Decision Making',
      description: 'AI-driven decision support systems that analyze data and provide actionable insights in real-time.'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Forecast trends and outcomes with advanced machine learning models trained on your business data.'
    },
    {
      icon: Users,
      title: 'Customer Experience Automation',
      description: 'Automate customer interactions while maintaining personalization and improving satisfaction scores.'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock automation that works continuously to maintain and improve your business operations.'
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: 'Reduce operational costs by 60-80%' },
    { icon: CheckCircle, text: 'Increase productivity by 300%' },
    { icon: CheckCircle, text: 'Eliminate human errors' },
    { icon: CheckCircle, text: 'Scale operations without scaling staff' },
    { icon: CheckCircle, text: 'Improve customer satisfaction' },
    { icon: CheckCircle, text: 'Enable 24/7 operations' }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Automated loan processing, fraud detection, and risk assessment',
      icon: Shield
    },
    {
      title: 'Healthcare',
      description: 'Patient data processing, appointment scheduling, and treatment recommendations',
      icon: Users
    },
    {
      title: 'E-commerce',
      description: 'Inventory management, pricing optimization, and customer service automation',
      icon: TrendingUp
    },
    {
      title: 'Manufacturing',
      description: 'Quality control, predictive maintenance, and supply chain optimization',
      icon: BarChart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with intelligent automation that learns, adapts, and scales. 
              Reduce costs, increase efficiency, and unlock new possibilities with our advanced AI automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="cyber-button-secondary inline-flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation platform combines cutting-edge technology with practical business solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Automation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of intelligent automation that transforms your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <benefit.icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation solutions work across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already using our AI automation solutions to transform their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                Get Started Today
              </button>
              <button className="cyber-button-secondary inline-flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAutomationPage;