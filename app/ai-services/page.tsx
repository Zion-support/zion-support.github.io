<<<<<<< HEAD
'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
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
=======

>>>>>>> origin/resolve-merge-conflicts-1759965566

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
<<<<<<< HEAD
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
=======
  ];return (
>>>>>>> origin/resolve-merge-conflicts-1759965566
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. From enterprise solutions to specialized AI applications, we deliver cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="ai services, artificial intelligence, machine learning, ai consulting, ai development, ai solutions" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services. Achieve 300% ROI with our cutting-edge artificial intelligence solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, 
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, 
  TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, 
  Mail, Phone, DollarSign, Clock, Award, CheckCircle, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, 
  CreditCard, Building, Factory, Car, Plane, Ship, Train, 
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, 
  Hammer, Paintbrush, Scissors, BookOpen, Calculator, 
  Compass, PieChart, TrendingDown, Activity, Search
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = [
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Advanced analytics and insights powered by machine learning to drive data-driven decisions',
      category: 'ai-analytics',
      icon: BarChart,
      price: '$2,999/month',
      features: [
        'Predictive analytics and forecasting',
        'Real-time dashboard creation',
        'Natural language querying',
        'Automated report generation',
        'Multi-source data integration',
        'Custom ML model development',
        'Advanced visualization tools',
        'API integration capabilities'
      ],
      benefits: [
        'Increase revenue by 25-40%',
        'Reduce decision-making time by 70%',
        'Identify new business opportunities',
        'Improve operational efficiency',
        'Predict market trends accurately'
      ],
      targetAudience: 'Enterprise companies, Data-driven organizations',
      setupTime: '2-4 weeks',
      freeTrial: '30 days',
      support: 'Dedicated data scientist and support team',
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'AWS', 'Azure', 'Snowflake', 'Tableau', 'Power BI'],
      link: 'https://ziontechgroup.com/ai-business-intelligence'
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      description: 'Intelligent document analysis, extraction, and automation for enterprise workflows',
      category: 'ai-automation',
      icon: FileText,
      price: '$1,999/month',
      features: [
        'OCR and text extraction',
        'Document classification and routing',
        'Data validation and verification',
        'Automated workflow creation',
        'Multi-language support',
        'Compliance monitoring',
        'Version control and audit trails',
        'Custom field extraction'
      ],
      benefits: [
        'Process documents 20x faster',
        'Reduce errors by 95%',
        'Eliminate manual data entry',
        'Ensure compliance automatically',
        'Scale document processing'
      ],
      targetAudience: 'Legal firms, Insurance companies, Financial services, Healthcare',
      setupTime: '1-2 weeks',
      freeTrial: '14 days',
      support: 'Implementation specialist and ongoing support',
      integrations: ['SharePoint', 'Box', 'Dropbox', 'Salesforce', 'SAP', 'Oracle', 'Microsoft 365'],
      link: 'https://ziontechgroup.com/ai-document-processing'
    },
    {
      id: 'ai-customer-experience',
      name: 'AI Customer Experience',
      description: 'Personalized customer interactions and journey optimization using advanced AI',
      category: 'ai-customer',
      icon: Users,
      price: '$2,499/month',
      features: [
        'Customer behavior analysis',
        'Personalized recommendations',
        'Sentiment analysis and monitoring',
        'Churn prediction and prevention',
        'Automated customer segmentation',
        'Real-time interaction optimization',
        'Multi-channel orchestration',
        'Customer lifetime value prediction'
      ],
      benefits: [
        'Increase customer satisfaction by 40%',
        'Reduce churn rate by 30%',
        'Boost conversion rates by 25%',
        'Improve customer lifetime value',
        'Enhance brand loyalty'
      ],
      targetAudience: 'E-commerce, SaaS companies, Retail, Service businesses',
      setupTime: '2-3 weeks',
      freeTrial: '21 days',
      support: 'Customer success manager and technical support',
      integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Shopify', 'WooCommerce', 'Magento'],
      link: 'https://ziontechgroup.com/ai-customer-experience'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Globe },
    { id: 'ai-analytics', name: 'AI Analytics', icon: BarChart },
    { id: 'ai-automation', name: 'AI Automation', icon: Settings },
    { id: 'ai-customer', name: 'AI Customer', icon: Users },
    { id: 'ai-marketing', name: 'AI Marketing', icon: Target },
    { id: 'ai-industrial', name: 'AI Industrial', icon: Settings },
    { id: 'ai-logistics', name: 'AI Logistics', icon: Globe },
    { id: 'ai-security', name: 'AI Security', icon: Shield },
    { id: 'ai-content', name: 'AI Content', icon: FileText },
    { id: 'ai-hr', name: 'AI HR', icon: Users },
    { id: 'ai-quality', name: 'AI Quality', icon: CheckSquare },
    { id: 'ai-energy', name: 'AI Energy', icon: Zap }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and intelligent automation for business transformation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, business intelligence, automation" />
>>>>>>> origin/resolve-merge-conflicts
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
<<<<<<< HEAD
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
=======
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                AI Services
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations, 
                automate complex processes, and unlock unprecedented insights from your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get AI Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View All Services
                </a>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From predictive analytics to intelligent automation, we deliver enterprise-grade AI services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get AI Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>
            
            {/* Search and Filter Section */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
=======
                  <div className="flex justify-between">
                    <span className="text-gray-400">Free Trial:</span>
                    <span className="text-green-400">{service.freeTrial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">{service.targetAudience}</span>
                  </div>
                </div>

                {service.caseStudy && (
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg">
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}"</p>
                  </div>
                )}

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Get Demo
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <service.icon className="w-12 h-12" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400">per month</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-white">{service.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Free Trial:</span>
                        <span className="text-green-400">{service.freeTrial}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Target:</span>
                        <span className="text-white">{service.targetAudience}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Start Free Trial
                      </a>
                      <a
                        href="tel:+13024640950"
                        className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 inline mr-2" />
                        Get Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-cyan-400 mb-8 neon-glow">
                Our AI services are designed to deliver measurable results. 
                All implementations include free trials, dedicated support, and ongoing optimization.
>>>>>>> origin/resolve-merge-conflicts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
<<<<<<< HEAD
                  className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
=======
                  className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  <Phone className="w-5 h-5" />
>>>>>>> origin/resolve-merge-conflicts
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
<<<<<<< HEAD
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

=======
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  <Mail className="w-5 h-5" />
                  Get Custom AI Strategy
                </a>
              </div>
            </div>
          </section>
        </main>
>>>>>>> origin/resolve-merge-conflicts
        <Footer />
      </div>
    </>
  );
};
>>>>>>> main

<<<<<<< HEAD
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
=======
export default AIServicesPage;
>>>>>>> origin/resolve-merge-conflicts
