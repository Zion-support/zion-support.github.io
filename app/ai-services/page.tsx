'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, Eye, Mic, FileText, ShoppingCart, Workflow, ArrowRight } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      name: 'AI Workflow Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      icon: Workflow,
      category: 'automation',
      href: '/ai-workflow-automation'
    },
    {
      name: 'AI Fashion Design',
      description: 'Create stunning fashion designs with AI-powered tools and recommendations.',
      icon: ShoppingCart,
      category: 'design',
      href: '/ai-fashion-design'
    },
    {
      name: 'AI Email Assistant',
      description: 'Smart email management and automated responses for better productivity.',
      icon: FileText,
      category: 'productivity',
      href: '/ai-email-assistant'
    },
    {
      name: 'AI Invoice Generator',
      description: 'Automated invoice creation and management for your business.',
      icon: FileText,
      category: 'productivity',
      href: '/ai-invoice-generator'
    },
    {
      name: 'AI Voice Assistant',
      description: 'Natural language processing and voice interaction solutions.',
      icon: Mic,
      category: 'voice',
      href: '/ai-voice-assistant'
    },
    {
      name: 'AI Content Generator',
      description: 'Create engaging content automatically with AI-powered writing tools.',
      icon: FileText,
      category: 'content',
      href: '/ai-content-generator'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'automation', name: 'Automation' },
    { id: 'design', name: 'Design' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'voice', name: 'Voice' },
    { id: 'content', name: 'Content' }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>AI Services - Zion AI | Artificial Intelligence Solutions</title>
        <meta name="description" content="Explore our comprehensive AI services including automation, design, productivity, and voice solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, automation, AI design, productivity, voice AI" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                That Transform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI services designed to revolutionize your business operations 
              and drive innovation across every department.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.name}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 hover:border-cyan-400 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <a
                      href={service.href}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:translate-x-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you choose the right solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <Zap className="w-5 h-5" />
              </a>
              <a
                href="/consultation"
                className="px-8 py-4 bg-white/10 text-white border border-gray-600 font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiServicesPage;
