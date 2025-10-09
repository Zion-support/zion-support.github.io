'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, 
  Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Rocket, Code, 
  Database, Smartphone, Lock, Settings, Calendar, FileText, Image, Video, 
  Music, Palette, ShoppingCart, CreditCard, PieChart, LineChart, Activity, 
  Zap, Globe, Shield, Users, Clock, Star, TrendingUp, Search, Filter,
  ChevronDown, Play, Download, ExternalLink, Building, Star as StarIcon, 
  TrendingUp as Growth, BarChart as Analytics, MessageSquare as Chat,
  Eye as View, Sparkles as Magic, ArrowRight as Arrow, Phone as Call,
  Mail as Email, MapPin as Location, CheckCircle as Check, DollarSign as Money,
  Award as Trophy, Rocket as Launch, Code as Dev, Database as Data,
  Smartphone as Mobile, Lock as Secure, Settings as Config, Calendar as Schedule,
  FileText as Document, Image as Photo, Video as Media, Music as Audio,
  Palette as Design, ShoppingCart as Cart, CreditCard as Payment,
  PieChart as Pie, LineChart as Line, Activity as ActivityIcon
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const aiServices = useMemo(() => [
    {
      id: 'ai-enterprise-solutions',
      name: 'AI Enterprise Solutions',
      description: 'Comprehensive AI transformation for large enterprises with custom AI models, integration, and ongoing support.',
      category: 'enterprise',
      price: 50000,
      priceType: 'project',
      features: [
        'Custom AI model development',
        'Enterprise integration',
        'Data pipeline optimization',
        'Real-time analytics',
        'Scalable infrastructure',
        '24/7 monitoring',
        'Dedicated support team',
        'Custom training programs'
      ],
      benefits: [
        '300% average ROI',
        '70% cost reduction',
        '90% efficiency improvement',
        'Complete digital transformation'
      ],
      icon: Building,
      color: 'purple',
      popular: true,
      rating: 4.9,
      clients: 150,
      launchDate: '2023-01-01',
      tags: ['Enterprise', 'AI Transformation', 'Custom Solutions', 'Integration'],
      caseStudy: {
        title: 'Fortune 500 Manufacturing Company',
        result: 'Reduced operational costs by $2.3M annually',
        description: 'Implemented AI-powered predictive maintenance and supply chain optimization'
      }
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'End-to-end AI-powered marketing automation with personalized campaigns, lead scoring, and conversion optimization.',
      category: 'marketing',
      price: 2500,
      priceType: 'month',
      features: [
        'AI content generation',
        'Predictive lead scoring',
        'Automated campaign optimization',
        'Customer journey mapping',
        'Multi-channel orchestration',
        'Real-time personalization',
        'Advanced analytics',
        'A/B testing automation'
      ],
      benefits: [
        'Increase conversion rates by 250%',
        'Reduce marketing costs by 40%',
        'Improve lead quality by 180%',
        'Save 20 hours per week'
      ],
      icon: Target,
      color: 'blue',
      popular: true,
      rating: 4.8,
      clients: 320,
      launchDate: '2023-03-15',
      tags: ['Marketing', 'Automation', 'Personalization', 'Analytics'],
      caseStudy: {
        title: 'E-commerce Retailer',
        result: 'Increased online sales by 340% in 6 months',
        description: 'Implemented AI-powered product recommendations and dynamic pricing'
      }
    },
    {
      id: 'ai-customer-service',
      name: 'AI Customer Service Suite',
      description: 'Complete AI-powered customer service solution with chatbots, sentiment analysis, and intelligent routing.',
      category: 'customer-service',
      price: 1500,
      priceType: 'month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'Intelligent ticket routing',
        'Knowledge base integration',
        'Human handoff capability',
        'Performance analytics',
        'Custom training'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 85%',
        'Increase customer satisfaction by 45%',
        'Handle 90% of queries automatically'
      ],
      icon: MessageSquare,
      color: 'green',
      popular: true,
      rating: 4.7,
      clients: 280,
      launchDate: '2023-02-20',
      tags: ['Customer Service', 'Chatbot', 'NLP', 'Automation'],
      caseStudy: {
        title: 'SaaS Company',
        result: 'Reduced support tickets by 70% and improved CSAT by 50%',
        description: 'Deployed AI chatbot with intelligent escalation and knowledge base integration'
      }
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics Platform',
      description: 'Advanced AI-powered data analytics with predictive modeling, real-time insights, and automated reporting.',
      category: 'analytics',
      price: 3000,
      priceType: 'month',
      features: [
        'Predictive analytics',
        'Real-time data processing',
        'Automated insights generation',
        'Custom dashboard creation',
        'Data visualization',
        'Machine learning models',
        'API integration',
        'Custom reporting'
      ],
      benefits: [
        'Make data-driven decisions 3x faster',
        'Identify trends and patterns automatically',
        'Reduce analysis time by 75%',
        'Increase revenue by 30%'
      ],
      icon: BarChart,
      color: 'orange',
      popular: true,
      rating: 4.8,
      clients: 200,
      launchDate: '2023-04-01',
      tags: ['Analytics', 'Predictive Modeling', 'Data Science', 'Insights'],
      caseStudy: {
        title: 'Financial Services Firm',
        result: 'Improved investment decisions and reduced risk by 40%',
        description: 'Implemented AI-powered risk assessment and market prediction models'
      }
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent workflow automation with AI decision-making, process optimization, and seamless integration.',
      category: 'automation',
      price: 2000,
      priceType: 'month',
      features: [
        'Process mining and analysis',
        'Intelligent automation',
        'Decision tree optimization',
        'Integration with 200+ tools',
        'Custom workflow builder',
        'Performance monitoring',
        'Exception handling',
        'Scalable architecture'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 90%',
        'Eliminate human errors',
        'Save 30 hours per week'
      ],
      icon: Settings,
      color: 'cyan',
      popular: false,
      rating: 4.6,
      clients: 150,
      launchDate: '2023-05-15',
      tags: ['Automation', 'Workflow', 'Process Optimization', 'Integration'],
      caseStudy: {
        title: 'Healthcare Provider',
        result: 'Reduced patient processing time by 85%',
        description: 'Automated patient intake, scheduling, and insurance verification processes'
      }
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation Studio',
      description: 'Complete AI content creation platform with brand voice training, multi-format output, and quality assurance.',
      category: 'content',
      price: 800,
      priceType: 'month',
      features: [
        'Multi-format content creation',
        'Brand voice training',
        'SEO optimization',
        'Plagiarism detection',
        'Content calendar management',
        'Team collaboration tools',
        'Version control',
        'Performance tracking'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain brand consistency',
        'Improve SEO rankings by 200%',
        'Reduce content costs by 70%'
      ],
      icon: FileText,
      color: 'pink',
      popular: false,
      rating: 4.5,
      clients: 400,
      launchDate: '2023-06-01',
      tags: ['Content Creation', 'AI Writing', 'Brand Voice', 'SEO'],
      caseStudy: {
        title: 'Digital Marketing Agency',
        result: 'Increased content output by 500% while maintaining quality',
        description: 'Implemented AI content generation for multiple client campaigns'
      }
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity with threat detection, incident response, and security analytics.',
      category: 'security',
      price: 4000,
      priceType: 'month',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Automated incident response',
        'Vulnerability assessment',
        'Security analytics',
        'Compliance monitoring',
        'Threat intelligence',
        '24/7 monitoring'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 80%',
        'Improve security posture',
        'Ensure compliance'
      ],
      icon: Shield,
      color: 'red',
      popular: false,
      rating: 4.7,
      clients: 120,
      launchDate: '2023-07-10',
      tags: ['Cybersecurity', 'Threat Detection', 'Security Analytics', 'Compliance'],
      caseStudy: {
        title: 'Financial Institution',
        result: 'Prevented 99.9% of cyber attacks and reduced response time by 95%',
        description: 'Deployed AI-powered threat detection and automated incident response'
      }
    },
    {
      id: 'ai-healthcare-solutions',
      name: 'AI Healthcare Solutions',
      description: 'Specialized AI solutions for healthcare including diagnostic assistance, patient monitoring, and treatment optimization.',
      category: 'healthcare',
      price: 6000,
      priceType: 'month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Patient monitoring',
        'Treatment optimization',
        'Drug discovery support',
        'Clinical decision support',
        'HIPAA compliance',
        'Integration with EMR systems'
      ],
      benefits: [
        'Improve diagnostic accuracy by 35%',
        'Reduce diagnosis time by 60%',
        'Enhance patient outcomes',
        'Optimize treatment plans'
      ],
      icon: Activity,
      color: 'emerald',
      popular: false,
      rating: 4.8,
      clients: 80,
      launchDate: '2023-08-01',
      tags: ['Healthcare', 'Medical AI', 'Diagnostics', 'Patient Care'],
      caseStudy: {
        title: 'Regional Hospital Network',
        result: 'Improved diagnostic accuracy by 40% and reduced readmission rates by 25%',
        description: 'Implemented AI-powered diagnostic assistance and patient monitoring systems'
      }
    },
    {
      id: 'ai-fintech-solutions',
      name: 'AI Fintech Solutions',
      description: 'Advanced AI solutions for financial services including fraud detection, risk assessment, and algorithmic trading.',
      category: 'fintech',
      price: 3500,
      priceType: 'month',
      features: [
        'Fraud detection and prevention',
        'Risk assessment models',
        'Algorithmic trading',
        'Credit scoring',
        'Regulatory compliance',
        'Real-time monitoring',
        'Anomaly detection',
        'Financial forecasting'
      ],
      benefits: [
        'Reduce fraud by 95%',
        'Improve risk assessment accuracy',
        'Increase trading efficiency',
        'Ensure regulatory compliance'
      ],
      icon: CreditCard,
      color: 'indigo',
      popular: false,
      rating: 4.6,
      clients: 100,
      launchDate: '2023-09-15',
      tags: ['Fintech', 'Fraud Detection', 'Risk Assessment', 'Trading'],
      caseStudy: {
        title: 'Digital Bank',
        result: 'Reduced fraudulent transactions by 98% and improved approval rates by 30%',
        description: 'Implemented AI-powered fraud detection and credit scoring systems'
      }
    },
    {
      id: 'ai-mobile-app-development',
      name: 'AI Mobile App Development',
      description: 'AI-powered mobile app development with intelligent features, personalization, and advanced analytics.',
      category: 'mobile',
      price: 2500,
      priceType: 'month',
      features: [
        'AI-powered app features',
        'Personalized user experience',
        'Intelligent recommendations',
        'Voice and image recognition',
        'Predictive analytics',
        'Cross-platform development',
        'Real-time synchronization',
        'Advanced security'
      ],
      benefits: [
        'Increase user engagement by 200%',
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
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;