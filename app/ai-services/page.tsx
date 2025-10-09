'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { 
  CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, 
  Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, 
  DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, 
  FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, 
  CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, 
  GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, 
  Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, 
  PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, 
  ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,
  ExternalLink, Play, Download, Upload, RefreshCw, Settings2, Monitor, Laptop,
  Tablet, Headphones, Mic, MicOff, Volume2, VolumeX, Wifi, WifiOff, Battery,
  BatteryCharging, Power, PowerOff, Wrench2, Tool, Hammer2, Screwdriver,
  Cog, Sliders, ToggleLeft, ToggleRight, Switch, RotateCcw, RotateCw,
  Maximize, Minimize, Move, Copy, Trash2, Edit, Save, Plus, Minus, X,
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal,
  MoreVertical, Filter, SortAsc, SortDesc, Search as SearchIcon,
  Bell, BellOff, Eye as EyeIcon, EyeOff, Lock as LockIcon, Unlock,
  Key, Fingerprint, Shield as ShieldIcon, AlertTriangle, Info,
  HelpCircle, QuestionMarkCircle, CheckCircle2, XCircle, AlertCircle,
  PlusCircle, MinusCircle, XCircle as XCircleIcon, CheckCircle as CheckCircleIcon,
  Brain as BrainIcon, Cpu as CpuIcon, Target as TargetIcon, BarChart as BarChartIcon,
  MessageSquare as MessageSquareIcon, Eye as EyeIcon2, Sparkles as SparklesIcon,
  ArrowRight as ArrowRightIcon, Phone as PhoneIcon2, Mail as MailIcon2, MapPin as MapPinIcon2
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      id: 'ai-consulting',
      name: 'AI Strategy Consulting',
      category: 'consulting',
      icon: Brain,
      price: '$2,500/month',
      originalPrice: '$4,000/month',
      description: 'Comprehensive AI strategy development and implementation planning for enterprise organizations',
      features: [
        'AI Roadmap Development',
        'Technology Assessment',
        'ROI Analysis & Projections',
        'Implementation Planning',
        'Change Management',
        'Risk Assessment',
        'Compliance Review',
        'Executive Training'
      ],
      benefits: [
        'Clear AI implementation path',
        'Reduced implementation risks',
        'Faster time to value',
        'Executive buy-in and support'
      ],
      rating: 4.9,
      reviews: 234,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-consulting',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-consulting',
      marketPrice: '$3,500-5,000/month',
      savings: 'Save $1,500/month'
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning Solutions',
      category: 'ml',
      icon: Cpu,
      price: '$1,500/month',
      originalPrice: '$2,500/month',
      description: 'Custom ML models for predictive analytics, decision-making, and business intelligence',
      features: [
        'Predictive Analytics Models',
        'Custom Algorithm Development',
        'Data Pipeline Setup',
        'Model Training & Optimization',
        'A/B Testing Framework',
        'Performance Monitoring',
        'Model Retraining',
        'API Integration'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved accuracy by 40%',
        'Automated predictions',
        'Scalable ML infrastructure'
      ],
      rating: 4.8,
      reviews: 456,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/machine-learning',
      signupUrl: 'https://app.ziontechgroup.com/signup/machine-learning',
      marketPrice: '$2,000-3,500/month',
      savings: 'Save $1,000/month'
    },
    {
      id: 'natural-language-processing',
      name: 'Natural Language Processing',
      category: 'nlp',
      icon: MessageSquare,
      price: '$1,200/month',
      originalPrice: '$2,000/month',
      description: 'Advanced NLP solutions for text analysis, language understanding, and content processing',
      features: [
        'Text Analysis & Classification',
        'Sentiment Analysis',
        'Language Translation',
        'Named Entity Recognition',
        'Text Summarization',
        'Question Answering',
        'Chatbot Development',
        'Document Processing'
      ],
      benefits: [
        'Process unstructured data',
        'Improve customer experience',
        'Automate text processing',
        'Multi-language support'
      ],
      rating: 4.7,
      reviews: 789,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/nlp',
      signupUrl: 'https://app.ziontechgroup.com/signup/nlp',
      marketPrice: '$1,500-2,500/month',
      savings: 'Save $800/month'
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision Solutions',
      category: 'vision',
      icon: Eye,
      price: '$1,800/month',
      originalPrice: '$3,000/month',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence',
      features: [
        'Object Detection & Recognition',
        'Image Classification',
        'Video Analysis',
        'Facial Recognition',
        'OCR & Text Extraction',
        'Quality Inspection',
        'Real-time Processing',
        'Edge Deployment'
      ],
      benefits: [
        'Automate visual tasks',
        'Improve accuracy by 95%',
        'Real-time processing',
        'Reduce manual inspection'
      ],
      rating: 4.8,
      reviews: 345,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/computer-vision',
      signupUrl: 'https://app.ziontechgroup.com/signup/computer-vision',
      marketPrice: '$2,500-4,000/month',
      savings: 'Save $1,200/month'
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      category: 'automation',
      icon: Zap,
      price: '$1,400/month',
      originalPrice: '$2,200/month',
      description: 'Intelligent process automation with decision-making capabilities and exception handling',
      features: [
        'Process Discovery & Mapping',
        'RPA Implementation',
        'Decision Tree Automation',
        'Exception Handling',
        'Workflow Optimization',
        'Integration Management',
        'Performance Monitoring',
        'Continuous Improvement'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Improve process efficiency',
        'Eliminate human errors',
        '24/7 operation'
      ],
      rating: 4.9,
      reviews: 567,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-automation',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-automation',
      marketPrice: '$1,800-2,800/month',
      savings: 'Save $800/month'
    },
    {
      id: 'ai-chatbots',
      name: 'AI Chatbots & Virtual Assistants',
      category: 'chatbots',
      icon: Bot,
      price: '$800/month',
      originalPrice: '$1,500/month',
      description: 'Intelligent conversational AI for customer service, support, and lead generation',
      features: [
        '24/7 Customer Support',
        'Multi-language Support',
        'Integration APIs',
        'Analytics Dashboard',
        'Custom Training',
        'Voice & Text Support',
        'Escalation Management',
        'Performance Analytics'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time',
        'Increase customer satisfaction',
        'Scale support operations'
      ],
      rating: 4.6,
      reviews: 1234,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-chatbots',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-chatbots',
      marketPrice: '$1,200-2,000/month',
      savings: 'Save $700/month'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics Platform',
      category: 'analytics',
      icon: BarChart,
      price: '$1,600/month',
      originalPrice: '$2,800/month',
      description: 'Advanced data analytics and business intelligence with AI-powered insights',
      features: [
        'Data Integration & ETL',
        'Advanced Analytics',
        'Predictive Modeling',
        'Real-time Dashboards',
        'Automated Reporting',
        'Anomaly Detection',
        'Trend Analysis',
        'Custom Visualizations'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends early',
        'Improve business performance',
        'Automated insights'
      ],
      rating: 4.8,
      reviews: 678,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-data-analytics',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-data-analytics',
      marketPrice: '$2,200-3,500/month',
      savings: 'Save $1,200/month'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Solutions',
      category: 'security',
      icon: Shield,
      price: '$2,000/month',
      originalPrice: '$3,500/month',
      description: 'AI-powered security solutions with threat detection, prevention, and response',
      features: [
        'Threat Detection & Analysis',
        'Behavioral Analytics',
        'Automated Response',
        'Vulnerability Assessment',
        'Incident Response',
        'Compliance Monitoring',
        'Security Training',
        '24/7 Monitoring'
      ],
      benefits: [
        'Prevent security breaches',
        'Reduce false positives',
        'Faster threat response',
        'Compliance assurance'
      ],
      rating: 4.9,
      reviews: 234,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-cybersecurity',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-cybersecurity',
      marketPrice: '$2,800-4,500/month',
      savings: 'Save $1,500/month'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      category: 'content',
      icon: FileText,
      price: '$900/month',
      originalPrice: '$1,500/month',
      description: 'AI-powered content creation for blogs, social media, marketing, and documentation',
      features: [
        'Blog Post Generation',
        'Social Media Content',
        'Email Marketing',
        'Product Descriptions',
        'Technical Documentation',
        'Multi-language Support',
        'Brand Voice Training',
        'Content Optimization'
      ],
      benefits: [
        'Scale content production',
        'Maintain brand consistency',
        'Reduce content costs',
        'Improve SEO performance'
      ],
      rating: 4.7,
      reviews: 890,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-content-generation',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-content-generation',
      marketPrice: '$1,200-2,000/month',
      savings: 'Save $600/month'
    },
    {
      id: 'ai-ecommerce',
      name: 'AI E-commerce Solutions',
      category: 'ecommerce',
      icon: ShoppingCart,
      price: '$1,300/month',
      originalPrice: '$2,200/month',
      description: 'AI-powered e-commerce optimization for product recommendations, pricing, and customer experience',
      features: [
        'Product Recommendations',
        'Dynamic Pricing',
        'Inventory Optimization',
        'Customer Segmentation',
        'Personalized Shopping',
        'Search Optimization',
        'Fraud Detection',
        'Analytics & Insights'
      ],
      benefits: [
        'Increase conversion rates',
        'Improve customer experience',
        'Optimize pricing strategy',
        'Reduce cart abandonment'
      ],
      rating: 4.8,
      reviews: 456,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-ecommerce',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-ecommerce',
      marketPrice: '$1,800-2,800/month',
      savings: 'Save $900/month'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      category: 'healthcare',
      icon: Stethoscope,
      price: '$2,500/month',
      originalPrice: '$4,500/month',
      description: 'AI-powered healthcare solutions for medical imaging, diagnosis, and patient care',
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Drug Discovery Support',
        'Patient Monitoring',
        'Treatment Optimization',
        'Clinical Decision Support',
        'Compliance Management',
        'Research Analytics'
      ],
      benefits: [
        'Improve diagnostic accuracy',
        'Reduce treatment time',
        'Enhance patient outcomes',
        'Comply with regulations'
      ],
      rating: 4.9,
      reviews: 123,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-healthcare',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-healthcare',
      marketPrice: '$3,500-6,000/month',
      savings: 'Save $2,000/month'
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech Solutions',
      category: 'fintech',
      icon: CreditCard,
      price: '$1,800/month',
      originalPrice: '$3,200/month',
      description: 'AI-powered financial technology solutions for risk assessment, fraud detection, and trading',
      features: [
        'Risk Assessment Models',
        'Fraud Detection',
        'Algorithmic Trading',
        'Credit Scoring',
        'Regulatory Compliance',
        'Transaction Monitoring',
        'Market Analysis',
        'Portfolio Optimization'
      ],
      benefits: [
        'Reduce financial risks',
        'Improve fraud detection',
        'Optimize trading strategies',
        'Ensure compliance'
      ],
      rating: 4.8,
      reviews: 234,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-fintech',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-fintech',
      marketPrice: '$2,500-4,000/month',
      savings: 'Save $1,400/month'
    },
    {
      id: 'ai-mobile-apps',
      name: 'AI Mobile App Development',
      category: 'mobile',
      icon: Smartphone,
      price: '$1,700/month',
      originalPrice: '$2,800/month',
      description: 'AI-powered mobile applications with intelligent features and personalization',
      features: [
        'Native App Development',
        'AI Feature Integration',
        'Personalization Engine',
        'Voice Recognition',
        'Image Processing',
        'Push Notifications',
        'Analytics Integration',
        'Cross-platform Support'
      ],
      benefits: [
        'Enhanced user experience',
        'Intelligent app features',
        'Personalized content',
        'Better engagement'
      ],
      rating: 4.7,
      reviews: 567,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-mobile-apps',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-mobile-apps',
      marketPrice: '$2,200-3,500/month',
      savings: 'Save $1,100/month'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      category: 'support',
      icon: Users,
      price: '$1,100/month',
      originalPrice: '$1,800/month',
      description: 'AI-powered customer support solutions with intelligent routing and response automation',
      features: [
        'Intelligent Ticket Routing',
        'Automated Responses',
        'Sentiment Analysis',
        'Knowledge Base Integration',
        'Multi-channel Support',
        'Performance Analytics',
        'Escalation Management',
        'Customer Insights'
      ],
      benefits: [
        'Improve response times',
        'Reduce support costs',
        'Enhance customer satisfaction',
        'Scale support operations'
      ],
      rating: 4.6,
      reviews: 789,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-customer-support',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-customer-support',
      marketPrice: '$1,500-2,500/month',
      savings: 'Save $700/month'
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      category: 'sales',
      icon: Target,
      price: '$1,500/month',
      originalPrice: '$2,500/month',
      description: 'Intelligent sales process automation with lead scoring, forecasting, and optimization',
      features: [
        'Lead Scoring & Qualification',
        'Sales Forecasting',
        'Pipeline Management',
        'Email Automation',
        'Meeting Scheduling',
        'Performance Analytics',
        'CRM Integration',
        'A/B Testing'
      ],
      benefits: [
        'Increase sales conversion',
        'Improve lead quality',
        'Optimize sales processes',
        'Better forecasting accuracy'
      ],
      rating: 4.8,
      reviews: 456,
      isPopular: true,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-sales-automation',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-sales-automation',
      marketPrice: '$2,000-3,200/month',
      savings: 'Save $1,000/month'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'workflow',
      icon: Settings,
      price: '$1,200/month',
      originalPrice: '$2,000/month',
      description: 'Intelligent workflow automation with decision-making and process optimization',
      features: [
        'Process Discovery',
        'Workflow Design',
        'Decision Automation',
        'Exception Handling',
        'Integration Management',
        'Performance Monitoring',
        'Continuous Optimization',
        'User Training'
      ],
      benefits: [
        'Streamline operations',
        'Reduce manual work',
        'Improve efficiency',
        'Better compliance'
      ],
      rating: 4.7,
      reviews: 345,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-workflow-automation',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-workflow-automation',
      marketPrice: '$1,600-2,500/month',
      savings: 'Save $800/month'
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization',
      category: 'visualization',
      icon: BarChart3,
      price: '$1,000/month',
      originalPrice: '$1,600/month',
      description: 'Advanced data visualization and reporting with AI-powered insights and recommendations',
      features: [
        'Interactive Dashboards',
        'Custom Visualizations',
        'Automated Reports',
        'Real-time Updates',
        'Drill-down Analysis',
        'Export Capabilities',
        'Mobile Responsive',
        'Collaboration Tools'
      ],
      benefits: [
        'Better data understanding',
        'Faster decision making',
        'Improved insights',
        'Enhanced reporting'
      ],
      rating: 4.6,
      reviews: 678,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-data-visualization',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-data-visualization',
      marketPrice: '$1,300-2,200/month',
      savings: 'Save $600/month'
    },
    {
      id: 'ai-lead-generation',
      name: 'AI Lead Generation',
      category: 'leads',
      icon: Target,
      price: '$1,300/month',
      originalPrice: '$2,200/month',
      description: 'AI-powered lead generation and qualification system with automated outreach',
      features: [
        'Lead Identification',
        'Contact Discovery',
        'Email Outreach',
        'Lead Scoring',
        'CRM Integration',
        'A/B Testing',
        'Performance Analytics',
        'Compliance Management'
      ],
      benefits: [
        'Increase lead volume',
        'Improve lead quality',
        'Automate outreach',
        'Better conversion rates'
      ],
      rating: 4.7,
      reviews: 567,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-lead-generation',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-lead-generation',
      marketPrice: '$1,800-2,800/month',
      savings: 'Save $900/month'
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      category: 'documents',
      icon: FileText,
      price: '$1,100/month',
      originalPrice: '$1,800/month',
      description: 'Intelligent document processing with OCR, data extraction, and workflow automation',
      features: [
        'OCR Text Recognition',
        'Data Extraction',
        'Document Classification',
        'Workflow Automation',
        'Template Recognition',
        'Batch Processing',
        'API Integration',
        'Quality Assurance'
      ],
      benefits: [
        'Process documents faster',
        'Reduce manual errors',
        'Improve accuracy',
        'Automate workflows'
      ],
      rating: 4.8,
      reviews: 456,
      isPopular: false,
      isNew: false,
      demoUrl: 'https://demo.ziontechgroup.com/ai-document-processing',
      signupUrl: 'https://app.ziontechgroup.com/signup/ai-document-processing',
      marketPrice: '$1,500-2,500/month',
      savings: 'Save $700/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain, count: aiServices.length },
    { id: 'consulting', name: 'AI Consulting', icon: Brain, count: aiServices.filter(s => s.category === 'consulting').length },
    { id: 'ml', name: 'Machine Learning', icon: Cpu, count: aiServices.filter(s => s.category === 'ml').length },
    { id: 'nlp', name: 'Natural Language Processing', icon: MessageSquare, count: aiServices.filter(s => s.category === 'nlp').length },
    { id: 'vision', name: 'Computer Vision', icon: Eye, count: aiServices.filter(s => s.category === 'vision').length },
    { id: 'automation', name: 'Automation', icon: Zap, count: aiServices.filter(s => s.category === 'automation').length },
    { id: 'chatbots', name: 'Chatbots', icon: Bot, count: aiServices.filter(s => s.category === 'chatbots').length },
    { id: 'analytics', name: 'Analytics', icon: BarChart, count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: aiServices.filter(s => s.category === 'security').length },
    { id: 'content', name: 'Content Generation', icon: FileText, count: aiServices.filter(s => s.category === 'content').length },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, count: aiServices.filter(s => s.category === 'ecommerce').length },
    { id: 'healthcare', name: 'Healthcare', icon: Stethoscope, count: aiServices.filter(s => s.category === 'healthcare').length },
    { id: 'fintech', name: 'Fintech', icon: CreditCard, count: aiServices.filter(s => s.category === 'fintech').length },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone, count: aiServices.filter(s => s.category === 'mobile').length },
    { id: 'support', name: 'Customer Support', icon: Users, count: aiServices.filter(s => s.category === 'support').length },
    { id: 'sales', name: 'Sales', icon: Target, count: aiServices.filter(s => s.category === 'sales').length },
    { id: 'workflow', name: 'Workflow', icon: Settings, count: aiServices.filter(s => s.category === 'workflow').length },
    { id: 'visualization', name: 'Data Visualization', icon: BarChart3, count: aiServices.filter(s => s.category === 'visualization').length },
    { id: 'leads', name: 'Lead Generation', icon: Target, count: aiServices.filter(s => s.category === 'leads').length },
    { id: 'documents', name: 'Document Processing', icon: FileText, count: aiServices.filter(s => s.category === 'documents').length }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularServices = aiServices.filter(service => service.isPopular);

  return (
    <>
      <SEOOptimizer
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge AI solutions."
        keywords={['ai services', 'machine learning', 'artificial intelligence', 'ai consulting', 'ai automation', 'ai solutions']}
        canonicalUrl="https://ziontechgroup.com/ai-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
                Transform Your Business with Advanced AI Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                From machine learning to computer vision, our comprehensive AI services help businesses 
                automate processes, gain insights, and achieve unprecedented growth through artificial intelligence.
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative mb-6">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.slice(0, 8).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                      <span className="text-xs bg-slate-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Popular Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Most Popular AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {popularServices.map((service) => (
                <div key={service.id} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-400 font-medium">{service.savings}</div>
                        <div className="text-xs text-gray-400">Market: {service.marketPrice}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center"
                    >
                      <Play className="w-4 h-4 inline mr-2" />
                      Demo
                    </a>
                    <a
                      href={service.signupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all text-center"
                    >
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              All AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                            ))}
                          </div>
                          <span className="text-xs text-gray-400">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {service.isPopular && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>}
                      {service.isNew && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-purple-400">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-400 font-medium">{service.savings}</div>
                        <div className="text-xs text-gray-400">Market: {service.marketPrice}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center"
                    >
                      <Play className="w-3 h-3 inline mr-1" />
                      Demo
                    </a>
                    <a
                      href={service.signupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all text-center"
                    >
                      <ExternalLink className="w-3 h-3 inline mr-1" />
                      Start
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of businesses already using our AI services to automate, optimize, and scale their operations.
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
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;