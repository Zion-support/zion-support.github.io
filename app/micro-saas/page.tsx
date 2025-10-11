'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  MessageSquare,
  FileText,
  Target,
  Shield,
  Cloud,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Settings,
  Heart,
  DollarSign,
  Box,
  Monitor,
  Link as LinkIcon,
  Server,
  Package,
  Mic,
  Workflow,
  Eye,
  Wifi,
  ShoppingCart,
  Brain,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Lock,
  Calendar,
  Headphones,
  Code,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Advanced data connectors',
        'Automated report generation',
        'Multi-tenant architecture',
        'API integration',
        'Mobile app access'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting',
        'ROI tracking'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart3,
      link: 'https://analytics.ziontechgroup.com'
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'GPT-4 powered AI',
        'Multi-channel support',
        'Advanced sentiment analysis',
        'Automated ticket routing',
        'Live agent handoff',
        'Multi-language support',
        'CRM integration',
        'Analytics dashboard'
      ],
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation',
        'Cost reduction'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare,
      link: 'https://chat.ziontechgroup.com'
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial analytics.',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: [
        'AI-powered invoice generation',
        'Automated recurring billing',
        'Multi-currency support',
        'Payment tracking',
        'Tax calculation',
        'Client portal',
        'Expense tracking',
        'Financial reporting'
      ],
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices',
        'Better cash flow'
      ],
      category: 'Finance',
      popular: true,
      icon: FileText,
      link: 'https://invoices.ziontechgroup.com'
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated nurturing.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI-powered lead scoring',
        'Multi-channel lead capture',
        'Automated lead nurturing',
        'CRM integration',
        'Advanced analytics',
        'A/B testing',
        'Email marketing',
        'Social media integration'
      ],
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization',
        'Time savings'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target,
      link: 'https://leads.ziontechgroup.com'
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Real-time threat monitoring',
        'Vulnerability scanning',
        'Incident response',
        'Security analytics',
        'Compliance reporting',
        'Employee training',
        'Firewall management',
        'Backup monitoring'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced risk exposure',
        'Compliance assurance',
        'Peace of mind',
        'Cost-effective protection'
      ],
      category: 'Security',
      popular: false,
      icon: Shield,
      link: 'https://security.ziontechgroup.com'
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection and version control.',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Automated backups',
        'Cross-platform sync',
        'Version control',
        'Disaster recovery',
        'Data encryption',
        'Compliance support',
        'File sharing',
        'Mobile access'
      ],
      benefits: [
        'Data protection',
        'Business continuity',
        'Cost-effective storage',
        'Easy recovery',
        'Secure sharing'
      ],
      category: 'Storage',
      popular: false,
      icon: Cloud,
      link: 'https://vault.ziontechgroup.com'
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'Intelligent business process automation platform that streamlines operations and reduces manual work.',
      price: '$129/month',
      marketPrice: '$250-800/month',
      features: [
        'Visual workflow builder',
        'AI-powered optimization',
        'Integration capabilities',
        'Task automation',
        'Approval workflows',
        'Performance analytics',
        'Custom triggers',
        'Team collaboration'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation',
        'Team productivity'
      ],
      category: 'Automation',
      popular: true,
      icon: Workflow,
      link: 'https://workflow.ziontechgroup.com'
    },
    {
      id: 'zion-project-manager',
      name: 'Zion Project Manager',
      description: 'AI-powered project management platform with intelligent resource allocation and progress tracking.',
      price: '$79/month',
      marketPrice: '$150-500/month',
      features: [
        'AI project planning',
        'Resource optimization',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Budget management',
        'Risk assessment',
        'Reporting dashboard'
      ],
      benefits: [
        'Better project outcomes',
        'Resource optimization',
        'Timeline accuracy',
        'Team coordination',
        'Cost control'
      ],
      category: 'Project Management',
      popular: false,
      icon: Calendar,
      link: 'https://projects.ziontechgroup.com'
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing materials.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI content generation',
        'Multi-platform publishing',
        'SEO optimization',
        'Brand voice consistency',
        'Content calendar',
        'Performance analytics',
        'Team collaboration',
        'Template library'
      ],
      benefits: [
        'Save 80% content time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform reach',
        'Content performance'
      ],
      category: 'Content',
      popular: true,
      icon: FileText,
      link: 'https://content.ziontechgroup.com'
    },
    {
      id: 'zion-crm-assistant',
      name: 'Zion CRM Assistant',
      description: 'Intelligent customer relationship management with AI-powered insights and automated follow-ups.',
      price: '$119/month',
      marketPrice: '$250-700/month',
      features: [
        'AI-powered lead scoring',
        'Automated follow-ups',
        'Sales forecasting',
        'Customer segmentation',
        'Pipeline management',
        'Email integration',
        'Mobile app',
        'Advanced analytics'
      ],
      benefits: [
        'Increase sales by 40%',
        'Better lead management',
        'Automated nurturing',
        'Sales insights',
        'Customer retention'
      ],
      category: 'CRM',
      popular: true,
      icon: Users,
      link: 'https://crm.ziontechgroup.com'
    },
    {
      id: 'zion-email-marketing',
      name: 'Zion Email Marketing',
      description: 'Advanced email marketing platform with AI-powered personalization and automated campaigns.',
      price: '$69/month',
      marketPrice: '$150-400/month',
      features: [
        'AI personalization',
        'Automated campaigns',
        'A/B testing',
        'List segmentation',
        'Email templates',
        'Analytics dashboard',
        'Integration capabilities',
        'Compliance tools'
      ],
      benefits: [
        'Higher open rates',
        'Better engagement',
        'Automated campaigns',
        'Personalized content',
        'ROI tracking'
      ],
      category: 'Marketing',
      popular: false,
      icon: Mail,
      link: 'https://email.ziontechgroup.com'
    },
    {
      id: 'zion-inventory-manager',
      name: 'Zion Inventory Manager',
      description: 'Smart inventory management system with AI-powered demand forecasting and automated reordering.',
      price: '$89/month',
      marketPrice: '$200-600/month',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost tracking',
        'Reporting dashboard',
        'Mobile app'
      ],
      benefits: [
        'Reduce stockouts by 60%',
        'Optimize inventory levels',
        'Cost reduction',
        'Automated processes',
        'Better forecasting'
      ],
      category: 'Inventory',
      popular: false,
      icon: Package,
      link: 'https://inventory.ziontechgroup.com'
    },
    {
      id: 'zion-ai-quantum-analytics',
      name: 'Zion AI Quantum Analytics Pro',
      description: 'Revolutionary quantum-powered analytics platform for complex data analysis and optimization.',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Quantum Data Processing',
        'Complex Optimization',
        'Advanced Pattern Recognition',
        'Real-time Insights',
        'Quantum Machine Learning',
        'Exponential Speed Processing',
        'Multi-dimensional Analysis',
        'Quantum Neural Networks'
      ],
      benefits: [
        'Exponential processing speed',
        'Complex problem solving',
        'Advanced analytics',
        'Future-proof technology',
        'Revolutionary insights'
      ],
      category: 'Analytics',
      popular: true,
      icon: Brain,
      link: 'https://quantum-analytics.ziontechgroup.com'
    },
    {
      id: 'zion-ai-holographic-workspace',
      name: 'Zion AI Holographic Workspace',
      description: 'Immersive 3D workspace platform with AI-powered collaboration and visualization tools.',
      price: '$199/month',
      marketPrice: '$350-1200/month',
      features: [
        '3D Virtual Workspace',
        'AI Collaboration Tools',
        'Holographic Presentations',
        'Spatial Computing',
        'Real-time Rendering',
        'AR/VR Integration',
        'Gesture Recognition',
        'Multi-user Collaboration'
      ],
      benefits: [
        'Immersive collaboration',
        'Enhanced productivity',
        'Cutting-edge interface',
        'Remote work revolution',
        'Creative possibilities'
      ],
      category: 'Productivity',
      popular: true,
      icon: Eye,
      link: 'https://holographic.ziontechgroup.com'
    },
    {
      id: 'zion-ai-edge-intelligence',
      name: 'Zion AI Edge Intelligence',
      description: 'Distributed AI platform for edge computing with real-time processing and decision making.',
      price: '$149/month',
      marketPrice: '$250-800/month',
      features: [
        'Edge AI Processing',
        'Real-time Analytics',
        'Offline Intelligence',
        'Distributed Learning',
        'Low Latency Response',
        'Bandwidth Optimization',
        'Device Management',
        'Privacy-Preserving AI'
      ],
      benefits: [
        'Ultra-low latency',
        'Reduced bandwidth costs',
        'Enhanced privacy',
        'Real-time processing',
        'Offline capability'
      ],
      category: 'Infrastructure',
      popular: false,
      icon: Cpu,
      link: 'https://edge-ai.ziontechgroup.com'
    },
    {
      id: 'zion-ai-quantum-security',
      name: 'Zion AI Quantum Security',
      description: 'Next-generation quantum-resistant security platform for future-proof protection.',
      price: '$179/month',
      marketPrice: '$300-1000/month',
      features: [
        'Quantum Encryption',
        'Post-Quantum Security',
        'Advanced Threat Detection',
        'Zero-Trust Architecture',
        'Quantum Key Distribution',
        'Military-Grade Protection',
        'Behavioral Analytics',
        'Real-time Monitoring'
      ],
      benefits: [
        'Quantum-resistant security',
        'Future-proof protection',
        'Advanced threat detection',
        'Military-grade encryption',
        'Peace of mind'
      ],
      category: 'Security',
      popular: true,
      icon: Shield,
      link: 'https://quantum-security.ziontechgroup.com'
    },
    {
      id: 'zion-ai-neural-database',
      name: 'Zion AI Neural Database Pro',
      description: 'Self-optimizing database platform with AI-powered performance tuning and predictive analytics.',
      price: '$129/month',
      marketPrice: '$200-600/month',
      features: [
        'Self-Optimizing Queries',
        'Predictive Indexing',
        'Automatic Scaling',
        'Neural Optimization',
        'Intelligent Caching',
        'Performance Analytics',
        'Adaptive Tuning',
        'Real-time Optimization'
      ],
      benefits: [
        'Self-optimizing performance',
        'Reduced maintenance',
        'Intelligent scaling',
        'Predictive optimization',
        'Cost savings'
      ],
      category: 'Data',
      popular: false,
      icon: Database,
      link: 'https://neural-db.ziontechgroup.com'
    },
    {
      id: 'zion-ai-energy-optimizer',
      name: 'Zion AI Energy Optimizer',
      description: 'AI-powered energy management platform for reducing costs and improving sustainability.',
      price: '$99/month',
      marketPrice: '$150-500/month',
      features: [
        'Energy Monitoring',
        'Cost Optimization',
        'Predictive Analytics',
        'Automated Controls',
        'Sustainability Reporting',
        'Carbon Footprint Tracking',
        'Smart Grid Integration',
        'Renewable Energy Optimization'
      ],
      benefits: [
        'Reduced energy costs',
        'Better sustainability',
        'Automated optimization',
        'Environmental impact',
        'Cost savings'
      ],
      category: 'Energy',
      popular: false,
      icon: Zap,
      link: 'https://energy-ai.ziontechgroup.com'
    },
    {
      id: 'zion-ai-supply-chain-intelligence',
      name: 'Zion AI Supply Chain Intelligence',
      description: 'Advanced supply chain optimization platform with AI-powered forecasting and risk management.',
      price: '$219/month',
      marketPrice: '$400-1200/month',
      features: [
        'Demand Forecasting',
        'Risk Assessment',
        'Supplier Optimization',
        'Cost Analysis',
        'Performance Tracking',
        'Real-time Monitoring',
        'Blockchain Integration',
        'Sustainability Metrics'
      ],
      benefits: [
        'Reduced costs',
        'Better inventory management',
        'Improved efficiency',
        'Risk mitigation',
        'Supply chain visibility'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Target,
      link: 'https://supply-chain.ziontechgroup.com'
    },
    {
      id: 'zion-ai-talent-intelligence',
      name: 'Zion AI Talent Intelligence',
      description: 'AI-powered talent acquisition and management platform with advanced matching algorithms.',
      price: '$189/month',
      marketPrice: '$300-800/month',
      features: [
        'AI Candidate Matching',
        'Skills Assessment',
        'Performance Prediction',
        'Retention Analytics',
        'Diversity Optimization',
        'Bias Detection',
        'Interview Automation',
        'Cultural Fit Analysis'
      ],
      benefits: [
        'Better talent matches',
        'Reduced hiring time',
        'Improved retention',
        'Diversity optimization',
        'Reduced bias'
      ],
      category: 'HR',
      popular: true,
      icon: Users,
      link: 'https://talent-ai.ziontechgroup.com'
    },
    {
      id: 'zion-ai-global-translator',
      name: 'Zion AI Global Translator',
      description: 'Advanced translation platform with AI-powered context understanding and cultural adaptation.',
      price: '$79/month',
      marketPrice: '$120-400/month',
      features: [
        'Context-Aware Translation',
        'Cultural Adaptation',
        'Real-time Translation',
        'Voice Translation',
        'Document Processing',
        'Quality Scoring',
        'Multi-language Support',
        'Industry-specific Translation'
      ],
      benefits: [
        'Accurate translations',
        'Cultural sensitivity',
        'Real-time processing',
        'Global communication',
        'Professional quality'
      ],
      category: 'Translation',
      popular: false,
      icon: Globe,
      link: 'https://translator.ziontechgroup.com'
    },
    {
      id: 'zion-ai-legal-assistant',
      name: 'Zion AI Legal Assistant',
      description: 'AI-powered legal document analysis and contract management platform.',
      price: '$249/month',
      marketPrice: '$400-1200/month',
      features: [
        'Contract Analysis',
        'Legal Document Review',
        'Compliance Checking',
        'Risk Assessment',
        'Automated Summaries',
        'Version Comparison',
        'Legal Research',
        'Case Law Analysis'
      ],
      benefits: [
        'Faster legal reviews',
        'Reduced legal costs',
        'Better compliance',
        'Risk mitigation',
        'Time savings'
      ],
      category: 'Legal',
      popular: false,
      icon: FileText,
      link: 'https://legal-ai.ziontechgroup.com'
    },
    {
      id: 'zion-ai-health-monitor',
      name: 'Zion AI Health Monitor',
      description: 'AI-powered health monitoring and wellness platform with predictive health analytics.',
      price: '$159/month',
      marketPrice: '$250-700/month',
      features: [
        'Health Monitoring',
        'Predictive Analytics',
        'Wellness Tracking',
        'Risk Assessment',
        'Personalized Recommendations',
        'Medical Integration',
        'Vital Signs Analysis',
        'Health Trend Prediction'
      ],
      benefits: [
        'Better health outcomes',
        'Preventive care',
        'Personalized insights',
        'Cost savings',
        'Early detection'
      ],
      category: 'Health',
      popular: true,
      icon: Heart,
      link: 'https://health-ai.ziontechgroup.com'
    },
    {
      id: 'zion-ai-market-intelligence',
      name: 'Zion AI Market Intelligence',
      description: 'Advanced market analysis platform with AI-powered insights and trend prediction.',
      price: '$199/month',
      marketPrice: '$350-1000/month',
      features: [
        'Market Analysis',
        'Trend Prediction',
        'Competitor Intelligence',
        'Risk Assessment',
        'Investment Insights',
        'Real-time Data',
        'Sentiment Analysis',
        'Economic Forecasting'
      ],
      benefits: [
        'Better market insights',
        'Improved decision making',
        'Risk mitigation',
        'Competitive advantage',
        'Investment optimization'
      ],
      category: 'Analytics',
      popular: false,
      icon: BarChart3,
      link: 'https://market-ai.ziontechgroup.com'
    },
    {
      id: 'zion-ai-process-optimizer',
      name: 'Zion AI Process Optimizer',
      description: 'Intelligent process optimization platform with AI-powered workflow analysis and improvement.',
      price: '$139/month',
      marketPrice: '$250-600/month',
      features: [
        'Process Mining',
        'Workflow Optimization',
        'Bottleneck Detection',
        'Automated Improvements',
        'Performance Analytics',
        'ROI Tracking',
        'Resource Optimization',
        'Continuous Improvement'
      ],
      benefits: [
        'Process efficiency',
        'Cost reduction',
        'Automated optimization',
        'Better performance',
        'Scalable improvements'
      ],
      category: 'Automation',
      popular: false,
      icon: Settings,
      link: 'https://process-ai.ziontechgroup.com'
    },
    {
      id: 'zion-ai-infrastructure-monitor',
      name: 'Zion AI Infrastructure Monitor',
      description: 'Advanced infrastructure monitoring platform with AI-powered anomaly detection and optimization.',
      price: '$119/month',
      marketPrice: '$200-500/month',
      features: [
        'Real-time Monitoring',
        'Anomaly Detection',
        'Predictive Maintenance',
        'Performance Optimization',
        'Automated Alerts',
        'Capacity Planning',
        'Root Cause Analysis',
        'Performance Tuning'
      ],
      benefits: [
        'Improved uptime',
        'Faster issue resolution',
        'Proactive maintenance',
        'Cost optimization',
        'Better performance'
      ],
      category: 'Monitoring',
      popular: false,
      icon: Monitor,
      link: 'https://infrastructure-ai.ziontechgroup.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Finance', name: 'Finance', count: services.filter(s => s.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: services.filter(s => s.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: services.filter(s => s.category === 'Storage').length },
    { id: 'Automation', name: 'Automation', count: services.filter(s => s.category === 'Automation').length },
    { id: 'Project Management', name: 'Project Management', count: services.filter(s => s.category === 'Project Management').length },
    { id: 'Content', name: 'Content', count: services.filter(s => s.category === 'Content').length },
    { id: 'CRM', name: 'CRM', count: services.filter(s => s.category === 'CRM').length },
    { id: 'Inventory', name: 'Inventory', count: services.filter(s => s.category === 'Inventory').length },
    { id: 'Productivity', name: 'Productivity', count: services.filter(s => s.category === 'Productivity').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'Infrastructure').length },
    { id: 'Energy', name: 'Energy', count: services.filter(s => s.category === 'Energy').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: services.filter(s => s.category === 'Supply Chain').length },
    { id: 'HR', name: 'HR', count: services.filter(s => s.category === 'HR').length },
    { id: 'Translation', name: 'Translation', count: services.filter(s => s.category === 'Translation').length },
    { id: 'Legal', name: 'Legal', count: services.filter(s => s.category === 'Legal').length },
    { id: 'Health', name: 'Health', count: services.filter(s => s.category === 'Health').length },
    { id: 'Data', name: 'Data', count: services.filter(s => s.category === 'Data').length },
    { id: 'Monitoring', name: 'Monitoring', count: services.filter(s => s.category === 'Monitoring').length }
  ];

  const filteredServices = services.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Business Software Tools</title>
        <meta name="description" content="Comprehensive micro SaaS solutions including analytics, CRM, project management, and automation tools for small to medium businesses." />
        <meta name="keywords" content="micro saas, business software, analytics, CRM, project management, automation, small business tools" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Powerful micro SaaS tools to grow your business" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Powerful Business Tools for Modern Companies
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of micro SaaS solutions designed to streamline operations, 
              boost productivity, and drive growth for small to medium businesses. Each tool is built with 
              cutting-edge technology and user-friendly interfaces.
            </p>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Try Demo
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Choose from our comprehensive suite of micro SaaS solutions or get a custom solution 
                built specifically for your business needs. Contact our experts for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
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

export default MicroSaasPage;
      popular: true,
      icon: BarChart3,
      link: 'https://analytics.ziontechgroup.com'
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'GPT-4 powered AI',
        'Multi-channel support',
        'Advanced sentiment analysis',
        'Automated ticket routing',
        'Live agent handoff',
        'Multi-language support',
        'CRM integration',
        'Analytics dashboard'
      ],
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation',
        'Cost reduction'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare,
      link: 'https://chat.ziontechgroup.com'
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial analytics.',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: [
        'AI-powered invoice generation',
        'Automated recurring billing',
        'Multi-currency support',
        'Payment tracking',
        'Tax calculation',
        'Client portal',
        'Expense tracking',
        'Financial reporting'
      ],
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices',
        'Better cash flow'
      ],
      category: 'Finance',
      popular: true,
      icon: FileText,
      link: 'https://invoices.ziontechgroup.com'
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated nurturing.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI-powered lead scoring',
        'Multi-channel lead capture',
        'Automated lead nurturing',
        'CRM integration',
        'Advanced analytics',
        'A/B testing',
        'Email marketing',
        'Social media integration'
      ],
      benefits: [
        'Increase qualified leads by 300%',
        'Automated lead nurturing',
        'Better conversion rates',
        'ROI optimization',
        'Time savings'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target,
      link: 'https://leads.ziontechgroup.com'
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Real-time threat monitoring',
        'Vulnerability scanning',
        'Incident response',
        'Security analytics',
        'Compliance reporting',
        'Employee training',
        'Firewall management',
        'Backup monitoring'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced risk exposure',
        'Compliance assurance',
        'Peace of mind',
        'Cost-effective protection'
      ],
      category: 'Security',
      popular: false,
      icon: Shield,
      link: 'https://security.ziontechgroup.com'
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection and version control.',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'Automated backups',
        'Cross-platform sync',
        'Version control',
        'Disaster recovery',
        'Data encryption',
        'Compliance support',
        'File sharing',
        'Mobile access'
      ],
      benefits: [
        'Data protection',
        'Business continuity',
        'Cost-effective storage',
        'Easy recovery',
        'Secure sharing'
      ],
      category: 'Storage',
      popular: false,
      icon: Cloud,
      link: 'https://vault.ziontechgroup.com'
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'Intelligent business process automation platform that streamlines operations and reduces manual work.',
      price: '$129/month',
      marketPrice: '$250-800/month',
      features: [
        'Visual workflow builder',
        'AI-powered optimization',
        'Integration capabilities',
        'Task automation',
        'Approval workflows',
        'Performance analytics',
        'Custom triggers',
        'Team collaboration'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation',
        'Team productivity'
      ],
      category: 'Automation',
      popular: true,
      icon: Workflow,
      link: 'https://workflow.ziontechgroup.com'
    },
    {
      id: 'zion-project-manager',
      name: 'Zion Project Manager',
      description: 'AI-powered project management platform with intelligent resource allocation and progress tracking.',
      price: '$79/month',
      marketPrice: '$150-500/month',
      features: [
        'AI project planning',
        'Resource optimization',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Budget management',
        'Risk assessment',
        'Reporting dashboard'
      ],
      benefits: [
        'Better project outcomes',
        'Resource optimization',
        'Timeline accuracy',
        'Team coordination',
        'Cost control'
      ],
      category: 'Project Management',
      popular: false,
      icon: Calendar,
      link: 'https://projects.ziontechgroup.com'
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing materials.',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI content generation',
        'Multi-platform publishing',
        'SEO optimization',
        'Brand voice consistency',
        'Content calendar',
        'Performance analytics',
        'Team collaboration',
        'Template library'
      ],
      benefits: [
        'Save 80% content time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform reach',
        'Content performance'
      ],
      category: 'Content',
      popular: true,
      icon: FileText,
      link: 'https://content.ziontechgroup.com'
    },
    {
      id: 'zion-crm-assistant',
      name: 'Zion CRM Assistant',
      description: 'Intelligent customer relationship management with AI-powered insights and automated follow-ups.',
      price: '$119/month',
      marketPrice: '$250-700/month',
      features: [
        'AI-powered lead scoring',
        'Automated follow-ups',
        'Sales forecasting',
        'Customer segmentation',
        'Pipeline management',
        'Email integration',
        'Mobile app',
        'Advanced analytics'
      ],
      benefits: [
        'Increase sales by 40%',
        'Better lead management',
        'Automated nurturing',
        'Sales insights',
        'Customer retention'
      ],
      category: 'CRM',
      popular: true,
      icon: Users,
      link: 'https://crm.ziontechgroup.com'
    },
    {
      id: 'zion-email-marketing',
      name: 'Zion Email Marketing',
      description: 'Advanced email marketing platform with AI-powered personalization and automated campaigns.',
      price: '$69/month',
      marketPrice: '$150-400/month',
      features: [
        'AI personalization',
        'Automated campaigns',
        'A/B testing',
        'List segmentation',
        'Email templates',
        'Analytics dashboard',
        'Integration capabilities',
        'Compliance tools'
      ],
      benefits: [
        'Higher open rates',
        'Better engagement',
        'Automated campaigns',
        'Personalized content',
        'ROI tracking'
      ],
      category: 'Marketing',
      popular: false,
      icon: Mail,
      link: 'https://email.ziontechgroup.com'
    },
    {
      id: 'zion-inventory-manager',
      name: 'Zion Inventory Manager',
      description: 'Smart inventory management system with AI-powered demand forecasting and automated reordering.',
      price: '$89/month',
      marketPrice: '$200-600/month',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost tracking',
        'Reporting dashboard',
        'Mobile app'
      ],
      benefits: [
        'Reduce stockouts by 60%',
        'Optimize inventory levels',
        'Cost reduction',
        'Automated processes',
        'Better forecasting'
      ],
      category: 'Inventory',
      popular: false,
      icon: Package,
      link: 'https://inventory.ziontechgroup.com'
