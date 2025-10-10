'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, MessageCircle, Headphones, Globe, Zap, Brain, Target, BarChart, Shield, Clock, Users } from 'lucide-react';

const AICustomerServicePage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Chatbot',
      description: 'Intelligent chatbot that provides instant responses and handles customer inquiries 24/7.',
      benefits: ['24/7 availability', 'Instant responses', 'Natural language processing', 'Context awareness']
    },
    {
      icon: Headphones,
      title: 'Virtual Assistant',
      description: 'AI-powered virtual assistant for comprehensive customer support and problem resolution.',
      benefits: ['Multi-channel support', 'Problem resolution', 'Escalation handling', 'Personalized service']
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Support customers in multiple languages with AI-powered translation and localization.',
      benefits: ['Multi-language support', 'Cultural adaptation', 'Real-time translation', 'Localized responses']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Ultra-fast response times with AI-powered real-time customer service processing.',
      benefits: ['Instant responses', 'High throughput', 'Concurrent handling', 'Performance optimization']
    },
    {
      icon: Brain,
      title: 'Intelligent Routing',
      description: 'AI-powered intelligent routing to connect customers with the right support agent.',
      benefits: ['Smart routing', 'Agent matching', 'Priority handling', 'Load balancing']
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'AI-driven insights to predict customer needs and improve service quality.',
      benefits: ['Predictive insights', 'Customer behavior analysis', 'Service optimization', 'Trend identification']
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Support',
      description: 'Handle product inquiries, order issues, and returns for online stores',
      icon: '🛍️'
    },
    {
      title: 'Technical Support',
      description: 'Provide technical assistance and troubleshooting for software and hardware',
      icon: '🔧'
    },
    {
      title: 'Financial Services',
      description: 'Assist with account inquiries, transactions, and financial advice',
      icon: '💰'
    },
    {
      title: 'Healthcare Support',
      description: 'Provide patient support, appointment scheduling, and medical information',
      icon: '🏥'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Service - Zion Tech Group</title>
        <meta name="description" content="Transform your customer service with our AI Customer Service solutions. 24/7 support, multilingual capabilities, and intelligent problem solving for better customer experience." />
        <meta name="keywords" content="AI customer service, chatbot, virtual assistant, customer support automation, multilingual support, AI support" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Customer
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your customer service with our AI Customer Service solutions. 24/7 support, multilingual capabilities, and intelligent problem solving for better customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Get Started
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for exceptional customer service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for businesses across all industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Customer Service?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start using our AI Customer Service solutions today and provide exceptional customer support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AICustomerServicePage;