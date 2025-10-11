'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Eye,
  Settings,
  Users,
  MessageSquare,
  FileText,
  Target
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support.',
      category: 'ai',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions']
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven decisions', 'Predictive insights', 'Automated reporting', 'Cost reduction']
    },
    {
      icon: MessageSquare,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our AI-powered content generation and optimization tools.',
      category: 'ai',
      features: ['Content Creation', 'SEO Optimization', 'Multi-format Support', 'Brand Voice Consistency', 'A/B Testing'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1500/month',
      benefits: ['10x content production', 'Consistent quality', 'SEO optimized', 'Time savings']
    },
    {
      icon: Target,
      title: 'AI Process Automation',
      description: 'Streamline your business processes with intelligent automation that learns and adapts to your workflows.',
      category: 'ai',
      features: ['Workflow Automation', 'Document Processing', 'Data Extraction', 'Decision Making', 'Integration APIs'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['90% time savings', 'Error reduction', 'Scalable processes', 'ROI within 3 months']
    },

    // IT Services
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed to grow with your business needs and requirements.',
      category: 'it',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery', '24/7 Monitoring'],
      price: 'Starting at $499/month',
      marketPrice: '$1000-5000/month',
      benefits: ['99.9% uptime', 'Cost optimization', 'Scalable infrastructure', 'Enhanced security']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      category: 'it',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response', 'Security Training'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Zero security breaches', 'Compliance assurance', 'Risk mitigation', 'Peace of mind']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      category: 'it',
      features: ['iOS & Android', 'Cross-platform', 'UI/UX Design', 'API Integration', 'App Store Optimization'],
      price: 'Starting at $2999/project',
      marketPrice: '$5000-50000/project',
      benefits: ['Increased engagement', 'Brand presence', 'Revenue generation', 'User satisfaction']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimized database solutions with advanced performance tuning, backup strategies, and data migration services.',
      category: 'it',
      features: ['Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening', 'Monitoring'],
      price: 'Starting at $199/month',
      marketPrice: '$400-2000/month',
      benefits: ['Improved performance', 'Data protection', 'Reduced downtime', 'Cost savings']
    },

    // Micro SaaS
    {
      icon: Settings,
      title: 'Project Management Tool',
      description: 'Comprehensive project management solution with AI-powered insights and team collaboration features.',
      category: 'saas',
      features: ['Task Management', 'Team Collaboration', 'AI Insights', 'Time Tracking', 'Reporting'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Improved productivity', 'Better collaboration', 'Project visibility', 'Time savings']
    },
    {
      icon: Users,
      title: 'Customer Relationship Management',
      description: 'AI-enhanced CRM system that helps you manage customer relationships and drive sales growth.',
      category: 'saas',
      features: ['Contact Management', 'Sales Pipeline', 'AI Analytics', 'Email Integration', 'Reporting'],
      price: 'Starting at $39/month',
      marketPrice: '$80-300/month',
      benefits: ['Increased sales', 'Better customer relationships', 'Data insights', 'Automated workflows']
    },
    {
      icon: FileText,
      title: 'Document Management System',
      description: 'Secure document storage and management with AI-powered search and collaboration features.',
      category: 'saas',
      features: ['Document Storage', 'AI Search', 'Version Control', 'Collaboration', 'Security'],
      price: 'Starting at $19/month',
      marketPrice: '$40-150/month',
      benefits: ['Organized documents', 'Easy access', 'Secure storage', 'Team collaboration']
    },
    {
      icon: Eye,
      title: 'Infrastructure Monitoring',
      description: 'Advanced infrastructure monitoring platform with AI-powered anomaly detection and optimization.',
      category: 'saas',
      features: ['Real-time Monitoring', 'Anomaly Detection', 'Predictive Maintenance', 'Performance Optimization', 'Automated Alerts'],
      price: 'Starting at $119/month',
      marketPrice: '$200-500/month',
      benefits: ['Improved uptime', 'Faster issue resolution', 'Proactive maintenance', 'Cost optimization']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length },
    { id: 'saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'saas').length }
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
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services. From AI-powered chatbots to cloud infrastructure, we provide cutting-edge solutions to transform your business." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, mobile development, micro SaaS, business solutions" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Discover our AI and IT services designed to transform your business" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth. 
              From cutting-edge AI technologies to robust infrastructure solutions.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-cyan-400 font-semibold">{service.price}</span>
                      <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {service.benefits && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <a
                    href="/contact"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can help you achieve your business goals. 
                Get a free consultation and discover the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;