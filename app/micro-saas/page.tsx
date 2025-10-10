'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Shield, 
  Cloud, 
  BarChart3, 
  Target, 
  Rocket,
  Brain,
  Code,
  Mail,
  Search,
  FileText,
  Settings,
  Globe,
  Smartphone,
  Monitor,
  Database,
  Lock,
  Activity,
  TrendingUp,
  PieChart,
  LineChart,
  AreaChart,
  ScatterChart,
  DonutChart,
  Gauge,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudSun,
  CloudMoon,
  CloudSunRain,
  CloudMoonRain,
  CloudSnowRain,
  CloudLightningRain,
  CloudDrizzleRain,
  CloudFogRain,
  CloudHailRain,
  CloudSunSnow,
  CloudMoonSnow,
  CloudSunLightning,
  CloudMoonLightning,
  CloudSunDrizzle,
  CloudMoonDrizzle,
  CloudSunFog,
  CloudMoonFog,
  CloudSunHail,
  CloudMoonHail,
  CloudSunRainSnow,
  CloudMoonRainSnow,
  CloudSunLightningRain,
  CloudMoonLightningRain,
  CloudSunDrizzleRain,
  CloudMoonDrizzleRain,
  CloudSunFogRain,
  CloudMoonFogRain,
  CloudSunHailRain,
  CloudMoonHailRain,
  CloudSunSnowRain,
  CloudMoonSnowRain,
  CloudSunLightningSnow,
  CloudMoonLightningSnow,
  CloudSunDrizzleSnow,
  CloudMoonDrizzleSnow,
  CloudSunFogSnow,
  CloudMoonFogSnow,
  CloudSunHailSnow,
  CloudMoonHailSnow,
  CloudSunRainLightning,
  CloudMoonRainLightning,
  CloudSunSnowLightning,
  CloudMoonSnowLightning,
  CloudSunDrizzleLightning,
  CloudMoonDrizzleLightning,
  CloudSunFogLightning,
  CloudMoonFogLightning,
  CloudSunHailLightning,
  CloudMoonHailLightning,
  CloudSunRainDrizzle,
  CloudMoonRainDrizzle,
  CloudSunSnowDrizzle,
  CloudMoonSnowDrizzle,
  CloudSunLightningDrizzle,
  CloudMoonLightningDrizzle,
  CloudSunFogDrizzle,
  CloudMoonFogDrizzle,
  CloudSunHailDrizzle,
  CloudMoonHailDrizzle,
  CloudSunRainFog,
  CloudMoonRainFog,
  CloudSunSnowFog,
  CloudMoonSnowFog,
  CloudSunLightningFog,
  CloudMoonLightningFog,
  CloudSunDrizzleFog,
  CloudMoonDrizzleFog,
  CloudSunHailFog,
  CloudMoonHailFog,
  CloudSunRainHail,
  CloudMoonRainHail,
  CloudSunSnowHail,
  CloudMoonSnowHail,
  CloudSunLightningHail,
  CloudMoonLightningHail,
  CloudSunDrizzleHail,
  CloudMoonDrizzleHail,
  CloudSunFogHail,
  CloudMoonFogHail,
  CloudSunRainSnow,
  CloudMoonRainSnow,
  CloudSunLightningSnow,
  CloudMoonLightningSnow,
  CloudSunDrizzleSnow,
  CloudMoonDrizzleSnow,
  CloudSunFogSnow,
  CloudMoonFogSnow,
  CloudSunHailSnow,
  CloudMoonHailSnow,
  CloudSunRainLightning,
  CloudMoonRainLightning,
  CloudSunSnowLightning,
  CloudMoonSnowLightning,
  CloudSunDrizzleLightning,
  CloudMoonDrizzleLightning,
  CloudSunFogLightning,
  CloudMoonFogLightning,
  CloudSunHailLightning,
  CloudMoonHailLightning,
  CloudSunRainDrizzle,
  CloudMoonRainDrizzle,
  CloudSunSnowDrizzle,
  CloudMoonSnowDrizzle,
  CloudSunLightningDrizzle,
  CloudMoonLightningDrizzle,
  CloudSunFogDrizzle,
  CloudMoonFogDrizzle,
  CloudSunHailDrizzle,
  CloudMoonHailDrizzle,
  CloudSunRainFog,
  CloudMoonRainFog,
  CloudSunSnowFog,
  CloudMoonSnowFog,
  CloudSunLightningFog,
  CloudMoonLightningFog,
  CloudSunDrizzleFog,
  CloudMoonDrizzleFog,
  CloudSunHailFog,
  CloudMoonHailFog,
  CloudSunRainHail,
  CloudMoonRainHail,
  CloudSunSnowHail,
  CloudMoonSnowHail,
  CloudSunLightningHail,
  CloudMoonLightningHail,
  CloudSunDrizzleHail,
  CloudMoonDrizzleHail,
  CloudSunFogHail,
  CloudMoonFogHail,
  Phone,
  Mail as MailIcon,
  Calendar,
  CheckSquare,
  FileText as FileTextIcon,
  Code as CodeIcon,
  Settings as SettingsIcon,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  Database as DatabaseIcon,
  Lock as LockIcon,
  Activity as ActivityIcon,
  TrendingUp as TrendingUpIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  AreaChart as AreaChartIcon,
  ScatterChart as ScatterChartIcon,
  DonutChart as DonutChartIcon,
  Gauge as GaugeIcon,
  Thermometer as ThermometerIcon,
  Droplets as DropletsIcon,
  Wind as WindIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  CloudDrizzle as CloudDrizzleIcon,
  CloudFog as CloudFogIcon,
  CloudHail as CloudHailIcon,
  CloudSun as CloudSunIcon,
  CloudMoon as CloudMoonIcon,
  CloudSunRain as CloudSunRainIcon,
  CloudMoonRain as CloudMoonRainIcon,
  CloudSnowRain as CloudSnowRainIcon,
  CloudLightningRain as CloudLightningRainIcon,
  CloudDrizzleRain as CloudDrizzleRainIcon,
  CloudFogRain as CloudFogRainIcon,
  CloudHailRain as CloudHailRainIcon,
  CloudSunSnow as CloudSunSnowIcon,
  CloudMoonSnow as CloudMoonSnowIcon,
  CloudSunLightning as CloudSunLightningIcon,
  CloudMoonLightning as CloudMoonLightningIcon,
  CloudSunDrizzle as CloudSunDrizzleIcon,
  CloudMoonDrizzle as CloudMoonDrizzleIcon,
  CloudSunFog as CloudSunFogIcon,
  CloudMoonFog as CloudMoonFogIcon,
  CloudSunHail as CloudSunHailIcon,
  CloudMoonHail as CloudMoonHailIcon,
  CloudSunRainSnow as CloudSunRainSnowIcon,
  CloudMoonRainSnow as CloudMoonRainSnowIcon,
  CloudSunLightningRain as CloudSunLightningRainIcon,
  CloudMoonLightningRain as CloudMoonLightningRainIcon,
  CloudSunDrizzleRain as CloudSunDrizzleRainIcon,
  CloudMoonDrizzleRain as CloudMoonDrizzleRainIcon,
  CloudSunFogRain as CloudSunFogRainIcon,
  CloudMoonFogRain as CloudMoonFogRainIcon,
  CloudSunHailRain as CloudSunHailRainIcon,
  CloudMoonHailRain as CloudMoonHailRainIcon,
  CloudSunSnowRain as CloudSunSnowRainIcon,
  CloudMoonSnowRain as CloudMoonSnowRainIcon,
  CloudSunLightningSnow as CloudSunLightningSnowIcon,
  CloudMoonLightningSnow as CloudMoonLightningSnowIcon,
  CloudSunDrizzleSnow as CloudSunDrizzleSnowIcon,
  CloudMoonDrizzleSnow as CloudMoonDrizzleSnowIcon,
  CloudSunFogSnow as CloudSunFogSnowIcon,
  CloudMoonFogSnow as CloudMoonFogSnowIcon,
  CloudSunHailSnow as CloudSunHailSnowIcon,
  CloudMoonHailSnow as CloudMoonHailSnowIcon,
  CloudSunRainLightning as CloudSunRainLightningIcon,
  CloudMoonRainLightning as CloudMoonRainLightningIcon,
  CloudSunSnowLightning as CloudSunSnowLightningIcon,
  CloudMoonSnowLightning as CloudMoonSnowLightningIcon,
  CloudSunDrizzleLightning as CloudSunDrizzleLightningIcon,
  CloudMoonDrizzleLightning as CloudMoonDrizzleLightningIcon,
  CloudSunFogLightning as CloudSunFogLightningIcon,
  CloudMoonFogLightning as CloudMoonFogLightningIcon,
  CloudSunHailLightning as CloudSunHailLightningIcon,
  CloudMoonHailLightning as CloudMoonHailLightningIcon,
  CloudSunRainDrizzle as CloudSunRainDrizzleIcon,
  CloudMoonRainDrizzle as CloudMoonRainDrizzleIcon,
  CloudSunSnowDrizzle as CloudSunSnowDrizzleIcon,
  CloudMoonSnowDrizzle as CloudMoonSnowDrizzleIcon,
  CloudSunLightningDrizzle as CloudSunLightningDrizzleIcon,
  CloudMoonLightningDrizzle as CloudMoonLightningDrizzleIcon,
  CloudSunFogDrizzle as CloudSunFogDrizzleIcon,
  CloudMoonFogDrizzle as CloudMoonFogDrizzleIcon,
  CloudSunHailDrizzle as CloudSunHailDrizzleIcon,
  CloudMoonHailDrizzle as CloudMoonHailDrizzleIcon,
  CloudSunRainFog as CloudSunRainFogIcon,
  CloudMoonRainFog as CloudMoonRainFogIcon,
  CloudSunSnowFog as CloudSunSnowFogIcon,
  CloudMoonSnowFog as CloudMoonSnowFogIcon,
  CloudSunLightningFog as CloudSunLightningFogIcon,
  CloudMoonLightningFog as CloudMoonLightningFogIcon,
  CloudSunDrizzleFog as CloudSunDrizzleFogIcon,
  CloudMoonDrizzleFog as CloudMoonDrizzleFogIcon,
  CloudSunHailFog as CloudSunHailFogIcon,
  CloudMoonHailFog as CloudMoonHailFogIcon,
  CloudSunRainHail as CloudSunRainHailIcon,
  CloudMoonRainHail as CloudMoonRainHailIcon,
  CloudSunSnowHail as CloudSunSnowHailIcon,
  CloudMoonSnowHail as CloudMoonSnowHailIcon,
  CloudSunLightningHail as CloudSunLightningHailIcon,
  CloudMoonLightningHail as CloudMoonLightningHailIcon,
  CloudSunDrizzleHail as CloudSunDrizzleHailIcon,
  CloudMoonDrizzleHail as CloudMoonDrizzleHailIcon,
  CloudSunFogHail as CloudSunFogHailIcon,
  CloudMoonFogHail as CloudMoonFogHailIcon
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // Productivity & Business Tools
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights, custom dashboards, and automated reporting',
      features: [
        'Real-time Analytics',
        'Custom Dashboards',
        'Automated Reports',
        'Data Visualization',
        'Predictive Insights',
        'Mobile App',
        'API Integration',
        'Custom Metrics'
      ],
      price: '$199/month',
      category: 'Analytics',
      icon: BarChart3,
      popular: true,
      capabilities: [
        'Real-time data processing',
        'Custom dashboard creation',
        'Automated report generation',
        'Data visualization',
        'Predictive analytics',
        'Mobile access'
      ],
      benefits: [
        'Make data-driven decisions',
        'Save 10+ hours per week',
        'Identify opportunities faster',
        'Improve business performance',
        'Reduce manual reporting'
      ],
      useCases: [
        'Business intelligence',
        'Sales analytics',
        'Marketing performance',
        'Financial reporting',
        'Operational metrics'
      ]
    },
    {
      id: 'ai-powered-crm',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics',
      features: [
        'AI Lead Scoring',
        'Automated Follow-ups',
        'Predictive Analytics',
        'Contact Management',
        'Sales Pipeline',
        'Email Integration',
        'Mobile App',
        'Custom Fields'
      ],
      price: '$149/month',
      category: 'CRM',
      icon: Users,
      popular: true,
      capabilities: [
        'Lead scoring automation',
        'Follow-up automation',
        'Sales forecasting',
        'Contact management',
        'Pipeline tracking',
        'Email integration'
      ],
      benefits: [
        'Increase sales by 35%',
        'Improve lead quality',
        'Automate follow-ups',
        'Better customer insights',
        'Streamline sales process'
      ],
      useCases: [
        'Sales management',
        'Lead generation',
        'Customer retention',
        'Sales forecasting',
        'Team collaboration'
      ]
    },
    {
      id: 'ai-content-studio',
      title: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation',
      features: [
        'AI Writing Assistant',
        'Image Generation',
        'Video Creation',
        'Social Media Automation',
        'SEO Optimization',
        'Brand Voice Consistency',
        'Content Templates',
        'Multi-language Support'
      ],
      price: '$299/month',
      category: 'Content',
      icon: Code,
      popular: true,
      capabilities: [
        'Content generation',
        'Image creation',
        'Video editing',
        'Social media automation',
        'SEO optimization',
        'Brand consistency'
      ],
      benefits: [
        'Reduce content creation time by 70%',
        'Maintain brand consistency',
        'Scale content production',
        'Improve SEO performance',
        'Increase engagement'
      ],
      useCases: [
        'Blog content',
        'Social media posts',
        'Marketing materials',
        'Product descriptions',
        'Email campaigns'
      ]
    },
    {
      id: 'ai-chatbot-builder',
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required',
      features: [
        'No-code Builder',
        'Multi-language Support',
        'Integration APIs',
        'Analytics Dashboard',
        'Custom Training',
        'Voice Support',
        'Mobile Integration',
        'A/B Testing'
      ],
      price: '$99/month',
      category: 'Support',
      icon: MessageSquare,
      popular: false,
      capabilities: [
        'Visual chatbot builder',
        'Natural language processing',
        'Multi-platform deployment',
        'Analytics and reporting',
        'Custom training',
        'Integration capabilities'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Provide 24/7 support',
        'Improve response time',
        'Increase customer satisfaction',
        'Generate more leads'
      ],
      useCases: [
        'Customer support',
        'Lead generation',
        'Sales qualification',
        'FAQ automation',
        'Appointment booking'
      ]
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing',
      description: 'Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI',
      features: [
        'AI Optimization',
        'Personalization',
        'A/B Testing',
        'Advanced Analytics',
        'Automation Workflows',
        'Segmentation',
        'Template Library',
        'Deliverability Optimization'
      ],
      price: '$179/month',
      category: 'Marketing',
      icon: Mail,
      popular: false,
      capabilities: [
        'Campaign automation',
        'Personalization engine',
        'A/B testing',
        'Advanced analytics',
        'Segmentation tools',
        'Template management'
      ],
      benefits: [
        'Increase open rates by 40%',
        'Improve click-through rates',
        'Reduce unsubscribe rates',
        'Save 15+ hours per week',
        'Maximize ROI'
      ],
      useCases: [
        'Email campaigns',
        'Newsletter marketing',
        'Lead nurturing',
        'Customer retention',
        'Promotional emails'
      ]
    },
    {
      id: 'ai-mobile-app-builder',
      title: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment',
      features: [
        'Drag-and-drop Builder',
        'AI Code Generation',
        'Instant Deployment',
        'Cross-platform',
        'App Store Publishing',
        'Push Notifications',
        'Analytics Integration',
        'Custom Backend'
      ],
      price: '$399/month',
      category: 'Development',
      icon: Smartphone,
      popular: false,
      capabilities: [
        'Visual app builder',
        'AI-powered code generation',
        'Cross-platform development',
        'App store deployment',
        'Backend integration',
        'Analytics and monitoring'
      ],
      benefits: [
        'Reduce development time by 80%',
        'Lower development costs',
        'Faster time to market',
        'No coding required',
        'Professional results'
      ],
      useCases: [
        'Business apps',
        'E-commerce apps',
        'Productivity tools',
        'Customer apps',
        'Internal tools'
      ]
    },
    {
      id: 'ai-seo-optimizer',
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights',
      features: [
        'Keyword Research',
        'Content Optimization',
        'Ranking Tracking',
        'Competitor Analysis',
        'Technical SEO',
        'Link Building',
        'Local SEO',
        'Performance Monitoring'
      ],
      price: '$129/month',
      category: 'SEO',
      icon: Search,
      popular: false,
      capabilities: [
        'Keyword research',
        'Content optimization',
        'Ranking tracking',
        'Competitor analysis',
        'Technical audits',
        'Link building'
      ],
      benefits: [
        'Increase organic traffic by 50%',
        'Improve search rankings',
        'Identify optimization opportunities',
        'Save 20+ hours per week',
        'Stay ahead of competitors'
      ],
      useCases: [
        'Website optimization',
        'Content marketing',
        'Local SEO',
        'E-commerce SEO',
        'Blog optimization'
      ]
    },
    {
      id: 'ai-invoice-generator',
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation, payment tracking, and financial reporting with AI-powered insights',
      features: [
        'Automated Invoicing',
        'Payment Tracking',
        'Financial Reports',
        'Tax Calculations',
        'Client Portal',
        'Recurring Billing',
        'Multi-currency',
        'Integration APIs'
      ],
      price: '$79/month',
      category: 'Finance',
      icon: FileText,
      popular: false,
      capabilities: [
        'Invoice automation',
        'Payment processing',
        'Financial reporting',
        'Tax calculations',
        'Client management',
        'Integration capabilities'
      ],
      benefits: [
        'Reduce invoicing time by 90%',
        'Improve cash flow',
        'Automate follow-ups',
        'Ensure accuracy',
        'Professional invoices'
      ],
      useCases: [
        'Freelancer invoicing',
        'Small business billing',
        'Recurring subscriptions',
        'Project billing',
        'Multi-client management'
      ]
    },
    {
      id: 'ai-writing-assistant',
      title: 'AI Writing Assistant',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates',
      features: [
        '50+ Templates',
        'Multi-language Support',
        'Plagiarism Check',
        'SEO Optimization',
        'Tone Adjustment',
        'Grammar Check',
        'Content Ideas',
        'Brand Voice Training'
      ],
      price: '$29/month',
      category: 'Writing',
      icon: Code,
      popular: false,
      capabilities: [
        'Content generation',
        'Template library',
        'Language support',
        'Plagiarism detection',
        'SEO optimization',
        'Brand voice training'
      ],
      benefits: [
        'Write 10x faster',
        'Improve content quality',
        'Maintain consistency',
        'Save 15+ hours per week',
        'Enhance creativity'
      ],
      useCases: [
        'Blog writing',
        'Email composition',
        'Report generation',
        'Marketing copy',
        'Social media content'
      ]
    },
    {
      id: 'smart-analytics',
      title: 'Smart Analytics',
      description: 'Real-time business analytics with AI insights, automated reports, and predictive forecasting',
      features: [
        'Real-time Analytics',
        'Predictive Forecasting',
        'Automated Reports',
        'Custom Metrics',
        'Data Integration',
        'Alert System',
        'Trend Analysis',
        'Performance Tracking'
      ],
      price: '$49/month',
      category: 'Analytics',
      icon: PieChart,
      popular: false,
      capabilities: [
        'Real-time data processing',
        'Predictive modeling',
        'Automated reporting',
        'Custom metrics',
        'Data integration',
        'Alert management'
      ],
      benefits: [
        'Make informed decisions',
        'Predict future trends',
        'Automate reporting',
        'Identify opportunities',
        'Improve performance'
      ],
      useCases: [
        'Business intelligence',
        'Sales forecasting',
        'Marketing analytics',
        'Financial analysis',
        'Operational metrics'
      ]
    },
    {
      id: 'ai-scheduler',
      title: 'AI Scheduler',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management',
      features: [
        'Calendar Optimization',
        'Meeting Coordination',
        'Time Management',
        'Auto-scheduling',
        'Integration APIs',
        'Conflict Resolution',
        'Reminder System',
        'Team Scheduling'
      ],
      price: '$19/month',
      category: 'Productivity',
      icon: Calendar,
      popular: false,
      capabilities: [
        'Smart scheduling',
        'Calendar integration',
        'Meeting coordination',
        'Time optimization',
        'Conflict resolution',
        'Team collaboration'
      ],
      benefits: [
        'Save 5+ hours per week',
        'Reduce scheduling conflicts',
        'Optimize time usage',
        'Improve productivity',
        'Streamline coordination'
      ],
      useCases: [
        'Meeting scheduling',
        'Appointment booking',
        'Team coordination',
        'Time management',
        'Calendar optimization'
      ]
    },
    {
      id: 'expense-tracker',
      title: 'Expense Tracker',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights',
      features: [
        'Receipt Scanning',
        'Auto-categorization',
        'Budget Insights',
        'Tax Preparation',
        'Multi-currency',
        'Report Generation',
        'Mobile App',
        'Integration APIs'
      ],
      price: '$15/month',
      category: 'Finance',
      icon: BarChart3,
      popular: false,
      capabilities: [
        'Receipt scanning',
        'Expense categorization',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support',
        'Report generation'
      ],
      benefits: [
        'Track expenses automatically',
        'Save time on categorization',
        'Improve budget management',
        'Simplify tax preparation',
        'Gain financial insights'
      ],
      useCases: [
        'Personal finance',
        'Business expenses',
        'Tax preparation',
        'Budget management',
        'Expense reporting'
      ]
    },
    {
      id: 'task-manager-pro',
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking',
      features: [
        'AI Prioritization',
        'Team Collaboration',
        'Progress Tracking',
        'Time Tracking',
        'Project Templates',
        'Deadline Management',
        'Workflow Automation',
        'Performance Analytics'
      ],
      price: '$39/month',
      category: 'Productivity',
      icon: CheckSquare,
      popular: false,
      capabilities: [
        'Task prioritization',
        'Team collaboration',
        'Progress tracking',
        'Time management',
        'Project templates',
        'Workflow automation'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Improve team collaboration',
        'Better project management',
        'Meet deadlines consistently',
        'Optimize workflows'
      ],
      useCases: [
        'Project management',
        'Team collaboration',
        'Task organization',
        'Time tracking',
        'Workflow optimization'
      ]
    },
    {
      id: 'crm-lite',
      title: 'CRM Lite',
      description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation',
      features: [
        'AI Lead Scoring',
        'Contact Management',
        'Sales Pipeline',
        'Email Integration',
        'Mobile App',
        'Custom Fields',
        'Automation Rules',
        'Performance Tracking'
      ],
      price: '$59/month',
      category: 'CRM',
      icon: Users,
      popular: false,
      capabilities: [
        'Lead management',
        'Contact organization',
        'Sales pipeline tracking',
        'Email integration',
        'Mobile access',
        'Automation rules'
      ],
      benefits: [
        'Organize contacts effectively',
        'Score leads automatically',
        'Track sales progress',
        'Improve follow-up',
        'Increase sales efficiency'
      ],
      useCases: [
        'Small business CRM',
        'Lead management',
        'Sales tracking',
        'Contact organization',
        'Customer relationship management'
      ]
    },
    {
      id: 'email-optimizer',
      title: 'Email Optimizer',
      description: 'AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing',
      features: [
        'Subject Line AI',
        'Send Time Optimization',
        'A/B Testing',
        'Open Rate Tracking',
        'Spam Analysis',
        'Content Optimization',
        'Personalization',
        'Performance Analytics'
      ],
      price: '$25/month',
      category: 'Marketing',
      icon: Mail,
      popular: false,
      capabilities: [
        'Subject line optimization',
        'Send time optimization',
        'A/B testing',
        'Performance tracking',
        'Spam analysis',
        'Content optimization'
      ],
      benefits: [
        'Increase open rates by 30%',
        'Improve click-through rates',
        'Optimize send times',
        'Reduce spam complaints',
        'Enhance email performance'
      ],
      useCases: [
        'Email marketing',
        'Newsletter optimization',
        'Campaign improvement',
        'Deliverability enhancement',
        'Performance optimization'
      ]
    },
    {
      id: 'social-media-manager',
      title: 'Social Media Manager',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics',
      features: [
        'Content Creation',
        'Auto-scheduling',
        'Performance Analytics',
        'Multi-platform',
        'Engagement Tracking',
        'Hashtag Optimization',
        'Influencer Discovery',
        'Competitor Analysis'
      ],
      price: '$45/month',
      category: 'Social Media',
      icon: Globe,
      popular: false,
      capabilities: [
        'Content generation',
        'Scheduling automation',
        'Performance analytics',
        'Multi-platform management',
        'Engagement tracking',
        'Hashtag optimization'
      ],
      benefits: [
        'Save 20+ hours per week',
        'Increase engagement by 50%',
        'Improve content quality',
        'Optimize posting times',
        'Grow social media presence'
      ],
      useCases: [
        'Social media marketing',
        'Content management',
        'Engagement optimization',
        'Brand building',
        'Community management'
      ]
    },
    {
      id: 'ai-design-studio',
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools',
      features: [
        'AI Design Tools',
        'Logo Generation',
        'Marketing Materials',
        'Brand Kit',
        'Template Library',
        'Color Palette Generator',
        'Font Matching',
        'Export Options'
      ],
      price: '$35/month',
      category: 'Design',
      icon: Code,
      popular: false,
      capabilities: [
        'AI-powered design',
        'Logo creation',
        'Marketing material design',
        'Brand kit management',
        'Template library',
        'Color palette generation'
      ],
      benefits: [
        'Create professional designs',
        'Save design costs',
        'Maintain brand consistency',
        'Speed up design process',
        'Access to templates'
      ],
      useCases: [
        'Logo design',
        'Marketing materials',
        'Social media graphics',
        'Brand identity',
        'Print materials'
      ]
    },
    {
      id: 'landing-page-builder',
      title: 'Landing Page Builder',
      description: 'Build high-converting landing pages with AI optimization and A/B testing capabilities',
      features: [
        'Drag-and-drop Builder',
        'AI Optimization',
        'A/B Testing',
        'Conversion Tracking',
        'Mobile Responsive',
        'Template Library',
        'Analytics Integration',
        'SEO Optimization'
      ],
      price: '$29/month',
      category: 'Web Development',
      icon: Globe,
      popular: false,
      capabilities: [
        'Visual page builder',
        'AI optimization',
        'A/B testing',
        'Conversion tracking',
        'Mobile responsiveness',
        'Template library'
      ],
      benefits: [
        'Increase conversions by 40%',
        'Reduce development time',
        'Optimize for performance',
        'Test different versions',
        'Improve user experience'
      ],
      useCases: [
        'Marketing campaigns',
        'Product launches',
        'Lead generation',
        'Event promotion',
        'Sales pages'
      ]
    },
    {
      id: 'seo-optimizer',
      title: 'SEO Optimizer',
      description: 'AI-powered SEO analysis and optimization with keyword research and content suggestions',
      features: [
        'SEO Analysis',
        'Keyword Research',
        'Content Suggestions',
        'Ranking Tracking',
        'Technical Audits',
        'Competitor Analysis',
        'Local SEO',
        'Performance Monitoring'
      ],
      price: '$49/month',
      category: 'SEO',
      icon: Search,
      popular: false,
      capabilities: [
        'SEO analysis',
        'Keyword research',
        'Content optimization',
        'Ranking tracking',
        'Technical audits',
        'Competitor analysis'
      ],
      benefits: [
        'Improve search rankings',
        'Increase organic traffic',
        'Identify optimization opportunities',
        'Save SEO time',
        'Stay competitive'
      ],
      useCases: [
        'Website optimization',
        'Content marketing',
        'Local SEO',
        'E-commerce SEO',
        'Blog optimization'
      ]
    },
    {
      id: 'ad-campaign-manager',
      title: 'Ad Campaign Manager',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn',
      features: [
        'Multi-platform Ads',
        'AI Optimization',
        'Budget Management',
        'Performance Tracking',
        'Auto-bidding',
        'Audience Targeting',
        'Creative Testing',
        'ROI Optimization'
      ],
      price: '$79/month',
      category: 'Advertising',
      icon: BarChart3,
      popular: false,
      capabilities: [
        'Multi-platform management',
        'AI optimization',
        'Budget management',
        'Performance tracking',
        'Auto-bidding',
        'Audience targeting'
      ],
      benefits: [
        'Reduce ad costs by 25%',
        'Improve campaign performance',
        'Automate optimization',
        'Increase ROI',
        'Save management time'
      ],
      useCases: [
        'Google Ads',
        'Facebook advertising',
        'LinkedIn campaigns',
        'Display advertising',
        'Video marketing'
      ]
    },
    {
      id: 'code-assistant',
      title: 'Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages',
      features: [
        'Code Completion',
        'Debugging Help',
        'Code Optimization',
        'Multi-language Support',
        'Documentation',
        'Error Detection',
        'Refactoring Suggestions',
        'Performance Analysis'
      ],
      price: '$39/month',
      category: 'Development',
      icon: Code,
      popular: false,
      capabilities: [
        'Code completion',
        'Debugging assistance',
        'Code optimization',
        'Multi-language support',
        'Documentation generation',
        'Error detection'
      ],
      benefits: [
        'Write code 3x faster',
        'Reduce bugs by 60%',
        'Improve code quality',
        'Learn best practices',
        'Save development time'
      ],
      useCases: [
        'Web development',
        'Mobile app development',
        'API development',
        'Code review',
        'Learning programming'
      ]
    },
    {
      id: 'api-builder',
      title: 'API Builder',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools',
      features: [
        'API Creation',
        'Documentation Generation',
        'Testing Tools',
        'Version Control',
        'Rate Limiting',
        'Authentication',
        'Monitoring',
        'Integration Management'
      ],
      price: '$59/month',
      category: 'Development',
      icon: Settings,
      popular: false,
      capabilities: [
        'API development',
        'Documentation generation',
        'Testing tools',
        'Version control',
        'Rate limiting',
        'Authentication'
      ],
      benefits: [
        'Build APIs faster',
        'Generate documentation automatically',
        'Ensure API quality',
        'Simplify testing',
        'Improve developer experience'
      ],
      useCases: [
        'API development',
        'Microservices',
        'Integration development',
        'Documentation management',
        'API testing'
      ]
    },
    {
      id: 'bug-tracker-pro',
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions',
      features: [
        'AI Issue Detection',
        'Priority Scoring',
        'Resolution Suggestions',
        'Team Collaboration',
        'Integration APIs',
        'Automated Workflows',
        'Performance Analytics',
        'Custom Fields'
      ],
      price: '$25/month',
      category: 'Development',
      icon: Shield,
      popular: false,
      capabilities: [
        'Issue tracking',
        'Priority management',
        'Resolution suggestions',
        'Team collaboration',
        'Integration capabilities',
        'Workflow automation'
      ],
      benefits: [
        'Track bugs efficiently',
        'Prioritize issues automatically',
        'Improve resolution time',
        'Enhance team collaboration',
        'Reduce bug recurrence'
      ],
      useCases: [
        'Software development',
        'Quality assurance',
        'Bug management',
        'Team collaboration',
        'Project tracking'
      ]
    },
    {
      id: 'doc-generator',
      title: 'Doc Generator',
      description: 'Automatically generate technical documentation, API docs, and user guides from code',
      features: [
        'Auto Documentation',
        'API Docs',
        'User Guides',
        'Code Comments',
        'Multiple Formats',
        'Version Control',
        'Collaboration Tools',
        'Search Functionality'
      ],
      price: '$19/month',
      category: 'Documentation',
      icon: FileText,
      popular: false,
      capabilities: [
        'Documentation generation',
        'API documentation',
        'User guide creation',
        'Code commenting',
        'Format conversion',
        'Version control'
      ],
      benefits: [
        'Generate docs automatically',
        'Save documentation time',
        'Ensure accuracy',
        'Improve code readability',
        'Maintain consistency'
      ],
      useCases: [
        'Technical documentation',
        'API documentation',
        'User guides',
        'Code documentation',
        'Project documentation'
      ]
    },
    {
      id: 'ai-recruitment-assistant',
      title: 'AI Recruitment Assistant',
      description: 'Streamline hiring with AI-powered resume screening, candidate matching, and interview scheduling',
      features: [
        'Resume Screening',
        'Candidate Matching',
        'Interview Scheduling',
        'Skills Assessment',
        'Background Checks',
        'Candidate Scoring',
        'Job Posting Optimization',
        'Analytics Dashboard'
      ],
      price: '$199/month',
      category: 'HR',
      icon: Users,
      popular: false,
      capabilities: [
        'Resume analysis',
        'Candidate matching',
        'Interview coordination',
        'Skills assessment',
        'Background verification',
        'Job optimization'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality',
        'Automate screening process',
        'Enhance matching accuracy',
        'Streamline recruitment'
      ],
      useCases: [
        'Talent acquisition',
        'Resume screening',
        'Candidate evaluation',
        'Interview coordination',
        'Skills assessment'
      ]
    },
    {
      id: 'medical-records-manager',
      title: 'Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction and analysis',
      features: [
        'HIPAA Compliance',
        'Data Extraction',
        'Medical Analysis',
        'Patient Portal',
        'Integration APIs',
        'Security Management',
        'Audit Trails',
        'Report Generation'
      ],
      price: '$299/month',
      category: 'Healthcare',
      icon: Shield,
      popular: false,
      capabilities: [
        'Medical record management',
        'Data extraction',
        'Patient portal',
        'HIPAA compliance',
        'Security management',
        'Audit trails'
      ],
      benefits: [
        'Ensure HIPAA compliance',
        'Improve data accuracy',
        'Streamline record management',
        'Enhance patient care',
        'Reduce administrative burden'
      ],
      useCases: [
        'Medical practices',
        'Hospitals',
        'Clinics',
        'Healthcare providers',
        'Patient management'
      ]
    },
    {
      id: 'ai-accounting-assistant',
      title: 'AI Accounting Assistant',
      description: 'Automated accounting with AI-powered bookkeeping, tax preparation, and financial reporting',
      features: [
        'Automated Bookkeeping',
        'Tax Preparation',
        'Financial Reports',
        'Expense Tracking',
        'Compliance',
        'Invoice Processing',
        'Bank Reconciliation',
        'Audit Support'
      ],
      price: '$149/month',
      category: 'Finance',
      icon: BarChart3,
      popular: false,
      capabilities: [
        'Bookkeeping automation',
        'Tax preparation',
        'Financial reporting',
        'Expense management',
        'Compliance management',
        'Invoice processing'
      ],
      benefits: [
        'Reduce accounting time by 70%',
        'Improve accuracy',
        'Ensure compliance',
        'Simplify tax preparation',
        'Generate reports automatically'
      ],
      useCases: [
        'Small business accounting',
        'Freelancer finances',
        'Tax preparation',
        'Financial reporting',
        'Expense management'
      ]
    },
    {
      id: 'property-management-ai',
      title: 'Property Management AI',
      description: 'AI-powered property management with tenant screening, maintenance scheduling, and rent optimization',
      features: [
        'Tenant Screening',
        'Maintenance Scheduling',
        'Rent Optimization',
        'Property Analytics',
        'Tenant Portal',
        'Payment Processing',
        'Lease Management',
        'Performance Tracking'
      ],
      price: '$179/month',
      category: 'Real Estate',
      icon: BarChart3,
      popular: false,
      capabilities: [
        'Tenant management',
        'Maintenance coordination',
        'Rent optimization',
        'Property analytics',
        'Tenant portal',
        'Payment processing'
      ],
      benefits: [
        'Streamline property management',
        'Improve tenant satisfaction',
        'Optimize rental income',
        'Reduce maintenance costs',
        'Enhance property performance'
      ],
      useCases: [
        'Residential properties',
        'Commercial real estate',
        'Rental management',
        'Property investment',
        'Tenant services'
      ]
    },
    {
      id: 'legal-document-manager',
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and risk assessment',
      features: [
        'Contract Analysis',
        'Compliance Tracking',
        'Risk Assessment',
        'Document Templates',
        'Legal Research',
        'Due Diligence',
        'Version Control',
        'Collaboration Tools'
      ],
      price: '$249/month',
      category: 'Legal',
      icon: Shield,
      popular: false,
      capabilities: [
        'Document analysis',
        'Compliance monitoring',
        'Risk assessment',
        'Template management',
        'Legal research',
        'Due diligence'
      ],
      benefits: [
        'Reduce legal review time',
        'Improve compliance',
        'Identify risks early',
        'Streamline document management',
        'Enhance legal processes'
      ],
      useCases: [
        'Contract management',
        'Compliance monitoring',
        'Legal research',
        'Due diligence',
        'Risk management'
      ]
    },
    {
      id: 'online-learning-platform',
      title: 'Online Learning Platform',
      description: 'AI-powered educational platform with personalized learning paths and progress tracking',
      features: [
        'Personalized Learning',
        'Progress Tracking',
        'Course Creation',
        'Assessment Tools',
        'Certification',
        'Mobile Learning',
        'Analytics Dashboard',
        'Instructor Tools'
      ],
      price: '$99/month',
      category: 'Education',
      icon: Users,
      popular: false,
      capabilities: [
        'Learning management',
        'Course creation',
        'Progress tracking',
        'Assessment tools',
        'Certification system',
        'Mobile learning'
      ],
      benefits: [
        'Improve learning outcomes',
        'Personalize education',
        'Track progress effectively',
        'Reduce training costs',
        'Enhance engagement'
      ],
      useCases: [
        'Corporate training',
        'Online education',
        'Skill development',
        'Certification programs',
        'Professional development'
      ]
    },
    {
      id: 'supply-chain-optimizer',
      title: 'Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting and inventory management',
      features: [
        'Demand Forecasting',
        'Inventory Management',
        'Supplier Analytics',
        'Risk Assessment',
        'Cost Optimization',
        'Performance Tracking',
        'Integration APIs',
        'Real-time Monitoring'
      ],
      price: '$399/month',
      category: 'Manufacturing',
      icon: BarChart3,
      popular: false,
      capabilities: [
        'Demand prediction',
        'Inventory optimization',
        'Supplier management',
        'Risk assessment',
        'Cost optimization',
        'Performance monitoring'
      ],
      benefits: [
        'Reduce inventory costs by 20%',
        'Improve demand accuracy',
        'Optimize supplier relationships',
        'Minimize supply chain risks',
        'Enhance efficiency'
      ],
      useCases: [
        'Manufacturing',
        'Retail',
        'Distribution',
        'Procurement',
        'Logistics'
      ]
    }
  ];

  const categories = [
    'All',
    'Analytics',
    'CRM',
    'Content',
    'Support',
    'Marketing',
    'Development',
    'SEO',
    'Finance',
    'Writing',
    'Productivity',
    'Social Media',
    'Design',
    'Web Development',
    'Advertising',
    'Documentation',
    'HR',
    'Healthcare',
    'Real Estate',
    'Legal',
    'Education',
    'Manufacturing'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our streamlined onboarding process'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Each micro SaaS is designed to solve specific business challenges effectively'
    },
    {
      icon: Rocket,
      title: 'Rapid Innovation',
      description: 'Frequent updates and new features based on user feedback and market needs'
    }
  ];

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Focused AI & IT Tools</title>
        <meta name="description" content="Discover our micro SaaS solutions - focused, affordable AI and IT tools designed for specific business needs. Quick deployment, scalable, and cost-effective." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, CRM, analytics, security monitoring, cloud management" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Focused AI and IT tools for specific business needs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Focused, affordable AI and IT tools designed for specific business needs. 
              Quick deployment, scalable, and cost-effective solutions for growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <MailIcon className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
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
                      placeholder="Search micro SaaS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                {categories.slice(1, 8).map((category) => (
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

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Micro SaaS Products' : `${selectedCategory} Products`}
              </h2>
              <span className="text-gray-300">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group ${
                  product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                }`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    <div className="text-gray-400 text-sm">{product.category}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    product.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                      : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                  }`}>
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits of Micro SaaS</h2>
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
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;