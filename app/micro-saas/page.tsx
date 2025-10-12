import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Cpu, BarChart3, Zap, Shield, Code, Cloud, Database, 
  MessageCircle, Mail, Phone, MapPin, CheckCircle, Star, Clock, Users, 
  TrendingUp, Sparkles, Layers, Target, Award, Lightbulb, Monitor, Server, 
  CircuitBoard, Atom, Satellite, Wrench, BarChart, PieChart, LineChart, 
  Activity, Eye, Search, Filter, Download, Upload, Share, Calendar, Timer, 
  Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, 
  Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, 
  Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, 
  HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, 
  Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, 
  Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, 
  Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, 
  Package, DollarSign, Globe, Lock, Brain, Rocket, Network, Settings, 
  ShoppingCart, CreditCard, Building, Briefcase, User, UserCheck, UserPlus, 
  UserX, Users2, UserCircle, UserCog, UserEdit, UserMinus, UserSearch, 
  UserShield, UserStar, UserTie, UserVoice, UserWrench, UserZap, UserHeart, 
  UserCheckCircle, UserClock, UserCrown, UserGear, UserKey, UserLock, 
  UserMail, UserPhone, UserPin, UserPlusCircle, UserSettings, UserTag, 
  UserTarget, UserTrendingUp, UserTrendingDown, UserXCircle, UserZapCircle
} from 'lucide-react'

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with real-time analytics, custom dashboards, and AI-powered insights for data-driven decision making.',
      price: 'Starting at $99/month',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'API integrations', 'Team collaboration', 'Mobile app'],
      link: '/zion-analytics-pro',
      category: 'Analytics',
      popular: true
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-emerald-400" />,
      title: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing, multi-channel support, and seamless integration capabilities.',
      price: 'Starting at $79/month',
      features: ['AI-powered responses', 'Multi-language support', 'Live chat handoff', 'Analytics dashboard', 'Custom training', 'API access'],
      link: '/zion-chat-ai',
      category: 'Customer Support',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring platform with threat detection, vulnerability scanning, and automated security responses.',
      price: 'Starting at $149/month',
      features: ['Threat monitoring', 'Vulnerability scanning', 'Incident response', 'Compliance reporting', 'Security alerts', '24/7 monitoring'],
      link: '/zion-security-shield',
      category: 'Security',
      popular: true
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and recovery solution with automated backups, version control, and disaster recovery capabilities.',
      price: 'Starting at $59/month',
      features: ['Automated backups', 'Version control', 'Disaster recovery', 'Cross-platform sync', 'Encryption', 'Unlimited storage'],
      link: '/zion-cloud-vault',
      category: 'Storage',
      popular: false
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, marketing materials, and automated content generation.',
      price: 'Starting at $89/month',
      features: ['AI content generation', 'SEO optimization', 'Brand voice training', 'Content calendar', 'Multi-format export', 'Team collaboration'],
      link: '/zion-content-studio',
      category: 'Content Creation',
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics, lead scoring, and automated sales workflows.',
      price: 'Starting at $129/month',
      features: ['Lead scoring', 'Sales forecasting', 'Pipeline management', 'Email automation', 'Customer insights', 'Integration hub'],
      link: '/zion-crm-intelligence',
      category: 'CRM',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: 'Zion Data Sync',
      description: 'Universal data integration platform that connects and synchronizes data across multiple systems and applications.',
      price: 'Starting at $69/month',
      features: ['Data connectors', 'Real-time sync', 'Data transformation', 'Error handling', 'Monitoring dashboard', 'Custom workflows'],
      link: '/zion-data-sync',
      category: 'Data Integration',
      popular: false
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-400" />,
      title: 'Zion Lead Magnet',
      description: 'Lead generation platform with landing page builder, email capture, lead nurturing, and conversion optimization tools.',
      price: 'Starting at $49/month',
      features: ['Landing page builder', 'Email capture', 'Lead scoring', 'A/B testing', 'Analytics tracking', 'Email automation'],
      link: '/zion-lead-magnet',
      category: 'Marketing',
      popular: false
    },
    {
      icon: <Calendar className="w-8 h-8 text-teal-400" />,
      title: 'Zion Project Master',
      description: 'AI-powered project management tool with task automation, resource allocation, and intelligent project planning.',
      price: 'Starting at $79/month',
      features: ['Task automation', 'Resource planning', 'Gantt charts', 'Team collaboration', 'Progress tracking', 'Risk assessment'],
      link: '/zion-project-master',
      category: 'Project Management',
      popular: false
    },
    {
      icon: <Mail className="w-8 h-8 text-rose-400" />,
      title: 'Zion Email Automation',
      description: 'Advanced email marketing platform with AI-driven personalization, send time optimization, and campaign analytics.',
      price: 'Starting at $59/month',
      features: ['Email templates', 'Personalization engine', 'Send optimization', 'A/B testing', 'Analytics dashboard', 'List management'],
      link: '/zion-email-automation',
      category: 'Email Marketing',
      popular: false
    },
    {
      icon: <Package className="w-8 h-8 text-green-400" />,
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting, automated reordering, and supply chain optimization.',
      price: 'Starting at $99/month',
      features: ['Demand forecasting', 'Auto reordering', 'Stock alerts', 'Supplier management', 'Cost tracking', 'Reporting suite'],
      link: '/zion-inventory-smart',
      category: 'Inventory Management',
      popular: false
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      title: 'Zion Invoice Genius',
      description: 'Automated invoicing platform with AI-powered invoice generation, payment processing, and financial reporting.',
      price: 'Starting at $39/month',
      features: ['Auto invoice generation', 'Payment processing', 'Recurring billing', 'Tax calculations', 'Financial reports', 'Client portal'],
      link: '/zion-invoice-genius',
      category: 'Finance',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform that connects apps and automates business processes without coding.',
      price: 'Starting at $89/month',
      features: ['Visual workflow builder', 'App integrations', 'Conditional logic', 'Scheduled triggers', 'Error handling', 'Analytics'],
      link: '/zion-workflow-automation',
      category: 'Automation',
      popular: true
    },
    {
      icon: <Monitor className="w-8 h-8 text-purple-400" />,
      title: 'Zion Performance Monitor',
      description: 'Application performance monitoring with real-time metrics, alerting, and optimization recommendations.',
      price: 'Starting at $119/month',
      features: ['Real-time monitoring', 'Performance alerts', 'Root cause analysis', 'Capacity planning', 'Custom dashboards', 'API monitoring'],
      link: '/zion-performance-monitor',
      category: 'Monitoring',
      popular: false
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-400" />,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform for GDPR, HIPAA, SOX, and other regulatory requirements.',
      price: 'Starting at $199/month',
      features: ['Compliance tracking', 'Audit trails', 'Policy management', 'Risk assessment', 'Reporting suite', 'Expert support'],
      link: '/zion-compliance-manager',
      category: 'Compliance',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content scheduling, engagement tracking, and performance analytics.',
      price: 'Starting at $69/month',
      features: ['Content scheduling', 'Engagement tracking', 'Analytics dashboard', 'Hashtag research', 'Team collaboration', 'Multi-platform'],
      link: '/zion-social-scheduler',
      category: 'Social Media',
      popular: false
    },
    {
      icon: <Camera className="w-8 h-8 text-blue-400" />,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, voice synthesis, and intelligent content optimization.',
      price: 'Starting at $149/month',
      features: ['Auto video editing', 'Voice synthesis', 'Content optimization', 'Template library', 'Export options', 'Cloud processing'],
      link: '/zion-ai-video-editor',
      category: 'Video Production',
      popular: true
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with real-time translation, document processing, and language learning features.',
      price: 'Starting at $79/month',
      features: ['Real-time translation', 'Document processing', 'Voice translation', 'Language learning', 'API access', 'Team collaboration'],
      link: '/zion-ai-translator-pro',
      category: 'Translation',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-400" />,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated code analysis, security scanning, and performance optimization suggestions.',
      price: 'Starting at $129/month',
      features: ['Code analysis', 'Security scanning', 'Performance tips', 'Best practices', 'Team reviews', 'Integration support'],
      link: '/zion-ai-code-reviewer',
      category: 'Development',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-teal-400" />,
      title: 'Zion Customer Insights',
      description: 'Customer analytics platform with behavior tracking, sentiment analysis, and personalized engagement recommendations.',
      price: 'Starting at $99/month',
      features: ['Behavior tracking', 'Sentiment analysis', 'Engagement metrics', 'Personalization engine', 'Predictive analytics', 'Custom reports'],
      link: '/zion-customer-insights',
      category: 'Analytics',
      popular: false
    },
    {
      icon: <Mail className="w-8 h-8 text-rose-400" />,
      title: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered responses, email prioritization, and automated follow-ups.',
      price: 'Starting at $59/month',
      features: ['Smart responses', 'Email prioritization', 'Auto follow-ups', 'Template suggestions', 'Sentiment analysis', 'Integration hub'],
      link: '/zion-ai-email-assistant',
      category: 'Email Management',
      popular: false
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-400" />,
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with automated scheduling, transcription, and action item tracking.',
      price: 'Starting at $89/month',
      features: ['Auto scheduling', 'Meeting transcription', 'Action items', 'Follow-up reminders', 'Integration support', 'Analytics'],
      link: '/zion-ai-meeting-assistant',
      category: 'Meeting Management',
      popular: false
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization platform with keyword research, content optimization, and ranking tracking.',
      price: 'Starting at $79/month',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO', 'Reporting suite'],
      link: '/zion-ai-seo-optimizer',
      category: 'SEO',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      title: 'Zion AI Data Cleaner',
      description: 'Automated data cleaning and validation platform with AI-powered data quality improvement and deduplication.',
      price: 'Starting at $69/month',
      features: ['Data cleaning', 'Deduplication', 'Validation rules', 'Quality scoring', 'Batch processing', 'API integration'],
      link: '/zion-ai-data-cleaner',
      category: 'Data Quality',
      popular: false
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-400" />,
      title: 'Zion AI Contract Analyzer',
      description: 'Intelligent contract analysis platform with risk assessment, clause extraction, and compliance checking.',
      price: 'Starting at $199/month',
      features: ['Contract analysis', 'Risk assessment', 'Clause extraction', 'Compliance checking', 'Version comparison', 'Team collaboration'],
      link: '/zion-ai-contract-analyzer',
      category: 'Legal Tech',
      popular: false
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-pink-400" />,
      title: 'Zion AI Survey Builder',
      description: 'AI-powered survey creation platform with intelligent question generation, response analysis, and insights.',
      price: 'Starting at $49/month',
      features: ['Question generation', 'Response analysis', 'Insight extraction', 'Survey templates', 'Distribution tools', 'Analytics dashboard'],
      link: '/zion-ai-survey-builder',
      category: 'Research',
      popular: false
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      title: 'Zion AI Accounting Assistant',
      description: 'Intelligent accounting platform with automated bookkeeping, expense categorization, and financial reporting.',
      price: 'Starting at $89/month',
      features: ['Auto bookkeeping', 'Expense categorization', 'Financial reports', 'Tax preparation', 'Invoice processing', 'Bank integration'],
      link: '/zion-ai-accounting-assistant',
      category: 'Accounting',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      title: 'Zion AI Recruitment Pro',
      description: 'AI-powered recruitment platform with resume screening, candidate matching, and interview scheduling.',
      price: 'Starting at $149/month',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skill assessment', 'Pipeline management', 'Analytics'],
      link: '/zion-ai-recruitment-pro',
      category: 'HR',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation platform with AI-powered content filtering, spam detection, and community management.',
      price: 'Starting at $119/month',
      features: ['Content filtering', 'Spam detection', 'Community management', 'Custom rules', 'Real-time monitoring', 'Analytics'],
      link: '/zion-ai-content-moderation',
      category: 'Content Moderation',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      title: 'Zion AI Predictive Maintenance',
      description: 'IoT-based predictive maintenance platform with equipment monitoring, failure prediction, and maintenance scheduling.',
      price: 'Starting at $199/month',
      features: ['Equipment monitoring', 'Failure prediction', 'Maintenance scheduling', 'IoT integration', 'Alert system', 'Analytics'],
      link: '/zion-ai-predictive-maintenance',
      category: 'IoT',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Zion AI Energy Manager',
      description: 'Smart energy management platform with consumption monitoring, optimization recommendations, and cost tracking.',
      price: 'Starting at $79/month',
      features: ['Consumption monitoring', 'Optimization tips', 'Cost tracking', 'Energy forecasting', 'Device control', 'Reporting'],
      link: '/zion-ai-energy-manager',
      category: 'Energy Management',
      popular: false
    },
    {
      icon: <Package className="w-8 h-8 text-indigo-400" />,
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Supply chain optimization platform with demand forecasting, inventory optimization, and logistics management.',
      price: 'Starting at $179/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Logistics management', 'Supplier coordination', 'Risk assessment', 'Analytics'],
      link: '/zion-ai-supply-chain-optimizer',
      category: 'Supply Chain',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with real-time monitoring, pattern recognition, and automated alerts.',
      price: 'Starting at $159/month',
      features: ['Real-time monitoring', 'Pattern recognition', 'Automated alerts', 'Risk scoring', 'Machine learning', 'API integration'],
      link: '/zion-ai-fraud-detector',
      category: 'Fraud Prevention',
      popular: false
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with omnichannel support, sentiment analysis, and automated resolution.',
      price: 'Starting at $129/month',
      features: ['Omnichannel support', 'Sentiment analysis', 'Auto resolution', 'Knowledge base', 'Team management', 'Analytics'],
      link: '/zion-ai-customer-service-pro',
      category: 'Customer Service',
      popular: false
    },
    {
      icon: <Target className="w-8 h-8 text-pink-400" />,
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with campaign management, lead nurturing, and performance optimization.',
      price: 'Starting at $99/month',
      features: ['Campaign management', 'Lead nurturing', 'A/B testing', 'Email automation', 'Social media', 'Analytics'],
      link: '/zion-ai-marketing-automation',
      category: 'Marketing Automation',
      popular: false
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with OCR, data extraction, and automated document workflows.',
      price: 'Starting at $89/month',
      features: ['OCR technology', 'Data extraction', 'Document workflows', 'Template recognition', 'Batch processing', 'API access'],
      link: '/zion-ai-document-ai',
      category: 'Document Processing',
      popular: false
    }
  ]

  const categories = [
    'All Services',
    'Analytics',
    'Customer Support',
    'Security',
    'Storage',
    'Content Creation',
    'CRM',
    'Data Integration',
    'Marketing',
    'Project Management',
    'Email Marketing',
    'Inventory Management',
    'Finance',
    'Automation',
    'Monitoring',
    'Compliance',
    'Social Media',
    'Video Production',
    'Translation',
    'Development',
    'Email Management',
    'Meeting Management',
    'SEO',
    'Data Quality',
    'Legal Tech',
    'Research',
    'Accounting',
    'HR',
    'Content Moderation',
    'IoT',
    'Energy Management',
    'Supply Chain',
    'Fraud Prevention',
    'Customer Service',
    'Marketing Automation',
    'Document Processing'
  ]

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Cpu className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '1000+', label: 'Active Users', icon: <Users className="w-6 h-6 text-purple-400" /> },
    { number: '500+', label: 'Integrations', icon: <Network className="w-6 h-6 text-pink-400" /> },
    { number: '5x', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6 text-orange-400" /> }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Ready-to-Use Business Tools | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS solutions designed to streamline business operations. From analytics to automation, we have the tools you need." />
        <meta name="keywords" content="micro saas, business tools, software as a service, automation, analytics, CRM, project management, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Micro SAAS Solutions - Ready-to-Use Business Tools | Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive collection of micro SAAS solutions designed to streamline business operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:image" content="https://ziontechgroup.com/og-micro-saas.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SAAS Solutions - Ready-to-Use Business Tools" />
        <meta name="twitter:description" content="Discover our comprehensive collection of micro SAAS solutions designed to streamline business operations." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-micro-saas.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Micro SAAS Solutions",
            "description": "Comprehensive collection of micro SAAS solutions designed to streamline business operations",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              }
            },
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": "50+",
              "lowPrice": "39",
              "highPrice": "199",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-purple-500/20 text-green-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-green-400/30">
            <Cpu className="w-4 h-4" />
            <span>Ready-to-Use Business Tools</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Micro SAAS Solutions
            <br />
            <span className="bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              That Scale Your Business
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Discover our comprehensive collection of micro SAAS solutions designed to streamline 
            business operations, boost productivity, and drive growth.
            <br />
            <span className="text-green-400 font-semibold">From analytics to automation - everything you need in one place.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-green-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-green-400 text-green-400 px-10 py-4 rounded-xl font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">Growing Businesses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS solutions deliver measurable results with proven reliability and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-green-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose from our extensive range of micro SAAS solutions designed to address every aspect of your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 ${service.popular ? 'ring-2 ring-green-400/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-sm text-green-400 font-medium">{service.category}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-green-400">
                    {service.price}
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="block w-full mt-6 bg-gradient-to-r from-green-500 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-green-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25"
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
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready to Get Started?</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Transform Your Business with <span className="bg-gradient-to-r from-green-300 to-pink-300 bg-clip-text text-transparent">Micro SAAS Solutions</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
                  boost productivity, and drive growth. Get started with a free trial.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/demo" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>Schedule Demo</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-green-300" />
                    <span className="text-sm">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-300" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-300" />
                    <span className="text-sm">Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}