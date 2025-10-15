'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Shield, 
  Clock, 
  TrendingUp,
  BarChart3,
  Database,
  Smartphone,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Zap,
  Code,
  Eye,
  MessageSquare,
  Cpu,
  Network,
  FileText,
  Settings,
  CreditCard,
  Lock,
  Cloud,
  Wifi,
  Monitor,
  Server,
  Key,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Edit,
  Trash,
  Plus,
  Minus,
  Refresh,
  Play,
  Pause,
  Stop,
  Volume2,
  Camera,
  Image,
  Video,
  Music,
  Headphones,
  Mic,
  MicOff,
  Bell,
  BellOff,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Bookmark,
  Tag,
  Calendar,
  ClockIcon,
  Timer,
  Stopwatch,
  AlarmClock,
  CalendarDays,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
  Sun,
  Moon,
  CloudSun,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  CloudDrizzle,
  CloudHail,
  CloudSleet,
  CloudWind,
  CloudMoon,
  CloudMoonRain,
  CloudMoonSnow,
  CloudMoonLightning,
  CloudMoonFog,
  CloudMoonDrizzle,
  CloudMoonHail,
  CloudMoonSleet,
  CloudMoonWind,
  CloudSunRain,
  CloudSunSnow,
  CloudSunLightning,
  CloudSunFog,
  CloudSunDrizzle,
  CloudSunHail,
  CloudSunSleet,
  CloudSunWind,
  Package,
  Calculator,
  Leaf,
  Wheat,
  Code2,
  Heart
} from 'lucide-react';

const MicroSaaSSolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaaSServices = [
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder Pro',
      price: '$29/mo',
      originalPrice: '$49/mo',
      description: 'Build intelligent chatbots without coding',
      longDescription: 'Create sophisticated AI-powered chatbots for your website, social media, and messaging platforms with our drag-and-drop builder.',
      features: [
        'Drag-and-Drop Interface',
        'Natural Language Processing',
        'Multi-platform Integration',
        'Custom Training & Learning',
        'Analytics Dashboard',
        'A/B Testing',
        'Voice & Text Support',
        'Multi-language Support',
        'Custom Branding',
        'API Access'
      ],
      benefits: [
        'Reduce support costs by 70%',
        'Improve response time by 90%',
        'Handle 500+ conversations simultaneously',
        '24/7 availability',
        'Easy setup in minutes'
      ],
      category: 'AI Tools',
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler',
      price: '$19/mo',
      originalPrice: '$39/mo',
      description: 'Schedule and manage social media posts',
      longDescription: 'Streamline your social media management with our comprehensive scheduling and analytics platform.',
      features: [
        'Multi-platform Scheduling',
        'Content Calendar',
        'Auto-posting',
        'Analytics & Insights',
        'Team Collaboration',
        'Content Library',
        'Hashtag Suggestions',
        'Best Time Optimization',
        'Bulk Upload',
        'Mobile App'
      ],
      benefits: [
        'Save 10+ hours per week',
        'Increase engagement by 40%',
        'Post at optimal times',
        'Track performance metrics',
        'Collaborate with team'
      ],
      category: 'Marketing',
      icon: <Share className="w-8 h-8 text-purple-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/social-media-scheduler'
    },
    {
      id: 'email-marketing-automation',
      name: 'Email Marketing Automation',
      price: '$39/mo',
      originalPrice: '$79/mo',
      description: 'Automate email campaigns and nurture leads',
      longDescription: 'Create sophisticated email marketing campaigns with our powerful automation platform and drag-and-drop editor.',
      features: [
        'Drag-and-Drop Editor',
        'Email Automation Workflows',
        'A/B Testing',
        'Advanced Segmentation',
        'Personalization Engine',
        'Analytics Dashboard',
        'Template Library',
        'List Management',
        'Deliverability Optimization',
        'Mobile Optimization'
      ],
      benefits: [
        'Increase open rates by 60%',
        'Automate lead nurturing',
        'Personalize at scale',
        'Track detailed metrics',
        'Improve deliverability'
      ],
      category: 'Marketing',
      icon: <Mail className="w-8 h-8 text-green-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/email-marketing-automation'
    },
    {
      id: 'project-management-tool',
      name: 'Project Management Pro',
      price: '$49/mo',
      originalPrice: '$99/mo',
      description: 'Complete project management solution',
      longDescription: 'Manage projects, teams, and deadlines with our comprehensive project management platform designed for modern teams.',
      features: [
        'Kanban Boards',
        'Gantt Charts',
        'Time Tracking',
        'Team Collaboration',
        'File Sharing',
        'Task Dependencies',
        'Resource Management',
        'Budget Tracking',
        'Reporting & Analytics',
        'Mobile App'
      ],
      benefits: [
        'Improve team productivity by 50%',
        'Better project visibility',
        'Streamline communication',
        'Track progress in real-time',
        'Meet deadlines consistently'
      ],
      category: 'Productivity',
      icon: <Target className="w-8 h-8 text-blue-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/project-management-tool'
    },
    {
      id: 'crm-sales-pipeline',
      name: 'CRM Sales Pipeline',
      price: '$59/mo',
      originalPrice: '$119/mo',
      description: 'Manage leads and close more deals',
      longDescription: 'Streamline your sales process with our comprehensive CRM that helps you track leads, manage pipelines, and close more deals.',
      features: [
        'Lead Management',
        'Sales Pipeline Tracking',
        'Contact Management',
        'Deal Forecasting',
        'Email Integration',
        'Task Automation',
        'Reporting & Analytics',
        'Mobile CRM',
        'Team Collaboration',
        'Custom Fields'
      ],
      benefits: [
        'Increase sales by 35%',
        'Better lead tracking',
        'Improve follow-up process',
        'Forecast sales accurately',
        'Streamline sales operations'
      ],
      category: 'Sales',
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/crm-sales-pipeline'
    },
    {
      id: 'inventory-management',
      name: 'Inventory Management System',
      price: '$79/mo',
      originalPrice: '$159/mo',
      description: 'Track inventory and optimize stock levels',
      longDescription: 'Manage your inventory efficiently with our comprehensive system that helps you track stock, prevent shortages, and optimize ordering.',
      features: [
        'Real-time Inventory Tracking',
        'Low Stock Alerts',
        'Purchase Order Management',
        'Supplier Management',
        'Barcode Scanning',
        'Multi-location Support',
        'Reporting & Analytics',
        'Mobile App',
        'Integration APIs',
        'Automated Reordering'
      ],
      benefits: [
        'Reduce stockouts by 80%',
        'Optimize inventory levels',
        'Improve cash flow',
        'Streamline ordering process',
        'Better supplier relationships'
      ],
      category: 'E-commerce',
      icon: <Package className="w-8 h-8 text-indigo-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/inventory-management'
    },
    {
      id: 'customer-support-ticket',
      name: 'Customer Support Ticket System',
      price: '$39/mo',
      originalPrice: '$79/mo',
      description: 'Streamline customer support operations',
      longDescription: 'Manage customer inquiries efficiently with our comprehensive ticketing system that helps you provide excellent customer service.',
      features: [
        'Ticket Management',
        'Multi-channel Support',
        'Knowledge Base',
        'SLA Management',
        'Team Collaboration',
        'Automation Rules',
        'Customer Portal',
        'Reporting & Analytics',
        'Mobile App',
        'Integration APIs'
      ],
      benefits: [
        'Improve response times by 60%',
        'Better ticket organization',
        'Reduce support costs',
        'Increase customer satisfaction',
        'Streamline support workflow'
      ],
      category: 'Support',
      icon: <Headphones className="w-8 h-8 text-pink-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/customer-support-ticket'
    },
    {
      id: 'analytics-dashboard',
      name: 'Business Analytics Dashboard',
      price: '$49/mo',
      originalPrice: '$99/mo',
      description: 'Visualize data and make informed decisions',
      longDescription: 'Transform your business data into actionable insights with our comprehensive analytics platform and customizable dashboards.',
      features: [
        'Custom Dashboards',
        'Real-time Data Visualization',
        'Automated Reports',
        'KPI Tracking',
        'Data Integration',
        'Mobile Analytics',
        'Team Collaboration',
        'Custom Metrics',
        'Alert System',
        'Export Capabilities'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends and opportunities',
        'Improve operational efficiency',
        'Reduce reporting time by 90%',
        'Scale with business growth'
      ],
      category: 'Analytics',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/analytics-dashboard'
    },
    {
      id: 'file-storage-collaboration',
      name: 'File Storage & Collaboration',
      price: '$29/mo',
      originalPrice: '$59/mo',
      description: 'Secure file storage and team collaboration',
      longDescription: 'Store, share, and collaborate on files with our secure cloud storage platform designed for modern teams.',
      features: [
        'Secure Cloud Storage',
        'File Sharing & Permissions',
        'Version Control',
        'Team Collaboration',
        'Mobile Access',
        'Sync Across Devices',
        'Advanced Security',
        'Integration APIs',
        'Backup & Recovery',
        'Custom Branding'
      ],
      benefits: [
        'Centralize file management',
        'Improve team collaboration',
        'Secure file sharing',
        'Access files anywhere',
        'Reduce storage costs'
      ],
      category: 'Storage',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/file-storage-collaboration'
    },
    {
      id: 'time-tracking-productivity',
      name: 'Time Tracking & Productivity',
      price: '$19/mo',
      originalPrice: '$39/mo',
      description: 'Track time and boost team productivity',
      longDescription: 'Monitor time spent on projects and tasks with our comprehensive time tracking and productivity analytics platform.',
      features: [
        'Time Tracking',
        'Project Time Allocation',
        'Productivity Analytics',
        'Team Management',
        'Invoicing Integration',
        'Mobile App',
        'Offline Tracking',
        'Reporting & Insights',
        'Integration APIs',
        'Custom Categories'
      ],
      benefits: [
        'Improve time management',
        'Track project profitability',
        'Identify productivity patterns',
        'Streamline invoicing',
        'Better resource allocation'
      ],
      category: 'Productivity',
      icon: <Clock className="w-8 h-8 text-green-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/time-tracking-productivity'
    },
    {
      id: 'website-builder',
      name: 'AI Website Builder',
      price: '$39/mo',
      originalPrice: '$79/mo',
      description: 'Build professional websites with AI assistance',
      longDescription: 'Create stunning websites without coding using our AI-powered website builder with drag-and-drop functionality.',
      features: [
        'AI-Powered Design',
        'Drag-and-Drop Editor',
        'Mobile Responsive',
        'SEO Optimization',
        'E-commerce Integration',
        'Custom Domains',
        'SSL Certificates',
        'Analytics Integration',
        'Template Library',
        '24/7 Support'
      ],
      benefits: [
        'Build websites in minutes',
        'No coding required',
        'Professional results',
        'SEO optimized',
        'Mobile responsive'
      ],
      category: 'Web Development',
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/website-builder'
    },
    {
      id: 'api-management',
      name: 'API Management Platform',
      price: '$99/mo',
      originalPrice: '$199/mo',
      description: 'Manage and monetize your APIs',
      longDescription: 'Build, deploy, and manage APIs with our comprehensive platform that includes analytics, security, and monetization features.',
      features: [
        'API Gateway',
        'Rate Limiting',
        'Authentication & Authorization',
        'Analytics & Monitoring',
        'Documentation Generator',
        'Developer Portal',
        'Monetization Tools',
        'Version Management',
        'Security Policies',
        'Integration APIs'
      ],
      benefits: [
        'Secure API management',
        'Monitor API performance',
        'Generate revenue from APIs',
        'Improve developer experience',
        'Scale API infrastructure'
      ],
      category: 'Development',
      icon: <Code className="w-8 h-8 text-red-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/api-management'
    },
    {
      id: 'ai-accounting-assistant',
      name: 'AI Accounting Assistant Pro',
      price: '$49/mo',
      originalPrice: '$99/mo',
      description: 'Automated bookkeeping and financial management',
      longDescription: 'Streamline your accounting processes with our AI-powered assistant that handles invoicing, expense tracking, and financial reporting.',
      features: [
        'Automated Bookkeeping',
        'Invoice Generation & Management',
        'Expense Categorization',
        'Tax Preparation Support',
        'Financial Reporting',
        'Receipt Scanning & OCR',
        'Bank Reconciliation',
        'Multi-currency Support',
        'Integration with Banks',
        'Compliance Monitoring'
      ],
      benefits: [
        'Save 20+ hours per month',
        'Reduce accounting errors by 95%',
        'Automated tax preparation',
        'Real-time financial insights',
        'Compliance with regulations'
      ],
      category: 'AI Tools',
      icon: <Calculator className="w-8 h-8 text-green-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-accounting-assistant'
    },
    {
      id: 'social-media-analytics',
      name: 'Social Media Analytics Pro',
      price: '$39/mo',
      originalPrice: '$79/mo',
      description: 'Advanced social media performance tracking',
      longDescription: 'Track and analyze your social media performance across all platforms with detailed insights and competitor analysis.',
      features: [
        'Multi-platform Analytics',
        'Competitor Analysis',
        'Hashtag Performance',
        'Audience Insights',
        'Content Performance',
        'Engagement Tracking',
        'ROI Measurement',
        'Automated Reports',
        'Trend Analysis',
        'Custom Dashboards'
      ],
      benefits: [
        'Increase engagement by 60%',
        'Identify top-performing content',
        'Track competitor strategies',
        'Measure social media ROI',
        'Optimize posting times'
      ],
      category: 'Analytics',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/social-media-analytics'
    },
    {
      id: 'lead-generation-automation',
      name: 'Lead Generation Automation',
      price: '$79/mo',
      originalPrice: '$159/mo',
      description: 'Automated lead generation and nurturing',
      longDescription: 'Generate and nurture leads automatically with our comprehensive platform that includes email sequences, lead scoring, and CRM integration.',
      features: [
        'Automated Lead Capture',
        'Email Sequence Automation',
        'Lead Scoring & Qualification',
        'CRM Integration',
        'A/B Testing',
        'Behavioral Tracking',
        'Personalization Engine',
        'Multi-channel Campaigns',
        'Analytics & Reporting',
        'Compliance Management'
      ],
      benefits: [
        'Increase lead quality by 80%',
        'Reduce manual work by 70%',
        'Improve conversion rates',
        'Scale lead generation',
        'Better lead nurturing'
      ],
      category: 'Marketing',
      icon: <Target className="w-8 h-8 text-purple-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/lead-generation-automation'
    },
    {
      id: 'ai-content-moderation',
      name: 'AI Content Moderation Pro',
      price: '$59/mo',
      originalPrice: '$119/mo',
      description: 'Automated content moderation and safety',
      longDescription: 'Keep your platform safe with AI-powered content moderation that automatically detects and filters inappropriate content.',
      features: [
        'Image & Video Moderation',
        'Text Content Analysis',
        'Real-time Processing',
        'Custom Rule Configuration',
        'Multi-language Support',
        'False Positive Reduction',
        'API Integration',
        'Bulk Processing',
        'Audit Trails',
        'Custom Training'
      ],
      benefits: [
        'Reduce moderation costs by 90%',
        'Improve response time',
        'Scale content review',
        'Maintain platform safety',
        'Customize moderation rules'
      ],
      category: 'AI Tools',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-content-moderation'
    },
    {
      id: 'ai-climate-solutions',
      name: 'AI Climate Solutions Pro',
      price: '$89/mo',
      originalPrice: '$179/mo',
      description: 'AI-powered environmental monitoring and sustainability',
      longDescription: 'Monitor and optimize your environmental impact with AI-driven climate solutions for carbon tracking and sustainability reporting.',
      features: [
        'Carbon Footprint Tracking',
        'Energy Usage Monitoring',
        'Sustainability Reporting',
        'Environmental Compliance',
        'Predictive Analytics',
        'Green Energy Optimization',
        'Waste Reduction Analysis',
        'Supply Chain Monitoring',
        'ESG Reporting',
        'Climate Risk Assessment'
      ],
      benefits: [
        'Reduce carbon footprint by 40%',
        'Improve sustainability scores',
        'Meet compliance requirements',
        'Optimize energy usage',
        'Enhance ESG ratings'
      ],
      category: 'AI Tools',
      icon: <Leaf className="w-8 h-8 text-green-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-climate-solutions'
    },
    {
      id: 'ai-agricultural-intelligence',
      name: 'AI Agricultural Intelligence',
      price: '$129/mo',
      originalPrice: '$259/mo',
      description: 'Smart farming and crop optimization',
      longDescription: 'Optimize agricultural operations with AI-powered insights for crop monitoring, yield prediction, and resource management.',
      features: [
        'Crop Health Monitoring',
        'Yield Prediction',
        'Weather Analysis',
        'Soil Quality Assessment',
        'Pest Detection',
        'Irrigation Optimization',
        'Harvest Planning',
        'Market Price Analysis',
        'Supply Chain Tracking',
        'Compliance Reporting'
      ],
      benefits: [
        'Increase crop yield by 25%',
        'Reduce resource waste',
        'Improve crop quality',
        'Optimize harvest timing',
        'Reduce environmental impact'
      ],
      category: 'AI Tools',
      icon: <Wheat className="w-8 h-8 text-yellow-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-agricultural-intelligence'
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Pro',
      price: '$149/mo',
      originalPrice: '$299/mo',
      description: 'Advanced business analytics and insights',
      longDescription: 'Transform your business data into actionable insights with our comprehensive AI-powered business intelligence platform.',
      features: [
        'Predictive Analytics',
        'Custom Dashboard Builder',
        'Real-time Data Visualization',
        'Automated Insights',
        'KPI Monitoring',
        'Trend Analysis',
        'Forecasting Models',
        'Data Integration',
        'Mobile Analytics',
        'White-label Solutions'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify business opportunities',
        'Improve operational efficiency',
        'Reduce reporting time by 85%',
        'Scale with business growth'
      ],
      category: 'Analytics',
      icon: <TrendingUp className="w-8 h-8 text-indigo-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-business-intelligence'
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant Pro',
      price: '$79/mo',
      originalPrice: '$159/mo',
      description: 'AI-powered coding assistance and automation',
      longDescription: 'Accelerate your development with our AI code assistant that provides intelligent suggestions, debugging, and code generation.',
      features: [
        'Code Generation & Completion',
        'Bug Detection & Fixing',
        'Code Review & Optimization',
        'Documentation Generation',
        'Test Case Creation',
        'Refactoring Suggestions',
        'Multi-language Support',
        'IDE Integration',
        'Learning from Codebase',
        'Security Analysis'
      ],
      benefits: [
        'Increase coding speed by 50%',
        'Reduce bugs by 70%',
        'Improve code quality',
        'Accelerate development',
        'Learn best practices'
      ],
      category: 'Development',
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-code-assistant'
    },
    {
      id: 'ai-customer-sentiment',
      name: 'AI Customer Sentiment Tracker',
      price: '$49/mo',
      originalPrice: '$99/mo',
      description: 'Real-time customer sentiment analysis',
      longDescription: 'Monitor and analyze customer sentiment across all channels to improve customer satisfaction and retention.',
      features: [
        'Real-time Sentiment Analysis',
        'Multi-channel Monitoring',
        'Emotion Detection',
        'Trend Analysis',
        'Alert System',
        'Customer Journey Mapping',
        'Feedback Categorization',
        'Competitor Analysis',
        'Custom Dashboards',
        'API Integration'
      ],
      benefits: [
        'Improve customer satisfaction',
        'Identify issues early',
        'Reduce churn rate',
        'Enhance customer experience',
        'Make data-driven decisions'
      ],
      category: 'AI Tools',
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-customer-sentiment'
    },
    {
      id: 'ai-cybersecurity-monitor',
      name: 'AI Cybersecurity Monitor Pro',
      price: '$199/mo',
      originalPrice: '$399/mo',
      description: 'Advanced AI-powered security monitoring',
      longDescription: 'Protect your business with AI-driven cybersecurity monitoring that detects and prevents threats in real-time.',
      features: [
        'Threat Detection & Prevention',
        'Real-time Monitoring',
        'Anomaly Detection',
        'Incident Response',
        'Vulnerability Scanning',
        'Compliance Monitoring',
        'Security Analytics',
        'Automated Remediation',
        'Multi-cloud Support',
        '24/7 Monitoring'
      ],
      benefits: [
        'Prevent security breaches',
        'Reduce false positives',
        'Improve response time',
        'Ensure compliance',
        'Protect sensitive data'
      ],
      category: 'Security',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-cybersecurity-monitor'
    }
  ];

  const categories = ['All', 'AI Tools', 'Marketing', 'Productivity', 'Sales', 'E-commerce', 'Support', 'Analytics', 'Storage', 'Web Development', 'Development', 'Security'];

  const features = [
    'Scalable Architecture',
    '24/7 Expert Support',
    'Easy Integration',
    'Custom Development',
    'Enterprise Security',
    'Performance Monitoring',
    'API Access',
    'White-label Options',
    'Mobile Apps',
    'Analytics Dashboard'
  ];

  const stats = [
    { number: '100+', label: 'Micro SaaS Solutions' },
    { number: '500+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29/mo',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 team members',
        'Basic features',
        'Email support',
        'Standard integrations',
        '1GB storage',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced features',
        'Priority support',
        'Custom integrations',
        '10GB storage',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full feature suite',
        '24/7 dedicated support',
        'Custom development',
        'Unlimited storage',
        'White-label solutions',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? microSaaSServices 
    : microSaaSServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Innovative Software as a Service | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of micro SaaS solutions including AI tools, marketing automation, project management, CRM, and more. Transform your business with our innovative software solutions." />
        <meta name="keywords" content="micro SaaS, software as a service, AI tools, marketing automation, project management, CRM, business software, productivity tools" />
        <meta property="og:title" content="Micro SaaS Solutions - Innovative Software as a Service" />
        <meta property="og:description" content="Discover our comprehensive suite of micro SaaS solutions including AI tools, marketing automation, project management, CRM, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SaaS Solutions
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover our comprehensive suite of innovative micro SaaS solutions designed to 
              streamline your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-purple-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of micro SaaS solutions designed to solve specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group relative ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-xs text-purple-400 font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-center py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm"
                  >
                    Learn More
                  </a>
                  <Link
                    to="/contact"
                    className="block w-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-center py-2 rounded-lg font-semibold transition-all duration-300 text-sm"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SaaS solutions are designed with modern businesses in mind, offering powerful features and seamless integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-slate-700/30 rounded-lg hover:bg-slate-600/30 transition-colors group">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SaaS Solutions Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include 14-day free trial and no setup fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                tier.popular ? 'ring-2 ring-purple-500 bg-slate-700/50' : ''
              }`}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white'
                      : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Start your free trial today and discover how our micro SaaS solutions can streamline your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicroSaaSSolutionsPage;