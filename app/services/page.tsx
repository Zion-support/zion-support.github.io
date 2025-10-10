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
  Cpu,
  Target,
  Lock,
  Monitor,
  Wifi,
  Package,
  Heart,
  DollarSign,
  Award,
  Rocket,
  Layers,
  Workflow,
  BarChart,
  MessageCircle,
  Headphones,
  HardDrive,
  Printer,
  Router,
  Box,
  Mic
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      category: 'ai',
      icon: Brain,
      features: ['Natural language processing', 'Multi-language support', 'Sentiment analysis', 'CRM integration'],
      price: '$299/month',
      popular: true
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and GCP expertise',
      category: 'it',
      icon: Cloud,
      features: ['Multi-cloud deployment', 'Auto-scaling', 'Disaster recovery', 'Security compliance'],
      price: '$599/month',
      popular: true
    },
    {
      id: 3,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection and compliance',
      category: 'it',
      icon: Shield,
      features: ['Threat monitoring', 'Vulnerability scanning', 'Compliance management', 'Incident response'],
      price: '$799/month',
      popular: false
    },
    {
      id: 4,
      title: 'AI Data Analytics',
      description: 'Intelligent data analysis and business intelligence with predictive insights',
      category: 'ai',
      icon: BarChart3,
      features: ['Predictive analytics', 'Real-time dashboards', 'Automated reporting', 'Data visualization'],
      price: '$399/month',
      popular: false
    },
    {
      id: 5,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      category: 'it',
      icon: Smartphone,
      features: ['Native development', 'Cross-platform', 'App store optimization', 'Performance optimization'],
      price: '$499/month',
      popular: false
    },
    {
      id: 6,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models',
      category: 'ai',
      icon: FileText,
      features: ['Blog post generation', 'Social media content', 'Email marketing', 'SEO optimization'],
      price: '$199/month',
      popular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Solutions', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length }
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
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive AI and IT services. From AI chatbots to cloud infrastructure, we have the solutions you need." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                  service.popular 
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    service.category === 'ai' 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-600'
                  }`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <div className="text-cyan-400 font-bold">{service.price}</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We can create tailored AI and IT solutions to meet your specific business requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium border border-cyan-400 px-8 py-4 rounded-lg"
                >
                  <span>(302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ServicesPage;