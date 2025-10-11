'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Settings,
  Target,
  Heart,
  DollarSign,
  Box,
  Monitor,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Lock,
  Calendar,
  Headphones,
  Code,
  Mail,
  Phone,
  MapPin,
  FileText,
  Package,
  Workflow,
  Eye,
  Wifi,
  ShoppingCart,
  Search,
  Filter
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    {
      id: 'ai-chatbot-enterprise',
      name: 'AI Chatbot Enterprise',
      description: 'Advanced conversational AI platform with natural language understanding and multi-channel support.',
      price: '$299/month',
      marketPrice: '$500-1500/month',
      features: [
        'Natural Language Processing',
        'Multi-channel Support',
        'Custom Training',
        'Analytics Dashboard',
        'API Integration',
        '24/7 Availability',
        'Sentiment Analysis',
        'Multi-language Support'
      ],
      benefits: [
        'Improved customer satisfaction',
        'Reduced support costs',
        '24/7 availability',
        'Scalable customer service',
        'Better response times',
        'Data-driven insights',
        'Easy integration',
        'Professional support'
      ],
      icon: MessageSquare,
      category: 'Customer Service',
      popular: true
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Intelligent business analytics platform with AI-powered insights and predictive modeling.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'AI-powered Insights',
        'Predictive Analytics',
        'Real-time Dashboards',
        'Custom Reports',
        'Data Visualization',
        'Automated Alerts',
        'Multi-source Integration',
        'Mobile Access'
      ],
      benefits: [
        'Data-driven decisions',
        'Predictive insights',
        'Real-time monitoring',
        'Automated reporting',
        'Better performance',
        'Cost optimization',
        'Professional analytics',
        'Scalable solution'
      ],
      icon: BarChart3,
      category: 'Analytics',
      popular: true
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis.',
      price: '$399/month',
      marketPrice: '$800-2000/month',
      features: [
        'Image Recognition',
        'Object Detection',
        'Facial Recognition',
        'OCR Technology',
        'Quality Control',
        'Real-time Processing',
        'Custom Models',
        'API Integration'
      ],
      benefits: [
        'Automated visual analysis',
        'Improved accuracy',
        'Cost reduction',
        'Faster processing',
        'Quality assurance',
        'Scalable solutions',
        'Professional results',
        'Easy integration'
      ],
      icon: Eye,
      category: 'Computer Vision',
      popular: false
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'Content Writing',
        'SEO Optimization',
        'Multi-language Support',
        'Brand Voice Customization',
        'Content Planning',
        'Plagiarism Detection',
        'Performance Analytics',
        'Team Collaboration'
      ],
      benefits: [
        'Consistent content quality',
        'Time savings',
        'SEO optimization',
        'Brand consistency',
        'Scalable content',
        'Professional writing',
        'Cost-effective solution',
        'Easy management'
      ],
      icon: FileText,
      category: 'Content',
      popular: false
    },
    {
      id: 'ai-automation-suite',
      name: 'AI Automation Suite',
      description: 'Comprehensive business process automation with AI-powered workflow optimization.',
      price: '$249/month',
      marketPrice: '$500-1500/month',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Task Scheduling',
        'Error Handling',
        'Integration Hub',
        'Performance Monitoring',
        'Custom Workflows',
        'Scalable Architecture'
      ],
      benefits: [
        'Streamlined processes',
        'Reduced manual work',
        'Improved efficiency',
        'Cost savings',
        'Better accuracy',
        'Scalable automation',
        'Professional workflows',
        'Easy management'
      ],
      icon: Workflow,
      category: 'Automation',
      popular: true
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      description: 'Advanced AI-powered security monitoring and threat detection system.',
      price: '$349/month',
      marketPrice: '$700-2000/month',
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Real-time Monitoring',
        'Automated Response',
        'Vulnerability Scanning',
        'Compliance Reporting',
        'Security Analytics',
        '24/7 Monitoring'
      ],
      benefits: [
        'Enhanced security',
        'Faster threat detection',
        'Reduced risks',
        'Automated protection',
        'Better compliance',
        'Professional security',
        'Cost-effective solution',
        'Peace of mind'
      ],
      icon: Shield,
      category: 'Security',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Computer Vision', name: 'Computer Vision', count: services.filter(s => s.category === 'Computer Vision').length },
    { id: 'Content', name: 'Content', count: services.filter(s => s.category === 'Content').length },
    { id: 'Automation', name: 'Automation', count: services.filter(s => s.category === 'Automation').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, analytics, computer vision, automation, and machine learning solutions for your business." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, computer vision, automation" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Advanced Artificial Intelligence Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business. Our comprehensive AI services 
              cover everything from machine learning and computer vision to natural language processing and automation.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                            Popular
                          </span>
                        )}
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
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let our AI experts help you choose the right solutions for your business needs. 
                Get a free consultation and see how AI can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free AI Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AiServicesPage;