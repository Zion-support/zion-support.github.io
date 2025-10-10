'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Settings,
  Calendar,
  CheckSquare,
  FileText,
  MessageCircle,
  Heart,
  DollarSign,
  Box,
  Monitor,
  Link as LinkIcon,
  Server,
  Share2,
  Mic,
  Wrench,
  Truck,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      id: 'ai-analytics',
      name: 'AI Analytics',
      category: 'ai',
      icon: BarChart,
      description: 'Advanced data insights powered by artificial intelligence',
      href: '/ai-analytics'
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      category: 'ai',
      icon: Zap,
      description: 'Streamline workflows with intelligent automation',
      href: '/ai-automation'
    },
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot',
      category: 'ai',
      icon: MessageCircle,
      description: 'Intelligent conversational AI for customer service',
      href: '/ai-chatbot-builder'
    },
    {
      id: 'ai-crm',
      name: 'AI CRM',
      category: 'ai',
      icon: Users,
      description: 'Customer relationship management with AI insights',
      href: '/ai-crm'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      category: 'ai',
      icon: Shield,
      description: 'Advanced threat protection with AI monitoring',
      href: '/ai-cybersecurity'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare',
      category: 'ai',
      icon: Heart,
      description: 'Medical AI solutions for healthcare providers',
      href: '/ai-healthcare'
    },
    // IT Services
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      category: 'it',
      icon: Cloud,
      description: 'Scalable and secure cloud solutions',
      href: '/ai-cloud-infrastructure'
    },
    {
      id: 'api-management',
      name: 'API Management',
      category: 'it',
      icon: Code,
      description: 'API development and management services',
      href: '/ai-api-management'
    },
    {
      id: 'network-solutions',
      name: 'Network Solutions',
      category: 'it',
      icon: Globe,
      description: 'Advanced networking infrastructure',
      href: '/ai-network-solutions'
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      category: 'it',
      icon: Smartphone,
      description: 'Native and cross-platform mobile apps',
      href: '/ai-mobile-development'
    },
    {
      id: 'system-integration',
      name: 'System Integration',
      category: 'it',
      icon: Settings,
      description: 'Seamless integration of disparate systems',
      href: '/ai-system-integration'
    },
    // Micro SaaS
    {
      id: 'project-management',
      name: 'Project Management',
      category: 'micro-saas',
      icon: CheckSquare,
      description: 'Streamlined project tracking and management',
      href: '/micro-saas-project-management'
    },
    {
      id: 'customer-support',
      name: 'Customer Support',
      category: 'micro-saas',
      icon: MessageCircle,
      description: 'Efficient customer support systems',
      href: '/micro-saas-customer-support'
    },
    {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard',
      category: 'micro-saas',
      icon: BarChart,
      description: 'Business intelligence and analytics',
      href: '/micro-saas-analytics'
    },
    {
      id: 'content-management',
      name: 'Content Management',
      category: 'micro-saas',
      icon: FileText,
      description: 'Content organization and management',
      href: '/micro-saas-cms'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length },
    { id: 'micro-saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'micro-saas').length }
  ];

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') return services;
    return services.filter(service => service.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services by Zion Tech Group. AI solutions, cloud infrastructure, cybersecurity, and micro SaaS platforms." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, micro SaaS, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business 
                and drive innovation in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-white/10'
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service) => (
                <Link
                  key={service.id}
                  to={service.href}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our services can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link 
                  to="/pricing"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;