'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, FileText, Mail, Calendar, Package, Monitor, Eye, Mic, Code, Heart, DollarSign, Box, Cpu, Link, Server, Phone, Award, Sparkles, Rocket, Lock, Wifi, ShoppingCart, CreditCard, PieChart, Activity, Layers, Workflow, Bot, Headphones, Camera, Video, Image, Music, Download, Upload, Search, Filter, Bell, AlertTriangle, CheckSquare, XCircle, Plus, Minus, RefreshCw, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Copy, Trash2, Edit, Save, Share, ExternalLink, Info, HelpCircle, ChevronRight, ChevronDown, ChevronUp, ChevronLeft, Menu, X, Search as SearchIcon, Filter as FilterIcon, SortAsc, SortDesc, MoreHorizontal, MoreVertical, Settings2, User, UserPlus, UserMinus, UserCheck, UserX, Users2, UserCog, UserSearch, UserEdit, UserCheck2, UserPlus2, UserMinus2, UserX2, UserCog2, UserSearch2, UserEdit2, UserCheck3, UserPlus3, UserMinus3, UserX3, UserCog3, UserSearch3, UserEdit3, UserCheck4, UserPlus4, UserMinus4, UserX4, UserCog4, UserSearch4, UserEdit4, UserCheck5, UserPlus5, UserMinus5, UserX5, UserCog5, UserSearch5, UserEdit5, UserCheck6, UserPlus6, UserMinus6, UserX6, UserCog6, UserSearch6, UserEdit6, UserCheck7, UserPlus7, UserMinus7, UserX7, UserCog7, UserSearch7, UserEdit7, UserCheck8, UserPlus8, UserMinus8, UserX8, UserCog8, UserSearch8, UserEdit8, UserCheck9, UserPlus9, UserMinus9, UserX9, UserCog9, UserSearch9, UserEdit9, UserCheck10, UserPlus10, UserMinus10, UserX10, UserCog10, UserSearch10, UserEdit10 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface MicroSaasProduct {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  originalPrice?: string;
  features: string[];
  category: string;
  popular: boolean;
  new: boolean;
  icon: React.ComponentType<any>;
  color: string;
  benefits: string[];
  useCases: string[];
  integrations: string[];
  pricing: {
    starter: { price: string; features: string[]; users: string };
    professional: { price: string; features: string[]; users: string; popular: boolean };
    enterprise: { price: string; features: string[]; users: string };
  };
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time analytics and predictive insights.',
      longDescription: 'Transform your business data into actionable insights with our advanced AI-powered analytics platform. Get real-time dashboards, predictive analytics, and automated reporting that helps you make data-driven decisions faster.',
      price: '$99/month',
      originalPrice: '$149/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-source data integration',
        'Advanced filtering and segmentation',
        'Mobile-responsive design',
        'API access for custom integrations',
        'White-label options',
        '24/7 customer support'
      ],
      category: 'Analytics',
      popular: true,
      new: false,
      icon: BarChart,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Increase revenue by 25% with data-driven insights',
        'Reduce reporting time by 80%',
        'Improve decision-making speed by 60%',
        'Identify new business opportunities',
        'Optimize marketing campaigns',
        'Track KPIs in real-time'
      ],
      useCases: [
        'E-commerce performance tracking',
        'Marketing campaign analysis',
        'Sales forecasting',
        'Customer behavior insights',
        'Financial reporting',
        'Operational efficiency monitoring'
      ],
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Mailchimp', 'Zapier', 'Slack'],
      pricing: {
        starter: { price: '$49/month', features: ['5 dashboards', 'Basic analytics', 'Email support'], users: 'Up to 5 users' },
        professional: { price: '$99/month', features: ['Unlimited dashboards', 'AI insights', 'Priority support', 'API access'], users: 'Up to 25 users', popular: true },
        enterprise: { price: '$199/month', features: ['Custom integrations', 'White-label', 'Dedicated support', 'Advanced security'], users: 'Unlimited users' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/analytics-pro'
      }
    },
    {
      id: 'zion-ai-chat',
      name: 'Zion AI Chat',
      description: 'Intelligent customer support chatbot with natural language processing and 24/7 availability.',
      longDescription: 'Revolutionize your customer service with our AI-powered chatbot that understands context, learns from interactions, and provides instant, accurate responses. Reduce support costs while improving customer satisfaction.',
      price: '$79/month',
      originalPrice: '$119/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context-aware conversations',
        'Integration with CRM systems',
        'Custom knowledge base',
        'Escalation to human agents',
        'Analytics and insights',
        'Custom branding',
        'API integration',
        'Mobile app support'
      ],
      category: 'Customer Service',
      popular: true,
      new: false,
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Reduce support costs by 40%',
        'Improve response time by 90%',
        'Increase customer satisfaction by 35%',
        'Handle 80% of queries automatically',
        'Available 24/7',
        'Multilingual support'
      ],
      useCases: [
        'E-commerce customer support',
        'SaaS product assistance',
        'Lead qualification',
        'FAQ automation',
        'Appointment booking',
        'Order tracking'
      ],
      integrations: ['Zendesk', 'Intercom', 'Freshdesk', 'Salesforce', 'HubSpot', 'Slack', 'Microsoft Teams', 'WhatsApp', 'Facebook Messenger', 'Telegram'],
      pricing: {
        starter: { price: '$39/month', features: ['100 conversations/month', 'Basic AI', 'Email support'], users: '1 website' },
        professional: { price: '$79/month', features: ['1000 conversations/month', 'Advanced AI', 'Priority support', 'Custom branding'], users: '3 websites', popular: true },
        enterprise: { price: '$149/month', features: ['Unlimited conversations', 'Custom training', 'Dedicated support', 'Advanced analytics'], users: 'Unlimited websites' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-chat'
      }
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity monitoring with AI-powered threat detection and automated response.',
      longDescription: 'Protect your business with our comprehensive cybersecurity solution that uses AI to detect threats, monitor vulnerabilities, and respond to incidents automatically. Stay compliant and secure with 24/7 monitoring.',
      price: '$149/month',
      originalPrice: '$199/month',
      features: [
        'AI-powered threat detection',
        '24/7 security monitoring',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance reporting',
        'Real-time alerts',
        'Security analytics dashboard',
        'Penetration testing',
        'Security training',
        'Incident forensics'
      ],
      category: 'Security',
      popular: true,
      new: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 85%',
        'Ensure compliance with regulations',
        'Minimize downtime from breaches',
        'Protect customer data',
        'Maintain business continuity'
      ],
      useCases: [
        'Small business protection',
        'E-commerce security',
        'Healthcare compliance',
        'Financial services',
        'Government agencies',
        'Educational institutions'
      ],
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Office 365', 'G Suite', 'Slack', 'PagerDuty', 'ServiceNow', 'Splunk', 'ELK Stack'],
      pricing: {
        starter: { price: '$79/month', features: ['Basic monitoring', 'Email alerts', 'Monthly reports'], users: 'Up to 10 devices' },
        professional: { price: '$149/month', features: ['Advanced AI detection', 'Real-time alerts', 'Priority support', 'Compliance reports'], users: 'Up to 50 devices', popular: true },
        enterprise: { price: '$299/month', features: ['Custom monitoring', 'Dedicated analyst', 'Penetration testing', 'Security training'], users: 'Unlimited devices' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/security-shield'
      }
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      longDescription: 'Ensure your business data is always protected with our enterprise-grade cloud backup solution. Automated backups, instant recovery, and advanced encryption keep your data safe and accessible.',
      price: '$89/month',
      originalPrice: '$129/month',
      features: [
        'Automated daily backups',
        'Instant data recovery',
        'End-to-end encryption',
        'Cross-platform support',
        'Version control',
        'Disaster recovery planning',
        'Compliance reporting',
        'Mobile app access',
        'API integration',
        '24/7 monitoring'
      ],
      category: 'Infrastructure',
      popular: false,
      new: true,
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Protect against data loss',
        'Ensure business continuity',
        'Meet compliance requirements',
        'Reduce recovery time by 95%',
        'Secure data storage',
        'Cost-effective solution'
      ],
      useCases: [
        'Business data backup',
        'Disaster recovery',
        'Compliance requirements',
        'Remote work support',
        'Data migration',
        'Long-term archiving'
      ],
      integrations: ['AWS S3', 'Google Cloud Storage', 'Microsoft Azure', 'Dropbox', 'OneDrive', 'Google Drive', 'Box', 'Slack', 'Teams', 'Zapier'],
      pricing: {
        starter: { price: '$39/month', features: ['100GB storage', 'Daily backups', 'Email support'], users: 'Up to 5 users' },
        professional: { price: '$89/month', features: ['1TB storage', 'Hourly backups', 'Priority support', 'API access'], users: 'Up to 25 users', popular: true },
        enterprise: { price: '$179/month', features: ['Unlimited storage', 'Real-time sync', 'Dedicated support', 'Custom retention'], users: 'Unlimited users' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/cloud-vault'
      }
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform with automated writing, editing, and optimization.',
      longDescription: 'Create high-quality content at scale with our AI-powered content studio. From blog posts to social media content, our platform helps you maintain consistent, engaging content across all channels.',
      price: '$69/month',
      originalPrice: '$99/month',
      features: [
        'AI content generation',
        'SEO optimization',
        'Multi-language support',
        'Brand voice training',
        'Content calendar',
        'Social media scheduling',
        'Plagiarism detection',
        'Readability analysis',
        'Image generation',
        'Video script creation'
      ],
      category: 'Content',
      popular: true,
      new: false,
      icon: FileText,
      color: 'from-indigo-500 to-purple-500',
      benefits: [
        'Increase content output by 300%',
        'Improve SEO rankings by 40%',
        'Reduce content costs by 60%',
        'Maintain consistent brand voice',
        'Scale content marketing',
        'Engage audiences better'
      ],
      useCases: [
        'Blog content creation',
        'Social media marketing',
        'Email campaigns',
        'Product descriptions',
        'Ad copy writing',
        'Press releases'
      ],
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Canva', 'Unsplash', 'Pexels', 'Google Docs', 'Notion'],
      pricing: {
        starter: { price: '$29/month', features: ['50 articles/month', 'Basic AI', 'Email support'], users: '1 user' },
        professional: { price: '$69/month', features: ['200 articles/month', 'Advanced AI', 'Priority support', 'Brand voice'], users: '5 users', popular: true },
        enterprise: { price: '$139/month', features: ['Unlimited articles', 'Custom AI training', 'Dedicated support', 'White-label'], users: 'Unlimited users' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/content-studio'
      }
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with predictive analytics, lead scoring, and automated workflows.',
      longDescription: 'Supercharge your sales with our AI-powered CRM that predicts customer behavior, scores leads automatically, and optimizes your sales process for maximum conversion.',
      price: '$119/month',
      originalPrice: '$159/month',
      features: [
        'AI lead scoring',
        'Predictive analytics',
        'Automated workflows',
        'Sales forecasting',
        'Customer segmentation',
        'Email automation',
        'Pipeline management',
        'Performance analytics',
        'Mobile app',
        'API integration'
      ],
      category: 'CRM',
      popular: true,
      new: false,
      icon: Users,
      color: 'from-teal-500 to-cyan-500',
      benefits: [
        'Increase sales by 35%',
        'Improve lead conversion by 50%',
        'Reduce sales cycle by 30%',
        'Automate repetitive tasks',
        'Better customer insights',
        'Higher team productivity'
      ],
      useCases: [
        'Lead management',
        'Sales pipeline tracking',
        'Customer relationship management',
        'Marketing automation',
        'Sales forecasting',
        'Team collaboration'
      ],
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho', 'Mailchimp', 'Slack', 'Microsoft Teams', 'Zoom', 'Calendly', 'Stripe'],
      pricing: {
        starter: { price: '$59/month', features: ['1000 contacts', 'Basic AI', 'Email support'], users: 'Up to 5 users' },
        professional: { price: '$119/month', features: ['10,000 contacts', 'Advanced AI', 'Priority support', 'Automation'], users: 'Up to 25 users', popular: true },
        enterprise: { price: '$239/month', features: ['Unlimited contacts', 'Custom AI', 'Dedicated support', 'Advanced analytics'], users: 'Unlimited users' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/crm-intelligence'
      }
    },
    {
      id: 'zion-data-sync',
      name: 'Zion Data Sync',
      description: 'Automated data integration platform that connects and synchronizes data across all your business tools.',
      longDescription: 'Eliminate data silos and ensure consistency across all your business applications with our powerful data integration platform. Connect any system and keep data synchronized in real-time.',
      price: '$99/month',
      originalPrice: '$139/month',
      features: [
        'Real-time data sync',
        'Pre-built connectors',
        'Custom integrations',
        'Data transformation',
        'Error handling',
        'Monitoring dashboard',
        'API management',
        'Webhook support',
        'Data validation',
        'Scheduled syncs'
      ],
      category: 'Integration',
      popular: false,
      new: true,
      icon: Database,
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Eliminate data silos',
        'Reduce manual data entry by 90%',
        'Improve data accuracy by 95%',
        'Save 20 hours per week',
        'Real-time data consistency',
        'Easy system integration'
      ],
      useCases: [
        'CRM to marketing automation',
        'E-commerce to accounting',
        'HR to payroll systems',
        'Inventory management',
        'Customer data unification',
        'Financial reporting'
      ],
      integrations: ['Salesforce', 'HubSpot', 'QuickBooks', 'Xero', 'Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Mailchimp', 'Zapier'],
      pricing: {
        starter: { price: '$49/month', features: ['5 integrations', 'Basic sync', 'Email support'], users: 'Up to 3 systems' },
        professional: { price: '$99/month', features: ['20 integrations', 'Real-time sync', 'Priority support', 'Custom fields'], users: 'Up to 10 systems', popular: true },
        enterprise: { price: '$199/month', features: ['Unlimited integrations', 'Custom connectors', 'Dedicated support', 'Advanced monitoring'], users: 'Unlimited systems' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/data-sync'
      }
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      description: 'AI-powered lead generation platform with automated nurturing and conversion optimization.',
      longDescription: 'Generate more qualified leads with our AI-powered platform that creates compelling lead magnets, automates nurturing sequences, and optimizes conversion rates for maximum ROI.',
      price: '$79/month',
      originalPrice: '$109/month',
      features: [
        'AI lead magnet creation',
        'Automated nurturing sequences',
        'A/B testing',
        'Lead scoring',
        'Conversion tracking',
        'Email templates',
        'Landing page builder',
        'Analytics dashboard',
        'CRM integration',
        'Mobile optimization'
      ],
      category: 'Marketing',
      popular: true,
      new: false,
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      benefits: [
        'Increase lead generation by 200%',
        'Improve conversion rates by 45%',
        'Reduce cost per lead by 60%',
        'Automate lead nurturing',
        'Better lead quality',
        'Higher ROI on marketing'
      ],
      useCases: [
        'E-book downloads',
        'Webinar registrations',
        'Free trial signups',
        'Newsletter subscriptions',
        'Demo requests',
        'Quote requests'
      ],
      integrations: ['HubSpot', 'Salesforce', 'Mailchimp', 'ConvertKit', 'ActiveCampaign', 'Zapier', 'Google Analytics', 'Facebook Ads', 'Google Ads', 'LinkedIn Ads'],
      pricing: {
        starter: { price: '$39/month', features: ['5 lead magnets', 'Basic automation', 'Email support'], users: 'Up to 1,000 leads' },
        professional: { price: '$79/month', features: ['Unlimited magnets', 'Advanced automation', 'Priority support', 'A/B testing'], users: 'Up to 10,000 leads', popular: true },
        enterprise: { price: '$159/month', features: ['Custom features', 'Dedicated support', 'Advanced analytics', 'White-label'], users: 'Unlimited leads' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/lead-magnet'
      }
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'AI-enhanced project management with intelligent resource allocation and progress tracking.',
      longDescription: 'Streamline your project management with AI-powered insights, automated resource allocation, and intelligent progress tracking. Keep projects on time and within budget.',
      price: '$89/month',
      originalPrice: '$119/month',
      features: [
        'AI resource allocation',
        'Progress tracking',
        'Risk assessment',
        'Time tracking',
        'Team collaboration',
        'Gantt charts',
        'Budget management',
        'Reporting dashboard',
        'Mobile app',
        'API integration'
      ],
      category: 'Productivity',
      popular: false,
      new: true,
      icon: Calendar,
      color: 'from-emerald-500 to-green-500',
      benefits: [
        'Complete projects 25% faster',
        'Reduce project costs by 20%',
        'Improve team productivity by 40%',
        'Better resource utilization',
        'Proactive risk management',
        'Real-time project visibility'
      ],
      useCases: [
        'Software development',
        'Marketing campaigns',
        'Event planning',
        'Construction projects',
        'Product launches',
        'Client projects'
      ],
      integrations: ['Slack', 'Microsoft Teams', 'Jira', 'Asana', 'Trello', 'Monday.com', 'Google Workspace', 'Office 365', 'Zoom', 'Calendly'],
      pricing: {
        starter: { price: '$39/month', features: ['5 projects', 'Basic AI', 'Email support'], users: 'Up to 10 users' },
        professional: { price: '$89/month', features: ['Unlimited projects', 'Advanced AI', 'Priority support', 'Advanced reporting'], users: 'Up to 50 users', popular: true },
        enterprise: { price: '$179/month', features: ['Custom features', 'Dedicated support', 'Advanced security', 'White-label'], users: 'Unlimited users' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/project-master'
      }
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Advanced email marketing automation with AI-powered personalization and optimization.',
      longDescription: 'Maximize your email marketing ROI with our AI-powered automation platform that personalizes content, optimizes send times, and delivers targeted campaigns that convert.',
      price: '$69/month',
      originalPrice: '$99/month',
      features: [
        'AI content personalization',
        'Send time optimization',
        'Behavioral triggers',
        'A/B testing',
        'Segmentation',
        'Drip campaigns',
        'Analytics dashboard',
        'Template library',
        'Mobile optimization',
        'Deliverability tools'
      ],
      category: 'Marketing',
      popular: true,
      new: false,
      icon: Mail,
      color: 'from-yellow-500 to-orange-500',
      benefits: [
        'Increase open rates by 35%',
        'Improve click-through rates by 50%',
        'Boost conversion rates by 40%',
        'Reduce unsubscribe rates by 30%',
        'Save 15 hours per week',
        'Better customer engagement'
      ],
      useCases: [
        'Welcome sequences',
        'Abandoned cart recovery',
        'Product recommendations',
        'Re-engagement campaigns',
        'Newsletter automation',
        'Event follow-ups'
      ],
      integrations: ['Shopify', 'WooCommerce', 'Salesforce', 'HubSpot', 'Zapier', 'Google Analytics', 'Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
      pricing: {
        starter: { price: '$29/month', features: ['5,000 emails/month', 'Basic automation', 'Email support'], users: 'Up to 1,000 contacts' },
        professional: { price: '$69/month', features: ['25,000 emails/month', 'Advanced automation', 'Priority support', 'A/B testing'], users: 'Up to 10,000 contacts', popular: true },
        enterprise: { price: '$139/month', features: ['Unlimited emails', 'Custom features', 'Dedicated support', 'Advanced analytics'], users: 'Unlimited contacts' }
      },
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/email-automation'
      }
    }
  ];

  const categories = [
    { name: 'All', count: microSaasProducts.length },
    { name: 'Analytics', count: microSaasProducts.filter(p => p.category === 'Analytics').length },
    { name: 'Customer Service', count: microSaasProducts.filter(p => p.category === 'Customer Service').length },
    { name: 'Security', count: microSaasProducts.filter(p => p.category === 'Security').length },
    { name: 'Infrastructure', count: microSaasProducts.filter(p => p.category === 'Infrastructure').length },
    { name: 'Content', count: microSaasProducts.filter(p => p.category === 'Content').length },
    { name: 'CRM', count: microSaasProducts.filter(p => p.category === 'CRM').length },
    { name: 'Integration', count: microSaasProducts.filter(p => p.category === 'Integration').length },
    { name: 'Marketing', count: microSaasProducts.filter(p => p.category === 'Marketing').length },
    { name: 'Productivity', count: microSaasProducts.filter(p => p.category === 'Productivity').length }
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace('$', '').replace('/month', '')) - parseInt(b.price.replace('$', '').replace('/month', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '').replace('/month', '')) - parseInt(a.price.replace('$', '').replace('/month', ''));
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popularity':
      default:
        return b.popular ? 1 : -1;
    }
  });

  const popularProducts = microSaasProducts.filter(product => product.popular);
  const newProducts = microSaasProducts.filter(product => product.new);

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Users' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
    { icon: Shield, value: '100%', label: 'Secure' },
    { icon: Zap, value: '5min', label: 'Setup Time' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs. Starting at $29/month." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, CRM, marketing automation, content creation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools" />
        <meta property="og:description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-micro-saas.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta name="twitter:description" content="50+ AI-Powered Business Tools for Every Need" />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-micro-saas.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion Tech Group Micro SaaS Solutions",
            "description": "Comprehensive suite of AI-powered micro SaaS solutions for businesses",
            "url": "https://ziontechgroup.com/micro-saas",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "Customer Service",
                "email": "kleber@ziontechgroup.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Trusted by 10,000+ Businesses Worldwide
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Micro <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">SaaS</span> Solutions
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges. 
                  Each tool delivers immediate value with minimal setup.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a 
                    href="#products" 
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                  >
                    Explore All Tools
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact" 
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Free Consultation
                    <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-cyan-400 mr-1" />
                    <span>10,000+ Users</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-green-400 mr-1" />
                    <span>99% Success Rate</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-purple-400 mr-1" />
                    <span>5min Setup</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products */}
          {popularProducts.length > 0 && (
            <section className="py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Featured <span className="text-cyan-400">Tools</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Our most popular micro SaaS solutions trusted by thousands of businesses
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {popularProducts.slice(0, 6).map((product, index) => (
                    <div
                      key={product.id}
                      className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <product.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex items-center gap-2">
                          {product.popular && (
                            <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </span>
                          )}
                          {product.new && (
                            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                              New
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 text-sm">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center mb-4">
                        <span className="text-2xl font-bold text-white">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-400 line-through ml-2">{product.originalPrice}</span>
                        )}
                        <span className="text-sm text-gray-400 ml-2">/month</span>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {product.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex gap-2">
                        <a 
                          href={`/contact?service=${product.id}`}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                        >
                          Get Started
                        </a>
                        <a 
                          href={`#${product.id}`}
                          className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* All Products Section */}
          <section id="products" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  All <span className="text-purple-400">Tools</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Browse our complete collection of micro SaaS solutions
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-12">
                <div className="flex-1">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search tools..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                >
                  {categories.map(category => (
                    <option key={category.name} value={category.name === 'All' ? 'all' : category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    id={product.id}
                    className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        {product.popular && (
                          <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                            Popular
                          </span>
                        )}
                        {product.new && (
                          <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                            New
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                    
                    <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-xl font-bold text-white">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">{product.originalPrice}</span>
                      )}
                      <span className="text-sm text-gray-400 ml-1">/month</span>
                    </div>

                    <ul className="space-y-1 mb-6">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2">
                      <a 
                        href={`/contact?service=${product.id}`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center py-2 px-3 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                      >
                        Get Started
                      </a>
                      <a 
                        href={`#${product.id}-details`}
                        className="px-3 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Details
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SearchIcon className="w-12 h-12 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-lg">No tools found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose Our <span className="text-cyan-400">Micro SaaS Tools</span>?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Each tool is designed to solve a specific problem with maximum efficiency and minimum complexity
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                  <p className="text-gray-300">
                    Get up and running in minutes with our intuitive setup process and comprehensive documentation. No technical expertise required.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Immediate ROI</h3>
                  <p className="text-gray-300">
                    See results from day one with tools designed to deliver immediate business value and efficiency gains. Most users see ROI within 30 days.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
                  <p className="text-gray-300">
                    Start small and scale up as your business grows with flexible pricing and feature options. No vendor lock-in, cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center backdrop-blur-sm">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Start with any of our micro SaaS tools and see immediate improvements in your business operations. 
                  Get a free consultation to find the perfect solution for your needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="tel:+13024640950" 
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                  >
                    Call Us Now
                    <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                
                <div className="text-center text-gray-400">
                  <p className="mb-2">
                    <strong>Phone:</strong> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a>
                  </p>
                  <p>
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </div>
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