'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Code, Users, Shield, BarChart, Database, Globe, Smartphone, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Target, TrendingUp, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI Chatbots & NLP',
      description: 'Intelligent conversational AI that understands context and provides human-like responses.',
      category: 'conversational',
      icon: MessageCircle,
      features: ['Natural Language Processing', 'Multi-language Support', 'Context Awareness', '24/7 Availability'],
      price: 'Starting at $2,500/month'
    },
    {
      id: 2,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      category: 'content',
      icon: FileText,
      features: ['Blog Writing', 'Social Media Posts', 'Marketing Copy', 'SEO Optimization'],
      price: 'Starting at $1,500/month'
    },
    {
      id: 3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and insights from your business data using machine learning.',
      category: 'analytics',
      icon: BarChart,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Automated Reports'],
      price: 'Starting at $3,000/month'
    },
    {
      id: 4,
      title: 'AI Computer Vision',
      description: 'Image and video analysis for quality control, security, and automation.',
      category: 'vision',
      icon: Eye,
      features: ['Object Detection', 'Image Classification', 'Quality Control', 'Security Monitoring'],
      price: 'Starting at $4,000/month'
    },
    {
      id: 5,
      title: 'AI Voice Solutions',
      description: 'Speech recognition, synthesis, and voice-controlled applications.',
      category: 'voice',
      icon: Mic,
      features: ['Speech Recognition', 'Voice Synthesis', 'Voice Commands', 'Multi-language Support'],
      price: 'Starting at $2,000/month'
    },
    {
      id: 6,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent decision-making.',
      category: 'automation',
      icon: Workflow,
      features: ['Process Automation', 'Decision Making', 'Task Optimization', 'Error Reduction'],
      price: 'Starting at $3,500/month'
    },
    {
      id: 7,
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnostics, treatment planning, and patient care.',
      category: 'healthcare',
      icon: Heart,
      features: ['Medical Imaging', 'Diagnostic Support', 'Treatment Planning', 'Patient Monitoring'],
      price: 'Starting at $5,000/month'
    },
    {
      id: 8,
      title: 'AI Financial Services',
      description: 'Fraud detection, risk assessment, and automated financial analysis.',
      category: 'finance',
      icon: DollarSign,
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      price: 'Starting at $4,500/month'
    },
    {
      id: 9,
      title: 'AI E-commerce Solutions',
      description: 'Personalized shopping experiences and intelligent product recommendations.',
      category: 'ecommerce',
      icon: ShoppingCart,
      features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights'],
      price: 'Starting at $2,500/month'
    },
    {
      id: 10,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and automated security response systems.',
      category: 'security',
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Analytics'],
      price: 'Starting at $3,000/month'
    },
    {
      id: 11,
      title: 'AI Mobile Applications',
      description: 'Intelligent mobile apps with AI-powered features and personalization.',
      category: 'mobile',
      icon: Smartphone,
      features: ['Smart Notifications', 'Personalization', 'Offline AI', 'Cross-platform Support'],
      price: 'Starting at $2,000/month'
    },
    {
      id: 12,
      title: 'AI Cloud Solutions',
      description: 'Scalable AI services hosted on cloud infrastructure.',
      category: 'cloud',
      icon: Cloud,
      features: ['Scalable Infrastructure', 'API Access', 'Real-time Processing', 'Global Deployment'],
      price: 'Starting at $1,500/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'conversational', name: 'Conversational AI', icon: MessageCircle },
    { id: 'content', name: 'Content Generation', icon: FileText },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart },
    { id: 'vision', name: 'Computer Vision', icon: Eye },
    { id: 'voice', name: 'Voice Solutions', icon: Mic },
    { id: 'automation', name: 'Automation', icon: Workflow },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, computer vision, data analytics, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, computer vision, data analytics, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From chatbots to computer vision, we provide comprehensive AI services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
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
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-cyan-400 font-semibold">{service.price}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our AI Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300">
                We combine cutting-edge technology with deep industry expertise to deliver AI solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert AI Team</h3>
                <p className="text-gray-300">Our team includes PhD-level AI researchers and experienced engineers.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fast Implementation</h3>
                <p className="text-gray-300">Get your AI solutions up and running in weeks, not months.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance for all our AI solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring for your AI systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiServicesPage;