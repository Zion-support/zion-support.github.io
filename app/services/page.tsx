'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, BarChart3, Smartphone, Code, Database, Zap, CheckCircle, ArrowRight, Star, Users, Globe, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const aiServices = [
    {
      title: 'AI Analytics',
      description: 'Advanced data analytics powered by artificial intelligence',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Machine Learning Models'],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent automation solutions for business processes',
      icon: Zap,
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Exception Handling'],
      price: 'Starting at $999/month'
    },
    {
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI for customer service',
      icon: MessageCircle,
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
      price: 'Starting at $299/month'
    },
    {
      title: 'AI Computer Vision',
      description: 'Image and video analysis using advanced AI',
      icon: Eye,
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Real-time Processing'],
      price: 'Starting at $1,999/month'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'Auto-scaling'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response'],
      price: 'Starting at $1,800/month'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps',
      icon: Smartphone,
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      price: 'Starting at $3,000/month'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL API development',
      icon: Code,
      features: ['REST APIs', 'GraphQL', 'Microservices', 'API Gateway'],
      price: 'Starting at $1,200/month'
    }
  ];

  const microSaasServices = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence platform',
      icon: BarChart3,
      features: ['Custom Dashboards', 'Real-time Data', 'Predictive Analytics', 'Export Reports'],
      price: '$99/month'
    },
    {
      title: 'AI Chatbot Builder',
      description: 'No-code chatbot creation platform',
      icon: MessageCircle,
      features: ['Visual Builder', 'Multi-channel', 'Analytics', 'Integrations'],
      price: '$79/month'
    },
    {
      title: 'AI Email Marketing',
      description: 'Automated email marketing platform',
      icon: MessageSquare,
      features: ['AI Personalization', 'A/B Testing', 'Analytics', 'Automation'],
      price: '$149/month'
    },
    {
      title: 'AI Project Management',
      description: 'Intelligent project management tool',
      icon: Calendar,
      features: ['Smart Scheduling', 'Resource Planning', 'Risk Analysis', 'Team Collaboration'],
      price: '$129/month'
    }
  ];

  const tabs = [
    { id: 'ai', label: 'AI Services', icon: Brain },
    { id: 'it', label: 'IT Services', icon: Cloud },
    { id: 'micro', label: 'Micro SAAS', icon: Zap }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'ai':
        return aiServices;
      case 'it':
        return itServices;
      case 'micro':
        return microSaasServices;
      default:
        return aiServices;
    }
  };

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including development, consulting, and micro SAAS solutions. Transform your business with our expertise." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, development, consulting, automation" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI and IT solutions for your business" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-enhanced">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business operations 
                and drive growth through innovative technology.
              </p>
            </div>
          </section>

          {/* Tabs */}
          <section className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {getCurrentServices().map((service, index) => (
                <div
                  key={index}
                  className="cyber-card-enhanced holographic-card-enhanced p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-cyan-400 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card-enhanced holographic-card-enhanced p-8 border border-cyan-400/30">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your specific needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-enhanced px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  📞 Call: (302) 464-0950
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  📧 Get Free Consultation
                </a>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  📍 364 E Main St STE 1008, Middletown, DE 19709 | 
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;