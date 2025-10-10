'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Cpu, Bot, Activity } from 'lucide-react';

const AiAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that enable autonomous decision-making and learning.',
      benefits: ['Machine learning', 'Neural networks', 'Pattern recognition', 'Adaptive behavior']
    },
    {
      icon: Bot,
      title: 'Autonomous Operations',
      description: 'Self-managing systems that operate independently with minimal human intervention.',
      benefits: ['Self-healing', 'Auto-scaling', 'Predictive maintenance', 'Resource optimization']
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Process data locally for real-time autonomous decision making.',
      benefits: ['Low latency', 'Offline capability', 'Real-time processing', 'Bandwidth efficiency']
    },
    {
      icon: Activity,
      title: 'Continuous Learning',
      description: 'Systems that continuously improve through experience and feedback.',
      benefits: ['Adaptive algorithms', 'Performance optimization', 'Pattern learning', 'Self-improvement']
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Built-in safety mechanisms and security protocols for autonomous operations.',
      benefits: ['Fail-safe mechanisms', 'Security protocols', 'Risk assessment', 'Compliance standards']
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamlessly integrate autonomous systems into existing infrastructure.',
      benefits: ['API integration', 'Legacy compatibility', 'Modular design', 'Configuration management']
    }
  ];

  const benefits = [
    'Reduce operational costs through automation',
    'Improve efficiency and productivity',
    'Enable 24/7 autonomous operations',
    'Minimize human error and risk',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  const useCases = [
    {
      title: 'Manufacturing Automation',
      description: 'Autonomous production lines with self-optimizing processes',
      icon: Bot
    },
    {
      title: 'Smart Infrastructure',
      description: 'Self-managing infrastructure systems for cities and buildings',
      icon: Globe
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving vehicles with advanced AI decision-making',
      icon: Activity
    },
    {
      title: 'Robotic Process Automation',
      description: 'Autonomous software robots for business process automation',
      icon: Cpu
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered autonomous systems for modern businesses." />
        <meta name="keywords" content="autonomous systems, AI automation, robotics, edge computing, self-managing systems" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered
                <span className="text-blue-600"> Autonomous Systems</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Build intelligent, self-managing systems that operate autonomously with minimal human intervention. 
                Leverage advanced AI to create systems that learn, adapt, and optimize themselves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Autonomous System Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered autonomous systems provide intelligent, self-managing solutions for complex operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our autonomous systems can transform your operations across different industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <useCase.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power of AI-driven autonomous systems and transform your operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Autonomous Systems?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your journey with AI-powered autonomous systems today and revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiAutonomousSystemsPage;