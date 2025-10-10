'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Filter, 
  Star, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Code, 
  Camera, 
  FileText, 
  Mail, 
  Target, 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Lock, 
  Activity, 
  PieChart, 
  TrendingUp, 
  Award, 
  Clock, 
  DollarSign,
  Settings,
  Eye,
  Cpu,
  Network,
  Layers,
  Bot,
  Sparkles
} from 'lucide-react';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  category: string;
  popular: boolean;
  link: string;
  marketPrice: string;
  benefits: string[];
  useCases: string[];
  industries: string[];
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All', 'Machine Learning', 'Natural Language Processing', 'Computer Vision', 
    'Predictive Analytics', 'Automation', 'Healthcare', 'Finance', 'E-commerce', 
    'Marketing', 'Customer Service', 'Development', 'Security', 'Content Creation'
  ];

  const aiServices: AIService[] = [
    // Machine Learning & Predictive Analytics
    {
      id: '1',
      icon: Brain,
      title: 'AI Predictive Analytics Platform',
      description: 'Advanced machine learning platform for predictive analytics, forecasting, and data-driven decision making across all business functions.',
      features: [
        'Advanced ML algorithms (Random Forest, XGBoost, Neural Networks)',
        'Real-time data processing and analysis',
        'Automated model training and deployment',
        'Custom dashboard and visualization tools',
        'API integration with 100+ data sources',
        'A/B testing and model validation',
        'Automated retraining and model updates',
        'White-label solution available'
      ],
      price: '$2,999/month',
      originalPrice: '$4,999/month',
      category: 'Predictive Analytics',
      popular: true,
      link: '/ai-predictive-analytics',
      marketPrice: '$8,000-15,000/month',
      benefits: ['40% improvement in forecasting accuracy', 'ROI within 60 days', '24/7 model monitoring'],
      useCases: ['Sales forecasting', 'Demand planning', 'Risk assessment', 'Customer lifetime value prediction'],
      industries: ['Retail', 'Manufacturing', 'Finance', 'Healthcare', 'E-commerce']
    },
    {
      id: '2',
      icon: TrendingUp,
      title: 'AI Business Intelligence Suite',
      description: 'Comprehensive AI-powered business intelligence with automated insights, natural language queries, and predictive analytics.',
      features: [
        'Natural language query interface',
        'Automated insight generation',
        'Predictive analytics and forecasting',
        'Real-time data visualization',
        'Custom report automation',
        'Multi-source data integration',
        'Mobile BI applications',
        'Advanced security and compliance'
      ],
      price: '$1,999/month',
      users: 'Up to 200 users',
      category: 'Machine Learning',
      popular: false,
      link: '/ai-business-intelligence',
      marketPrice: '$5,000-10,000/month',
      benefits: ['50% faster insights', 'Automated reporting', 'Natural language queries'],
      useCases: ['Executive dashboards', 'Operational analytics', 'Performance monitoring', 'Strategic planning'],
      industries: ['Enterprise', 'Consulting', 'Technology', 'Healthcare', 'Finance']
    },

    // Natural Language Processing
    {
      id: '3',
      icon: MessageSquare,
      title: 'AI Language Processing Engine',
      description: 'Advanced NLP platform for text analysis, sentiment analysis, language translation, and automated content processing.',
      features: [
        'Multi-language support (50+ languages)',
        'Sentiment analysis and emotion detection',
        'Named entity recognition',
        'Text summarization and extraction',
        'Language translation with context',
        'Custom model training',
        'API for real-time processing',
        'Integration with popular platforms'
      ],
      price: '$1,499/month',
      category: 'Natural Language Processing',
      popular: true,
      link: '/ai-language-processing',
      marketPrice: '$3,000-6,000/month',
      benefits: ['90% accuracy in sentiment analysis', 'Real-time processing', 'Multi-language support'],
      useCases: ['Customer feedback analysis', 'Content moderation', 'Market research', 'Legal document analysis'],
      industries: ['Media', 'E-commerce', 'Customer Service', 'Legal', 'Market Research']
    },
    {
      id: '4',
      icon: Bot,
      title: 'AI Conversational Platform',
      description: 'Enterprise-grade conversational AI platform with advanced NLP, multi-channel support, and human-like interactions.',
      features: [
        'Advanced NLP and understanding',
        'Multi-channel deployment (web, mobile, voice)',
        'Context-aware conversations',
        'Integration with CRM and business systems',
        'Analytics and conversation insights',
        'Custom voice and personality',
        'Human handoff capabilities',
        'Compliance and security features'
      ],
      price: '$2,499/month',
      category: 'Customer Service',
      popular: false,
      link: '/ai-conversational-platform',
      marketPrice: '$5,000-12,000/month',
      benefits: ['80% reduction in support tickets', '24/7 availability', 'Consistent customer experience'],
      useCases: ['Customer support', 'Sales assistance', 'Lead qualification', 'Internal helpdesk'],
      industries: ['Retail', 'Banking', 'Healthcare', 'Technology', 'E-commerce']
    },

    // Computer Vision
    {
      id: '5',
      icon: Eye,
      title: 'AI Computer Vision Suite',
      description: 'Advanced computer vision platform for image recognition, object detection, facial recognition, and visual analytics.',
      features: [
        'Object detection and classification',
        'Facial recognition and analysis',
        'OCR and document processing',
        'Quality control and inspection',
        'Real-time video analysis',
        'Custom model training',
        'Edge computing support',
        'Integration with IoT devices'
      ],
      price: '$3,499/month',
      category: 'Computer Vision',
      popular: true,
      link: '/ai-computer-vision',
      marketPrice: '$7,000-15,000/month',
      benefits: ['95% accuracy in object detection', 'Real-time processing', 'Edge deployment'],
      useCases: ['Quality control', 'Security monitoring', 'Document processing', 'Retail analytics'],
      industries: ['Manufacturing', 'Security', 'Retail', 'Healthcare', 'Automotive']
    },
    {
      id: '6',
      icon: Camera,
      title: 'AI Medical Imaging Platform',
      description: 'HIPAA-compliant medical imaging AI for diagnostic assistance, image analysis, and clinical decision support.',
      features: [
        'Medical image analysis (X-ray, MRI, CT)',
        'Diagnostic assistance and recommendations',
        'HIPAA compliance and security',
        'Integration with PACS systems',
        'Radiologist workflow optimization',
        'Quality assurance tools',
        'Clinical decision support',
        'Research and analytics capabilities'
      ],
      price: '$4,999/month',
      category: 'Healthcare',
      popular: false,
      link: '/ai-medical-imaging',
      marketPrice: '$15,000-30,000/month',
      benefits: ['30% faster diagnosis', 'Improved accuracy', 'HIPAA compliant'],
      useCases: ['Radiology', 'Pathology', 'Cardiology', 'Oncology', 'Emergency medicine'],
      industries: ['Healthcare', 'Medical Devices', 'Research', 'Telemedicine']
    },

    // Automation & Workflow
    {
      id: '7',
      icon: Zap,
      title: 'AI Workflow Automation Engine',
      description: 'Intelligent workflow automation with AI decision-making, process optimization, and exception handling.',
      features: [
        'Intelligent process automation',
        'AI decision-making capabilities',
        'Exception handling and escalation',
        'Process optimization recommendations',
        'Integration with 500+ applications',
        'Custom workflow builder',
        'Analytics and performance monitoring',
        'Compliance and audit trails'
      ],
      price: '$1,799/month',
      category: 'Automation',
      popular: true,
      link: '/ai-workflow-automation',
      marketPrice: '$4,000-8,000/month',
      benefits: ['70% process efficiency improvement', 'Automated decision making', 'Exception handling'],
      useCases: ['Document processing', 'Customer onboarding', 'Invoice processing', 'HR workflows'],
      industries: ['Finance', 'Insurance', 'Healthcare', 'Manufacturing', 'Professional Services']
    },
    {
      id: '8',
      icon: Settings,
      title: 'AI Process Intelligence Platform',
      description: 'AI-powered process mining and optimization with intelligent insights and automated recommendations.',
      features: [
        'Process discovery and mapping',
        'Bottleneck identification',
        'Performance optimization',
        'Compliance monitoring',
        'Predictive process analytics',
        'Root cause analysis',
        'Simulation and what-if analysis',
        'Integration with enterprise systems'
      ],
      price: '$2,299/month',
      category: 'Automation',
      popular: false,
      link: '/ai-process-intelligence',
      marketPrice: '$6,000-12,000/month',
      benefits: ['40% process improvement', 'Automated optimization', 'Compliance monitoring'],
      useCases: ['Process optimization', 'Compliance management', 'Performance improvement', 'Digital transformation'],
      industries: ['Manufacturing', 'Finance', 'Healthcare', 'Government', 'Utilities']
    },

    // Healthcare AI
    {
      id: '9',
      icon: Activity,
      title: 'AI Healthcare Analytics Platform',
      description: 'Comprehensive healthcare AI platform for patient analytics, clinical decision support, and population health management.',
      features: [
        'Patient risk stratification',
        'Clinical decision support',
        'Population health analytics',
        'Drug interaction checking',
        'Treatment recommendation engine',
        'EHR integration',
        'Real-time monitoring',
        'Compliance and security'
      ],
      price: '$3,999/month',
      category: 'Healthcare',
      popular: true,
      link: '/ai-healthcare-analytics',
      marketPrice: '$10,000-20,000/month',
      benefits: ['25% improvement in patient outcomes', 'Reduced readmissions', 'Clinical decision support'],
      useCases: ['Clinical decision support', 'Population health', 'Risk management', 'Treatment optimization'],
      industries: ['Healthcare', 'Pharmaceuticals', 'Insurance', 'Research', 'Telemedicine']
    },
    {
      id: '10',
      icon: Shield,
      title: 'AI Drug Discovery Platform',
      description: 'AI-powered drug discovery and development platform with molecular analysis, compound screening, and clinical trial optimization.',
      features: [
        'Molecular property prediction',
        'Compound screening and optimization',
        'Drug-target interaction analysis',
        'Clinical trial design optimization',
        'Adverse effect prediction',
        'Patent analysis and IP management',
        'Collaboration tools',
        'Regulatory compliance support'
      ],
      price: '$9,999/month',
      category: 'Healthcare',
      popular: false,
      link: '/ai-drug-discovery',
      marketPrice: '$25,000-50,000/month',
      benefits: ['50% faster drug discovery', 'Reduced development costs', 'Improved success rates'],
      useCases: ['Drug discovery', 'Clinical trials', 'Molecular research', 'Pharmaceutical development'],
      industries: ['Pharmaceuticals', 'Biotechnology', 'Research', 'Academic', 'Government']
    },

    // Finance AI
    {
      id: '11',
      icon: DollarSign,
      title: 'AI Financial Risk Management',
      description: 'Advanced AI platform for financial risk assessment, fraud detection, and regulatory compliance in banking and finance.',
      features: [
        'Real-time fraud detection',
        'Credit risk assessment',
        'Market risk analysis',
        'Regulatory compliance monitoring',
        'Anti-money laundering (AML)',
        'Know Your Customer (KYC) automation',
        'Stress testing and scenario analysis',
        'Integration with core banking systems'
      ],
      price: '$4,499/month',
      category: 'Finance',
      popular: true,
      link: '/ai-financial-risk',
      marketPrice: '$12,000-25,000/month',
      benefits: ['90% fraud detection accuracy', 'Real-time monitoring', 'Regulatory compliance'],
      useCases: ['Fraud prevention', 'Credit scoring', 'Risk management', 'Compliance monitoring'],
      industries: ['Banking', 'Insurance', 'Fintech', 'Investment', 'Credit Unions']
    },
    {
      id: '12',
      icon: BarChart3,
      title: 'AI Trading & Investment Platform',
      description: 'AI-powered trading platform with algorithmic trading, portfolio optimization, and market analysis.',
      features: [
        'Algorithmic trading strategies',
        'Portfolio optimization',
        'Market sentiment analysis',
        'Risk management tools',
        'Backtesting and simulation',
        'Real-time market data',
        'Custom strategy development',
        'Performance analytics'
      ],
      price: '$2,999/month',
      category: 'Finance',
      popular: false,
      link: '/ai-trading-platform',
      marketPrice: '$8,000-15,000/month',
      benefits: ['Improved trading performance', 'Automated strategies', 'Risk management'],
      useCases: ['Algorithmic trading', 'Portfolio management', 'Risk assessment', 'Market analysis'],
      industries: ['Investment', 'Hedge Funds', 'Asset Management', 'Trading', 'Fintech']
    },

    // E-commerce AI
    {
      id: '13',
      icon: Globe,
      title: 'AI E-commerce Optimization Suite',
      description: 'Comprehensive AI platform for e-commerce optimization including recommendation engines, pricing, and customer analytics.',
      features: [
        'Personalized product recommendations',
        'Dynamic pricing optimization',
        'Customer behavior analysis',
        'Inventory optimization',
        'Search and discovery enhancement',
        'A/B testing automation',
        'Conversion rate optimization',
        'Multi-channel integration'
      ],
      price: '$1,999/month',
      category: 'E-commerce',
      popular: true,
      link: '/ai-ecommerce-optimization',
      marketPrice: '$5,000-10,000/month',
      benefits: ['35% increase in conversion rates', 'Personalized experiences', 'Dynamic pricing'],
      useCases: ['Product recommendations', 'Pricing optimization', 'Customer analytics', 'Inventory management'],
      industries: ['E-commerce', 'Retail', 'Marketplace', 'Fashion', 'Electronics']
    },
    {
      id: '14',
      icon: Target,
      title: 'AI Marketing Personalization Engine',
      description: 'Advanced AI marketing platform for personalized campaigns, customer segmentation, and marketing automation.',
      features: [
        'Customer segmentation and profiling',
        'Personalized content generation',
        'Cross-channel campaign orchestration',
        'Predictive customer analytics',
        'Marketing attribution modeling',
        'Real-time personalization',
        'A/B testing and optimization',
        'Integration with marketing tools'
      ],
      price: '$2,499/month',
      category: 'Marketing',
      popular: false,
      link: '/ai-marketing-personalization',
      marketPrice: '$6,000-12,000/month',
      benefits: ['40% improvement in campaign performance', 'Personalized experiences', 'Automated optimization'],
      useCases: ['Email marketing', 'Social media', 'Content personalization', 'Customer journey optimization'],
      industries: ['E-commerce', 'Retail', 'SaaS', 'Media', 'Entertainment']
    },

    // Content Creation AI
    {
      id: '15',
      icon: FileText,
      title: 'AI Content Creation Studio',
      description: 'Comprehensive AI content creation platform for text, images, videos, and multimedia content generation.',
      features: [
        'AI text generation and editing',
        'Image generation and editing',
        'Video creation and editing',
        'Voice synthesis and cloning',
        'Content optimization for SEO',
        'Multi-language content creation',
        'Brand consistency tools',
        'Collaboration and approval workflows'
      ],
      price: '$1,299/month',
      category: 'Content Creation',
      popular: true,
      link: '/ai-content-creation',
      marketPrice: '$3,000-6,000/month',
      benefits: ['80% faster content creation', 'Consistent brand voice', 'Multi-format support'],
      useCases: ['Marketing content', 'Social media', 'Blog posts', 'Product descriptions'],
      industries: ['Marketing', 'Media', 'E-commerce', 'Publishing', 'Entertainment']
    },
    {
      id: '16',
      icon: Mail,
      title: 'AI Email Marketing Intelligence',
      description: 'AI-powered email marketing platform with intelligent content generation, send time optimization, and performance analytics.',
      features: [
        'AI email content generation',
        'Send time optimization',
        'Subject line optimization',
        'A/B testing automation',
        'Deliverability optimization',
        'Performance analytics and insights',
        'Segmentation and personalization',
        'Integration with CRM systems'
      ],
      price: '$799/month',
      category: 'Marketing',
      popular: false,
      link: '/ai-email-marketing',
      marketPrice: '$2,000-4,000/month',
      benefits: ['50% higher open rates', 'Automated optimization', 'Personalized content'],
      useCases: ['Email campaigns', 'Newsletter automation', 'Lead nurturing', 'Customer retention'],
      industries: ['E-commerce', 'SaaS', 'Retail', 'B2B', 'Non-profit']
    },

    // Development AI
    {
      id: '17',
      icon: Code,
      title: 'AI Code Generation Platform',
      description: 'Advanced AI platform for code generation, debugging, testing, and software development automation.',
      features: [
        'AI code generation and completion',
        'Automated debugging and testing',
        'Code review and optimization',
        'Documentation generation',
        'Multi-language support',
        'Integration with IDEs',
        'Team collaboration tools',
        'Security vulnerability detection'
      ],
      price: '$1,599/month',
      category: 'Development',
      popular: true,
      link: '/ai-code-generation',
      marketPrice: '$4,000-8,000/month',
      benefits: ['60% faster development', 'Improved code quality', 'Automated testing'],
      useCases: ['Software development', 'Code review', 'Testing automation', 'Documentation'],
      industries: ['Technology', 'Software', 'Fintech', 'Healthcare IT', 'E-commerce']
    },
    {
      id: '18',
      icon: Database,
      title: 'AI Data Engineering Platform',
      description: 'AI-powered data engineering platform for data pipeline automation, quality management, and intelligent data processing.',
      features: [
        'Automated data pipeline creation',
        'Data quality monitoring and cleaning',
        'Intelligent data transformation',
        'Real-time data processing',
        'Data lineage tracking',
        'Integration with cloud platforms',
        'Monitoring and alerting',
        'Compliance and governance'
      ],
      price: '$2,199/month',
      category: 'Development',
      popular: false,
      link: '/ai-data-engineering',
      marketPrice: '$6,000-12,000/month',
      benefits: ['70% faster data processing', 'Automated quality management', 'Real-time processing'],
      useCases: ['Data pipelines', 'ETL processes', 'Data quality', 'Real-time analytics'],
      industries: ['Technology', 'Finance', 'Healthcare', 'E-commerce', 'Manufacturing']
    },

    // Security AI
    {
      id: '19',
      icon: Lock,
      title: 'AI Cybersecurity Platform',
      description: 'Advanced AI cybersecurity platform with threat detection, incident response, and security analytics.',
      features: [
        'AI threat detection and analysis',
        'Automated incident response',
        'Behavioral analytics',
        'Vulnerability assessment',
        'Security orchestration',
        'Compliance monitoring',
        'Threat intelligence integration',
        'SIEM integration'
      ],
      price: '$3,299/month',
      category: 'Security',
      popular: true,
      link: '/ai-cybersecurity',
      marketPrice: '$8,000-15,000/month',
      benefits: ['95% threat detection accuracy', 'Automated response', 'Real-time monitoring'],
      useCases: ['Threat detection', 'Incident response', 'Vulnerability management', 'Compliance'],
      industries: ['Finance', 'Healthcare', 'Government', 'Technology', 'Critical Infrastructure']
    },
    {
      id: '20',
      icon: Network,
      title: 'AI Network Security Intelligence',
      description: 'AI-powered network security platform for traffic analysis, anomaly detection, and network protection.',
      features: [
        'Network traffic analysis',
        'Anomaly detection',
        'DDoS protection',
        'Intrusion detection and prevention',
        'Network segmentation',
        'Zero-trust architecture',
        'Compliance reporting',
        'Integration with security tools'
      ],
      price: '$2,799/month',
      category: 'Security',
      popular: false,
      link: '/ai-network-security',
      marketPrice: '$7,000-14,000/month',
      benefits: ['Real-time threat detection', 'Automated protection', 'Network visibility'],
      useCases: ['Network monitoring', 'Threat prevention', 'Compliance', 'Incident response'],
      industries: ['Technology', 'Finance', 'Healthcare', 'Government', 'Education']
    }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    {
      icon: Brain,
      value: '100+',
      label: 'AI Models',
      description: 'Pre-trained and custom models'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Enterprise Clients',
      description: 'Trusted by leading companies'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Accuracy',
      description: 'Industry-leading performance'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support',
      description: 'Always here to help'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including machine learning, NLP, computer vision, predictive analytics, and automation. Enterprise-grade AI solutions for every industry." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, predictive analytics, AI automation, artificial intelligence, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Services">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI services. From machine learning to computer vision, 
              we deliver enterprise-grade artificial intelligence solutions that drive real results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card hologram-card p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get AI Consultation
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 w-full sm:w-auto text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                {selectedCategory === 'All' ? 'All AI Services' : `${selectedCategory} Solutions`}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services designed to solve complex business challenges.
              </p>
              <div className="mt-4 text-cyan-400 font-medium">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative cyber-card hologram-card p-8 border ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-gray-400 text-sm line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="mb-6 p-4 bg-white/5 rounded-lg">
                    <div className="text-sm text-gray-300 mb-2">Market Price: <span className="text-gray-400 line-through">{service.marketPrice}</span></div>
                    <div className="text-sm text-green-400 font-medium">You Save: {service.benefits[0]}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.useCases.slice(0, 3).map((useCase, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to={service.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Get Started
                    </Link>
                    <Link
                      to={service.link}
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our AI experts help you identify the perfect solutions for your business needs. 
                Get a free consultation and see how AI can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 cyber-button"
                >
                  <Brain className="w-5 h-5" />
                  Get Free AI Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;