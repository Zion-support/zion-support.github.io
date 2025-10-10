'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart3, Users, MessageSquare, Eye, Mic, FileText, TrendingUp, CheckCircle, ArrowRight, Search, Filter } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    {
      id: 1,
      title: 'AI Chatbots & NLP',
      description: 'Advanced conversational AI with natural language processing capabilities for 24/7 customer support.',
      icon: MessageSquare,
      category: 'conversational',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration'],
      price: 'Starting at $299/month',
      popular: true
    },
    {
      id: 2,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced AI models for blogs, social media, and marketing materials.',
      icon: FileText,
      category: 'content',
      features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
      price: 'Starting at $199/month'
    },
    {
      id: 3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      icon: BarChart3,
      category: 'analytics',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection'],
      price: 'Starting at $399/month'
    },
    {
      id: 4,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation.',
      icon: Eye,
      category: 'vision',
      features: ['Object Detection', 'Quality Control', 'Facial Recognition', 'Video Analytics'],
      price: 'Starting at $599/month'
    },
    {
      id: 5,
      title: 'AI Voice Solutions',
      description: 'Speech recognition and synthesis for voice-enabled applications and customer service.',
      icon: Mic,
      category: 'voice',
      features: ['Speech Recognition', 'Text-to-Speech', 'Voice Commands', 'Multi-language Support'],
      price: 'Starting at $349/month'
    },
    {
      id: 6,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows.',
      icon: Zap,
      category: 'automation',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling'],
      price: 'Starting at $349/month'
    },
    {
      id: 7,
      title: 'AI Healthcare Solutions',
      description: 'Medical AI applications for diagnostics, treatment planning, and patient care.',
      icon: Brain,
      category: 'healthcare',
      features: ['Medical Diagnostics', 'Treatment Planning', 'Patient Monitoring', 'Drug Discovery'],
      price: 'Starting at $799/month'
    },
    {
      id: 8,
      title: 'AI Financial Services',
      description: 'Fintech AI solutions for fraud detection, risk assessment, and automated trading.',
      icon: TrendingUp,
      category: 'finance',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      price: 'Starting at $499/month'
    }
  ];

  const categories = ['all', 'conversational', 'content', 'analytics', 'vision', 'voice', 'automation', 'healthcare', 'finance'];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, data analytics, computer vision, AI automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations and drive innovation.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 w-full md:w-80"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="all">All Categories</option>
                <option value="conversational">Conversational AI</option>
                <option value="content">Content Generation</option>
                <option value="analytics">Data Analytics</option>
                <option value="vision">Computer Vision</option>
                <option value="voice">Voice Solutions</option>
                <option value="automation">Workflow Automation</option>
                <option value="healthcare">Healthcare AI</option>
                <option value="finance">Financial AI</option>
              </select>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <span className="text-sm text-cyan-400 capitalize">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No AI services found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you identify the best solutions for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;