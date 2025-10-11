'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, CheckCircle, Star } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      category: 'AI Services',
      icon: Brain,
      color: 'from-cyan-500 to-blue-500',
      services: [
        { name: 'AI Analytics', href: '/ai-analytics', description: 'Advanced data insights and predictive analytics' },
        { name: 'AI Automation', href: '/ai-automation', description: 'Intelligent process automation solutions' },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', description: 'Custom conversational AI solutions' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'AI-powered security solutions' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', description: 'Data-driven business intelligence' },
        { name: 'AI Content Generation', href: '/ai-content-generation', description: 'Automated content creation tools' }
      ]
    },
    {
      category: 'IT Services',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', description: 'Scalable cloud solutions and migration' },
        { name: 'Web Development', href: '/web-development', description: 'Modern web applications and platforms' },
        { name: 'Mobile Development', href: '/mobile-development', description: 'iOS and Android app development' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', description: 'Comprehensive security services' },
        { name: 'Data Analytics', href: '/data-analytics', description: 'Business intelligence and reporting' },
        { name: 'API Development', href: '/api-development', description: 'Custom API solutions and integration' }
      ]
    },
    {
      category: 'Micro SAAS',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', description: 'Business intelligence platform' },
        { name: 'Zion Chat AI', href: '/zion-chat-ai', description: 'AI customer support solution' },
        { name: 'Zion Security Shield', href: '/zion-security-shield', description: 'Cybersecurity monitoring tool' },
        { name: 'Zion Content Studio', href: '/zion-content-studio', description: 'AI content creation platform' },
        { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', description: 'AI-enhanced CRM system' },
        { name: 'Zion Project Master', href: '/zion-project-master', description: 'Project management AI' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{category.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {service.description}
                    </p>
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
