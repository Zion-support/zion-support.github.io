'use client';
import React, { useState } from 'react';
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
  Search,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI Solutions',
      category: 'ai',
      description: 'Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'AI Automation'],
      price: 'Starting at $1,500/month',
      icon: Brain,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      category: 'it',
      description: 'Scalable and secure cloud solutions that grow with your business and ensure maximum uptime.',
      features: ['Cloud Migration', 'Server Management', 'Auto-scaling', '24/7 Monitoring'],
      price: 'Starting at $599/month',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 3,
      title: 'Cybersecurity',
      category: 'it',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],
      price: 'Starting at $799/month',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 4,
      title: 'AI Project Manager',
      category: 'micro-saas',
      description: 'AI-powered project management solution with intelligent task prioritization and predictive analytics.',
      features: ['AI Task Management', 'Predictive Analytics', 'Team Collaboration', 'Automated Workflows'],
      price: '$79/month',
      icon: Calendar,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      title: 'AI Social Media Manager',
      category: 'micro-saas',
      description: 'AI-powered social media management with content generation and smart scheduling.',
      features: ['AI Content Generation', 'Smart Scheduling', 'Analytics Dashboard', 'Team Collaboration'],
      price: '$149/month',
      icon: MessageCircle,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 6,
      title: 'AI Email Marketing',
      category: 'micro-saas',
      description: 'AI-powered email marketing automation with smart segmentation and content generation.',
      features: ['AI Content Generation', 'Smart Segmentation', 'Automated Workflows', 'Advanced Analytics'],
      price: '$99/month',
      icon: Mail,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 7,
      title: 'AI Voice Assistant',
      category: 'ai',
      description: 'AI-powered voice assistant platform for customer service and business automation.',
      features: ['Natural Language Processing', 'Voice Recognition', 'Smart Automation', 'Multi-User Support'],
      price: '$299/month',
      icon: Mic,
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 8,
      title: 'AI Cloud Infrastructure',
      category: 'it',
      description: 'AI-optimized cloud infrastructure with intelligent resource allocation and cost management.',
      features: ['AI Optimization', 'Auto-scaling', 'Cost Management', 'Performance Monitoring'],
      price: '$1,999/month',
      icon: Database,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Box }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud infrastructure, cybersecurity, and micro SaaS applications." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, micro SaaS, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className="text-cyan-400 text-sm font-medium">
                      {categories.find(cat => cat.id === service.category)?.name}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-bold">{service.price}</span>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your specific needs and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;