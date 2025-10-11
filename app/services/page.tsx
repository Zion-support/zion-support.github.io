'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Filter, CheckCircle, ArrowRight, Star, Clock, Users, Target, Brain, Cloud, Shield, Zap, Eye, BarChart, Code, Globe, Database, Smartphone, Lock, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      category: 'ai',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      icon: MessageCircle
    },
    {
      id: 2,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      icon: BarChart
    },
    {
      id: 3,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      icon: Workflow
    },
    {
      id: 4,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      category: 'ai',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Quality assurance', 'Security enhancement', 'Process automation', 'Cost reduction'],
      icon: Eye
    },
    {
      id: 5,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and cost-effective cloud solutions that grow with your business needs.',
      category: 'it',
      features: ['AWS/Azure/GCP', 'Auto-scaling', '99.9% Uptime', 'Cost Optimization', 'Disaster Recovery'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1500/month',
      benefits: ['Scalability', 'Reliability', 'Cost efficiency', 'Global reach'],
      icon: Cloud
    },
    {
      id: 6,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions with AI-powered threat detection and 24/7 monitoring.',
      category: 'it',
      features: ['Threat Detection', 'Compliance Management', 'Security Audits', 'Incident Response', 'Vulnerability Assessment'],
      price: 'Starting at $249/month',
      marketPrice: '$500-2000/month',
      benefits: ['Data protection', 'Compliance assurance', 'Threat prevention', 'Peace of mind'],
      icon: Shield
    },
    {
      id: 7,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      category: 'it',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Optimization', 'Cross-browser Compatibility', 'Mobile-first Approach'],
      price: 'Starting at $149/month',
      marketPrice: '$300-1200/month',
      benefits: ['Modern design', 'Fast performance', 'SEO friendly', 'Mobile optimized'],
      icon: Globe
    },
    {
      id: 8,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with AI integration and modern UX design.',
      category: 'it',
      features: ['iOS & Android', 'Cross-platform', 'AI Integration', 'Push Notifications', 'Offline Support'],
      price: 'Starting at $299/month',
      marketPrice: '$600-2500/month',
      benefits: ['Native performance', 'Cross-platform', 'AI features', 'User engagement'],
      icon: Smartphone
    },
    {
      id: 9,
      title: 'Zion Analytics Pro',
      description: 'Business intelligence platform with AI-powered insights and automated reporting.',
      category: 'micro-saas',
      features: ['Real-time Dashboards', 'AI Insights', 'Automated Reports', 'Data Visualization', 'Custom Metrics'],
      price: '$99/month',
      marketPrice: '$200-800/month',
      benefits: ['Data insights', 'Automated reporting', 'Real-time monitoring', 'Easy setup'],
      icon: BarChart
    },
    {
      id: 10,
      title: 'Zion Chat AI',
      description: 'AI customer support chatbot with natural language processing and multi-channel support.',
      category: 'micro-saas',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Sentiment Analysis', 'CRM Integration', 'Custom Training'],
      price: '$79/month',
      marketPrice: '$150-600/month',
      benefits: ['24/7 support', 'Instant responses', 'Cost reduction', 'Customer satisfaction'],
      icon: MessageCircle
    },
    {
      id: 11,
      title: 'Zion Security Shield',
      description: 'Cybersecurity monitoring and threat detection with AI-powered security analytics.',
      category: 'micro-saas',
      features: ['Threat Detection', 'Real-time Monitoring', 'Security Analytics', 'Incident Response', 'Compliance Reports'],
      price: '$149/month',
      marketPrice: '$300-1200/month',
      benefits: ['Threat prevention', 'Real-time monitoring', 'Compliance', 'Peace of mind'],
      icon: Shield
    },
    {
      id: 12,
      title: 'Zion Cloud Vault',
      description: 'Cloud backup and recovery solution with AI-powered data management and security.',
      category: 'micro-saas',
      features: ['Automated Backup', 'Data Recovery', 'AI Data Management', 'Security Encryption', 'Compliance Support'],
      price: '$59/month',
      marketPrice: '$120-500/month',
      benefits: ['Data protection', 'Automated backup', 'Quick recovery', 'Cost effective'],
      icon: Cloud
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length },
    { id: 'micro-saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'micro-saas').length }
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
        <meta name="description" content="Discover our comprehensive range of AI, IT, and Micro SaaS services designed to transform your business." />
        <meta name="keywords" content="AI services, IT services, Micro SaaS, business solutions, technology consulting" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive AI, IT, and Micro SaaS solutions designed to transform your business
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-sm text-cyan-400 capitalize">{service.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center text-sm text-green-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span>Save up to 50%</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a free consultation and discover how our services can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ServicesPage;