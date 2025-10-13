import React from 'react';
  // const categories = [
  //   { name: 'All', count: aiServices.length },
  //   { name: 'Consulting', count: aiServices.filter(s => s.category === 'Consulting').length },
  //   { name: 'Machine Learning', count: aiServices.filter(s => s.category === 'Machine Learning').length },
  //   { name: 'NLP', count: aiServices.filter(s => s.category === 'NLP').length },
  //   { name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
  //   { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
  //   { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
  //   { name: 'Conversational AI', count: aiServices.filter(s => s.category === 'Conversational AI').length },
  //   { name: 'Data Engineering', count: aiServices.filter(s => s.category === 'Data Engineering').length },
  //   { name: 'Security', count: aiServices.filter(s => s.category === 'Security').length },
  //   { name: 'Recommendation Systems', count: aiServices.filter(s => s.category === 'Recommendation Systems').length },
  //   { name: 'Speech AI', count: aiServices.filter(s => s.category === 'Speech AI').length },
  //   { name: 'Edge AI', count: aiServices.filter(s => s.category === 'Edge AI').length }
  // ];
  const testimonials = [
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {Brain,}
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Cpu,
  Link,
  Server;} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface AIService {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  benefits: string[];
  category: string;
  pricing: string;
  duration: string;
  popular?: boolean;
}

  const services = [
    {
      name: "Dr. Sarah Johnson",
      company: "MedTech Solutions",
      role: "CTO",
      content: "Zion's AI healthcare solutions have revolutionized our diagnostic capabilities. We've seen a 40% improvement in accuracy.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The AI automation tools have transformed our operations. We've reduced manual work by 80% and increased productivity significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Content Marketing Agency",
      role: "Director",
      content: "AI content generation has been a game-changer. We can now produce 10x more content with the same team.",
      rating: 5
    }
  ];
