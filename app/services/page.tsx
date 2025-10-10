'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that understands context and provides human-like responses',
      icon: MessageCircle,
      category: 'AI',
      price: 'Starting at $1,299/month',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', '24/7 availability']
    },
    {
      id: 2,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and automation',
      icon: Brain,
      category: 'AI',
      price: 'Starting at $2,499/month',
      features: ['Custom model training', 'Predictive analytics', 'Data preprocessing', 'Model optimization']
    },
    {
      id: 3,
      title: 'Computer Vision',
      description: 'Image and video analysis for quality control, security, and automation',
      icon: Target,
      category: 'AI',
      price: 'Starting at $1,899/month',
      features: ['Object detection', 'Image classification', 'Quality inspection', 'Real-time analysis']
    },
    // Cloud Services
    {
      id: 4,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business',
      icon: Cloud,
      category: 'Cloud',
      price: 'Starting at $1,599/month',
      features: ['Cloud migration', 'Server management', 'Auto-scaling', '24/7 monitoring']
    },
    {
      id: 5,
      title: 'DevOps & CI/CD',
      description: 'Automated development workflows and deployment pipelines',
      icon: Settings,
      category: 'Cloud',
      price: 'Starting at $2,999/month',
      features: ['CI/CD pipeline setup', 'Container orchestration', 'Infrastructure as Code', 'Deployment automation']
    },
    // Security Services
    {
      id: 6,
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions to protect your digital assets',
      icon: Shield,
      category: 'Security',
      price: 'Starting at $2,999/month',
      features: ['Threat detection', 'Security audits', 'Compliance management', 'Incident response']
    },
    {
      id: 7,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and threat detection',
      icon: Lock,
      category: 'Security',
      price: 'Starting at $1,799/month',
      features: ['Real-time monitoring', 'Threat intelligence', 'Automated response', 'Security reporting']
    },
    // Development Services
    {
      id: 8,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions designed specifically for your requirements',
      icon: Code,
      category: 'Development',
      price: 'Starting at $5,999/project',
      features: ['Custom applications', 'API development', 'Database design', 'System integration']
    },
    {
      id: 9,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: Smartphone,
      category: 'Development',
      price: 'Starting at $8,999/project',
      features: ['Native iOS/Android apps', 'Cross-platform development', 'UI/UX design', 'App store deployment']
    },
    // Analytics Services
    {
      id: 10,
      title: 'Business Intelligence',
      description: 'Transform your data into actionable insights with our analytics solutions',
      icon: BarChart,
      category: 'Analytics',
      price: 'Starting at $1,399/month',
      features: ['Data visualization', 'Custom dashboards', 'Real-time reporting', 'Predictive analytics']
    },
    {
      id: 11,
      title: 'Data Analytics',
      description: 'Advanced data processing and analysis with AI-powered insights',
      icon: Database,
      category: 'Analytics',
      price: 'Starting at $1,599/month',
      features: ['Big data processing', 'Data mining', 'Statistical analysis', 'Machine learning insights']
    },
    // Automation Services
    {
      id: 12,
      title: 'Process Automation',
      description: 'Intelligent automation of repetitive tasks and workflows',
      icon: Zap,
      category: 'Automation',
      price: 'Starting at $1,599/month',
      features: ['Workflow automation', 'Document processing', 'Email automation', 'Task scheduling']
    },
    {
      id: 13,
      title: 'RPA Solutions',
      description: 'Robotic Process Automation for business process optimization',
      icon: Settings,
      category: 'Automation',
      price: 'Starting at $2,299/month',
      features: ['Bot development', 'Process mapping', 'Integration', 'Performance monitoring']
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Security', 'Development', 'Analytics', 'Automation'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, cloud computing, cybersecurity, software development, and more." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, software development, business intelligence, automation" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="capitalize">
                    {category === 'all' ? 'All Services' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckSquare className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-lg font-semibold text-cyan-400">{service.price}</div>
                </div>
                
                <div className="flex space-x-3">
                  <Link
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                  >
                    Get Quote
                  </Link>
                  <button className="flex-1 border border-cyan-500 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your requirements and get a customized solution that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;