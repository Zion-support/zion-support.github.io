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
  Package
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
      price: '$89/mo',
      originalPrice: '$179/mo',
      description: 'Automated accounting and financial management',
      longDescription: 'Streamline your accounting processes with our AI-powered assistant that handles bookkeeping, invoicing, and financial reporting.',
      features: [
        'Automated Bookkeeping',
        'Invoice Generation & Tracking',
        'Expense Categorization',
        'Tax Preparation',
        'Financial Reporting',
        'Receipt Scanning',
        'Bank Reconciliation',
        'Multi-currency Support',
        'Compliance Management',
        'Integration with Banks'
      ],
      benefits: [
        'Save 20+ hours per week',
        'Reduce accounting errors by 95%',
        'Automate tax preparation',
        'Real-time financial insights',
        'Compliance with regulations'
      ],
      category: 'Finance',
      icon: <CreditCard className="w-8 h-8 text-emerald-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-accounting-assistant'
    },
    {
      id: 'ai-code-assistant-pro',
      name: 'AI Code Assistant Pro',
      price: '$79/mo',
      originalPrice: '$159/mo',
      description: 'AI-powered coding assistant and code review',
      longDescription: 'Enhance your development workflow with our AI-powered coding assistant that provides intelligent code suggestions, reviews, and optimization.',
      features: [
        'Intelligent Code Completion',
        'Code Review & Analysis',
        'Bug Detection & Fixes',
        'Documentation Generation',
        'Code Optimization',
        'Multi-language Support',
        'IDE Integration',
        'Team Collaboration',
        'Code Quality Metrics',
        'Security Vulnerability Scanning'
      ],
      benefits: [
        'Increase coding speed by 40%',
        'Reduce bugs by 60%',
        'Improve code quality',
        'Faster code reviews',
        'Better team productivity'
      ],
      category: 'Development',
      icon: <Code className="w-8 h-8 text-blue-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-code-assistant-pro'
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights Platform',
      price: '$149/mo',
      originalPrice: '$299/mo',
      description: 'Advanced customer analytics and behavior prediction',
      longDescription: 'Understand your customers better with our AI-powered insights platform that analyzes behavior, predicts churn, and optimizes customer experience.',
      features: [
        'Customer Behavior Analysis',
        'Churn Prediction',
        'Sentiment Analysis',
        'Customer Segmentation',
        'Lifetime Value Prediction',
        'Personalization Engine',
        'Real-time Analytics',
        'A/B Testing Platform',
        'Integration APIs',
        'Custom Dashboards'
      ],
      benefits: [
        'Reduce churn by 35%',
        'Increase customer lifetime value',
        'Improve personalization',
        'Better customer understanding',
        'Data-driven decisions'
      ],
      category: 'Analytics',
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-customer-insights'
    },
    {
      id: 'ai-content-moderation-pro',
      name: 'AI Content Moderation Pro',
      price: '$199/mo',
      originalPrice: '$399/mo',
      description: 'Automated content moderation and safety monitoring',
      longDescription: 'Keep your platform safe with our advanced AI content moderation system that automatically detects and filters inappropriate content.',
      features: [
        'Image & Video Moderation',
        'Text Content Analysis',
        'Hate Speech Detection',
        'Spam Filtering',
        'Real-time Monitoring',
        'Custom Rule Engine',
        'Multi-language Support',
        'API Integration',
        'Human Review Queue',
        'Analytics Dashboard'
      ],
      benefits: [
        'Reduce moderation costs by 80%',
        'Improve platform safety',
        'Scale content review',
        'Faster response times',
        'Consistent enforcement'
      ],
      category: 'AI Tools',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-content-moderation-pro'
    },
    {
      id: 'ai-3d-generation',
      name: 'AI 3D Model Generator',
      price: '$299/mo',
      originalPrice: '$599/mo',
      description: 'Generate 3D models and assets with AI',
      longDescription: 'Create stunning 3D models, textures, and animations using our AI-powered 3D generation platform for games, AR/VR, and design.',
      features: [
        '3D Model Generation',
        'Texture Creation',
        'Animation Generation',
        'AR/VR Ready Assets',
        'Game Asset Creation',
        'Architectural Visualization',
        'Product Prototyping',
        'Custom Style Training',
        'Batch Processing',
        'Export to Multiple Formats'
      ],
      benefits: [
        'Reduce 3D creation time by 90%',
        'Lower production costs',
        'Unlimited creative possibilities',
        'Professional quality output',
        'Faster time to market'
      ],
      category: 'Creative',
      icon: <Image className="w-8 h-8 text-purple-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-3d-generation'
    },
    {
      id: 'ai-climate-solutions-pro',
      name: 'AI Climate Solutions Pro',
      price: '$399/mo',
      originalPrice: '$799/mo',
      description: 'AI-powered climate monitoring and sustainability solutions',
      longDescription: 'Monitor and optimize your environmental impact with our comprehensive AI climate solutions for carbon tracking, energy optimization, and sustainability reporting.',
      features: [
        'Carbon Footprint Tracking',
        'Energy Usage Optimization',
        'Sustainability Reporting',
        'Climate Risk Assessment',
        'Green Energy Management',
        'Waste Reduction Analytics',
        'Supply Chain Sustainability',
        'ESG Compliance',
        'Predictive Climate Modeling',
        'Custom Dashboards'
      ],
      benefits: [
        'Reduce carbon footprint by 30%',
        'Lower energy costs',
        'Improve sustainability scores',
        'Meet ESG requirements',
        'Future-proof operations'
      ],
      category: 'Sustainability',
      icon: <Globe className="w-8 h-8 text-green-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-climate-solutions-pro'
    },
    {
      id: 'ai-agricultural-intelligence-pro',
      name: 'AI Agricultural Intelligence Pro',
      price: '$249/mo',
      originalPrice: '$499/mo',
      description: 'Smart farming and crop optimization with AI',
      longDescription: 'Optimize your agricultural operations with our AI-powered platform that provides crop monitoring, yield prediction, and resource optimization.',
      features: [
        'Crop Health Monitoring',
        'Yield Prediction',
        'Weather Analysis',
        'Soil Quality Assessment',
        'Pest Detection',
        'Irrigation Optimization',
        'Harvest Planning',
        'Market Price Analysis',
        'IoT Integration',
        'Mobile App Access'
      ],
      benefits: [
        'Increase crop yield by 25%',
        'Reduce water usage by 40%',
        'Lower pesticide costs',
        'Optimize harvest timing',
        'Improve profitability'
      ],
      category: 'Agriculture',
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-agricultural-intelligence-pro'
    },
    {
      id: 'ai-cybersecurity-monitor-pro',
      name: 'AI Cybersecurity Monitor Pro',
      price: '$349/mo',
      originalPrice: '$699/mo',
      description: 'Advanced AI-powered cybersecurity monitoring',
      longDescription: 'Protect your digital assets with our comprehensive AI cybersecurity platform that provides real-time threat detection, incident response, and security analytics.',
      features: [
        'Real-time Threat Detection',
        'Behavioral Analysis',
        'Incident Response Automation',
        'Vulnerability Scanning',
        'Security Analytics',
        'Compliance Monitoring',
        'Threat Intelligence',
        'Automated Remediation',
        'Custom Security Rules',
        '24/7 Monitoring'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 80%',
        'Automate incident response',
        'Improve security posture',
        'Meet compliance requirements'
      ],
      category: 'Security',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-cybersecurity-monitor-pro'
    },
    {
      id: 'ai-business-intelligence-pro',
      name: 'AI Business Intelligence Pro',
      price: '$199/mo',
      originalPrice: '$399/mo',
      description: 'Advanced business intelligence with AI insights',
      longDescription: 'Transform your business data into actionable insights with our AI-powered BI platform featuring predictive analytics, automated reporting, and intelligent dashboards.',
      features: [
        'Predictive Analytics',
        'Automated Report Generation',
        'Natural Language Queries',
        'Custom Dashboard Builder',
        'Data Visualization',
        'KPI Tracking',
        'Trend Analysis',
        'Anomaly Detection',
        'Mobile BI App',
        'Integration APIs'
      ],
      benefits: [
        'Make data-driven decisions',
        'Reduce reporting time by 90%',
        'Identify business opportunities',
        'Improve operational efficiency',
        'Scale with business growth'
      ],
      category: 'Analytics',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-business-intelligence-pro'
    },
    {
      id: 'ai-automated-testing',
      name: 'AI Automated Testing Platform',
      price: '$179/mo',
      originalPrice: '$359/mo',
      description: 'Intelligent test automation and quality assurance',
      longDescription: 'Automate your testing processes with our AI-powered testing platform that generates test cases, performs automated testing, and ensures quality assurance.',
      features: [
        'AI Test Case Generation',
        'Automated Test Execution',
        'Cross-browser Testing',
        'Mobile App Testing',
        'API Testing',
        'Performance Testing',
        'Visual Regression Testing',
        'Test Data Management',
        'CI/CD Integration',
        'Detailed Reporting'
      ],
      benefits: [
        'Reduce testing time by 70%',
        'Improve test coverage',
        'Catch bugs earlier',
        'Lower QA costs',
        'Faster release cycles'
      ],
      category: 'Development',
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-automated-testing'
    },
    {
      id: 'ai-conversation-analytics',
      name: 'AI Conversation Analytics',
      price: '$129/mo',
      originalPrice: '$259/mo',
      description: 'Analyze and optimize customer conversations',
      longDescription: 'Gain insights from customer conversations with our AI-powered analytics platform that analyzes calls, chats, and emails to improve customer experience.',
      features: [
        'Call Analytics',
        'Chat Analysis',
        'Email Sentiment Analysis',
        'Conversation Scoring',
        'Agent Performance Metrics',
        'Customer Satisfaction Tracking',
        'Trend Analysis',
        'Real-time Monitoring',
        'Custom Reports',
        'Integration APIs'
      ],
      benefits: [
        'Improve customer satisfaction',
        'Optimize agent performance',
        'Identify training needs',
        'Reduce response times',
        'Better customer insights'
      ],
      category: 'Analytics',
      icon: <MessageSquare className="w-8 h-8 text-pink-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-conversation-analytics'
    },
    {
      id: 'ai-devops-automation',
      name: 'AI DevOps Automation',
      price: '$299/mo',
      originalPrice: '$599/mo',
      description: 'Intelligent DevOps and deployment automation',
      longDescription: 'Streamline your DevOps processes with our AI-powered automation platform that handles deployment, monitoring, and infrastructure management.',
      features: [
        'Automated Deployments',
        'Infrastructure as Code',
        'Monitoring & Alerting',
        'Performance Optimization',
        'Security Scanning',
        'Rollback Automation',
        'Resource Scaling',
        'CI/CD Pipeline Management',
        'Cost Optimization',
        'Multi-cloud Support'
      ],
      benefits: [
        'Reduce deployment time by 80%',
        'Improve system reliability',
        'Lower infrastructure costs',
        'Faster incident response',
        'Scale operations efficiently'
      ],
      category: 'DevOps',
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-devops-automation'
    }
  ];

  const categories = ['All', 'AI Tools', 'Marketing', 'Productivity', 'Sales', 'E-commerce', 'Support', 'Analytics', 'Storage', 'Web Development', 'Development', 'Finance', 'Creative', 'Sustainability', 'Agriculture', 'Security', 'DevOps'];

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group relative ${
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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
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