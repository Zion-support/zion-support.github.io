'use client';
import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, ArrowRight, Star, Clock, Users, TrendingUp, Shield, Cloud, 
  BarChart3, MessageSquare, Target, FileText, Mail, Calendar, Package, 
  Monitor, Eye, Mic, Code, Heart, DollarSign, Box, Cpu, Link, Server, 
  Settings, Zap, Brain, Globe, Database, Smartphone, Lock, Settings2,
  Search, Filter, ChevronDown, Phone, MapPin, Mail as MailIcon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface MicroSaasProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  marketPrice: string;
  features: string[];
  benefits: string[];
  category: string;
  popular: boolean;
  icon: React.ComponentType<any>;
  users: string;
  setupTime: string;
  integrations: string[];
  support: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts: MicroSaasProduct[] = [
    // AI & Analytics Tools
    {
      id: '1',
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered insights, real-time dashboards, and predictive analytics for data-driven decision making.',
      price: '$199/month',
      marketPrice: '$500-1500/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard builder',
        'Advanced data connectors (100+ sources)',
        'Automated report generation',
        'Multi-tenant architecture',
        'API integration',
        'Mobile app access'
      ],
      benefits: [
        'Increase data-driven decisions by 300%',
        'Reduce reporting time by 80%',
        'Real-time business insights',
        'Custom dashboards for each team'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart3,
      users: 'Up to 50 users',
      setupTime: '5 minutes',
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Stripe', 'Shopify'],
      support: '24/7 chat & email'
    },
    {
      id: '2',
      name: 'Zion AI Chat Assistant',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and seamless human handoff capabilities.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'GPT-4 powered AI responses',
        'Multi-channel support (web, mobile, social)',
        'Advanced sentiment analysis',
        'Automated ticket routing',
        'Live agent handoff',
        'Multi-language support (50+ languages)',
        'Knowledge base integration',
        'Custom branding'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer availability',
        'Instant response times',
        'Improved customer satisfaction'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare,
      users: 'Unlimited conversations',
      setupTime: '10 minutes',
      integrations: ['Zendesk', 'Intercom', 'Slack', 'Microsoft Teams'],
      support: '24/7 priority support'
    },
    {
      id: '3',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring with AI-powered threat detection, automated incident response, and compliance tracking.',
      price: '$299/month',
      marketPrice: '$800-2000/month',
      features: [
        '24/7 threat monitoring',
        'AI-powered threat detection',
        'Automated incident response',
        'Compliance tracking (SOC2, GDPR, HIPAA)',
        'Security analytics dashboard',
        'Real-time alerts',
        'Vulnerability scanning',
        'Penetration testing'
      ],
      benefits: [
        'Reduce security incidents by 85%',
        'Automated threat response',
        'Compliance assurance',
        'Peace of mind with 24/7 monitoring'
      ],
      category: 'Security',
      popular: false,
      icon: Shield,
      users: 'Up to 100 devices',
      setupTime: '15 minutes',
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Slack', 'PagerDuty'],
      support: '24/7 emergency support'
    },
    {
      id: '4',
      name: 'Zion Cloud Vault',
      description: 'Enterprise-grade cloud backup and disaster recovery solution with AI-powered data deduplication and instant recovery.',
      price: '$99/month',
      marketPrice: '$200-500/month',
      features: [
        'Automated cloud backups',
        'AI-powered data deduplication',
        'Instant disaster recovery',
        'Cross-platform support',
        'Version control',
        'Encryption at rest and in transit',
        'Compliance ready',
        'Global data centers'
      ],
      benefits: [
        '99.9% data recovery guarantee',
        'Reduce storage costs by 70%',
        'Instant business continuity',
        'Zero data loss protection'
      ],
      category: 'Infrastructure',
      popular: false,
      icon: Cloud,
      users: 'Unlimited storage',
      setupTime: '5 minutes',
      integrations: ['AWS S3', 'Google Drive', 'Dropbox', 'OneDrive'],
      support: '24/7 technical support'
    },
    {
      id: '5',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation suite with automated writing, image generation, video editing, and social media management.',
      price: '$179/month',
      marketPrice: '$400-1000/month',
      features: [
        'AI writing assistant (50+ templates)',
        'Image generation (DALL-E integration)',
        'Video editing with AI',
        'Social media scheduling',
        'SEO optimization',
        'Brand voice training',
        'Content calendar',
        'Team collaboration'
      ],
      benefits: [
        'Create content 10x faster',
        'Consistent brand voice',
        'SEO-optimized content',
        'Multi-platform publishing'
      ],
      category: 'Content',
      popular: true,
      icon: FileText,
      users: 'Up to 20 users',
      setupTime: '2 minutes',
      integrations: ['WordPress', 'HubSpot', 'Buffer', 'Hootsuite'],
      support: 'Email & chat support'
    },
    {
      id: '6',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with intelligent lead scoring, automated follow-ups, and predictive analytics.',
      price: '$249/month',
      marketPrice: '$500-1500/month',
      features: [
        'AI-powered lead scoring',
        'Automated follow-up sequences',
        'Predictive analytics',
        'Pipeline management',
        'Email integration',
        'Calendar synchronization',
        'Custom fields and workflows',
        'Advanced reporting'
      ],
      benefits: [
        'Increase sales by 40%',
        'Automated lead nurturing',
        'Better conversion rates',
        'Complete sales visibility'
      ],
      category: 'Sales',
      popular: false,
      icon: Target,
      users: 'Up to 100 users',
      setupTime: '10 minutes',
      integrations: ['Gmail', 'Outlook', 'Slack', 'Zapier', 'Stripe'],
      support: 'Priority support'
    },
    {
      id: '7',
      name: 'Zion Data Sync',
      description: 'Advanced data integration platform that connects and synchronizes data across 200+ applications with real-time processing.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        '200+ pre-built connectors',
        'Real-time data synchronization',
        'Data transformation tools',
        'Error handling and monitoring',
        'Custom connector builder',
        'Data quality checks',
        'Scheduled sync options',
        'API access'
      ],
      benefits: [
        'Eliminate data silos',
        'Real-time data accuracy',
        'Reduce manual data entry by 90%',
        'Single source of truth'
      ],
      category: 'Data',
      popular: false,
      icon: Database,
      users: 'Unlimited connections',
      setupTime: '15 minutes',
      integrations: ['Salesforce', 'HubSpot', 'MySQL', 'PostgreSQL', 'MongoDB'],
      support: '24/7 technical support'
    },
    {
      id: '8',
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation platform with AI-powered prospect scoring, automated outreach, and conversion optimization.',
      price: '$129/month',
      marketPrice: '$300-800/month',
      features: [
        'AI-powered lead scoring',
        'Multi-channel lead capture',
        'Automated email sequences',
        'Landing page builder',
        'A/B testing tools',
        'CRM integration',
        'Advanced analytics',
        'Lead nurturing workflows'
      ],
      benefits: [
        'Generate 300% more qualified leads',
        'Automated lead nurturing',
        'Higher conversion rates',
        'Complete lead lifecycle management'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target,
      users: 'Up to 25 users',
      setupTime: '5 minutes',
      integrations: ['HubSpot', 'Salesforce', 'Mailchimp', 'Zapier'],
      support: 'Email support'
    },
    {
      id: '9',
      name: 'Zion Project Master',
      description: 'AI-enhanced project management with intelligent task allocation, resource optimization, and predictive project analytics.',
      price: '$89/month',
      marketPrice: '$200-600/month',
      features: [
        'AI task prioritization',
        'Resource optimization',
        'Gantt charts and timelines',
        'Team collaboration tools',
        'Time tracking',
        'Budget management',
        'Risk assessment',
        'Progress analytics'
      ],
      benefits: [
        'Complete projects 30% faster',
        'Better resource utilization',
        'Reduced project risks',
        'Improved team productivity'
      ],
      category: 'Productivity',
      popular: false,
      icon: Calendar,
      users: 'Up to 50 users',
      setupTime: '3 minutes',
      integrations: ['Slack', 'Microsoft Teams', 'Google Workspace', 'Jira'],
      support: 'Chat support'
    },
    {
      id: '10',
      name: 'Zion Email Automation',
      description: 'AI-powered email marketing platform with advanced segmentation, personalization, and automated campaign optimization.',
      price: '$79/month',
      marketPrice: '$200-500/month',
      features: [
        'AI-powered segmentation',
        'Advanced personalization',
        'Automated campaign optimization',
        'A/B testing',
        'Email templates (100+)',
        'Deliverability optimization',
        'Advanced analytics',
        'Compliance tools'
      ],
      benefits: [
        'Increase email open rates by 50%',
        'Automated campaign optimization',
        'Better deliverability',
        'Comprehensive analytics'
      ],
      category: 'Marketing',
      popular: false,
      icon: Mail,
      users: 'Up to 10,000 contacts',
      setupTime: '2 minutes',
      integrations: ['Shopify', 'WooCommerce', 'Stripe', 'Zapier'],
      support: 'Email support'
    },
    {
      id: '11',
      name: 'Zion Inventory Smart',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and supply chain optimization.',
      price: '$159/month',
      marketPrice: '$400-1000/month',
      features: [
        'AI demand forecasting',
        'Automated reordering',
        'Multi-location inventory',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization',
        'Real-time tracking',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Eliminate stockouts',
        'Optimize supply chain',
        'Real-time inventory visibility'
      ],
      category: 'Operations',
      popular: false,
      icon: Package,
      users: 'Up to 30 users',
      setupTime: '10 minutes',
      integrations: ['Shopify', 'WooCommerce', 'QuickBooks', 'SAP'],
      support: 'Phone & email support'
    },
    {
      id: '12',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial reporting.',
      price: '$49/month',
      marketPrice: '$100-300/month',
      features: [
        'AI-powered invoice generation',
        'Automated recurring billing',
        'Multi-currency support',
        'Payment tracking',
        'Tax calculation',
        'Client portal',
        'Financial reporting',
        'Payment reminders'
      ],
      benefits: [
        'Save 90% invoice creation time',
        'Reduce payment delays',
        'Automated follow-ups',
        'Professional invoices'
      ],
      category: 'Finance',
      popular: true,
      icon: DollarSign,
      users: 'Up to 20 users',
      setupTime: '1 minute',
      integrations: ['QuickBooks', 'Xero', 'Stripe', 'PayPal'],
      support: 'Email support'
    },
    {
      id: '13',
      name: 'Zion Workflow Automation',
      description: 'Intelligent business process automation with 500+ integrations, custom workflows, and AI-powered decision making.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        '500+ app integrations',
        'Visual workflow builder',
        'AI decision making',
        'Custom triggers and actions',
        'Error handling',
        'Workflow analytics',
        'Team collaboration',
        'API access'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce human errors',
        'Increase efficiency',
        'Scale business processes'
      ],
      category: 'Automation',
      popular: true,
      icon: Settings,
      users: 'Up to 50 users',
      setupTime: '5 minutes',
      integrations: ['Slack', 'Gmail', 'Salesforce', 'HubSpot', 'Zapier'],
      support: '24/7 chat support'
    },
    {
      id: '14',
      name: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered insights, alerting, and performance optimization.',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'Real-time monitoring',
        'AI-powered insights',
        'Custom dashboards',
        'Automated alerting',
        'Performance optimization',
        'Uptime monitoring',
        'Error tracking',
        'Capacity planning'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Proactive issue detection',
        'Performance optimization',
        'Reduced downtime'
      ],
      category: 'Infrastructure',
      popular: false,
      icon: Monitor,
      users: 'Unlimited applications',
      setupTime: '3 minutes',
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Slack', 'PagerDuty'],
      support: '24/7 technical support'
    },
    {
      id: '15',
      name: 'Zion Compliance Manager',
      description: 'Automated compliance management for SOC2, GDPR, HIPAA, and other regulations with AI-powered risk assessment.',
      price: '$299/month',
      marketPrice: '$600-2000/month',
      features: [
        'Multi-regulation support',
        'AI risk assessment',
        'Automated compliance checks',
        'Document management',
        'Audit trails',
        'Policy templates',
        'Training modules',
        'Reporting dashboard'
      ],
      benefits: [
        'Automated compliance monitoring',
        'Reduce audit preparation time by 70%',
        'Stay current with regulations',
        'Risk mitigation'
      ],
      category: 'Compliance',
      popular: false,
      icon: Shield,
      users: 'Up to 100 users',
      setupTime: '20 minutes',
      integrations: ['Slack', 'Microsoft Teams', 'Google Workspace'],
      support: 'Priority support'
    },
    {
      id: '16',
      name: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content creation, optimal posting times, and performance analytics.',
      price: '$69/month',
      marketPrice: '$150-400/month',
      features: [
        'AI content generation',
        'Optimal posting times',
        'Multi-platform posting',
        'Hashtag optimization',
        'Engagement analytics',
        'Content calendar',
        'Team collaboration',
        'Brand monitoring'
      ],
      benefits: [
        'Increase engagement by 200%',
        'Save 5 hours per week',
        'Better content performance',
        'Consistent brand presence'
      ],
      category: 'Marketing',
      popular: false,
      icon: Globe,
      users: 'Up to 15 users',
      setupTime: '2 minutes',
      integrations: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'TikTok'],
      support: 'Email support'
    },
    {
      id: '17',
      name: 'Zion AI Video Editor',
      description: 'AI-powered video editing with automatic cuts, transitions, and effects for professional-quality content creation.',
      price: '$129/month',
      marketPrice: '$300-800/month',
      features: [
        'AI automatic editing',
        'Smart transitions',
        'Auto color correction',
        'Background removal',
        'Text and subtitle generation',
        'Music synchronization',
        'Export in multiple formats',
        'Cloud storage integration'
      ],
      benefits: [
        'Create videos 10x faster',
        'Professional quality output',
        'No editing skills required',
        'Consistent brand style'
      ],
      category: 'Content',
      popular: false,
      icon: Eye,
      users: 'Up to 10 users',
      setupTime: '1 minute',
      integrations: ['YouTube', 'Vimeo', 'Google Drive', 'Dropbox'],
      support: 'Email support'
    },
    {
      id: '18',
      name: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with 100+ languages, context-aware translation, and real-time communication support.',
      price: '$89/month',
      marketPrice: '$200-500/month',
      features: [
        '100+ language support',
        'Context-aware translation',
        'Real-time translation',
        'Document translation',
        'Website translation',
        'API integration',
        'Custom glossaries',
        'Quality assurance'
      ],
      benefits: [
        'Break language barriers',
        'Maintain brand consistency',
        'Real-time communication',
        'Professional translations'
      ],
      category: 'Communication',
      popular: false,
      icon: Globe,
      users: 'Unlimited translations',
      setupTime: '1 minute',
      integrations: ['WordPress', 'Shopify', 'Slack', 'Microsoft Teams'],
      support: 'Email support'
    },
    {
      id: '19',
      name: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated bug detection, security analysis, and performance optimization suggestions.',
      price: '$199/month',
      marketPrice: '$400-1000/month',
      features: [
        'Automated bug detection',
        'Security vulnerability scanning',
        'Performance optimization',
        'Code quality metrics',
        'Best practice suggestions',
        'Multi-language support',
        'Team collaboration',
        'CI/CD integration'
      ],
      benefits: [
        'Reduce bugs by 60%',
        'Improve code quality',
        'Faster development cycles',
        'Better security posture'
      ],
      category: 'Development',
      popular: false,
      icon: Code,
      users: 'Up to 25 developers',
      setupTime: '5 minutes',
      integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Jenkins', 'CircleCI'],
      support: '24/7 technical support'
    },
    {
      id: '20',
      name: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with AI-powered insights, sentiment analysis, and predictive customer behavior modeling.',
      price: '$179/month',
      marketPrice: '$400-1200/month',
      features: [
        'AI-powered customer insights',
        'Sentiment analysis',
        'Predictive behavior modeling',
        'Customer journey mapping',
        'Churn prediction',
        'Lifetime value analysis',
        'Segmentation tools',
        'Custom dashboards'
      ],
      benefits: [
        'Increase customer retention by 40%',
        'Better customer understanding',
        'Predictive insights',
        'Data-driven decisions'
      ],
      category: 'Analytics',
      popular: false,
      icon: Users,
      users: 'Up to 50 users',
      setupTime: '10 minutes',
      integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom'],
      support: 'Priority support'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: microSaasProducts.length },
    { id: 'Analytics', name: 'Analytics', count: microSaasProducts.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: microSaasProducts.filter(p => p.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: microSaasProducts.filter(p => p.category === 'Security').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: microSaasProducts.filter(p => p.category === 'Infrastructure').length },
    { id: 'Content', name: 'Content', count: microSaasProducts.filter(p => p.category === 'Content').length },
    { id: 'Sales', name: 'Sales', count: microSaasProducts.filter(p => p.category === 'Sales').length },
    { id: 'Data', name: 'Data', count: microSaasProducts.filter(p => p.category === 'Data').length },
    { id: 'Marketing', name: 'Marketing', count: microSaasProducts.filter(p => p.category === 'Marketing').length },
    { id: 'Productivity', name: 'Productivity', count: microSaasProducts.filter(p => p.category === 'Productivity').length },
    { id: 'Finance', name: 'Finance', count: microSaasProducts.filter(p => p.category === 'Finance').length },
    { id: 'Automation', name: 'Automation', count: microSaasProducts.filter(p => p.category === 'Automation').length },
    { id: 'Compliance', name: 'Compliance', count: microSaasProducts.filter(p => p.category === 'Compliance').length },
    { id: 'Communication', name: 'Communication', count: microSaasProducts.filter(p => p.category === 'Communication').length },
    { id: 'Development', name: 'Development', count: microSaasProducts.filter(p => p.category === 'Development').length },
    { id: 'Operations', name: 'Operations', count: microSaasProducts.filter(p => p.category === 'Operations').length }
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularProducts = microSaasProducts.filter(product => product.popular);

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'micro_saas_phone_number'
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs. Starting at $49/month." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, CRM, automation" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="50+ AI-powered micro SaaS tools to transform your business. Analytics, automation, security, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                🚀 50+ Ready-to-Use AI Tools
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">SaaS</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Powerful, focused AI tools that solve specific business problems. Each tool is designed to deliver 
                immediate value with minimal setup. No complex configurations, no long-term commitments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
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
                  <span>10,000+ Active Users</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-400 mr-1" />
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-purple-400 mr-1" />
                  <span>5-Minute Setup</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        {popularProducts.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Featured <span className="text-cyan-400">Tools</span>
                </h2>
                <p className="text-xl text-gray-300">Our most popular micro SaaS solutions</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularProducts.map((product) => (
                  <div key={product.id} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                          Popular
                        </span>
                        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                        <span className="text-gray-400 text-sm line-through">{product.marketPrice}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {product.users} • {product.setupTime} setup
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {product.features.length > 3 && (
                        <div className="text-gray-400 text-sm">
                          +{product.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                      >
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a
                        href={`/contact?product=${product.name}`}
                        className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
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

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-lg"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-lg"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                All <span className="text-cyan-400">Micro SaaS</span> Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      {product.popular && (
                        <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                          Popular
                        </span>
                      )}
                      <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-gray-400 text-sm line-through">{product.marketPrice}</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {product.users} • {product.setupTime} setup
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-300 group-hover:text-gray-200 transition-colors">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {product.features.length > 3 && (
                      <div className="text-gray-400 text-xs">
                        +{product.features.length - 3} more features
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center group-hover:scale-105"
                    >
                      Start Free Trial
                    </a>
                    <a
                      href={`/contact?product=${product.name}`}
                      className="w-full border border-white/20 text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="text-cyan-400">Micro SaaS</span> Tools?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each tool is designed to solve a specific problem with maximum efficiency and minimal complexity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                <p className="text-gray-300">
                  Get up and running in minutes with our intuitive setup process and comprehensive documentation.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Immediate ROI</h3>
                <p className="text-gray-300">
                  See results from day one with tools designed to deliver immediate business value and efficiency gains.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
                <p className="text-gray-300">
                  Start small and scale up as your business grows with flexible pricing and feature options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start with any of our micro SaaS tools and see immediate improvements in your business operations. 
                No long-term commitments, cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free 14-day trial • ✓ No credit card required • ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;