>>>>>>> origin/main
    }
  ];

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Tools', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: products.filter(p => p.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Productivity', name: 'Productivity', count: products.filter(p => p.category === 'Productivity').length },
    { id: 'CRM', name: 'CRM', count: products.filter(p => p.category === 'CRM').length },
    { id: 'Data', name: 'Data', count: products.filter(p => p.category === 'Data').length },
    { id: 'Project Management', name: 'Project Management', count: products.filter(p => p.category === 'Project Management').length },
    { id: 'Content', name: 'Content', count: products.filter(p => p.category === 'Content').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: products.filter(p => p.category === 'Infrastructure').length },
    { id: 'Energy', name: 'Energy', count: products.filter(p => p.category === 'Energy').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: products.filter(p => p.category === 'Supply Chain').length },
    { id: 'HR', name: 'HR', count: products.filter(p => p.category === 'HR').length },
    { id: 'Translation', name: 'Translation', count: products.filter(p => p.category === 'Translation').length },
    { id: 'Legal', name: 'Legal', count: products.filter(p => p.category === 'Legal').length },
    { id: 'Health', name: 'Health', count: products.filter(p => p.category === 'Health').length },
    { id: 'Automation', name: 'Automation', count: products.filter(p => p.category === 'Automation').length },
    { id: 'Monitoring', name: 'Monitoring', count: products.filter(p => p.category === 'Monitoring').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
=======
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Finance', name: 'Finance', count: services.filter(s => s.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: services.filter(s => s.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: services.filter(s => s.category === 'Storage').length },
    { id: 'Automation', name: 'Automation', count: services.filter(s => s.category === 'Automation').length },
    { id: 'Project Management', name: 'Project Management', count: services.filter(s => s.category === 'Project Management').length },
    { id: 'Content', name: 'Content', count: services.filter(s => s.category === 'Content').length },
    { id: 'CRM', name: 'CRM', count: services.filter(s => s.category === 'CRM').length },
    { id: 'Inventory', name: 'Inventory', count: services.filter(s => s.category === 'Inventory').length }
  ];

  const filteredServices = services.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
