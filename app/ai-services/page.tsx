'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart3, 
  Box, 
  Mic, 
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  DollarSign,
  Award,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Cpu,
  Globe,
  Database,
  Settings,
  Lock,
  Mail,
  Calendar,
  Code,
  Image,
  Video,
  Music,
  Camera,
  Headphones,
  Monitor,
  Smartphone,
  Laptop,
  Server,
  Cloud,
  Wifi,
  Bluetooth,
  Battery,
  HardDrive,
  MemoryStick,
  CpuIcon,
  HardDriveIcon,
  Network,
  Router,
  Switch,
  Hub,
  Terminal,
  Command,
  TerminalSquare,
  TerminalIcon,
  TerminalSquareIcon,
  TerminalSquareIcon as TerminalIcon2,
  TerminalSquareIcon as TerminalIcon3,
  TerminalSquareIcon as TerminalIcon4,
  TerminalSquareIcon as TerminalIcon5,
  TerminalSquareIcon as TerminalIcon6,
  TerminalSquareIcon as TerminalIcon7,
  TerminalSquareIcon as TerminalIcon8,
  TerminalSquareIcon as TerminalIcon9,
  TerminalSquareIcon as TerminalIcon10
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
  trialDays: number;
  rating: number;
  reviews: number;
  launchDate: string;
  integrations: string[];
  useCases: string[];
  benefits: string[];
  pricingTiers: {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
  technicalSpecs: {
    accuracy: string;
    processingSpeed: string;
    languages: string[];
    dataTypes: string[];
  };
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices: AIService[] = [
    {
      id: '1',
      icon: Brain,
      title: 'AI Voice Assistant Platform',
      description: 'Build custom voice assistants with natural language understanding, multi-language support, and enterprise integration capabilities.',
      features: [
        'Natural Language Processing (NLP)',
        'Multi-language support (50+ languages)',
        'Custom wake word training',
        'Voice biometric authentication',
        'Real-time speech recognition',
        'Context-aware conversations',
        'API integration',
        'Custom skill development',
        'Analytics and insights',
        'Enterprise security'
      ],
      price: 'Starting at $299/month',
      category: 'Voice AI',
      popular: true,
      trialDays: 14,
      rating: 4.9,
      reviews: 1247,
      launchDate: '2024-01-15',
      integrations: ['Amazon Alexa', 'Google Assistant', 'Microsoft Cortana', 'Slack', 'Teams', 'WhatsApp'],
      useCases: ['Customer service automation', 'Smart home control', 'Voice commerce', 'Accessibility solutions'],
      benefits: ['Reduce support costs by 60%', 'Improve accessibility by 80%', 'Increase engagement by 45%'],
      pricingTiers: [
        { name: 'Starter', price: '$199/month', features: ['Up to 1,000 interactions', 'Basic NLP', '5 languages'] },
        { name: 'Professional', price: '$299/month', features: ['Up to 10,000 interactions', 'Advanced NLP', '50+ languages', 'Custom training'], popular: true },
        { name: 'Enterprise', price: '$599/month', features: ['Unlimited interactions', 'Custom models', 'White-label', 'Dedicated support'] }
      ],
      technicalSpecs: {
        accuracy: '99.2%',
        processingSpeed: '< 200ms',
        languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic'],
        dataTypes: ['Audio', 'Text', 'Voice', 'Conversation logs']
      }
    },
    {
      id: '2',
      icon: Eye,
      title: 'AI Computer Vision Suite',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis with real-time processing.',
      features: [
        'Object detection and recognition',
        'Facial recognition and analysis',
        'OCR and text extraction',
        'Image classification',
        'Real-time video analysis',
        'Custom model training',
        'Edge computing support',
        'API integration',
        'Batch processing',
        'Quality assessment'
      ],
      price: 'Starting at $399/month',
      category: 'Computer Vision',
      popular: true,
      trialDays: 21,
      rating: 4.8,
      reviews: 892,
      launchDate: '2023-11-20',
      integrations: ['OpenCV', 'TensorFlow', 'PyTorch', 'AWS Rekognition', 'Google Vision', 'Azure Computer Vision'],
      useCases: ['Quality control', 'Security monitoring', 'Medical imaging', 'Autonomous vehicles'],
      benefits: ['Improve accuracy by 95%', 'Reduce processing time by 70%', 'Enable real-time analysis'],
      pricingTiers: [
        { name: 'Basic', price: '$199/month', features: ['1,000 images/month', 'Basic recognition', 'Standard models'] },
        { name: 'Professional', price: '$399/month', features: ['10,000 images/month', 'Advanced recognition', 'Custom models', 'Real-time processing'], popular: true },
        { name: 'Enterprise', price: '$799/month', features: ['Unlimited images', 'Custom training', 'Edge deployment', 'Dedicated support'] }
      ],
      technicalSpecs: {
        accuracy: '98.5%',
        processingSpeed: '< 100ms',
        languages: ['Python', 'JavaScript', 'C++', 'Java'],
        dataTypes: ['Images', 'Videos', 'Live streams', 'Batch files']
      }
    },
    {
      id: '3',
      icon: BarChart3,
      title: 'AI Predictive Analytics Engine',
      description: 'Powerful predictive analytics platform with machine learning models for forecasting, trend analysis, and business intelligence.',
      features: [
        'Time series forecasting',
        'Predictive modeling',
        'Anomaly detection',
        'Trend analysis',
        'Risk assessment',
        'Demand forecasting',
        'Customer behavior prediction',
        'Market analysis',
        'Automated insights',
        'Real-time predictions'
      ],
      price: 'Starting at $499/month',
      category: 'Analytics',
      popular: false,
      trialDays: 30,
      rating: 4.7,
      reviews: 567,
      launchDate: '2023-09-10',
      integrations: ['Tableau', 'Power BI', 'Salesforce', 'HubSpot', 'Google Analytics', 'AWS'],
      useCases: ['Sales forecasting', 'Inventory optimization', 'Risk management', 'Market analysis'],
      benefits: ['Improve forecast accuracy by 40%', 'Reduce inventory costs by 25%', 'Increase revenue by 15%'],
      pricingTiers: [
        { name: 'Starter', price: '$299/month', features: ['Basic forecasting', '5 data sources', 'Monthly reports'] },
        { name: 'Professional', price: '$499/month', features: ['Advanced models', 'Unlimited sources', 'Real-time predictions', 'Custom dashboards'] },
        { name: 'Enterprise', price: '$999/month', features: ['Custom models', 'White-label', 'Dedicated support', 'SLA guarantees'] }
      ],
      technicalSpecs: {
        accuracy: '94.3%',
        processingSpeed: '< 500ms',
        languages: ['Python', 'R', 'SQL', 'JavaScript'],
        dataTypes: ['Time series', 'Structured data', 'Unstructured data', 'Real-time streams']
      }
    },
    {
      id: '4',
      icon: MessageSquare,
      title: 'AI Customer Support Automation',
      description: 'Intelligent customer support system with chatbots, sentiment analysis, and automated ticket routing for 24/7 assistance.',
      features: [
        'AI-powered chatbots',
        'Sentiment analysis',
        'Automated ticket routing',
        'Knowledge base integration',
        'Multi-channel support',
        'Human handoff',
        'Conversation analytics',
        'Custom training',
        'API integration',
        'Mobile app support'
      ],
      price: 'Starting at $199/month',
      category: 'Customer Support',
      popular: true,
      trialDays: 14,
      rating: 4.8,
      reviews: 1156,
      launchDate: '2023-12-05',
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams', 'WhatsApp'],
      useCases: ['Customer service', 'Lead qualification', 'FAQ automation', 'Order support'],
      benefits: ['Reduce support costs by 50%', 'Improve response time by 90%', 'Increase satisfaction by 35%'],
      pricingTiers: [
        { name: 'Starter', price: '$99/month', features: ['Up to 1,000 conversations', 'Basic chatbot', 'Email support'] },
        { name: 'Professional', price: '$199/month', features: ['Up to 10,000 conversations', 'Advanced AI', 'Multi-channel', 'Analytics'], popular: true },
        { name: 'Enterprise', price: '$399/month', features: ['Unlimited conversations', 'Custom training', 'Advanced integrations', 'Dedicated support'] }
      ],
      technicalSpecs: {
        accuracy: '96.8%',
        processingSpeed: '< 150ms',
        languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'],
        dataTypes: ['Text', 'Voice', 'Images', 'Conversation logs']
      }
    },
    {
      id: '5',
      icon: Zap,
      title: 'AI Workflow Automation Engine',
      description: 'Intelligent workflow automation platform that learns from your processes and automates repetitive tasks with decision-making capabilities.',
      features: [
        'Process mining and discovery',
        'Intelligent automation',
        'Decision tree modeling',
        'Exception handling',
        'Process optimization',
        'Integration orchestration',
        'Performance monitoring',
        'Custom workflows',
        'API automation',
        'Document processing'
      ],
      price: 'Starting at $299/month',
      category: 'Automation',
      popular: false,
      trialDays: 21,
      rating: 4.6,
      reviews: 743,
      launchDate: '2023-10-15',
      integrations: ['Zapier', 'Microsoft Power Automate', 'UiPath', 'Automation Anywhere', 'Salesforce', 'HubSpot'],
      useCases: ['Process automation', 'Data processing', 'Document workflows', 'Approval processes'],
      benefits: ['Reduce manual work by 80%', 'Improve process speed by 60%', 'Eliminate errors by 95%'],
      pricingTiers: [
        { name: 'Basic', price: '$199/month', features: ['Up to 10 workflows', 'Basic automation', 'Email notifications'] },
        { name: 'Professional', price: '$299/month', features: ['Up to 50 workflows', 'Advanced AI', 'Custom integrations', 'Analytics'], popular: true },
        { name: 'Enterprise', price: '$599/month', features: ['Unlimited workflows', 'Custom development', 'Dedicated support', 'SLA guarantees'] }
      ],
      technicalSpecs: {
        accuracy: '97.2%',
        processingSpeed: '< 300ms',
        languages: ['Python', 'JavaScript', 'Java', 'C#'],
        dataTypes: ['Structured data', 'Documents', 'Images', 'APIs']
      }
    },
    {
      id: '6',
      icon: FileText,
      title: 'AI Document Processing Suite',
      description: 'Intelligent document processing platform with OCR, data extraction, and automated document classification for enterprise workflows.',
      features: [
        'Advanced OCR technology',
        'Intelligent data extraction',
        'Document classification',
        'Form processing',
        'Invoice automation',
        'Contract analysis',
        'Compliance checking',
        'Batch processing',
        'API integration',
        'Custom templates'
      ],
      price: 'Starting at $249/month',
      category: 'Document AI',
      popular: true,
      trialDays: 14,
      rating: 4.7,
      reviews: 634,
      launchDate: '2023-11-10',
      integrations: ['Adobe Acrobat', 'Microsoft Office', 'Google Workspace', 'Box', 'Dropbox', 'SharePoint'],
      useCases: ['Invoice processing', 'Contract analysis', 'Form automation', 'Compliance monitoring'],
      benefits: ['Reduce processing time by 85%', 'Improve accuracy by 92%', 'Eliminate manual data entry'],
      pricingTiers: [
        { name: 'Starter', price: '$149/month', features: ['1,000 documents/month', 'Basic OCR', 'Standard templates'] },
        { name: 'Professional', price: '$249/month', features: ['10,000 documents/month', 'Advanced AI', 'Custom templates', 'API access'], popular: true },
        { name: 'Enterprise', price: '$499/month', features: ['Unlimited documents', 'Custom models', 'White-label', 'Dedicated support'] }
      ],
      technicalSpecs: {
        accuracy: '99.1%',
        processingSpeed: '< 200ms',
        languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'],
        dataTypes: ['PDFs', 'Images', 'Scanned documents', 'Forms']
      }
    },
    {
      id: '7',
      icon: Target,
      title: 'AI Lead Generation Platform',
      description: 'Intelligent lead generation system with AI-powered prospecting, email sequences, and automated follow-ups for sales teams.',
      features: [
        'AI-powered lead scoring',
        'Automated prospecting',
        'Email sequence automation',
        'Social media monitoring',
        'Intent detection',
        'Contact enrichment',
        'CRM integration',
        'A/B testing',
        'Performance analytics',
        'Compliance management'
      ],
      price: 'Starting at $179/month',
      category: 'Sales AI',
      popular: false,
      trialDays: 14,
      rating: 4.5,
      reviews: 456,
      launchDate: '2024-03-01',
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'LinkedIn', 'Twitter', 'Facebook'],
      useCases: ['Lead generation', 'Sales prospecting', 'Email marketing', 'Social selling'],
      benefits: ['Increase qualified leads by 60%', 'Reduce prospecting time by 70%', 'Improve conversion by 40%'],
      pricingTiers: [
        { name: 'Starter', price: '$99/month', features: ['Up to 1,000 leads', 'Basic automation', 'Email sequences'] },
        { name: 'Professional', price: '$179/month', features: ['Up to 10,000 leads', 'Advanced AI', 'Social monitoring', 'Analytics'], popular: true },
        { name: 'Enterprise', price: '$359/month', features: ['Unlimited leads', 'Custom models', 'Advanced integrations', 'Dedicated support'] }
      ],
      technicalSpecs: {
        accuracy: '89.7%',
        processingSpeed: '< 250ms',
        languages: ['English', 'Spanish', 'French', 'German'],
        dataTypes: ['Contact data', 'Social profiles', 'Email content', 'Web behavior']
      }
    },
    {
      id: '8',
      icon: Shield,
      title: 'AI Cybersecurity Intelligence',
      description: 'Advanced AI-powered cybersecurity platform with threat detection, vulnerability assessment, and automated incident response.',
      features: [
        'Threat detection and analysis',
        'Vulnerability scanning',
        'Behavioral analysis',
        'Incident response automation',
        'Security orchestration',
        'Compliance monitoring',
        'Risk assessment',
        'Threat intelligence',
        'SIEM integration',
        'Forensic analysis'
      ],
      price: 'Starting at $599/month',
      category: 'Security AI',
      popular: true,
      trialDays: 30,
      rating: 4.9,
      reviews: 789,
      launchDate: '2023-08-20',
      integrations: ['Splunk', 'QRadar', 'ArcSight', 'CrowdStrike', 'Palo Alto', 'Cisco'],
      useCases: ['Threat detection', 'Incident response', 'Compliance monitoring', 'Risk management'],
      benefits: ['Reduce false positives by 80%', 'Improve detection speed by 90%', 'Prevent 99% of attacks'],
      pricingTiers: [
        { name: 'Basic', price: '$299/month', features: ['Basic threat detection', 'Email alerts', 'Standard reports'] },
        { name: 'Professional', price: '$599/month', features: ['Advanced AI detection', 'Automated response', 'Compliance monitoring', '24/7 support'], popular: true },
        { name: 'Enterprise', price: '$1,199/month', features: ['Custom models', 'Dedicated SOC', 'White-label', 'SLA guarantees'] }
      ],
      technicalSpecs: {
        accuracy: '99.5%',
        processingSpeed: '< 100ms',
        languages: ['Python', 'Java', 'C++', 'Go'],
        dataTypes: ['Logs', 'Network traffic', 'Email', 'Files']
      }
    },
    {
      id: '9',
      icon: Image,
      title: 'AI Content Generation Studio',
      description: 'Comprehensive AI content creation platform for text, images, videos, and audio with brand consistency and quality optimization.',
      features: [
        'AI text generation',
        'Image creation and editing',
        'Video production',
        'Audio generation',
        'Brand consistency',
        'Content optimization',
        'Multi-language support',
        'Template library',
        'Collaboration tools',
        'Performance analytics'
      ],
      price: 'Starting at $149/month',
      category: 'Content AI',
      popular: true,
      trialDays: 14,
      rating: 4.6,
      reviews: 923,
      launchDate: '2024-02-15',
      integrations: ['Canva', 'Adobe Creative Suite', 'WordPress', 'Shopify', 'Mailchimp', 'Hootsuite'],
      useCases: ['Content marketing', 'Social media', 'E-commerce', 'Blog writing'],
      benefits: ['Reduce content creation time by 75%', 'Improve quality by 60%', 'Increase engagement by 45%'],
      pricingTiers: [
        { name: 'Starter', price: '$79/month', features: ['Basic content generation', '10 templates', 'Standard quality'] },
        { name: 'Professional', price: '$149/month', features: ['Advanced AI', 'Unlimited templates', 'High quality', 'Brand customization'], popular: true },
        { name: 'Enterprise', price: '$299/month', features: ['Custom models', 'White-label', 'Advanced analytics', 'Dedicated support'] }
      ],
      technicalSpecs: {
        accuracy: '92.4%',
        processingSpeed: '< 500ms',
        languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'],
        dataTypes: ['Text', 'Images', 'Videos', 'Audio', 'Templates']
      }
    },
    {
      id: '10',
      icon: Database,
      title: 'AI Data Intelligence Platform',
      description: 'Advanced data processing and analysis platform with AI-powered insights, data quality management, and automated reporting.',
      features: [
        'Data quality assessment',
        'Automated data cleaning',
        'Intelligent data mapping',
        'Anomaly detection',
        'Data lineage tracking',
        'Automated reporting',
        'Real-time analytics',
        'Data governance',
        'API integration',
        'Custom dashboards'
      ],
      price: 'Starting at $399/month',
      category: 'Data AI',
      popular: false,
      trialDays: 21,
      rating: 4.7,
      reviews: 567,
      launchDate: '2023-12-20',
      integrations: ['Snowflake', 'BigQuery', 'Redshift', 'Databricks', 'Tableau', 'Power BI'],
      useCases: ['Data quality', 'Business intelligence', 'Data governance', 'Analytics automation'],
      benefits: ['Improve data quality by 85%', 'Reduce processing time by 70%', 'Increase insights by 90%'],
      pricingTiers: [
        { name: 'Starter', price: '$199/month', features: ['Basic data processing', '5 data sources', 'Standard reports'] },
        { name: 'Professional', price: '$399/month', features: ['Advanced AI', 'Unlimited sources', 'Real-time analytics', 'Custom dashboards'], popular: true },
        { name: 'Enterprise', price: '$799/month', features: ['Custom models', 'White-label', 'Advanced governance', 'Dedicated support'] }
      ],
      technicalSpecs: {
        accuracy: '96.8%',
        processingSpeed: '< 400ms',
        languages: ['Python', 'SQL', 'R', 'JavaScript'],
        dataTypes: ['Structured data', 'Unstructured data', 'Real-time streams', 'Batch files']
      }
    }
  ];

  const categories = ['All', 'Voice AI', 'Computer Vision', 'Analytics', 'Customer Support', 'Automation', 'Document AI', 'Sales AI', 'Security AI', 'Content AI', 'Data AI'];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { icon: Users, value: '25,000+', label: 'Active Users', description: 'Growing AI community' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime', description: 'Reliable AI services' },
    { icon: Star, value: '4.8/5', label: 'Rating', description: 'Highly rated solutions' },
    { icon: Clock, value: '24/7', label: 'Support', description: 'Always here to help' }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology',
    'Real-time processing and analysis',
    'Customizable and scalable solutions',
    'Enterprise-grade security and compliance'
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including voice assistants, computer vision, predictive analytics, and automation. Enterprise-grade AI solutions with 24/7 support." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, voice AI, predictive analytics, automation, AI consulting" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for modern businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered solutions for modern businesses. Transform your operations with cutting-edge artificial intelligence, 
              machine learning, and automation technologies.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
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
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
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

        {/* AI Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All AI Services' : `${selectedCategory} Services`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group ${
                  service.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 ml-2">{service.rating} ({service.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 5 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 5} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Technical Specs:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-700/50 rounded p-2">
                        <div className="text-gray-400">Accuracy</div>
                        <div className="text-cyan-400 font-semibold">{service.technicalSpecs.accuracy}</div>
                      </div>
                      <div className="bg-slate-700/50 rounded p-2">
                        <div className="text-gray-400">Speed</div>
                        <div className="text-cyan-400 font-semibold">{service.technicalSpecs.processingSpeed}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                    }`}>
                      Start {service.trialDays}-Day Free Trial
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 bg-slate-800 text-white hover:bg-slate-700 border border-slate-600">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our AI Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your AI requirements and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Brain className="w-5 h-5" />
                  Get Free Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View Pricing
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