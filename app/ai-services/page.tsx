'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Zap, Shield, Clock, Users, Globe, Database, Smartphone, Code, Settings, FileText, Calendar, PieChart, Headphones, Camera, Music, Video, ShoppingCart, CreditCard, BookOpen, GraduationCap, Heart, Car, Home, Briefcase, Gamepad2, Palette, Wrench, Lightbulb, Rocket, Layers, Activity, Bot, Cloud, Server, Network, HardDrive, Wifi, Monitor, Printer, Keyboard, Mouse, Microphone, Volume2, Play, Pause, Stop, SkipForward, SkipBack, Repeat, Shuffle, VolumeX, Maximize, Minimize, X, Plus, Minus, Edit, Trash2, Save, Download, Upload, Share, Copy, Link, ExternalLink, Info, AlertTriangle, Check, XCircle, HelpCircle, MessageCircle, Bell, BellOff, User, UserPlus, UserMinus, Users2, UserCheck, UserX, UserCog, UserSearch, UserEdit, UserShield, UserLock, UserUnlock, UserKey, UserHeart, UserStar, Award, Lock, DollarSign, Calculator, Package, Search, Filter, Star } from 'lucide-react';

interface AIService {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  popular: boolean;
  new: boolean;
  rating: number;
  users: number;
  link: string;
  demo: string;
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  integrations: string[];
  support: string[];
  marketPrice: string;
  roi: string;
  implementation: string;
  compliance: string[];
}

const AIServiceCard: React.FC<{ service: AIService; onSelect: (service: AIService) => void }> = ({ service, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`quantum-card p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isHovered ? 'energy-pulse' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(service)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${service.bgColor}`}>
          <service.icon className={`w-8 h-8 ${service.color}`} />
        </div>
        <div className="flex space-x-2">
          {service.popular && (
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
              POPULAR
            </span>
          )}
          {service.new && (
            <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs font-bold rounded-full">
              NEW
            </span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.name}</h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-medium">{service.rating}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4 text-cyan-400" />
          <span className="text-gray-300 text-sm">{service.users.toLocaleString()}+ users</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {service.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
        <button className="cyber-button px-4 py-2 text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default function AIServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<AIService | null>(null);
  const [sortBy, setSortBy] = useState('popular');

  const aiServices: AIService[] = [
    // AI Business Intelligence & Analytics
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Suite',
      description: 'Comprehensive AI-powered business intelligence platform with predictive analytics, automated reporting, and real-time insights for data-driven decision making.',
      category: 'ai-analytics',
      price: 'From $299/mo',
      features: [
        'Predictive analytics and forecasting',
        'Automated report generation',
        'Real-time dashboard creation',
        'Natural language query interface',
        'Advanced data visualization',
        'Custom KPI tracking and alerts'
      ],
      icon: BarChart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      popular: true,
      new: false,
      rating: 4.9,
      users: 25000,
      link: '/ai-business-intelligence',
      demo: '/demo/ai-business-intelligence',
      pricing: { basic: 299, pro: 799, enterprise: 1999 },
      benefits: ['300% faster insights', '85% better decision making', '200% ROI improvement'],
      useCases: ['Financial analysis', 'Sales forecasting', 'Market research', 'Operations optimization'],
      integrations: ['Salesforce', 'HubSpot', 'Microsoft Power BI', 'Tableau', 'Google Analytics', 'SAP'],
      support: ['24/7 dedicated support', 'White-glove onboarding', 'Custom training', 'API documentation'],
      marketPrice: '$500-2000/mo',
      roi: '300% within 6 months',
      implementation: '2-4 weeks',
      compliance: ['GDPR', 'SOC 2', 'ISO 27001', 'HIPAA']
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics Platform',
      description: 'Advanced machine learning platform for predictive modeling, forecasting, and automated business predictions with 95% accuracy.',
      category: 'ai-analytics',
      price: 'From $199/mo',
      features: [
        'Machine learning model deployment',
        'Automated feature engineering',
        'Real-time predictions',
        'Model performance monitoring',
        'A/B testing framework',
        'Custom algorithm development'
      ],
      icon: TrendingUp,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      popular: true,
      new: false,
      rating: 4.8,
      users: 18000,
      link: '/ai-predictive-analytics',
      demo: '/demo/ai-predictive-analytics',
      pricing: { basic: 199, pro: 599, enterprise: 1499 },
      benefits: ['95% prediction accuracy', '80% faster model deployment', '150% better forecasting'],
      useCases: ['Demand forecasting', 'Risk assessment', 'Customer churn prediction', 'Price optimization'],
      integrations: ['Python', 'R', 'TensorFlow', 'PyTorch', 'AWS SageMaker', 'Azure ML'],
      support: ['Data science consultation', 'Model optimization', 'Custom training', '24/7 support'],
      marketPrice: '$300-1500/mo',
      roi: '250% within 4 months',
      implementation: '3-6 weeks',
      compliance: ['GDPR', 'SOC 2', 'ISO 27001']
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization Studio',
      description: 'Intelligent data visualization platform with AI-powered chart recommendations, interactive dashboards, and automated insights generation.',
      category: 'ai-analytics',
      price: 'From $149/mo',
      features: [
        'AI chart recommendations',
        'Interactive dashboard builder',
        'Automated insight generation',
        'Real-time data updates',
        'Custom visualization library',
        'Collaborative workspace'
      ],
      icon: PieChart,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      popular: false,
      new: true,
      rating: 4.7,
      users: 12000,
      link: '/ai-data-visualization',
      demo: '/demo/ai-data-visualization',
      pricing: { basic: 149, pro: 399, enterprise: 999 },
      benefits: ['200% better data insights', '150% faster dashboard creation', '90% user engagement'],
      useCases: ['Executive reporting', 'Marketing analytics', 'Financial dashboards', 'Operations monitoring'],
      integrations: ['Tableau', 'Power BI', 'Qlik', 'D3.js', 'Chart.js', 'Plotly'],
      support: ['Design consultation', 'Custom training', 'Template library', '24/7 support'],
      marketPrice: '$200-800/mo',
      roi: '180% within 3 months',
      implementation: '1-2 weeks',
      compliance: ['GDPR', 'SOC 2']
    },

    // AI Marketing & Sales
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation Suite',
      description: 'Comprehensive AI-powered marketing automation platform with intelligent campaign optimization, customer segmentation, and personalized content generation.',
      category: 'ai-marketing',
      price: 'From $399/mo',
      features: [
        'AI campaign optimization',
        'Intelligent customer segmentation',
        'Personalized content generation',
        'Multi-channel orchestration',
        'Predictive lead scoring',
        'Automated A/B testing'
      ],
      icon: Target,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      popular: true,
      new: false,
      rating: 4.9,
      users: 32000,
      link: '/ai-marketing-automation',
      demo: '/demo/ai-marketing-automation',
      pricing: { basic: 399, pro: 999, enterprise: 2499 },
      benefits: ['400% increase in conversion rates', '300% better customer engagement', '250% ROI improvement'],
      useCases: ['Email marketing', 'Social media automation', 'Lead nurturing', 'Customer retention'],
      integrations: ['HubSpot', 'Salesforce', 'Mailchimp', 'Facebook Ads', 'Google Ads', 'LinkedIn'],
      support: ['Strategy consultation', 'Campaign setup', 'Performance optimization', '24/7 support'],
      marketPrice: '$600-3000/mo',
      roi: '400% within 6 months',
      implementation: '2-3 weeks',
      compliance: ['GDPR', 'CAN-SPAM', 'CCPA', 'SOC 2']
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation Platform',
      description: 'Intelligent sales automation with AI-powered lead qualification, automated follow-ups, and predictive sales analytics for maximum revenue growth.',
      category: 'ai-sales',
      price: 'From $299/mo',
      features: [
        'AI lead qualification',
        'Automated follow-up sequences',
        'Predictive sales analytics',
        'Intelligent opportunity scoring',
        'Automated proposal generation',
        'Sales performance insights'
      ],
      icon: TrendingUp,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      popular: true,
      new: false,
      rating: 4.8,
      users: 28000,
      link: '/ai-sales-automation',
      demo: '/demo/ai-sales-automation',
      pricing: { basic: 299, pro: 799, enterprise: 1999 },
      benefits: ['350% increase in qualified leads', '200% faster sales cycles', '180% revenue growth'],
      useCases: ['Lead qualification', 'Sales forecasting', 'Pipeline management', 'Customer acquisition'],
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Microsoft Dynamics', 'SugarCRM'],
      support: ['Sales strategy consultation', 'Process optimization', 'Team training', '24/7 support'],
      marketPrice: '$400-2000/mo',
      roi: '350% within 5 months',
      implementation: '2-4 weeks',
      compliance: ['GDPR', 'SOC 2', 'ISO 27001']
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation Studio',
      description: 'Advanced AI content creation platform with multi-format generation, brand voice consistency, and automated content optimization for all marketing channels.',
      category: 'ai-content',
      price: 'From $199/mo',
      features: [
        'Multi-format content generation',
        'Brand voice training',
        'SEO optimization',
        'Plagiarism detection',
        'Content performance analytics',
        'Collaborative editing'
      ],
      icon: FileText,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      popular: false,
      new: true,
      rating: 4.6,
      users: 15000,
      link: '/ai-content-generation',
      demo: '/demo/ai-content-generation',
      pricing: { basic: 199, pro: 499, enterprise: 1299 },
      benefits: ['500% faster content creation', '90% brand consistency', '200% better SEO performance'],
      useCases: ['Blog writing', 'Social media content', 'Ad copy', 'Product descriptions'],
      integrations: ['WordPress', 'HubSpot', 'Buffer', 'Hootsuite', 'Canva', 'Figma'],
      support: ['Content strategy consultation', 'Brand voice training', 'SEO optimization', '24/7 support'],
      marketPrice: '$300-1200/mo',
      roi: '200% within 3 months',
      implementation: '1-2 weeks',
      compliance: ['GDPR', 'SOC 2']
    },

    // AI Customer Experience
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Suite',
      description: 'Comprehensive AI-powered customer support platform with intelligent chatbots, automated ticket routing, and sentiment analysis for exceptional customer experience.',
      category: 'ai-support',
      price: 'From $249/mo',
      features: [
        'Intelligent chatbot system',
        'Automated ticket routing',
        'Sentiment analysis',
        'Multi-language support',
        'Knowledge base integration',
        'Performance analytics'
      ],
      icon: Headphones,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/20',
      popular: true,
      new: false,
      rating: 4.8,
      users: 35000,
      link: '/ai-customer-support',
      demo: '/demo/ai-customer-support',
      pricing: { basic: 249, pro: 649, enterprise: 1599 },
      benefits: ['80% faster response times', '90% customer satisfaction', '70% cost reduction'],
      useCases: ['FAQ automation', 'Ticket management', 'Live chat support', 'Customer onboarding'],
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Drift', 'Crisp', 'LiveChat'],
      support: ['Setup and configuration', 'Custom training', 'Performance optimization', '24/7 support'],
      marketPrice: '$400-1800/mo',
      roi: '280% within 4 months',
      implementation: '2-3 weeks',
      compliance: ['GDPR', 'SOC 2', 'ISO 27001', 'HIPAA']
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder Pro',
      description: 'No-code AI chatbot creation platform with natural language processing, multi-platform deployment, and advanced conversation management.',
      category: 'ai-support',
      price: 'From $99/mo',
      features: [
        'No-code chatbot builder',
        'Natural language processing',
        'Multi-platform deployment',
        'Conversation analytics',
        'Custom integrations',
        'A/B testing for conversations'
      ],
      icon: Bot,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/20',
      popular: false,
      new: true,
      rating: 4.7,
      users: 18000,
      link: '/ai-chatbot-builder',
      demo: '/demo/ai-chatbot-builder',
      pricing: { basic: 99, pro: 299, enterprise: 799 },
      benefits: ['95% conversation accuracy', '80% faster deployment', '200% customer engagement'],
      useCases: ['Website chat', 'WhatsApp automation', 'Facebook Messenger', 'Slack integration'],
      integrations: ['Facebook', 'WhatsApp', 'Slack', 'Microsoft Teams', 'Discord', 'Telegram'],
      support: ['Design consultation', 'Custom training', 'Template library', '24/7 support'],
      marketPrice: '$150-600/mo',
      roi: '150% within 2 months',
      implementation: '1-2 weeks',
      compliance: ['GDPR', 'SOC 2']
    },

    // AI Development & DevOps
    {
      id: 'ai-code-generation',
      name: 'AI Code Generation Platform',
      description: 'Advanced AI-powered code generation and review platform with automated testing, documentation, and intelligent code optimization.',
      category: 'ai-development',
      price: 'From $399/mo',
      features: [
        'AI code generation',
        'Automated code review',
        'Intelligent testing',
        'Documentation generation',
        'Code optimization suggestions',
        'Security vulnerability detection'
      ],
      icon: Code,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
      popular: true,
      new: false,
      rating: 4.8,
      users: 22000,
      link: '/ai-code-generation',
      demo: '/demo/ai-code-generation',
      pricing: { basic: 399, pro: 999, enterprise: 2499 },
      benefits: ['300% faster development', '90% code quality improvement', '80% bug reduction'],
      useCases: ['Web development', 'Mobile app development', 'API development', 'Code maintenance'],
      integrations: ['GitHub', 'GitLab', 'Bitbucket', 'VS Code', 'IntelliJ', 'Sublime Text'],
      support: ['Development consultation', 'Code review', 'Best practices training', '24/7 support'],
      marketPrice: '$600-2500/mo',
      roi: '250% within 4 months',
      implementation: '2-3 weeks',
      compliance: ['SOC 2', 'ISO 27001']
    },
    {
      id: 'ai-testing-automation',
      name: 'AI Testing Automation Suite',
      description: 'Intelligent testing automation platform with AI-powered test generation, automated bug detection, and comprehensive quality assurance.',
      category: 'ai-development',
      price: 'From $299/mo',
      features: [
        'AI test case generation',
        'Automated bug detection',
        'Performance testing',
        'Security testing',
        'Cross-browser testing',
        'Test analytics and reporting'
      ],
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      popular: false,
      new: true,
      rating: 4.7,
      users: 12000,
      link: '/ai-testing-automation',
      demo: '/demo/ai-testing-automation',
      pricing: { basic: 299, pro: 799, enterprise: 1999 },
      benefits: ['400% faster testing', '95% bug detection rate', '70% cost reduction'],
      useCases: ['Web application testing', 'Mobile app testing', 'API testing', 'Performance testing'],
      integrations: ['Selenium', 'Cypress', 'Jest', 'Mocha', 'JUnit', 'TestNG'],
      support: ['Testing strategy consultation', 'Test suite optimization', 'Team training', '24/7 support'],
      marketPrice: '$400-2000/mo',
      roi: '200% within 3 months',
      implementation: '2-4 weeks',
      compliance: ['SOC 2', 'ISO 27001']
    },

    // AI Healthcare & Life Sciences
    {
      id: 'ai-healthcare-diagnostics',
      name: 'AI Healthcare Diagnostics Platform',
      description: 'Advanced AI-powered medical diagnostics platform with image analysis, symptom assessment, and clinical decision support for healthcare professionals.',
      category: 'ai-healthcare',
      price: 'From $999/mo',
      features: [
        'Medical image analysis',
        'Symptom assessment AI',
        'Clinical decision support',
        'Patient risk stratification',
        'Treatment recommendations',
        'Compliance monitoring'
      ],
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-500/20',
      popular: false,
      new: false,
      rating: 4.9,
      users: 5000,
      link: '/ai-healthcare-diagnostics',
      demo: '/demo/ai-healthcare-diagnostics',
      pricing: { basic: 999, pro: 2499, enterprise: 4999 },
      benefits: ['95% diagnostic accuracy', '60% faster diagnosis', '40% improved patient outcomes'],
      useCases: ['Radiology analysis', 'Pathology diagnosis', 'Clinical decision support', 'Risk assessment'],
      integrations: ['Epic', 'Cerner', 'Allscripts', 'NextGen', 'eClinicalWorks', 'athenahealth'],
      support: ['Medical consultation', 'Regulatory compliance', 'Custom training', '24/7 support'],
      marketPrice: '$1500-5000/mo',
      roi: '200% within 8 months',
      implementation: '4-8 weeks',
      compliance: ['HIPAA', 'FDA', 'SOC 2', 'ISO 27001', 'HITRUST']
    },
    {
      id: 'ai-drug-discovery',
      name: 'AI Drug Discovery Platform',
      description: 'Revolutionary AI platform for pharmaceutical research with molecular analysis, drug interaction prediction, and automated compound screening.',
      category: 'ai-healthcare',
      price: 'From $1999/mo',
      features: [
        'Molecular analysis AI',
        'Drug interaction prediction',
        'Compound screening',
        'Toxicity prediction',
        'Clinical trial optimization',
        'Regulatory compliance support'
      ],
      icon: Activity,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/20',
      popular: false,
      new: true,
      rating: 4.8,
      users: 1500,
      link: '/ai-drug-discovery',
      demo: '/demo/ai-drug-discovery',
      pricing: { basic: 1999, pro: 4999, enterprise: 9999 },
      benefits: ['300% faster drug discovery', '80% cost reduction', '90% success rate improvement'],
      useCases: ['Drug development', 'Clinical trials', 'Safety assessment', 'Regulatory submission'],
      integrations: ['LabVantage', 'Waters', 'Agilent', 'Thermo Fisher', 'PerkinElmer', 'Bruker'],
      support: ['Scientific consultation', 'Regulatory guidance', 'Custom research', '24/7 support'],
      marketPrice: '$3000-10000/mo',
      roi: '400% within 12 months',
      implementation: '6-12 weeks',
      compliance: ['FDA', 'EMA', 'ICH', 'SOC 2', 'ISO 27001']
    },

    // AI Financial Services
    {
      id: 'ai-fintech-platform',
      name: 'AI Fintech Platform',
      description: 'Comprehensive AI-powered financial services platform with fraud detection, risk assessment, and automated trading algorithms.',
      category: 'ai-fintech',
      price: 'From $799/mo',
      features: [
        'Real-time fraud detection',
        'Credit risk assessment',
        'Automated trading algorithms',
        'Regulatory compliance',
        'Anti-money laundering',
        'Financial forecasting'
      ],
      icon: DollarSign,
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
      popular: true,
      new: false,
      rating: 4.9,
      users: 8000,
      link: '/ai-fintech-platform',
      demo: '/demo/ai-fintech-platform',
      pricing: { basic: 799, pro: 1999, enterprise: 4999 },
      benefits: ['99.9% fraud detection accuracy', '80% risk reduction', '200% trading performance'],
      useCases: ['Fraud prevention', 'Credit scoring', 'Algorithmic trading', 'Risk management'],
      integrations: ['FIS', 'Fiserv', 'Jack Henry', 'Temenos', 'Mambu', 'Thought Machine'],
      support: ['Financial consultation', 'Compliance guidance', 'Custom algorithms', '24/7 support'],
      marketPrice: '$1200-5000/mo',
      roi: '300% within 6 months',
      implementation: '4-8 weeks',
      compliance: ['PCI DSS', 'SOX', 'Basel III', 'SOC 2', 'ISO 27001']
    },
    {
      id: 'ai-insurance-platform',
      name: 'AI Insurance Platform',
      description: 'Intelligent insurance platform with automated underwriting, claims processing, and risk assessment using advanced AI algorithms.',
      category: 'ai-fintech',
      price: 'From $599/mo',
      features: [
        'Automated underwriting',
        'Claims processing AI',
        'Risk assessment models',
        'Fraud detection',
        'Customer service automation',
        'Policy optimization'
      ],
      icon: Shield,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
      popular: false,
      new: true,
      rating: 4.7,
      users: 4000,
      link: '/ai-insurance-platform',
      demo: '/demo/ai-insurance-platform',
      pricing: { basic: 599, pro: 1499, enterprise: 3499 },
      benefits: ['85% faster claims processing', '90% fraud detection', '60% cost reduction'],
      useCases: ['Auto insurance', 'Health insurance', 'Property insurance', 'Life insurance'],
      integrations: ['Guidewire', 'Duck Creek', 'Sapiens', 'Insurity', 'EIS', 'Majesco'],
      support: ['Insurance consultation', 'Compliance support', 'Custom models', '24/7 support'],
      marketPrice: '$800-3500/mo',
      roi: '250% within 8 months',
      implementation: '6-10 weeks',
      compliance: ['NAIC', 'SOX', 'SOC 2', 'ISO 27001']
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Globe },
    { id: 'ai-analytics', name: 'AI Analytics', icon: BarChart },
    { id: 'ai-marketing', name: 'AI Marketing', icon: Target },
    { id: 'ai-sales', name: 'AI Sales', icon: TrendingUp },
    { id: 'ai-content', name: 'AI Content', icon: FileText },
    { id: 'ai-support', name: 'AI Support', icon: Headphones },
    { id: 'ai-development', name: 'AI Development', icon: Code },
    { id: 'ai-healthcare', name: 'AI Healthcare', icon: Heart },
    { id: 'ai-fintech', name: 'AI Fintech', icon: DollarSign }
  ];

  const filteredServices = useMemo(() => {
    let filtered = aiServices;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => b.users - a.users);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.pricing.basic - b.pricing.basic);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.pricing.basic - a.pricing.basic);
        break;
      case 'new':
        filtered = filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleServiceSelect = (service: AIService) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including business intelligence, marketing automation, customer support, and specialized industry solutions. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="ai services, artificial intelligence, business intelligence, marketing automation, customer support, healthcare ai, fintech ai" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic-text cyber-text">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive AI services. From business intelligence to healthcare diagnostics, 
            we deliver cutting-edge AI solutions that drive real results and measurable ROI.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="new">Newest First</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-black font-semibold'
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
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <AIServiceCard
              key={service.id}
              service={service}
              onSelect={handleServiceSelect}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-lg ${selectedService.bgColor}`}>
                    <selectedService.icon className={`w-12 h-12 ${selectedService.color}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white neon-text">{selectedService.name}</h2>
                    <p className="text-gray-300 text-lg">{selectedService.description}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                  <div className="space-y-2 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                  <div className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedService.useCases.map((useCase, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Pricing & ROI</h3>
                  <div className="space-y-4 mb-6">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Starting Price</span>
                        <span className="text-2xl font-bold text-cyan-400">{selectedService.price}</span>
                      </div>
                      <p className="text-sm text-gray-400">Market Price: {selectedService.marketPrice}</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-gray-300 mb-1">Expected ROI</div>
                      <div className="text-xl font-bold text-green-400">{selectedService.roi}</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-gray-300 mb-1">Implementation</div>
                      <div className="text-lg font-semibold text-cyan-400">{selectedService.implementation}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Compliance</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedService.compliance.map((comp, index) => (
                      <span key={index} className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm">
                        {comp}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button className="cyber-button flex-1 py-3">
                      Get Started
                    </button>
                    <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors">
                      View Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our AI services today and experience the power of artificial intelligence in your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}