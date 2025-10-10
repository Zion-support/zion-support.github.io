'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageSquare, Eye, Mic, FileText, Search, Phone } from 'lucide-react';

interface AIService {
  id: string;
  name: string;
  description: string;
  features: string[];
  category: string;
  icon: React.ComponentType<any>;
  popular: boolean;
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices: AIService[] = [
    {
      id: '1',
      name: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with advanced AI analytics.',
      features: [
        'Predictive analytics',
        'Real-time data processing',
        'Automated reporting',
        'Custom dashboards',
        'Machine learning models',
        'Data visualization'
      ],
      category: 'Analytics',
      icon: BarChart,
      popular: true
    },
    {
      id: '2',
      name: 'Natural Language Processing',
      description: 'Extract meaning and insights from text data using advanced NLP techniques.',
      features: [
        'Text analysis',
        'Sentiment analysis',
        'Language translation',
        'Content generation',
        'Chatbot development',
        'Document processing'
      ],
      category: 'Language',
      icon: MessageSquare,
      popular: true
    },
    {
      id: '3',
      name: 'Computer Vision',
      description: 'Enable machines to interpret and understand visual information.',
      features: [
        'Image recognition',
        'Object detection',
        'Facial recognition',
        'Quality inspection',
        'Medical imaging',
        'Autonomous vehicles'
      ],
      category: 'Vision',
      icon: Eye,
      popular: false
    },
    {
      id: '4',
      name: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      features: [
        'Process automation',
        'Workflow optimization',
        'Decision automation',
        'Task scheduling',
        'Resource allocation',
        'Performance monitoring'
      ],
      category: 'Automation',
      icon: Zap,
      popular: true
    },
    {
      id: '5',
      name: 'AI Security Solutions',
      description: 'Protect your systems with AI-powered security and threat detection.',
      features: [
        'Threat detection',
        'Anomaly detection',
        'Fraud prevention',
        'Security monitoring',
        'Risk assessment',
        'Incident response'
      ],
      category: 'Security',
      icon: Shield,
      popular: false
    },
    {
      id: '6',
      name: 'AI Customer Service',
      description: 'Enhance customer experience with intelligent AI-powered support.',
      features: [
        'Intelligent chatbots',
        'Voice assistants',
        'Customer insights',
        'Support automation',
        'Personalization',
        'Multi-channel support'
      ],
      category: 'Customer Service',
      icon: Users,
      popular: true
    }
  ];

  const categories = ['all', ...Array.from(new Set(aiServices.map(service => service.category)))];

  const filteredServices = aiServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const popularServices = aiServices.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and AI automation solutions for businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, AI consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to computer vision, we deliver AI that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore AI Solutions
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      {popularServices.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Featured AI Services</h2>
              <p className="text-xl text-gray-300">Our most popular AI solutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-medium">Popular</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Services */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.category}</p>
                <p className="text-gray-300 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">AI Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI services cover the full spectrum of artificial intelligence technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-300">
                Build and deploy ML models that learn from data and improve over time.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Natural Language</h3>
              <p className="text-gray-300">
                Process and understand human language with advanced NLP techniques.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Computer Vision</h3>
              <p className="text-gray-300">
                Enable machines to see and interpret visual information accurately.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Automation</h3>
              <p className="text-gray-300">
                Automate complex processes with intelligent AI-powered systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you identify opportunities and implement solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your AI Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Download AI Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;