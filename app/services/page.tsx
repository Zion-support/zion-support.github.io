'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  BarChart, 
  Target, 
  TrendingUp, 
  Globe, 
  Database, 
  Users, 
  Settings, 
  CheckCircle, 
  Clock, 
  Award, 
  Code, 
  Cloud, 
  Smartphone, 
  Calendar, 
  FileText, 
  MessageCircle, 
  Heart, 
  DollarSign, 
  Box, 
  Monitor, 
  Package, 
  Mic, 
  Workflow, 
  Eye, 
  Wifi, 
  MessageSquare, 
  ShoppingCart 
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI Solutions',
      category: 'ai',
      description: 'Comprehensive artificial intelligence solutions for your business needs.',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Custom',
      duration: '3-6 months'
    },
    {
      id: 2,
      title: 'Cloud Services',
      category: 'cloud',
      description: 'Scalable cloud infrastructure and services for modern businesses.',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps', 'Monitoring'],
      price: 'Starting at $2,000/month',
      duration: '1-3 months'
    },
    {
      id: 3,
      title: 'Cybersecurity',
      category: 'security',
      description: 'Comprehensive security solutions to protect your business.',
      icon: Shield,
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
      price: 'Starting at $1,500/month',
      duration: '2-4 months'
    },
    {
      id: 4,
      title: 'Software Development',
      category: 'development',
      description: 'Custom software solutions tailored to your requirements.',
      icon: Code,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      price: 'Starting at $5,000',
      duration: '2-8 months'
    },
    {
      id: 5,
      title: 'Data Analytics',
      category: 'analytics',
      description: 'Transform your data into actionable insights.',
      icon: BarChart,
      features: ['Data Visualization', 'Business Intelligence', 'Reporting', 'Predictive Analytics'],
      price: 'Starting at $3,000/month',
      duration: '1-4 months'
    },
    {
      id: 6,
      title: 'IT Consulting',
      category: 'consulting',
      description: 'Strategic IT guidance to optimize your technology stack.',
      icon: Settings,
      features: ['Technology Assessment', 'Strategic Planning', 'Architecture Design', 'Best Practices'],
      price: 'Starting at $200/hour',
      duration: 'Ongoing'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'consulting', name: 'Consulting', icon: Settings }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services, we have everything you need." />
        <meta name="keywords" content="services, AI, cloud, cybersecurity, development, analytics, consulting" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to accelerate your business growth and drive innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {service.price}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your project requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get a Quote
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ServicesPage;