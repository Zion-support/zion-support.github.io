'use client';
import React, { useState, useCallback } from 'react';
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
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Settings,
  Calendar,
  CheckSquare,
  FileText,
  ArrowRight,
  Star,
  CheckCircle,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions tailored to your business needs.',
      icon: Brain,
      category: 'ai',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Custom',
      popular: true
    },
    {
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      icon: Cloud,
      category: 'infrastructure',
      features: ['AWS/Azure/GCP', 'Serverless Architecture', 'Container Orchestration', 'Auto-scaling'],
      price: 'From $500/month',
      popular: false
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      category: 'security',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
      price: 'From $1,000/month',
      popular: true
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Bespoke software solutions designed specifically for your requirements.',
      icon: Code,
      category: 'development',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      price: 'Project-based',
      popular: false
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our analytics solutions.',
      icon: BarChart,
      category: 'analytics',
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Reporting'],
      price: 'From $800/month',
      popular: false
    },
    {
      id: 'team-collaboration',
      title: 'Team Collaboration',
      description: 'Enhance productivity with our collaboration and communication tools.',
      icon: Users,
      category: 'productivity',
      features: ['Project Management', 'Communication Tools', 'Workflow Automation', 'Team Analytics'],
      price: 'From $200/month',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'security', name: 'Security' },
    { id: 'development', name: 'Development' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'productivity', name: 'Productivity' }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services including AI solutions, cloud infrastructure, cybersecurity, custom development, and more." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, custom development, data analytics, business solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth
            </p>
          </section>

          {/* Search and Filter Section */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="w-full px-4 py-3 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-gray-800/50 backdrop-blur-sm border rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                    service.popular
                      ? 'border-cyan-400 shadow-lg shadow-cyan-500/25'
                      : 'border-gray-700 hover:border-cyan-400'
                  }`}
                >
                  {service.popular && (
                    <div className="flex items-center space-x-1 mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-yellow-400">Popular</span>
                    </div>
                  )}
                  
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;