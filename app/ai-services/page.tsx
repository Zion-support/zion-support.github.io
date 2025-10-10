'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, Eye, Zap, BarChart, Heart, DollarSign, Users, Shield, Code, Database, Mic, Target, Globe, FileText, Workflow, Settings, Calendar, CheckCircle, TrendingUp, Lock, Package, Monitor, Link as LinkIcon, Server, ShoppingCart, Rocket } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Advanced data insights and business intelligence powered by artificial intelligence.',
      href: '/ai-analytics',
      category: 'Analytics'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI solutions for customer support and engagement.',
      href: '/ai-chatbot-builder',
      category: 'Conversational AI'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for automated visual recognition.',
      href: '/ai-computer-vision',
      category: 'Computer Vision'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent process automation to streamline your business workflows.',
      href: '/ai-automation',
      category: 'Automation'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and make data-driven decisions with AI.',
      href: '/ai-predictive-analytics',
      category: 'Analytics'
    },
    {
      icon: Heart,
      title: 'AI Healthcare',
      description: 'Medical AI solutions for diagnostics, treatment, and patient care.',
      href: '/ai-healthcare',
      category: 'Healthcare'
    },
    {
      icon: DollarSign,
      title: 'AI Financial Services',
      description: 'AI-powered financial solutions for trading, risk management, and fraud detection.',
      href: '/ai-financial-services',
      category: 'Fintech'
    },
    {
      icon: Users,
      title: 'AI CRM',
      description: 'Customer relationship management enhanced with artificial intelligence.',
      href: '/ai-crm',
      category: 'CRM'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced threat protection and security solutions powered by AI.',
      href: '/ai-cybersecurity',
      category: 'Security'
    },
    {
      icon: Code,
      title: 'AI Code Assistant',
      description: 'Intelligent coding assistance and automated code generation.',
      href: '/ai-code-assistant',
      category: 'Development'
    },
    {
      icon: Database,
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable insights with AI-powered analytics.',
      href: '/ai-data-analytics',
      category: 'Analytics'
    },
    {
      icon: Mic,
      title: 'AI Voice Solutions',
      description: 'Speech recognition and voice processing solutions for various applications.',
      href: '/ai-voice-solutions',
      category: 'Voice AI'
    }
  ];

  const categories = ['All', 'Analytics', 'Conversational AI', 'Computer Vision', 'Automation', 'Healthcare', 'Fintech', 'CRM', 'Security', 'Development', 'Voice AI'];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, natural language processing, and intelligent automation solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-cyan-400 text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Need a Custom AI Solution?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We specialize in creating custom AI solutions tailored to your specific business needs. 
              Let's discuss how we can help transform your operations with artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiServicesPage;