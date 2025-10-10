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
  Users,
  Package,
  Share2,
  Mail,
  Settings,
  Wifi,
  MessageCircle
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
      title: 'AI Sales Predictor',
      description: 'Advanced AI-powered sales forecasting with 95% accuracy for revenue prediction and opportunity identification.',
      category: 'ai',
      features: ['95% Forecasting Accuracy', 'Real-time Pipeline Analysis', 'Automated Lead Scoring', 'Revenue Prediction'],
      price: 'Starting at $99/month'
    },
    {
      icon: Users,
      title: 'AI Customer Insights',
      description: 'Transform customer data into actionable insights with AI-powered behavioral analysis and churn prediction.',
      category: 'ai',
      features: ['Behavioral Analysis', 'Churn Prediction', 'Customer Segmentation', 'Lifetime Value Modeling'],
      price: 'Starting at $149/month'
    },
    {
      icon: Package,
      title: 'AI Inventory Optimizer',
      description: 'Intelligent inventory management with AI-powered demand forecasting and automated optimization.',
      category: 'ai',
      features: ['92% Demand Accuracy', 'Automated Reordering', 'Dead Stock Detection', 'Cost Optimization'],
      price: 'Starting at $199/month'
    },
    {
      icon: Share2,
      title: 'AI Social Media Scheduler',
      description: 'Automated social media management with AI-powered optimal posting times and engagement optimization.',
      category: 'ai',
      features: ['Optimal Posting Times', 'Multi-platform Scheduling', 'Hashtag Optimization', 'Engagement Analytics'],
      price: 'Starting at $29/month'
    },
    {
      icon: Mail,
      title: 'AI Email Marketing',
      description: 'Intelligent email marketing automation with AI-powered content generation and personalization.',
      category: 'ai',
      features: ['Content Generation', 'Personalization Engine', 'A/B Testing', 'Performance Optimization'],
      price: 'Starting at $49/month'
    },
    
    // IT Services
    {
      icon: Settings,
      title: 'AI DevOps Automation',
      description: 'Revolutionary AI-powered DevOps automation for streamlined deployments and intelligent CI/CD pipelines.',
      category: 'it',
      features: ['CI/CD Optimization', 'Automated Deployments', 'Performance Monitoring', 'Cost Optimization'],
      price: 'Starting at $299/month'
    },
    {
      icon: Wifi,
      title: 'AI Network Optimizer',
      description: 'Intelligent network management with AI-powered optimization and predictive maintenance.',
      category: 'it',
      features: ['Performance Analysis', 'Predictive Maintenance', 'Traffic Optimization', 'Security Monitoring'],
      price: 'Starting at $199/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses with AI-powered optimization.',
      category: 'it',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'Auto-scaling', 'Disaster Recovery'],
      price: 'Starting at $2,500/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions with AI-powered threat detection and automated response.',
      category: 'it',
      features: ['AI Threat Detection', 'Automated Response', 'Vulnerability Assessment', 'Compliance Management'],
      price: 'Starting at $1,800/month'
    },
    
    // Micro SaaS
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time dashboards.',
      category: 'saas',
      features: ['Real-time Dashboards', 'AI Insights', 'Custom Reports', 'Multi-tenant Architecture'],
      price: 'Starting at $89/month'
    },
    {
      icon: MessageCircle,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      category: 'saas',
      features: ['GPT-4 Powered', 'Multi-channel Support', 'Sentiment Analysis', 'Live Agent Handoff'],
      price: 'Starting at $149/month'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and AI integration.',
      category: 'saas',
      features: ['React/Next.js', 'AI Integration', 'SEO Optimization', 'Performance Tuning'],
      price: 'Starting at $5,000/project'
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
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI, IT, and Micro SaaS services designed to transform your business." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions to transform your business with cutting-edge technology
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
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-cyan-400 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact our experts for a free consultation and discover how our services can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
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
