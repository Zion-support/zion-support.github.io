'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  Search,
  Filter,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Consulting'],
      price: 'Starting at $1,500/month',
      category: 'AI Services',
      popular: true
    },
    {
      icon: Brain,
      title: 'AI Voice Assistant Platform',
      description: 'Build custom voice assistants with natural language understanding, multi-language support, and enterprise integration.',
      features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language Support', 'Enterprise Integration', 'Custom Training'],
      price: 'Starting at $2,500/month',
      category: 'AI Services',
      popular: false
    },
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced AI models for blogs, social media, marketing materials, and more.',
      features: ['Blog Writing', 'Social Media Content', 'Marketing Copy', 'Product Descriptions', 'SEO Optimization'],
      price: 'Starting at $799/month',
      category: 'AI Services',
      popular: true
    },
    {
      icon: Brain,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics and visualization tools.',
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Integration'],
      price: 'Starting at $1,200/month',
      category: 'AI Services',
      popular: false
    },

    // IT Services
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced security.',
      features: ['AWS Migration', 'Azure Migration', 'GCP Migration', 'Data Migration', 'Application Migration'],
      price: 'Starting at $3,000/month',
      category: 'IT Services',
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Penetration Testing', 'Security Audits', 'Compliance'],
      price: 'Starting at $1,800/month',
      category: 'IT Services',
      popular: true
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration', 'Legacy Modernization'],
      price: 'Starting at $2,500/month',
      category: 'IT Services',
      popular: false
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Data-driven insights and analytics to optimize your business performance.',
      features: ['Data Warehousing', 'ETL Processes', 'Dashboard Creation', 'Report Automation', 'KPI Tracking'],
      price: 'Starting at $1,600/month',
      category: 'IT Services',
      popular: false
    },

    // Micro SAAS
    {
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights and automation.',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Sales Forecasting', 'Customer Segmentation'],
      price: '$149/month',
      category: 'Micro SAAS',
      popular: true
    },
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and custom dashboards.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Automated Reports', 'Data Visualization', 'Alert System'],
      price: '$199/month',
      category: 'Micro SAAS',
      popular: true
    },
    {
      icon: Code,
      title: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, and social media automation.',
      features: ['AI Writing', 'Image Generation', 'Video Editing', 'Social Media Automation', 'Content Calendar'],
      price: '$299/month',
      category: 'Micro SAAS',
      popular: false
    },
    {
      icon: Brain,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation.',
      features: ['No-code Builder', 'Multi-channel Support', 'Natural Language Processing', 'Analytics', 'Integration'],
      price: '$99/month',
      category: 'Micro SAAS',
      popular: true
    }
  ];

  const categories = ['All', 'AI Services', 'IT Services', 'Micro SAAS'];

  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price':
          return a.price.localeCompare(b.price);
        case 'popular':
          return b.popular ? 1 : -1;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services. From AI solutions to cloud migration, we provide cutting-edge technology services for your business." />
        <meta name="keywords" content="AI services, IT services, cloud migration, cybersecurity, custom development, business intelligence, micro saas" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive range of AI and IT solutions designed to transform your business 
                and drive unprecedented growth.
              </p>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Sort */}
                  <div>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="name">Sort by Name</option>
                      <option value="price">Sort by Price</option>
                      <option value="popular">Sort by Popularity</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div
                    key={index}
                    className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 relative ${
                      service.popular ? 'ring-2 ring-cyan-400/50' : ''
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Popular
                        </div>
                      </div>
                    )}

                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.category}</div>
                    </div>

                    <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                ))}
              </div>

              {filteredServices.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Let's discuss your specific needs and create a customized solution for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                    Get Free Consultation
                  </button>
                  <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                    View Pricing
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
};

ServicesPage.displayName = 'ServicesPage';

export default ServicesPage;