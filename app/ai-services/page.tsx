'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, 
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCircle, ArrowRight, Star, Clock, Award, TrendingUp,
  Cpu, Database, Globe, Smartphone, Lock, Workflow, Sparkles
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      price: 'Starting at $2,999/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom ML models', 'Data visualization'],
      benefits: ['40% increase in decision speed', '25% cost reduction', '99.9% accuracy'],
      link: '/ai-analytics',
      category: 'analytics'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: 'AI Chatbot & Conversational AI',
      description: 'Intelligent chatbots that understand context and provide human-like interactions.',
      price: 'Starting at $1,499/month',
      features: ['Natural language processing', 'Multi-language support', 'Voice integration', '24/7 availability'],
      benefits: ['80% reduction in support tickets', '60% faster response time', '95% customer satisfaction'],
      link: '/ai-chatbot-builder',
      category: 'conversational'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention using machine learning algorithms.',
      price: 'Starting at $3,999/month',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      benefits: ['99.8% threat detection rate', '50% faster incident response', 'Zero false positives'],
      link: '/ai-cybersecurity',
      category: 'security'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-400" />,
      title: 'AI Computer Vision',
      description: 'Image and video analysis for quality control, surveillance, and automation.',
      price: 'Starting at $2,499/month',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Video analytics'],
      benefits: ['90% accuracy improvement', '70% faster processing', 'Real-time analysis'],
      link: '/ai-computer-vision',
      category: 'vision'
    },
    {
      icon: <Mic className="w-8 h-8 text-orange-400" />,
      title: 'AI Voice Solutions',
      description: 'Speech recognition, synthesis, and voice-controlled applications.',
      price: 'Starting at $1,999/month',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Multi-language support'],
      benefits: ['95% accuracy rate', 'Real-time processing', 'Natural voice synthesis'],
      link: '/ai-voice-solutions',
      category: 'voice'
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing, documentation, and communication.',
      price: 'Starting at $999/month',
      features: ['Text generation', 'Content optimization', 'SEO integration', 'Multi-format output'],
      benefits: ['80% time savings', 'Consistent quality', 'SEO optimized content'],
      link: '/ai-content-generation',
      category: 'content'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: aiServices.length },
    { id: 'analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'conversational', name: 'Conversational', count: aiServices.filter(s => s.category === 'conversational').length },
    { id: 'security', name: 'Security', count: aiServices.filter(s => s.category === 'security').length },
    { id: 'vision', name: 'Computer Vision', count: aiServices.filter(s => s.category === 'vision').length },
    { id: 'voice', name: 'Voice', count: aiServices.filter(s => s.category === 'voice').length },
    { id: 'content', name: 'Content', count: aiServices.filter(s => s.category === 'content').length }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Accuracy Rate', icon: Target },
    { number: '24/7', label: 'AI Monitoring', icon: Clock },
    { number: '50+', label: 'Enterprise Clients', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including analytics, chatbots, computer vision, voice solutions, and more. Expert AI implementation and support." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, AI chatbots, computer vision, voice AI" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-purple-400 font-semibold mb-4">{service.price}</div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our AI services can transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Your AI Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;