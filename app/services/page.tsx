'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
  MessageSquare,
  FileText,
  ShoppingCart,
  TrendingUp,
  Heart,
  Users,
  Target,
  Package,
  Scale
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced AI analytics that transform raw data into strategic business insights and automated decision-making.',
      icon: Brain,
      category: 'AI',
      features: ['Predictive Analytics', 'Machine Learning Models', 'Real-time Insights', 'Automated Reporting'],
      price: 'Starting at $2,500/month',
      link: '/ai-business-intelligence'
    },
    {
      id: 2,
      title: 'AI Customer Support Automation',
      description: 'Intelligent chatbots and customer service solutions that provide 24/7 support with human-like interactions.',
      icon: MessageSquare,
      category: 'AI',
      features: ['AI Chatbots', 'Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis'],
      price: 'Starting at $1,200/month',
      link: '/ai-customer-support'
    },
    {
      id: 3,
      title: 'AI Content Generation Suite',
      description: 'Comprehensive AI-powered content creation tools for marketing, social media, and business communications.',
      icon: FileText,
      category: 'AI',
      features: ['Content Writing', 'Social Media Posts', 'Email Marketing', 'SEO Optimization'],
      price: 'Starting at $800/month',
      link: '/ai-content-generation'
    },
    {
      id: 4,
      title: 'AI Cybersecurity Suite',
      description: 'Next-generation AI-powered security solutions that detect and prevent threats in real-time.',
      icon: Shield,
      category: 'Security',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Compliance Monitoring'],
      price: 'Starting at $3,500/month',
      link: '/ai-cybersecurity'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including migration, optimization, and management across AWS, Azure, and GCP.',
      icon: Cloud,
      category: 'Cloud',
      features: ['Cloud Migration', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
      price: 'Starting at $2,000/month',
      link: '/cloud-services'
    },
    {
      id: 6,
      title: 'AI E-commerce Optimization',
      description: 'AI-driven e-commerce solutions that boost sales through personalized recommendations and automated marketing.',
      icon: ShoppingCart,
      category: 'E-commerce',
      features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Analytics'],
      price: 'Starting at $1,800/month',
      link: '/ai-ecommerce-solutions'
    },
    {
      id: 7,
      title: 'AI Financial Analytics',
      description: 'Advanced financial AI tools for risk assessment, fraud detection, and investment optimization.',
      icon: TrendingUp,
      category: 'Finance',
      features: ['Risk Assessment', 'Fraud Detection', 'Investment Analysis', 'Financial Forecasting'],
      price: 'Starting at $2,200/month',
      link: '/ai-fintech'
    },
    {
      id: 8,
      title: 'AI Healthcare Solutions',
      description: 'Medical AI applications for diagnosis assistance, patient monitoring, and healthcare optimization.',
      icon: Heart,
      category: 'Healthcare',
      features: ['Diagnostic Assistance', 'Patient Monitoring', 'Drug Discovery', 'Medical Imaging'],
      price: 'Starting at $4,000/month',
      link: '/ai-healthcare'
    },
    {
      id: 9,
      title: 'AI HR & Recruitment',
      description: 'Intelligent HR solutions that streamline recruitment, employee management, and workforce optimization.',
      icon: Users,
      category: 'HR',
      features: ['Resume Screening', 'Candidate Matching', 'Employee Analytics', 'Performance Tracking'],
      price: 'Starting at $1,500/month',
      link: '/ai-hr'
    },
    {
      id: 10,
      title: 'AI Marketing Automation',
      description: 'Complete AI-powered marketing suite for lead generation, campaign optimization, and customer engagement.',
      icon: Target,
      category: 'Marketing',
      features: ['Lead Generation', 'Campaign Optimization', 'Customer Segmentation', 'ROI Tracking'],
      price: 'Starting at $1,600/month',
      link: '/ai-marketing'
    },
    {
      id: 11,
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with predictive analytics and automated optimization.',
      icon: Package,
      category: 'Supply Chain',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Analytics'],
      price: 'Starting at $2,800/month',
      link: '/ai-supply-chain'
    },
    {
      id: 12,
      title: 'AI Legal Research Assistant',
      description: 'AI-powered legal research and document analysis tools for law firms and legal departments.',
      icon: Scale,
      category: 'Legal',
      features: ['Document Analysis', 'Case Research', 'Contract Review', 'Compliance Checking'],
      price: 'Starting at $2,000/month',
      link: '/ai-legal'
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Security', 'E-commerce', 'Finance', 'Healthcare', 'HR', 'Marketing', 'Supply Chain', 'Legal'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud services, cybersecurity, data analytics, and more." />
        <meta name="keywords" content="services, AI solutions, cloud services, cybersecurity, data analytics, mobile development, database services" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business 
              and drive growth.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
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
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold">{service.price}</span>
                    <Link 
                      to={service.link} 
                      className="flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Quote
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;