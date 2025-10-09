import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, MessageCircle, Mic, Heart, ShoppingCart, BookOpen, GraduationCap, Building, Car, Home, Gamepad2, Camera, Headphones, Wrench, Cpu, Layers, PieChart, Activity, Search, Filter, Download, Upload, RefreshCw, Play, Pause, Stop, Volume2, VolumeX, Eye, EyeOff, Plus, Minus, X, Check, AlertTriangle, Info, HelpCircle, ExternalLink, ChevronRight, ChevronDown, ChevronUp, ChevronLeft, Bell, BellOff, Sun, Moon, Wifi, WifiOff, Battery, BatteryLow, Signal, SignalHigh, SignalLow, SignalZero, WifiHigh, WifiLow, WifiZero, WifiOff as WifiOffIcon, WifiHigh as WifiHighIcon, WifiLow as WifiLowIcon, WifiZero as WifiZeroIcon } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    // AI Content & Marketing Tools
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality content 10x faster with advanced AI. Create blogs, social media posts, emails, and marketing copy.',
      icon: FileText,
      price: 29,
      period: 'month',
      features: [
        '50+ Content Templates',
        '10x Faster Writing',
        'SEO Optimization',
        'Brand Voice Training',
        '50+ Languages Support',
        'Plagiarism Checker',
        'Content Calendar',
        'Team Collaboration'
      ],
      category: 'Content & Marketing',
      popular: true,
      savings: '$2,400/year vs hiring writers',
      marketPrice: '$89-149/month',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom AI Models', 'React', 'Node.js'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automate your social media presence with AI-powered posting, engagement, and analytics.',
      icon: Globe,
      price: 49,
      period: 'month',
      features: [
        'Auto Post Scheduling',
        'AI-Generated Captions',
        'Hashtag Optimization',
        'Engagement Analytics',
        'Multi-Platform Support',
        'Content Calendar',
        'Trend Analysis',
        'Auto-Responder'
      ],
      category: 'Content & Marketing',
      popular: true,
      savings: '$3,600/year vs social media manager',
      marketPrice: '$99-199/month',
      technologies: ['Instagram API', 'Twitter API', 'LinkedIn API', 'AI Content Generation', 'Analytics'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      description: 'Create, send, and optimize email campaigns with AI-powered personalization and automation.',
      icon: Mail,
      price: 39,
      period: 'month',
      features: [
        'AI Email Templates',
        'Personalization Engine',
        'A/B Testing',
        'Send Time Optimization',
        'List Segmentation',
        'Analytics Dashboard',
        'Automation Workflows',
        'Deliverability Tools'
      ],
      category: 'Content & Marketing',
      savings: '$2,880/year vs email marketing tools',
      marketPrice: '$79-149/month',
      technologies: ['SendGrid', 'Mailchimp API', 'Machine Learning', 'Personalization AI'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer Pro',
      description: 'Boost your website rankings with AI-powered SEO analysis, keyword research, and content optimization.',
      icon: TrendingUp,
      price: 79,
      period: 'month',
      features: [
        'Keyword Research',
        'Content Optimization',
        'Technical SEO Audit',
        'Competitor Analysis',
        'Rank Tracking',
        'Backlink Analysis',
        'Local SEO Tools',
        'Performance Monitoring'
      ],
      category: 'Content & Marketing',
      popular: true,
      savings: '$4,800/year vs SEO consultant',
      marketPrice: '$149-299/month',
      technologies: ['Google Search Console API', 'SEMrush API', 'Ahrefs API', 'AI Analysis'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Analytics & Business Intelligence
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Get intelligent insights from your data with AI-powered analytics and automated reporting.',
      icon: BarChart,
      price: 79,
      period: 'month',
      features: [
        'Real-time Analytics',
        'AI Insights & Predictions',
        'Custom Dashboards',
        'Automated Reports',
        'Data Visualization',
        'Trend Analysis',
        'Alert System',
        'API Integrations'
      ],
      category: 'Analytics & Data',
      popular: true,
      savings: '$4,800/year vs analytics consultants',
      marketPrice: '$149-299/month',
      technologies: ['Google Analytics API', 'Tableau', 'Power BI', 'Custom AI Models'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights Platform',
      description: 'Understand your customers better with AI-powered behavior analysis, sentiment tracking, and churn prediction.',
      icon: Users,
      price: 99,
      period: 'month',
      features: [
        'Customer Segmentation',
        'Sentiment Analysis',
        'Churn Prediction',
        'Lifetime Value Analysis',
        'Behavioral Tracking',
        'Personalization Engine',
        'Recommendation System',
        'Real-time Alerts'
      ],
      category: 'Analytics & Data',
      savings: '$6,000/year vs data scientists',
      marketPrice: '$199-399/month',
      technologies: ['Machine Learning', 'NLP', 'Customer Data Platforms', 'Predictive Analytics'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-sales-forecasting',
      name: 'AI Sales Forecasting Pro',
      description: 'Predict sales trends and optimize revenue with AI-powered forecasting and pipeline analysis.',
      icon: Target,
      price: 89,
      period: 'month',
      features: [
        'Sales Forecasting',
        'Pipeline Analysis',
        'Lead Scoring',
        'Revenue Optimization',
        'Market Trend Analysis',
        'Performance Tracking',
        'Risk Assessment',
        'Custom Models'
      ],
      category: 'Analytics & Data',
      savings: '$7,200/year vs sales analysts',
      marketPrice: '$179-349/month',
      technologies: ['Time Series Analysis', 'Machine Learning', 'CRM Integration', 'Predictive Modeling'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Productivity & Automation
    {
      id: 'ai-task-automation',
      name: 'AI Task Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation tools.',
      icon: Settings,
      price: 59,
      period: 'month',
      features: [
        'Workflow Automation',
        'Task Scheduling',
        'Data Processing',
        'Email Automation',
        'Document Processing',
        'API Integrations',
        'Custom Workflows',
        'Performance Monitoring'
      ],
      category: 'Productivity & Automation',
      popular: true,
      savings: '$3,600/year vs manual work',
      marketPrice: '$99-199/month',
      technologies: ['Zapier API', 'Microsoft Power Automate', 'Custom AI', 'Workflow Engines'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-meeting-assistant',
      name: 'AI Meeting Assistant Pro',
      description: 'Transform your meetings with AI-powered transcription, summaries, action items, and insights.',
      icon: Mic,
      price: 49,
      period: 'month',
      features: [
        'Real-time Transcription',
        'Meeting Summaries',
        'Action Item Extraction',
        'Speaker Identification',
        'Sentiment Analysis',
        'Follow-up Reminders',
        'Integration with Calendars',
        'Multi-language Support'
      ],
      category: 'Productivity & Automation',
      savings: '$2,400/year vs manual note-taking',
      marketPrice: '$79-149/month',
      technologies: ['Speech Recognition', 'NLP', 'Calendar APIs', 'AI Summarization'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      description: 'Extract, analyze, and process documents automatically with AI-powered OCR and data extraction.',
      icon: FileText,
      price: 69,
      period: 'month',
      features: [
        'OCR Technology',
        'Data Extraction',
        'Document Classification',
        'Form Processing',
        'Invoice Processing',
        'Contract Analysis',
        'Compliance Checking',
        'Batch Processing'
      ],
      category: 'Productivity & Automation',
      savings: '$4,200/year vs manual processing',
      marketPrice: '$129-249/month',
      technologies: ['OCR', 'Computer Vision', 'NLP', 'Document AI'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI E-commerce & Sales
    {
      id: 'ai-ecommerce-optimizer',
      name: 'AI E-commerce Optimizer',
      description: 'Boost your online store performance with AI-powered product recommendations, pricing, and conversion optimization.',
      icon: ShoppingCart,
      price: 99,
      period: 'month',
      features: [
        'Product Recommendations',
        'Dynamic Pricing',
        'Inventory Optimization',
        'Customer Segmentation',
        'A/B Testing',
        'Conversion Tracking',
        'Personalized Shopping',
        'Revenue Optimization'
      ],
      category: 'E-commerce & Sales',
      popular: true,
      savings: '$6,000/year vs e-commerce consultants',
      marketPrice: '$199-399/month',
      technologies: ['Recommendation Engines', 'Machine Learning', 'E-commerce APIs', 'Personalization AI'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder Pro',
      description: 'Create intelligent chatbots for customer support, sales, and engagement with no coding required.',
      icon: MessageCircle,
      price: 79,
      period: 'month',
      features: [
        'No-Code Builder',
        'Multi-Channel Support',
        'Natural Language Processing',
        'Integration APIs',
        'Analytics Dashboard',
        'Custom Training',
        'Live Chat Handoff',
        '24/7 Availability'
      ],
      category: 'E-commerce & Sales',
      savings: '$3,600/year vs customer support staff',
      marketPrice: '$149-299/month',
      technologies: ['NLP', 'Dialogflow', 'Custom AI Models', 'Webhook Integration'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      description: 'Optimize your inventory with AI-powered demand forecasting, automated reordering, and cost optimization.',
      icon: Package,
      price: 89,
      period: 'month',
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Stock Optimization',
        'Supplier Management',
        'Cost Analysis',
        'Seasonal Adjustments',
        'Multi-location Support',
        'Real-time Alerts'
      ],
      category: 'E-commerce & Sales',
      savings: '$4,800/year vs inventory managers',
      marketPrice: '$179-349/month',
      technologies: ['Time Series Forecasting', 'Machine Learning', 'Supply Chain APIs', 'Optimization Algorithms'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Finance & Accounting
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator Pro',
      description: 'Create, send, and track invoices automatically with AI-powered billing and payment processing.',
      icon: DollarSign,
      price: 49,
      period: 'month',
      features: [
        'Automated Invoice Creation',
        'Payment Processing',
        'Client Portal',
        'Expense Tracking',
        'Tax Calculations',
        'Multi-currency Support',
        'Recurring Billing',
        'Financial Reports'
      ],
      category: 'Finance & Accounting',
      savings: '$2,400/year vs accounting software',
      marketPrice: '$79-149/month',
      technologies: ['Stripe API', 'QuickBooks API', 'Tax APIs', 'Payment Processing'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Track and categorize expenses automatically with AI-powered receipt scanning and financial insights.',
      icon: Receipt,
      price: 39,
      period: 'month',
      features: [
        'Receipt Scanning',
        'Auto Categorization',
        'Expense Analytics',
        'Budget Tracking',
        'Tax Preparation',
        'Multi-user Support',
        'Mobile App',
        'Integration APIs'
      ],
      category: 'Finance & Accounting',
      savings: '$1,800/year vs manual tracking',
      marketPrice: '$69-129/month',
      technologies: ['OCR', 'Machine Learning', 'Financial APIs', 'Mobile Development'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-financial-planner',
      name: 'AI Financial Planner',
      description: 'Get personalized financial advice and planning with AI-powered investment recommendations and budgeting.',
      icon: PieChart,
      price: 69,
      period: 'month',
      features: [
        'Investment Analysis',
        'Budget Planning',
        'Goal Tracking',
        'Risk Assessment',
        'Tax Optimization',
        'Retirement Planning',
        'Portfolio Management',
        'Financial Education'
      ],
      category: 'Finance & Accounting',
      savings: '$3,600/year vs financial advisors',
      marketPrice: '$129-249/month',
      technologies: ['Financial APIs', 'Machine Learning', 'Risk Analysis', 'Investment Algorithms'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Healthcare & Wellness
    {
      id: 'ai-health-monitor',
      name: 'AI Health Monitor Pro',
      description: 'Track and analyze your health with AI-powered monitoring, predictions, and personalized recommendations.',
      icon: Heart,
      price: 59,
      period: 'month',
      features: [
        'Health Tracking',
        'Symptom Analysis',
        'Medication Reminders',
        'Health Predictions',
        'Doctor Integration',
        'Emergency Alerts',
        'Wearable Sync',
        'Family Monitoring'
      ],
      category: 'Healthcare & Wellness',
      savings: '$2,400/year vs health monitoring devices',
      marketPrice: '$99-199/month',
      technologies: ['Health APIs', 'Wearable Integration', 'Machine Learning', 'Medical AI'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-fitness-coach',
      name: 'AI Fitness Coach Pro',
      description: 'Get personalized fitness plans and coaching with AI-powered workout generation and progress tracking.',
      icon: Activity,
      price: 39,
      period: 'month',
      features: [
        'Personalized Workouts',
        'Nutrition Tracking',
        'Progress Monitoring',
        'Goal Setting',
        'Community Features',
        'Wearable Integration',
        'Injury Prevention',
        'Performance Analytics'
      ],
      category: 'Healthcare & Wellness',
      savings: '$1,800/year vs personal trainers',
      marketPrice: '$69-129/month',
      technologies: ['Fitness APIs', 'Wearable Integration', 'Machine Learning', 'Health Analytics'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-mental-health',
      name: 'AI Mental Health Assistant',
      description: 'Support your mental wellbeing with AI-powered mood tracking, stress analysis, and wellness recommendations.',
      icon: Brain,
      price: 49,
      period: 'month',
      features: [
        'Mood Tracking',
        'Stress Analysis',
        'Wellness Recommendations',
        'Crisis Intervention',
        'Progress Tracking',
        'Professional Referrals',
        'Meditation Guidance',
        'Sleep Analysis'
      ],
      category: 'Healthcare & Wellness',
      savings: '$2,400/year vs therapy sessions',
      marketPrice: '$79-149/month',
      technologies: ['NLP', 'Mental Health APIs', 'Machine Learning', 'Wellness AI'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Education & Learning
    {
      id: 'ai-language-learning',
      name: 'AI Language Learning Pro',
      description: 'Master new languages with AI-powered personalized lessons, speech recognition, and adaptive learning.',
      icon: Globe,
      price: 29,
      period: 'month',
      features: [
        'AI Tutoring',
        'Speech Recognition',
        'Adaptive Learning',
        'Progress Tracking',
        'Multi-language Support',
        'Cultural Context',
        'Conversation Practice',
        'Pronunciation Analysis'
      ],
      category: 'Education & Learning',
      popular: true,
      savings: '$1,200/year vs language classes',
      marketPrice: '$49-99/month',
      technologies: ['Speech Recognition', 'NLP', 'Adaptive Learning', 'Language AI'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-study-assistant',
      name: 'AI Study Assistant Pro',
      description: 'Enhance your learning with AI-powered study tools, note-taking, and personalized learning paths.',
      icon: BookOpen,
      price: 39,
      period: 'month',
      features: [
        'Smart Note-taking',
        'Quiz Generation',
        'Learning Paths',
        'Progress Tracking',
        'Study Reminders',
        'Knowledge Gaps Analysis',
        'Flashcard Creation',
        'Exam Preparation'
      ],
      category: 'Education & Learning',
      savings: '$1,800/year vs tutoring services',
      marketPrice: '$69-129/month',
      technologies: ['NLP', 'Educational AI', 'Learning Analytics', 'Content Generation'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-skill-assessment',
      name: 'AI Skill Assessment Platform',
      description: 'Test and certify skills with AI-powered adaptive assessments and performance analytics.',
      icon: GraduationCap,
      price: 79,
      period: 'month',
      features: [
        'Adaptive Testing',
        'Skill Certification',
        'Performance Analytics',
        'Progress Tracking',
        'Custom Assessments',
        'Industry Standards',
        'Proctoring Tools',
        'Certification Management'
      ],
      category: 'Education & Learning',
      savings: '$3,600/year vs assessment services',
      marketPrice: '$149-299/month',
      technologies: ['Adaptive Testing', 'Machine Learning', 'Assessment AI', 'Certification Systems'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Developer Tools
    {
      id: 'ai-code-reviewer',
      name: 'AI Code Reviewer Pro',
      description: 'Improve code quality with AI-powered code analysis, bug detection, and security scanning.',
      icon: Code,
      price: 89,
      period: 'month',
      features: [
        'Automated Code Review',
        'Bug Detection',
        'Security Scanning',
        'Performance Analysis',
        'Code Quality Metrics',
        'Git Integration',
        'Custom Rules',
        'Team Collaboration'
      ],
      category: 'Developer Tools',
      popular: true,
      savings: '$4,800/year vs code review tools',
      marketPrice: '$149-299/month',
      technologies: ['Static Analysis', 'Security Scanning', 'Machine Learning', 'Git Integration'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-api-builder',
      name: 'AI API Builder Pro',
      description: 'Create and manage APIs effortlessly with AI-powered code generation and documentation.',
      icon: Layers,
      price: 99,
      period: 'month',
      features: [
        'API Code Generation',
        'Auto Documentation',
        'Testing Tools',
        'Performance Monitoring',
        'Version Management',
        'Security Scanning',
        'Rate Limiting',
        'Analytics Dashboard'
      ],
      category: 'Developer Tools',
      savings: '$6,000/year vs API development',
      marketPrice: '$199-399/month',
      technologies: ['Code Generation', 'API Management', 'Documentation AI', 'Testing Automation'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-database-optimizer',
      name: 'AI Database Optimizer',
      description: 'Optimize database performance with AI-powered query analysis, indexing, and performance tuning.',
      icon: Database,
      price: 79,
      period: 'month',
      features: [
        'Query Optimization',
        'Index Recommendations',
        'Performance Monitoring',
        'Capacity Planning',
        'Security Analysis',
        'Backup Optimization',
        'Migration Tools',
        'Real-time Alerts'
      ],
      category: 'Developer Tools',
      savings: '$4,800/year vs database administrators',
      marketPrice: '$149-299/month',
      technologies: ['Database AI', 'Query Optimization', 'Performance Analysis', 'Monitoring Tools'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Security & Compliance
    {
      id: 'ai-security-scanner',
      name: 'AI Security Scanner Pro',
      description: 'Protect your applications with AI-powered security scanning, vulnerability detection, and threat analysis.',
      icon: Shield,
      price: 99,
      period: 'month',
      features: [
        'Vulnerability Scanning',
        'Threat Detection',
        'Security Analysis',
        'Compliance Checking',
        'Penetration Testing',
        'Risk Assessment',
        'Incident Response',
        'Security Reports'
      ],
      category: 'Security & Compliance',
      popular: true,
      savings: '$7,200/year vs security consultants',
      marketPrice: '$199-399/month',
      technologies: ['Security AI', 'Vulnerability Scanning', 'Threat Intelligence', 'Compliance Tools'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-compliance-manager',
      name: 'AI Compliance Manager',
      description: 'Ensure regulatory compliance with AI-powered monitoring, reporting, and risk assessment.',
      icon: CheckCircle,
      price: 149,
      period: 'month',
      features: [
        'Compliance Monitoring',
        'Risk Assessment',
        'Automated Reporting',
        'Policy Management',
        'Audit Trails',
        'Regulatory Updates',
        'Training Management',
        'Incident Tracking'
      ],
      category: 'Security & Compliance',
      savings: '$9,600/year vs compliance consultants',
      marketPrice: '$299-599/month',
      technologies: ['Compliance AI', 'Regulatory APIs', 'Risk Analysis', 'Audit Tools'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI IoT & Smart Devices
    {
      id: 'ai-iot-manager',
      name: 'AI IoT Manager Pro',
      description: 'Manage and optimize IoT devices with AI-powered monitoring, automation, and predictive maintenance.',
      icon: Wifi,
      price: 89,
      period: 'month',
      features: [
        'Device Management',
        'Predictive Maintenance',
        'Energy Optimization',
        'Security Monitoring',
        'Data Analytics',
        'Automation Rules',
        'Alert System',
        'Integration APIs'
      ],
      category: 'IoT & Smart Devices',
      savings: '$6,000/year vs IoT management',
      marketPrice: '$179-349/month',
      technologies: ['IoT Platforms', 'Machine Learning', 'Predictive Analytics', 'Device APIs'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-smart-home',
      name: 'AI Smart Home Controller',
      description: 'Control and automate your smart home with AI-powered voice commands, learning, and optimization.',
      icon: Home,
      price: 59,
      period: 'month',
      features: [
        'Voice Control',
        'Learning Automation',
        'Energy Optimization',
        'Security Integration',
        'Scene Management',
        'Device Control',
        'Scheduling',
        'Mobile App'
      ],
      category: 'IoT & Smart Devices',
      savings: '$2,400/year vs smart home systems',
      marketPrice: '$99-199/month',
      technologies: ['Voice AI', 'Smart Home APIs', 'Automation Logic', 'Mobile Development'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    'All',
    'Content & Marketing',
    'Analytics & Data',
    'Productivity & Automation',
    'E-commerce & Sales',
    'Finance & Accounting',
    'Healthcare & Wellness',
    'Education & Learning',
    'Developer Tools',
    'Security & Compliance',
    'IoT & Smart Devices'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const popularServices = microSAASServices.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI-Powered Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with our comprehensive suite of 30+ intelligent micro SAAS applications. 
            Each tool is designed to solve specific business challenges with cutting-edge AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search micro SAAS solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Services */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Most Popular Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.map(service => (
                <div key={service.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-cyan-400">${service.price}/{service.period}</span>
                    <span className="text-sm text-green-400">{service.savings}</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-4">
                    Market Price: {service.marketPrice}
                  </div>
                  <a
                    href={`#${service.id}`}
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-all duration-300 hover:neon-glow"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            All Micro SAAS Solutions ({filteredServices.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(service => (
              <div key={service.id} id={service.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-purple-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-purple-400 text-xs">+{service.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-cyan-400">${service.price}/{service.period}</span>
                    {service.popular && (
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mb-2">
                    Market Price: {service.marketPrice}
                  </div>
                  <div className="text-xs text-green-400 mb-4">
                    {service.savings}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="tel:+13024640950"
                      className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                    >
                      Call Now
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 text-center bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                    >
                      Email Us
                    </a>
                  </div>
                  
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    {service.contactInfo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get started with our micro SAAS solutions today. Choose from 30+ AI-powered tools designed to solve your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;