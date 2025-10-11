'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, 
  Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, 
  FileText, Mail, Calendar, Package, Monitor, Eye, Mic, Code, Heart, 
  DollarSign, Box, Cpu, Link, Server, Phone, MapPin, Award, Rocket,
  Lock, Sparkles, Search, Filter, Grid, List, ExternalLink, Play,
  CreditCard, ShieldCheck, Headphones, Download, Upload, RefreshCw
} from 'lucide-react';
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
  benefits: string[];
  category: string;
  popular: boolean;
  new: boolean;
  icon: React.ComponentType<any>;
  demoUrl?: string;
  documentationUrl?: string;
  supportLevel: 'Basic' | 'Standard' | 'Premium' | 'Enterprise';
  setupTime: string;
  integrations: string[];
  freeTrial: boolean;
  freeTrialDays: number;
  monthlyActiveUsers: string;
  storage: string;
  apiCalls: string;
  supportChannels: string[];
  compliance: string[];
  languages: string[];
  mobileApp: boolean;
  webApp: boolean;
  apiAccess: boolean;
  whiteLabel: boolean;
  customBranding: boolean;
  sso: boolean;
  auditLogs: boolean;
  backup: boolean;
  uptime: string;
  dataRetention: string;
  securityFeatures: string[];
  pricingTiers: {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('popularity');

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
        'Multi-data source integration',
        'Advanced filtering and segmentation',
        'Mobile-responsive dashboards',
        'Scheduled reports via email',
        'Data export (CSV, PDF, Excel)',
        'White-label options'
      ],
      benefits: [
        'Increase decision-making speed by 300%',
        'Reduce manual reporting time by 80%',
        'Identify trends and opportunities automatically',
        'Improve business performance with data insights'
      ],
      category: 'Analytics',
      popular: true,
      new: false,
      icon: BarChart,
      demoUrl: 'https://ziontechgroup.com/demo/analytics',
      documentationUrl: 'https://docs.ziontechgroup.com/analytics',
      supportLevel: 'Standard',
      setupTime: '15 minutes',
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify', 'MySQL', 'PostgreSQL', 'MongoDB'],
      freeTrial: true,
      freeTrialDays: 14,
      monthlyActiveUsers: 'Up to 50 users',
      storage: '100GB',
      apiCalls: '100,000/month',
      supportChannels: ['Email', 'Live Chat', 'Phone'],
      compliance: ['GDPR', 'SOC 2', 'HIPAA'],
      languages: ['English', 'Spanish', 'French', 'German'],
      mobileApp: true,
      webApp: true,
      apiAccess: true,
      whiteLabel: true,
      customBranding: true,
      sso: true,
      auditLogs: true,
      backup: true,
      uptime: '99.9%',
      dataRetention: '2 years',
      securityFeatures: ['End-to-end encryption', 'Two-factor authentication', 'Role-based access control', 'IP whitelisting'],
      pricingTiers: [
        { name: 'Starter', price: '$49/month', features: ['Up to 10 users', '5 data sources', 'Basic dashboards'] },
        { name: 'Professional', price: '$99/month', features: ['Up to 50 users', 'Unlimited data sources', 'Advanced analytics', 'API access'], popular: true },
        { name: 'Enterprise', price: '$199/month', features: ['Unlimited users', 'Custom integrations', 'White-label', 'Priority support'] }
      ]
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel support.',
      longDescription: 'Deploy AI-powered chatbots across all your customer touchpoints. Our advanced NLP technology understands context, learns from interactions, and provides human-like responses that improve customer satisfaction.',
      price: '$79/month',
      features: [
        'Natural language processing',
        'Multi-channel deployment (Web, WhatsApp, Facebook, etc.)',
        'Sentiment analysis',
        'Knowledge base integration',
        'Escalation to human agents',
        'Conversation analytics',
        'Custom training on your data',
        'Multi-language support',
        'Voice and text capabilities',
        'Integration with CRM systems'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Provide 24/7 customer support',
        'Improve response time to under 1 second',
        'Increase customer satisfaction by 40%'
      ],
      category: 'Customer Service',
      popular: true,
      new: false,
      icon: MessageCircle,
      demoUrl: 'https://ziontechgroup.com/demo/chat-ai',
      documentationUrl: 'https://docs.ziontechgroup.com/chat-ai',
      supportLevel: 'Standard',
      setupTime: '30 minutes',
      integrations: ['Zendesk', 'Intercom', 'Slack', 'Microsoft Teams', 'Salesforce', 'HubSpot'],
      freeTrial: true,
      freeTrialDays: 7,
      monthlyActiveUsers: 'Up to 100 users',
      storage: '50GB',
      apiCalls: '50,000/month',
      supportChannels: ['Email', 'Live Chat'],
      compliance: ['GDPR', 'SOC 2'],
      languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Italian'],
      mobileApp: false,
      webApp: true,
      apiAccess: true,
      whiteLabel: true,
      customBranding: true,
      sso: true,
      auditLogs: true,
      backup: true,
      uptime: '99.9%',
      dataRetention: '1 year',
      securityFeatures: ['End-to-end encryption', 'Data anonymization', 'Secure API', 'Compliance monitoring'],
      pricingTiers: [
        { name: 'Basic', price: '$39/month', features: ['Up to 1,000 conversations', 'Basic NLP', 'Email support'] },
        { name: 'Professional', price: '$79/month', features: ['Up to 10,000 conversations', 'Advanced NLP', 'Multi-channel', 'Analytics'], popular: true },
        { name: 'Enterprise', price: '$149/month', features: ['Unlimited conversations', 'Custom training', 'Priority support', 'White-label'] }
      ]
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity monitoring with AI-powered threat detection and automated response.',
      longDescription: 'Protect your business with our comprehensive cybersecurity platform. Get real-time threat detection, automated incident response, and compliance monitoring all in one solution.',
      price: '$149/month',
      features: [
        '24/7 threat monitoring',
        'AI-powered threat detection',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance tracking (GDPR, HIPAA, SOC 2)',
        'Security analytics dashboard',
        'Real-time alerts',
        'Penetration testing',
        'Security training modules',
        'Incident response playbooks'
      ],
      benefits: [
        'Reduce security incidents by 85%',
        'Achieve compliance faster',
        'Lower cybersecurity insurance costs',
        'Protect customer data and reputation'
      ],
      category: 'Security',
      popular: true,
      new: false,
      icon: Shield,
      demoUrl: 'https://ziontechgroup.com/demo/security',
      documentationUrl: 'https://docs.ziontechgroup.com/security',
      supportLevel: 'Premium',
      setupTime: '1 hour',
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Slack', 'Microsoft Teams', 'Jira', 'ServiceNow'],
      freeTrial: true,
      freeTrialDays: 14,
      monthlyActiveUsers: 'Up to 100 users',
      storage: '200GB',
      apiCalls: 'Unlimited',
      supportChannels: ['Email', 'Live Chat', 'Phone', 'Dedicated Manager'],
      compliance: ['GDPR', 'SOC 2', 'HIPAA', 'PCI DSS', 'ISO 27001'],
      languages: ['English', 'Spanish', 'French', 'German'],
      mobileApp: true,
      webApp: true,
      apiAccess: true,
      whiteLabel: true,
      customBranding: true,
      sso: true,
      auditLogs: true,
      backup: true,
      uptime: '99.99%',
      dataRetention: '7 years',
      securityFeatures: ['Zero-trust architecture', 'Advanced threat hunting', 'Behavioral analytics', 'Machine learning detection'],
      pricingTiers: [
        { name: 'Essential', price: '$99/month', features: ['Basic monitoring', 'Email alerts', 'Monthly reports'] },
        { name: 'Professional', price: '$149/month', features: ['Advanced monitoring', 'Real-time alerts', 'Compliance tracking', 'Incident response'], popular: true },
        { name: 'Enterprise', price: '$299/month', features: ['Full monitoring', 'Dedicated manager', 'Custom playbooks', 'Priority support'] }
      ]
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform with automated writing, SEO optimization, and multi-format support.',
      longDescription: 'Create high-quality content at scale with our AI-powered content studio. Generate blog posts, social media content, product descriptions, and more with built-in SEO optimization and brand voice consistency.',
      price: '$59/month',
      features: [
        'AI content generation',
        'SEO optimization',
        'Brand voice training',
        'Multi-format support (Blog, Social, Email, etc.)',
        'Content calendar',
        'Collaboration tools',
        'Plagiarism detection',
        'Readability analysis',
        'Multi-language support',
        'Content performance tracking'
      ],
      benefits: [
        'Increase content production by 500%',
        'Improve SEO rankings by 40%',
        'Maintain consistent brand voice',
        'Reduce content creation costs by 70%'
      ],
      category: 'Content',
      popular: false,
      new: true,
      icon: FileText,
      demoUrl: 'https://ziontechgroup.com/demo/content-studio',
      documentationUrl: 'https://docs.ziontechgroup.com/content-studio',
      supportLevel: 'Basic',
      setupTime: '10 minutes',
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Google Docs'],
      freeTrial: true,
      freeTrialDays: 7,
      monthlyActiveUsers: 'Up to 25 users',
      storage: '25GB',
      apiCalls: '25,000/month',
      supportChannels: ['Email', 'Live Chat'],
      compliance: ['GDPR'],
      languages: ['English', 'Spanish', 'French', 'German', 'Portuguese'],
      mobileApp: true,
      webApp: true,
      apiAccess: true,
      whiteLabel: false,
      customBranding: true,
      sso: false,
      auditLogs: true,
      backup: true,
      uptime: '99.9%',
      dataRetention: '1 year',
      securityFeatures: ['Data encryption', 'Secure API', 'User authentication'],
      pricingTiers: [
        { name: 'Creator', price: '$29/month', features: ['Up to 1,000 words/month', 'Basic templates', 'Email support'] },
        { name: 'Professional', price: '$59/month', features: ['Up to 10,000 words/month', 'Advanced templates', 'SEO tools', 'Analytics'], popular: true },
        { name: 'Team', price: '$99/month', features: ['Unlimited words', 'Team collaboration', 'Custom templates', 'Priority support'] }
      ]
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with predictive analytics, automated lead scoring, and intelligent sales insights.',
      longDescription: 'Supercharge your sales with our AI-powered CRM. Get predictive lead scoring, automated follow-ups, sales forecasting, and intelligent insights that help your team close more deals.',
      price: '$89/month',
      features: [
        'Predictive lead scoring',
        'Automated follow-up sequences',
        'Sales forecasting',
        'Pipeline analytics',
        'Email tracking and analytics',
        'Meeting scheduling',
        'Document management',
        'Custom fields and workflows',
        'Mobile app',
        'Integration with 100+ tools'
      ],
      benefits: [
        'Increase sales conversion by 35%',
        'Reduce manual data entry by 90%',
        'Improve sales forecasting accuracy',
        'Boost team productivity by 50%'
      ],
      category: 'CRM',
      popular: true,
      new: false,
      icon: Users,
      demoUrl: 'https://ziontechgroup.com/demo/crm',
      documentationUrl: 'https://docs.ziontechgroup.com/crm',
      supportLevel: 'Standard',
      setupTime: '20 minutes',
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zapier', 'Gmail', 'Outlook', 'Slack'],
      freeTrial: true,
      freeTrialDays: 14,
      monthlyActiveUsers: 'Up to 50 users',
      storage: '100GB',
      apiCalls: '75,000/month',
      supportChannels: ['Email', 'Live Chat', 'Phone'],
      compliance: ['GDPR', 'SOC 2'],
      languages: ['English', 'Spanish', 'French', 'German'],
      mobileApp: true,
      webApp: true,
      apiAccess: true,
      whiteLabel: true,
      customBranding: true,
      sso: true,
      auditLogs: true,
      backup: true,
      uptime: '99.9%',
      dataRetention: '3 years',
      securityFeatures: ['End-to-end encryption', 'Two-factor authentication', 'Role-based access', 'Data backup'],
      pricingTiers: [
        { name: 'Starter', price: '$49/month', features: ['Up to 10 users', 'Basic CRM', 'Email integration'] },
        { name: 'Professional', price: '$89/month', features: ['Up to 50 users', 'AI features', 'Advanced analytics', 'API access'], popular: true },
        { name: 'Enterprise', price: '$149/month', features: ['Unlimited users', 'Custom fields', 'White-label', 'Dedicated support'] }
      ]
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'AI-powered project management with intelligent task allocation, resource optimization, and predictive analytics.',
      longDescription: 'Streamline your project management with AI that learns from your team\'s patterns. Get intelligent task allocation, resource optimization, and predictive insights that help you deliver projects on time and under budget.',
      price: '$69/month',
      features: [
        'AI task allocation',
        'Resource optimization',
        'Predictive project analytics',
        'Gantt charts and timelines',
        'Team collaboration tools',
        'Time tracking',
        'Budget management',
        'Risk assessment',
        'Progress reporting',
        'Integration with 50+ tools'
      ],
      benefits: [
        'Reduce project delivery time by 25%',
        'Improve resource utilization by 40%',
        'Increase project success rate by 30%',
        'Reduce project management overhead by 50%'
      ],
      category: 'Productivity',
      popular: false,
      new: false,
      icon: Calendar,
      demoUrl: 'https://ziontechgroup.com/demo/project-master',
      documentationUrl: 'https://docs.ziontechgroup.com/project-master',
      supportLevel: 'Standard',
      setupTime: '15 minutes',
      integrations: ['Asana', 'Trello', 'Jira', 'Monday.com', 'Slack', 'Microsoft Teams', 'Google Workspace'],
      freeTrial: true,
      freeTrialDays: 14,
      monthlyActiveUsers: 'Up to 100 users',
      storage: '50GB',
      apiCalls: '50,000/month',
      supportChannels: ['Email', 'Live Chat'],
      compliance: ['GDPR', 'SOC 2'],
      languages: ['English', 'Spanish', 'French', 'German'],
      mobileApp: true,
      webApp: true,
      apiAccess: true,
      whiteLabel: false,
      customBranding: true,
      sso: true,
      auditLogs: true,
      backup: true,
      uptime: '99.9%',
      dataRetention: '2 years',
      securityFeatures: ['Data encryption', 'User authentication', 'Access controls', 'Audit trails'],
      pricingTiers: [
        { name: 'Team', price: '$39/month', features: ['Up to 25 users', 'Basic project management', 'Email support'] },
        { name: 'Professional', price: '$69/month', features: ['Up to 100 users', 'AI features', 'Advanced analytics', 'API access'], popular: true },
        { name: 'Enterprise', price: '$129/month', features: ['Unlimited users', 'Custom workflows', 'White-label', 'Priority support'] }
      ]
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Advanced email marketing automation with AI-powered personalization and behavioral triggers.',
      longDescription: 'Create highly personalized email campaigns that convert. Our AI analyzes customer behavior to send the right message at the right time, increasing engagement and sales.',
      price: '$79/month',
      features: [
        'AI-powered personalization',
        'Behavioral trigger automation',
        'A/B testing',
        'Advanced segmentation',
        'Email template builder',
        'Deliverability optimization',
        'Performance analytics',
        'Landing page builder',
        'Lead scoring',
        'Integration with 200+ tools'
      ],
      benefits: [
        'Increase email open rates by 45%',
        'Boost click-through rates by 60%',
        'Improve conversion rates by 35%',
        'Reduce manual campaign management by 80%'
      ],
      category: 'Marketing',
      popular: true,
      new: false,
      icon: Mail,
      demoUrl: 'https://ziontechgroup.com/demo/email-automation',
      documentationUrl: 'https://docs.ziontechgroup.com/email-automation',
      supportLevel: 'Standard',
      setupTime: '20 minutes',
      integrations: ['Mailchimp', 'Constant Contact', 'HubSpot', 'Salesforce', 'Shopify', 'WooCommerce', 'Zapier'],
      freeTrial: true,
      freeTrialDays: 14,
      monthlyActiveUsers: 'Up to 50 users',
      storage: '100GB',
      apiCalls: '100,000/month',
      supportChannels: ['Email', 'Live Chat', 'Phone'],
      compliance: ['GDPR', 'CAN-SPAM', 'CASL'],
      languages: ['English', 'Spanish', 'French', 'German', 'Portuguese'],
      mobileApp: true,
      webApp: true,
      apiAccess: true,
      whiteLabel: true,
      customBranding: true,
      sso: true,
      auditLogs: true,
      backup: true,
      uptime: '99.9%',
      dataRetention: '2 years',
      securityFeatures: ['Data encryption', 'Secure API', 'Compliance monitoring', 'Data anonymization'],
      pricingTiers: [
        { name: 'Starter', price: '$39/month', features: ['Up to 5,000 contacts', 'Basic automation', 'Email support'] },
        { name: 'Professional', price: '$79/month', features: ['Up to 25,000 contacts', 'Advanced automation', 'AI features', 'Analytics'], popular: true },
        { name: 'Enterprise', price: '$149/month', features: ['Unlimited contacts', 'Custom features', 'White-label', 'Dedicated support'] }
      ]
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and supply chain optimization.',
      longDescription: 'Optimize your inventory with AI that predicts demand, prevents stockouts, and reduces carrying costs. Get automated reordering, supplier management, and real-time inventory tracking.',
      price: '$99/month',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Real-time inventory tracking',
        'Supplier management',
        'Cost optimization',
        'Multi-location support',
        'Barcode scanning',
        'Integration with POS systems',
        'Reporting and analytics',
        'Mobile app'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Prevent stockouts by 95%',
        'Improve cash flow by 25%',
        'Reduce manual counting by 90%'
      ],
      category: 'Inventory',
      popular: false,
      new: true,
      icon: Package,
      demoUrl: 'https://ziontechgroup.com/demo/inventory-smart',
      documentationUrl: 'https://docs.ziontechgroup.com/inventory-smart',
      supportLevel: 'Standard',
      setupTime: '30 minutes',
      integrations: ['Shopify', 'WooCommerce', 'QuickBooks', 'SAP', 'Oracle', 'NetSuite', 'Square'],
      freeTrial: true,
      freeTrialDays: 14,
      monthlyActiveUsers: 'Up to 25 users',
      storage: '50GB',
      apiCalls: '50,000/month',
      supportChannels: ['Email', 'Live Chat'],
      compliance: ['GDPR', 'SOC 2'],
      languages: ['English', 'Spanish', 'French', 'German'],
      mobileApp: true,
      webApp: true,
      apiAccess: true,
      whiteLabel: false,
      customBranding: true,
      sso: true,
      auditLogs: true,
      backup: true,
      uptime: '99.9%',
      dataRetention: '3 years',
      securityFeatures: ['Data encryption', 'Access controls', 'Audit trails', 'Data backup'],
      pricingTiers: [
        { name: 'Small Business', price: '$49/month', features: ['Up to 1,000 SKUs', 'Basic forecasting', 'Email support'] },
        { name: 'Professional', price: '$99/month', features: ['Up to 10,000 SKUs', 'Advanced AI', 'Multi-location', 'API access'], popular: true },
        { name: 'Enterprise', price: '$199/month', features: ['Unlimited SKUs', 'Custom integrations', 'White-label', 'Priority support'] }
      ]
    },
    {
      id: 'zion-performance-monitor',
      name: 'Zion Performance Monitor',
      description: 'Real-time application performance monitoring with AI-powered insights and automated alerting.',
      longDescription: 'Monitor your applications in real-time with AI that identifies performance issues before they impact users. Get detailed insights, automated alerting, and recommendations for optimization.',
      price: '$89/month',
      features: [
        'Real-time performance monitoring',
        'AI-powered anomaly detection',
        'Automated alerting',
        'Performance analytics',
        'Error tracking and debugging',
        'User experience monitoring',
        'Database performance monitoring',
        'Custom dashboards',
        'Integration with 50+ tools',
        'Mobile app monitoring'
      ],
      benefits: [
        'Reduce downtime by 70%',
        'Improve application performance by 40%',
        'Reduce debugging time by 60%',
        'Increase user satisfaction by 25%'
      ],
      category: 'Monitoring',
      popular: true,
      new: false,
      icon: Monitor,
      demoUrl: 'https://ziontechgroup.com/demo/performance-monitor',
      documentationUrl: 'https://docs.ziontechgroup.com/performance-monitor',
      supportLevel: 'Standard',
      setupTime: '10 minutes',
      integrations: ['New Relic', 'DataDog', 'Splunk', 'Slack', 'PagerDuty', 'Jira', 'GitHub'],
      freeTrial: true,
      freeTrialDays: 14,
      monthlyActiveUsers: 'Up to 50 users',
      storage: '100GB',
      apiCalls: 'Unlimited',
      supportChannels: ['Email', 'Live Chat', 'Phone'],
      compliance: ['GDPR', 'SOC 2'],
      languages: ['English', 'Spanish', 'French', 'German'],
      mobileApp: true,
      webApp: true,
      apiAccess: true,
      whiteLabel: true,
      customBranding: true,
      sso: true,
      auditLogs: true,
      backup: true,
      uptime: '99.99%',
      dataRetention: '1 year',
      securityFeatures: ['Data encryption', 'Secure API', 'Access controls', 'Compliance monitoring'],
      pricingTiers: [
        { name: 'Basic', price: '$49/month', features: ['Up to 5 applications', 'Basic monitoring', 'Email alerts'] },
        { name: 'Professional', price: '$89/month', features: ['Up to 25 applications', 'AI insights', 'Advanced analytics', 'API access'], popular: true },
        { name: 'Enterprise', price: '$179/month', features: ['Unlimited applications', 'Custom dashboards', 'White-label', 'Dedicated support'] }
      ]
    }
  ];

  const categories = [
    { name: 'All', value: 'all', count: microSaasProducts.length },
    { name: 'Analytics', value: 'Analytics', count: microSaasProducts.filter(p => p.category === 'Analytics').length },
    { name: 'Customer Service', value: 'Customer Service', count: microSaasProducts.filter(p => p.category === 'Customer Service').length },
    { name: 'Security', value: 'Security', count: microSaasProducts.filter(p => p.category === 'Security').length },
    { name: 'Content', value: 'Content', count: microSaasProducts.filter(p => p.category === 'Content').length },
    { name: 'CRM', value: 'CRM', count: microSaasProducts.filter(p => p.category === 'CRM').length },
    { name: 'Productivity', value: 'Productivity', count: microSaasProducts.filter(p => p.category === 'Productivity').length },
    { name: 'Marketing', value: 'Marketing', count: microSaasProducts.filter(p => p.category === 'Marketing').length },
    { name: 'Inventory', value: 'Inventory', count: microSaasProducts.filter(p => p.category === 'Inventory').length },
    { name: 'Monitoring', value: 'Monitoring', count: microSaasProducts.filter(p => p.category === 'Monitoring').length }
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseInt(a.price.replace('$', '').replace('/month', '')) - parseInt(b.price.replace('$', '').replace('/month', ''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      default:
        return 0;
    }
  });

  const popularProducts = microSaasProducts.filter(product => product.popular);
  const newProducts = microSaasProducts.filter(product => product.new);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs. Free trials available." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, CRM, email automation, inventory management" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
                🚀 50+ AI-Powered Micro SaaS Tools
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">SaaS</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Powerful, focused AI tools that solve specific business problems. 
              Each tool is designed to deliver immediate value with minimal setup and maximum impact.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Free Trials Available</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Quick Setup (10-30 min)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>No Long-term Contracts</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#products" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                Explore All Tools
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Micro SaaS Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        {popularProducts.length > 0 && (
          <section className="py-16 px-4 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Featured Tools</h2>
                <p className="text-xl text-gray-300">Our most popular micro SaaS solutions</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularProducts.slice(0, 6).map((product) => (
                  <div key={product.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex gap-2">
                        {product.popular && (
                          <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
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
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.category}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold text-white">{product.price}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">{product.originalPrice}</div>
                      )}
                    </div>
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={`/contact?product=${product.id}`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                      >
                        Get Started
                      </a>
                      {product.demoUrl && (
                        <a 
                          href={product.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                        >
                          <Play className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <section id="products" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'popularity')}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                </select>
                <div className="flex border border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-3 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-3 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {sortedProducts.map((product) => (
                <div key={product.id} className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group ${viewMode === 'list' ? 'p-8 flex' : 'p-8'}`}>
                  {viewMode === 'grid' ? (
                    <>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <product.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex gap-2">
                          {product.popular && (
                            <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
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
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">{product.category}</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-2xl font-bold text-white">{product.price}</div>
                        {product.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">{product.originalPrice}</div>
                        )}
                      </div>
                      <div className="space-y-2 mb-6">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href={`/contact?product=${product.id}`}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                        >
                          Get Started
                        </a>
                        {product.demoUrl && (
                          <a 
                            href={product.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                          >
                            <Play className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mr-6">
                        <product.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-gray-300 text-sm mb-2">{product.category}</p>
                          </div>
                          <div className="flex gap-2">
                            {product.popular && (
                              <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
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
                        <p className="text-gray-300 mb-4 leading-relaxed">{product.longDescription}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="space-y-2">
                            {product.features.slice(0, 4).map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                          <div className="space-y-2">
                            {product.benefits.slice(0, 4).map((benefit, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-300">
                                <TrendingUp className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-3xl font-bold text-white">{product.price}</div>
                          <div className="flex gap-2">
                            <a 
                              href={`/contact?product=${product.id}`}
                              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                            >
                              Get Started
                            </a>
                            {product.demoUrl && (
                              <a 
                                href={product.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                              >
                                <Play className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Micro SaaS Tools?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each tool is designed to solve a specific problem with maximum efficiency and minimum complexity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                <p className="text-gray-300">
                  Get up and running in 10-30 minutes with our intuitive setup process and comprehensive documentation.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Immediate ROI</h3>
                <p className="text-gray-300">
                  See results from day one with tools designed to deliver immediate business value and efficiency gains.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
                <p className="text-gray-300">
                  Start small and scale up as your business grows with flexible pricing and feature options.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  Built with enterprise-grade security, compliance, and data protection standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include free trials and no long-term contracts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$49<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Standard features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 block">
                  Start Free Trial
                </a>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 15 tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 block">
                  Start Free Trial
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    White-label options
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    SLA guarantee
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start with any of our micro SaaS tools and see immediate improvements in your business operations. 
                All tools come with free trials and no long-term commitments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 (302) 464-0950
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+1 (302) 464-0950</p>
                  </div>
                  <div>
                    <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                  <div>
                    <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;