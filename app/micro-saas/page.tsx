import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {;
'use client';
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock
} from 'lucide-react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Cloud, Code, BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, Settings, Link as LinkIcon, Package, TrendingUp, Calendar, Globe, Database, Monitor, Mail } from 'lucide-react';

const MicroSaasPage: React.FC = () => {

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSaasProducts = [
    {
      id: 'zion-analytics-pro',
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time dashboards',
      price: '$99/month',
      originalPrice: '$149/month',
      features: [
        'Real-time analytics dashboard',
        'AI-powered predictive insights',
        'Custom report generation',
        'Team collaboration tools',
        'API integrations',
        'Mobile app access',
        'Data visualization tools',
        'Export to multiple formats'
      ],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500',
      category: 'Analytics',
      rating: 4.9,
      reviews: 127,
      popular: true
    },
    {
      id: 'zion-chat-ai',
      title: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel support',
      price: '$79/month',
      originalPrice: '$119/month',
      features: [
        'Multi-language support',
        'Sentiment analysis',
        'Escalation management',
        'Performance analytics',
        'Custom training',
        'Integration APIs',
        'Live chat handoff',
        'Knowledge base management'
      ],
      icon: MessageCircle,
      color: 'from-green-500 to-teal-500',
      category: 'Customer Support',
      rating: 4.8,
      reviews: 89,
      popular: false
    },
    {
      id: 'zion-security-shield',
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses',
      price: '$149/month',
      originalPrice: '$199/month',
      features: [
        'Real-time threat detection',
        'Vulnerability scanning',
        'Incident response automation',
        'Compliance reporting',
        'Security awareness training',
        '24/7 monitoring',
        'Mobile device management',
        'Firewall management'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      rating: 4.9,
      reviews: 156,
      popular: true
    },
    {
      id: 'zion-cloud-vault',
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated backups and instant restore',
      price: '$59/month',
      originalPrice: '$89/month',
      features: [
        'Automated daily backups',
        'Instant file recovery',
        'Version history tracking',
        'Cross-platform sync',
        'End-to-end encryption',
        'Compliance certifications',
        'Unlimited storage',
        'Mobile access'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      category: 'Backup & Recovery',
      rating: 4.7,
      reviews: 203,
      popular: false
    },
    {
      id: 'zion-content-studio',
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing',
      price: '$69/month',
      originalPrice: '$99/month',
      features: [
        'AI content generation',
        'Multi-platform publishing',
        'Brand voice training',
        'Content calendar',
        'SEO optimization',
        'Image generation',
        'Video creation tools',
        'Performance tracking'
      ],
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      category: 'Content Creation',
      rating: 4.6,
      reviews: 94,
      popular: false
    },
    {
      id: 'zion-crm-intelligence',
      title: 'Zion CRM Intelligence',
      description: 'Smart customer relationship management with AI insights and automated workflows',
      price: '$89/month',
      originalPrice: '$129/month',
      features: [
        'Lead scoring automation',
        'Sales forecasting',
        'Customer insights',
        'Automation workflows',
        'Email marketing',
        'Pipeline management',
        'Team collaboration',
        'Mobile CRM access'
      ],
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      category: 'CRM',
      rating: 4.8,
      reviews: 142,
      popular: true
    },
    {
      id: 'zion-data-sync',
      title: 'Zion Data Sync',
      description: 'Automated data synchronization across multiple platforms and databases',
      price: '$49/month',
      originalPrice: '$79/month',
      features: [
        'Real-time data sync',
        'Multiple platform support',
        'Data transformation',
        'Error handling',
        'Scheduled syncs',
        'Data validation',
        'API integrations',
        'Monitoring dashboard'
      ],
      icon: Database,
      color: 'from-emerald-500 to-green-500',
      category: 'Data Management',
      rating: 4.5,
      reviews: 67,
      popular: false
    },
    {
      id: 'zion-lead-magnet',
      title: 'Zion Lead Magnet',
      description: 'Lead generation and nurturing platform with automated email sequences and landing pages',
      price: '$79/month',
      originalPrice: '$119/month',
      features: [
        'Landing page builder',
        'Email automation',
        'Lead scoring',
        'A/B testing',
        'Analytics dashboard',
        'CRM integration',
        'Form builder',
        'Social media integration'
      ],
      icon: Target,
      color: 'from-yellow-500 to-orange-500',
      category: 'Marketing',
      rating: 4.7,
      reviews: 118,
      popular: false
    },
    {
      id: 'zion-project-master',
      title: 'Zion Project Master',
      description: 'Advanced project management with AI-powered insights and team collaboration tools',
      price: '$99/month',
      originalPrice: '$149/month',
      features: [
        'Gantt charts',
        'Resource management',
        'Time tracking',
        'Budget monitoring',
        'Team collaboration',
        'File sharing',
        'Progress reporting',
        'Mobile app'
      ],
      icon: CheckSquare,
      color: 'from-violet-500 to-purple-500',
      category: 'Project Management',
      rating: 4.8,
      reviews: 175,
      popular: true
    },
    {
      id: 'zion-email-automation',
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automation',
      price: '$59/month',
      originalPrice: '$89/month',
      features: [
        'Email templates',
        'Automation workflows',
        'Personalization engine',
        'A/B testing',
        'Analytics tracking',
        'List management',
        'Drip campaigns',
        'Integration APIs'
      ],
      icon: Mail,
      color: 'from-pink-500 to-rose-500',
      category: 'Email Marketing',
      rating: 4.6,
      reviews: 89,
      popular: false
    },
    {
      id: 'zion-inventory-smart',
      title: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting and automated reordering',
      price: '$89/month',
      originalPrice: '$129/month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock level monitoring',
        'Supplier management',
        'Barcode scanning',
        'Multi-location support',
        'Reporting dashboard',
        'Mobile app'
      ],
      icon: Box,
      color: 'from-teal-500 to-cyan-500',
      category: 'Inventory',
      rating: 4.7,
      reviews: 134,
      popular: false
    },
    {
      id: 'zion-invoice-genius',
      title: 'Zion Invoice Genius',
      description: 'Automated invoicing and payment processing with AI-powered expense categorization',
      price: '$49/month',
      originalPrice: '$79/month',
      features: [
        'Automated invoicing',
        'Payment processing',
        'Expense categorization',
        'Tax calculations',
        'Client portal',
        'Recurring billing',
        'Financial reporting',
        'Multi-currency support'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      category: 'Finance',
      rating: 4.8,
      reviews: 156,
      popular: true
    },
    {
      id: 'zion-ai-video-editor',
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing with automatic scene detection, color correction, and smart transitions',
      price: '$89/month',
      originalPrice: '$129/month',
      features: [
        'Auto scene detection',
        'Smart color correction',
        'AI-generated transitions',
        'Voice-over generation',
        'Background removal',
        'Text-to-video',
        'Multi-format export',
        'Cloud rendering'
      ],
      icon: Monitor,
      color: 'from-purple-500 to-pink-500',
      category: 'Video Production',
      rating: 4.7,
      reviews: 98,
      popular: false
    },
    {
      id: 'zion-ai-translator-pro',
      title: 'Zion AI Translator Pro',
      description: 'Advanced AI translation with context awareness and industry-specific terminology support',
      price: '$69/month',
      originalPrice: '$99/month',
      features: [
        '100+ language support',
        'Context-aware translation',
        'Industry terminology',
        'Real-time translation',
        'Document translation',
        'Voice translation',
        'API integration',
        'Quality scoring'
      ],
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      category: 'Translation',
      rating: 4.6,
      reviews: 134,
      popular: false
    },
    {
      id: 'zion-ai-code-reviewer',
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review with automated bug detection, security analysis, and performance optimization',
      price: '$149/month',
      originalPrice: '$199/month',
      features: [
        'Automated code review',
        'Bug detection',
        'Security vulnerability scan',
        'Performance optimization',
        'Code quality metrics',
        'Best practice suggestions',
        'Multi-language support',
        'Git integration'
      ],
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      category: 'Development',
      rating: 4.8,
      reviews: 187,
      popular: true
    },
    {
      id: 'zion-customer-insights',
      title: 'Zion Customer Insights',
      description: 'AI-powered customer behavior analysis with predictive insights and personalized recommendations',
      price: '$119/month',
      originalPrice: '$159/month',
      features: [
        'Customer segmentation',
        'Behavior prediction',
        'Churn analysis',
        'Personalization engine',
        'Sentiment analysis',
        'Lifetime value prediction',
        'Recommendation system',
        'Real-time insights'
      ],
      icon: Users,
      color: 'from-teal-500 to-cyan-500',
      category: 'Analytics',
      rating: 4.7,
      reviews: 145,
      popular: false
    },
    {
      id: 'zion-ai-email-assistant',
      title: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered responses, scheduling, and priority classification',
      price: '$59/month',
      originalPrice: '$89/month',
      features: [
        'AI email responses',
        'Smart scheduling',
        'Priority classification',
        'Spam filtering',
        'Email templates',
        'Follow-up automation',
        'Sentiment analysis',
        'Calendar integration'
      ],
      icon: Mail,
      color: 'from-orange-500 to-red-500',
      category: 'Productivity',
      rating: 4.5,
      reviews: 112,
      popular: false
    },
    {
      id: 'zion-ai-meeting-assistant',
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with transcription, action items, and follow-up automation',
      price: '$79/month',
      originalPrice: '$119/month',
      features: [
        'Real-time transcription',
        'Action item extraction',
        'Meeting summaries',
        'Follow-up automation',
        'Voice recognition',
        'Multi-language support',
        'Calendar integration',
        'Team collaboration'
      ],
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
      category: 'Productivity',
      rating: 4.6,
      reviews: 98,
      popular: false
    },
    {
      id: 'zion-ai-seo-optimizer',
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization with content analysis, keyword research, and ranking predictions',
      price: '$99/month',
      originalPrice: '$149/month',
      features: [
        'Content optimization',
        'Keyword research',
        'Ranking predictions',
        'Competitor analysis',
        'Technical SEO audit',
        'Link building suggestions',
        'Performance tracking',
        'Automated reports'
      ],
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      category: 'Marketing',
      rating: 4.7,
      reviews: 167,
      popular: true
    },
    {
      id: 'zion-ai-data-cleaner',
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation with automated error detection and correction',
      price: '$89/month',
      originalPrice: '$129/month',
      features: [
        'Automated data cleaning',
        'Error detection',
        'Duplicate removal',
        'Data validation',
        'Format standardization',
        'Missing data imputation',
        'Quality scoring',
        'API integration'
      ],
      icon: Database,
      color: 'from-gray-500 to-slate-500',
      category: 'Data Management',
      rating: 4.6,
      reviews: 89,
      popular: false
    },
    {
      id: 'zion-ai-contract-analyzer',
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis with risk assessment, clause extraction, and compliance checking',
      price: '$199/month',
      originalPrice: '$299/month',
      features: [
        'Contract analysis',
        'Risk assessment',
        'Clause extraction',
        'Compliance checking',
        'Version comparison',
        'Automated summaries',
        'Legal insights',
        'Document management'
      ],
      icon: FileText,
      color: 'from-violet-500 to-purple-500',
      category: 'Legal',
      rating: 4.8,
      reviews: 76,
      popular: false
    },
    {
      id: 'zion-ai-survey-builder',
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation with AI-generated questions, response analysis, and insights',
      price: '$69/month',
      originalPrice: '$99/month',
      features: [
        'AI question generation',
        'Response analysis',
        'Sentiment analysis',
        'Data visualization',
        'Custom themes',
        'Multi-platform distribution',
        'Real-time analytics',
        'Export capabilities'
      ],
      icon: CheckSquare,
      color: 'from-pink-500 to-rose-500',
      category: 'Research',
      rating: 4.5,
      reviews: 123,
      popular: false
    },
    {
      id: 'zion-ai-accounting-assistant',
      title: 'Zion AI Accounting Assistant',
      description: 'Smart accounting automation with expense categorization, tax preparation, and financial insights',
      price: '$129/month',
      originalPrice: '$179/month',
      features: [
        'Expense categorization',
        'Tax preparation',
        'Financial insights',
        'Receipt scanning',
        'Invoice matching',
        'Compliance monitoring',
        'Reporting automation',
        'Multi-currency support'
      ],
      icon: DollarSign,
      color: 'from-emerald-500 to-green-500',
      category: 'Finance',
      rating: 4.7,
      reviews: 156,
      popular: true
    },
    {
      id: 'zion-ai-recruitment-pro',
      title: 'Zion AI Recruitment Pro',
      description: 'AI-powered recruitment with resume screening, candidate matching, and interview scheduling',
      price: '$179/month',
      originalPrice: '$249/month',
      features: [
        'Resume screening',
        'Candidate matching',
        'Interview scheduling',
        'Skill assessment',
        'Background checks',
        'Onboarding automation',
        'Performance tracking',
        'Integration capabilities'
      ],
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      category: 'HR',
      rating: 4.8,
      reviews: 134,
      popular: true
    },
    {
      id: 'zion-ai-content-moderation',
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation with AI-powered detection of inappropriate content and spam',
      price: '$149/month',
      originalPrice: '$199/month',
      features: [
        'Content filtering',
        'Spam detection',
        'Image analysis',
        'Text analysis',
        'Video moderation',
        'Real-time processing',
        'Custom rules',
        'API integration'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      rating: 4.6,
      reviews: 98,
      popular: false
    },
    {
      id: 'zion-ai-predictive-maintenance',
      title: 'Zion AI Predictive Maintenance',
      description: 'AI-powered equipment monitoring with predictive maintenance and failure prevention',
      price: '$299/month',
      originalPrice: '$399/month',
      features: [
        'Equipment monitoring',
        'Failure prediction',
        'Maintenance scheduling',
        'Performance analytics',
        'Alert system',
        'Cost optimization',
        'IoT integration',
        'Custom dashboards'
      ],
      icon: Settings,
      color: 'from-cyan-500 to-blue-500',
      category: 'IoT',
      rating: 4.7,
      reviews: 67,
      popular: false
    },
    {
      id: 'zion-ai-energy-manager',
      title: 'Zion AI Energy Manager',
      description: 'Smart energy management with consumption optimization and cost reduction recommendations',
      price: '$199/month',
      originalPrice: '$279/month',
      features: [
        'Energy monitoring',
        'Consumption optimization',
        'Cost analysis',
        'Predictive modeling',
        'Automated controls',
        'Sustainability tracking',
        'Reporting dashboard',
        'IoT integration'
      ],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      category: 'Sustainability',
      rating: 4.5,
      reviews: 89,
      popular: false
    },
    {
      id: 'zion-ai-supply-chain-optimizer',
      title: 'Zion AI Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting and inventory management',
      price: '$249/month',
      originalPrice: '$349/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier analysis',
        'Risk assessment',
        'Cost optimization',
        'Real-time tracking',
        'Integration capabilities'
      ],
      icon: Package,
      color: 'from-indigo-500 to-purple-500',
      category: 'Supply Chain',
      rating: 4.8,
      reviews: 112,
      popular: true
    },
    {
      id: 'zion-ai-fraud-detector',
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection with machine learning models and real-time transaction monitoring',
      price: '$179/month',
      originalPrice: '$249/month',
      features: [
        'Real-time monitoring',
        'Pattern recognition',
        'Risk scoring',
        'Transaction analysis',
        'Alert system',
        'Machine learning models',
        'API integration',
        'Compliance reporting'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      category: 'Security',
      rating: 4.9,
      reviews: 198,
      popular: true
    },
    {
      id: 'zion-ai-customer-service-pro',
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced AI customer service with multi-channel support and intelligent routing',
      price: '$159/month',
      originalPrice: '$219/month',
      features: [
        'Multi-channel support',
        'Intelligent routing',
        'Sentiment analysis',
        'Escalation management',
        'Knowledge base',
        'Performance analytics',
        'Integration capabilities',
        'Custom training'
      ],
      icon: MessageCircle,
      color: 'from-green-500 to-teal-500',
      category: 'Customer Support',
      rating: 4.7,
      reviews: 167,
      popular: true
    },
    {
      id: 'zion-ai-marketing-automation',
      title: 'Zion AI Marketing Automation',
      description: 'Intelligent marketing automation with personalized campaigns and customer journey optimization',
      price: '$139/month',
      originalPrice: '$189/month',
      features: [
        'Campaign automation',
        'Personalization engine',
        'Customer journey mapping',
        'A/B testing',
        'Performance analytics',
        'Lead scoring',
        'Email marketing',
        'Social media integration'
      ],
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      category: 'Marketing',
      rating: 4.6,
      reviews: 145,
      popular: false
    },
    {
      id: 'zion-ai-document-ai',
      title: 'Zion AI Document AI',
      description: 'Advanced document processing with OCR, data extraction, and intelligent document analysis',
      price: '$119/month',
      originalPrice: '$159/month',
      features: [
        'OCR technology',
        'Data extraction',
        'Document classification',
        'Form processing',
        'Text analysis',
        'Version control',
        'Search capabilities',
        'API integration'
      ],
      icon: FileText,
      color: 'from-gray-500 to-slate-500',
      category: 'Document Management',
      rating: 4.7,
      reviews: 123,
      popular: false
    }
  ];
  const categories = ['All', 'Analytics', 'Customer Support', 'Security', 'Backup & Recovery', 'Content Creation', 'CRM', 'Data Management', 'Marketing', 'Project Management', 'Email Marketing', 'Inventory', 'Finance', 'Video Production', 'Translation', 'Development', 'Productivity', 'Research', 'HR', 'IoT', 'Sustainability', 'Supply Chain', 'Legal', 'Document Management'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);
  return (
    <>
      <Helmet>
        <title />Micro SAAS Products - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta const name = "description" content="Discover our comprehensive suite of micro SAAS products designed to solve specific business challenges. From AI analytics to cybersecurity, we have the tools you need to succeed." /  />
        <meta name="keywords" content="micro saas, business software, AI tools, analytics, CRM, project management, cybersecurity, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h1 className="{`text-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                Micro SAAS
                <span className="w-5 h-5 ml-2" />Business Solutions
                </span>
              </h1>
              <p className="{`text-xl" text-gray-300 mb-8 max-w-3 xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                Powerful, ready-to-use software solutions designed to solve specific business challenges. 
                No complex setup, no lengthy implementations - just instant value.
              </p>
              <div className="{`flex" flex-col sm: flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl"
        >
          Start Free Trial
                  
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                  Call +1 302 464 0950
                </a>
                      </div>
      </section>

        {/* Category Filter */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {categories.map((category) => (
                <button
                  key="{category}"
                  onClick="{()" =  />setSelectedCategory(category)}
                  className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {filteredProducts.map((product, index) => (
                <div
                  key="{product.id}"
                  className="{`group" relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                    product.popular ? 'ring-2 ring-purple-500' : ''
                  }`} />
                  {product.popular && (
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      <span className="w-5 h-5 ml-2" />Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="{`inline- flex" items-center justify-center w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl mb-4`} />
                      <product.icon className="h-8w-8text-white"  />
                    </div>
                    <h3 className="w-5 h-5 ml-2" />{product.title}</h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{product.description}</p>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key="{i}"
                            className="{`h-4" w-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                           />
                        ))}
                      </div>
                      <span className="w-5 h-5 ml-2" />({product.reviews} reviews)</span>
                    </div>

                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      <span className="w-5 h-5 ml-2" />{product.price}</span>
                      <span className="w-5 h-5 ml-2" />{product.originalPrice}</span>
                    </div>
                    <span className="w-5 h-5 ml-2" />Save {Math.round((1 - parseInt(product.price.replace('$', '')) / parseInt(product.originalPrice.replace('$', ''))) * 100)}%
                    </span>
                  </div>

                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key="{idx}" className="flex items-centertext-sm text-gray-300" />
                        <CheckCircle className="w-5 h-5 ml-2" />
                        <span />{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 4 && (
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">+{product.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
          to="{`/${product.id}`}"
          className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105"
        >
          View Details
                      
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-whitetransition-all duration-300">Start Free Trial
                    </Link>
                  </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
              increase productivity, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl"
        >
          Get Started Today
                
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;