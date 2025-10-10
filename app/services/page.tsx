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
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language Support', 'Enterprise Integration', 'Custom Wake Words'],
      price: 'Starting at $299/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Predictive Maintenance',
      description: 'Prevent equipment failures with AI-powered predictive maintenance and real-time monitoring systems.',
      features: ['Failure Prediction', 'Real-time Monitoring', 'Maintenance Scheduling', 'Cost Optimization', 'IoT Integration'],
      price: 'Starting at $599/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Supply Chain Optimization',
      description: 'Optimize supply chain operations with AI-driven demand forecasting, inventory management, and logistics planning.',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Risk Assessment'],
      price: 'Starting at $899/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Customer Service Automation',
      description: 'Automate customer service with intelligent chatbots, sentiment analysis, and automated ticket routing.',
      features: ['Intelligent Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Multi-channel Support', 'Performance Analytics'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate high-quality content automatically with AI-powered writing, image creation, and video production.',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Brand Consistency'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },

    // IT Services
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
      price: 'Starting at $500/month',
      category: 'IT Services',
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Threat Detection', 'Incident Response'],
      price: 'Starting at $800/month',
      category: 'IT Services'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management services for optimal performance.',
      features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
      price: 'Starting at $400/month',
      category: 'IT Services'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'UI/UX Design', 'App Store Optimization'],
      price: 'Starting at $2,000/project',
      category: 'IT Services'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['Frontend Development', 'Backend Development', 'API Development', 'Performance Optimization', 'SEO'],
      price: 'Starting at $1,500/project',
      category: 'IT Services'
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with DevOps best practices.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Containerization', 'Automation'],
      price: 'Starting at $600/month',
      category: 'IT Services'
    },

    // Data Analytics
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Data Warehousing', 'Custom Dashboards'],
      price: 'Starting at $700/month',
      category: 'Data Analytics',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'Big Data Solutions',
      description: 'Handle large-scale data processing and analysis with enterprise-grade big data solutions.',
      features: ['Hadoop/Spark', 'Data Lakes', 'Real-time Processing', 'Scalable Architecture', 'Data Governance'],
      price: 'Starting at $1,200/month',
      category: 'Data Analytics'
    }
  ];

  const categories = ['All', 'AI Services', 'IT Services', 'Data Analytics'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <React.Fragment>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, cloud computing, cybersecurity, and data analytics. Transform your business with our expert solutions." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, data analytics, machine learning, web development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-cyan-400 mb-4">
                    <service.icon className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-gray-400">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-cyan-400">
                      {service.price}
                    </span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Contact our experts to discuss your requirements and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ServicesPage;