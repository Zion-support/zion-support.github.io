'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, 
  CheckCircle, Star, DollarSign, Clock, Globe, Smartphone, 
  Database, Settings, FileText, Mail, Target, TrendingUp,
  Calendar, MessageCircle, Heart, Lock, Monitor, Package,
  Cpu, Globe2, Smartphone2, CreditCard, PieChart, Activity,
  Briefcase, Building2, ShoppingCart, Headphones, Camera,
  Music, Video, Image, Download, Upload, Share2, Plus,
  Minus, X, Search, Filter, SortAsc, SortDesc, RefreshCw,
  Eye, Mic, MicOff, Play, Pause, Square, Volume2, VolumeX,
  Wifi, WifiOff, Battery, BatteryCharging, Thermometer,
  Droplets, Wind, Sun, Moon, CloudRain, CloudSnow,
  AlertTriangle, AlertCircle, CheckCircle2, XCircle,
  Info, HelpCircle, ExternalLink, Download as DownloadIcon,
  Upload as UploadIcon, Trash2, Edit3, Save, Copy,
  Scissors, RotateCcw, RotateCw, Maximize, Minimize,
  ZoomIn, ZoomOut, Move, RotateCcw as RotateLeft,
  RotateCw as RotateRight, FlipHorizontal, FlipVertical
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      id: 'ai-analytics',
      name: 'AI Analytics Platform',
      description: 'Advanced AI-powered analytics platform with predictive modeling, real-time insights, and automated reporting.',
      icon: BarChart,
      category: 'Analytics & Intelligence',
      price: '$299/month',
      features: [
        'Predictive analytics and forecasting',
        'Real-time data processing',
        'Automated report generation',
        'Custom dashboard creation',
        'Machine learning model deployment',
        'Data visualization tools',
        'API integration capabilities',
        'Advanced statistical analysis'
      ],
      benefits: [
        'Improve decision-making by 60%',
        'Reduce analysis time by 80%',
        'Increase forecast accuracy by 45%',
        'Automate 90% of reporting tasks'
      ],
      marketPrice: '$499-1,999/month',
      targetAudience: 'Data scientists, analysts, executives',
      href: '/ai-analytics'
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation Suite',
      description: 'Comprehensive AI automation platform for streamlining business processes and workflows.',
      icon: Zap,
      category: 'Automation & Workflow',
      price: '$199/month',
      features: [
        'Workflow automation design',
        'RPA (Robotic Process Automation)',
        'Document processing automation',
        'Email and communication automation',
        'Data entry automation',
        'Approval workflow management',
        'Integration with 500+ applications',
        'Custom automation scripting'
      ],
      benefits: [
        'Reduce manual work by 70%',
        'Improve process efficiency by 85%',
        'Eliminate human errors by 95%',
        'Save 20+ hours per week'
      ],
      marketPrice: '$399-1,299/month',
      targetAudience: 'Operations teams, process managers',
      href: '/ai-automation'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder Pro',
      description: 'Advanced chatbot creation platform with natural language processing and multi-channel deployment.',
      icon: MessageCircle,
      category: 'Customer Experience',
      price: '$149/month',
      features: [
        'Natural language understanding',
        'Multi-channel deployment (web, mobile, social)',
        'Conversation flow designer',
        'Sentiment analysis',
        'Human handoff capabilities',
        'Knowledge base integration',
        'Analytics and performance tracking',
        'Custom voice and personality'
      ],
      benefits: [
        'Handle 80% of customer inquiries automatically',
        'Reduce response time by 90%',
        'Improve customer satisfaction by 40%',
        'Available 24/7 support'
      ],
      marketPrice: '$299-899/month',
      targetAudience: 'Customer service, e-commerce, SaaS',
      href: '/ai-chatbot-builder'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation Studio',
      description: 'Complete AI-powered content creation platform for text, images, videos, and multimedia content.',
      icon: FileText,
      category: 'Content Creation',
      price: '$179/month',
      features: [
        'AI text generation (blogs, articles, copy)',
        'Image generation and editing',
        'Video creation and editing',
        'Voice synthesis and audio generation',
        'Multi-language content creation',
        'SEO optimization',
        'Brand voice customization',
        'Content planning and scheduling'
      ],
      benefits: [
        'Increase content output by 500%',
        'Reduce content creation costs by 60%',
        'Improve content quality and consistency',
        'Save 15+ hours per week'
      ],
      marketPrice: '$299-1,199/month',
      targetAudience: 'Content creators, marketers, agencies',
      href: '/ai-content-generation'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Suite',
      description: 'Comprehensive AI-powered customer support solution with intelligent routing and automated responses.',
      icon: Headphones,
      category: 'Customer Experience',
      price: '$229/month',
      features: [
        'Intelligent ticket routing',
        'Automated response generation',
        'Sentiment analysis and monitoring',
        'Multi-channel support integration',
        'Knowledge base management',
        'Escalation management',
        'Performance analytics',
        'Customer satisfaction tracking'
      ],
      benefits: [
        'Reduce support costs by 50%',
        'Improve response time by 75%',
        'Increase customer satisfaction by 35%',
        'Handle 3x more inquiries'
      ],
      marketPrice: '$399-1,499/month',
      targetAudience: 'Customer service teams, e-commerce',
      href: '/ai-customer-support'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity platform with threat detection, prevention, and response capabilities.',
      icon: Shield,
      category: 'Security & Compliance',
      price: '$399/month',
      features: [
        'AI threat detection and analysis',
        'Behavioral anomaly detection',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Security analytics dashboard',
        'Real-time threat intelligence',
        'Custom security policies'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 80%',
        'Improve security posture by 60%',
        'Automate 70% of security tasks'
      ],
      marketPrice: '$699-2,999/month',
      targetAudience: 'Security teams, IT departments',
      href: '/ai-cybersecurity'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics Platform',
      description: 'Intelligent data analytics platform with machine learning insights and automated data processing.',
      icon: Database,
      category: 'Analytics & Intelligence',
      price: '$249/month',
      features: [
        'Machine learning model training',
        'Automated data preprocessing',
        'Pattern recognition and insights',
        'Predictive modeling',
        'Data visualization tools',
        'Real-time analytics',
        'Custom algorithm development',
        'Integration with data sources'
      ],
      benefits: [
        'Extract insights 5x faster',
        'Improve data accuracy by 90%',
        'Reduce analysis time by 75%',
        'Enable data-driven decisions'
      ],
      marketPrice: '$499-1,999/month',
      targetAudience: 'Data scientists, analysts, business intelligence',
      href: '/ai-data-analytics'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Comprehensive AI healthcare platform with diagnostic assistance, patient monitoring, and treatment optimization.',
      icon: Heart,
      category: 'Healthcare & Life Sciences',
      price: '$599/month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance tools',
        'Patient monitoring systems',
        'Treatment recommendation engine',
        'Drug interaction checking',
        'Clinical decision support',
        'Electronic health record integration',
        'Compliance with healthcare regulations'
      ],
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Reduce medical errors by 50%',
        'Enhance patient outcomes',
        'Streamline clinical workflows'
      ],
      marketPrice: '$999-4,999/month',
      targetAudience: 'Healthcare providers, medical institutions',
      href: '/ai-healthcare'
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech Platform',
      description: 'Advanced AI financial technology platform with fraud detection, risk assessment, and automated trading.',
      icon: CreditCard,
      category: 'Financial Services',
      price: '$349/month',
      features: [
        'Fraud detection and prevention',
        'Credit risk assessment',
        'Algorithmic trading systems',
        'Regulatory compliance monitoring',
        'Anti-money laundering (AML)',
        'Know Your Customer (KYC) automation',
        'Financial forecasting',
        'Real-time transaction monitoring'
      ],
      benefits: [
        'Reduce fraud losses by 80%',
        'Improve risk assessment accuracy by 45%',
        'Automate compliance processes',
        'Enhance trading performance'
      ],
      marketPrice: '$599-2,499/month',
      targetAudience: 'Banks, fintech companies, financial institutions',
      href: '/ai-fintech'
    },
    {
      id: 'ai-ecommerce',
      name: 'AI E-commerce Optimization',
      description: 'AI-powered e-commerce platform with personalized recommendations, inventory optimization, and customer insights.',
      icon: ShoppingCart,
      category: 'E-commerce & Retail',
      price: '$199/month',
      features: [
        'Personalized product recommendations',
        'Dynamic pricing optimization',
        'Inventory demand forecasting',
        'Customer behavior analysis',
        'Search optimization',
        'Visual search capabilities',
        'Chatbot integration',
        'Conversion rate optimization'
      ],
      benefits: [
        'Increase sales by 25%',
        'Improve conversion rates by 40%',
        'Reduce inventory costs by 30%',
        'Enhance customer experience'
      ],
      marketPrice: '$399-1,499/month',
      targetAudience: 'E-commerce businesses, online retailers',
      href: '/ai-ecommerce'
    },
    {
      id: 'ai-hr',
      name: 'AI HR Management Suite',
      description: 'Comprehensive AI HR platform with recruitment automation, employee analytics, and performance management.',
      icon: Users,
      category: 'Human Resources',
      price: '$179/month',
      features: [
        'AI-powered resume screening',
        'Interview scheduling automation',
        'Employee performance analytics',
        'Skills gap analysis',
        'Training recommendation engine',
        'Employee engagement monitoring',
        'Predictive attrition modeling',
        'Compliance and reporting'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve employee retention by 30%',
        'Enhance performance management',
        'Streamline HR processes'
      ],
      marketPrice: '$299-1,199/month',
      targetAudience: 'HR departments, talent acquisition teams',
      href: '/ai-hr'
    },
    {
      id: 'ai-marketing',
      name: 'AI Marketing Automation',
      description: 'Advanced AI marketing platform with campaign optimization, customer segmentation, and predictive analytics.',
      icon: Target,
      category: 'Marketing & Advertising',
      price: '$229/month',
      features: [
        'Campaign performance optimization',
        'Customer segmentation and targeting',
        'Predictive customer behavior modeling',
        'Content personalization',
        'Email marketing automation',
        'Social media optimization',
        'ROI tracking and analytics',
        'A/B testing automation'
      ],
      benefits: [
        'Increase marketing ROI by 40%',
        'Improve campaign performance by 60%',
        'Reduce customer acquisition costs by 35%',
        'Enhance personalization'
      ],
      marketPrice: '$399-1,499/month',
      targetAudience: 'Marketing teams, agencies, growth teams',
      href: '/ai-marketing'
    }
  ];

  const categories = [
    'All',
    'Analytics & Intelligence',
    'Automation & Workflow',
    'Customer Experience',
    'Content Creation',
    'Security & Compliance',
    'Healthcare & Life Sciences',
    'Financial Services',
    'E-commerce & Retail',
    'Human Resources',
    'Marketing & Advertising'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Solutions
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Advanced AI Services
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">
              for Modern Businesses
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI solutions. From analytics and automation to customer experience 
            and content creation, we deliver enterprise-grade AI services that drive innovation and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 group"
            >
              <span>Explore AI Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory === 'All' ? 'All AI Services' : `${selectedCategory} Services`}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 group border border-slate-700 hover:border-cyan-500/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm font-medium rounded-full mb-4">
                  {service.category}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>Market: {service.marketPrice}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{service.targetAudience}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    to={service.href}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="/contact"
                    className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-lg font-semibold transition-all duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Transform your business with our cutting-edge AI solutions. Get started today and experience the future of intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Start Your AI Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;