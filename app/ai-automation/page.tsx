'use client';
import React from 'react';
import { Brain, Zap, Target, ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes, continuously optimizing performance and reducing manual work.',
      benefits: ['Reduces manual work by 80%', 'Learns from patterns', 'Self-optimizing workflows']
    },
    {
      icon: Zap,
      title: 'Smart Decision Making',
      description: 'AI systems that make intelligent decisions based on data analysis, reducing human intervention while maintaining accuracy.',
      benefits: ['Real-time decision making', 'Data-driven insights', 'Consistent accuracy']
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Advanced AI algorithms that predict future trends and outcomes, enabling proactive business strategies.',
      benefits: ['Future trend prediction', 'Risk assessment', 'Strategic planning']
    },
    {
      icon: Shield,
      title: 'Secure Automation',
      description: 'Enterprise-grade security measures ensuring your automated processes are protected against threats.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'AI chatbots and virtual assistants that handle customer inquiries 24/7 with human-like responses.',
      icon: Users
    },
    {
      title: 'Data Processing Automation',
      description: 'Automated data extraction, validation, and processing from multiple sources.',
      icon: TrendingUp
    },
    {
      title: 'Workflow Optimization',
      description: 'Intelligent workflow management that identifies bottlenecks and optimizes processes.',
      icon: Clock
    },
    {
      title: 'Predictive Maintenance',
      description: 'AI systems that predict equipment failures and schedule maintenance proactively.',
      icon: Shield
    }
  ];

  const stats = [
    { number: '95%', label: 'Process Efficiency Increase' },
    { number: '70%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Automated Operations' },
    { number: '99.9%', label: 'Accuracy Rate' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with intelligent automation that learns, adapts, and optimizes your processes. 
              Our AI-powered automation solutions reduce manual work by 80% while increasing accuracy and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful AI Automation Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI automation platform combines machine learning, natural language processing, and advanced analytics 
              to deliver intelligent automation solutions that scale with your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real-World Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how AI automation is transforming businesses across industries with measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join hundreds of companies already using our AI automation solutions to transform their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAutomationPage;