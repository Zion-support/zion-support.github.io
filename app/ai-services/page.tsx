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


const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = useMemo(() => [
    {
      id: 'ai-enterprise-solutions',
      name: 'AI Enterprise Solutions',
      category: 'enterprise',
      description: 'Comprehensive AI transformation for large enterprises with custom ML models, data pipelines, and intelligent automation.',
      features: [
        'Custom Machine Learning Models',
        'Enterprise Data Integration',
        'Intelligent Process Automation',
        'Real-time Analytics Dashboard',
        'Scalable Cloud Infrastructure',
        '24/7 AI Monitoring & Support'
      ],
      pricing: {
        starter: { price: '$50,000', period: 'month', description: 'Basic AI implementation' },
        professional: { price: '$150,000', period: 'month', description: 'Advanced AI solutions' },
        enterprise: { price: '$500,000', period: 'month', description: 'Full AI transformation' }
      },
      benefits: [
        '300% average ROI within 12 months',
        '70% reduction in operational costs',
        '90% improvement in process efficiency',
        'Real-time decision making capabilities'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      link: '/ai-enterprise-solutions'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      category: 'customer-service',
      description: 'Intelligent 24/7 customer support with natural language processing, sentiment analysis, and automated ticket resolution.',
      features: [
        'Natural Language Processing',
        'Sentiment Analysis & Response',
        'Automated Ticket Resolution',
        'Multi-language Support',
        'Integration with CRM Systems',
        'Real-time Performance Analytics'
      ],
      pricing: {
        starter: { price: '$2,500', period: 'month', description: 'Up to 1,000 conversations' },
        professional: { price: '$7,500', period: 'month', description: 'Up to 10,000 conversations' },
        enterprise: { price: '$25,000', period: 'month', description: 'Unlimited conversations' }
      },
      benefits: [
        '95% customer satisfaction rate',
        '80% reduction in response time',
        '60% decrease in support costs',
        '24/7 availability'
      ],
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      link: '/ai-customer-support'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      category: 'analytics',
      description: 'Advanced AI-powered data analytics with predictive modeling, real-time insights, and automated reporting.',
      features: [
        'Predictive Analytics & Forecasting',
        'Real-time Data Processing',
        'Automated Report Generation',
        'Interactive Dashboards',
        'Data Visualization Tools',
        'Custom ML Model Training'
      ],
      pricing: {
        starter: { price: '$3,000', period: 'month', description: 'Up to 1M data points' },
        professional: { price: '$8,000', period: 'month', description: 'Up to 10M data points' },
        enterprise: { price: '$20,000', period: 'month', description: 'Unlimited data processing' }
      },
      benefits: [
        '85% improvement in decision accuracy',
        '50% faster data processing',
        'Real-time business insights',
        'Automated anomaly detection'
      ],
      icon: BarChart,
      color: 'from-green-500 to-emerald-500',
      popular: true,
      link: '/ai-data-analytics'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      category: 'content',
      description: 'Intelligent content creation with natural language generation, SEO optimization, and multi-format output.',
      features: [
        'Natural Language Generation',
        'SEO-Optimized Content',
        'Multi-format Output (Blog, Social, Email)',
        'Brand Voice Consistency',
        'Content Performance Analytics',
        'Automated Content Scheduling'
      ],
      pricing: {
        starter: { price: '$1,500', period: 'month', description: 'Up to 100 articles' },
        professional: { price: '$4,000', period: 'month', description: 'Up to 500 articles' },
        enterprise: { price: '$10,000', period: 'month', description: 'Unlimited content' }
      },
      benefits: [
        '90% reduction in content creation time',
        '300% increase in content output',
        'Consistent brand voice across all content',
        'SEO-optimized for better rankings'
      ],
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      popular: false,
      link: '/ai-content-generation'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      category: 'security',
      description: 'Advanced AI-powered cybersecurity with threat detection, automated response, and behavioral analysis.',
      features: [
        'Real-time Threat Detection',
        'Behavioral Analysis & Anomaly Detection',
        'Automated Incident Response',
        'Predictive Security Analytics',
        'Zero-trust Architecture',
        'Compliance Monitoring'
      ],
      pricing: {
        starter: { price: '$5,000', period: 'month', description: 'Up to 100 endpoints' },
        professional: { price: '$15,000', period: 'month', description: 'Up to 1,000 endpoints' },
        enterprise: { price: '$50,000', period: 'month', description: 'Unlimited endpoints' }
      },
      benefits: [
        '99.9% threat detection accuracy',
        '90% reduction in false positives',
        'Real-time security monitoring',
        'Automated incident response'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      popular: true,
      link: '/ai-cybersecurity'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'automation',
      description: 'Intelligent workflow automation with process optimization, smart routing, and adaptive learning.',
      features: [
        'Process Discovery & Mapping',
        'Intelligent Task Routing',
        'Adaptive Learning Algorithms',
        'Integration with 500+ Tools',
        'Real-time Process Monitoring',
        'Performance Optimization'
      ],
      pricing: {
        starter: { price: '$2,000', period: 'month', description: 'Up to 10 workflows' },
        professional: { price: '$6,000', period: 'month', description: 'Up to 50 workflows' },
        enterprise: { price: '$18,000', period: 'month', description: 'Unlimited workflows' }
      },
      benefits: [
        '75% reduction in manual tasks',
        '60% improvement in process efficiency',
        'Real-time process optimization',
        'Seamless tool integration'
      ],
      icon: Workflow,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      link: '/ai-workflow-automation'
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      category: 'sales',
      description: 'Intelligent sales automation with lead scoring, predictive analytics, and automated follow-up.',
      features: [
        'Intelligent Lead Scoring',
        'Predictive Sales Analytics',
        'Automated Follow-up Sequences',
        'CRM Integration & Sync',
        'Sales Performance Analytics',
        'Custom Sales Workflows'
      ],
      pricing: {
        starter: { price: '$3,500', period: 'month', description: 'Up to 1,000 leads' },
        professional: { price: '$9,000', period: 'month', description: 'Up to 10,000 leads' },
        enterprise: { price: '$25,000', period: 'month', description: 'Unlimited leads' }
      },
      benefits: [
        '40% increase in conversion rates',
        '50% reduction in sales cycle time',
        'Automated lead qualification',
        'Predictive sales forecasting'
      ],
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      popular: true,
      link: '/ai-sales-automation'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      category: 'healthcare',
      description: 'Advanced AI solutions for healthcare with medical imaging, diagnosis assistance, and patient monitoring.',
      features: [
        'Medical Image Analysis',
        'Diagnosis Assistance & Support',
        'Patient Risk Assessment',
        'Drug Interaction Analysis',
        'Telemedicine Integration',
        'HIPAA Compliant Infrastructure'
      ],
      pricing: {
        starter: { price: '$10,000', period: 'month', description: 'Basic medical imaging' },
        professional: { price: '$25,000', period: 'month', description: 'Advanced diagnostics' },
        enterprise: { price: '$75,000', period: 'month', description: 'Full healthcare AI suite' }
      },
      benefits: [
        '95% accuracy in medical imaging',
        '60% faster diagnosis time',
        'Reduced medical errors',
        'Improved patient outcomes'
      ],
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      popular: false,
      link: '/ai-healthcare'
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech Solutions',
      category: 'fintech',
      description: 'Intelligent financial technology solutions with fraud detection, risk assessment, and automated trading.',
      features: [
        'Real-time Fraud Detection',
        'Risk Assessment & Scoring',
        'Automated Trading Algorithms',
        'Regulatory Compliance Monitoring',
        'Financial Data Analysis',
        'Blockchain Integration'
      ],
      pricing: {
        starter: { price: '$8,000', period: 'month', description: 'Basic fraud detection' },
        professional: { price: '$20,000', period: 'month', description: 'Advanced risk management' },
        enterprise: { price: '$60,000', period: 'month', description: 'Full fintech AI platform' }
      },
      benefits: [
        '99.5% fraud detection accuracy',
        '80% reduction in false positives',
        'Real-time risk assessment',
        'Automated compliance reporting'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-teal-500',
      popular: true,
      link: '/ai-fintech'
    },
    {
      id: 'ai-mobile-apps',
      name: 'AI Mobile App Development',
      category: 'mobile',
      description: 'Intelligent mobile applications with AI-powered features, personalization, and smart recommendations.',
      features: [
        'AI-Powered Personalization',
        'Smart Recommendation Engine',
        'Natural Language Processing',
        'Computer Vision Integration',
        'Real-time Analytics',
        'Cross-platform Compatibility'
      ],
      pricing: {
        starter: { price: '$15,000', period: 'one-time', description: 'Basic AI mobile app' },
        professional: { price: '$35,000', period: 'one-time', description: 'Advanced AI features' },
        enterprise: { price: '$75,000', period: 'one-time', description: 'Full AI mobile platform' }
      },
      benefits: [
        'Enhanced user engagement',
        'Personalized user experience',
        'Intelligent app behavior',
        'Real-time user insights'
      ],
      icon: Smartphone,
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      link: '/ai-mobile-apps'
    },
    {
      id: 'ai-ecommerce',
      name: 'AI E-commerce Solutions',
      category: 'ecommerce',
      description: 'Intelligent e-commerce platform with personalized shopping, inventory optimization, and smart pricing.',
      features: [
        'Personalized Product Recommendations',
        'Dynamic Pricing Optimization',
        'Inventory Management AI',
        'Customer Behavior Analysis',
        'Automated Customer Service',
        'Sales Forecasting'
      ],
      pricing: {
        starter: { price: '$4,000', period: 'month', description: 'Up to 1,000 products' },
        professional: { price: '$12,000', period: 'month', description: 'Up to 10,000 products' },
        enterprise: { price: '$30,000', period: 'month', description: 'Unlimited products' }
      },
      benefits: [
        '35% increase in conversion rates',
        '25% improvement in average order value',
        'Automated inventory optimization',
        'Personalized shopping experience'
      ],
      icon: ShoppingCart,
      color: 'from-purple-500 to-indigo-500',
      popular: true,
      link: '/ai-ecommerce'
    },
    {
      id: 'ai-voice-processing',
      name: 'AI Voice Processing',
      category: 'voice',
      description: 'Advanced voice AI with speech recognition, natural language understanding, and voice synthesis.',
      features: [
        'Speech-to-Text Recognition',
        'Natural Language Understanding',
        'Voice Synthesis & Cloning',
        'Multi-language Support',
        'Real-time Processing',
        'Voice Analytics'
      ],
      pricing: {
        starter: { price: '$2,000', period: 'month', description: 'Up to 1,000 hours' },
        professional: { price: '$6,000', period: 'month', description: 'Up to 10,000 hours' },
        enterprise: { price: '$18,000', period: 'month', description: 'Unlimited processing' }
      },
      benefits: [
        '98% speech recognition accuracy',
        'Real-time voice processing',
        'Multi-language capabilities',
        'Natural voice synthesis'
      ],
      icon: Mic,
      color: 'from-violet-500 to-purple-500',
      popular: false,
      link: '/ai-voice-processing'
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3 },
    { id: 'enterprise', name: 'Enterprise', icon: Building },
    { id: 'customer-service', name: 'Customer Service', icon: MessageSquare },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'automation', name: 'Automation', icon: Workflow },
    { id: 'sales', name: 'Sales', icon: TrendingUp },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'fintech', name: 'Fintech', icon: DollarSign },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'voice', name: 'Voice', icon: Mic }
  ];

  const filteredServices = useMemo(() => {
    return aiServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [aiServices, selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including enterprise solutions, customer support, data analytics, cybersecurity, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, enterprise AI, customer support AI, data analytics AI, cybersecurity AI" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services. From enterprise solutions to customer support, we deliver cutting-edge AI technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 cyber-grid"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From enterprise automation to intelligent customer support, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    Popular
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([tier, pricing]) => (
                      <div key={tier} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 capitalize">{tier}:</span>
                        <span className="text-white font-semibold">
                          {pricing.price}/{pricing.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    className="flex-1 cyber-button text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    Learn More
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our AI experts are ready to help you implement the perfect solution for your business needs. 
            Get a free consultation and see how AI can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default function AIServicesPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const aiServices = [
    {
      category: 'AI Automation',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      services: [
        {
          name: 'AI Workflow Automation',
          description: 'Automate complex business processes with intelligent workflows',
          features: ['Process Optimization', 'Error Reduction', 'Cost Savings', 'Scalability'],
          pricing: 'Starting at $5,000/month',
          roi: '200-400% ROI'
        },
        {
          name: 'AI Customer Support',
          description: '24/7 intelligent customer support with natural language processing',
          features: ['24/7 Availability', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Management'],
          pricing: 'Starting at $3,000/month',
          roi: '150-300% ROI'
        },
        {
          name: 'AI Sales Automation',
          description: 'Intelligent sales processes and lead qualification',
          features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'CRM Integration'],
          pricing: 'Starting at $4,000/month',
          roi: '250-500% ROI'
        }
      ]
    },
    {
      category: 'AI Analytics & Intelligence',
      icon: BarChart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'AI Data Analytics',
          description: 'Advanced analytics and insights from your data',
          features: ['Predictive Analytics', 'Real-time Insights', 'Data Visualization', 'Custom Dashboards'],
          pricing: 'Starting at $6,000/month',
          roi: '300-600% ROI'
        },
        {
          name: 'AI Business Intelligence',
          description: 'Transform data into actionable business insights',
          features: ['KPI Tracking', 'Trend Analysis', 'Performance Metrics', 'Strategic Planning'],
          pricing: 'Starting at $7,000/month',
          roi: '400-700% ROI'
        },
        {
          name: 'AI Predictive Analytics',
          description: 'Forecast future trends and outcomes',
          features: ['Demand Forecasting', 'Risk Assessment', 'Market Analysis', 'Scenario Planning'],
          pricing: 'Starting at $8,000/month',
          roi: '500-800% ROI'
        }
      ]
    },
    {
      category: 'AI Content & Marketing',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Content Generation',
          description: 'Create high-quality content at scale',
          features: ['Blog Posts', 'Social Media', 'Email Campaigns', 'Product Descriptions'],
          pricing: 'Starting at $2,000/month',
          roi: '100-300% ROI'
        },
        {
          name: 'AI Email Marketing',
          description: 'Intelligent email campaigns and personalization',
          features: ['Personalization', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics'],
          pricing: 'Starting at $3,500/month',
          roi: '200-400% ROI'
        },
        {
          name: 'AI SEO Optimization',
          description: 'Automated SEO analysis and optimization',
          features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis'],
          pricing: 'Starting at $4,500/month',
          roi: '250-500% ROI'
        }
      ]
    },
    {
      category: 'AI Industry Solutions',
      icon: Target,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Healthcare Solutions',
          description: 'AI-powered healthcare and medical solutions',
          features: ['Medical Imaging', 'Diagnosis Support', 'Patient Monitoring', 'Drug Discovery'],
          pricing: 'Starting at $15,000/month',
          roi: '400-800% ROI'
        },
        {
          name: 'AI Fintech Solutions',
          description: 'Financial technology and banking AI solutions',
          features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
          pricing: 'Starting at $12,000/month',
          roi: '300-600% ROI'
        },
        {
          name: 'AI E-commerce Solutions',
          description: 'E-commerce optimization and personalization',
          features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights'],
          pricing: 'Starting at $5,000/month',
          roi: '200-500% ROI'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Our clients see an average ROI of 300% within the first year',
      stat: '300%'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Reduce manual work by up to 90% with intelligent automation',
      stat: '90%'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Lower operational costs by 70% through process optimization',
      stat: '70%'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee',
      stat: '99.9%'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Analysis',
      description: 'We analyze your business processes and identify AI opportunities',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy tailored to your needs',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Development & Integration',
      description: 'Build and integrate AI solutions into your existing systems',
      duration: '4-12 weeks'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '2-4 weeks'
    },
    {
      step: 5,
      title: 'Deployment & Support',
      description: 'Deploy solutions and provide ongoing support and monitoring',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'Manual data processing taking 40 hours per week',
      solution: 'AI-powered data processing automation',
      results: ['95% time reduction', '300% ROI', 'Zero errors'],
      image: '/images/case-studies/techcorp.jpg'
    },
    {
      company: 'HealthPlus Medical',
      industry: 'Healthcare',
      challenge: 'Patient diagnosis accuracy and speed',
      solution: 'AI diagnostic assistance system',
      results: ['40% faster diagnosis', '25% accuracy improvement', '200% ROI'],
      image: '/images/case-studies/healthplus.jpg'
    },
    {
      company: 'FinanceFlow Bank',
      industry: 'Banking',
      challenge: 'Fraud detection and risk assessment',
      solution: 'AI fraud detection and risk analysis',
      results: ['99.5% fraud detection', '60% false positive reduction', '400% ROI'],
      image: '/images/case-studies/financeflow.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From automation to analytics, 
              we deliver intelligent systems that drive real results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">300% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve real business challenges
            </p>
          </div>
          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Expected ROI:</span>
                          <span className="text-sm font-medium text-green-400">{service.roi}</span>
                        </div>
                      </div>
                      <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all">
                        Learn More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {process.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    {study.company.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