import React from 'react'
import { Helmet } from 'react-helmet-async'
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent workflow automation.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/ai-workflow-automation",
      features: ["Process Optimization", "Task Automation", "Smart Routing"]
    }
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Zap, Shield, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      link: '/ai-analytics'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our AI-powered content generation tools.',
      icon: <Brain className="w-8 h-8" />,
      features: ['Blog Posts', 'Social Media Content', 'Product Descriptions', 'Email Campaigns'],
      link: '/ai-content-generation'
    },
    {
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent chatbots and automated support systems.',
      icon: <Shield className="w-8 h-8" />,
      features: ['24/7 Support', 'Multi-language', 'Sentiment Analysis', 'Escalation Management'],
      link: '/ai-customer-support'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-driven threat detection and automated security responses.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring'],
      link: '/ai-cybersecurity'
    },
    {
      title: 'AI Data Analytics',
      description: 'Unlock the power of your data with advanced AI-driven analytics and machine learning.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Machine Learning', 'Pattern Recognition', 'Anomaly Detection', 'Trend Analysis'],
      link: '/ai-data-analytics'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Streamline your business processes with intelligent automation and workflow optimization.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Process Automation', 'Task Optimization', 'Resource Allocation', 'Performance Monitoring'],
      link: '/ai-workflow-automation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced AI Solutions for Business"
        description="Transform your business with our comprehensive AI services including analytics, automation, content generation, customer service, marketing, and healthcare solutions."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI content generation, AI customer service, AI marketing, AI healthcare"
        canonical="https://ziontechgroup.com/ai-services"
      />
      <FuturisticBackground />
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI services today and transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
export default AIServicesPage;
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="AI Services services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced AI Services solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AiServicesPage
        'Improve user retention by 150%',
        'Reduce development time by 40%',
        'Enhance user experience'
      ],
      icon: Smartphone,
      color: 'violet',
      popular: false,
      rating: 4.5,
      clients: 180,
      launchDate: '2023-10-01',
      tags: ['Mobile Development', 'AI Features', 'Personalization', 'Cross-platform'],
      caseStudy: {
        title: 'E-commerce Mobile App',
        result: 'Increased user engagement by 250% and boosted sales by 180%',
        description: 'Integrated AI-powered product recommendations and personalized shopping experience'
      }
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'enterprise', name: 'Enterprise Solutions', count: aiServices.filter(s => s.category === 'enterprise').length },
    { id: 'marketing', name: 'Marketing', count: aiServices.filter(s => s.category === 'marketing').length },
    { id: 'customer-service', name: 'Customer Service', count: aiServices.filter(s => s.category === 'customer-service').length },
    { id: 'analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'automation', name: 'Automation', count: aiServices.filter(s => s.category === 'automation').length },
    { id: 'content', name: 'Content', count: aiServices.filter(s => s.category === 'content').length },
    { id: 'security', name: 'Security', count: aiServices.filter(s => s.category === 'security').length },
    { id: 'healthcare', name: 'Healthcare', count: aiServices.filter(s => s.category === 'healthcare').length },
    { id: 'fintech', name: 'Fintech', count: aiServices.filter(s => s.category === 'fintech').length },
    { id: 'mobile', name: 'Mobile', count: aiServices.filter(s => s.category === 'mobile').length }
  ];

  const filteredServices = useMemo(() => {
    let filtered = aiServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'clients':
        filtered.sort((a, b) => b.clients - a.clients);
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => {
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return b.rating - a.rating;
        });
        break;
    }

    return filtered;
  }, [aiServices, searchTerm, selectedCategory, sortBy]);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      purple: 'from-purple-500 to-purple-600',
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      cyan: 'from-cyan-500 to-cyan-600',
      pink: 'from-pink-500 to-pink-600',
      red: 'from-red-500 to-red-600',
      emerald: 'from-emerald-500 to-emerald-600',
      indigo: 'from-indigo-500 to-indigo-600',
      violet: 'from-violet-500 to-violet-600'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };
      pricing: 'Starting at $7,999/month',
      duration: '8-12 weeks'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Create high-quality, engaging content at scale using advanced language models.',
      icon: FileText,
      features: ['Blog Posts', 'Social Media Content', 'Product Descriptions', 'Email Campaigns'],
      benefits: ['Scale content production', 'Maintain brand voice', 'Save time and resources'],
      category: 'Content',
      pricing: 'Starting at $1,999/month',
      duration: '2-4 weeks'
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Automate complex business processes with intelligent workflow management.',
      icon: Settings,
      features: ['Workflow Automation', 'Document Processing', 'Data Entry', 'Task Scheduling'],
      benefits: ['Increase efficiency', 'Reduce errors', 'Free up human resources'],
      category: 'Automation',
      pricing: 'Starting at $3,999/month',
      duration: '6-10 weeks'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity',
      description: 'Protect your systems with intelligent threat detection and response capabilities.',
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Monitoring'],
      benefits: ['Prevent security breaches', 'Reduce false positives', '24/7 monitoring'],
      category: 'Security',
      pricing: 'Starting at $5,999/month',
      duration: '8-12 weeks'
    }
  ];

  const categories = ['all', 'Customer Service', 'Analytics', 'Computer Vision', 'Content', 'Automation', 'Security'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { number: '500+', label: 'AI Projects Completed' },
    { number: '95%', label: 'Client Satisfaction Rate' },
    { number: '60%', label: 'Average Cost Reduction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. From enterprise solutions to specialized AI applications, we deliver cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="ai services, artificial intelligence, machine learning, ai consulting, ai development, ai solutions" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services. Achieve 300% ROI with our cutting-edge artificial intelligence solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with our comprehensive AI services. From enterprise solutions to 
                specialized AI applications, we deliver cutting-edge artificial intelligence that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300">AI Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">1,500+</div>
                <div className="text-gray-300">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search AI services..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="lg:w-64">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort */}
                  <div className="lg:w-48">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="popularity">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="clients">Most Clients</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${getColorClasses(service.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center space-x-3">
                      {service.popular && (
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                          Popular
                        </span>
                      )}
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 6).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Proven Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Study */}
                  {service.caseStudy && (
                    <div className="mb-6 p-4 bg-slate-700/50 rounded-lg border border-cyan-400/20">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Case Study:</h4>
                      <div className="text-sm text-gray-300">
                        <div className="font-medium text-white mb-1">{service.caseStudy.title}</div>
                        <div className="text-cyan-400 font-medium mb-1">{service.caseStudy.result}</div>
                        <div className="text-xs text-gray-400">{service.caseStudy.description}</div>
                      </div>
                    </div>
                  )}

                  {/* Pricing and Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-white">
                        ${service.price.toLocaleString()}
                        <span className="text-sm text-gray-400">/{service.priceType}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.clients} successful clients
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-300">Launched</div>
                      <div className="text-sm text-gray-400">
                        {new Date(service.launchDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={`/contact?service=${service.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                    >
                      Get Started
                    </a>
                    <a
                      href={`/demo?service=${service.id}`}
                      className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 transition-all"
                    >
                      Demo
                    </a>
                    <a
                      href={`/case-studies?service=${service.id}`}
                      className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg font-medium hover:bg-purple-400/10 transition-all"
                    >
                      Case Study
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSortBy('popularity');
                  }}
                  className="cyber-button"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-400/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Our AI experts are ready to help you implement the perfect AI solution for your business. 
                  Get a free consultation and discover how AI can revolutionize your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                View Demos
                <Brain className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};


      </div>
    </>
  );
};

export default AIServicesPage;
