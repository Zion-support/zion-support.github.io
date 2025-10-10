'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Brain, Code, Database, Smartphone, Globe, Lock, FileText, Mail, Calendar, Target, Cpu, Settings, Monitor, Wifi, Smartphone as Phone, CreditCard, PieChart, Search, Filter, Download, Upload, Eye, AlertTriangle, CheckSquare, Clock, DollarSign, Award, Rocket, Sparkles } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  users: string;
  popular: boolean;
  category: string;
  link: string;
  marketPrice: string;
  savings?: string;
}

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      id: '1',
      icon: BarChart3,
      title: 'ZionAnalytics Pro',
      description: 'Advanced business intelligence and real-time analytics platform with AI-powered insights',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Multi-source data integration (APIs, databases, files)',
        'Automated report generation and email scheduling',
        'Advanced filtering and segmentation tools',
        'Mobile app for iOS and Android',
        'White-label solution available',
        '24/7 technical support',
        'SOC 2 Type II compliant'
      ],
      price: '$49/month',
      originalPrice: '$99/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      link: 'https://ziontechgroup.com/analytics-pro',
      marketPrice: '$150-300/month',
      savings: '67% off market rate'
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'ZionChat AI',
      description: 'Enterprise-grade AI customer support platform with multilingual capabilities',
      features: [
        'Advanced AI chatbot with 95% accuracy rate',
        'Live chat integration with human handoff',
        'Multi-language support (50+ languages)',
        'Sentiment analysis and emotion detection',
        'Ticket management and escalation system',
        'Knowledge base integration',
        'Voice and video chat support',
        'CRM integration (Salesforce, HubSpot, etc.)',
        'Custom AI model training',
        'Advanced analytics and reporting'
      ],
      price: '$79/month',
      originalPrice: '$149/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Communication',
      link: 'https://ziontechgroup.com/chat-ai',
      marketPrice: '$200-500/month',
      savings: '60% off market rate'
    },
    {
      id: '3',
      icon: Shield,
      title: 'ZionSecure Monitor',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform',
      features: [
        'Real-time threat detection and response',
        'Automated vulnerability scanning',
        'Compliance reporting (GDPR, HIPAA, SOX)',
        'Incident response automation',
        'Security dashboard with 360° view',
        'Penetration testing tools',
        'Dark web monitoring',
        'Employee security training modules',
        'Integration with SIEM systems',
        '24/7 security operations center'
      ],
      price: '$129/month',
      originalPrice: '$199/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security',
      link: 'https://ziontechgroup.com/secure-monitor',
      marketPrice: '$300-800/month',
      savings: '57% off market rate'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'ZionCloud Backup',
      description: 'Enterprise cloud backup and disaster recovery solution with global CDN',
      features: [
        'Automated daily backups with versioning',
        'Cross-platform sync (Windows, Mac, Linux)',
        'Global CDN with 99.99% uptime',
        'End-to-end encryption (AES-256)',
        'Disaster recovery in under 4 hours',
        'Compliance with GDPR and HIPAA',
        'Unlimited storage capacity',
        'Mobile app for iOS and Android',
        'API for custom integrations',
        '24/7 technical support'
      ],
      price: '$39/month',
      originalPrice: '$79/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Storage',
      link: 'https://ziontechgroup.com/cloud-backup',
      marketPrice: '$100-200/month',
      savings: '61% off market rate'
    },
    {
      id: '5',
      icon: Monitor,
      title: 'ZionPerformance Pro',
      description: 'Advanced application performance monitoring and optimization platform',
      features: [
        'Real-time performance monitoring',
        'Error tracking and alerting',
        'Uptime monitoring (99.9% SLA)',
        'Performance insights and recommendations',
        'Custom alert rules and notifications',
        'Integration with 100+ tools',
        'Mobile performance monitoring',
        'Database performance analysis',
        'Load testing and capacity planning',
        'Detailed performance reports'
      ],
      price: '$89/month',
      originalPrice: '$149/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Monitoring',
      link: 'https://ziontechgroup.com/performance-pro',
      marketPrice: '$200-400/month',
      savings: '55% off market rate'
    },
    {
      id: '6',
      icon: Brain,
      title: 'ZionAI Assistant',
      description: 'Intelligent business automation and AI-powered workflow optimization',
      features: [
        'Workflow automation with visual builder',
        'AI-powered insights and recommendations',
        'Smart task scheduling and prioritization',
        'Integration with 500+ business tools',
        'Custom AI model training and deployment',
        'Natural language processing',
        'Document analysis and extraction',
        'Predictive analytics and forecasting',
        'Voice commands and control',
        'Custom API development'
      ],
      price: '$149/month',
      originalPrice: '$249/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI',
      link: 'https://ziontechgroup.com/ai-assistant',
      marketPrice: '$400-1000/month',
      savings: '63% off market rate'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI'];

  const benefits = [
    'Quick setup and deployment (under 5 minutes)',
    'Scalable pricing plans with no hidden fees',
    '24/7 customer support and technical assistance',
    'Regular feature updates and improvements',
    'Enterprise-grade security and compliance',
    'Easy integration with existing systems',
    'White-label solutions available',
    'Free trial and money-back guarantee',
    'Comprehensive documentation and training',
    'Dedicated account management'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: '50K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, value: '99.9%', label: 'Uptime SLA' },
    { icon: <Shield className="w-8 h-8 text-purple-400" />, value: '100%', label: 'Secure & Compliant' },
    { icon: <Zap className="w-8 h-8 text-orange-400" />, value: '2min', label: 'Setup Time' },
    { icon: <Award className="w-8 h-8 text-yellow-400" />, value: '4.9/5', label: 'Customer Rating' },
    { icon: <Rocket className="w-8 h-8 text-pink-400" />, value: '10x', label: 'Faster Deployment' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to solve specific business problems with AI-powered tools and rapid deployment." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, SaaS solutions, productivity tools" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Ready-to-use business tools that solve specific problems. Quick setup, affordable pricing, powerful features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="inline-block mr-2 w-5 h-5" />
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`bg-white rounded-lg shadow-lg p-8 relative ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-4">{product.users}</div>
                    
                    {product.savings && (
                      <div className="text-sm text-green-600 font-semibold mb-4">{product.savings}</div>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    {product.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 6 && (
                      <div className="text-sm text-gray-500">
                        +{product.features.length - 6} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <a
                      href={product.link}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                    <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide enterprise-grade solutions with the simplicity and affordability of micro SaaS
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SaaS solutions to streamline their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;