>>>>>>> origin/main
  });

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Micro SaaS Tools - Zion Tech Group | Business Automation Solutions</title>
        <meta name="description" content="Comprehensive suite of micro SaaS tools for business automation, analytics, and productivity. Transform your operations with our innovative solutions." />
        <meta name="keywords" content="micro SaaS, business tools, automation, analytics, productivity, CRM, project management" />
=======
        <title>Micro SaaS Solutions - Zion Tech Group | Business Software Tools</title>
        <meta name="description" content="Comprehensive micro SaaS solutions including analytics, CRM, project management, and automation tools for small to medium businesses." />
        <meta name="keywords" content="micro saas, business software, analytics, CRM, project management, automation, small business tools" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Powerful micro SaaS tools to grow your business" />
        <meta property="og:type" content="website" />
>>>>>>> origin/main
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
<<<<<<< HEAD
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SaaS Tools
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, focused tools designed to solve specific business challenges with maximum efficiency and minimal complexity.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProducts.map((product, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                    <span className="text-sm text-gray-400">{product.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                    <span className="text-gray-400 text-sm ml-2 line-through">{product.marketPrice}</span>
                  </div>
                  {product.popular && (
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {product.benefits && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <a href="/contact"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                  <a href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-slate-800/50 rounded-lg p-8">
=======
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Powerful Business Tools for Modern Companies
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of micro SaaS solutions designed to streamline operations, 
              boost productivity, and drive growth for small to medium businesses. Each tool is built with 
              cutting-edge technology and user-friendly interfaces.
            </p>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Try Demo
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
>>>>>>> origin/main
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
<<<<<<< HEAD
                Choose from our comprehensive suite of Micro SaaS tools or get a custom solution built for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Get Free Consultation
                </a>
                <a href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
=======
                Choose from our comprehensive suite of micro SaaS solutions or get a custom solution 
                built specifically for your business needs. Contact our experts for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
>>>>>>> origin/main
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
<<<<<<< HEAD
          </div>
=======
          </section>
>>>>>>> origin/main
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;
